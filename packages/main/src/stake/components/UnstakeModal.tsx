import React from "react";
import { Numeric } from "rujira.ui";

export const UnstakeModal: React.FC = () => {
  return (
    <>
      <div className="text-right fs-12 condensed color-grey py-1 px-0.5 pointer">
        Staked Balance: <span className="color-white">0.000000</span>
      </div>
      <Numeric
        label="Amount"
        decimals={4}
        amount={0n}
        onChangeAmount={() => {}}
        className=""
      />
      <p className="fs-14 color-grey mt-2 balance">
        Please note that there is no unbonding time, unstaking will be instant
        and unclaimed rewards will be automatically claimed.
      </p>
    </>
  );
};
