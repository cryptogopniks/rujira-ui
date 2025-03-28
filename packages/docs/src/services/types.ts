import {
  Account as BaseAccount,
  AccountProvider as BaseAccountProvider,
  WalletProvider as BaseWalletProvider,
} from "rujira.js";

export enum Provider {
  Ctrl = "Ctrl",
  Keplr = "Keplr",
  Leap = "Leap",
  Metamask = "Metamask",
  Sonar = "Sonar",
  Station = "Station",
  Vultisig = "Vultisig",
}

export type Account = BaseAccount<Provider>;
export type AccountProvider = BaseAccountProvider<Provider>;
export type WalletProvider<C> = BaseWalletProvider<C, Provider>;
