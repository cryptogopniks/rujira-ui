import { FC } from "react";
import { graphql, useFragment } from "react-relay";
import {
  Header as BaseHeader,
  Provider,
  useGlobalModalContext,
  WalletIcons,
  WalletProps,
} from "rujira.ui";
import "rujira.ui/src/scss/index.scss";

import clsx from "clsx";
import { Link } from "../../Gate";
import { useAccounts } from "../../services/accounts";
import { HeaderFragment$key } from "./__generated__/HeaderFragment.graphql";
import { Deposit } from "./Deposit";

const WALLETS: WalletProps<Provider>[] = [
  {
    key: "station",
    label: "Station",
    icon: <WalletIcons.StationText />,
  },

  {
    key: "ctrl",
    label: "Ctrl",
    provider: "Ctrl",
    icon: <WalletIcons.Ctrl className="color-white" />,
  },
  {
    key: "keplr",
    label: "Keplr",
    provider: "Keplr",
    icon: <WalletIcons.Keplr />,
  },
  {
    key: "leap",
    label: "Leap",
    provider: "Leap",
    icon: <WalletIcons.Leap />,
  },

  {
    key: "metamask",
    label: "Metamask",
    provider: "Metamask",
    icon: <WalletIcons.MetaMask />,
  },

  {
    key: "okx",
    label: "OKX",
    provider: "Okx",
    icon: <WalletIcons.OKX className="color-white" />,
  },

  {
    key: "trust-extenion",
    label: "Trust Extension",
    provider: "Trust",
    icon: <WalletIcons.Trust />,
  },
  {
    key: "vultisig",
    label: "Vultisig",
    // provider: "Vultisig",
    icon: <WalletIcons.Vultisig />,
  },
];

const fragment = graphql`
  fragment HeaderFragment on Thorchain {
    ...DepositFragment
  }
`;

export const Header: FC<{ k?: HeaderFragment$key }> = ({ k }) => {
  const data = useFragment(fragment, k);
  const { showModal } = useGlobalModalContext();
  const accountProvider = useAccounts();
  const deposit = () => {
    showModal({
      title: ``,
      className: "modal--large",
      backgroundClose: false,
      children: <Deposit k={data || undefined} />,
    });
  };

  return (
    <BaseHeader
      accountProvider={accountProvider}
      routingElement={Link}
      ProviderIcon={ProviderIcon}
      wallets={WALLETS}
      onDeposit={deposit}
    />
  );
};

export const ProviderIcon: FC<{
  provider: Provider;
  selected: boolean;
  className?: string;
}> = ({ provider, selected, className }) => {
  switch (provider) {
    case "Keplr":
      return selected ? (
        <WalletIcons.Keplr className={clsx({ [`${className}`]: className })} />
      ) : (
        <WalletIcons.KeplrSimple
          className={clsx({ [`${className}`]: className })}
        />
      );
    case "Leap":
      return selected ? (
        <WalletIcons.Leap className={clsx({ [`${className}`]: className })} />
      ) : (
        <WalletIcons.LeapSimple
          className={clsx({ [`${className}`]: className })}
        />
      );
    case "Metamask":
      return selected ? (
        <WalletIcons.MetaMask
          className={clsx({ [`${className}`]: className })}
        />
      ) : (
        <WalletIcons.MetaMaskSimple
          className={clsx({ [`${className}`]: className })}
        />
      );
    // case "Sonar":
    //   return (
    //     <WalletIcons.SonarSimple
    //       className={clsx({[`${className}`]: className, "color-white": selected })}
    //     />
    //   );
    case "Station":
      return (
        <WalletIcons.StationSimple
          className={clsx({ [`${className}`]: className })}
          gradient={selected}
        />
      );
    case "Vultisig":
      return selected ? (
        <WalletIcons.Vultisig
          className={clsx({ [`${className}`]: className })}
        />
      ) : (
        <WalletIcons.VultisigSimple
          className={clsx({ [`${className}`]: className })}
        />
      );
    case "Ctrl":
      return (
        <WalletIcons.Ctrl
          className={clsx({
            [`${className}`]: className,
            "color-white": selected,
          })}
        />
      );

    case "Okx":
      return (
        <WalletIcons.OKX
          className={clsx({
            [`${className}`]: className,
            "color-white": selected,
          })}
        />
      );
    case "Trust":
      return selected ? (
        <WalletIcons.Trust className={clsx({ [`${className}`]: className })} />
      ) : (
        <WalletIcons.TrustSimple
          className={clsx({ [`${className}`]: className })}
        />
      );
  }
};
