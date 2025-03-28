import clsx from "clsx";
import { formatDuration } from "date-fns";
import { FC, PropsWithChildren, useState } from "react";
import { useFragment } from "react-relay";
import { graphql, Result } from "relay-runtime";
import { Network, translateError } from "rujira.js";
import {
  Account,
  BreakPoints,
  Button,
  Decimal,
  i18n,
  Icons,
  NetworkIcon,
  Toggle,
  useClickOutside,
  useWindowSize,
  Warning,
} from "rujira.ui";

import { AnimatePresence, motion } from "motion/react";
import { AccountItemSimple } from "../../portfolio/components/Value";
import { useAccounts } from "../../services/accounts";
import { useSwapContext } from "./Context";
import { QuoteFragment$key } from "./__generated__/QuoteFragment.graphql";
const { ExclamationTriangle, Info } = Icons;

const fragment = graphql`
  fragment QuoteFragment on Quote {
    expectedAssetOut {
      amount
    }
    fees {
      totalBps
    }
    streamingSwapBlocks
    streamingSwapSeconds
    totalSwapSeconds
  }
`;

export const QuoteContainer: FC<PropsWithChildren> = ({ children }) => (
  <div className="px-lg-w2 mt-2 w-full">
    <div className="swap__details">{children}</div>
  </div>
);

export const Quote: FC<{
  k?: Result<QuoteFragment$key | undefined | null, unknown>;
}> = ({ k }) => {
  const data = useFragment(fragment, k?.ok ? k.value : undefined);
  const instant = data && data.totalSwapSeconds === 0;

  const error = null;

  const [advanced, setAdvanced] = useState(false);
  const { feeWarning, fromAmountQuote } = useSwapContext();
  const isDangerous = data && data.fees.totalBps > feeWarning;
  const rate =
    data &&
    (BigInt(data.expectedAssetOut.amount) * 10n ** 12n) / fromAmountQuote;

  return (
    <>
      <table className="table table--spaced table--no-hover">
        <tbody>
          <tr>
            <th className="text-left">
              <div className="iflex ai-c no-select">
                {i18n.t("Destination")}
              </div>
            </th>

            <td className="text-right no-pad">
              <Destination />
            </td>
          </tr>

          <tr>
            <th className="text-left">
              <div className="iflex ai-c no-select">{i18n.t("Swap Rate")}</div>
            </th>
            <td className="text-right">
              <Decimal amount={rate || 0n} decimals={12} />
            </td>
          </tr>
          <tr>
            <th className="text-left">
              <div
                className="iflex ai-c no-select"
                data-tooltip-id="swap-tip"
                data-tooltip-html="Estimated total of deposit confirmation, swap duration, and outbound delay">
                {i18n.t("Duration")}
                <Info className="ml-0.5 block w-2.5" />
              </div>
            </th>
            <td className="text-right">
              {instant
                ? "Instant"
                : formatDuration({ seconds: data?.totalSwapSeconds })}
            </td>
          </tr>
          {k && !k.ok && k.errors.length && (
            <tr>
              <td colSpan={2}>
                <Warning color="red">
                  <ExclamationTriangle className="color-red" />
                  <p className="warning__msg breakall">
                    {translateError(
                      (k.errors[0] as { status: string }).status ||
                        "Unknown Error"
                    )}
                  </p>
                </Warning>
              </td>
            </tr>
          )}
          {isDangerous && (
            <tr>
              <td colSpan={2}>
                <Warning color="red" className="warning--pre">
                  <ExclamationTriangle className="color-red" />
                  <span className="warning__msg">
                    The total fee amount is more than{" "}
                    <span className="color-white">
                      {(Number(feeWarning) / 100).toLocaleDecimal(2)}%
                    </span>
                    , proceed with caution.
                  </span>
                </Warning>
              </td>
            </tr>
          )}
          {advanced && <Advanced k={k} />}
        </tbody>
      </table>{" "}
      <div className="flex wrap ai-c mt-1">
        <Toggle
          label={`${advanced ? "Hide" : "Show"} Advanced`}
          checked={advanced}
          className="toggle--small toggle--grey"
          onChange={() => setAdvanced(!advanced)}
        />
      </div>
      {error && (
        <Warning
          color="red"
          msg="Error calculating swap"
          className="condensed my-2"
        />
      )}
    </>
  );
};

const Destination: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { accounts } = useAccounts();
  const { width } = useWindowSize();
  const { toAsset, destination, setDestination } = useSwapContext();
  const destinations = accounts?.filter(
    (a) => a.network === toAsset?.chain || a.network === Network.Thorchain
  );
  const ref = useClickOutside(() => setIsOpen(false));

  const [tempSelection, setTempSelection] = useState<Account>();

  return (
    <a
      className="portfolio__switcher portfolio__switcher--right"
      onClick={() => setIsOpen(true)}>
      {destination ? (
        <>
          <NetworkIcon
            network={destination?.network}
            className="block w-2 h-2 mr-1"
          />
          {width > BreakPoints.medium
            ? destination?.address.substring(0, 12) +
              "..." +
              destination?.address.slice(-12)
            : destination?.address.substring(0, 8) +
              "..." +
              destination?.address.slice(-8)}
        </>
      ) : (
        <>
          {toAsset && (
            <NetworkIcon
              network={toAsset?.chain}
              className="block w-2 h-2 mr-1"
            />
          )}
          Select Destination
        </>
      )}

      <Icons.AngleDown className="w-2 h-2 ml-1" />
      <AnimatePresence
        onExitComplete={() => {
          tempSelection && setDestination(tempSelection);
          setTempSelection(undefined);
        }}>
        {isOpen && destinations && destinations.length > 0 && (
          <motion.nav
            ref={ref}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}>
            {destinations.map((v) => (
              <AccountItemSimple
                key={v.address}
                account={v}
                onClick={(e) => {
                  setIsOpen(false);
                  e.stopPropagation();
                  setTempSelection(v);
                }}
              />
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </a>
  );
};

const Advanced: FC<{
  k?: Result<QuoteFragment$key | undefined | null, unknown>;
}> = ({ k }) => {
  const { slippageLimit, setSlippageLimit, feeWarning } = useSwapContext();
  const data = useFragment(fragment, k?.ok ? k.value : undefined);
  const isDangerous = data && data.fees.totalBps > feeWarning;

  return (
    <>
      <tr>
        <th className="text-left">
          <div
            className="iflex ai-c no-select"
            data-tooltip-id="swap-tip"
            data-tooltip-html="The difference between the current price<br/>and estimated price for this swap">
            {i18n.t("Fee Total")}
            <Info className="ml-0.5 block w-2.5" />
          </div>
        </th>
        <td
          className={clsx({
            "text-right": true,
            "color-red": isDangerous,
          })}>
          <Decimal
            amount={BigInt(data?.fees.totalBps || 0) * 100n}
            decimals={4}
            round={2}
            symbol="%"
          />
        </td>
      </tr>

      <tr>
        <i18n.th>
          <div
            className="iflex ai-c no-select"
            data-tooltip-id="swap-tip"
            data-tooltip-html="The maximum deviation from the<br/>estimated swap rate for this transaction">
            {i18n.t("Maximum Fee")}
            <Info className="ml-0.5 block w-2.5" />
          </div>
        </i18n.th>
        <td className="nopad text-right">
          <Button
            className={clsx({
              "button--outline button--xsmall ml-0.5 w-4": true,
              "button--red": isDangerous && slippageLimit === 50n,
              "button--grey": slippageLimit !== 50n,
            })}
            onClick={() => setSlippageLimit(50n)}>
            1%
          </Button>
          <Button
            className={clsx({
              "button--outline button--xsmall ml-0.5 w-4": true,
              "button--red": isDangerous && slippageLimit === 100n,
              "button--grey": slippageLimit !== 100n,
            })}
            onClick={() => setSlippageLimit(100n)}>
            5%
          </Button>
          <Button
            className={clsx({
              "button--outline button--xsmall ml-0.5 w-4": true,
              "button--red": isDangerous && slippageLimit === 200n,
              "button--grey": slippageLimit !== 200n,
            })}
            onClick={() => setSlippageLimit(200n)}>
            10%
          </Button>
          <Button
            className={clsx({
              "button--outline button--xsmall ml-0.5 w-4": true,
              "button--red": isDangerous && slippageLimit === 500n,
              "button--grey": slippageLimit !== 500n,
            })}
            onClick={() => setSlippageLimit(500n)}>
            15%
          </Button>
        </td>
      </tr>
    </>
  );
};
