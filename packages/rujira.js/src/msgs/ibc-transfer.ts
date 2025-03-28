import { TransactionRequest } from "ethers";
import { Network } from "../network";
import { EncodeObject } from "../signers/cosmos/proto-signing";
import { MsgTransfer } from "../signers/cosmos/types/ibc/applications/transfer/v1/tx";
import { UtxoTx } from "../signers/utxo";
import { Msg } from "./msg";

export class MsgIbcTransfer implements Msg {
  constructor(
    private msg: Omit<
      MsgTransfer,
      "sender" | "timeoutHeight" | "timeoutTimestamp" | "memo" | "sourcePort"
    >
  ) {}
  toUtxoTx(): Promise<{ tx: UtxoTx; fee: bigint }> {
    throw new Error("toUtxoTx not implemented.");
  }

  async toEncodeObject(account: {
    network: Network;
    address: string;
  }): Promise<{ msg: EncodeObject; memo: string }> {
    const value = {
      sender: account.address,
      timeoutTimestamp: BigInt(new Date().getTime() + 5 * 60 * 1000) * 1000000n,
      sourcePort: "transfer",
      ...this.msg,
    };
    const msg = {
      typeUrl: MsgTransfer.typeUrl,
      value,
    };
    return { msg, memo: "" };
  }

  toTransactionRequest(): Promise<{
    request: TransactionRequest;
    chainId: string;
  }> {
    throw new Error(`TransactionRequest not supported`);
  }

  toMemo(): string {
    throw new Error(`toMemo not implemented`);
  }
}
