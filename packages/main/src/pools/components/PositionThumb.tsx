import clsx from "clsx";
import { FC } from "react";
import { Button, Decimal, IconDenom } from "rujira.ui";

interface PositionThumbProps {
  // Define your props here
}

const PositionThumb: FC<PositionThumbProps> = (_props) => {
  return (
    <div className="relative card p-3">
      <div className="flex ai-c mt-0.5">
        <div className="lp">
          <IconDenom denom="usdc" />
          <IconDenom denom="btc" />
        </div>
        <h3 className="condensed fs-24 fw-400 mb-0 ml-1">
          USDC <span className="color-grey">/</span> BTC
        </h3>
        <div className="tag tag--primary ml-a mr-0">AMM</div>
      </div>
      <div className="row wrap pad--mini mt-2">
        <div className="col-4">
          <h4 className="fs-16 lh-22 fw-400 color-grey mb-0">Balance</h4>

          <Decimal
            amount={1235162n}
            decimals={6}
            round={6}
            className="fs-24 condensed"
          />
        </div>
        <div className="col-4 text-center">
          <h4 className="fs-16 lh-22 fw-400 color-grey mb-0">APR</h4>

          <Decimal
            amount={2145n}
            decimals={2}
            round={2}
            className="fs-24 condensed decimal--symbol-small"
            symbol="%"
          />
        </div>
        <div className="col-4 text-right">
          <h4 className="fs-16 lh-22 fw-400 color-grey mb-0">P/L</h4>

          <Decimal
            amount={167n}
            decimals={2}
            round={2}
            className={clsx({
              "fs-24 condensed decimal--symbol-small": true,
              "color-teal": true,
              "color-red": false,
            })}
            symbol="%"
          />
        </div>
      </div>
      <Button
        className="button--small button--outline mt-2 w-full"
        label="Manage Position"
      />
    </div>
  );
};

export default PositionThumb;
