import clsx from "clsx";
import { FC } from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { Decimal, i18n, nFormatter, tokens } from "rujira.ui";
import { useNodeSubscription } from "../../services/useNodeSubscription";
import { MergePoolFragment$key } from "./__generated__/MergePoolFragment.graphql";
import { Graph } from "./Graph";

const fragment = graphql`
  fragment MergePoolFragment on MergePool {
    id
    address
    currentRate
    mergeAsset {
      asset
      metadata {
        symbol
        decimals
      }
    }
    mergeSupply
    rujiAllocation
    startRate
    status {
      merged
    }
  }
`;

const subscription = graphql`
  subscription MergePoolSubscription($id: ID!) {
    node(id: $id) {
      ... on MergePool {
        currentRate
        status {
          merged
        }
      }
    }
  }
`;

export const MergePool: FC<{ k: MergePoolFragment$key }> = ({ k }) => {
  const data = useFragment(fragment, k);
  const completed = Number(data.status?.merged || 0) / Number(data.mergeSupply);
  const share = Number(data.rujiAllocation) / 10e13;
  useNodeSubscription(subscription, data.id);

  const src =
    tokens[
      data.mergeAsset.metadata.symbol.toLowerCase() as keyof typeof tokens
    ];
  return (
    <div className="col-12 col-lg-6 mt-5 mt-sm-3 flex ai-c jc-c wrap">
      <div className="merge__graph-container">
        <Graph percentage={completed * 100} />
        <img src={src} alt={data.mergeAsset.metadata.symbol} />
      </div>
      <div className="break" />
      <div className="flex dir-c ai-s merge__graph-stat">
        <i18n.h3 className="fs-16 lh-22 fw-400 color-grey">Allocation</i18n.h3>
        <div className="fs-28 condensed fw-500">
          {nFormatter(BigInt(data.rujiAllocation), 2, 8)} RUJI
        </div>
        <div className="color-grey condensed fs-16 fw-500">
          {share.toFixed(2)}%
        </div>
      </div>
      <div className="flex dir-c ai-s merge__graph-stat">
        <i18n.h3 className="fs-16 lh-22 fw-400 color-grey">Merged</i18n.h3>
        <div className="fs-28 condensed fw-500">
          {nFormatter(
            BigInt(data.status?.merged || 0),
            2,
            data.mergeAsset.metadata.decimals
          )}{" "}
          {data.mergeAsset.metadata.symbol}
        </div>
        <div
          className={clsx({
            "condensed fs-16 fw-500": true,
            "color-red": completed >= 0.8,
            "color-orange": completed < 0.8 && completed >= 0.5,
            "color-teal": completed < 0.5,
          })}>
          {(completed * 100).toLocaleDecimal(2)}%
        </div>
      </div>
      <div className="flex dir-c ai-s merge__graph-stat">
        <i18n.h3 className="fs-16 lh-22 fw-400 color-grey">
          Current Rate
        </i18n.h3>
        <Decimal
          decimals={12}
          className="fs-28 condensed fw-500"
          amount={BigInt(data.currentRate)}
        />
        <Decimal
          symbol="from"
          symbolLeft={true}
          decimals={12}
          className="condensed fs-16 fw-500 color-grey"
          amount={BigInt(data.startRate)}
        />
      </div>
    </div>
  );
};
