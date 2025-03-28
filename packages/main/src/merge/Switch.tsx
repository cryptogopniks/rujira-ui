import clsx from "clsx";
import { motion } from "motion/react";
import { Helmet } from "react-helmet";
import { i18n, RujiraLogo, tokens, useQueryParam } from "rujira.ui";

import bg from "./assets/background.jpg";

import { FC, useState } from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { Network } from "rujira.js";
import { SwitchAccountFragment$key } from "./__generated__/SwitchAccountFragment.graphql";
import { Ibc } from "./components/Ibc";
import { Switch as SwitchC } from "./components/Switch";

const accountFragment = graphql`
  fragment SwitchAccountFragment on Layer1Account {
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

const TOKENS = [{ symbol: "AUTO" }, { symbol: "MNTA" }, { symbol: "NAMI" }];

const Meta = () => {
  return (
    <Helmet>
      <title>Rujira Migrate</title>
      <meta
        name="description"
        content="Swap tokens at the best available rate."
      />
      <meta
        name="og:description"
        content="Swap tokens at the best available rate."
      />
      <meta
        name="twitter:description"
        content="Swap tokens at the best available rate."
      />
    </Helmet>
  );
};

export const Switch: FC<{
  a?: SwitchAccountFragment$key;
}> = ({ a }) => {
  const account = useFragment(accountFragment, a);

  const [selectedDenom, setSelectedDenom] = useQueryParam<string>(
    "token",
    "AUTO"
  );
  const [step, setStep] = useState(1);

  return (
    <>
      <Meta />
      <motion.div
        className="migrate__background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="rujira__inner--pad migrate">
        <div className="rujira__inner">
          <RujiraLogo
            showText={false}
            className="w-20 h-20 w-lg-30 h-lg-30 block"
            animate={true}
          />

          <i18n.h1 className="h1 mt-4">Migrate to the App Layer</i18n.h1>
          <i18n.h2 className="fs-24 lh-32 fw-400 color-white">
            Holders of AUTO, MNTA and NAMI tokens are able to migrate these
            tokens onto Rujira, the THORChain app layer.
          </i18n.h2>

          <i18n.h3 className="h5 text-center mt-6">Select a Token</i18n.h3>
          <div className="flex jc-c mt-2">
            {TOKENS.map((t) => (
              <img
                key={t.symbol}
                src={tokens[t.symbol.toLowerCase() as keyof typeof tokens]}
                alt={t.symbol}
                className={clsx({
                  "block w-5 h-5 mx-1 pointer": true,
                  desaturate: selectedDenom !== t.symbol,
                })}
                draggable="false"
                onClick={() => setSelectedDenom(t.symbol)}
              />
            ))}
          </div>

          <div className="row wrap pad mt-4">
            <Ibc
              step={step}
              setStep={setStep}
              channel="channel-0"
              k={
                account?.chain === Network.Kujira
                  ? account?.balances?.find(
                      (x) => x.asset.metadata.symbol === selectedDenom
                    )
                  : undefined
              }
              symbol={selectedDenom}
            />
            <SwitchC
              step={step}
              setStep={setStep}
              symbol={selectedDenom}
              k={
                account?.chain === Network.Gaia
                  ? account?.balances?.find(
                      (x) => x.asset.metadata.symbol === selectedDenom
                    )
                  : undefined
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};
