import { FC, useState } from "react";
import { Helmet } from "react-helmet";
import { Tooltip } from "react-tooltip";
import { Area, AreaChart } from "recharts";
import { IconDenom, Input, useQueryParam } from "rujira.ui";
import { AngleRight, Check, Plus } from "rujira.ui/src/components/icons/Icons";
import PositionThumb from "./components/PositionThumb";

const Meta = () => {
  return (
    <Helmet>
      <title>Rujira Pools</title>
      <meta name="description" content="" />
      <meta name="og:description" content="" />
      <meta name="twitter:description" content="" />
    </Helmet>
  );
};

export const Pools: FC = () => {
  return (
    <>
      <Meta />
      <Content />
    </>
  );
};

const options = [
  { label: "Lending", value: "lend" },
  { label: "AMM", value: "amm" },
  { label: "Liquidations", value: "liquidations" },
  { label: "Vaults", value: "vaults" },
  { label: "RUNE", value: "rune" },
  { label: "RUJI", value: "ruji" },
  { label: "BTC", value: "btc" },
  { label: "USDC", value: "usdc" },
];

const DummyAPR = [
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

const Content: FC = () => {
  const [filters, setFilters] = useQueryParam<string>("filters", "");
  const [filtersArr, setFiltersArr] = useState<string[]>(filters.split("."));
  const [s, setS] = useQueryParam<string>("s", "");

  const resetFilters = () => {
    setFilters("");
    setFiltersArr([]);
  };

  const toggleFilter = (filter: string) => {
    if (filtersArr?.includes(filter)) {
      filtersArr.splice(filtersArr.indexOf(filter), 1);
    } else {
      filtersArr.push(filter);
    }
    setFilters(filtersArr.join("."));
  };

  return (
    <>
      <Meta />
      <div className="rujira__main rujira__main--gradient pools">
        <div className="rujira__inner--pad">
          <div className="pools__container">
            <div className="pools__left" />
            <div className="pools__main">
              <h1 className="h1">Pools</h1>
              <h2 className="fs-24 lh-32 fw-400 color-white">
                Multiple ways to make your tokens grow, while providing
                liquidity on the App Layer.
              </h2>

              <div className="flex wrap ai-c mb-2 mt-2">
                <h4 className="h4 fs-12 mt-0.5 mb-0 mr-1 color-grey">
                  Quick Filters
                </h4>
                <nav className="tabs tabs--sm wrap">
                  <a
                    className={filtersArr.length === 0 ? "selected" : ""}
                    onClick={resetFilters}>
                    All
                  </a>
                  {options.map((o) => (
                    <a
                      key={o.value}
                      onClick={() => toggleFilter(o.value)}
                      className={
                        filtersArr.includes(o.value)
                          ? "selected mt-0.5"
                          : "mt-0.5"
                      }>
                      {o.label}
                      {filtersArr.includes(o.value) ? <Check /> : <Plus />}
                    </a>
                  ))}
                </nav>
              </div>
              <Input
                label="Search"
                value={s}
                className="mt-1 mb-2"
                onChange={(e) => setS(e.currentTarget.value.toLowerCase())}
              />

              <div className="relative card p-3">
                <table className="table table--big condensed">
                  <thead>
                    <tr>
                      <th>Deposit</th>
                      <th>Current APR</th>
                      <th className="text-right">Earn Mechanism</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="pointer">
                      <td>
                        <div className="flex ai-c mt-0.5">
                          <div className="lp">
                            <IconDenom denom="usdc" />
                            <IconDenom denom="btc" />
                          </div>
                          <h3 className="condensed fs-28 fw-400 mb-0 ml-1">
                            USDC <span className="color-grey">/</span> BTC
                          </h3>
                        </div>
                      </td>
                      <td>
                        <div className="flex ai-c">
                          <AreaChart
                            width={96}
                            height={32}
                            data={DummyAPR}
                            margin={{
                              top: 5,
                              right: 5,
                              left: 5,
                              bottom: 0,
                            }}>
                            <defs>
                              <linearGradient
                                id="colorUv"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1">
                                <stop
                                  offset="0%"
                                  stopColor="#D615EB"
                                  stopOpacity={0.25}
                                />
                                <stop
                                  offset="100%"
                                  stopColor="#D615EB"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                            </defs>
                            <Area
                              type="monotone"
                              dataKey="apr"
                              stroke="#D615EB"
                              fill="url(#colorUv)"
                            />
                          </AreaChart>

                          <span className="condensed fs-28 fw-400 ml-1">
                            {(DummyAPR[DummyAPR.length - 1].apr * 100).toFixed(
                              1
                            )}
                            <small className="inline-block">%</small>
                          </span>
                        </div>
                      </td>
                      <td className="text-right">
                        <div className="tag tag--primary">AMM</div>
                      </td>
                      <td className="w-3">
                        <AngleRight className="w-3 h-3 color-grey" />
                      </td>
                    </tr>
                    <tr className="pointer">
                      <td>
                        <div className="flex ai-c mt-0.5">
                          <IconDenom denom="RUJI" className="h-4 w-4 mx-0.5" />
                          <h3 className="condensed fs-28 fw-400 mb-0 ml-1">
                            RUJI
                          </h3>
                        </div>
                      </td>
                      <td>
                        <div className="flex ai-c">
                          <AreaChart
                            width={96}
                            height={32}
                            data={DummyAPR}
                            margin={{
                              top: 5,
                              right: 5,
                              left: 5,
                              bottom: 0,
                            }}>
                            <defs>
                              <linearGradient
                                id="colorUv"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1">
                                <stop
                                  offset="0%"
                                  stopColor="#D615EB"
                                  stopOpacity={0.25}
                                />
                                <stop
                                  offset="100%"
                                  stopColor="#D615EB"
                                  stopOpacity={0}
                                />
                              </linearGradient>
                            </defs>
                            <Area
                              type="monotone"
                              dataKey="apr"
                              stroke="#D615EB"
                              fill="url(#colorUv)"
                            />
                          </AreaChart>
                          <span className="condensed fs-28 fw-400 ml-1">
                            {(DummyAPR[DummyAPR.length - 1].apr * 100).toFixed(
                              1
                            )}
                            <small className="inline-block">%</small>
                          </span>
                        </div>
                      </td>
                      <td className="text-right">
                        <div className="tag tag--orange">Lending</div>
                      </td>
                      <td className="w-3">
                        <AngleRight className="w-3 h-3 color-grey" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="pools__positions">
              <h3 className="h3 mt-5 mt-lg-12">My Positions</h3>
              <div className="pools__grid">
                {[...Array(3)].map((_, i) => (
                  <PositionThumb key={`pt_${i}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tooltip id="pools-tip" className="tooltip" float={true} />
    </>
  );
};
