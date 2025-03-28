import { fromBech32 } from "@cosmjs/encoding";
import { TransactionRequest } from "ethers";
import { InboundAddress } from "../accounts";
import { Asset } from "../asset";
import { IncorrectNetworkError } from "../errors";
import { Network } from "../network";
import { EncodeObject } from "../signers/cosmos/proto-signing";
import { Asset as AssetProto } from "../signers/cosmos/types/thorchain/common/common";
import { MsgDeposit as MsgDepositProto } from "../signers/cosmos/types/thorchain/types/msg_deposit";
import { UtxoTx } from "../signers/utxo";
import { MsgDeposit } from "./deposit";
import { Msg } from "./msg";

export class MsgSecureDeposit extends MsgDeposit implements Msg {
  constructor(
    asset: Asset,
    amount: bigint,
    private targetAddress: string
  ) {
    super(asset, amount);
  }

  toMemo(): string {
    const parts = [`secure+`, this.targetAddress];
    return parts.join(":");
  }
}

export class MsgSecureWithdraw implements Msg {
  constructor(
    private asset: Asset,
    private amount: bigint,
    private targetAddress: string
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

  async toEncodeObject(
    account: {
      network: Network;
      address: string;
    },
    _inboundAddress?: InboundAddress
  ): Promise<{ msg: EncodeObject; memo: string }> {
    if (account.network !== Network.Thorchain) {
      throw new IncorrectNetworkError(account.network, this.asset.chain);
    }
    if (this.asset.type !== "SECURED") {
      throw new Error("Only Secured Assets can be withdrawn");
    }

    const [chain, symbol] = this.asset.asset.split("-");
    const [ticker] = symbol.split("-");

    return {
      msg: {
        typeUrl: "/types.MsgDeposit",
        value: MsgDepositProto.fromPartial({
          signer: fromBech32(account.address).data,
          memo: this.toMemo(),
          coins: [
            {
              asset: AssetProto.fromPartial({
                chain,
                symbol,
                ticker,
                secured: true,
              }),
              amount: this.amount.toString(),
            },
          ],
        }),
      },
      memo: "",
    };
  }

  toMemo(): string {
    const parts = [`secure-`, this.targetAddress];
    return parts.join(":");
  }
}
