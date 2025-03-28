import { createContext, FC, PropsWithChildren, useContext } from "react";
import { Msg, Simulation, TxResult } from "rujira.js";
import { wallets } from "rujira.ui";
import { signerFragment$key } from "./__generated__/signerFragment.graphql";
import { useAccounts } from "./accounts";

const ERROR = () => {
  throw new Error("AccountProvider Context not defined");
};

interface SignerContext {
  simulate?: (msg: Msg) => Promise<Simulation>;
  signAndBroadcast?: (simulation: Simulation, msg: Msg) => Promise<TxResult>;
}

const Context = createContext<SignerContext>({
  simulate: ERROR,
  signAndBroadcast: ERROR,
});

export const SignerContext: FC<
  PropsWithChildren<{ k?: signerFragment$key }>
> = ({ children }) => {
  const { selected, context } = useAccounts();

  const value: SignerContext = {
    simulate: selected && wallets.simulate(context, selected),
    signAndBroadcast: selected && wallets.signAndBroadcast(context, selected),
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useSigner = (): SignerContext => useContext(Context);
