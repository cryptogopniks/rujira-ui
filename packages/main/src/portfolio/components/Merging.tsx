import { FC } from "react";
import { graphql, useFragment } from "react-relay";
import { networkLabel } from "rujira.js";
import { Decimal, Fiat, IconDenom } from "rujira.ui";
import Anim from "../../common/assets/cosmos.svg";
import { useAccounts } from "../../services/accounts";
import { tokenValue } from "../utils";
import { MergingFragment$key } from "./__generated__/MergingFragment.graphql";

export const MergingFragment = graphql`
  fragment MergingFragment on Account {
    merge {
      accounts {
        merged {
          amount
          asset {
            asset
            metadata {
              symbol
              decimals
            }
          }
        }
        rate
        shares
        size {
          amount
          asset {
            asset
            metadata {
              decimals
            }
            price {
              current
            }
          }
        }
      }
    }
  }
`;

export const Merging: FC<{ k?: MergingFragment$key }> = ({ k }) => {
  const data = useFragment(MergingFragment, k);
  const { selected } = useAccounts();
  const total = data?.merge?.accounts?.length;

  return (
    <div className="relative card p-3 mt-2">
      {total === 0 ? (
        <div className="mt-4 text-center">
          <img src={Anim} alt="" className="block w-12 h-12 mx-a mb-2" />
          <h3 className="h3 color-grey">
            You don't have any token balances on{" "}
            <span className="color-white">
              {selected && networkLabel(selected.network)}
            </span>
          </h3>
          <h4 className="h4 fw-400">Try switching the network</h4>
        </div>
      ) : (
        <div className="table-sticky--first">
          <table className="table table--big condensed portfolio__balances">
            <thead>
              <tr>
                <th className="bg-black">Token</th>
                <th className="text-right">Merged Amount</th>
                <th className="text-right">RUJI Allocated</th>
                <th className="text-right">Total Value</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.merge?.accounts?.map((x) => (
                <Item
                  key={x.merged.asset.asset}
                  amount={BigInt(x.merged.amount)}
                  denom={{
                    denom: x.merged.asset.asset,
                    metadata: x.merged.asset.metadata,
                  }}
                  rate={BigInt(x.rate)}
                  size={{
                    amount: BigInt(x.size.amount),
                    price:
                      (x.size.asset.price?.current && {
                        current: BigInt(x.size.asset.price.current),
                      }) ||
                      undefined,
                    metadata: x.size.asset.metadata,
                  }}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const Item: FC<{
  amount: bigint;
  denom: {
    denom: string;
    metadata: {
      symbol: string;
      decimals: number;
    };
  };
  rate: bigint;
  size: {
    amount: bigint;
    price?: {
      current: bigint;
    };
    metadata: {
      decimals: number;
    };
  };
}> = ({ amount, denom, size }) => {
  if (amount === 0n) return null;
  return (
    <tr>
      <th className="bg-black">
        <div className="flex ai-c no-shrink">
          <IconDenom denom={denom.metadata.symbol} />
          <h3>{denom.metadata.symbol}</h3>
        </div>
      </th>
      <td className="text-right">
        <Decimal amount={amount} decimals={denom.metadata.decimals} round={6} />
      </td>

      <td className="text-right">
        <Decimal
          amount={size.amount}
          decimals={size.metadata.decimals}
          round={6}
        />
      </td>
      <td className="text-right">
        {size.price?.current ? (
          <Fiat
            amount={tokenValue(
              size.amount,
              size.metadata.decimals,
              size.price?.current
            )}
            decimals={12}
            symbol="$"
            padSymbol={false}
          />
        ) : null}
      </td>
      <td className="text-right"></td>
    </tr>
  );
};
