import { FC, MouseEventHandler, PropsWithChildren } from "react";
import { graphql, useFragment } from "react-relay";
import { networkLabel } from "rujira.js";
import { Account, Fiat, i18n, NetworkIcon } from "rujira.ui";
import { mainQuery$data } from "../../__generated__/mainQuery.graphql";
import { ProviderIcon } from "../../common/components/Header";
import { tokenValue } from "../utils";
import {
  ValueFragment$data,
  ValueFragment$key,
} from "./__generated__/ValueFragment.graphql";
//import provider from "rujira.ui/src/wallets/providers/metamask";

export const ValueFragment = graphql`
  fragment ValueFragment on Layer1Account {
    balances {
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
`;

const totals = (data: ValueFragment$data): bigint =>
  (data.balances || []).reduce(
    (a, v) =>
      v.asset.price?.current
        ? a +
          tokenValue(
            BigInt(v.amount),
            v.asset.metadata.decimals,
            BigInt(v.asset.price.current)
          )
        : a,
    0n
  );

export const Value: FC<{ account?: ValueFragment$key }> = ({ account }) => {
  const data = useFragment(ValueFragment, account);
  const total = data ? totals(data) : 0n;
  return (
    <div className="card h-full p-3">
      <i18n.h3 className="fs-16 lh-22 fw-400 color-grey">Wallet Value</i18n.h3>
      <Fiat
        symbol="~$"
        amount={total}
        decimals={12}
        className="fs-42 condensed fw-500 mt-1"
      />
      <p className="color-grey mb-0 fs-12 fw-500 mt-0.5">
        Excluding migrating RUJI
      </p>
    </div>
  );
};

export const AccountItem: FC<{
  account: Account;
  q?: mainQuery$data;
  onClick: MouseEventHandler<HTMLButtonElement>;
}> = ({ account, q, onClick }) => {
  const k: ValueFragment$key | undefined =
    q?.nodes.find(
      (a) => a.address === account.address && a.chain === account.network
    ) || undefined;
  const data = useFragment(ValueFragment, k);
  const total = data ? totals(data) : 0n;

  return (
    <AccountItemSimple account={account} onClick={onClick}>
      <span className="tag tag--md ml-a mr-0">
        <Fiat
          className=""
          amount={total}
          decimals={12}
          symbol="$"
          padSymbol={false}
        />
      </span>
    </AccountItemSimple>
  );
};

export const AccountItemSimple: FC<
  PropsWithChildren<{
    account: Account;
    onClick: MouseEventHandler<HTMLButtonElement>;
  }>
> = ({ account, onClick, children }) => {
  return (
    <button onClick={onClick}>
      <div className="flex ai-c w-full">
        <div className="flex">
          <NetworkIcon
            network={account.network}
            className="block w-3.5 h-3.5 mr-1"
          />
        </div>
        <div className="mr-2 flex dir-c ai-s">
          <span className="fs-12 color-white">
            {/* width > BreakPoints.large
              ? account.address
              : account.address.substring(0, 20) +
                "..." +
                account.address.slice(-20) */}
            {account.address.substring(0, 12) +
              "..." +
              account.address.slice(-12)}
          </span>
          <div
            className="fs-10 mt-0.5 flex ai-c"
            style={{ marginLeft: "-1rem" }}>
            <ProviderIcon
              provider={account.provider}
              className="block w-1.5 h-a mr-0.5"
              selected={true}
            />
            {account.provider} - {networkLabel(account.network)}
          </div>
        </div>
        {children}
      </div>
    </button>
  );
};
