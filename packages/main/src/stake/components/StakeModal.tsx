import React, { useState } from "react";
import { Numeric, Toggle } from "rujira.ui";

export const StakeModal: React.FC = () => {
  const [compount, setCompount] = useState(false);
  return (
    <>
      <div className="text-right fs-12 condensed color-grey py-1 px-0.5 pointer">
        Balance: <span className="color-white">0.000000</span>
      </div>
      <Numeric
        label="Amount"
        decimals={4}
        amount={0n}
        onChangeAmount={() => {}}
        className=""
      />

      <Toggle
        className="toggle--small mt-1"
        label="Auto-compound rewards to increase stake balance"
        checked={compount}
        onChange={() => setCompount(!compount)}
      />

      <p className="fs-14 color-grey mt-2 balance">
        Please note that there is no unbonding time, and you can unstake
        instantly at any time.
      </p>
    </>
  );
};
