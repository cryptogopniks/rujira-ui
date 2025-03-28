import { Keplr, Window as KeplrWindow } from "@keplr-wallet/types";
import { BrowserProvider, Eip1193Provider } from "ethers";
import { InboundAddress, Msg, Simulation, TxResult } from "rujira.js";
import { Network } from "rujira.js/src/network";
import {
  getKeplrAccounts as getKeplrAccountsBase,
  KeplrContext as KeplrContextBase,
  keplrSignAndBroadcast,
  keplrSimulate,
} from "./keplr";
import { Account, WalletProvider } from "./types";

type BitcoinProvider = {
  request: (
    req: { method: string; params: string[] },
    cb: (error: any, res: string[]) => void
  ) => void;
};

declare global {
  interface Window extends KeplrWindow {
    xfi?: {
      binance: unknown;
      bitcoin: BitcoinProvider;
      bitcoincash: BitcoinProvider;
      dogecoin: BitcoinProvider;
      ethereum: Eip1193Provider;
      keplr: Keplr;
      litecoin: BitcoinProvider;
    };
  }
}

const getBitcoinAccounts = (
  network: Network,
  provider?: BitcoinProvider
): Promise<
  { context: BtcContext; account: { address: string; network: Network } }[]
> => {
  if (!provider) throw new Error("Ctrl extension not found");
  return new Promise<string[]>((resolve, reject) =>
    provider.request(
      { method: "request_accounts", params: [] },
      (error: any, accounts: string[]) => {
        if (error) reject(error);
        resolve(accounts);
      }
    )
  ).then((accounts) =>
    accounts.map((x) => ({
      context: {
        type: "btc",
      },
      account: {
        address: x,
        network,
      },
    }))
  );
};

const getEvmAccounts = async (): Promise<
  { context: EvmContext; account: { address: string; network: Network } }[]
> => {
  const provider =
    window.xfi?.ethereum && new BrowserProvider(window.xfi.ethereum);

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
      ].map((account) => ({ account, context: { type: "evm" } }))
    )
  );
};

const getKeplrAccounts = async (
  k: Keplr
): Promise<
  { context: KeplrContext; account: { address: string; network: Network } }[]
> =>
  getKeplrAccountsBase(k).then((res) =>
    res.map(({ context, account }) => ({
      account,
      context: { type: "keplr", ...context },
    }))
  );

type KeplrContext = { type: "keplr" } & KeplrContextBase;
type EvmContext = { type: "evm" };
type BtcContext = { type: "btc" };

export type CtrlContext = KeplrContext | EvmContext | BtcContext;

const provider: WalletProvider<CtrlContext> = {
  getAccounts: async (): Promise<
    { context: CtrlContext; account: { address: string; network: Network } }[]
  > => {
    const k = window.xfi?.keplr;
    if (!k) throw new Error("Ctrl extension not found");
    const res = await Promise.all([
      getKeplrAccounts(k),
      getEvmAccounts(),
      getBitcoinAccounts(Network.Bitcoin, window.xfi?.bitcoin),
      getBitcoinAccounts(Network.BitcoinCash, window.xfi?.bitcoincash),
      getBitcoinAccounts(Network.Dogecoin, window.xfi?.dogecoin),
      getBitcoinAccounts(Network.Litecoin, window.xfi?.litecoin),
    ]);
    return res
      .flat()
      .sort((a, b) => a.account.network.localeCompare(b.account.network));
  },
  simulate: function (
    context: CtrlContext,
    account: Account,
    msg: Msg,
    inboundAddress?: InboundAddress
  ): Promise<Simulation> {
    const k = window.xfi?.keplr;
    if (!k) throw new Error("Ctrl extension not found");
    if (context.type !== "keplr")
      throw new Error(
        `Invalid wallet context (${context.type}) for ${account.provider}:${account.network}`
      );
    return keplrSimulate(context, k, account, msg, inboundAddress);
  },
  signAndBroadcast: function (
    context: CtrlContext,
    account: Account,
    simulation: Simulation,
    msg: Msg,
    inboundAddress?: InboundAddress
  ): Promise<TxResult> {
    const k = window.xfi?.keplr;
    if (!k) throw new Error("Ctrl extension not found");
    if (context.type !== "keplr")
      throw new Error(
        `Invalid wallet context (${context.type}) for ${account.provider}:${account.network}`
      );

    return keplrSignAndBroadcast(
      context,
      k,
      account,
      simulation,
      msg,
      inboundAddress
    );
  },
};

export default provider;
