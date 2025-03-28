import { TransactionRequest } from "ethers";
import { InboundAddress } from "../accounts";
import { Asset } from "../asset";
import { IncorrectNetworkError } from "../errors";
import { Network, networkId } from "../network";
import { EncodeObject } from "../signers/cosmos/proto-signing";
import { MsgSend } from "../signers/cosmos/types/cosmos/bank/v1beta1/tx";
import { evmRouter } from "../signers/evm/router";
import { UtxoQueryClient, UtxoSigningClient, UtxoTx } from "../signers/utxo";
import { Msg } from "./msg";

export const COSMOS_BANK_DENOMS: Record<string, string> = {
  "GAIA.ATOM": "uatom",
  "GAIA.KUJI":
    "ibc/4CC44260793F84006656DD868E017578F827A492978161DA31D7572BCB3F4289",
  "GAIA.RKUJI":
    "ibc/50A69DC508ACCADE2DAC4B8B09AA6D9C9062FCBFA72BB4C6334367DECD972B06",
  "GAIA.FUZN":
    "ibc/6BBBB4B63C51648E9B8567F34505A9D5D8BAAC4C31D768971998BE8C18431C26",
  "GAIA.WINK":
    "ibc/4363FD2EF60A7090E405B79A6C4337C5E9447062972028F5A99FB041B9571942",
  "GAIA.NSTK":
    "ibc/0B99C4EFF1BD05E56DEDEE1D88286DB79680C893724E0E7573BC369D79B5DDF3",
  "GAIA.LVN":
    "ibc/6C95083ADD352D5D47FB4BA427015796E5FEF17A829463AD05ECD392EB38D889",
  "THOR.RUNE": "rune",
};

const EVM_NATIVE = "0x0000000000000000000000000000000000000000";

/**
 * MsgDeposit abstracts layer 1 deposits & direct MsgDeposit on THORChain
 */
export class MsgDeposit implements Msg {
  protected amount: bigint;
  constructor(
    protected asset: Asset,
    amount: bigint
  ) {
    // Adjust the 8dp input to the decimals of the source asset
    this.amount =
      (amount * 10n ** BigInt(asset?.metadata.decimals || 0)) / 10n ** 8n;
  }

  toUtxoTx(
    queryClient: UtxoQueryClient,
    account: { network: Network; address: string },
    inboundAddress?: InboundAddress
  ): Promise<{ tx: UtxoTx; fee: bigint }> {
    if (this.asset.chain !== account.network) {
      throw new IncorrectNetworkError(account.network, this.asset.chain);
    }

    const signer = new UtxoSigningClient(queryClient);
    if (!inboundAddress)
      throw new Error(`Inbound Address required for ${account.network}`);

    return signer.createRawTransaction(
      account.address,
      inboundAddress?.address,
      this.amount
    );
  }

  async toEncodeObject(
    account: {
      network: Network;
      address: string;
    },
    inboundAddress?: InboundAddress
  ): Promise<{ msg: EncodeObject; memo: string }> {
    if (this.asset.chain !== account.network) {
      throw new IncorrectNetworkError(account.network, this.asset.chain);
    }

    return {
      msg: {
        typeUrl: MsgSend.typeUrl,
        value: {
          ...this.sendValue(account.address, inboundAddress),
          toAddress: inboundAddress?.address,
        },
      },
      memo: this.toMemo(),
    };
  }

  sendValue(fromAddress: string, inboundAddress?: InboundAddress) {
    const amount =
      inboundAddress?.dustThreshold &&
      this.amount < inboundAddress.dustThreshold
        ? inboundAddress.dustThreshold
        : this.amount;

    return {
      fromAddress,
      amount: [
        {
          denom: this.asset.variants?.native?.denom,
          amount: amount.toString(),
        },
      ],
    };
  }

  async toTransactionRequest(
    account: {
      network: Network;
      address: string;
    },
    inboundAddress?: InboundAddress
  ): Promise<{ request: TransactionRequest; chainId: string }> {
    if (!inboundAddress?.router)
      throw new Error(
        `Inbound Address & Router required for ${account.network}`
      );

    if (this.asset.chain !== account.network) {
      throw new IncorrectNetworkError(account.network, this.asset.chain);
    }

    const contract = evmRouter(inboundAddress?.router);
    const expiration = BigInt(new Date().getTime() + 600000);
    const request = contract.depositWithExpiry(
      inboundAddress?.address,
      assetAddress(this.asset.asset),
      inboundAddress?.dustThreshold &&
        this.amount < inboundAddress.dustThreshold
        ? inboundAddress.dustThreshold
        : this.amount,
      this.toMemo(),
      expiration
    );

    return { request, chainId: networkId(this.asset.chain) };
  }

  toMemo(): string {
    throw new Error(`toMemo not implemented`);
  }
}

const assetAddress = (asset: string): string => {
  return asset.split("-").at(1) || EVM_NATIVE;
};
