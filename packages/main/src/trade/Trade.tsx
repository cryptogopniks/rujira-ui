import { Buffer } from "buffer";
import { motion } from "motion/react";
import { FC, Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  PreloadedQuery,
  useFragment,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import { useParams } from "react-router-dom";
import { graphql } from "relay-runtime";
import { BreakPoints, useQueryParam, useWindowDimensions } from "rujira.ui";
import { Drawer } from "vaul";
import { TradeFragment$key } from "./__generated__/TradeFragment.graphql";
import {
  TradeQuery,
  TradeQuery$data,
} from "./__generated__/TradeQuery.graphql";
import { TradeRujiraFragment$key } from "./__generated__/TradeRujiraFragment.graphql";
import { Book } from "./components/Book";
import { Header } from "./components/Header";
import { Markets } from "./components/Markets";
import { Orders } from "./components/Orders";
import { LaunchModal, Submit } from "./components/Submit";
import { TradingView } from "./components/TradingView";
import { Side } from "./types";

const isAsset = (
  str: string,
  asset: { chain: string; metadata: { symbol: string } }
): boolean => {
  const parts = str.split(/[\.\-]/);

  if (parts.length === 1)
    return parts[0] === asset.chain && parts[0] === asset.metadata.symbol;
  return parts[0] === asset.chain && parts[1] === asset.metadata.symbol;
};

export const toFinAssetId = (asset: {
  chain: string;
  metadata: { symbol: string };
}): string =>
  asset.chain === asset.metadata.symbol
    ? asset.chain
    : `${asset.chain}.${asset.metadata.symbol}`;

const query = graphql`
  query TradeQuery($id: ID!) {
    pair: node(id: $id) {
      ... on FinPair {
        address
        assetBase {
          chain
          metadata {
            symbol
          }
        }
        assetQuote {
          chain
          metadata {
            symbol
          }
        }
        ...BookFragment
        ...HeaderTradeFragment
        ...SubmitFragment
      }
    }
  }
`;

const fragment = graphql`
  fragment TradeFragment on Layer1Account {
    balances {
      asset {
        chain
        metadata {
          symbol
        }
      }
      ...SubmitBalanceFragment
    }
    account {
      fin {
        ...OrdersFragment
      }
    }
  }
`;

const pairsFragment = graphql`
  fragment TradeRujiraFragment on Rujira {
    fin {
      address
      assetBase {
        chain
        metadata {
          symbol
        }
      }
      assetQuote {
        chain
        metadata {
          symbol
        }
      }
    }
  }
`;

const Meta = () => {
  return (
    <Helmet>
      <title>Rujira Trade</title>
      <meta name="description" content="Rujira Trade" />
      <meta name="og:description" content="Rujira Trade" />
      <meta name="twitter:description" content="Rujira Trade" />
    </Helmet>
  );
};

export const Trade: FC<{
  k?: TradeFragment$key;
  l?: TradeRujiraFragment$key;
}> = ({ k, l }) => {
  const pairs = useFragment(pairsFragment, l);
  const { base, quote } = useParams();
  const pair =
    pairs && base && quote
      ? pairs.fin.find(
          (x) => isAsset(base, x.assetBase) && isAsset(quote, x.assetQuote)
        )
      : null;

  const [q, loadQuery] = useQueryLoader<TradeQuery>(query);
  useEffect(() => {
    if (!pair) return;
    loadQuery({
      id: Buffer.from(`FinPair:${pair.address}`).toString("base64"),
    });
  }, [pair]);

  return (
    <Suspense fallback={<Content address={pair?.address} k={k} />}>
      {q ? (
        <Loader address={pair?.address} k={k} preloaded={q} />
      ) : (
        <Content address={pair?.address} k={k} />
      )}
    </Suspense>
  );
};

const Loader: FC<{
  address?: string;
  k?: TradeFragment$key;
  q?: TradeQuery$data;
  preloaded: PreloadedQuery<TradeQuery>;
}> = ({ address, preloaded, k }) => {
  const d = usePreloadedQuery(query, preloaded);

  return <Content address={address} q={d} k={k} />;
};

const Content: FC<{
  address?: string;
  // preloaded: PreloadedQuery<TradeQuery>;
  k?: TradeFragment$key;
  q?: TradeQuery$data;
}> = ({ address, q, k }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showDrawer, setShowDrawer] = useState(false);
  const [side, setSide] = useQueryParam<Side>("side", Side.Quote);
  const isMobile = useWindowDimensions(BreakPoints.large - 1);

  const d = useFragment(fragment, k);

  const kbb = d?.balances?.find(
    (x) =>
      x.asset.chain === q?.pair?.assetBase?.chain &&
      x.asset.metadata.symbol === q.pair.assetBase.metadata.symbol
  );
  const kbq = d?.balances?.find(
    (x) =>
      x.asset.chain === q?.pair?.assetQuote?.chain &&
      x.asset.metadata.symbol === q.pair.assetQuote.metadata.symbol
  );

  const handleScroll = (e: any) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.target;
    const position = Math.ceil(
      (scrollLeft / (scrollWidth - clientWidth)) * 100
    );
    setScrollPosition(position);
  };

  return (
    <>
      <Meta />
      <div className="rujira__main rujira__main--gradient trade">
        <Drawer.Root
          direction="left"
          open={showDrawer}
          onOpenChange={(open) => setShowDrawer(open)}>
          <Header
            k={q?.pair || undefined}
            openDrawer={() => setShowDrawer(true)}
          />
          <Drawer.Portal>
            <Drawer.Overlay className="drawer__overlay" />
            <Drawer.Content className="drawer__content drawer__content--left">
              <Drawer.Title className="visually-hidden">Markets</Drawer.Title>
              <Markets closeDrawer={() => setShowDrawer(false)} />
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
        <div className="trade__main" onScroll={handleScroll}>
          <TradingView address={address} />
          <Book k={q?.pair || undefined} />
        </div>
        <div className="trade__indicator">
          <motion.i
            animate={{
              backgroundColor: scrollPosition < 50 ? "#fff" : "#71909F",
              width: scrollPosition < 50 ? 16 : 8,
            }}
          />
          <motion.i
            animate={{
              backgroundColor: scrollPosition > 50 ? "#fff" : "#71909F",
              width: scrollPosition > 50 ? 16 : 8,
            }}
          />
        </div>
        <Drawer.Root>
          <div className="trade__footer">
            <Orders k={d?.account?.fin || undefined} contract={address} />
            {!isMobile ? (
              <Submit
                k={q?.pair || undefined}
                kbb={kbb}
                kbq={kbq}
                side={side}
                setSide={setSide}
              />
            ) : (
              <LaunchModal onClick={setSide} />
            )}

            <Drawer.Portal>
              <Drawer.Overlay className="drawer__overlay" />
              <Drawer.Content className="drawer__content drawer__content--bottom">
                <Submit
                  k={q?.pair || undefined}
                  side={side}
                  kbb={kbb}
                  kbq={kbq}
                  setSide={setSide}
                />
              </Drawer.Content>
            </Drawer.Portal>
          </div>
        </Drawer.Root>
      </div>
    </>
  );
};
