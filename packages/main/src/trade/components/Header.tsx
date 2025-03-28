import { FC, useEffect, useState } from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import {
  Decimal,
  Fiat,
  IconDenom,
  Icons,
  nFormatter,
  useWindowSize,
} from "rujira.ui";
import { StarSolid, TrendDown } from "rujira.ui/src/components/icons/Icons";
import { HeaderTradeFragment$key } from "./__generated__/HeaderTradeFragment.graphql";
const { AngleDown, Star, TrendUp } = Icons;

const fragment = graphql`
  fragment HeaderTradeFragment on FinPair {
    address
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
    }
    summary {
      last
      lastUsd
      high
      low
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

export const Header: FC<{
  k?: HeaderTradeFragment$key;
  openDrawer: () => void;
}> = ({ k, openDrawer }) => {
  const data = useFragment(fragment, k);

  let favorites = JSON.parse(localStorage.getItem("trade.favorites") || "[]");
  const [fav, setFav] = useState(
    favorites.findIndex((a: string) => a === data?.address) > -1
  );
  const { width } = useWindowSize();
  const min = 470;

  const decimals = 4; // get from base denom
  const change = BigInt(data?.summary?.change || 0);

  const updateFav = (address: string) => {
    favorites = JSON.parse(localStorage.getItem("trade.favorites") || "[]");
    const i = favorites.findIndex((a: string) => a === address);
    if (i > -1) {
      favorites.splice(i, 1);
    } else {
      favorites.push(address);
    }
    localStorage.setItem("trade.favorites", JSON.stringify(favorites));
  };

  const starClick = () => {
    updateFav(data?.address || "");
    setFav(!fav);
  };

  useEffect(() => {
    function fetchFavs() {
      favorites = JSON.parse(localStorage.getItem("trade.favorites") || "[]");
      setFav(favorites.findIndex((a: string) => a === data?.address) > -1);
    }
    window.addEventListener("favorites", fetchFavs);
    return () => window.removeEventListener("favorites", fetchFavs);
  }, []);

  return (
    <div className="trade__header">
      <button
        className="trade__header-pair"
        onClick={() => {
          openDrawer();
        }}>
        <IconDenom
          denom={data?.assetBase.metadata.symbol || ""}
          className="denom"
        />
        <IconDenom
          denom={data?.assetQuote.metadata.symbol || ""}
          className="denom"
        />
        <h1>
          {data?.assetBase.metadata.symbol} <span>/</span>{" "}
          {data?.assetQuote.metadata.symbol}
        </h1>
        <AngleDown />
      </button>
      <div className="trade__header-price">
        <Decimal
          amount={BigInt(data?.summary?.last || 0)}
          decimals={12}
          round={width < min ? 4 : decimals}
          as="h2"
        />
        <Fiat
          amount={BigInt(data?.summary?.lastUsd || 0)}
          decimals={12}
          symbol="$"
          padSymbol={false}
        />
      </div>
      <div className="trade__header-stat">
        <h4>24h Change</h4>
        {change > 0n ? (
          <div className="flex ai-c color-teal">
            <span>+{(Number(change) / 10 ** 12).toLocaleDecimal(2)}%</span>
            <TrendUp className="block w-2 ml-0.5" />
          </div>
        ) : change < 0n ? (
          <div className="flex ai-c color-red">
            <span>{(Number(change) / 10 ** 12).toLocaleDecimal(2)}%</span>
            <TrendDown className="block w-2 ml-0.5" />
          </div>
        ) : (
          <div className="flex ai-c color-teal">
            <span>0.00%</span>
          </div>
        )}
      </div>
      <div className="trade__header-stat">
        <h4>24h High</h4>
        <Decimal
          amount={BigInt(data?.summary?.high || 0)}
          decimals={12}
          round={width < min ? 4 : decimals}
        />
      </div>
      <div className="trade__header-stat">
        <h4>24h Low</h4>
        <Decimal
          amount={BigInt(data?.summary?.low || 0)}
          decimals={12}
          round={width < min ? 4 : decimals}
        />
      </div>
      <div className="trade__header-stat">
        <h4>24h Volume</h4>
        <div>
          {nFormatter(
            BigInt(data?.summary?.volume.amount || 0),
            width < min ? 2 : 3,
            data?.summary?.volume.asset.metadata.decimals || 0
          )}
        </div>
      </div>
      {fav ? (
        <StarSolid
          className="trade__header-favorite trade__header-favorite--solid"
          onClick={starClick}
        />
      ) : (
        <Star className="trade__header-favorite" onClick={starClick} />
      )}
      <div className="break"></div>
    </div>
  );
};
