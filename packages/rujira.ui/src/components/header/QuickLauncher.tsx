import { AnimatePresence, motion } from "motion/react";
import { Grid } from "../icons/Icons";
import { useState } from "react";
import { ResolveLink } from "./ResolveLink";
import { i18n } from "../../i18n";

export const QuickLauncher = ({
  domain,
  routingElement,
}: {
  domain: string;
  routingElement: any;
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className="rujira-header__quick"
      onMouseOver={() => setShowMenu(true)}
      onMouseOut={() => setShowMenu(false)}>
      <Grid />
      <AnimatePresence>
        {showMenu && (
          <motion.div
            className="rujira-header__popup sub-nav fw-400 px-2 py-1.5"
            initial={{ opacity: 0, marginTop: -4 }}
            animate={{ opacity: 1, marginTop: 0 }}
            exit={{ opacity: 0, marginTop: -4 }}>
            <ResolveLink domain={domain} as={routingElement} to="/buy">
              <i18n.span className="fs-12 fw-500">Buy Crypto</i18n.span>
            </ResolveLink>
            <ResolveLink domain={domain} as={routingElement} to="/swap">
              <i18n.span className="fs-12 fw-500">Token Swap</i18n.span>
            </ResolveLink>
            <ResolveLink domain={domain} as={routingElement} to="/trade">
              <i18n.span className="fs-12 fw-500">Spot Trading</i18n.span>
            </ResolveLink>
            <ResolveLink domain={domain} as={routingElement} to="/options">
              <i18n.span className="fs-12 fw-500">Options</i18n.span>
            </ResolveLink>
            <ResolveLink domain={domain} as={routingElement} to="/perps">
              <i18n.span className="fs-12 fw-500">Perps</i18n.span>
            </ResolveLink>
            <ResolveLink domain={domain} as={routingElement} to="/stake">
              <i18n.span className="fs-12 fw-500">Stake</i18n.span>
            </ResolveLink>
            <ResolveLink domain={domain} as={routingElement} to="/lp">
              <i18n.span className="fs-12 fw-500">Liquidity Pools</i18n.span>
            </ResolveLink>
            <ResolveLink domain={domain} as={routingElement} to="/money-market">
              <i18n.span className="fs-12 fw-500">Lend & Borrow</i18n.span>
            </ResolveLink>
            <ResolveLink domain={domain} as={routingElement} to="/liquidate">
              <i18n.span className="fs-12 fw-500">Liquidate</i18n.span>
            </ResolveLink>
            <ResolveLink domain={domain} as={routingElement} to="/ventures">
              <i18n.span className="fs-12 fw-500">Ventures</i18n.span>
            </ResolveLink>
            <ResolveLink domain={domain} as={routingElement} to="/nfts">
              <i18n.span className="fs-12 fw-500">Collections</i18n.span>
            </ResolveLink>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
