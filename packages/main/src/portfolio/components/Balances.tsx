import clsx from "clsx";
import { FC, useState } from "react";
import { graphql, useFragment } from "react-relay";
import { FragmentRefs, Result } from "relay-runtime";
import { Network, networkLabel } from "rujira.js";
import {
  Account,
  Decimal,
  Fiat,
  IconDenom,
  Icons,
  Popout,
  Toggle,
  useGlobalModalContext,
  Warning,
} from "rujira.ui";
import Anim from "../../common/assets/cosmos.svg";
import { Deposit } from "../../common/components/Deposit";
import { Switch, SWITCH_ASSETS } from "../../common/components/Switch";
import { Link } from "../../Gate";
import { useAccounts } from "../../services/accounts";
import { Asset } from "../../services/asset";
import { priceFormatter, tokenValue } from "../utils";
import { BalancesDepositFragment$key } from "./__generated__/BalancesDepositFragment.graphql";
import {
  AssetType,
  BalancesFragment$data,
  BalancesFragment$key,
  Chain,
} from "./__generated__/BalancesFragment.graphql";
import { WithdrawFragment$key } from "./actions/__generated__/WithdrawFragment.graphql";
import { Send } from "./actions/Send";
import { Withdraw } from "./actions/Withdraw";
const { Chart, Merge, MoneyTransfer, Swap, TrendDown, TrendUp } = Icons;

export const BalancesFragment = graphql`
  fragment BalancesFragment on Layer1Account {
    balances @catch {
      ...WithdrawFragment
      asset {
        asset
        type
        chain
        metadata {
          symbol
          decimals
        }
        price {
          current
          changeDay
        }
        variants {
          native {
            denom
          }
        }
      }
      amount
    }
  }
`;

const depositFragment = graphql`
  fragment BalancesDepositFragment on Thorchain {
    ...DepositFragment
    pools {
      asset {
        asset
      }
    }
  }
`;

interface BalanceItem {
  amount: string;
  value: bigint;
  asset: Asset;
  price?: { current?: string | null; changeDay?: number | null } | null;
}

export const Balances: FC<{
  account?: BalancesFragment$key;
  d?: BalancesDepositFragment$key;
}> = ({ account, d }) => {
  const data = useFragment(BalancesFragment, account);
  const { selected } = useAccounts();

  return (
    <>
      {data?.balances ? (
        data.balances.ok ? (
          data?.balances.value?.length === 0 ? (
            <div className="relative card p-3 mt-2">
              <Empty account={selected} />
            </div>
          ) : (
            <List data={data?.balances.value || []} d={d} />
          )
        ) : (
          <div className="relative card p-3 mt-2">
            <Error
              errors={data?.balances.errors as { status: string }[]}
              account={selected}
            />
          </div>
        )
      ) : (
        <Loading />
      )}
    </>
  );
};

type ExtractSuccess<T> = T extends Result<infer U, any> ? U : never;
type Balances = ExtractSuccess<NonNullable<BalancesFragment$data>>;

const List: FC<{
  d?: BalancesDepositFragment$key;
  data: ReadonlyArray<{
    readonly amount: string;
    readonly asset: {
      readonly asset: string;
      readonly chain: Chain;
      readonly metadata: {
        readonly decimals: number;
        readonly symbol: string;
      };
      readonly price:
        | {
            readonly changeDay: number | null | undefined;
            readonly current: string | null | undefined;
          }
        | null
        | undefined;
      readonly type: AssetType;
      readonly variants: {
        readonly native:
          | {
              readonly denom: string;
            }
          | null
          | undefined;
      };
    };
    readonly " $fragmentSpreads": FragmentRefs<"WithdrawFragment">;
  }>;
}> = ({ d, data }) => {
  const [showZero, setShowZero] = useState(true);
  const { selected } = useAccounts();
  const { available, supported } = data.reduce(
    (a: { available: BalanceItem[]; supported: BalanceItem[] }, v) => {
      return v.amount === "0"
        ? {
            ...a,
            supported: [
              ...a.supported,
              {
                amount: v.amount,
                price: v.asset.price,
                asset: v.asset as Asset,
                value: 0n,
              },
            ],
          }
        : {
            ...a,
            available: [
              ...a.available,
              {
                amount: v.amount,
                asset: v.asset as Asset,
                price: v.asset.price,
                value: tokenValue(
                  BigInt(v.amount),
                  v.asset.metadata.decimals,
                  BigInt(v.asset.price?.current || 0)
                ),
              },
            ],
          };
    },
    { available: [], supported: [] }
  );

  return (
    <>
      {available.length ? (
        <div className="relative card p-3 mt-2">
          <div className="table-sticky--first">
            <table className="table table--big condensed portfolio__balances">
              <thead>
                <tr>
                  <th className="bg-black">Token</th>
                  <th className="text-right">Price</th>
                  <th className="text-right">24h Change</th>
                  <th className="text-right">Balance</th>
                  <th className="text-right">Value</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {available
                  ?.sort((a, b) => Number(b.value - a.value))
                  .map((x) => (
                    <BalanceItem
                      key={x.asset.asset}
                      {...x}
                      k={data?.find((a) => a.asset.asset === x.asset.asset)}
                      d={d}
                      amount={BigInt(x.amount)}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
      {supported.length ? (
        <>
          <div className="mt-3 px-1.5 flex ai-c">
            {showZero && (
              <h4 className="fs-14 m-0 color-grey fw-500">
                Supported {selected && networkLabel(selected?.network)} Tokens
              </h4>
            )}
            <Toggle
              label="Show zero balances"
              className="toggle--small mr-0 ml-a color-grey"
              checked={showZero}
              onChange={(e) => setShowZero(e.currentTarget.checked)}
            />
          </div>
          {showZero && (
            <div className="relative card p-3 mt-1.5">
              <div className="table-sticky--first">
                <table className="table table--big condensed portfolio__balances">
                  <thead>
                    <tr>
                      <th className="bg-black">Token</th>
                      <th className="text-right">Price</th>
                      <th className="text-right">24h Change</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {supported
                      ?.sort((a, b) =>
                        a.asset.metadata.symbol.localeCompare(
                          b.asset.metadata.symbol
                        )
                      )
                      .map((x) => (
                        <BalanceItem
                          key={x.asset.asset}
                          k={data?.find((a) => a.asset.asset === x.asset.asset)}
                          d={d}
                          {...x}
                          amount={BigInt(x.amount)}
                        />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      ) : null}
    </>
  );
};

const Empty: FC<{ account?: Account }> = ({ account }) => {
  return (
    <div className="mt-4 text-center">
      <img src={Anim} alt="" className="block w-12 h-12 mx-a mb-2" />
      <h3 className="h3 color-grey">
        You don't have any token balances on{" "}
        <span className="color-white">
          {account && networkLabel(account.network)}
        </span>
      </h3>
      <h4 className="h4 fw-400">Try switching the network</h4>
      {/* <div className="mt-4 flex jc-c">
      <Button
      className="button--outline button--teal"
      label="Deposit on Rujira"
      />
      </div> */}
    </div>
  );
};

const Loading: FC = () => {
  return (
    <div className="mt-4 text-center">
      <img src={Anim} alt="" className="block w-12 h-12 mx-a mb-2" />
    </div>
  );
};

const Error: FC<{
  account?: Account;
  errors: readonly { status: string }[];
}> = ({ account, errors }) => {
  return (
    <div className="mt-4 text-center">
      <h3 className="h3 color-grey">
        Error fetching balances for{" "}
        <span className="color-white">
          {account && networkLabel(account.network)}
        </span>
      </h3>
      <h4 className="h4 fw-400">Try again later</h4>
      {errors.map((x) => (
        <Warning key={x.status} className="mt-1" msg={x.status} color="red" />
      ))}
    </div>
  );
};

const BalanceItem: FC<{
  k?: WithdrawFragment$key;
  d?: BalancesDepositFragment$key;
  asset: Asset;
  amount?: bigint;
  value?: bigint;
  price?: { current?: string | null; changeDay?: number | null } | null;
}> = ({ k, d, asset, amount, value, price }) => {
  const { metadata } = asset;

  const { selected } = useAccounts();
  return (
    <tr>
      <th className="bg-black">
        <div className="flex ai-c no-shrink">
          <IconDenom denom={metadata.symbol} />
          <h3>{metadata.symbol}</h3>
          {IsMergable(
            selected?.network || Network.Thorchain,
            metadata.symbol
          ) && (
            <Link
              to={`/migrate?token=${metadata.symbol}`}
              className="tag tag--md tag--teal ml-1">
              migratable
            </Link>
          )}
        </div>
      </th>
      <td className="text-right">
        {price?.current ? <>${priceFormatter(BigInt(price.current))}</> : null}
      </td>
      <td className="text-right">
        <div
          className={clsx({
            "flex ai-c jc-e": true,
            "color-teal": price?.changeDay && price.changeDay > 0,
            "color-red": price?.changeDay && price.changeDay < 0,
          })}>
          {price?.changeDay ? (
            <>
              {price.changeDay.toLocaleDecimal(3)}%
              {price.changeDay > 0 ? (
                <TrendUp className="h-2 w-a ml-0.5" />
              ) : (
                <TrendDown className="h-2 w-a ml-0.5" />
              )}
            </>
          ) : null}
        </div>
      </td>
      <td className="text-right">
        {amount ? (
          <Decimal
            amount={BigInt(amount)}
            decimals={metadata.decimals}
            round={6}
          />
        ) : selected?.network !== Network.Thorchain && amount ? (
          <Link to={``} className="tag tag--md tag--teal ml-1">
            deposit
          </Link>
        ) : null}
      </td>
      <td className="text-right">
        {price?.current && value ? (
          <Fiat amount={value} decimals={12} symbol="$" padSymbol={false} />
        ) : null}
      </td>
      <td className="text-right">
        <Popout buttonClassName="button--outline button--grey">
          <TokenActions
            k={k}
            d={d}
            network={selected?.network}
            asset={asset}
            symbol={metadata.symbol}
          />
        </Popout>
      </td>
    </tr>
  );
};

const TokenActions: FC<{
  k?: WithdrawFragment$key;
  d?: BalancesDepositFragment$key;
  network?: Network;
  symbol: string;
  asset: Asset;
}> = ({ k, d, network, symbol, asset }) => {
  const { showModal, hideModal } = useGlobalModalContext();
  const x = useFragment(depositFragment, d);

  const withdraw = () => {
    showModal({
      title: `Withdraw ${symbol}`,
      backgroundClose: false,
      children: (
        <Withdraw k={k} asset={asset} symbol={symbol} cancel={hideModal} />
      ),
    });
  };

  const deposit = () => {
    showModal({
      backgroundClose: false,
      children: <Deposit selected={asset} k={x || undefined} />,
    });
  };

  const doSwitch = () => {
    showModal({
      backgroundClose: false,
      children: <Switch selected={asset} />,
    });
  };

  const send = () => {
    showModal({
      //title: `Send ${symbol}`,
      backgroundClose: false,
      children: <Send asset={asset} symbol={symbol} cancel={hideModal} />,
    });
  };

  const canDeposit = !!x?.pools.find((a) => a.asset.asset === asset.asset);
  const canSwitch = !!SWITCH_ASSETS.find((a) => a.asset === asset.asset);

  return (
    <nav>
      {IsMergable(network || Network.Thorchain, symbol) && (
        <Link to={`/merge?token=${symbol}`}>
          <Merge />
          Merge
        </Link>
      )}
      {network !== Network.Thorchain && canDeposit ? (
        <button onClick={deposit}>
          <Icons.Deposit />
          Deposit
        </button>
      ) : asset.type === "SECURED" ? (
        <button onClick={withdraw}>
          <Icons.Withdraw />
          Withdraw
        </button>
      ) : null}

      {canSwitch && (
        <a onClick={doSwitch}>
          <Icons.Deposit />
          Switch
        </a>
      )}

      <button onClick={send}>
        <MoneyTransfer />
        Send
      </button>
      <Link to={`/swap?from=${asset}`}>
        <Swap />
        Swap
      </Link>
      <Link to={`/trade`}>
        <Chart />
        Trade
      </Link>
    </nav>
  );
};

const IsMergable = (network: Network, symbol: string) => {
  return (
    (network === Network.Kujira ||
      network === Network.Gaia ||
      network === Network.Thorchain) &&
    (symbol === "KUJI" ||
      symbol === "rKUJI" ||
      symbol === "RKUJI" ||
      symbol === "FUZN" ||
      symbol === "WINK" ||
      symbol === "NSTK" ||
      symbol === "LVN")
  );
};
