import { createContext, FC, PropsWithChildren, useContext } from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
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

const fragment = graphql`
  fragment signerFragment on Thorchain {
    inboundAddresses {
      address
      router
      chain
      dustThreshold
      gasRate
    }
  }
`;

export const SignerContext: FC<
  PropsWithChildren<{ k?: signerFragment$key }>
> = ({ children, k }) => {
  const { selected, context } = useAccounts();
  const data = useFragment(fragment, k);

  const inboundAddressData = data?.inboundAddresses.find(
    (a) => a.chain === selected?.network
  );

  const inboundAddress = inboundAddressData
    ? {
        ...inboundAddressData,
        router: inboundAddressData.router || undefined,
        dustThreshold: BigInt(inboundAddressData.dustThreshold || "0"),
        gasRate: BigInt(inboundAddressData.gasRate || "0"),
      }
    : undefined;

  const value: SignerContext = {
    simulate: selected && wallets.simulate(context, selected, inboundAddress),
    signAndBroadcast:
      selected && wallets.signAndBroadcast(context, selected, inboundAddress),
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useSigner = (): SignerContext => useContext(Context);
