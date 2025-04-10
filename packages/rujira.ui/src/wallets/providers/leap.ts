import { Keplr, Window as KeplrWindow } from "@keplr-wallet/types";
import { InboundAddress, Msg, Network, Simulation, TxResult } from "rujira.js";
import {
  KeplrContext,
  getKeplrAccounts,
  keplrSignAndBroadcast,
  keplrSimulate,
} from "./keplr";
import { Account, WalletProvider } from "./types";

declare global {
  interface Window extends KeplrWindow {
    leap: Keplr;
  }
}

const provider: WalletProvider<KeplrContext> = {
  getAccounts: async (): Promise<
    { context: KeplrContext; account: { address: string; network: Network } }[]
  > => {
    const k = window.leap;
    if (!k) throw new Error("Leap extension not found");
    return getKeplrAccounts(k);
  },
  simulate: function (
    context: KeplrContext,
    account: Account,
    msg: Msg,
    inboundAddress?: InboundAddress
  ): Promise<Simulation> {
    const k = window.leap;
    if (!k) throw new Error("Leap extension not found");
    return keplrSimulate(context, k, account, msg, inboundAddress);
  },
  signAndBroadcast: function (
    context: KeplrContext,
    account: Account,
    simulation: Simulation,
    msg: Msg,
    inboundAddress?: InboundAddress
  ): Promise<TxResult> {
    const k = window.leap;
    if (!k) throw new Error("Leap extension not found");
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
