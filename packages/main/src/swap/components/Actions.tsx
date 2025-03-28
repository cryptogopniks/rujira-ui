import clsx from "clsx";
import { FC } from "react";
import { useFragment } from "react-relay";
import { graphql, Result } from "relay-runtime";
import { MsgSwap } from "rujira.js";
import { i18n, Icons, useAffiliate } from "rujira.ui";
import { TxButton } from "../../common/components/TxButton";
import { useAccounts } from "../../services/accounts";
import { ActionsFragment$key } from "./__generated__/ActionsFragment.graphql";
import { useSwapContext } from "./Context";
const { Bolt, ExclamationCircle, ExclamationTriangle, Timer } = Icons;

const fragment = graphql`
  fragment ActionsFragment on Quote {
    fees {
      totalBps
    }
    streamingSwapBlocks
    streamingSwapSeconds
    totalSwapSeconds
    inboundAddress
    memo
  }
`;

export const Actions: FC<{
  k?: Result<ActionsFragment$key | undefined | null, unknown>;
  onSuccess?: () => void;
}> = ({ k, onSuccess }) => {
  const { selected } = useAccounts();
  const data = useFragment(fragment, k?.ok ? k.value : undefined);
  const { feeWarning, fromAsset, fromAmount, targetAsset, destination } =
    useSwapContext();
  const instant = data && data.totalSwapSeconds === 0;
  const isDangerous = data && data.fees.totalBps > feeWarning;
  const { base } = useAffiliate();

  const msg =
    data && fromAsset && targetAsset && fromAmount > 0n
      ? new MsgSwap(fromAsset, fromAmount, targetAsset, destination?.address, {
          slip: { limit: 0n, interval: 1n, quantity: 0n },
          affiliate: base ? { id: base.name, bp: BigInt(base.fee) } : undefined,
        })
      : null;

  const needsSwitch = selected && selected.network !== fromAsset?.chain;

  return (
    <div className="text-center mt-4">
      {selected ? (
        <>
          <TxButton
            onSuccess={onSuccess}
            msg={msg}
            disabled={!data || needsSwitch}
            className={clsx({
              "button--icon-right": true,
              "button--big": !isDangerous,
              "button--red": isDangerous,
              "button--grey": needsSwitch,
            })}
            label={
              data
                ? isDangerous
                  ? i18n.t("I Understand, Continue")
                  : instant
                    ? i18n.t("Instant Swap")
                    : i18n.t("Initiate Swap")
                : i18n.t("Calculating Route...")
            }>
            {data && isDangerous ? (
              <ExclamationTriangle />
            ) : instant ? (
              <Bolt />
            ) : (
              <Timer />
            )}
          </TxButton>
        </>
      ) : (
        <div className="tag tag--orange tag--icon-left mt-2">
          <ExclamationCircle />
          Add or connect an account to swap
        </div>
      )}
    </div>
  );
};
