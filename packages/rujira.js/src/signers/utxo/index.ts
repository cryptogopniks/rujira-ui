export * from "./types";

import { UtxoTx } from "./types";

const FEE_INPUT = 148n;
// const FEE_INPUT_SEGWIT = 68;
const FEE_OUTPUT = 34n;
// const FEE_OUTPUT_SEGWIT = 31;

export class UtxoQueryClient {
  private cache: Map<string, { data: any; timestamp: number }>;
  constructor(
    private baseUrl: string,
    private expiryTime = 5000
  ) {
    this.cache = new Map();
  }

  async utxos(address: string) {
    const now = Date.now();
    const res = this.cache.get(address);
    if (res) {
      const { data, timestamp } = res;
      if (now - timestamp < this.expiryTime) {
        return data;
      }
    }

    const response = await fetch(`${this.baseUrl}/unspent?active=${address}`);
    const data = await response.json();
    this.cache.set(address, { data, timestamp: now });

    return data;
  }
}

export class UtxoSigningClient {
  constructor(private queryClient: UtxoQueryClient) {}

  async createRawTransaction(
    senderAddress: string,
    recipientAddress: string,
    amount: bigint
  ): Promise<{ tx: UtxoTx; fee: bigint }> {
    // Fetch UTXOs from Blockchain Explorer
    const res = await this.queryClient.utxos(senderAddress);
    const utxos = res.unspent_outputs;

    // Assume return txout
    let fee = FEE_OUTPUT * 2n;
    let totalInput = 0n;
    const inputs = [];

    for (const utxo of utxos) {
      totalInput += BigInt(utxo.value);
      inputs.push({
        txid: utxo.tx_hash_big_endian,
        vout: utxo.tx_output_n,
        scriptPubKey: utxo.script, // Required for signing
      });
      fee += FEE_INPUT;

      if (totalInput >= amount + fee) break; // Stop when enough UTXOs are gathered
    }

    if (totalInput < amount + fee) {
      throw new Error("Insufficient Funds");
    }

    // Create outputs
    const outputs = [
      { address: recipientAddress, value: amount }, // Sending BTC
    ];

    // Change output (return leftover BTC back to sender)
    const change = totalInput - (amount + fee);
    if (change > 0) {
      outputs.push({ address: senderAddress, value: change });
    }

    return { tx: { inputs, outputs }, fee };
  }
}
