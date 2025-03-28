import clsx from "clsx";
import React, { FC, PropsWithChildren, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import {
  graphql,
  PreloadedQuery,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  Account,
  AffiliateContext,
  Footer,
  GlobalModal,
  Loader,
  TxButtonTip,
} from "rujira.ui";
import "rujira.ui/src/scss/index.scss";
import { mainQuery } from "./__generated__/mainQuery.graphql";
import { AccountsContext, useAccounts } from "./services/accounts";
import { RelayContext } from "./services/relay";
import { SignerContext } from "./services/signer";

import { Buffer } from "buffer";
import { Tooltip } from "react-tooltip";
import { Header } from "./common/components/Header";
import { NotFound } from "./common/NotFound";
import { Ecosystem } from "./ecosystem/Ecosystem";
import { Link, route } from "./Gate";
import { Home } from "./home/Home";
import "./index.scss";
import { Merge } from "./merge/Merge";
import { Switch } from "./merge/Switch";
import { Pools } from "./pools/Pools";
import { Portfolio } from "./portfolio/Portfolio";
import { Subscription } from "./services/useNodeSubscription";
import { Stake } from "./stake/Stake";
import { Swap } from "./swap/Swap";
import { toFinAssetId, Trade } from "./trade/Trade";

const rootQuery = graphql`
  query mainQuery($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Layer1Account {
        id
        address
        chain
        ...PortfolioBalanceFragment
        ...SwapAccountFragment
        ...ValueFragment
        ...MergeAccountFragment
        ...SwitchAccountFragment
        ...TradeFragment
      }
    }
    thorchain {
      ...HeaderFragment
      ...SwapThorchainFragment
      ...signerFragment
      ...PortfolioFragment
      pools {
        asset {
          asset
        }
      }
    }
    rujira {
      ...MergeFragment
      ...TradeRujiraFragment

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
  }
`;

const subscription = graphql`
  subscription mainSubscription($id: ID!) {
    node(id: $id) {
      ... on Layer1Account {
        balances {
          amount
        }
      }
    }
  }
`;

const accountId = (a: Account): string =>
  Buffer.from(`Layer1Account:${a.network.toLowerCase()}:${a.address}`).toString(
    "base64"
  );

const ids = (accounts: Account[]): string[] => accounts.map(accountId);

const QueryProvider = () => {
  const { accounts } = useAccounts();
  const [q, loadQuery] = useQueryLoader<mainQuery>(rootQuery);

  useEffect(() => {
    if (!accounts) return;
    loadQuery({ ids: ids(accounts) });
  }, [accounts]);

  return q ? <Content query={q} /> : null;
};

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  return (
    <GlobalModal>
      <div
        className={clsx({
          rujira: true,
          "rujira--dark":
            location.pathname === "/" ||
            location.pathname.startsWith("/merge") ||
            location.pathname.startsWith("/switch") ||
            location.pathname.startsWith("/ecosystem"),
        })}>
        {children}
        <Footer routerElement={Link} />
        <TxButtonTip />
      </div>
    </GlobalModal>
  );
};

const Content: FC<{ query: PreloadedQuery<mainQuery> }> = ({ query }) => {
  const q = usePreloadedQuery(rootQuery, query);

  return (
    <SignerContext k={q?.thorchain || undefined}>
      <Wrapper>
        <Header k={q.thorchain || undefined} />
        <Pages query={query} />
      </Wrapper>
    </SignerContext>
  );
};

const Pages: FC<{ query: PreloadedQuery<mainQuery> }> = ({ query }) => {
  const q = usePreloadedQuery(rootQuery, query);

  const { selected } = useAccounts();

  const accountKey =
    q?.nodes.find((a) => selected && a.chain === selected.network) || undefined;

  const defaultPair =
    q.rujira?.fin?.find((a) => a.assetBase.metadata.symbol === "RUJI") ||
    q.rujira?.fin?.at(0);

  const defaultSwapFrom = q.thorchain?.pools[0].asset.asset || "BTC.BTC";
  const defaultSwapTo = q.thorchain?.pools[1].asset.asset || "THOR.RUJI";

  return (
    <>
      {accountKey?.id && (
        <Subscription id={accountKey.id} subscription={subscription} />
      )}
      <Routes>
        {route({ index: true, element: <Home /> })}
        {route({
          path: "merge/:asset",
          element: (
            <Merge k={q?.rujira || undefined} a={accountKey || undefined} />
          ),
        })}
        <Route path="merge" element={<Navigate to={`/merge/KUJI`} replace />} />

        {route({
          path: "switch/:asset",
          element: <Switch a={accountKey || undefined} />,
        })}
        <Route
          path="switch"
          element={<Navigate to={`/switch/AUTO`} replace />}
        />

        {route({
          path: "portfolio/*",

          element: <Portfolio q={q} k={accountKey} />,
        })}
        {route({ path: "stake", element: <Stake /> })}
        {route({ path: "provide", element: <Pools /> })}
        {defaultPair && (
          <Route
            path="swap"
            element={
              <Navigate
                to={`/swap/${defaultSwapFrom}/${defaultSwapTo}`}
                replace
              />
            }
          />
        )}

        {route({
          path: "swap/:from/:to",
          element: <Swap t={q?.thorchain || undefined} a={accountKey} />,
        })}
        {defaultPair && (
          <Route
            path="trade"
            element={
              <Navigate
                to={`/trade/${toFinAssetId(defaultPair.assetBase)}/${toFinAssetId(defaultPair.assetQuote)}`}
                replace
              />
            }
          />
        )}

        {route({
          path: "trade/:base/:quote",
          element: <Trade k={accountKey} l={q.rujira || undefined} />,
        })}
        {route({ path: "ecosystem/:tab?", element: <Ecosystem /> })}
        {route({ path: "*", element: <NotFound /> })}
      </Routes>
    </>
  );
};

const Fallback = () => {
  return (
    <Wrapper>
      <Header />
      <div className="rujira__main flex ai-c jc-c">
        <Loader className="w-10 h-10" />
      </div>
    </Wrapper>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Fallback />}>
        <QueryProvider />
      </Suspense>
      <Toaster
        toastOptions={{
          style: {
            background: "#22242f",
            color: "#fff",
            fontSize: 14,
            fontWeight: 500,
          },
          success: {
            style: {
              background: "#34aa89",
              color: "#fff",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#34aa89",
            },
          },
          error: {
            style: {
              background: "#B71C1C",
              color: "#fff",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#B71C1C",
            },
          },
        }}
      />
      <Tooltip id="global-tip" className="tooltip" />
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RelayContext>
      <AffiliateContext>
        <AccountsContext>
          <App />
        </AccountsContext>
      </AffiliateContext>
    </RelayContext>
  </React.StrictMode>
);
