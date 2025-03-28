import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { i18n } from "rujira.ui";
import { motion } from "motion/react";
import Background from "./assets/background.jpg";

/* import { Integrations } from "./components/Integrations"; */
import { Protocols } from "./components/Protocols";
import { Wallets } from "./components/Wallets";
import { Auditors } from "./components/Auditors";
/* import { Exchanges } from "./components/Exchanges";
import { Community } from "./components/Community"; */

const Meta = ({ desc }: { desc: any }) => {
  return (
    <Helmet>
      <title>Rujira Ecosystem</title>
      <meta name="description" content={desc} />
      <meta name="og:description" content={desc} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  );
};

export function Ecosystem() {
  const { tab } = useParams();

  const Description =
    "The Rujira ecosystem is continuously growing, this is an overview of all the dApps, protocols, products and services calling Rujira their home.";

  /* const Description = () => {
    switch (tab) {
      case "integrations":
        return "The expansion of the Rujira ecosystem necessitates integrations with other projects to increase the range of services and products it can offer. This page catalogues the current integration landscape and the function each partner fulfils.";
      case "community-tools":
        return "A thriving ecosystem requires services that are a public good. These benefit the community using the blockchain. They supply information and services without a revenue stream, often relying on philanthropy and donations for support.";
      case "wallets":
        return "Interact with the Rujira ecosystem with your preferred mobile and desktop app";
      case "exchanges":
        return "Trade RUJI on a centralized exchange";
      default:
        return "The Rujira ecosystem is continuously growing. This is an overview of all the dApps, protocols, products and services calling Rujira their home blockchain. Web3 is growing rapidly, and this will be regularly updated with new additions.";
    }
  }; */

  return (
    <>
      <Meta desc={Description} />
      <motion.div
        className="ecosystem__background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 4 }}
        style={{ backgroundImage: `url(${Background})` }}
      />
      <div className="rujira__main rujira__inner--pad">
        <div className="rujira__inner">
          <i18n.h1 className="h1">Rujira Ecosystem</i18n.h1>
          <i18n.p className="fs-20 lh-28 mw-md-100 balance">
            {Description}
          </i18n.p>
          <div className="tabs mt-3 mx-0 mb-4">
            <Link
              to="/ecosystem"
              className={tab === undefined ? "selected" : ""}>
              {i18n.t("Protocols")}
            </Link>
            {/* <Link
              to="/ecosystem/integrations"
              className={tab === "integrations" ? "selected" : ""}>
              {i18n.t("Integrations")}
            </Link> */}
            {/* <Link
              to="/ecosystem/community-tools"
              className={tab === "community-tools" ? "selected" : ""}>
              {i18n.t("Community Tools")}
            </Link> */}
            <Link
              to="/ecosystem/wallets"
              className={tab === "wallets" ? "selected" : ""}>
              {i18n.t("Wallets")}
            </Link>
            <Link
              to="/ecosystem/auditors"
              className={tab === "auditors" ? "selected" : ""}>
              {i18n.t("Auditors")}
            </Link>
            {/* <Link
              to="/ecosystem/exchanges"
              className={tab === "exchanges" ? "selected" : ""}>
              {i18n.t("Centralized Exchanges")}
            </Link> */}
            {/* <Link to="/dapps">{i18n.t("Native dApps")}</Link> */}

            {/* <Link
              to="/ecosystem/validators"
              className={
                tab === "/ecosystem/validators"
                  ? "selected"
                  : ""
              }>
              {i18n.t("Validators
            </Link> */}
          </div>

          {tab === undefined && <Protocols />}
          {/* {tab === "integrations" && <Integrations />} */}
          {/* {tab === "community-tools" && <Community />} */}
          {tab === "wallets" && <Wallets />}
          {tab === "auditors" && <Auditors />}
          {/* {tab === "exchanges" && <Exchanges />} */}
        </div>
      </div>
    </>
  );
}
