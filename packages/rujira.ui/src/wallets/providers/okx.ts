import { Keplr, Window as KeplrWindow } from "@keplr-wallet/types";
import { BrowserProvider, Eip1193Provider, JsonRpcSigner } from "ethers";
import {
  gasToken,
  InboundAddress,
  Msg,
  Network,
  Simulation,
  TxResult,
} from "rujira.js";
import { UtxoQueryClient } from "rujira.js/src/signers/utxo";
import { Account, WalletProvider } from "./types";

interface BitcoinProvider {
  connect: () => Promise<{ address: string; publicKey: string }>;
}

declare global {
  interface Window extends KeplrWindow {
    okxwallet?: Eip1193Provider & {
      bitcoin: BitcoinProvider;
      keplr: Keplr;
    };
  }
}

const getBitcoinAccounts = (
  provider?: BitcoinProvider
): Promise<
  { context: BtcContext; account: { address: string; network: Network } }[]
> => {
  if (!provider) throw new Error("Ctrl extension not found");
  return provider.connect().then((res) => {
    return [
      {
        context: {
          type: "btc",
          queryClient: new UtxoQueryClient("https://blockchain.info"),
        },
        account: {
          address: res.address,
          network: Network.Bitcoin,
        },
      },
    ];
  });
};

const getEvmAccounts = async (): Promise<
  { context: EvmContext; account: { address: string; network: Network } }[]
> => {
  const provider = window.okxwallet && new BrowserProvider(window.okxwallet);

  if (!provider) throw new Error("Ctrl extension not found");

  return provider.listAccounts().then((xs) =>
    xs.flatMap((x) =>
      [
        {
          address: x.address,
          network: Network.Ethereum,
        },
        {
          address: x.address,
          network: Network.Avalanche,
        },
        {
          address: x.address,
          network: Network.Bsc,
        },
      ].map((account) => ({
        account,
        context: {
          type: "evm",
          signer: new JsonRpcSigner(provider, account.address),
        },
      }))
    )
  );
};

type EvmContext = { type: "evm"; signer: JsonRpcSigner };
type BtcContext = { type: "btc"; queryClient: UtxoQueryClient };

export type OkxContext = EvmContext | BtcContext;

const provider: WalletProvider<OkxContext> = {
  getAccounts: async (): Promise<
    { context: OkxContext; account: { address: string; network: Network } }[]
  > => {
    const k = window.okxwallet;
    if (!k) throw new Error("OKX extension not found");
    const res = await Promise.all([
      getEvmAccounts(),
      getBitcoinAccounts(window.okxwallet?.bitcoin),
    ]);
    return res
      .flat()
      .sort((a, b) => a.account.network.localeCompare(b.account.network));
  },
  simulate: async function (
    context: OkxContext,
    account: Account,
    msg: Msg,
    inboundAddress?: InboundAddress
  ): Promise<Simulation> {
    switch (context.type) {
      case "btc":
        const tx = await msg.toUtxoTx(
          context.queryClient,
          account,
          inboundAddress
        );
        return {
          symbol: "BTC",
          decimals: 8,
          amount: tx.fee,
          gas: tx.fee,
        };

      case "evm":
        const { request, chainId } = await msg.toTransactionRequest(
          account,
          inboundAddress
        );

        await context.signer.provider.send("wallet_switchEthereumChain", [
          { chainId },
        ]);

        const gas = await context.signer.estimateGas(request);
        return {
          ...gasToken(account.network),
          amount: gas * (inboundAddress?.gasRate || 0n) * 2n,
          gas,
        };
    }
  },
  signAndBroadcast: function (
    context: OkxContext,
    _account: Account,
    _simulation: Simulation,
    _msg: Msg,
    _inboundAddress?: InboundAddress
  ): Promise<TxResult> {
    throw new Error(`OKX ${context.type} signAndBroadcast not implemented`);
  },
};

export default provider;
