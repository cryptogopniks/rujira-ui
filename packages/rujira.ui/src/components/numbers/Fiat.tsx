import clsx from "clsx";
import { whatDecimalSeparator } from "../../helpers";

export const Fiat = ({
  amount,
  decimals = 2,
  symbol,
  className,
  symbolRight = false,
  padSymbol = true,
  as: Component = "div",
}: {
  amount: bigint;
  decimals?: number;
  symbol?: string;
  className?: string;
  symbolRight?: boolean;
  padSymbol?: boolean;
  as?: React.ElementType;
}) => {
  const dec = amount % BigInt(10 ** decimals);
  const int = BigInt(Math.floor(Number(amount - dec) / 10 ** decimals));

  const round = 2;

  return (
    <Component
      className={clsx({
        fiat: true,
        "fiat--symbol-right": symbolRight,
        [`${className}`]: className,
      })}>
      <span className="fiat__int">
        {(int || "0").toLocaleString()}
        {whatDecimalSeparator()}
      </span>

      <span className="fiat__dec">
        {dec.toString().padStart(decimals, "0").substring(0, round)}
      </span>

      {symbol && (
        <span
          className={clsx({
            fiat__symbol: true,
            "mr-0.5": padSymbol && !symbolRight,
            "ml-0.5": padSymbol && symbolRight,
          })}>
          {symbol}
        </span>
      )}
    </Component>
  );
};
