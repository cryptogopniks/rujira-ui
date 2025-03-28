import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";
import { Network } from "rujira.js";
import { Account, AccountProvider, Provider, wallets } from "rujira.ui";
const {
  getAccounts,
  addProvider,
  clearProviders,
  clearSelected,
  loadProviders,
  loadSelected,
  removeProvider,
  saveSelected,
  onChange,
} = wallets;

const ERROR = () => {
  throw new Error("AccountProvider Context not defined");
};

// these functions both require an `inboundAddress` when interacting from a Layer 1
// We fetch these in the same root query as the account balances, so we push the signing
// provider down below where the query result is available
interface AccountContext extends AccountProvider {
  context?: any;
}

const Context = createContext<AccountContext>({
  accounts: undefined,
  select: ERROR,
  connect: ERROR,
  disconnect: ERROR,
  disconnectAll: ERROR,
});

// Currently we only support 1-1 relationship between providers and connected account(s)
// If for example a user has multiple accounts connected on a Metamask wallet, the context
// will provide just the one that is currently selected
// This is relatively easily extended to allow a user to connect to a provider multiple
// times, registering each account/address and allowing the UI to visually represent
// (or auto-fix) a mis-match between UI-selected account and provider-selected account
const storedSelected = loadSelected();
// These are the providers that have been previously connected, and so we should attempt to re-connect
// on a page refresh, where possible without triggering annoying modal prompts from the wallets
// If a connection is refused, it should be removed from the list of stored providers
const connectedProviders: Provider[] = loadProviders();

/**
 * Storage for the returned Context's for account connections
 */
type WalletContext = { account: Account; context: any };

export const AccountsContext: FC<PropsWithChildren> = ({ children }) => {
  const [provider, setProvider] = useState<Provider | undefined>(
    storedSelected?.provider
  );
  const [network, setNetwork] = useState<Network | undefined>(
    storedSelected?.network
  );
  const [accounts, setAccounts] = useState<WalletContext[]>();

  useEffect(() => {
    Promise.all(
      connectedProviders.map((x) =>
        getAccounts(x).catch((err) => {
          // Don't keep trying
          removeProvider(x);
          throw err;
        })
      )
    ).then((x) => setAccounts(x.flat()));
  }, []);

  const selected = accounts?.find(
    (a) => a.account.network === network && a.account.provider === provider
  );

  useEffect(() => {
    if (!selected) return;
    return onChange(selected?.account.provider, () => {
      getAccounts(selected?.account.provider).then((x) => {
        if (!x.length) return;
        setAccounts((prev = []) => [
          ...prev.filter((x) => x.account.provider !== provider),
          ...x,
        ]);
      });
    });
  }, [selected]);

  const connect = async (provider: Provider) => {
    try {
      const x = await getAccounts(provider);
      if (!x.length) throw new Error(`No accounts found on ${provider}`);
      const toSelect = x[0];
      addProvider(provider);
      toSelect && saveSelected(provider, toSelect.account.network);
      toSelect && setNetwork(toSelect.account.network);
      setProvider(provider);
      setAccounts((prev = []) => [
        ...prev.filter((x) => x.account.provider !== provider),
        ...x,
      ]);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const select = (account: { provider: Provider; network: Network }) => {
    saveSelected(account.provider, account.network);
    setProvider(account.provider);
    setNetwork(account.network);
  };

  const disconnect = (p: Provider) => {
    removeProvider(p);
    setAccounts((prev = []) => {
      const filtered = prev.filter((x) => x.account.provider !== p);
      const selected = filtered[0];
      selected &&
        saveSelected(selected.account.provider, selected.account.network);
      return filtered;
    });
  };
  const disconnectAll = () => {
    clearProviders();
    clearSelected();
    setAccounts([]);
  };

  const value: AccountContext = {
    accounts: accounts?.map((a) => a.account),
    selected: selected?.account,
    context: selected?.context,
    select,
    connect,
    disconnect,
    disconnectAll,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useAccounts = (): AccountContext => useContext(Context);
