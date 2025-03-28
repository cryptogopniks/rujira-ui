import React, { useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

const SingleAPR = [
  {
    week: 1,
    apr: 0.05,
  },
  {
    week: 2,
    apr: 0.09,
  },
  {
    week: 3,
    apr: 0.17,
  },
  {
    week: 4,
    apr: 0.14,
  },
  {
    week: 5,
    apr: 0.16,
  },
  {
    week: 6,
    apr: 0.13,
  },
  {
    week: 7,
    apr: 0.15,
  },
  {
    week: 8,
    apr: 0.17,
  },
  {
    week: 9,
    apr: 0.2,
  },
  {
    week: 10,
    apr: 0.16,
  },
];

import clsx from "clsx";
import {
  Button,
  Decimal,
  IconDenom,
  nFormatter,
  useGlobalModalContext,
} from "rujira.ui";
import {
  Info,
  StakeMinus,
  StakePlus,
} from "rujira.ui/src/components/icons/Icons";
import { StakeModal } from "./StakeModal";
import { CustomTooltip } from "./Tooltip";
import { UnstakeModal } from "./UnstakeModal";

export const Single: React.FC = () => {
  const [range, setRange] = useState(30);

  const accStaked = 1679452125n;
  const compStaked = 0n;
  const rewards = 117422n;
  const compounded = 0n;

  const { showModal, hideModal } = useGlobalModalContext();

  const stake = () => {
    showModal({
      title: "Stake RUJI",
      backgroundClose: false,
      confirm: () => {
        hideModal();
      },
      children: <StakeModal />,
    });
  };

  const unstake = () => {
    showModal({
      title: "Unstake RUJI",
      backgroundClose: false,
      confirm: () => {
        hideModal();
      },
      children: <UnstakeModal />,
    });
  };

  return (
    <>
      <div className="card p-3">
        <h2 className="h5 color-grey">Single Sided RUJI Staking</h2>
        <div className="row wrap pad-mini ai-c">
          <div className="col-12 col-sm-6">
            <ResponsiveContainer
              width="100%"
              height={67}
              className="my-a mono fs-12">
              <AreaChart
                width={500}
                height={300}
                data={SingleAPR}
                margin={{
                  top: 5,
                  right: 5,
                  left: 5,
                  bottom: 0,
                }}>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D615EB" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#D615EB" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="apr"
                  stroke="#D615EB"
                  fill="url(#colorUv)"
                />
                <Tooltip
                  content={
                    <CustomTooltip active={undefined} payload={undefined} />
                  }
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="col-6 col-sm-3">
            <h3 className="fs-16 lh-22 fw-400 color-grey">Variable APR</h3>
            <h3 className="condensed fs-42 lh-42 fw-500 mb-0">
              {(SingleAPR[SingleAPR.length - 1].apr * 100).toFixed(1)}
              <small className="inline-block">%</small>
            </h3>
          </div>
          <div className="col-6 col-sm-3">
            <h3 className="fs-16 lh-22 fw-400 color-grey">Total Staked</h3>
            <h3 className="condensed fs-42 lh-42 fw-500 mb-0">
              {nFormatter(141125n, 2, 0)}
            </h3>
          </div>
        </div>
        <div className="flex ai-c mt-4">
          <h4 className="fs-16 lh-22 fw-400 color-grey mr-1">
            Revenue Payout Last
          </h4>
          <nav className="tab-group condensed">
            <a
              className={range === 1 ? "selected" : ""}
              onClick={() => setRange(1)}>
              1 Day
            </a>
            <a
              className={range === 10 ? "selected" : ""}
              onClick={() => setRange(10)}>
              10 Days
            </a>
            <a
              className={range === 30 ? "selected" : ""}
              onClick={() => setRange(30)}>
              30 Days
            </a>
          </nav>
        </div>
        <div className="flex ai-c mt-0.5">
          <IconDenom className="w-4" denom="usdc" />
          <h3 className="condensed fs-32 fw-500 mb-0 ml-1">
            {nFormatter(212125n, 2, 2)} USDC
          </h3>
        </div>
        <div className="mt-4 row wrap pad-tight">
          <div className="col-12 col-sm-6">
            <h4
              className="fs-16 lh-22 fw-400 color-grey flex ai-c"
              data-tooltip-id="stake-tip"
              data-tooltip-html="Account staking earns rewards in USDC<br/>which must be manually claimed">
              Account Staked Balance <Info className="h-2 w-2 ml-0.5" />
            </h4>
            <div
              className={clsx({
                "flex ai-c mt-0.5": true,
                "opacity-8": Number(accStaked) === 0,
              })}>
              <IconDenom className="w-3.5" denom="ruji" />
              <Decimal
                amount={accStaked}
                decimals={6}
                round={6}
                className={clsx({
                  "fs-28 fw-500 ml-1": true,
                  "color-grey": Number(accStaked) === 0,
                })}
              />
            </div>
            {Number(accStaked) > 0 ? (
              <Button
                onClick={unstake}
                className="button--outline button--xsmall button--grey mt-1.5"
                label="Unstake...">
                <StakeMinus />
              </Button>
            ) : (
              <div className="stake__spacer mt-1.5"></div>
            )}
            <div className="mt-3">
              <h4 className="fs-16 lh-22 fw-400 color-grey">
                Unclaimed Rewards
              </h4>
              <div
                className={clsx({
                  "flex ai-c mt-0.5": true,
                  "opacity-8": Number(accStaked) === 0,
                })}>
                <IconDenom className="w-3.5" denom="usdc" />
                <Decimal
                  amount={rewards}
                  decimals={6}
                  round={6}
                  className={clsx({
                    "fs-28 fw-500 ml-1": true,
                    "color-grey": Number(rewards) === 0,
                  })}
                />
              </div>
              {Number(rewards) > 0 ? (
                <Button
                  className="button--outline button--xsmall mt-1.5"
                  label="Claim Rewards"
                />
              ) : (
                <div className="stake__spacer mt-1.5"></div>
              )}
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <h4
              className="fs-16 lh-22 fw-400 color-grey flex ai-c"
              data-tooltip-id="stake-tip"
              data-tooltip-html="Auto compounding staking uses USDC rewards to<br/>purchase RUJI and compound the staked balance">
              Compounding Staked Balance <Info className="h-2 w-2 ml-0.5" />
            </h4>
            <div
              className={clsx({
                "flex ai-c mt-0.5": true,
                "opacity-8": Number(compStaked) === 0,
              })}>
              <IconDenom className="w-3.5" denom="ruji" />
              <Decimal
                amount={compStaked}
                decimals={6}
                round={6}
                className={clsx({
                  "fs-28 fw-500 ml-1": true,
                  "color-grey": Number(compStaked) === 0,
                })}
              />
            </div>
            {Number(compStaked) > 0 ? (
              <Button
                onClick={unstake}
                className="button--outline button--xsmall button--grey mt-1.5"
                label="Unstake...">
                <StakeMinus />
              </Button>
            ) : (
              <div className="stake__spacer mt-1.5"></div>
            )}
            <div className="mt-3">
              <h4 className="fs-16 lh-22 fw-400 color-grey">
                Compounded Rewards
              </h4>
              <div
                className={clsx({
                  "flex ai-c mt-0.5": true,
                  "opacity-8": Number(compStaked) === 0,
                })}>
                <IconDenom className="w-3.5" denom="usdc" />
                <Decimal
                  amount={compounded}
                  decimals={6}
                  round={6}
                  className={clsx({
                    "fs-28 fw-500 ml-1": true,
                    "color-grey": Number(compounded) === 0,
                  })}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Button label="Stake RUJI" className="w-full" onClick={stake}>
            <StakePlus />
          </Button>
        </div>
      </div>
    </>
  );
};
