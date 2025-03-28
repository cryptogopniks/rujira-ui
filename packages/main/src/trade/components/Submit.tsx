import clsx from "clsx";
import { FC, useMemo, useState } from "react";
import { NumericFormat } from "react-number-format";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { MsgExec } from "rujira.js";
import { Decimal, Numeric, Select, useQueryParam } from "rujira.ui";
import { Drawer } from "vaul";
import { TxButton } from "../../common/components/TxButton";
import { useMsgAssetFragment } from "../../services/msg";
import { OrderType, Side } from "../types";
import { SubmitBalanceFragment$key } from "./__generated__/SubmitBalanceFragment.graphql";
import { SubmitFragment$key } from "./__generated__/SubmitFragment.graphql";

const fragment = graphql`
  fragment SubmitFragment on FinPair {
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
  }
`;

const balanceFragment = graphql`
  fragment SubmitBalanceFragment on Layer1Balance {
    amount
    asset {
      metadata {
        decimals
      }
      ...msgAssetFragment
    }
  }
`;

export const LaunchModal: FC<{
  k?: SubmitFragment$key;
  onClick: (s: Side) => void;
}> = ({ k, onClick }) => {
  const d = useFragment(fragment, k);

  return (
    <div className="trade__launch">
      <Drawer.Trigger
        className="button button--small button--blue w-full"
        onClick={() => onClick(Side.Quote)}>
        Buy {d?.assetBase.metadata.symbol}
      </Drawer.Trigger>
      <Drawer.Trigger
        className="button button--small button--red w-full"
        onClick={() => onClick(Side.Base)}>
        Sell {d?.assetQuote.metadata.symbol}
      </Drawer.Trigger>
    </div>
  );
};

const adjust = (v: bigint, r: number) => (BigInt(r * 100) * v) / 100n;

export const Submit: FC<{
  k?: SubmitFragment$key;
  kbb?: SubmitBalanceFragment$key;
  kbq?: SubmitBalanceFragment$key;
  side: Side;
  setSide: (v: Side) => void;
}> = ({ k, kbb, kbq, side, setSide }) => {
  const [type, setType] = useQueryParam<OrderType>(
    "order",
    OrderType.LimitFixed
  );

  const [amount, setAmount] = useState(0n);
  const [price, setPrice] = useState("");
  const d = useFragment(fragment, k);

  const balanceBase = useFragment(balanceFragment, kbb);
  const balanceQuote = useFragment(balanceFragment, kbq);
  const kAsset = side === Side.Base ? balanceBase : balanceQuote;

  const asset = useMsgAssetFragment(kAsset?.asset);

  const orders = price
    ? type === OrderType.LimitFixed
      ? [[side, { fixed: price }, amount.toString()]]
      : type === OrderType.LimitOracle
        ? [[side, { oracle: Number(price) }, amount.toString()]]
        : []
    : null;

  const balance = side === Side.Base ? balanceBase : balanceQuote;
  const max = BigInt(balance?.amount || 0);
  const exec =
    type === OrderType.Market
      ? { swap: {} }
      : orders
        ? { order: [orders, null] }
        : null;

  const msg = useMemo(
    () =>
      exec && asset && d ? new MsgExec(asset, amount, d.address, exec) : null,
    [asset, amount, d?.address, exec]
  );

  return (
    <>
      <div className="trade__submit">
        <div className="row wrap pad-mini">
          <div className="col-12 col-sm-6 col-lg-12 col-xl-6">
            <div
              className={`grow trade__submit-switch trade__submit-switch--${side}`}>
              <button onClick={() => setSide(Side.Quote)}>Buy</button>
              <button onClick={() => setSide(Side.Base)}>Sell</button>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-12 col-xl-6 mt-1 mt-sm-0 mt-lg-1 mt-xl-0">
            <Select
              className="select--white select--md"
              onChange={(e) => setType(e.target.value as OrderType)}>
              <option value={OrderType.LimitFixed}>Limit</option>
              <option value={OrderType.LimitOracle}>Oracle</option>
              <option value={OrderType.Market}>Market</option>
            </Select>
          </div>
        </div>
        <NumericFormat
          className="mt-1.5 numeric-input numeric-input--white condensed"
          allowNegative={type === OrderType.LimitOracle}
          placeholder="0"
          value={price}
          disabled={type === OrderType.Market}
          onValueChange={(x) => setPrice(x.value)}
        />
        {/* <Numeric
          label={d ? `Price (${d.assetQuote?.metadata.symbol})` : ""}
          amount={0n}
          onChangeAmount={() => {}}
          className="mt-1.5 numeric-input--white"
          disabled={type === OrderType.Market}
        /> */}
        <Numeric
          label="Quantity"
          amount={amount}
          onChangeAmount={setAmount}
          className="mt-1 numeric-input--white"
        />
        <div className="button-group button-group--no-border mt-1">
          <button onClick={() => setAmount(adjust(max, 0.2))}>20%</button>
          <button onClick={() => setAmount(adjust(max, 0.4))}>40%</button>
          <button onClick={() => setAmount(adjust(max, 0.6))}>60%</button>
          <button onClick={() => setAmount(adjust(max, 0.8))}>80%</button>
          <button onClick={() => setAmount(adjust(max, 1.0))}>100%</button>
        </div>

        <div className="row wrap pad-tight fs-12 color-grey condensed mt-1 px-0.5 mb-3.5">
          <div className="col-12 col-sm-6 col-lg-12 col-xl-6">
            <div className="flex mt-0.5">
              <div className="col">Available</div>
              <div className="col text-right color-white">
                <Decimal
                  amount={BigInt(balance?.amount || "0")}
                  decimals={balance?.asset.metadata.decimals}
                />
              </div>
            </div>
            <div
              className="flex mt-0.5"
              data-tooltip-id="submit-tip"
              data-tooltip-content="A fee of 0.00% is paid to RUJI stakers">
              {type === OrderType.Market ? (
                <div className="col">Estimated Fee*</div>
              ) : (
                <div className="col">Fee*</div>
              )}
              <div className="col text-right color-white">0.000000</div>
            </div>
          </div>
          {type === OrderType.Market ? (
            <div
              className="col-12 col-sm-6 col-lg-12 col-xl-6"
              data-tooltip-id="submit-tip"
              data-tooltip-content="Estimated rates cannot be guaranteed">
              <div className="flex mt-0.5">
                <div className="col">Estimated Return*</div>
                <div className="col text-right color-white">0.000000</div>
              </div>
              <div className="flex mt-0.5">
                <div className="col">Estimated Rate*</div>
                <div className="col text-right color-white">0.000000</div>
              </div>
              <div className="flex mt-0.5">
                <div className="col">Price Impact*</div>
                <div className="col text-right color-white">0.000000</div>
              </div>
            </div>
          ) : (
            <div className="col-12 col-sm-6 col-lg-12 col-xl-6">
              <div className="flex mt-0.5">
                <div className="col">Return</div>
                <div className="col text-right color-white">0.000000</div>
              </div>
            </div>
          )}
        </div>

        <TxButton
          msg={msg}
          label={`${side === Side.Quote ? "Buy" : "Sell"} ${d?.assetBase ? d?.assetBase.metadata.symbol : ""}`}
          className={clsx({
            "w-full": true,
            "button--blue": side == Side.Quote,
            "button--red": side == Side.Base,
          })}
        />
      </div>
    </>
  );
};
