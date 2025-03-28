import { motion } from "motion/react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button, Icons } from "rujira.ui";

const Meta = () => {
  return (
    <Helmet>
      <title>Rujira</title>
      <meta
        name="description"
        content="Rujira is born from the powerful merger of Kujira and THORChain, uniting fragmented DeFi tools into a seamless experience. Empower your financial journey with native cross-chain capabilities and unrivaled liquidity. No bridges. No barriers. Just DeFi."
      />
      <meta
        name="og:description"
        content="Rujira is born from the powerful merger of Kujira and THORChain, uniting fragmented DeFi tools into a seamless experience. Empower your financial journey with native cross-chain capabilities and unrivaled liquidity. No bridges. No barriers. Just DeFi."
      />
      <meta
        name="twitter:description"
        content="Rujira is born from the powerful merger of Kujira and THORChain, uniting fragmented DeFi tools into a seamless experience. Empower your financial journey with native cross-chain capabilities and unrivaled liquidity. No bridges. No barriers. Just DeFi."
      />
    </Helmet>
  );
};

export const NotFound = () => (
  <>
    <Meta />
    <div className="rujira__main rujira__main--gradient">
      <div className="rujira__inner rujira__inner--pad">
        <section className="home__banner">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="fs-32 lh-40 fs-md-40 lh-md-48 fw-400 mb-1 color-white">
            404
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.35 }}
            className="fs-48 lh-48 fs-md-70 lh-md-70 fw-600 uppercase color-white">
            Page Not
            <br />
            Found
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="fs-20 lh-24 fw-400 mt-4">
            The Future of Decentralized Finance Is Here.
            <br />
            (just not on this page)
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.25 }}
            className="mt-6">
            <Button
              className="button--outline button--grey button--icon-right ml-1"
              label="Learn More">
              <Icons.AngleDown />
            </Button>
            <Button
              as={Link}
              to="/migrate"
              className="button--outline button--icon-right ml-1"
              label="Migrate">
              <Icons.AngleRight />
            </Button>
          </motion.div>
        </section>
      </div>
    </div>
  </>
);
