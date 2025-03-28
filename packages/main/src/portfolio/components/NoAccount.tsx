import { Icons, WalletIcons } from "rujira.ui";
import { WalletOption } from "./WalletOption";
const { Discord, GitHub, LinkConnect, Telegram, X } = Icons;

export const NoAccount = () => {
  return (
    <div className="rujira__inner rujira__inner--pad">
      <h1 className="h1">Link your Account</h1>
      <h2 className="h3">You do not have a wallet connected</h2>
      <p className="fs-20 lh-26 fw-400">
        If you already have a wallet installed, select from the{" "}
        <LinkConnect
          className="inline-block p-1 br-2 bg-grey color-black w-4"
          style={{ verticalAlign: "middle" }}
        />{" "}
        button on the top right of your screen.
      </p>
      <div className="gradient-card-container mt-6">
        <div className="gradient-card gradient-card--purple p-4 bg-black flex dir-c ai-s">
          <WalletIcons.StationText className="h-8" />
          <p className="p color-grey mt-2 mb-0">
            A secure and convenient multi-chain wallet with deep integration
            into the Rujira ecosystem and lots of features Sonar users will
            recognise! Lend, borrow, trade, bid, liquidate and more from your
            phone. Compatible with any desktop browser. Unlock Rujira's DeFi
            capability wherever, whenever. <strong>Coming soon...</strong>
          </p>
          {/* <Button
            label="Coming Soon..."
            className="button--outline button--big button--icon-right"></Button> */}
        </div>
      </div>
      <div className="row wrap pad">
        <WalletOption
          description="Get best-in-class security from the most secure crypto wallet ever built, powered by the technology protecting multimillion dollar vaults on Thorchain. Perfect for individuals, DAOs and Teams seeking multi-sig functionality."
          links={[
            {
              url: "https://vultisig.com",
              icon: <LinkConnect />,
            },
            {
              url: "https://twitter.com/vultisig",
              icon: <X />,
            },
            {
              url: "https://github.com/Vultisig/",
              icon: <GitHub />,
            },
            {
              url: "https://discord.gg/54wEtGYxuv",
              icon: <Discord />,
            },
            {
              url: "https://t.me/vultisig",
              icon: <Telegram />,
            },
          ]}>
          <WalletIcons.VultisigText />
        </WalletOption>

        {/* <WalletOption
          description="Now you can trade, stake, borrow, liquidate, and much more right from your phone. But Sonar is so much more than a wallet. Sonar is the premier experience of the Kujira ecosystem."
          links={[
            {
              url: "https://sonar.kujira.app/",
              icon: <LinkConnect />,
            },
            {
              url: "https://twitter.com/SonarWallet",
              icon: <X />,
            },
          ]}>
          <WalletIcons.SonarText />
        </WalletOption> */}

        <WalletOption
          description="A secure, open-source browser extension and mobile app wallet supporting multiple chains. Key features include multichain account management, staking, voting, and hardware wallet support."
          links={[
            {
              url: "https://www.keplr.app/",
              icon: <LinkConnect />,
            },
            {
              url: "https://twitter.com/keplrwallet",
              icon: <X />,
            },
          ]}>
          <WalletIcons.KeplrText />
        </WalletOption>

        <WalletOption
          description="The safest, easiest wallet for over 2,300 chains.  Import addresses, swap and bridge tokens and NFTs, and manage gas fees across multiple chains. Audited by FYEO."
          links={[
            {
              url: "https://ctrl.xyz/",
              icon: <LinkConnect />,
            },
            {
              url: "https://x.com/ctrl_wallet",
              icon: <X />,
            },
            {
              url: "https://discord.gg/ctrlwallet",
              icon: <Discord />,
            },
            {
              url: "https://t.me/ctrl_wallet",
              icon: <Telegram />,
            },
          ]}>
          <WalletIcons.CtrlText />
        </WalletOption>

        <WalletOption
          description="Supports 70+ Cosmos chains and offers address management, simplified chain management and 100% non-custodial security. Extensions for Chrome, Edge and Brave, and apps on iOS and Android are available. Audited by Halborn. Staking, single-click reward claims and airdrops updated in-wallet."
          links={[
            {
              url: "https://www.leapwallet.io/",
              icon: <LinkConnect />,
            },
            {
              url: "https://twitter.com/leap_cosmos",
              icon: <X />,
            },
          ]}>
          <WalletIcons.LeapText />
        </WalletOption>

        <WalletOption
          description="An Ethereum wallet trusted by millions. Browser extensions for Chrome, Edge, Firefox, Brave and Opera, or iOS and Android app. Customization available using community-built Snaps.  Manage your portfolio through their web portal."
          links={[
            {
              url: "https://metamask.io/",
              icon: <LinkConnect />,
            },
            {
              url: "https://github.com/MetaMask/metamask-extension/",
              icon: <GitHub />,
            },
          ]}>
          <WalletIcons.MetaMaskText />
        </WalletOption>
        <WalletOption
          description="A universal wallet available on app, web, and extension. Easily access 3,000+ crypto, 80+ networks, thousands of DApps, and the Web3 ecosystem. Supports EVM and non-EVM networks."
          links={[
            {
              url: "https://chromewebstore.google.com/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge",
              icon: <LinkConnect />,
            },
          ]}>
          <WalletIcons.OKXText />
        </WalletOption>
        <WalletOption
          description="A multi-chain wallet with over 140 million users. Available as a browser extension and mobile app. Integrated with Coinbase Pay and Binance Pay. Offers proactive risk notifications and multi-lingual support. Private Keys stored on your device and encrypted with an AES algorithm."
          links={[
            {
              url: "https://trustwallet.com/browser-extension",
              icon: <LinkConnect />,
            },
          ]}>
          <WalletIcons.TrustText />
        </WalletOption>
      </div>
    </div>
  );
};
