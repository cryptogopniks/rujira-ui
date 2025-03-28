import React from "react";
import { IconDenom, nFormatter } from "rujira.ui";

export const Split: React.FC = () => {
  const single = 0.37;
  const lp = 0.63;

  return (
    <>
      {/* <div className="card p-3 mb-3"> */}
      <div className="card p-3 mb-3">
        <h2 className="h5 color-grey mb-1.5 text-center">
          RUJI Staking Split Ratio
        </h2>
        <div className="stake__split mb-3">
          <div className="stake__split-side">
            <div style={{ flexBasis: Math.min(90, single * 175) + "%" }}>
              <div className="condensed fw-500">
                {(single * 100).toFixed(2)}%
                <span className="color-primary1 fs-14 ml-0.5">
                  Single Sided
                </span>
              </div>
            </div>
          </div>
          <div className="stake__split-side">
            <div style={{ flexBasis: Math.min(90, lp * 175) + "%" }}>
              <div className="condensed fw-500">
                <span className="color-primary2 fs-14 mr-0.5">LP Staking</span>
                {(lp * 100).toFixed(2)}%
              </div>
            </div>
          </div>
        </div>
        <div className="row pad">
          <div className="col-6 text-center">
            <h3 className="fs-16 lh-22 fw-400 color-grey mb-1">
              30 Day Rolling Revenue
            </h3>
            <div className="flex ai-c jc-c mt-0.5">
              <IconDenom className="w-4" denom="usdc" />
              <h3 className="condensed fs-32 fw-500 mb-0 ml-1">
                {nFormatter(374156n, 2, 2)} USDC
              </h3>
            </div>
          </div>
          <div className="col-6 text-center">
            <h3 className="fs-16 lh-22 fw-400 color-grey mb-1">
              Reserve Balance
            </h3>
            <div className="flex ai-c jc-c mt-0.5">
              <IconDenom className="w-4" denom="usdc" />
              <h3 className="condensed fs-32 fw-500 mb-0 ml-1">
                {nFormatter(21774126n, 2, 2)} USDC
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="card p-3 mb-3">
        <div className="row pad wrap">
          <div className="col-12 col-lg-6">
            <h2 className="fs-16 lh-22 fw-400 color-grey mb-1">
              RUJI Staking Split
            </h2>
            <div className="stake__split">
              <div style={{ flexBasis: single * 100 + "%" }}>
                <div className="condensed fw-500">
                  {(single * 100).toFixed(2)}%
                  <span className="color-primary1 fs-14 ml-0.5">
                    Single Sided
                  </span>
                </div>
              </div>
              <div style={{ flexBasis: lp * 100 + "%" }}>
                <div className="condensed fw-500">
                  <span className="color-primary2 fs-14 mr-0.5">
                    LP Staking
                  </span>
                  {(lp * 100).toFixed(2)}%
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mt-2 mt-lg-0">
            <h3 className="fs-16 lh-22 fw-400 color-grey mb-1">
              30 Day Revenue
            </h3>
            <div className="flex ai-c mt-0.5">
              <IconDenom className="w-4" denom="usdc" />
              <h3 className="condensed fs-32 fw-500 mb-0 ml-1">
                {nFormatter(374156n, 2, 2)} USDC
              </h3>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mt-2 mt-lg-0">
            <h3 className="fs-16 lh-22 fw-400 color-grey mb-1">
              Reserve Balance
            </h3>
            <div className="flex ai-c mt-0.5">
              <IconDenom className="w-4" denom="usdc" />
              <h3 className="condensed fs-32 fw-500 mb-0 ml-1">
                {nFormatter(374156n, 2, 2)} USDC
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
