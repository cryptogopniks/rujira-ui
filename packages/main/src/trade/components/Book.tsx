import clsx from "clsx";
import { FC, useEffect } from "react";
import { Tooltip } from "react-tooltip";
import {
  BreakPoints,
  Decimal,
  Fiat,
  nFormatter,
  useQueryParam,
  useWindowSize,
} from "rujira.ui";

import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { Subscription } from "../../services/useNodeSubscription";
import { BookEntryFragment$key } from "./__generated__/BookEntryFragment.graphql";
import {
  BookFragment$data,
  BookFragment$key,
} from "./__generated__/BookFragment.graphql";
import { BookSubFragment$key } from "./__generated__/BookSubFragment.graphql";
import { History } from "./History";

enum Tab {
  Book = "book",
  Trades = "trades",
}

enum Filter {
  All = "all",
  Buy = "buy",
  Sell = "sell",
}
const fragment = graphql`
  fragment BookFragment on FinPair {
    assetBase {
      asset
      metadata {
        symbol
        decimals
      }
    }
    assetQuote {
      asset
      metadata {
        symbol
        decimals
      }
      price {
        current
      }
    }
    ...HistoryFragment
    book {
      id
      ...BookSubFragment
    }
  }
`;

const subFrag = graphql`
  fragment BookSubFragment on FinBook {
    id
    bids {
      value
      price
      total
      ...BookEntryFragment
    }
    asks {
      value
      price
      total
      ...BookEntryFragment
    }
  }
`;

const subscription = graphql`
  subscription BookSubscription($id: ID!) {
    node(id: $id) {
      ... on FinBook {
        ...BookSubFragment
      }
    }
  }
`;
export const Book: FC<{ k?: BookFragment$key }> = ({ k }) => {
  const d = useFragment(fragment, k);
  const [tab, setTab] = useQueryParam<Tab>("trades", Tab.Book);
  const [filter, setFilter] = useQueryParam<Filter>("book", Filter.All);

  return (
    <div className="trade__book">
      {d?.book.id && (
        <Subscription id={d.book.id} subscription={subscription} />
      )}
      <nav className="tabs tabs--sm">
        <a
          className={tab === Tab.Book ? "selected" : ""}
          onClick={() => setTab(Tab.Book)}>
          Order Book
        </a>
        <a
          className={tab === Tab.Trades ? "selected" : ""}
          onClick={() => setTab(Tab.Trades)}>
          Recent Trades
        </a>
        {tab === Tab.Book && <BookFilter setFilter={setFilter} />}
      </nav>
      {tab === Tab.Book && <Orders filter={filter} k={k} />}
      {tab === Tab.Trades && <History k={d || undefined} />}

      <Tooltip
        id="book-tip"
        className="tooltip"
        place="left"
        style={{ zIndex: 1 }}
      />
    </div>
  );
};

const BookFilter: FC<{ setFilter: (f: Filter) => void }> = ({ setFilter }) => {
  return (
    <span className="flex jc-e trade__book-filter">
      <svg
        onClick={() => setFilter(Filter.All)}
        className="pointer"
        width="16px"
        height="16px"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2,0 L14,0 C15.1045695,-2.02906125e-16 16,0.8954305 16,2 L16,8 L16,8 L0,8 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z"
          fill="#E53935"></path>
        <path
          d="M0,8 L16,8 L16,14 C16,15.1045695 15.1045695,16 14,16 L2,16 C0.8954305,16 1.3527075e-16,15.1045695 0,14 L0,8 L0,8 Z"
          fill="#60FBD0"></path>
      </svg>
      <svg
        onClick={() => setFilter(Filter.Sell)}
        className="pointer"
        width="16px"
        height="16px"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2,0 L14,0 C15.1045695,-2.02906125e-16 16,0.8954305 16,2 L16,8 L16,8 L0,8 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z"
          fill="#E53935"></path>
        <path
          d="M0,9 L16,9 L16,14 C16,15.1045695 15.1045695,16 14,16 L2,16 C0.8954305,16 1.3527075e-16,15.1045695 0,14 L0,9 L0,9 Z"
          fillOpacity="0.5"
          fill="#607D8B"></path>
      </svg>
      <svg
        onClick={() => setFilter(Filter.Buy)}
        className="pointer"
        width="16px"
        height="16px"
        viewBox="0 0 16 16"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2,0 L14,0 C15.1045695,-2.02906125e-16 16,0.8954305 16,2 L16,7 L16,7 L0,7 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 Z"
          fillOpacity="0.5"
          fill="#607D8B"></path>
        <path
          d="M0,8 L16,8 L16,14 C16,15.1045695 15.1045695,16 14,16 L2,16 C0.8954305,16 1.3527075e-16,15.1045695 0,14 L0,8 L0,8 Z"
          fill="#60FBD0"></path>
      </svg>
    </span>
  );
};

const Orders: FC<{ filter: Filter; k?: BookFragment$key }> = ({
  filter,
  k,
}) => {
  const d = useFragment(fragment, k);
  const { width } = useWindowSize();
  if (!k) return null;
  return (
    <>
      <div className="trade__book-header">
        <div>
          {width >= BreakPoints.large ? "Price" : "Total"} (
          {d?.assetQuote.metadata.symbol})
        </div>
        <div
          className={clsx({
            "text-right": width >= BreakPoints.large,
            "text-center": width < BreakPoints.large,
          })}>
          Amount ({d?.assetBase.metadata.symbol})
        </div>
        <div className="text-right">
          Total ({d?.assetQuote.metadata.symbol})
        </div>
      </div>
      <div className="trade__book-overflow">
        {width < BreakPoints.large ? (
          <OrdersAll d={d || undefined} k={d?.book || undefined} />
        ) : (
          <>
            {filter === Filter.All && (
              <OrdersAll d={d || undefined} k={d?.book || undefined} />
            )}
            {filter === Filter.Sell && (
              <Asks d={d || undefined} k={d?.book || undefined} />
            )}
            {filter === Filter.Buy && (
              <Bids d={d || undefined} k={d?.book || undefined} />
            )}
          </>
        )}
      </div>
    </>
  );
};

const center = () => {
  const mid = document.querySelector<HTMLElement>(".trade__book-mid");
  const list = document.querySelector<HTMLElement>(".trade__book-overflow");
  const sell = document.querySelector<HTMLElement>(".trade__book-sells");
  if (mid && list && sell) {
    list.scrollTop =
      sell.offsetHeight + mid.offsetHeight * 0.5 - list.offsetHeight * 0.5;
  }
};

const OrdersAll: FC<{ d?: BookFragment$data; k?: BookSubFragment$key }> = ({
  d,
  k,
}) => {
  const { width } = useWindowSize();
  const book = useFragment(subFrag, k);

  useEffect(() => {
    center();
  }, []);

  const maxBid = book?.bids.at(0)?.price;
  const minAsk = book?.asks.at(0)?.price;
  const mid = maxBid && minAsk ? (BigInt(maxBid) + BigInt(minAsk)) / 2n : null;
  const midPrice = mid ? mid * BigInt(d?.assetQuote.price?.current || 0) : null;

  const spread =
    maxBid && minAsk && mid
      ? ((BigInt(minAsk) - BigInt(maxBid)) * 10n ** 12n) / mid
      : null;

  return (
    <>
      <div className="trade__book-sells">
        {d && book
          ? [...book.asks]
              .slice(0, width > BreakPoints.large ? 40 : 10)
              .map((e, i, all) => (
                <ItemAsk
                  max={all.reduce(
                    (a, v) => (a > BigInt(v.total) ? a : BigInt(v.total)),
                    0n
                  )}
                  key={e.price}
                  k={e}
                  cumulative={all.slice(0, i + 1)}
                  symbols={[
                    d.assetBase.metadata.symbol,
                    d.assetQuote.metadata.symbol,
                  ]}
                />
              ))
          : null}
      </div>
      {width > BreakPoints.large && (
        <div className="trade__book-mid">
          <Decimal amount={mid || 0n} as="h3" decimals={12} round={4} />
          <Fiat
            amount={midPrice || 0n}
            as="h4"
            symbol="$"
            decimals={24}
            className="color-grey ml-2"
            padSymbol={false}
          />
          <div className="color-grey ml-2">
            Spread{" "}
            <Decimal amount={spread || 0n} decimals={10} round={2} symbol="%" />
          </div>
        </div>
      )}
      <div className="trade__book-buys">
        {d && book
          ? [...book.bids]
              .slice(0, width > BreakPoints.large ? 40 : 10)
              .map((e, i, all) => (
                <ItemBid
                  max={all.reduce(
                    (a, v) => (a > BigInt(v.total) ? a : BigInt(v.total)),
                    0n
                  )}
                  key={e.price}
                  k={e}
                  cumulative={all.slice(0, i + 1)}
                  symbols={[
                    d.assetBase.metadata.symbol,
                    d.assetQuote.metadata.symbol,
                  ]}
                />
              ))
          : null}
      </div>
    </>
  );
};

const Asks: FC<{ d?: BookFragment$data; k?: BookSubFragment$key }> = ({
  d,
  k,
}) => {
  const data = useFragment(subFrag, k);

  useEffect(() => {
    const list = document.querySelector<HTMLElement>(".trade__book-overflow");
    if (list) list.scrollTop = list.offsetHeight;
  }, []);

  return (
    <div className="trade__book-sells">
      {d && data
        ? [...data.bids].map((e, i, all) => (
            <ItemAsk
              max={all.reduce(
                (a, v) => (a > BigInt(v.total) ? a : BigInt(v.total)),
                0n
              )}
              key={e.price}
              k={e}
              cumulative={all.slice(0, i + 1)}
              symbols={[
                d.assetBase.metadata.symbol,
                d.assetQuote.metadata.symbol,
              ]}
            />
          ))
        : null}
    </div>
  );
};

const Bids: FC<{ d?: BookFragment$data; k?: BookSubFragment$key }> = ({
  d,
  k,
}) => {
  const data = useFragment(subFrag, k);
  useEffect(() => {
    const list = document.querySelector<HTMLElement>(".trade__book-overflow");
    if (list) list.scrollTop = 0;
  }, []);

  return (
    <div className="trade__book-buys">
      {d && data
        ? [...data.bids].map((e, i, all) => (
            <ItemBid
              max={all.reduce(
                (a, v) => (a > BigInt(v.total) ? a : BigInt(v.total)),
                0n
              )}
              key={e.price}
              k={e}
              cumulative={all.slice(0, i + 1)}
              symbols={[
                d.assetBase.metadata.symbol,
                d.assetQuote.metadata.symbol,
              ]}
            />
          ))
        : null}
    </div>
  );
};

const itemFragment = graphql`
  fragment BookEntryFragment on FinBookEntry {
    price
    side
    total
    value
  }
`;

interface ItemProps {
  k: BookEntryFragment$key;
  symbols: [string, string];
  cumulative: { total: string; value: string }[];
  max: bigint;
}

const ItemAsk: FC<ItemProps> = (props) => <Item side="ask" {...props} />;
const ItemBid: FC<ItemProps> = (props) => <Item side="bid" {...props} />;

const Item: FC<ItemProps & { side: "bid" | "ask" }> = ({
  k,
  cumulative,
  symbols,
  max,
  side,
}) => {
  const data = useFragment(itemFragment, k);
  const bar = (BigInt(data.total) * 100n) / max;

  return (
    <div
      className={
        side === "ask"
          ? "trade__book-row trade__book-row--sell"
          : "trade__book-row trade__book-row--buy"
      }
      data-tooltip-id="book-tip"
      data-tooltip-html={tip(side, symbols, cumulative)}>
      <span>{(Number(data.price) / 10 ** 12).toFixed(4)}</span>
      <span>
        <Decimal amount={BigInt(data.total)} round={8} />
      </span>
      <span>
        <Decimal amount={BigInt(data.value)} round={8} />
      </span>
      <i style={{ width: bar + "%" }} />
    </div>
  );
};

const tip = (
  side: "ask" | "bid",
  symbols: [string, string],
  cumulative: { total: string; value: string }[]
): string => {
  const [base, quote] = cumulative.reduce(
    ([b, q], v) =>
      side === "ask"
        ? [b + BigInt(v.total), q + BigInt(v.value)]
        : [b + BigInt(v.value), q + BigInt(v.total)],
    [0n, 0n]
  );

  return `<strong>Total</strong><div class="mt-0.5">
  ${nFormatter(base, 4)} ${symbols[0]}
  <br/>
  ${nFormatter(quote, 4)} ${symbols[1]}
  <div>`;
};
