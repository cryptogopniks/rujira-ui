import clsx from "clsx";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { Network } from "rujira.js";
import { WalletIcons, WalletProps } from "rujira.ui";
import { Account, AccountProvider, Provider } from "./types";

const ERROR = () => {
  throw new Error("AccountProvider Context not defined");
};

const Context = createContext<AccountProvider>({
  accounts: [],
  select: ERROR,
  connect: ERROR,
  disconnect: ERROR,
  disconnectAll: ERROR,
});

export const AccountsContext: FC<PropsWithChildren> = ({ children }) => {
  const [provider, setProvider] = useState<Provider | undefined>();
  const [network, setNetwork] = useState<Network | undefined>();
  const [accounts, setAccounts] = useState<Account[]>([]);

  const selected = accounts.find(
    (a) => a.network === network && a.provider === provider
  );

  const connect = async (provider: Provider) => {
    switch (provider) {
      case Provider.Ctrl:
        setProvider(provider);
        setNetwork(Network.Bitcoin);
        setAccounts((prev) => [
          ...prev,
          {
            provider: provider,
            network: Network.Bitcoin,
            address: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
          },
        ]);
        break;
      case Provider.Keplr:
        setProvider(provider);
        setNetwork(Network.Gaia);
        setAccounts((prev) => [
          ...prev,
          {
            provider: provider,
            network: Network.Gaia,
            address: "cosmos1m4pprm4emhdf7z2dcd4klw2kzwfne55wdp5frq",
          },
        ]);

        break;
      case Provider.Leap:
        setProvider(provider);
        setNetwork(Network.Gaia);
        setAccounts((prev) => [
          ...prev,
          {
            provider: provider,
            network: Network.Gaia,
            address: "cosmos1m4pprm4emhdf7z2dcd4klw2kzwfne55wdp5frq",
          },
        ]);
        break;

      case Provider.Metamask:
        setProvider(provider);
        setAccounts((prev) => [
          ...prev,
          {
            provider: provider,
            network: Network.Ethereum,
            address: "0x73f7b1184B5cD361cC0f7654998953E2a251dd58",
          },
        ]);

        break;
      case Provider.Sonar:
        throw new Error("Error Connecting to Sonar");
      case Provider.Station:
        setProvider(provider);
        setNetwork(Network.Thorchain);
        setAccounts((prev) => [
          ...prev,
          {
            provider: provider,
            network: Network.Thorchain,
            address: "thor1kp68vjldscfw5ke6gktyaufkvq8gzh2kyfyuyn",
          },
        ]);

        break;
      case Provider.Vultisig:
        setProvider(provider);
        setAccounts((prev) => [
          ...prev,
          {
            provider: provider,
            network: Network.Thorchain,
            address: "thor1kp68vjldscfw5ke6gktyaufkvq8gzh2kyfyuyn",
          },
        ]);

        break;
    }
  };

  const select = (account: { provider: Provider; network: Network }) => {
    setProvider(account.provider);
    setNetwork(account.network);
  };

  const disconnect = (p: Provider) => {
    setAccounts((prev) => {
      const filtered = prev.filter((x) => x.provider !== p);
      const selected = filtered[0];
      setProvider(selected.provider);
      setNetwork(selected.network);
      return filtered;
    });
  };
  const disconnectAll = () => {
    setAccounts([]);
  };

  const value: AccountProvider = {
    accounts,
    selected,
    select,
    connect,
    disconnect,
    disconnectAll,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useAccounts = (): AccountProvider => useContext(Context);

export const WALLETS: WalletProps<Provider>[] = [
  {
    key: "station",
    label: "Station",
    provider: Provider.Station,
    icon: <WalletIcons.StationText />,
  },
  {
    key: "vultisig",
    label: "Vultisig",
    provider: Provider.Vultisig,
    icon: <WalletIcons.Vultisig />,
  },

  {
    key: "sonar",
    label: "Sonar",
    provider: Provider.Sonar,
    icon: <WalletIcons.Sonar />,
  },

  {
    key: "keplr",
    label: "Keplr",
    provider: Provider.Keplr,
    icon: <WalletIcons.Keplr />,
  },

  {
    key: "leap",
    label: "Leap",
    provider: Provider.Leap,
    icon: <WalletIcons.Leap />,
  },

  {
    key: "ctrl",
    label: "Ctrl",
    provider: Provider.Ctrl,
    icon: <WalletIcons.Ctrl className="color-white" />,
  },

  {
    key: "metamask",
    label: "Metamask",
    provider: Provider.Metamask,
    icon: <WalletIcons.MetaMask />,
  },
];

export const ProviderIcon: FC<{ provider: Provider; selected: boolean }> = ({
  provider,
  selected,
}) => {
  switch (provider) {
    case Provider.Keplr:
      return selected ? (
        <WalletIcons.Keplr className="address__wallet" />
      ) : (
        <WalletIcons.KeplrSimple className="address__wallet" />
      );
    case Provider.Leap:
      return selected ? (
        <WalletIcons.Leap className="address__wallet" />
      ) : (
        <WalletIcons.LeapSimple className="address__wallet" />
      );
    case Provider.Metamask:
      return selected ? (
        <WalletIcons.MetaMask className="address__wallet" />
      ) : (
        <WalletIcons.MetaMaskSimple className="address__wallet" />
      );
    case Provider.Sonar:
      return (
        <WalletIcons.SonarSimple
          className={clsx({ address__wallet: true, "color-white": selected })}
        />
      );
    case Provider.Station:
      return (
        <WalletIcons.StationSimple
          className="address__wallet"
          gradient={selected}
        />
      );
    case Provider.Vultisig:
      return selected ? (
        <WalletIcons.Vultisig className="address__wallet" />
      ) : (
        <WalletIcons.VultisigSimple className="address__wallet" />
      );
    case Provider.Ctrl:
      return (
        <WalletIcons.Ctrl
          className={clsx({ address__wallet: true, "color-white": selected })}
        />
      );
  }
};
