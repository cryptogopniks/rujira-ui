import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import {
  FC,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { AccountProvider } from "rujira.js";
import { useWindowSize } from "../../hooks/useWindowSize";
import { i18n } from "../../i18n";
import {
  AngleDown,
  Book,
  Building,
  Chart,
  ChartUp,
  ChartUpDown,
  Deposit,
  Earth,
  External,
  Gavel,
  MoneyTransfer,
  NFT,
  PieChart,
  Seedling,
  Stake,
  Swap,
  Terminal,
} from "../icons/Icons";
import { RujiraLogo } from "../logos/RujiraLogo";
import { Accounts, WalletProps } from "./Accounts";
import { ResolveLink } from "./ResolveLink";

export * from "./Accounts";
export * from "./QuickLauncher";

type HeaderProps<T> = {
  accountProvider: AccountProvider<T>;
  showAccount?: boolean;
  className?: string;
  domain?: string;
  routingElement: any;
  wallets: WalletProps<T>[];
  ProviderIcon: FC<{ provider: T; selected: boolean }>;
  onDeposit?: () => void;
  //hideNetworkSwitch?: boolean;
};

export const Header = <T,>({
  accountProvider,
  className,
  domain = "",
  routingElement,
  wallets,
  ProviderIcon,
  onDeposit,
  //hideNetworkSwitch,
}: HeaderProps<T>): ReactElement => {
  return (
    <Container className={className}>
      <ResolveLink as={routingElement} to="/">
        <Logo />
      </ResolveLink>
      <MobileNav domain={domain} routingElement={routingElement} />
      <MainNav
        domain={domain}
        accountProvider={accountProvider}
        routingElement={routingElement}
      />
      <div className="ml-a mr-0 flex ai-c gradient-card-container">
        {onDeposit && (
          <button
            id="deposit"
            className="transparent rujira-header__deposit"
            onClick={onDeposit}>
            <Deposit />
          </button>
        )}
        {/* <QuickLauncher domain={domain || ""} routingElement={routingElement} /> */}
        <Accounts
          provider={accountProvider}
          ProviderIcon={ProviderIcon}
          routingElement={routingElement}
          wallets={wallets}
          //hideNetworkSwitch={hideNetworkSwitch}
        />
      </div>
    </Container>
  );
};

export const Container: React.FC<PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx({
        "rujira-header": true,
        [`${className}`]: className,
      })}>
      {children}
    </div>
  );
};

export const Logo = () => {
  const size = useWindowSize();
  return (
    <RujiraLogo
      textColor="#fff"
      className="rujira-header__logo"
      showText={size.width >= 1024}
      animate={true}
    />
  );
};

interface MainNavProps<T> {
  domain: string;
  accountProvider: AccountProvider<T>;
  routingElement: any;
}

export const MainNav = <T,>({
  domain,
  accountProvider,
  routingElement,
}: MainNavProps<T>): ReactElement => {
  const { accounts } = accountProvider;
  const [showTrade, setShowTrade] = useState(false);
  const [showEarn, setShowEarn] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showDiscover, setShowDiscover] = useState(false);

  useEffect(() => {
    if (showTrade || showMore || showDiscover || showEarn) {
      const popup = document.querySelector<HTMLElement>(
        ".rujira-header__popup"
      );
      if (popup) {
        const box = popup.getBoundingClientRect();
        const body = document.body;
        const docEl = document.documentElement;
        const scrollLeft =
          window.scrollX || docEl.scrollLeft || body.scrollLeft;
        const clientLeft = docEl.clientLeft || body.clientLeft || 0;
        const left = box.left + scrollLeft - clientLeft;
        if (left + box.width > window.innerWidth - 20) {
          const diff = Math.round(left + box.width - window.innerWidth + 20);
          popup.style.transform = "translateX(-" + diff + "px)";
        }
      }
    }
  }, [showTrade, showMore, showDiscover, showEarn]);

  return (
    <nav className="rujira-header__nav">
      {accounts && accounts.length > 0 && (
        <ResolveLink as={routingElement} domain={domain} to="/portfolio">
          {i18n.t("Portfolio")}
        </ResolveLink>
      )}
      <span
        onMouseOver={() => setShowTrade(true)}
        onMouseOut={() => setShowTrade(false)}>
        {i18n.t("Trade")}
        <AngleDown />
        <AnimatePresence>
          {showTrade && (
            <SubTrade domain={domain} routingElement={routingElement} />
          )}
        </AnimatePresence>
      </span>
      <span
        onMouseOver={() => setShowEarn(true)}
        onMouseOut={() => setShowEarn(false)}>
        {i18n.t("Earn")}
        <AngleDown />
        <AnimatePresence>
          {showEarn && (
            <SubEarn domain={domain} routingElement={routingElement} />
          )}
        </AnimatePresence>
      </span>
      <span
        onMouseOver={() => setShowMore(true)}
        onMouseOut={() => setShowMore(false)}>
        {i18n.t("Market")}
        <AngleDown />
        <AnimatePresence>
          {showMore && (
            <SubMore domain={domain} routingElement={routingElement} />
          )}
        </AnimatePresence>
      </span>
      <span
        onMouseOver={() => setShowDiscover(true)}
        onMouseOut={() => setShowDiscover(false)}>
        {i18n.t("Discover")}
        <AngleDown />
        <AnimatePresence>
          {showDiscover && (
            <SubDiscover domain={domain} routingElement={routingElement} />
          )}
        </AnimatePresence>
      </span>
    </nav>
  );
};

export const MobileNav = ({
  domain,
  routingElement,
}: {
  domain: string;
  routingElement: any;
}) => {
  const [showMobile, setShowMobile] = useState(false);

  useEffect(() => {
    if (showMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMobile]);

  let url = location.href;
  document.body.addEventListener(
    "click",
    () => {
      requestAnimationFrame(() => {
        if (url !== location.href) {
          setShowMobile(false);
          url = location.href;
        }
      });
    },
    true
  );

  return (
    <>
      <button
        className="rujira-header__hamburger"
        onClick={() => setShowMobile(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M0 64H448v48H0V64zM0 224H448v48H0V224zM448 384v48H0V384H448z"
            fill="currentColor"
          />
        </svg>
      </button>
      <AnimatePresence>
        {showMobile && (
          <motion.nav
            className="rujira-header__mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <button
              className="rujira-header__mobile-close"
              onClick={() => setShowMobile(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  fill="currentColor"
                  d="M345 137l17-17L328 86.1l-17 17-119 119L73 103l-17-17L22.1 120l17 17 119 119L39 375l-17 17L56 425.9l17-17 119-119L311 409l17 17L361.9 392l-17-17-119-119L345 137z"
                />
              </svg>
            </button>
            <MobileMenu domain={domain} routingElement={routingElement} />
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

const Popup = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    className="rujira-header__popup sub-nav fw-400 p-2"
    initial={{ opacity: 0, marginTop: -4 }}
    animate={{ opacity: 1, marginTop: 0 }}
    exit={{ opacity: 0, marginTop: -4 }}>
    {children}
  </motion.div>
);

type SubProps = {
  domain?: string;
  routingElement: any;
  setShowMobile?: (e: any) => void;
};

const SubTrade = ({ domain, routingElement }: SubProps) => (
  <Popup>
    <div className="row wrap pad w-60 mt-1">
      {/* <ResolveLink
        as={routingElement}
        domain={domain}
        to="/buy"
        className="col-6 flex">
        <ChartUp className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
        <div>
          <i18n.h4 className="fs-14 fw-600">Buy Crypto</i18n.h4>
          <i18n.p className="fs-12 mt-0.5">
            Instantly buy crypto at the best available rate
          </i18n.p>
        </div>
      </ResolveLink> */}
      <ResolveLink
        as={routingElement}
        domain={domain}
        to="/swap"
        className="col-6 flex">
        <Swap className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
        <div>
          <i18n.h4 className="fs-14 fw-600">Token Swap</i18n.h4>
          <i18n.p className="fs-12 mt-0.5">
            Swap tokens at the best available rate
          </i18n.p>
        </div>
      </ResolveLink>
      <ResolveLink
        as={routingElement}
        domain={domain}
        to="/trade"
        className="col-6 flex">
        <Chart className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
        <div>
          <i18n.h4 className="fs-14 fw-600">Spot Trading</i18n.h4>
          <i18n.p className="fs-12 mt-0.5">
            Buy and sell on the spot market without slippage
          </i18n.p>
        </div>
      </ResolveLink>

      <ResolveLink
        as={routingElement}
        domain={domain}
        to="/options"
        className="col-6 flex mt-3">
        <ChartUp className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
        <div>
          <i18n.h4 className="fs-14 fw-600">Options</i18n.h4>
          <i18n.p className="fs-12 mt-0.5">
            Designed to simplify options trading
          </i18n.p>
        </div>
      </ResolveLink>

      <ResolveLink
        as="a"
        //href="http://perps.rujira.network/perps"
        target="_blank"
        className="col-6 flex mt-3">
        <ChartUpDown className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
        <div>
          <i18n.h4 className="fs-14 fw-600">Perps</i18n.h4>
          <i18n.p className="fs-12 mt-0.5">
            Buy and sell perpetual futures contracts
          </i18n.p>
        </div>
      </ResolveLink>
      {/* <a
        className="col-6 mt-3 flex ai-s"
        href="https://github.com/funttastic"
        target="_blank">
        <Robot className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
        <div>
          <i18n.h4 className="fs-14 fw-600 flex ai-c">
            Bots <IconExternal className="h-1 w-a ml-1" />
          </i18n.h4>
          <i18n.p className="fs-12 mt-0.5">
            Integrate with Hummingbot for advanced personal strategies
          </i18n.p>
        </div>
      </a> */}
    </div>
  </Popup>
);

const SubEarn = ({ domain, routingElement }: SubProps) => (
  <Popup>
    <div className="row wrap pad w-60 mt-1">
      <ResolveLink
        as={routingElement}
        domain={domain}
        to="/stake"
        className="col-6 flex ai-s">
        <Stake className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
        <div>
          <i18n.h4 className="fs-14 fw-600">Stake</i18n.h4>
          <i18n.p className="fs-12 mt-0.5">
            Earn a percentage of fees and secure the network
          </i18n.p>
        </div>
      </ResolveLink>
      <ResolveLink
        as={routingElement}
        domain={domain}
        to="/provide"
        className="col-6 flex ai-s">
        <Building className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
        <div>
          <i18n.h4 className="fs-14 fw-600">Pools</i18n.h4>
          <i18n.p className="fs-12 mt-0.5">
            Multi-strategy automated market maker pools
          </i18n.p>
        </div>
      </ResolveLink>
      <ResolveLink
        as={routingElement}
        domain={domain}
        to="/money-market"
        className="col-6 flex mt-3 ai-s">
        <MoneyTransfer className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
        <div>
          <i18n.h4 className="fs-14 fw-600">Lend & Borrow</i18n.h4>
          <i18n.p className="fs-12 mt-0.5">
            Earn yield by lending your tokens to others
          </i18n.p>
        </div>
      </ResolveLink>
      <ResolveLink
        as={routingElement}
        domain={domain}
        to="/liquidate"
        className="col-6 flex mt-3">
        <Gavel className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
        <div>
          <i18n.h4 className="fs-14 fw-600">Liquidate</i18n.h4>
          <i18n.p className="fs-12 mt-0.5">
            Beat the bots and bid on liquidated collateral
          </i18n.p>
        </div>
      </ResolveLink>
    </div>
  </Popup>
);

const SubMore = ({ domain, routingElement }: SubProps) => (
  <Popup>
    <div className="row wrap pad w-60 mt-1">
      <ResolveLink
        as={routingElement}
        domain={domain}
        to="/ventures"
        className="col-6 flex ai-s">
        <Seedling className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
        <div>
          <i18n.h4 className="fs-14 fw-600 flex ai-c">Ventures</i18n.h4>
          <i18n.p className="fs-12 mt-0.5">
            Early access to promising protocols &amp; opportunities
          </i18n.p>
        </div>
      </ResolveLink>
      {/* <ResolveLink
        as={routingElement}
        domain={domain}
        to="/borrow"
        className="col-6 flex ai-s">
        <MoneyTransfer className="color-grey h-a w-3 block mr-2 no-shrink mt-0" />
        <div>
          <i18n.h4 className="fs-14 fw-600">Borrow</i18n.h4>
          <i18n.p className="fs-12 mt-0.5">
            Borrow assets using your tokens as collateral
          </i18n.p>
        </div>
      </ResolveLink> */}
      <ResolveLink
        as={routingElement}
        domain={domain}
        to="/nfts"
        className="col-6 flex ai-s">
        <NFT className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
        <div>
          <i18n.h4 className="fs-14 fw-600 flex ai-c">
            Collections (Gojira)
          </i18n.h4>
          <i18n.p className="fs-12 mt-0.5">
            A sustainable NFT marketplace
          </i18n.p>
        </div>
      </ResolveLink>
    </div>
  </Popup>
);

const SubDiscover = ({ domain, routingElement }: SubProps) => (
  <Popup>
    <div className="row wrap pad w-60 mt-1">
      <ResolveLink
        as={routingElement}
        domain={domain}
        to="/ecosystem"
        className="col-6 flex ai-s">
        <Earth className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
        <div>
          <i18n.h4 className="fs-14 fw-600">Ecosystem</i18n.h4>
          <i18n.p className="fs-12 mt-0.5">
            Protocols, products and services calling Rujira their home
          </i18n.p>
        </div>
      </ResolveLink>
      <ResolveLink
        as={routingElement}
        domain={domain}
        to="/dashboard"
        className="col-6 flex ai-s">
        <PieChart className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
        <div>
          <i18n.h4 className="fs-14 fw-600">Token Analytics</i18n.h4>
          <i18n.p className="fs-12 mt-0.5">
            Discover RUJI tokenomics and analytics
          </i18n.p>
        </div>
      </ResolveLink>
      <ResolveLink
        as={routingElement}
        domain={domain}
        to="/developers"
        className="col-6 flex mt-3">
        <Terminal className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
        <div>
          <i18n.h4 className="fs-14 fw-600">Developers</i18n.h4>
          <i18n.p className="fs-12 mt-0.5">
            Rujira is built for builders, get started here.
          </i18n.p>
        </div>
      </ResolveLink>
      <a
        href="https://docs.rujira.network/"
        target="_blank"
        className="col-6 flex mt-3 ai-s">
        <Book className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
        <div>
          <i18n.h4 className="fs-14 fw-600 flex ai-c">
            Documentation <External className="h-1.5 w-a ml-1" />
          </i18n.h4>
          <i18n.p className="fs-12 mt-0.5">
            Dive deep into the Rujira network
          </i18n.p>
        </div>
      </a>
    </div>
  </Popup>
);

const MobileMenu = ({ domain, routingElement }: SubProps) => (
  <>
    {/*  <ResolveLink
      
      as={routingElement}
      domain={domain}
      to="/buy"
      className="mt-3 flex">
      <ChartUp className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
      <div>
        <i18n.h4 className="fs-14 fw-600">Buy Crypto</i18n.h4>
        <i18n.p className="fs-12 mt-0.5">
          Instantly buy crypto at the best available rate
        </i18n.p>
      </div>
    </ResolveLink> */}
    <ResolveLink
      as={routingElement}
      domain={domain}
      to="/swap"
      className="mt-3 flex">
      <Swap className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
      <div>
        <i18n.h4 className="fs-14 fw-600">Token Swap</i18n.h4>
        <i18n.p className="fs-12 mt-0.5">
          Swap tokens at the best available rate
        </i18n.p>
      </div>
    </ResolveLink>
    <ResolveLink
      as={routingElement}
      domain={domain}
      to="/trade"
      className="mt-3 flex">
      <Chart className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
      <div>
        <i18n.h4 className="fs-14 fw-600">Spot Trading</i18n.h4>
        <i18n.p className="fs-12 mt-0.5">
          Buy and sell on the spot market without slippage
        </i18n.p>
      </div>
    </ResolveLink>
    <ResolveLink
      as={routingElement}
      domain={domain}
      to="/options"
      className="flex mt-3">
      <ChartUp className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
      <div>
        <i18n.h4 className="fs-14 fw-600">Options</i18n.h4>
        <i18n.p className="fs-12 mt-0.5">
          Designed to simplify options trading
        </i18n.p>
      </div>
    </ResolveLink>
    <ResolveLink
      as="a"
      //href="http://perps.rujira.network/perps"
      target="_blank"
      className="mt-3 flex">
      <ChartUpDown className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
      <div>
        <i18n.h4 className="fs-14 fw-600">Futures</i18n.h4>
        <i18n.p className="fs-12 mt-0.5">
          Buy and sell perpetual futures contracts
        </i18n.p>
      </div>
    </ResolveLink>

    <ResolveLink
      as={routingElement}
      domain={domain}
      to="/stake"
      className="mt-3 flex ai-s">
      <Stake className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
      <div>
        <i18n.h4 className="fs-14 fw-600">Stake</i18n.h4>
        <i18n.p className="fs-12 mt-0.5">
          Earn a percentage of fees and secure the network
        </i18n.p>
      </div>
    </ResolveLink>
    <ResolveLink
      as={routingElement}
      domain={domain}
      to="/provide"
      className="flex mt-3 ai-s">
      <Building className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
      <div>
        <i18n.h4 className="fs-14 fw-600">Pools</i18n.h4>
        <i18n.p className="fs-12 mt-0.5">
          Multi-strategy automated market maker pools
        </i18n.p>
      </div>
    </ResolveLink>

    <ResolveLink
      as={routingElement}
      domain={domain}
      to="/money-market"
      className="flex mt-3 ai-s">
      <MoneyTransfer className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
      <div>
        <i18n.h4 className="fs-14 fw-600">Lend & Borrow</i18n.h4>
        <i18n.p className="fs-12 mt-0.5">
          Earn yield by lending your tokens to others
        </i18n.p>
      </div>
    </ResolveLink>
    {/* <ResolveLink  as={routingElement} domain={domain} to="/mint" className="mt-3 flex ai-s">
      <USK className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
      <div>
        <i18n.h4 className="fs-14 fw-600">Mint USK</i18n.h4>
        <i18n.p className="fs-12 mt-0.5">
          Use your tokens as collateral to mint USK
        </i18n.p>
      </div>
    </ResolveLink> */}
    {/* <ResolveLink
      
      as={routingElement}
      domain={domain}
      to="/borrow"
      className="mt-3 flex ai-s">
      <MoneyTransfer className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
      <div>
        <i18n.h4 className="fs-14 fw-600">Borrow</i18n.h4>
        <i18n.p className="fs-12 mt-0.5">
          Borrow assets using your tokens as collateral
        </i18n.p>
      </div>
    </ResolveLink> */}
    <ResolveLink
      as={routingElement}
      domain={domain}
      to="/liquidate"
      className="flex mt-3">
      <Gavel className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
      <div>
        <i18n.h4 className="fs-14 fw-600">Liquidate</i18n.h4>
        <i18n.p className="fs-12 mt-0.5">
          Beat the bots and bid on liquidated collateral
        </i18n.p>
      </div>
    </ResolveLink>
    <ResolveLink
      as={routingElement}
      domain={domain}
      to="/ventures"
      className="flex mt-3 ai-s">
      <Seedling className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
      <div>
        <i18n.h4 className="fs-14 fw-600 flex ai-c">Ventures</i18n.h4>
        <i18n.p className="fs-12 mt-0.5">
          Early access to promising protocols and opportunities
        </i18n.p>
      </div>
    </ResolveLink>
    <ResolveLink
      as={routingElement}
      domain={domain}
      to="/nfts"
      className="flex mt-3 ai-s">
      <NFT className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
      <div>
        <i18n.h4 className="fs-14 fw-600 flex ai-c">
          Collections (Gojira)
        </i18n.h4>
        <i18n.p className="fs-12 mt-0.5">A sustainable NFT marketplace</i18n.p>
      </div>
    </ResolveLink>
    <ResolveLink
      as={routingElement}
      domain={domain}
      to="/ecosystem"
      className="mt-3 flex ai-s">
      <Earth className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
      <div>
        <i18n.h4 className="fs-14 fw-600">Ecosystem</i18n.h4>
        <i18n.p className="fs-12 mt-0.5">
          Protocols, products and services calling Rujira their home
        </i18n.p>
      </div>
    </ResolveLink>
    <ResolveLink
      as={routingElement}
      domain={domain}
      to="/dashboard"
      className="mt-3 flex ai-s">
      <PieChart className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
      <div>
        <i18n.h4 className="fs-14 fw-600">Token Analytics</i18n.h4>
        <i18n.p className="fs-12 mt-0.5">
          Discover RUJI tokenomics and analytics
        </i18n.p>
      </div>
    </ResolveLink>
    <ResolveLink
      as={routingElement}
      domain={domain}
      to="/developers"
      className="flex mt-3">
      <Terminal className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
      <div>
        <i18n.h4 className="fs-14 fw-600">Developers</i18n.h4>
        <i18n.p className="fs-12 mt-0.5">
          Rujira is built for builders, get started here.
        </i18n.p>
      </div>
    </ResolveLink>
    <a
      href="https://docs.rujira.network/"
      target="_blank"
      className="flex mt-3 ai-s">
      <Book className="color-grey h-3.5 w-a block mr-2 no-shrink mt-0" />
      <div>
        <i18n.h4 className="fs-14 fw-600">Documentation</i18n.h4>
        <i18n.p className="fs-12 mt-0.5">
          Dive deep into the Rujira network
        </i18n.p>
      </div>
    </a>
  </>
);
