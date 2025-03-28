import clsx from "clsx";
import { FC, PropsWithChildren, ReactElement } from "react";
import { AccountProvider } from "rujira.js";
import {
  Accounts,
  i18n,
  ResolveLink,
  RujiraLogo,
  useWindowSize,
  WalletProps,
} from "rujira.ui";

type HeaderProps<T> = {
  accountProvider: AccountProvider<T>;
  showAccount?: boolean;
  className?: string;
  domain?: string;
  routingElement: any;
  wallets: WalletProps<T>[];
  ProviderIcon: FC<{ provider: T; selected: boolean }>;
  //hideNetworkSwitch?: boolean;
};

export const Header = <T,>({
  accountProvider,
  className,
  domain = "",
  routingElement,
  wallets,
  ProviderIcon,
  //hideNetworkSwitch,
}: HeaderProps<T>): ReactElement => {
  return (
    <Container className={className}>
      <ResolveLink as={routingElement} to="/">
        <Logo />
      </ResolveLink>
      <MainNav
        domain={domain}
        accountProvider={accountProvider}
        routingElement={routingElement}
      />
      <div className="ml-a mr-0 flex ai-c gradient-card-container">
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
  routingElement,
}: MainNavProps<T>): ReactElement => {
  return (
    <nav className="rujira-header__nav">
      <ResolveLink as={routingElement} domain={domain} to="/store">
        {i18n.t("Store")}
      </ResolveLink>
      <ResolveLink as={routingElement} domain={domain} to="/deploy">
        {i18n.t("Deploy")}
      </ResolveLink>
      <ResolveLink as={routingElement} domain={domain} to="/manage">
        {i18n.t("Manage")}
      </ResolveLink>
      <ResolveLink as={routingElement} domain={domain} to="/query">
        {i18n.t("Query")}
      </ResolveLink>
    </nav>
  );
};
