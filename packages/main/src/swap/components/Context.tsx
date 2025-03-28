import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import { useFragment } from "react-relay";
import { useMatch, useNavigate } from "react-router-dom";
import { graphql } from "relay-runtime";
import { Network } from "rujira.js";
import { Account } from "rujira.ui";
import { useAccounts } from "../../services/accounts";
import { Asset, RUNE } from "../../services/asset";
import { ContextFragment$key } from "./__generated__/ContextFragment.graphql";

const fragment = graphql`
  fragment ContextFragment on Thorchain {
    pools {
      decimals
      asset {
        asset
        metadata {
          decimals
          symbol
        }

        type
        chain
        variants {
          native {
            denom
          }
          secured {
            asset
            type
            chain
            metadata {
              decimals
              symbol
            }
          }
          layer1 {
            asset
            type
            chain
            metadata {
              decimals
              symbol
            }
          }
        }
      }
    }
  }
`;

const context = createContext<{
  slippageLimit: bigint;
  setSlippageLimit: Dispatch<SetStateAction<bigint>>;
  /** Selected from Asset */
  fromAsset?: Asset;
  /** Selected to Asset */
  toAsset?: Asset;
  /** Target asset, either Layer 1 or Secured, based on the destination address */
  targetAsset?: Asset;
  /** The amount of asset that needs to be deposited to inboundAddress */
  fromAmount: bigint;
  /** The amount of asset to quote for - truncated to correct decimals */
  fromAmountQuote: bigint;
  setFromAmount: Dispatch<SetStateAction<bigint>>;
  setSwap: (from?: Asset, to?: Asset) => void;
  feeWarning: bigint;
  destination?: Account;
  setDestination: (d?: Account) => void;
}>({
  slippageLimit: 100n,
  setSlippageLimit: () => {
    throw new Error("No SwapContext");
  },
  fromAmount: 0n,
  fromAmountQuote: 0n,
  setFromAmount: () => {
    throw new Error("No SwapContext");
  },
  setSwap: () => {
    throw new Error("No SwapContext");
  },
  feeWarning: 500n,
  setDestination: () => {
    throw new Error("No SwapContext");
  },
});

export const Context: FC<PropsWithChildren<{ k?: ContextFragment$key }>> = ({
  children,
  k,
}) => {
  const { accounts } = useAccounts();
  const [slippageLimit, setSlippageLimit] = useState(100n);
  const match = useMatch("swap/:from/:to");
  const nav = useNavigate();
  const from = match?.params.from;
  const to = match?.params.to;
  const pools = useFragment(fragment, k);

  const setSwap = (from?: Asset, to?: Asset) => {
    nav(`/swap/${from?.asset}/${to?.asset}`);
  };
  const fromPool = pools?.pools.find((x) => x.asset.asset === from);
  const toPool = pools?.pools.find((x) => x.asset.asset === to);

  const [fromAmount, setFromAmount] = useState(
    fromPool ? BigInt(10 ** fromPool?.asset.metadata.decimals) : 0n
  );

  const [destination, setDestination] = useState(
    accounts?.find((a) => a.network === toPool?.asset.chain)
  );

  const fromAsset = from === RUNE.asset ? RUNE : (fromPool?.asset as Asset);
  const toAsset = to === RUNE.asset ? RUNE : (toPool?.asset as Asset);
  const targetAsset =
    destination?.network === Network.Thorchain &&
    toAsset?.chain !== Network.Thorchain
      ? toAsset?.variants?.secured
      : toAsset;

  const fromAmountQuote = useMemo(
    () =>
      fromAsset
        ? (fromAmount * 10n ** 8n) / 10n ** BigInt(fromAsset.metadata.decimals)
        : 0n,
    [fromAmount, fromAsset]
  );

  return (
    <context.Provider
      value={{
        slippageLimit,
        setSlippageLimit,
        fromAsset,
        toAsset,
        targetAsset,
        fromAmount,
        fromAmountQuote,
        setFromAmount,
        setSwap,
        feeWarning: 500n,
        destination,
        setDestination,
      }}>
      {children}
    </context.Provider>
  );
};

export const useSwapContext = () => useContext(context);
