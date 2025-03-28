import clsx from "clsx";
import { FC } from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { BreakPoints, Decimal, useWindowSize } from "rujira.ui";
import { EdgeSubscription } from "../../services/useNodeSubscription";
import { HistoryFragment$key } from "./__generated__/HistoryFragment.graphql";
import { HistoryItemFragment$key } from "./__generated__/HistoryItemFragment.graphql";

const fragment = graphql`
  fragment HistoryFragment on FinPair {
    address
    assetBase {
      metadata {
        symbol
      }
    }
    assetQuote {
      metadata {
        symbol
      }
    }
    trades {
      edges {
        cursor
        node {
          id
          ...HistoryItemFragment
        }
      }
    }
  }
`;

const subscription = graphql`
  subscription HistorySubscription($prefix: String!) {
    edge(prefix: $prefix) {
      cursor
      node {
        ... on FinTrade {
          ...HistoryItemFragment
        }
      }
    }
  }
`;

export const History: FC<{ k?: HistoryFragment$key }> = ({ k }) => {
  const d = useFragment(fragment, k);

  const { width } = useWindowSize();

  return (
    <div className="trade__book-table">
      {d ? (
        <EdgeSubscription
          subscription={subscription}
          prefix={`contract:fin:${d.address}:trade`}
        />
      ) : null}
      <div
        className={clsx({
          "table-sticky": true,
          "pr-1": width > BreakPoints.large,
        })}>
        <table className="table table--no-hover">
          <thead>
            <tr>
              <th>Price ({d?.assetQuote.metadata.symbol})</th>
              <th className="text-right">
                Amount ({d?.assetBase.metadata.symbol})
              </th>
              <th className="text-right">Time</th>
            </tr>
          </thead>
          <tbody>
            {d?.trades?.edges
              ?.slice(0, width > BreakPoints.large ? 80 : 10)
              .map((e) =>
                e?.node ? <HistoryItem key={e.cursor} k={e?.node} /> : null
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const itemfragment = graphql`
  fragment HistoryItemFragment on FinTrade {
    type
    quoteAmount
    baseAmount
    price
    timestamp
  }
`;

const HistoryItem: FC<{ k: HistoryItemFragment$key }> = ({ k }) => {
  const d = useFragment(itemfragment, k);

  return (
    <tr>
      <td className={d.type === "sell" ? "color-red" : "color-teal"}>
        {(Number(d.price) / 10 ** 12).toFixed(4)}
      </td>
      <td className="text-right">
        <Decimal amount={BigInt(d.baseAmount)} round={4} />
      </td>
      <td className="text-right">
        {new Date(d.timestamp).toLocaleTimeString()}
      </td>
    </tr>
  );
};
