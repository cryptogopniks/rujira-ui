import React, { useState } from "react";
import { Button, Decimal, IconDenom, Input, Numeric, Toggle } from "rujira.ui";
import { Asset } from "../../../services/asset";
import { MinusCircle, Plus } from "rujira.ui/src/components/icons/Icons";

export const Send: React.FC<{
  symbol: string;
  asset: Asset;
  cancel: () => void;
}> = ({ symbol, cancel }) => {
  const [isStreaming, setIsStreaming] = useState(false);

  return (
    <>
      <h2 className="h3 flex ai-c">
        Send {symbol}
        <IconDenom denom={symbol} className="w-4 h-4 block ml-1" />
      </h2>

      <div className="text-right">
        <button className="tag tag--borderless px-0.5 pointer">
          {symbol} Balance: <span className="color-white ml-0.5">0.000000</span>
        </button>
      </div>

      <Recipients />

      <Toggle
        className="toggle--sm mt-3"
        label="Send as streaming payment"
        checked={isStreaming}
        onChange={(v) => setIsStreaming(v.currentTarget.checked)}
      />

      {isStreaming && <Streaming />}

      <div className="modal__footer mt-4 px-3 py-2 text-right">
        <Button
          className="button--grey button--outline"
          onClick={cancel}
          label="Cancel"
        />
        <Button
          disabled
          className="button ml-1"
          onClick={() => {}}
          label="Send"
          // msg={msg}
        />
        {/* <TxButton
          className="button ml-1"
          onClick={() => {}}
          label="Confirm"
          msg={msg}
        /> */}
      </div>
    </>
  );
};

const Recipients = () => {
  const [recipients, setRecipients] = useState<string[]>([""]);
  const [amounts, setAmounts] = useState<bigint[]>([0n]);
  return (
    <>
      <div className="row pad-mini mt-1.5 condensed fs-14 color-grey">
        <div className="col-8">Recipient Address</div>
        <div className="col-4 text-right mr-0.5">Amount</div>
      </div>
      {recipients.map((r, i) => (
        <div className="row pad-mini mt-1" key={`r_${i}`}>
          <div className="col-8 flex ai-c">
            {i > 0 && (
              <button
                className="transparent color-red hover-white pointer mr-0.5 block"
                onClick={() => {
                  setRecipients(recipients.filter((_, j) => i !== j));
                  setAmounts(amounts.filter((_, j) => i !== j));
                }}>
                <MinusCircle className="w-3 h-3 block" />
              </button>
            )}
            <Input
              type="text"
              value={r}
              onChange={(e) => {
                const newRecipients = [...recipients];
                newRecipients[i] = e.target.value;
                setRecipients(newRecipients);
              }}
              containerClassName="grow"
            />
          </div>
          <div className="col-4">
            <div className="flex ai-c">
              <Numeric
                amount={amounts[i]}
                onChangeAmount={(amount) => {
                  const newAmounts = [...amounts];
                  newAmounts[i] = amount;
                  setAmounts(newAmounts);
                }}
                className="numeric-input--full"
              />
            </div>
          </div>
        </div>
      ))}
      <div className="mt-1 flex w-full pr-0.5">
        <Button
          className="button--xs button--grey button--outline"
          disabled={recipients.some((r) => r === "")}
          onClick={() => {
            setRecipients([...recipients, ""]);
            setAmounts([...amounts, 0n]);
          }}
          label="Add Recipient">
          <Plus />
        </Button>
        <Decimal
          className="ml-a mr-0 fs-14"
          amount={amounts.reduce((acc, curr) => acc + curr, 0n)}
        />
      </div>
    </>
  );
};

const Streaming = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(
    new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
  );

  return (
    <>
      <div className="row pad-mini mt-1.5">
        <div className="col-12 col-sm-6">
          <Input
            type="datetime-local"
            label="Start Date"
            value={startDate?.toISOString().slice(0, -8)}
            onChange={(e) => setStartDate(new Date(e.target.value))}
          />
        </div>
        <div className="col-12 col-sm-6">
          <Input
            type="datetime-local"
            label="End Date"
            value={endDate?.toISOString().slice(0, -8)}
            onChange={(e) => setEndDate(new Date(e.target.value))}
          />
        </div>
      </div>
      <p className="condensed fs-14 lh-18 color-grey mt-1 px-0.5">
        The total amount will be sent equaly over the selected date range.
      </p>
    </>
  );
};
