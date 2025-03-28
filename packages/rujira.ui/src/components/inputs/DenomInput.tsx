import clsx from "clsx";
import { useMemo, useRef } from "react";
import { uuidv4 } from "../../helpers";
import { i18n } from "../../i18n";
import { Button } from "../buttons/Button";
import { IconDenom } from "../icons/IconDenom";
import { Decimal } from "../numbers/Decimal";
import { DecimalInput } from "./DecimalInput";

export const DenomInput = ({
  symbol,
  amount,
  decimals,
  onChangeAmount,
  disabled,
  full,
  max,
  className,
}: {
  symbol: string;
  amount: bigint;
  decimals: number;
  onChangeAmount: (a: bigint) => void;
  disabled?: boolean;
  full?: boolean;
  max?: bigint;
  className?: string;
}) => {
  const input = useRef<HTMLDivElement>(null);
  const id = useMemo(() => uuidv4(), []);

  return (
    <div
      className={clsx({
        "denom-select condensed": true,
        "denom-select--full": full,
        "denom-select--disabled": disabled,
        [`${className}`]: className,
      })}
      onClick={() => {
        if (!disabled) input.current?.focus();
      }}>
      {max !== undefined && (
        <Button
          className="button--xsmall button--icon-right denom-select__balance denom-select__max"
          label={i18n.t("Max:")}
          onClick={() => onChangeAmount(max)}>
          <Decimal amount={max} decimals={decimals} className="fw-700" />
        </Button>
      )}
      <div className="denom-select__selected">
        <IconDenom denom={symbol} />
        <span>{symbol}</span>
      </div>
      <DecimalInput
        getInputRef={input}
        decimals={decimals}
        disabled={disabled}
        amount={amount}
        onAmountchange={onChangeAmount}
        id={id}
      />
    </div>
  );
};
