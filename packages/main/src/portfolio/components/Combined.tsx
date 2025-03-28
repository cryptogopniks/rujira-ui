import { Decimal, Fiat, IconDenom, NetworkIcon } from "rujira.ui";
import { priceFormatter } from "../utils";
import clsx from "clsx";
import { TrendDown, TrendUp } from "rujira.ui/src/components/icons/Icons";
import { Network } from "rujira.js";

export const Combined = () => {
  return (
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
              <th className="w-1"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="bg-black">
                <div className="flex ai-c no-shrink">
                  <IconDenom denom="USDC" />
                  <h3>USDC</h3>
                </div>
              </th>
              <td className="text-right">${priceFormatter(1000000000000n)}</td>
              <td>
                <div
                  className={clsx({
                    "flex ai-c jc-e": true,
                    "color-teal": true, //price?.changeDay && price.changeDay > 0,
                    "color-red": false, //price?.changeDay && price.changeDay < 0,
                  })}>
                  {
                    /* price?.changeDay */ true ? (
                      <>
                        {/* price.changeDay.toLocaleDecimal(3) */}0.1%
                        {
                          /* price.changeDay */ 1 > 0 ? (
                            <TrendUp className="h-2 w-a ml-1" />
                          ) : (
                            <TrendDown className="h-2 w-a ml-1" />
                          )
                        }
                      </>
                    ) : null
                  }
                </div>
              </td>
              <td className="text-right">
                <Decimal
                  amount={20000000000n}
                  decimals={6 /* metadata.decimals */}
                  round={6}
                />
              </td>
              <td className="text-right">
                {
                  /* price?.current && value */ true ? (
                    <Fiat
                      amount={20000000000000000n}
                      decimals={12}
                      symbol="$"
                      padSymbol={false}
                    />
                  ) : null
                }
              </td>
              <td className="nowrap">
                <div className="portfolio__networks">
                  <NetworkIcon network={Network.Ethereum} />
                  <NetworkIcon network={Network.Avalanche} />
                  <NetworkIcon network={Network.Base} />
                  <NetworkIcon network={Network.Kujira} />
                  <NetworkIcon network={Network.Gaia} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
