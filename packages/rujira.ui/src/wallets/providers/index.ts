import {
  Account as BaseAccount,
  InboundAddress,
  Msg,
  Simulation,
  TxResult,
} from "rujira.js";
import { default as ctrl } from "./ctrl";
import { default as keplr } from "./keplr";
import { default as leap } from "./leap";
import { default as metamask } from "./metamask";
import { default as okx } from "./okx";
import { default as station } from "./station";
import { default as trust } from "./trust";
import { Provider, Providers, WalletProvider } from "./types";
import { default as vulticonnect } from "./vulticonnect";

export const getWalletProvider = <T extends Provider>(
  provider: T
): WalletProvider<Providers[T]> => {
  switch (provider) {
    case "Keplr":
      return keplr as WalletProvider<Providers[T]>;
    case "Station":
      return station as WalletProvider<Providers[T]>;
    case "Leap":
      return leap as WalletProvider<Providers[T]>;
    case "Vultisig":
      return vulticonnect as WalletProvider<Providers[T]>;
    case "Ctrl":
      return ctrl as WalletProvider<Providers[T]>;
    case "Metamask":
      return metamask as WalletProvider<Providers[T]>;
    case "Okx":
      return okx as WalletProvider<Providers[T]>;
    case "Trust":
      return trust as WalletProvider<Providers[T]>;
    default:
      throw new Error(`Unsupported provider: ${provider}`);
  }
};

export const getAccounts = async <T extends Provider>(
  provider: T
): Promise<{ context: Providers[T]; account: BaseAccount<T> }[]> => {
  const walletProvider = getWalletProvider(provider);
  const accounts = await walletProvider.getAccounts();

  return accounts.map(({ context, account }) => ({
    context: context as Providers[T],
    account: {
      ...account,
      provider,
    },
  }));
};

export const simulate =
  <T extends Provider>(
    context: Providers[T],
    account: BaseAccount<T>,
    inboundAddress?: InboundAddress
  ) =>
  async (msg: Msg): Promise<Simulation> => {
    const walletProvider = getWalletProvider(account.provider);
    return walletProvider.simulate(context, account, msg, inboundAddress);
  };

export const signAndBroadcast =
  <T extends Provider>(
    context: Providers[T],
    account: BaseAccount<T>,
    inboundAddress?: InboundAddress
  ) =>
  async (simulation: Simulation, msg: Msg): Promise<TxResult> => {
    const walletProvider = getWalletProvider(account.provider);
    return walletProvider.signAndBroadcast(
      context,
      account,
      simulation,
      msg,
      inboundAddress
    );
  };

export const onChange = <T extends Provider>(provider: T, cb: () => void) => {
  const walletProvider = getWalletProvider(provider);
  return walletProvider.onChange?.(cb);
};

export { ctrl, keplr, leap, metamask, station, vulticonnect };
