import { clsx } from "clsx";
import { AnimatePresence, motion } from "motion/react";
import { FC, MouseEventHandler, PropsWithChildren, useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { graphql, useFragment } from "react-relay";
import { Routes, useLocation, useNavigate } from "react-router-dom";
import { Network } from "rujira.js";
import {
  Account,
  BuyModal,
  Icons,
  NetworkIcon,
  useClickOutside,
  useGlobalModalContext,
} from "rujira.ui";
import { mainQuery$data } from "../__generated__/mainQuery.graphql";
import { Link, route } from "../Gate";
import { useAccounts } from "../services/accounts";
import { Balances } from "./components/Balances";
import { Buy, Deposit } from "./components/Cta";
//import { Merge } from "./components/Merge";
import {
  PortfolioBalanceFragment$data,
  PortfolioBalanceFragment$key,
} from "./__generated__/PortfolioBalanceFragment.graphql";
import { PortfolioFragment$key } from "./__generated__/PortfolioFragment.graphql";
import { Merging } from "./components/Merging";
import { NoAccount } from "./components/NoAccount";
import { AccountItem, Value } from "./components/Value";
import { Combine } from "rujira.ui/src/components/icons/Icons";
import { Combined } from "./components/Combined";
import { Streaming } from "./components/Streaming";

const PortfolioFragment = graphql`
  fragment PortfolioBalanceFragment on Layer1Account {
    address
    ...BalancesFragment
    ...ValueFragment
    account {
      ...MergePortfolioAccountFragment
      ...MergingFragment
      fin {
        orders {
          edges {
            cursor
          }
        }
      }
      merge {
        accounts {
          merged {
            amount
          }
        }
      }
    }
  }
`;

const fragment = graphql`
  fragment PortfolioFragment on Thorchain {
    ...BalancesDepositFragment
  }
`;

enum Tab {
  Balances = "",
  Merging = "/merging",
  Streaming = "/streaming",
  Bonded = "/bonded",
  Pooled = "/pooled",
  Lent = "/lent",
  Borrowing = "/borrowing",
  Orders = "/orders",
}

export const Portfolio: FC<{
  q?: mainQuery$data;
  k?: PortfolioBalanceFragment$key;
}> = ({ q, k }) => {
  return (
    <>
      <Meta />
      <div className="rujira__main rujira__main--gradient">
        {k ? <MyAccount q={q} k={k} /> : <NoAccount />}
      </div>
    </>
  );
};

const Meta = () => {
  return (
    <Helmet>
      <title>Rujira Portfolio</title>
      <meta name="description" content="View your account portfolio." />
      <meta name="og:description" content="View your account portfolio." />
      <meta name="twitter:description" content="View your account portfolio." />
    </Helmet>
  );
};

const MyAccount: FC<{
  q?: mainQuery$data;
  k?: PortfolioBalanceFragment$key;
}> = ({ k, q }) => {
  const [showSwitch, setShowSwitch] = useState(false);
  const data = useFragment(PortfolioFragment, k);
  const { accounts, selected, select } = useAccounts();
  const ref = useClickOutside(() => setShowSwitch(false));
  const loc = useLocation();
  const history = useNavigate();
  const { showModal } = useGlobalModalContext();

  const buy = () => {
    showModal({
      //title: `Send ${symbol}`,
      backgroundClose: false,
      children: <BuyModal />,
    });
  };

  const groupedAccounts = accounts?.reduce(
    (acc, account) => {
      if (account.network === Network.Thorchain) {
        acc.rujira.push(account);
      } else {
        acc.other.push(account);
      }
      return acc;
    },
    { rujira: [], other: [] } as { rujira: Account[]; other: Account[] }
  );
  groupedAccounts?.other.sort((a, b) => a.network.localeCompare(b.network));

  return (
    <div className="rujira__inner--pad portfolio">
      <div className="rujira__inner">
        <h1 className="h1">My Portfolio</h1>
        <div className="flex wrap ai-c">
          <a
            className="portfolio__switcher"
            onClick={() => setShowSwitch(true)}>
            {loc.pathname === "/portfolio/all" ? (
              <>
                <div
                  className="block w-2 h-2 mr-1 br-2 bg-primary2 color-white"
                  style={{ padding: 3 }}>
                  <Combine className="block" />
                </div>
                Combined View (read only)
              </>
            ) : (
              selected && (
                <>
                  <NetworkIcon
                    network={selected?.network}
                    className="block w-2 h-2 mr-1"
                  />

                  {
                    /* width > BreakPoints.large
              ? data?.address
              :  */ data?.address.substring(0, 12) +
                      "..." +
                      data?.address.slice(-12)
                  }
                </>
              )
            )}
            <Icons.AngleDown className="w-2 h-2 ml-1" />

            <AnimatePresence>
              {showSwitch && (
                <motion.nav
                  ref={ref}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}>
                  <>
                    <Link
                      to="/portfolio/all"
                      className="flex ai-c w-full mt-0.5"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowSwitch(false);
                      }}>
                      <div className="block w-3.5 h-3.5 mr-1 p-0.5 br-2 bg-primary2 color-white">
                        <Combine className="block" />
                      </div>
                      <span className="fs-12 color-white">
                        Combined View{" "}
                        <em className="color-grey">(read only)</em>
                      </span>
                    </Link>
                    {groupedAccounts?.rujira &&
                      groupedAccounts?.rujira.length > 0 && (
                        <h4>Rujira Accounts</h4>
                      )}
                    {groupedAccounts?.rujira.map((a) => (
                      <AccountItemWrapper
                        q={q}
                        key={JSON.stringify(a)}
                        account={a}
                        k={k}
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowSwitch(false);
                          loc.pathname !== "/portfolio" &&
                            history("/portfolio");
                          selected &&
                            select({
                              provider: a.provider,
                              network: a.network,
                            });
                        }}
                      />
                    ))}
                    <h4>Other Accounts</h4>
                    {groupedAccounts?.other.map((a) => (
                      <AccountItemWrapper
                        q={q}
                        key={JSON.stringify(a)}
                        account={a}
                        k={k}
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowSwitch(false);
                          loc.pathname !== "/portfolio" &&
                            history("/portfolio");
                          selected &&
                            select({
                              provider: a.provider,
                              network: a.network,
                            });
                        }}
                      />
                    ))}
                  </>
                </motion.nav>
              )}
            </AnimatePresence>
          </a>
          <div className="div bg-black w-4 h-4 flex ai-c jc-c ml-1 color-grey bg-hover-darkGrey hover-white br-3 transition">
            <Icons.Copy
              className="w-2"
              onClick={() => {
                if (!data?.address) return;
                toast.success("Address copied to clipboard");
                navigator.clipboard.writeText(data.address);
              }}
            />
          </div>
        </div>
        {/* <Cta /> */}
        <div className="row pad wrap mt-1 gradient-card-container">
          <div className="col-12 col-lg-6 mt-2">
            <Value account={data || undefined} />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mt-2">
            <Deposit />
            {/* <Merge k={data?.account || undefined} /> */}
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mt-2">
            <Buy onClick={buy} />
          </div>
        </div>

        <Tabs
          tabs={
            selected?.network === Network.Thorchain &&
            loc.pathname !== "/portfolio/all"
              ? [
                  { tab: Tab.Balances, label: "Balances" },
                  {
                    tab: Tab.Merging,
                    label: "Merging",
                    count: data?.account?.merge?.accounts?.filter(
                      (x) => x.merged.amount !== "0"
                    ).length,
                    hideable: true,
                  },
                  { tab: Tab.Streaming, label: "Streaming Payments", count: 1 },
                  {
                    tab: Tab.Orders,
                    label: "Orders",
                    count:
                      data?.account?.fin?.orders?.edges?.length || undefined,
                  },

                  { tab: Tab.Bonded, label: "Bonded" },
                  { tab: Tab.Pooled, label: "Pooled" },
                  { tab: Tab.Lent, label: "Lent" },
                  { tab: Tab.Borrowing, label: "Borrowing" },
                ]
              : [{ tab: Tab.Balances, label: "Balances" }]
          }
        />
        <TabContent account={data || undefined} k={q?.thorchain || undefined} />
      </div>
    </div>
  );
};

const AccountItemWrapper: FC<{
  account: Account;
  k?: PortfolioBalanceFragment$key;
  q?: mainQuery$data;
  onClick: MouseEventHandler<HTMLButtonElement>;
}> = ({ account, q, onClick }) => {
  return <AccountItem account={account} q={q} onClick={onClick} />;
};

const Tabs: FC<{
  tabs: { tab: Tab; label: string; count?: number; hideable?: boolean }[];
}> = ({ tabs }) => (
  <div className="tabs mt-4">
    {tabs.map((x) =>
      x.hideable === true && x.count === 0 ? null : (
        <TabItem key={x.label} tab={x.tab}>
          {x.label}
          {x.count !== undefined ? <i>{x.count}</i> : null}
        </TabItem>
      )
    )}
  </div>
);

const TabItem: FC<
  PropsWithChildren<{
    tab: Tab;
    counter?: number;
  }>
> = ({ tab, counter, children }) => {
  const loc = useLocation();
  const isSelected = loc.pathname.replace("/portfolio", "") === tab;

  return (
    <Link
      to={`/portfolio${tab}`}
      className={clsx({ "selected bg-black": isSelected })}>
      {children} {counter ? <i>{counter}</i> : null}
    </Link>
  );
};

const TabContent: FC<{
  account?: PortfolioBalanceFragment$data;
  k?: PortfolioFragment$key;
}> = ({ account, k }) => {
  const data = useFragment(fragment, k);
  return (
    <Routes>
      {route({
        path: "",
        element: <Balances account={account} d={data || undefined} />,
      })}
      {route({
        path: "all",
        element: <Combined />,
      })}
      {route({
        path: "streaming",
        element: <Streaming />,
      })}
      {route({
        path: "merging",
        element: <Merging k={account?.account || undefined} />,
      })}
      {route({
        path: "*",
        element: (
          <div className="card text-center p-3 mt-2 condensed color-grey">
            Coming soon...
          </div>
        ),
      })}
    </Routes>
  );
};
