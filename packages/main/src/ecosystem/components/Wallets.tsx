import { i18n, Icons, WalletIcons } from "rujira.ui";

export const Wallets = () => {
  return (
    <div className="row wrap pad">
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <WalletIcons.VultisigText />
          <i18n.p>
            Get best-in-class security from the most secure crypto wallet ever
            built, powered by the technology protecting multimillion dollar
            vaults on Thorchain. Perfect for individuals, DAOs and Teams seeking
            multi-sig functionality.
          </i18n.p>
          <div>
            <a href="https://vultisig.com" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/vultisig" target="_blank">
              <Icons.X />
            </a>
            <a href="https://github.com/Vultisig/" target="_blank">
              <Icons.GitHub />
            </a>
            <a href="https://discord.gg/54wEtGYxuv" target="_blank">
              <Icons.Discord />
            </a>
            <a href="https://t.me/vultisig" target="_blank">
              <Icons.Telegram />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <WalletIcons.KeplrText />
          <i18n.p>
            A secure, open-source browser extension and mobile app wallet
            supporting multiple chains. Key features include multichain account
            management, staking, voting, and hardware wallet support.
          </i18n.p>
          <div>
            <a href="https://www.keplr.app/" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/keplrwallet" target="_blank">
              <Icons.X />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <WalletIcons.CtrlText />
          <i18n.p>
            The safest, easiest wallet for over 2,300 chains. Import addresses,
            swap and bridge tokens and NFTs, and manage gas fees across multiple
            chains. Audited by FYEO.
          </i18n.p>
          <div>
            <a href="https://ctrl.xyz/" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://x.com/ctrl_wallet" target="_blank">
              <Icons.X />
            </a>
            <a href="https://t.me/ctrl_wallet" target="_blank">
              <Icons.Telegram />
            </a>
            <a href="https://discord.gg/ctrlwallet" target="_blank">
              <Icons.Discord />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <WalletIcons.LeapText />
          <i18n.p>
            Supports 70+ Cosmos chains and offers address management, simplified
            chain management and 100% non-custodial security. Extensions for
            Chrome, Edge and Brave, and apps on iOS and Android are available.
            Audited by Halborn. Staking, single-click reward claims and airdrops
            updated in-wallet.
          </i18n.p>
          <div>
            <a href="https://www.leapwallet.io/" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/leap_wallet" target="_blank">
              <Icons.X />
            </a>
            <a href="https://t.me/ctrl_wallet" target="_blank">
              <Icons.Telegram />
            </a>
            <a href="https://discord.gg/ctrlwallet" target="_blank">
              <Icons.Discord />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <WalletIcons.MetaMaskText />
          <i18n.p>
            An Ethereum wallet trusted by millions. Browser extensions for
            Chrome, Edge, Firefox, Brave and Opera, or iOS and Android app.
            Customization available using community-built Snaps. Manage your
            portfolio through their web portal.
          </i18n.p>
          <div>
            <a href="https://metamask.io/" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a
              href="https://github.com/MetaMask/metamask-extension/"
              target="_blank">
              <Icons.GitHub />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <WalletIcons.OKXText />
          <i18n.p>
            A universal wallet available on app, web, and extension. Easily
            access 3,000+ crypto, 80+ networks, thousands of DApps, and the Web3
            ecosystem. Supports EVM and non-EVM networks.
          </i18n.p>
          <div>
            <a
              href="https://chromewebstore.google.com/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge"
              target="_blank">
              <Icons.LinkAngle />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <WalletIcons.TrustText />
          <i18n.p>
            A multi-chain wallet with over 140 million users. Available as a
            browser extension and mobile app. Integrated with Coinbase Pay and
            Binance Pay. Offers proactive risk notifications and multi-lingual
            support. Private Keys stored on your device and encrypted with an
            AES algorithm.
          </i18n.p>
          <div>
            <a href="https://trustwallet.com/browser-extension" target="_blank">
              <Icons.LinkAngle />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
