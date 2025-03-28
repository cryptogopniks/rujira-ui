import clsx from "clsx";
import { useMemo, useRef } from "react";
import { uuidv4 } from "../../helpers";
import { DecimalInput } from "./DecimalInput";

export const Numeric = ({
  label,
  amount,
  decimals = 8,
  onChangeAmount,
  disabled,
  full,
  className,
}: {
  label?: string;
  amount: bigint;
  decimals?: number;
  onChangeAmount: (a: bigint) => void;
  disabled?: boolean;
  full?: boolean;
  className?: string;
}) => {
  const input = useRef<HTMLDivElement>(null);

  const id = useMemo(() => uuidv4(), []);

  return (
    <div
      className={clsx({
        "numeric-input condensed": true,
        "numeric-input--full": full,
        "numeric-input--disabled": disabled,
        [`${className}`]: className,
      })}
      onClick={() => {
        if (!disabled) input.current?.focus();
      }}>
      {label && <label>{label}</label>}
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
