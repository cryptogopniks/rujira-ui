import { FC } from "react";
import { useFragment } from "react-relay";
import { graphql, Result } from "relay-runtime";
import { networkLabel } from "rujira.js";
import { DenomSelect, Fiat } from "rujira.ui";
import { tokenValue } from "../../portfolio/utils";
import { useAccounts } from "../../services/accounts";
import { Asset, RUNE } from "../../services/asset";
import { InputsBalancesFragment$key } from "./__generated__/InputsBalancesFragment.graphql";
import { InputsFragment$key } from "./__generated__/InputsFragment.graphql";
import { InputsQuoteFragment$key } from "./__generated__/InputsQuoteFragment.graphql";
import { useSwapContext } from "./Context";

const balanceFragment = graphql`
  fragment InputsBalancesFragment on Layer1Account {
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
        type
      }
    }
  }
`;

const quoteFragment = graphql`
  fragment InputsQuoteFragment on Quote {
    expectedAssetOut {
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

const fragment = graphql`
  fragment InputsFragment on Thorchain {
    rune {
      price {
        current
      }
      metadata {
        decimals
      }
    }
    pools {
      status
      asset {
        asset
        type
        chain
        price {
          current
        }

        metadata {
          symbol
          decimals
        }
        type
      }
      assetTorPrice
    }
  }
`;

export const InputTo: FC<{
  r?: InputsFragment$key;
  q?: InputsBalancesFragment$key;
  k?: Result<InputsQuoteFragment$key | undefined | null, unknown>;
}> = ({ r, k }) => {
  const { fromAsset, toAsset, setSwap, setDestination } = useSwapContext();
  const { selected, accounts } = useAccounts();

  const quote = useFragment(quoteFragment, k?.ok ? k.value : undefined);
  const tc = useFragment(fragment, r);

  const out = quote?.expectedAssetOut;

  const valueTo = tokenValue(
    BigInt(out?.amount || 0),
    8,
    BigInt(out?.asset.price?.current || 0)
  );

  const amount = toAsset
    ? (BigInt(quote?.expectedAssetOut.amount || 0) *
        10n ** BigInt(toAsset?.metadata.decimals)) /
      10n ** 8n
    : 0n;

  const options = (tc?.pools || [])
    .reduce(
      (a, v) => {
        if (v.status !== "AVAILABLE") return a;
        return v.asset && v.asset.asset !== fromAsset?.asset
          ? [
              {
                asset: v.asset as Asset,
                network: v.asset.chain,
              },
              ...a,
            ]
          : a;
      },
      [{ asset: RUNE }]
    )
    .sort((a, b) =>
      a.asset.metadata.symbol.localeCompare(b.asset.metadata.symbol)
    );

  return (
    <div className="swap__select">
      <DenomSelect
        selected={toAsset}
        network={toAsset?.chain}
        options={options}
        onSelect={(v) => {
          setDestination(
            accounts?.find(
              (x) => x.provider === selected?.provider && x.network === v.chain
            ) || accounts?.find((x) => x.network === v.chain)
          );

          setSwap(fromAsset, v);
        }}
        amount={amount}
      />
      <div
        className="swap__value"
        data-tooltip-id="swap-tip"
        data-tooltip-html={`${toAsset?.metadata.symbol} value`}>
        <Fiat amount={valueTo} decimals={12} symbol="$" />
      </div>
    </div>
  );
};

export const InputFrom: FC<{
  r?: InputsFragment$key;
  q?: InputsBalancesFragment$key;
}> = ({ r, q }) => {
  const { fromAsset, fromAmount, setFromAmount, toAsset, setSwap } =
    useSwapContext();
  const account = useAccounts().selected;
  const data = useFragment(balanceFragment, q);
  const balance = data?.balances?.find(
    (x) => x.asset.asset === fromAsset?.asset
  );
  const { selected } = useAccounts();

  const tc = useFragment(fragment, r);

  const options = (tc?.pools || [])
    .reduce(
      (a, v) => {
        return v.asset && v.asset.asset !== fromAsset?.asset
          ? [
              {
                asset: v.asset as Asset,
                network:
                  account?.network !== v.asset.chain ? v.asset.chain : false,
                balance:
                  selected && v.asset.chain === selected.network
                    ? 0n
                    : undefined,
              },
              ...a,
            ]
          : a;
      },
      [{ asset: RUNE }]
    )
    .sort((a, b) => {
      const aSel = a.asset.chain === selected?.network;
      const bSel = b.asset.chain === selected?.network;
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (
        a.asset.metadata.symbol.localeCompare(b.asset.metadata.symbol) ||
        networkLabel(a.asset.chain).localeCompare(networkLabel(b.asset.chain))
      );
    });

  const poolAsset =
    fromAsset?.metadata.symbol === "RUNE"
      ? tc?.rune
      : tc?.pools.find((x) => fromAsset?.asset === x.asset.asset)?.asset;

  const valueFrom = tokenValue(
    fromAmount,
    poolAsset?.metadata?.decimals || 8,
    BigInt(poolAsset?.price?.current || 0)
  );

  return (
    <div className="swap__select">
      <DenomSelect
        selected={fromAsset}
        options={options}
        onSelect={(v: any) => {
          setSwap(v, toAsset);
        }}
        max={BigInt(balance?.amount || 0)}
        amount={fromAmount}
        onChangeAmount={(a: bigint) => setFromAmount(a)}
        network={fromAsset?.chain}
      />
      <div
        className="swap__value"
        data-tooltip-id="swap-tip"
        data-tooltip-html={`${fromAsset?.metadata.symbol} value`}>
        <Fiat amount={valueFrom} symbol="$" decimals={12} />
      </div>
    </div>
  );
};
