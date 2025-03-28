import clsx from "clsx";
import { useEffect, useMemo, useRef, useState } from "react";
import { Asset, Network, networkLabel } from "rujira.js";
import { uuidv4 } from "../../helpers";
import { i18n } from "../../i18n";
import { Button } from "../buttons/Button";
import { IconDenom } from "../icons/IconDenom";
import { AngleDown, Glass } from "../icons/Icons";
import { Decimal } from "../numbers/Decimal";
import { DecimalInput } from "./DecimalInput";

export const DenomSelect = <T extends string>({
  selected,
  options,
  onSelect,
  searchValue = "",
  amount,
  onChangeAmount,
  disabled,
  full,
  max,
  label,
  className,
  network,
}: {
  selected?: Asset<T>;
  options?: { asset: Asset<T>; balance?: bigint; network?: Network }[];
  onSelect?: (opt: Asset<T>) => void;
  searchValue?: string;
  amount: bigint;
  onChangeAmount?: (a: bigint) => void;
  disabled?: boolean;
  full?: boolean;
  max?: bigint;
  label?: string;
  className?: string;
  network?: Network;
}) => {
  const readonly = !onChangeAmount;
  const node = useRef<HTMLDivElement>(null);
  const srch = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(searchValue);

  const id = useMemo(() => uuidv4(), []);

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    const ref = srch.current;
    if (ref && open) {
      ref.focus();
    }
    if (!open) {
      setSearch("");
    }
  }, [open]);

  const handleClickOutside = (e: any) => {
    const ref = node.current;
    if (ref) {
      if (ref.contains(e.target)) {
        return;
      }
    }
    e.stopPropagation();
    e.stopImmediatePropagation();

    setOpen(false);
    return false;
  };

  return (
    <div
      ref={node}
      className={clsx({
        "denom-select condensed": true,
        "denom-select--open": open,
        "denom-select--full": full,
        "denom-select--disabled": disabled || options?.length === 0,
        "denom-select--haslabel": label,
        [`${className}`]: className,
      })}>
      {label && (
        <label className="fs-16 fw-500 color-white" htmlFor={id}>
          {i18n.t(label)}
        </label>
      )}
      {max !== undefined && (
        <Button
          className="button--xsmall button--icon-right denom-select__balance denom-select__max"
          label={i18n.t("Max:")}
          onClick={() => onChangeAmount && onChangeAmount(max)}>
          <Decimal
            amount={max}
            decimals={selected?.metadata.decimals}
            className="fw-700"
          />
        </Button>
      )}
      <div
        className="denom-select__selected"
        onClick={() => options && !disabled && setOpen(true)}>
        {open ? (
          <>
            <div className="denom-select__search-icon">
              <Glass />
            </div>
            <input
              ref={srch}
              className="denom-select__search"
              value={search}
              onChange={(e) => setSearch(e.currentTarget.value)}
            />
          </>
        ) : selected ? (
          <>
            <IconDenom denom={selected.metadata.symbol} />
            <div className="flex wrap denom-select__symbol">
              <span className="mr-1">{selected.metadata.symbol}</span>
              {network && (
                <span className="tag tag--sm">{networkLabel(network)}</span>
              )}
            </div>
          </>
        ) : (
          <div className="flex wrap denom-select__symbol">
            <span className="mr-1">...</span>
          </div>
        )}
        {options && <AngleDown />}
      </div>
      <DecimalInput
        getInputRef={node}
        decimals={selected?.metadata.decimals || 0}
        disabled={readonly || disabled}
        amount={amount}
        onAmountchange={(e) => onChangeAmount && onChangeAmount(e)}
        id={id}
      />
      {open && options && (
        <div className="denom-select__dropdown">
          {options
            .filter((v) =>
              v.asset.metadata.symbol
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .map((a) => (
              <a
                key={a.asset.asset}
                onClick={() => {
                  setOpen(false);
                  onSelect && onSelect(a.asset);
                }}>
                <IconDenom denom={a.asset.metadata.symbol} />
                {a.asset.metadata.symbol}
                {a.asset.type === "secured" && (
                  <span className="tag tag--sm tag--orange ml-0.5">
                    Secured
                  </span>
                )}
                {a.asset.type === "secured" && (
                  <span className="tag tag--sm tag--orange ml-0.5">
                    Secured
                  </span>
                )}
                {a.network && (
                  <span className="tag tag--sm ml-0.5">
                    {networkLabel(a.network)}
                  </span>
                )}
                {a.balance === undefined ? null : (
                  <Decimal
                    className="balance"
                    amount={a.balance}
                    decimals={a.asset.metadata.decimals}
                  />
                )}
              </a>
            ))}

          {options.filter((v) =>
            v.asset.metadata.symbol.toLowerCase().includes(search.toLowerCase())
          ).length === 0 && <i18n.a>No results found</i18n.a>}
        </div>
      )}
    </div>
  );
};
