import clsx from "clsx";
import { FC, Suspense, useState } from "react";
import { useFragment, useLazyLoadQuery } from "react-relay";
import { useNavigate } from "react-router-dom";
import { graphql } from "relay-runtime";
import {
  Decimal,
  IconDenom,
  Icons,
  Input,
  nFormatter,
  useQueryParam,
} from "rujira.ui";
import { toFinAssetId } from "../Trade";
import { MarketsItemFragment$key } from "./__generated__/MarketsItemFragment.graphql";
import { MarketsQuery } from "./__generated__/MarketsQuery.graphql";

const sections = ["Featured", "USDC", "BTC", "ETH", "RUNE", "All", "favorites"];

const query = graphql`
  query MarketsQuery {
    rujira {
      fin {
        id
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

        ...MarketsItemFragment
      }
    }
  }
`;

export const Markets = ({ closeDrawer }: { closeDrawer: () => void }) => {
  const [q, setQ] = useQueryParam<string>("q", "featured");
  const [s, setS] = useQueryParam<string>("s", "");

  return (
    <div className="drawer__card trade__markets">
      <Input
        label="Search"
        value={s}
        onChange={(e) => setS(e.currentTarget.value.toLowerCase())}
      />
      <nav className="tabs tabs--sm mt-0.5 wrap">
        {sections.map((s) => (
          <a
            key={`market_section_${s.toLowerCase()}`}
            className={clsx({
              "mt-0.5": true,
              selected: q === s.toLowerCase(),
              "px-1": s === "favorites",
            })}
            onClick={() => setQ(s.toLowerCase())}>
            {s === "favorites" ? (
              <Icons.StarSolid className="w-2 h-2 ml-0" />
            ) : (
              s
            )}
          </a>
        ))}
      </nav>
      <div className="trade__markets-overflow mt-3">
        <table className="table table--spaced table--va-m">
          <thead className="border">
            <tr>
              <th className="nopad w-1"></th>
              <th>Pair</th>
              <th className="text-right">Last Price</th>
              <th className="text-right">Change</th>
              <th className="text-right">Volume</th>
            </tr>
          </thead>
          <tbody>
            <Suspense fallback={<Fallback />}>
              <Content closeDrawer={closeDrawer} />
            </Suspense>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Content: FC<{ closeDrawer: () => void }> = ({ closeDrawer }) => {
  const data = useLazyLoadQuery<MarketsQuery>(
    query,
    {},
    { fetchPolicy: "store-and-network" }
  );

  const [s] = useQueryParam<string>("s", "");

  return data.rujira?.fin
    .filter((x) =>
      (x.assetBase.metadata.symbol + " " + x.assetQuote.metadata.symbol)
        .toLowerCase()
        .toLowerCase()
        .includes(s)
    )
    .map((x) => <Item key={x.address} k={x} closeDrawer={closeDrawer} />);
};

const fragment = graphql`
  fragment MarketsItemFragment on FinPair {
    id
    address
    assetBase {
      asset
      chain
      metadata {
        symbol
        decimals
      }
    }
    assetQuote {
      asset
      chain
      metadata {
        symbol
        decimals
      }
    }
    summary {
      last
      change
      volume {
        asset {
          asset
          metadata {
            decimals
          }
        }
        amount
      }
    }
  }
`;

const Item: FC<{ k: MarketsItemFragment$key; closeDrawer: () => void }> = ({
  k,
  closeDrawer,
}) => {
  const navigate = useNavigate();
  const x = useFragment(fragment, k);

  let favorites = JSON.parse(localStorage.getItem("trade.favorites") || "[]");
  const [fav, setFav] = useState(
    favorites.findIndex((a: string) => a === x?.address) > -1
  );

  const updateFav = (address: string) => {
    favorites = JSON.parse(localStorage.getItem("trade.favorites") || "[]");
    const i = favorites.findIndex((a: string) => a === address);
    if (i > -1) {
      favorites.splice(i, 1);
    } else {
      favorites.push(address);
    }
    localStorage.setItem("trade.favorites", JSON.stringify(favorites));
    setFav(!fav);
    window.dispatchEvent(new Event("favorites"));
  };

  const change = BigInt(x.summary?.change || 0);
  return (
    <tr
      key={x.address}
      onClick={() => {
        navigate(
          `/trade/${toFinAssetId(x.assetBase)}/${toFinAssetId(x.assetQuote)}`
        );
        closeDrawer();
      }}>
      <td className="nopad">
        <button
          className="transparent p-1.5 color-grey pointer"
          onClick={(e) => {
            e.stopPropagation();
            updateFav(x.address);
          }}>
          {fav ? (
            <Icons.StarSolid className="w-2 h-2" />
          ) : (
            <Icons.Star className="w-2 h-2" />
          )}
        </button>
      </td>
      <td>
        <div className="flex ai-c">
          <div className="pair mr-0.5">
            <IconDenom className="w-2" denom={x.assetBase.metadata.symbol} />
            <IconDenom className="w-2" denom={x.assetQuote.metadata.symbol} />
          </div>
          {x.assetBase.metadata.symbol}
          <span className="color-grey ml-0.5">
            {x.assetQuote.metadata.symbol}
          </span>
        </div>
      </td>
      <td className="text-right">
        <Decimal
          amount={BigInt(x?.summary?.last || 0)}
          decimals={12}
          round={4}
        />
      </td>
      <td
        className={clsx({
          "text-right": true,
          "color-teal": change > 0n,
          "color-red": change < 0n,
        })}>
        {change > 0n ? "+" : ""}
        {(Number(change) / 10 ** 12).toLocaleDecimal(2)}%
      </td>
      <td className="text-right">
        {nFormatter(
          BigInt(x.summary?.volume.amount || 0),
          2,
          x.summary?.volume.asset.metadata.decimals || 0
        )}
      </td>
    </tr>
  );
};

const Fallback = () => (
  <>
    {[...Array(10)].map((_, i) => (
      <tr key={`skeleton_${i}`}>
        <td className="nopad w-1"></td>
        <td className={`opacity-${20 - i * 2}`}>
          <div className="flex ai-c">
            <div className="pair mr-0.5">
              <div className="icon-denom skeleton h-2 w-2 br-2" />
              <div className="icon-denom skeleton h-2 w-2 br-2" />
            </div>
            <div className="w-full skeleton h-1.5 w-1.5 br-2" />
          </div>
        </td>
        <td className={`opacity-${20 - i * 2}`}>
          <div className="w-full skeleton h-1.5 w-1.5 br-2" />
        </td>
        <td className={`opacity-${20 - i * 2}`}>
          <div className="w-full skeleton h-1.5 w-1.5 br-2" />
        </td>
        <td className={`opacity-${20 - i * 2}`}>
          <div className="w-full skeleton h-1.5 w-1.5 br-2" />
        </td>
      </tr>
    ))}
  </>
);
