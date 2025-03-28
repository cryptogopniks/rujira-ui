import clsx from "clsx";
import { AnimatePresence, motion, useAnimate } from "motion/react";
import { FC, ReactElement, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Account, AccountProvider, Network } from "rujira.js";
import { Button, Input, useClickOutside } from "../..";
import { useGlobalModalContext } from "../../context/GlobalModal";
import { i18n } from "../../i18n";
import {
  AngleDown,
  Ellipsis,
  LinkConnect,
  LinkDisconnect,
  Plus,
  Users,
} from "../icons/Icons";
import { NetworkIcon } from "../icons/NetworkIcon";
import { Fiat } from "../numbers/Fiat";
import { ResolveLink } from "./ResolveLink";

let referral = localStorage.getItem("referral");

interface AccountsProps<T> {
  provider: AccountProvider<T>;
  routingElement: any;
  wallets: WalletProps<T>[];
  ProviderIcon: FC<{ provider: T; selected: boolean; className?: string }>;
}

export const Accounts = <T,>({
  provider,
  routingElement,
  wallets,
  ProviderIcon,
}: AccountsProps<T>): ReactElement => {
  const { accounts, disconnectAll, selected } = provider;
  const [hoverBalance, setHoverBalance] = useState(false);
  const [showBlur, setShowBlur] = useState(false);
  const { hideModal, showModal } = useGlobalModalContext();

  const ConnectModal = () => {
    showModal({
      title: "Connect Your Account",
      backgroundClose: true,
      children: (
        <Wallets modalLayout={true} provider={provider} wallets={wallets} />
      ),
    });
  };

  const ReferralModal = () => {
    showModal({
      title: "Refer And Earn",
      backgroundClose: true,
      children: (
        <>
          <p className="p balance">
            Share your unique referral link and earn affiliate fees on trades,
            swaps, and all DeFi interactions.
          </p>
          <div
            className="pointer"
            onClick={() => {
              toast.success("referral copied to clipboard");
              navigator.clipboard.writeText(
                `https://rujira.network/?ref=${referral}`
              );
            }}>
            <Input
              value={`https://rujira.network/?ref=${referral}`}
              readOnly={true}
              label="Click to copy"
            />
          </div>
          <p className="fs-12 color-grey mt-2">
            This referral link is valid until ...
          </p>
          <div className="modal__footer mt-4 px-3 py-2 text-right">
            <Button label="Close" onClick={hideModal} />
          </div>
        </>
      ),
    });
  };

  const groupedAccounts = accounts?.reduce(
    (acc, account) => {
      if (account.network === Network.Thorchain) {
        acc.rujira.push(account);
      } else {
        acc.other.push(account);
      }
      return acc;
    },
    { rujira: [], other: [] } as { rujira: Account<T>[]; other: Account<T>[] }
  );
  groupedAccounts?.other.sort((a, b) => a.network.localeCompare(b.network));

  if (selected && groupedAccounts) {
    var selectedIndex = groupedAccounts?.rujira.findIndex(
      (account) =>
        account.network === selected.network &&
        account.provider === selected.provider
    );
    if (selectedIndex > -1 && selectedIndex > 3) {
      // is in hidden list
      const [selectedAccount] = groupedAccounts?.rujira.splice(
        selectedIndex,
        1
      );
      groupedAccounts?.rujira.unshift(selectedAccount);
    } else if (selectedIndex === -1) {
      selectedIndex = groupedAccounts?.other.findIndex(
        (account) =>
          account.network === selected.network &&
          account.provider === selected.provider
      );
      if (selectedIndex > -1 && selectedIndex > 3) {
        // is in hidden list
        const [selectedAccount] = groupedAccounts?.other.splice(
          selectedIndex,
          1
        );
        groupedAccounts?.other.unshift(selectedAccount);
      }
    }
  }

  const [showSelectAccounts, setShowSelectAccounts] = useState(false);
  const ref1 = useClickOutside(() => setShowSelectAccounts(false));
  const [showSelectOther, setShowSelectOther] = useState(false);
  const ref2 = useClickOutside(() => setShowSelectOther(false));

  if (wallets.length === 0) return <></>;

  return (
    <>
      {accounts?.length === 0 ? (
        <ConnectAnimation>
          <Wallets
            provider={provider}
            routingElement={routingElement}
            wallets={wallets}
          />
        </ConnectAnimation>
      ) : (
        <MyAccount
          routingElement={routingElement}
          provider={provider}
          onHide={() => setShowBlur(false)}>
          <ResolveLink
            as={routingElement}
            to="/portfolio"
            className="balance"
            onMouseEnter={() => setHoverBalance(true)}
            onMouseLeave={() => setHoverBalance(false)}>
            <Fiat
              amount={0n}
              symbol="~$"
              padSymbol={false}
              className="color-white fs-26 condensed"
            />
            <p className="fs-12 condensed color-grey mt-0.5">
              {!hoverBalance
                ? i18n.t("Approximate value for selected account")
                : i18n.t("View portfolio")}
            </p>
          </ResolveLink>

          {groupedAccounts?.rujira
            .slice(0, 4)
            .map((account) => (
              <Address
                provider={provider}
                ProviderIcon={ProviderIcon}
                key={account.address + "_" + account.network}
                account={account}
                selected={
                  selected?.network === account.network &&
                  selected.provider === account.provider
                }
              />
            ))}
          {groupedAccounts && groupedAccounts.rujira.length > 4 && (
            <div
              className="more flex ai-c px-1"
              onClick={() => {
                setShowSelectAccounts(true);
              }}>
              <Ellipsis className="more__icon" />
              <span className="more__label">
                {groupedAccounts.rujira.length - 4} more accounts
              </span>
              <AngleDown className="mr-0 ml-a w-2 h-2 color-grey" />
              <AnimatePresence>
                {showSelectAccounts && (
                  <motion.div
                    className="more__select"
                    ref={ref1}
                    initial={{ scale: 0.9, translateY: "-50%" }}
                    animate={{ scale: 1, translateY: "-50%" }}
                    exit={{ scale: 0.9, opacity: 0, translateY: "-50%" }}>
                    {groupedAccounts.rujira.slice(4).map((a) => (
                      <Address
                        provider={provider}
                        ProviderIcon={ProviderIcon}
                        key={a.address + "_" + a.network}
                        account={a}
                        selected={
                          selected?.network === a.network &&
                          selected.provider === a.provider
                        }
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {showSelectAccounts ||
            (showSelectOther && <div className="stop-interaction" />)}

          <p className="condensed px-1 fs-14 color-grey fw-500 mt-3 mb-1.5">
            Other Accounts
          </p>

          {groupedAccounts?.other
            .slice(0, 4)
            .map((account) => (
              <Address
                provider={provider}
                ProviderIcon={ProviderIcon}
                key={account.address + "_" + account.network}
                account={account}
                selected={
                  selected?.network === account.network &&
                  selected.provider === account.provider
                }
              />
            ))}
          {groupedAccounts && groupedAccounts.other.length > 4 && (
            <div
              className="more flex ai-c px-1"
              onClick={() => {
                setShowSelectOther(true);
              }}>
              <Ellipsis className="more__icon" />
              <span className="more__label">
                {groupedAccounts.other.length - 4} more accounts
              </span>
              <AngleDown className="mr-0 ml-a w-2 h-2 color-grey" />
              <AnimatePresence>
                {showSelectOther && (
                  <motion.div
                    className="more__select"
                    ref={ref2}
                    initial={{ scale: 0.9, translateY: "-50%" }}
                    animate={{ scale: 1, translateY: "-50%" }}
                    exit={{ scale: 0.9, opacity: 0, translateY: "-50%" }}>
                    {groupedAccounts?.other
                      .slice(4)
                      .map((a) => (
                        <Address
                          provider={provider}
                          ProviderIcon={ProviderIcon}
                          key={a.address + "_" + a.network}
                          account={a}
                          selected={
                            selected?.network === a.network &&
                            selected.provider === a.provider
                          }
                        />
                      ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          <nav className="actions">
            {referral && (
              <button className="action transparent" onClick={ReferralModal}>
                <Users />
                <span>Referral Link</span>
              </button>
            )}
            <button className="action transparent" onClick={ConnectModal}>
              <Plus />
              <span>Connect another account</span>
            </button>
            <button className="action transparent" onClick={disconnectAll}>
              <LinkDisconnect />
              <span>Disconnect all</span>
            </button>
          </nav>
          {showBlur && <div className="blur" />}
        </MyAccount>
      )}
    </>
  );
};

const ConnectAnimation = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (show) {
      animate(scope.current, { width: 98, color: "#ffffff" });
    } else {
      animate(scope.current, {
        width: scope.current.clientHeight,
        color: "#ffffff",
      });
    }
  }, [show]);

  return (
    <div
      id="connect-wallet"
      className="relative py-q1"
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}>
      <motion.a
        className="rujira-header__connect"
        ref={scope}
        initial={{ width: 36 }}>
        <AnimatePresence>
          {show && (
            <motion.div
              className="fs-14 fw-500 condensed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              {i18n.t("Connect")}
            </motion.div>
          )}
        </AnimatePresence>
        <LinkConnect />
      </motion.a>
      <AnimatePresence>
        {show && (
          <motion.div
            className="rujira-header__popup right condensed w-32 text-center p-2"
            initial={{ opacity: 0, marginTop: -4 }}
            animate={{ opacity: 1, marginTop: 4 }}
            exit={{ opacity: 0, marginTop: -4 }}>
            <i18n.p className="color-white">Connect Your Account</i18n.p>
            <i18n.small className="color-grey mb-1">
              Create or connect an existing account
            </i18n.small>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export interface WalletProps<T> {
  key: string;
  label: string;
  provider?: T;
  icon: ReactElement;
}

interface WalletsProps<T> {
  modalLayout?: boolean;
  provider: AccountProvider<T>;
  routingElement?: any;
  wallets: WalletProps<T>[];
}

const Wallets = <T,>({
  modalLayout = false,
  provider,
  routingElement,
  wallets,
}: WalletsProps<T>): ReactElement => {
  const { connect } = provider;
  const { hideModal } = useGlobalModalContext();

  const [first, ...rest] = wallets;
  return (
    <div className="rujira-header__wallets">
      <div
        className={clsx({
          "flex w-full ai-c jc-c wrap": true,
          "mb-1": modalLayout,
        })}>
        <button
          id="connect-station"
          data-tooltip="Coming Soon..."
          className={clsx({
            "transparent block pointer big": true,
            "desaturate opacity-10": !first?.provider,
          })}
          disabled={!first?.provider}
          onClick={() => {
            first?.provider && connect(first?.provider).then(hideModal);
          }}>
          {first?.icon}
        </button>
      </div>
      <div className="flex w-full ai-c jc-c wrap">
        {rest.map((x) => (
          <button
            key={x.label}
            id={`connect-${x.label}`}
            className={clsx({
              "transparent block pointer": true,
              medium: modalLayout,
              "desaturate opacity-10": false,
            })}
            disabled={!x.provider}
            onClick={() => {
              x.provider && connect(x.provider).then(hideModal);
            }}>
            {x.icon}
          </button>
        ))}
      </div>

      <hr
        className={clsx({
          hr: true,
          "my-0.5": !modalLayout,
          "my-2": modalLayout,
        })}
      />
      <ResolveLink as={routingElement} to="/ecosystem/wallets">
        Need help deciding?
      </ResolveLink>
    </div>
  );
};

const MyAccount = ({
  provider,
  children,
  onHide,
  routingElement,
}: {
  provider: AccountProvider<any>;
  children: React.ReactNode;
  onHide: () => void;
  routingElement?: any;
}) => {
  const [show, setShow] = useState(false);
  const { selected } = provider;

  useEffect(() => {
    onHide();
  }, [show]);

  return (
    <div
      className="relative py-q1"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}>
      <ResolveLink
        as={routingElement}
        path="/portfolio"
        className="rujira-header__pfp">
        {selected && <NetworkIcon network={selected.network} />}
      </ResolveLink>
      <AnimatePresence>
        {show && (
          <motion.div
            className="rujira-header__popup right condensed p-1.5 br-2"
            initial={{ opacity: 0, marginTop: -4, right: -8 }}
            animate={{ opacity: 1, marginTop: 4, right: -8 }}
            exit={{ opacity: 0, marginTop: -4, right: -8 }}>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AddressProps<T> {
  account: Account<T>;
  selected: boolean;
  provider: AccountProvider<T>;
  ProviderIcon: FC<{ provider: T; selected: boolean; className?: string }>;
}

const Address = <T,>({
  account,
  selected,
  provider,
  ProviderIcon,
}: AddressProps<T>): ReactElement => {
  const { select, disconnect } = provider;
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className={clsx({
        "flex ai-c px-1 address": true,
        "address--selected": selected,
      })}>
      <NetworkIcon
        network={account.network}
        className="address__wallet"
        selected={selected}
      />
      {/* <ProviderIcon provider={account.provider} selected={selected} /> */}
      <p
        className="address__address pointer"
        onClick={() => {
          if (selected) {
            toast.success("address copied to clipboard");
            navigator.clipboard.writeText(account.address);
          } else {
            select(account);
          }
        }}>
        {hover && selected ? (
          "copy address..."
        ) : (
          <>
            {account.address.substring(0, 10)}...
            {account.address.slice(-12)}
          </>
        )}
      </p>

      {hover ? (
        <LinkDisconnect
          className="address__disconnect"
          onClick={() => disconnect(account.provider)}
        />
      ) : (
        <ProviderIcon
          className="address__disconnect"
          provider={account.provider}
          selected={selected}
        />
      )}
    </div>
  );
};
