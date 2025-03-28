import { Buffer } from "buffer";
import { TransactionRequest } from "ethers";
import { InboundAddress } from "../accounts";
import { Asset } from "../asset";
import { IncorrectNetworkError } from "../errors";
import { Network } from "../network";
import { EncodeObject } from "../signers/cosmos/proto-signing";
import { Coin } from "../signers/cosmos/types/cosmos/base/v1beta1/coin";
import {
  MsgExecuteContract,
  MsgMigrateContract,
} from "../signers/cosmos/types/cosmwasm/wasm/v1/tx";
import { UtxoTx } from "../signers/utxo";
import { MsgDeposit } from "./deposit";
import { Msg } from "./msg";

const defaultEncoder = <T>(x: T) => Buffer.from(JSON.stringify(x));

export class MsgExec<T> extends MsgDeposit implements Msg {
  constructor(
    asset: Asset,
    amount: bigint,
    private contractAddress: string,
    private msg: T,
    private encoder: (v: T) => Uint8Array = defaultEncoder
  ) {
    super(asset, amount);
  }

  async toEncodeObject(
    account: { address: string; network: Network },
    inboundAddress?: InboundAddress
  ): Promise<{ msg: EncodeObject; memo: string }> {
    if (account.network === Network.Thorchain) {
      const denom = this.asset?.variants?.native?.denom;
      if (!denom)
        throw new Error(`Native denom for ${this.asset.asset} not provided`);

      return {
        msg: {
          typeUrl: MsgExecuteContract.typeUrl,
          value: {
            sender: account.address,
            contract: this.contractAddress,
            msg: this.encoder(this.msg),
            funds:
              this.amount === 0n
                ? []
                : [{ denom, amount: this.amount.toString() }],
          },
        },
        memo: "",
      };
    }

    return super.toEncodeObject(account, inboundAddress);
  }

  toMemo(): string {
    const parts = [
      `x`,
      this.contractAddress,
      Buffer.from(this.encoder(this.msg)).toString("hex"),
    ];
    return parts.join(":");
  }
}

export class MsgExecute<T> implements Msg {
  constructor(
    private coins: Coin[],
    private contractAddress: string,
    private msg: T,
    private encoder: (v: T) => Uint8Array = defaultEncoder
  ) {}
  toTransactionRequest(): Promise<{
    request: TransactionRequest;
    chainId: string;
  }> {
    throw new Error("toTransactionRequest not supported");
  }
  toUtxoTx(): Promise<{ tx: UtxoTx; fee: bigint }> {
    throw new Error("toUtxoTx not supported");
  }

  async toEncodeObject(account: {
    address: string;
    network: Network;
  }): Promise<{ msg: EncodeObject; memo: string }> {
    if (account.network !== Network.Thorchain)
      throw new IncorrectNetworkError(account.network, Network.Thorchain);

    return {
      msg: {
        typeUrl: MsgExecuteContract.typeUrl,
        value: {
          sender: account.address,
          contract: this.contractAddress,
          msg: this.encoder(this.msg),
          funds: this.coins,
        },
      },
      memo: "",
    };
  }

  toMemo(): string {
    throw new Error("toMemo not supported");
  }
}

export class MsgMigrate<T> implements Msg {
  constructor(
    private coins: Coin[],
    private contractAddress: string,
    private msg: T,
    private codeId: bigint,
    private encoder: (v: T) => Uint8Array = defaultEncoder
  ) {}
  toTransactionRequest(): Promise<{
    request: TransactionRequest;
    chainId: string;
  }> {
    throw new Error("toTransactionRequest not supported");
  }
  toUtxoTx(): Promise<{ tx: UtxoTx; fee: bigint }> {
    throw new Error("toUtxoTx not supported");
  }

  async toEncodeObject(account: {
    address: string;
    network: Network;
  }): Promise<{ msg: EncodeObject; memo: string }> {
    if (account.network !== Network.Thorchain)
      throw new IncorrectNetworkError(account.network, Network.Thorchain);

    return {
      msg: {
        typeUrl: MsgMigrateContract.typeUrl,
        value: {
          sender: account.address,
          contract: this.contractAddress,
          msg: this.encoder(this.msg),
          funds: this.coins,
          codeId: this.codeId,
        },
      },
      memo: "",
    };
  }

  toMemo(): string {
    throw new Error("toMemo not supported");
  }
}
