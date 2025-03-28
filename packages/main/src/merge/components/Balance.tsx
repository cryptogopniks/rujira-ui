import { Button, Decimal, IconDenom } from "rujira.ui";
import { TrendUp } from "rujira.ui/src/components/icons/Icons";

export const Balance = () => {
  return (
    <div className="relative card p-3 mt-2">
      <div className="row wrap pad-mini">
        <div className="col-6 col-xs-4 col-lg-2 mt-4 mt-xs-0 flex ai-c dir-c">
          <div className="merge__icons">
            <IconDenom denom="KUJI" />
            <IconDenom denom="RUJI" />
          </div>
          <h4 className="fs-12 color-grey fw-400 mt-1">Available</h4>
          <Decimal
            amount={BigInt(Math.round(1000 * 0.4097071 * 1000000))}
            decimals={6}
            className="fs-20"
          />
          <div className="color-teal flex ai-e">
            <span className="condensed fs-12">+0.133%</span>
            <TrendUp className="h-1.5 w-a ml-0.5" />
          </div>
          <Button
            className="button--xs button--outline button--grey mt-1.5"
            label="Withdraw"
          />
        </div>
        <div className="col-6 col-xs-4 col-lg-2 mt-4 mt-xs-0 flex ai-c dir-c">
          <div className="merge__icons">
            <IconDenom denom="rKUJI" />
            <IconDenom denom="RUJI" />
          </div>
          <h4 className="fs-12 color-grey fw-400 mt-1">Available</h4>
          <Decimal
            amount={BigInt(Math.round(1000 * 0.4097071 * 1000000))}
            decimals={6}
            className="fs-20"
          />
          <div className="color-teal flex ai-e">
            <span className="condensed fs-12">+0.133%</span>
            <TrendUp className="h-1.5 w-a ml-0.5" />
          </div>
          <Button
            className="button--xs button--outline button--grey mt-1.5"
            label="Withdraw"
          />
        </div>
        <div className="col-6 col-xs-4 col-lg-2 mt-4 mt-xs-0 flex ai-c dir-c">
          <div className="merge__icons">
            <IconDenom denom="FUZN" />
            <IconDenom denom="RUJI" />
          </div>
          <h4 className="fs-12 color-grey fw-400 mt-1">Available</h4>
          <Decimal
            amount={BigInt(Math.round(1000 * 0.4097071 * 1000000))}
            decimals={6}
            className="fs-20"
          />
          <div className="color-teal flex ai-e">
            <span className="condensed fs-12">+0.133%</span>
            <TrendUp className="h-1.5 w-a ml-0.5" />
          </div>
          <Button
            className="button--xs button--outline button--grey mt-1.5"
            label="Withdraw"
          />
        </div>
        <div className="col-6 col-xs-4 col-lg-2 mt-4 mt-lg-0 flex ai-c dir-c">
          <div className="merge__icons">
            <IconDenom denom="NSTK" />
            <IconDenom denom="RUJI" />
          </div>
          <h4 className="fs-12 color-grey fw-400 mt-1">Available</h4>
          <Decimal
            amount={BigInt(Math.round(1000 * 0.4097071 * 1000000))}
            decimals={6}
            className="fs-20"
          />
          <div className="color-teal flex ai-e">
            <span className="condensed fs-12">+0.133%</span>
            <TrendUp className="h-1.5 w-a ml-0.5" />
          </div>
          <Button
            className="button--xs button--outline button--grey mt-1.5"
            label="Withdraw"
          />
        </div>
        <div className="col-6 col-xs-4 col-lg-2 mt-4 mt-lg-0 flex ai-c dir-c">
          <div className="merge__icons">
            <IconDenom denom="WINK" />
            <IconDenom denom="RUJI" />
          </div>
          <h4 className="fs-12 color-grey fw-400 mt-1">Available</h4>
          <Decimal
            amount={BigInt(Math.round(1000 * 0.4097071 * 1000000))}
            decimals={6}
            className="fs-20"
          />
          <div className="color-teal flex ai-e">
            <span className="condensed fs-12">+0.133%</span>
            <TrendUp className="h-1.5 w-a ml-0.5" />
          </div>
          <Button
            className="button--xs button--outline button--grey mt-1.5"
            label="Withdraw"
          />
        </div>
        <div className="col-6 col-xs-4 col-lg-2 mt-4 mt-lg-0 flex ai-c dir-c">
          <div className="merge__icons">
            <IconDenom denom="LVN" />
            <IconDenom denom="RUJI" />
          </div>
          <h4 className="fs-12 color-grey fw-400 mt-1">Available</h4>
          <Decimal
            amount={BigInt(Math.round(1000 * 0.4097071 * 1000000))}
            decimals={6}
            className="fs-20"
          />
          <div className="color-teal flex ai-e">
            <span className="condensed fs-12">+0.133%</span>
            <TrendUp className="h-1.5 w-a ml-0.5" />
          </div>
          <Button
            className="button--xs button--outline button--grey mt-1.5"
            label="Withdraw"
          />
        </div>
      </div>
      {/* <div className="flex ai-c no-shrink">
        <IconDenom denom="RUJI" className="mr-1.5 w-6 h-6" />
        <Decimal
          amount={BigInt(Math.round(1000 * 0.4097071 * 1000000))}
          decimals={6}
          symbol="RUJI"
          className="fs-28"
        />
        <div className="color-teal ml-1 mt-1">
          <span className="condensed fs-16">+0.133%</span>
          <TrendUp className="h-2 w-a ml-0.5" />
        </div>
        <Button
          className="button--outline button--grey ml-a mr-0"
          label="Withdraw"
        />
      </div> */}
    </div>
  );
};

// @ts-expect-error
const _Table = () => {
  return (
    <div className="table-sticky--first">
      <table className="table table--big condensed portfolio__balances">
        <thead>
          <tr>
            <th className="bg-black">Token</th>
            <th>Amount</th>
            <th>Received</th>
            <th>Rate</th>
            <th>Status</th>
            <th className="w-1"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="bg-black">
              <div className="flex ai-c no-shrink">
                <IconDenom denom="KUJI" />
                <h3>KUJI</h3>
                <span className="color-white mr-1">0.4097071</span>
                +1.1%
                <TrendUp className="h-2 w-a ml-0.5" />
              </div>
            </th>
            <td>
              <Decimal amount={1000000000n} decimals={6} />
            </td>
            <td>
              <div className="flex ai-c no-shrink">
                <IconDenom denom="RUJI" className="mr-1" />
                <Decimal
                  amount={BigInt(Math.round(1000 * 0.4097071 * 1000000))}
                  decimals={6}
                  symbol="RUJI"
                />
              </div>
            </td>
            <td>
              <div className="flex ai-c color-teal">
                <span className="color-white mr-1">0.4097071</span>
                +1.1%
                <TrendUp className="h-2 w-a ml-0.5" />
              </div>
            </td>
            <td>
              <div className="tag tag--teal tag--md">Bonded</div>
            </td>
            <td className="text-right">
              <Button
                className="button button--xs button--outline button--grey"
                label="Withdraw"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
