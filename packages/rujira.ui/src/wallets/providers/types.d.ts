import {
  Account as BaseAccount,
  AccountProvider as BaseAccountProvider,
  WalletProvider as BaseWalletProvider,
} from "rujira.js";
import { CtrlContext } from "./ctrl";
import { KeplrContext } from "./keplr";
import { MetamaskContext } from "./metamask";
import { OkxContext } from "./okx";
import { TrustContext } from "./trust";
import { VultiContext } from "./vulticonnect";

export type Provider = keyof Providers;
export type Account = BaseAccount<Provider>;
export type AccountProvider = BaseAccountProvider<Provider>;
export type WalletProvider<C> = BaseWalletProvider<C, Provider>;

export type Providers = {
  Keplr: KeplrContext;
  Station: KeplrContext;
  Leap: KeplrContext;
  Vultisig: VultiContext;
  Ctrl: CtrlContext;
  Metamask: MetamaskContext;
  Okx: OkxContext;
  Trust: TrustContext;
};
