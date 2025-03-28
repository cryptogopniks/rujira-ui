import clsx from "clsx";
import { formatDuration, intervalToDuration } from "date-fns";
import { motion } from "motion/react";
import { Helmet } from "react-helmet";
import {
  Area,
  AreaChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { i18n, RujiraLogo, tokens } from "rujira.ui";

import bg from "./assets/background.jpg";

import { FC, useRef, useState } from "react";
import { useFragment } from "react-relay";
import { useNavigate, useParams } from "react-router-dom";
import { graphql } from "relay-runtime";
import { Network } from "rujira.js";
import { Info } from "rujira.ui/src/components/icons/Icons";
import { MergeAccountFragment$key } from "./__generated__/MergeAccountFragment.graphql";
import { MergeFragment$key } from "./__generated__/MergeFragment.graphql";
import { Balance } from "./components/Balance";
import { Convert } from "./components/Convert";
import { Graph } from "./components/Graph";
import { Ibc } from "./components/Ibc";
import { MergePool } from "./components/MergePool";
import { Switch } from "./components/Switch";

const fragment = graphql`
  fragment MergeFragment on Rujira {
    merge {
      address
      mergeAsset {
        asset
        metadata {
          symbol
        }
      }
      ...MergePoolFragment
      ...ConvertStepFragment
    }
  }
`;

const accountFragment = graphql`
  fragment MergeAccountFragment on Layer1Account {
    address
    chain
    balances {
      asset {
        metadata {
          symbol
        }
      }
      ...SwitchFragment
      ...ConvertFragment
      ...IbcFragment
    }
  }
`;

const Meta = () => {
  return (
    <Helmet>
      <title>Rujira Merge</title>
      <meta
        name="description"
        content="Holders of KUJI, FUZN, NSTK, WINK, and LVN tokens are able to migrate and convert these tokens into RUJI on Rujira, the THORChain app layer."
      />
      <meta
        name="og:description"
        content="Holders of KUJI, FUZN, NSTK, WINK, and LVN tokens are able to migrate and convert these tokens into RUJI on Rujira, the THORChain app layer."
      />
      <meta
        name="twitter:description"
        content="Holders of KUJI, FUZN, NSTK, WINK, and LVN tokens are able to migrate and convert these tokens into RUJI on Rujira, the THORChain app layer."
      />
    </Helmet>
  );
};

export const Merge: FC<{
  k?: MergeFragment$key;
  a?: MergeAccountFragment$key;
}> = ({ k, a }) => {
  const decayRef = useRef<HTMLDivElement | null>(null);
  const { asset } = useParams<{ asset: string }>();
  const navigate = useNavigate();
  const setAsset = (a: string) => {
    navigate(`/merge/${a}`);
  };

  const pools = useFragment(fragment, k);

  type DecayType = {
    rate: number;
    day: number;
  };

  const duration = 356;
  const fixed = 27;

  const Decay: DecayType[] = [];
  for (let i = 0; i < fixed; i++) {
    Decay.push({ rate: 1, day: i + 1 });
  }
  for (let i = fixed; i < duration; i++) {
    Decay.push({
      rate: 1 - (i - fixed) / (duration - fixed),
      day: i + 1,
    });
  }

  const Rewards: { day: number; merged: number; bonus: number }[] = Decay.map(
    (x) => {
      const merged = Math.log(x.day) / (Math.log(duration) * 1.4);
      const unmerged = 1 - merged;
      return {
        day: x.day,
        merged,
        bonus: (1 - x.rate) * unmerged,
      };
    }
  );

  let decayDuration = intervalToDuration({
    end: new Date(2025, 2, 27, 12, 0, 0),
    start: new Date(),
  });
  const formattedDuration = formatDuration(decayDuration, {
    format: ["months", "days", "hours"] as const,
    delimiter: ", ",
  });

  // temp migrated balances
  const balances = [{ token: "KUJI", balance: 1000 }];

  return (
    <>
      <Meta />
      <motion.div
        className="merge__background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="rujira__inner--pad merge">
        <div className="rujira__inner">
          <div className="row wrap">
            <div className="col-12 col-xs-6">
              <RujiraLogo
                showText={false}
                className="w-20 h-20 w-lg-30 h-lg-30 block"
                animate={true}
              />
            </div>
            <div className="col-12 col-xs-6">
              <div className="merge__graph-timer w-20 w-lg-30 ml-xs-a mr-0">
                <div
                  className="pointer"
                  onClick={() => {
                    decayRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}>
                  <Graph percentage={100} />
                  <h3>
                    Decay Starting In...
                    <span>
                      {formattedDuration} <Info />
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <i18n.h1 className="h1 mt-4">One Token to Rule the App Layer</i18n.h1>
          <i18n.h2 className="fs-24 lh-32 fw-400 color-white">
            Holders of KUJI, FUZN, NSTK, WINK, and LVN tokens are able to
            migrate and convert these tokens into RUJI on Rujira, the THORChain
            app layer.
          </i18n.h2>

          <i18n.h3 className="h5 text-center mt-6">Select a Token</i18n.h3>
          <div className="flex jc-c mt-2">
            {pools?.merge?.map((t) => (
              <img
                key={t.address}
                src={
                  tokens[
                    t.mergeAsset.metadata.symbol.toLowerCase() as keyof typeof tokens
                  ]
                }
                alt={t.mergeAsset.metadata.symbol}
                className={clsx({
                  "block w-5 h-5 mx-1 pointer": true,
                  desaturate: asset !== t.mergeAsset.metadata.symbol,
                })}
                draggable="false"
                onClick={() => setAsset(t.mergeAsset.metadata.symbol)}
              />
            ))}
          </div>

          {asset ? <Steps asset={asset} a={a} k={k} /> : null}

          {balances && balances.length > 0 && (
            <>
              <i18n.h2 className="h2 mt-10">My Merge Balance</i18n.h2>
              <Balance />
            </>
          )}

          <i18n.h2 className="h2 mt-10">Merge Stats</i18n.h2>

          <div className="mt-1 row pad wrap merge__stats">
            {pools?.merge?.map((p) => <MergePool key={p.address} k={p} />)}
          </div>

          <i18n.h2 className="h2 mt-10">How to Merge</i18n.h2>
          <i18n.p className="p balance">
            You have 12 months from the merge start date to convert individual
            tokens to RUJI. The conversion rate will start to decay after 4
            weeks until 12 months - at which point tokens can no longer be
            converted.
          </i18n.p>
          <i18n.p className="p balance">
            As the conversion rate decays over this period, the excess tokens
            will be distributed to users who have converted their tokens, but
            have not yet claimed them, essentially increasing their conversion
            rate every day they are untouched.
          </i18n.p>
          <i18n.p className="p balance">
            You can withdraw converted and reward tokens at any time without a
            unbonding period, but cannot restake to earn additional rewards.
          </i18n.p>

          <div className="row wrap pad ai-c mt-8" ref={decayRef}>
            <div className="col-12 col-lg-6">
              <i18n.h3 className="h3">Bonding Curve and Decay</i18n.h3>
              <i18n.p className="p">
                From the merger date (TBD) users will have 12 months to convert
                their tokens to RUJI. For the first 4 weeks users will receive a
                1:1
                <span className="color-grey">*</span> conversion rate, after
                which the rate will start a linear decay to 1:0 by the end of
                the 12 month period.
              </i18n.p>
              <i18n.p className="p">
                The rate at the time a user initiates the conversion will be
                fixed and will not decrease with the decay - should they not
                immediately withdraw.
              </i18n.p>
              <i18n.p className="fs-14 lh-20 color-grey">
                * The conversion rate illustrated in the table above is
                considered 1:1 in cases where 1 merge token does not equal 1
                RUJI.
              </i18n.p>
            </div>
            <div className="col-12 col-lg-6 mt-4 mt-lg-0">
              <ResponsiveContainer
                width="100%"
                height={285}
                className="my-a mono fs-12">
                <AreaChart
                  width={500}
                  height={300}
                  data={Decay}
                  margin={{
                    top: 5,
                    right: 5,
                    left: 0,
                    bottom: 0,
                  }}>
                  <XAxis
                    stroke="#607d8b"
                    tick={{ fill: "#ffffff" }}
                    fontSize={10}
                    dataKey="day"
                  />
                  <YAxis
                    stroke="#607d8b"
                    tick={{ fill: "#ffffff" }}
                    fontSize={10}
                  />
                  <Tooltip
                    content={
                      <CustomTooltip
                        active={undefined}
                        payload={undefined}
                        label={undefined}
                      />
                    }
                  />
                  <Area
                    type="monotone"
                    dataKey="rate"
                    stroke="#8436F5"
                    fill="#8436F5"
                    fillOpacity={0.15}
                    strokeWidth={2}
                  />
                  <ReferenceLine
                    x={28}
                    stroke="#607d8b"
                    strokeDasharray="3 4"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="row wrap pad ai-c mt-6">
            <div className="col-12 col-lg-6">
              <i18n.h3 className="h3">Token Bonus</i18n.h3>
              <i18n.p className="p">
                Assuming not all tokens are converted, and are not converted at
                a 1:1 ratio, an excess of RUJI tokens will be accumulated. These
                tokens will be periodically distributed to users who do not
                immediately withdraw their RUJI.
              </i18n.p>
              <i18n.p className="p">
                Based on the time a user initiates the conversion, and the time
                before they withdraw their RUJI tokens, they will accrue a share
                of the excess tokens as rewards until the time they withdraw.
              </i18n.p>
              <i18n.p className="fs-14 lh-20 color-grey">
                Users can withdraw converted and reward tokens at any time
                without a unbonding period, but cannot restake to earn
                additional rewards.
              </i18n.p>
            </div>
            <div className="col-12 col-lg-6 mt-4 mt-lg-0">
              <ResponsiveContainer
                width="100%"
                height={285}
                className="my-a mono fs-12">
                <AreaChart
                  width={500}
                  height={300}
                  data={Rewards}
                  margin={{
                    top: 5,
                    right: 5,
                    left: 0,
                    bottom: 0,
                  }}>
                  <XAxis
                    stroke="#607d8b"
                    tick={{ fill: "#ffffff" }}
                    fontSize={10}
                    dataKey="day"
                  />
                  <YAxis
                    stroke="#607d8b"
                    tick={{ fill: "#ffffff" }}
                    fontSize={10}
                    tickFormatter={(e) => {
                      return (e * 100).toLocaleDecimal(2) + "%";
                    }}
                  />
                  <Tooltip
                    content={
                      <CustomTooltip2
                        active={undefined}
                        payload={undefined}
                        label={undefined}
                      />
                    }
                  />
                  <Area
                    type="monotone"
                    dataKey="merged"
                    stroke="#01CDFE"
                    fill="#01CDFE"
                    fillOpacity={0.15}
                    strokeWidth={2}
                  />

                  <Area
                    type="monotone"
                    dataKey="bonus"
                    stroke="#01CDFE"
                    fill="#01CDFE"
                    fillOpacity={0.15}
                    strokeWidth={2}
                  />

                  <ReferenceLine
                    x={28}
                    stroke="#607d8b"
                    strokeDasharray="3 4"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Steps: FC<{
  a?: MergeAccountFragment$key;
  k?: MergeFragment$key;

  asset: string;
}> = ({ asset, a, k }) => {
  const [step, setStep] = useState(1);

  const account = useFragment(accountFragment, a);
  const pools = useFragment(fragment, k);

  return (
    <div className="row wrap pad mt-4">
      <Ibc
        step={step}
        setStep={setStep}
        channel="channel-0"
        k={
          account?.chain === Network.Kujira
            ? account?.balances?.find((x) => x.asset.metadata.symbol === asset)
            : undefined
        }
        symbol={asset}
      />
      <Switch
        step={step}
        setStep={setStep}
        symbol={asset}
        k={
          account?.chain === Network.Gaia
            ? account?.balances?.find((x) => x.asset.metadata.symbol === asset)
            : undefined
        }
      />
      <Convert
        step={step}
        setStep={setStep}
        symbol={asset}
        k={
          account?.chain === Network.Thorchain
            ? account?.balances?.find((x) => x.asset.metadata.symbol === asset)
            : undefined
        }
        c={
          pools?.merge?.find((x) => x.mergeAsset.metadata.symbol === asset) ||
          undefined
        }
      />
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div>
        <p className="label">
          Day {label}
          <br />
          Conversion Rate 1:{payload[0].value.toFixed(4)}
        </p>
      </div>
    );
  }
  return null;
};

const CustomTooltip2 = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div>
        <p className="label">
          Day {label}
          <br />
          Total Supply Merged:
          {(payload[0].value * 100).toLocaleDecimal(2)}%
          <br />
          Bonus:
          {(payload[1].value * 100).toLocaleDecimal(2)}%
        </p>
      </div>
    );
  }
  return null;
};
