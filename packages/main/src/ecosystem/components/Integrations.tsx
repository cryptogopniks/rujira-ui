import { i18n, Icons } from "rujira.ui";
import Axelar from "../assets/axelar.svg";
import Squid from "../assets/squid.svg";
import Kado from "../assets/kado.svg";
import Gravity from "../assets/gravity-logo.svg";
import Stride from "../assets/stride.svg";
import Funtastic from "../assets/funtastic-logo@2x.png";
import Rango from "../assets/rango-logo@2x.png";
import Rocket from "../assets/rocketx-new-logo.png";
import Coinhall from "../assets/coinhall-logo@2x.png";
import Coinweb from "../assets/coinweb-logo.svg";
import Nansen from "../assets/nansen-logo@2x.png";
import Maya from "../assets/maya.png";

export const Integrations = () => {
  return (
    <div className="row wrap pad">
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img
            src={Axelar}
            alt="Axelar Logo"
            style={{ height: "1.5rem", marginTop: "0.5rem" }}
          />
          <i18n.p>
            Axelar's infrastructure enables dApp users to interact with any
            asset or application on the Kujira network with a few simple clicks.
          </i18n.p>
          <div>
            <a href="https://axelar.network/" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/axelarcore" target="_blank">
              <Icons.X />
            </a>
            <a href="https://t.me/axelarcommunity" target="_blank">
              <Icons.Telegram />
            </a>
            <a href="https://discord.com/invite/aRZ3Ra6f7D" target="_blank">
              <Icons.Discord />
            </a>
            <a href="https://github.com/axelarnetwork" target="_blank">
              <Icons.GitHub />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img src={Squid} alt="Squid Logo" />
          <i18n.p>
            This is key integration with the Sonar wallet. Squid allows any
            token to be swapped between Kujira & another blockchain. This
            unlocks access to apps on any chain in a single click.
          </i18n.p>
          <div>
            <a href="https://www.squidrouter.com/" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/squidrouter" target="_blank">
              <Icons.X />
            </a>
            <a href="http://discord.squidrouter.com/" target="_blank">
              <Icons.Discord />
            </a>
            <a href="https://github.com/0xsquid" target="_blank">
              <Icons.GitHub />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img src={Kado} alt="Kado Logo" />
          <i18n.p>
            Users onboard onto Kujira directly from a bank account or card. Kado
            makes moving from fiat to crypto fast, convenient and secure.
          </i18n.p>
          <div>
            <a href="https://www.kado.money/blockchains/kujira" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/kado_money" target="_blank">
              <Icons.X />
            </a>
            <a href="https://t.me/joinchat/DBTEybbbFugwZjgx" target="_blank">
              <Icons.Telegram />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img src="https://www.stargaze.zone/logo.svg" alt="Stargaze Logo" />
          <i18n.p>
            An official NFT partner of Kujira. Stargaze has hosted a series of
            mints including KujiransNFT, Kujira Hero, Shrimp Gang & more to
            come. All of these are available on their marketplace.
          </i18n.p>
          <div>
            <a href="https://www.stargaze.zone/" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/stargazezone" target="_blank">
              <Icons.X />
            </a>
            <a href="https://t.me/joinchat/ZQ95YmIn3AI0ODFh" target="_blank">
              <Icons.Telegram />
            </a>
            <a href="https://discord.gg/stargaze" target="_blank">
              <Icons.Discord />
            </a>
            <a href="https://github.com/public-awesome" target="_blank">
              <Icons.GitHub />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img src={Rango} alt="Rango Logo" />
          <i18n.p>
            An incredibly easy way to onramp onto Kujira. Use Rango to trade
            $KUJI between 50+ blockchains with minimum effort.
          </i18n.p>
          <div>
            <a
              href="https://app.rango.exchange/swap/BSC.BNB/KUJIRA.KUJI"
              target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/RangoExchange" target="_blank">
              <Icons.X />
            </a>
            <a href="https://t.me/rango_info" target="_blank">
              <Icons.Telegram />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img src={Rocket} alt="RocketX Logo" />
          <i18n.p>
            Whether you want to swap $ETH to $KUJI, $ARB to $KUJI, or an array
            of other swaps, RocketX allows you to exchange on all leading
            blockchains, without any hassle.
          </i18n.p>
          <div>
            <a
              href="https://app.rocketx.exchange/swap/ARBITRUM.ethereum/KUJIRA.kujira/100?from=Ethereum&to=Kuji"
              target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/RocketXexchange" target="_blank">
              <Icons.X />
            </a>
            <a href="https://t.me/RocketXexchange" target="_blank">
              <Icons.Telegram />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img
            src="https://www.erisprotocol.com/assets/logo_eris_48.svg"
            alt="Eris Logo"
          />
          <i18n.p>
            Eris has brought the first Liquid Staked Token to the Kujira
            network. Deposited $KUJI in the Eris vaults to mint $ampKUJI &
            periodically the real yield staking rewards are swapped to more
            $KUJI.
          </i18n.p>
          <div>
            <a
              href="https://www.erisprotocol.com/kujira/amplifier"
              target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/eris_protocol" target="_blank">
              <Icons.X />
            </a>
            <a href="https://t.me/eris_protocol" target="_blank">
              <Icons.Telegram />
            </a>
            <a href="https://github.com/erisprotocol" target="_blank">
              <Icons.GitHub />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img src={Stride} alt="Stride Logo" />
          <i18n.p>
            A Cosmos chain providing Liquid Staking Derivatives such as $stATOM.
            Stride's LSDs have various uses on Kujira, including trading on FIN,
            providing LP on BOW & minting $USK.
          </i18n.p>
          <div>
            <a href="https://stride.zone/" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/stride_zone" target="_blank">
              <Icons.X />
            </a>
            <a href="https://discord.com/invite/e4bzG6zNdf" target="_blank">
              <Icons.Discord />
            </a>
            <a href="https://github.com/Stride-Labs/stride" target="_blank">
              <Icons.GitHub />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img src={Maya} alt="Maya Logo" />
          <i18n.p>
            Maya Protocol allows native swaps of assets such as $BTC, $ETH &
            more across the Kujira ecosystem.
          </i18n.p>
          <div>
            <a href="https://www.mayaprotocol.com/" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/Maya_Protocol" target="_blank">
              <Icons.X />
            </a>
            <a href="https://gitlab.com/mayachain" target="_blank">
              <Icons.GitHub />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img
            src="https://defillama.com/defillama-press-kit/defi/PNG/defillama.png"
            alt="DefiLlama Logo"
          />
          <i18n.p>
            DefiLlama provides the community with the means to track and analyse
            important metrics including TVL for the chain and dApps built on
            Kujira.
          </i18n.p>
          <div>
            <a href="https://defillama.com/chain/Kujira" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/DefiLlama" target="_blank">
              <Icons.X />
            </a>
            <a href="https://discord.defillama.com/" target="_blank">
              <Icons.GitHub />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img src={Gravity} alt="Gravity Bridge Logo" />
          <i18n.p>
            A key bridge partner of Kujira. Assets like $PAXG are{" "}
            <a href="https://blue.kujira.app/gravity" target="_blank">
              bridged to Kujira
            </a>{" "}
            by using Gravity and used as collateral for minting $USK. Gravity is
            also used to bridge KUJI onto Ethereum.
          </i18n.p>
          <div>
            <a href="https://www.gravitybridge.net/" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/gravity_bridge" target="_blank">
              <Icons.X />
            </a>
            <a href="https://discord.gg/d3DshmHpXA" target="_blank">
              <Icons.Discord />
            </a>
            <a href="https://github.com/Gravity-Bridge" target="_blank">
              <Icons.GitHub />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img src="https://www.nomic.io/img/logo.svg" alt="Nomic Logo" />
          <i18n.p>
            Nomic allows dApp users to securely & efficiently bridge their BTC
            to Kujira using IBC. $NBTC will be a collateral option offered to
            mint $USK.
          </i18n.p>
          <div>
            <a href="https://www.nomic.io/" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/nomicbtc" target="_blank">
              <Icons.X />
            </a>
            <a href="https://t.me/nomicbtc" target="_blank">
              <Icons.Telegram />
            </a>
            <a href="https://discord.gg/EnB92TK6P7" target="_blank">
              <Icons.Discord />
            </a>
            <a href="https://github.com/nomic-io" target="_blank">
              <Icons.GitHub />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img
            src={Coinhall}
            alt="Coinhall Logo"
            style={{ height: "1.5rem", marginTop: "0.5rem" }}
          />
          <i18n.p>
            Coinhall enables users to track the price of assets on Kujira, set
            limit orders to buy and sell, or market buy trading pairs.
          </i18n.p>
          <div>
            <a
              href="https://coinhall.org/?chains=Kujira&tab=Top&sort=Market+Cap&dir=desc&quote=usd"
              target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/coinhall_org" target="_blank">
              <Icons.X />
            </a>
            <a href="https://t.me/coinhall_org" target="_blank">
              <Icons.Telegram />
            </a>
            <a href="https://discord.gg/EnB92TK6P7" target="_blank">
              <Icons.Discord />
            </a>
            <a href="https://github.com/nomic-io" target="_blank">
              <Icons.GitHub />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img src={Funtastic} alt="Funtastic Logo" />
          <i18n.p>
            Funttastic Labs are building{" "}
            <a href="https://hummingbot.org/" target="_blank">
              Hummingbot
            </a>{" "}
            adaptors for FIN, which will enable anyone to create and activate
            high-frequency crypto trading bots on Kujira.
          </i18n.p>
          <div>
            <a
              href="https://www.funttastic.com/partners/kujira"
              target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/FunttasticLabs" target="_blank">
              <Icons.X />
            </a>
            <a href="http://www.funttastic.com/telegram" target="_blank">
              <Icons.Telegram />
            </a>
            <a href="http://www.funttastic.com/discord" target="_blank">
              <Icons.Discord />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img src={Nansen} alt="Nansen Portfolio Logo" />
          <i18n.p>
            Nansen Portfolio is a great tool to track your Kujira holdings.
            Includes staking, as well as positions on BOW, ORCA & other Kujira
            dApps.
          </i18n.p>
          <div>
            <a href="https://portfolio.nansen.ai/" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/nansenportfolio" target="_blank">
              <Icons.X />
            </a>
            <a href="https://t.me/nansenportfolio" target="_blank">
              <Icons.Telegram />
            </a>
            <a href="https://nansen.ai/discord" target="_blank">
              <Icons.Discord />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img src={Coinweb} alt="Coinweb Logo" />
          <i18n.p>
            Coinweb's consensus-free interoperable protocol allows developers to
            build dApps and for anyone to issue tokens on Kujira. The Coinweb
            Wallet will also support Kujira tokens.
          </i18n.p>
          <div>
            <a href="https://coinweb.io/" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/coinwebofficial" target="_blank">
              <Icons.X />
            </a>
            <a href="https://t.me/coinweb" target="_blank">
              <Icons.Telegram />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img
            src="https://app.pulsar.finance/pulsar-logo-default.svg"
            alt="Pulsar Logo"
          />
          <i18n.p>
            An all-in-one interface to manage your assets across the Kujira
            network and the entire Cosmos.
          </i18n.p>
          <div>
            <a href="https://app.pulsar.finance/" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/PulsarFinance" target="_blank">
              <Icons.X />
            </a>
            <a href="https://t.me/pulsarfinance" target="_blank">
              <Icons.Telegram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
