import { FC, useEffect, useState } from "react";
import {
  NumericFormat,
  NumericFormatProps,
  OnValueChange,
} from "react-number-format";

/**
 * An decimalised representation of a number. Used to avoid the use of Number
 * and the floating point arithmetic issues that it can cause
 */
interface Num {
  int: bigint;
  dec: bigint;
  decimals: number;
}

const separators = () => {
  const formatter = new Intl.NumberFormat();
  const parts = formatter.formatToParts(12345.6);
  const group = parts.find((p) => p.type === "group")?.value || ",";
  const decimal = parts.find((p) => p.type === "decimal")?.value || ".";
  return { group, decimal };
};

const div = (v: bigint, decimals: number): Num => {
  const decs = 10n ** BigInt(decimals);
  const int = (v / decs) * decs;
  const dec = v - int;
  return { dec, int: int / decs, decimals };
};

const toString = ({ dec, int, decimals }: Num): string => {
  const { decimal } = separators();
  const decs = dec.toString().padStart(decimals, "0").replace(/0+$/, "");
  return dec > 0n ? `${int}${decimal}${decs}` : `${int}`;
};

export const DecimalInput: FC<
  NumericFormatProps & {
    amount: bigint;
    onAmountchange: (v: bigint) => void;
    decimals?: number;
  }
> = ({ amount, decimals = 8, onAmountchange, disabled, ...rest }) => {
  const [value, setValue] = useState(toString(div(amount, decimals)));
  const { group, decimal } = separators();

  const handleInput: OnValueChange = (values) => {
    setValue(values.formattedValue);
    onAmountchange(BigInt(Math.floor(Number(values.value) * 10 ** decimals)));
  };

  useEffect(() => {
    const formatted = toString(div(amount, decimals));
    if (formatted !== value) setValue(formatted);
  }, [amount]);

  return (
    <NumericFormat
      allowNegative={false}
      decimalScale={decimals}
      decimalSeparator={decimal}
      thousandSeparator={group}
      disabled={disabled}
      placeholder="0"
      value={value}
      onValueChange={handleInput}
      {...rest}
    />
  );
};
