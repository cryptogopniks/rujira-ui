import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { msgAssetFragment$key } from "./__generated__/msgAssetFragment.graphql";
import { Asset } from "./asset";

const msgAssetFragment = graphql`
  fragment msgAssetFragment on Asset {
    type
    chain
    asset
    metadata {
      decimals
      symbol
    }
    variants {
      native {
        denom
      }
      secured {
        variants {
          native {
            denom
          }
        }
      }
    }
  }
`;

export const useMsgAssetFragment = (
  k: msgAssetFragment$key | undefined | null
): Asset | undefined | null => {
  const res = useFragment(msgAssetFragment, k);
  return res ? (res as Asset) : res;
};
