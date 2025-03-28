import clsx from "clsx";
import { whatDecimalSeparator } from "../../helpers";

export const Decimal = ({
  amount,
  decimals = 8,
  round = 6,
  symbol,
  symbolLeft,
  className,
  onClick,
  as: Component = "div",
}: {
  amount: bigint;
  decimals?: number;
  round?: number;
  symbol?: string;
  symbolLeft?: boolean;
  className?: string;
  onClick?: () => void;
  as?: React.ElementType;
}) => {
  const dec = amount % BigInt(10 ** decimals);
  const int = BigInt(Math.round(Number(amount - dec) / 10 ** decimals));
  const padded = dec.toString().padStart(decimals, "0");
  const trimmed = padded.substring(0, round);

  return (
    <Component
      className={clsx({
        decimal: true,
        "decimal--label-left": symbolLeft,
        [`${className}`]: className,
      })}
      onClick={onClick}>
      <span className="decimal__int">
        {(int || "0").toLocaleString()}
        {round > 0 && whatDecimalSeparator()}
      </span>
      {dec.toString().length && round > 0 && (
        <span className="decimal__dec">{trimmed}</span>
      )}
      {symbol && <span className="decimal__symbol">{symbol}</span>}
    </Component>
  );
};
