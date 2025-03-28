import clsx from "clsx";
import React, { FC, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import {
  graphql,
  PreloadedQuery,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import {
  AffiliateContext,
  Footer,
  GlobalModal,
  Loader,
  Provider,
  WalletIcons,
  WalletProps,
} from "rujira.ui";
import "rujira.ui/src/scss/index.scss";
import { mainQuery } from "./__generated__/mainQuery.graphql";
import { AccountsContext, useAccounts } from "./services/accounts";
import { RelayContext } from "./services/relay";
import { SignerContext } from "./services/signer";

import { Header } from "./common/components/Header";
import { NotFound } from "./common/NotFound";
import { Contracts } from "./Contracts";
import { Deploy } from "./Deploy";
import "./index.scss";
import { Manage } from "./Manage";
import { Query } from "./Query";
import { Store } from "./Store";

const WALLETS: WalletProps<Provider>[] = [
  {
    key: "station",
    label: "Station",
    icon: <WalletIcons.StationText />,
  },
  {
    key: "keplr",
    label: "Keplr",
    provider: "Keplr",
    icon: <WalletIcons.Keplr />,
  },

  {
    key: "leap",
    label: "Leap",
    provider: "Leap",
    icon: <WalletIcons.Leap />,
  },
];

const rootQuery = graphql`
  query mainQuery {
    developer {
      ...ContractsFragment
    }
  }
`;

const Wrapper = () => {
  const [q, loadQuery] = useQueryLoader<mainQuery>(rootQuery);

  useEffect(() => {
    loadQuery({});
  }, []);

  return q ? <Content query={q} /> : null;
};

const Content: FC<{ query: PreloadedQuery<mainQuery> }> = ({ query }) => {
  const q = usePreloadedQuery(rootQuery, query);

  const accountProvider = useAccounts();

  return (
    <SignerContext>
      <GlobalModal>
        <div className="rujira">
          <Header
            accountProvider={accountProvider}
            routingElement={Link}
            ProviderIcon={ProviderIcon}
            wallets={WALLETS}
          />
          <Routes>
            <Route
              path="/"
              element={q?.developer ? <Contracts k={q.developer} /> : null}
            />
            <Route path="/store" element={q?.developer ? <Store /> : null} />
            <Route
              path="/deploy/:code_id?"
              element={q?.developer ? <Deploy /> : null}
            />

            <Route
              path="/manage/:address?"
              element={q?.developer ? <Manage /> : null}
            />

            <Route
              path="/query/:address?"
              element={q?.developer ? <Query /> : null}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer routerElement={Link} />
        </div>
      </GlobalModal>
    </SignerContext>
  );
};

const Fallback = () => {
  const accountProvider = useAccounts();

  return (
    <div
      className={clsx({
        rujira: true,
        "rujira--dark": location.pathname === "/",
      })}>
      <Header
        accountProvider={accountProvider}
        routingElement={Link}
        ProviderIcon={ProviderIcon}
        wallets={WALLETS}
      />
      <div className="rujira__main flex ai-c jc-c">
        <Loader className="w-10 h-10" />
      </div>
      <Footer routerElement={Link} />
    </div>
  );
};

export const ProviderIcon: FC<{
  provider: Provider;
  selected: boolean;
  className?: string;
}> = ({ provider, selected, className }) => {
  switch (provider) {
    case "Keplr":
      return selected ? (
        <WalletIcons.Keplr className={clsx({ [`${className}`]: className })} />
      ) : (
        <WalletIcons.KeplrSimple
          className={clsx({ [`${className}`]: className })}
        />
      );
    case "Leap":
      return selected ? (
        <WalletIcons.Leap className={clsx({ [`${className}`]: className })} />
      ) : (
        <WalletIcons.LeapSimple
          className={clsx({ [`${className}`]: className })}
        />
      );
    case "Station":
      return (
        <WalletIcons.StationSimple
          className={clsx({ [`${className}`]: className })}
          gradient={selected}
        />
      );
  }
};

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Fallback />}>
        <Wrapper />
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
