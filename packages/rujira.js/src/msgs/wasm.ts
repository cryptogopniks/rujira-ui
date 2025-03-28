import { TransactionRequest } from "ethers";
import { Network } from "../network";
import { EncodeObject } from "../signers/cosmos/proto-signing";
import { Coin } from "../signers/cosmos/types/cosmos/base/v1beta1/coin";
import {
  MsgInstantiateContract,
  MsgStoreCode,
} from "../signers/cosmos/types/cosmwasm/wasm/v1/tx";
import { UtxoTx } from "../signers/utxo";
import { Msg } from "./msg";

export class MsgStore implements Msg {
  constructor(private wasmByteCode: Uint8Array) {}
  toTransactionRequest(): Promise<{
    request: TransactionRequest;
    chainId: string;
  }> {
    throw new Error("Method not implemented.");
  }
  toUtxoTx(): Promise<{ tx: UtxoTx; fee: bigint }> {
    throw new Error("Method not implemented.");
  }

  async toEncodeObject(account: {
    address: string;
    network: Network;
  }): Promise<{ msg: EncodeObject; memo: string }> {
    if (account.network !== Network.Thorchain)
      throw new Error(`MsgStoreCode only available on Rujira`);

    return {
      msg: {
        typeUrl: MsgStoreCode.typeUrl,
        value: MsgStoreCode.fromPartial({
          sender: account.address,
          wasmByteCode: this.wasmByteCode,
        }),
      },
      memo: "",
    };
  }
}

const defaultEncoder = <T>(x: T) => Buffer.from(JSON.stringify(x));

export class MsgInstantiate<T> implements Msg {
  constructor(
    private codeId: bigint,
    private msg: T,
    private label: string,
    private funds?: Coin[],
    private admin?: string,

    private encoder: (v: T) => Uint8Array = defaultEncoder
  ) {}
  toTransactionRequest(): Promise<{
    request: TransactionRequest;
    chainId: string;
  }> {
    throw new Error("Method not implemented.");
  }
  toUtxoTx(): Promise<{ tx: UtxoTx; fee: bigint }> {
    throw new Error("Method not implemented.");
  }

  async toEncodeObject(account: {
    address: string;
    network: Network;
  }): Promise<{ msg: EncodeObject; memo: string }> {
    if (account.network !== Network.Thorchain)
      throw new Error(`MsgInstantiateContract only available on Rujira`);

    return {
      msg: {
        typeUrl: MsgInstantiateContract.typeUrl,
        value: MsgInstantiateContract.fromPartial({
          sender: account.address,
          codeId: this.codeId,
          msg: this.encoder(this.msg),
          funds: this.funds,
          label: this.label,
          admin: this.admin,
        }),
      },
      memo: "",
    };
  }
}
