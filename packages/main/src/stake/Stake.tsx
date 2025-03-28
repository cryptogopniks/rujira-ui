import { FC } from "react";
import { Helmet } from "react-helmet";
import { Tooltip } from "react-tooltip";
import { LP } from "./components/LP";
import { Single } from "./components/Single";
import { Split } from "./components/Split";

const Meta = () => {
  return (
    <Helmet>
      <title>Rujira Staking</title>
      <meta name="description" content="" />
      <meta name="og:description" content="" />
      <meta name="twitter:description" content="" />
    </Helmet>
  );
};

export const Stake: FC = () => {
  return (
    <>
      <Meta />
      <Content />
      {/* <Tooltip id="stake-tip" className="tooltip" float={true} /> */}
    </>
  );
};

const Content: FC = () => {
  return (
    <>
      <Meta />
      <div className="rujira__main rujira__main--gradient stake">
        <div className="rujira__inner--pad">
          <div className="rujira__inner">
            <h1 className="h1">Staking</h1>
            <Split />
            <div className="row wrap pad">
              <div className="col-12 col-lg-6">
                <Single />
              </div>
              <div className="col-12 col-lg-6 mt-6 mt-lg-0">
                <LP />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tooltip id="stake-tip" className="tooltip" float={true} />
    </>
  );
};
