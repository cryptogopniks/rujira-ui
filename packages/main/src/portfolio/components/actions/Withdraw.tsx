import React, { useState } from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { Button, Decimal, Numeric, Warning } from "rujira.ui";
import { Stopwatch } from "rujira.ui/src/components/icons/Icons";
import { Asset } from "../../../services/asset";
import { WithdrawFragment$key } from "./__generated__/WithdrawFragment.graphql";

const fragment = graphql`
  fragment WithdrawFragment on Layer1Balance {
    amount
  }
`;

export const Withdraw: React.FC<{
  k?: WithdrawFragment$key;
  symbol: string;
  asset: Asset;
  cancel: () => void;
}> = ({ k, cancel }) => {
  const balance = useFragment(fragment, k);
  const [amount, setAmount] = useState(1000n);
  // const [destination] = useState("0xd15bE2b1EB31d348CCDBD1c531C233AdBDe3fF58");
  // const msg = new MsgSecureWithdraw(asset, amount, destination);
  return (
    <>
      <div className="text-right fs-12 condensed color-grey py-1 px-0.5 pointer">
        Balance:{" "}
        <span className="color-white">
          <Decimal amount={BigInt(balance?.amount || "0")} />
        </span>
      </div>
      <Numeric
        label="Amount"
        decimals={4}
        amount={amount}
        onChangeAmount={setAmount}
        className=""
      />

      {/* <p className="fs-14 color-grey mt-2 balance">
        Something something outbound delay
      </p> */}
      <Warning
        color="orange"
        msg={`Outbound delay expected.\nThe withdrawal route is not guaranteed to be fast. Please be patient.`}
        className="fs-12 fw-600 mt-2 color-white warning--pre">
        <Stopwatch className="color-orange" />
      </Warning>

      <div className="modal__footer mt-4 px-3 py-2 text-right">
        <Button
          className="button--grey button--outline"
          onClick={cancel}
          label="Cancel"
        />
        {/* <TxButton className="button ml-1" label="Confirm" msg={msg} /> */}
        <Button className="button ml-1" label="Coming Soon..." disabled />
      </div>
    </>
  );
};
