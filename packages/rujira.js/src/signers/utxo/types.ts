export interface Input {
  txid: string;
  vout: bigint;
  scriptPubKey: string;
}

export interface Output {
  address: string;
  value: bigint;
}

export interface UtxoTx {
  inputs: Input[];
  outputs: Output[];
}
