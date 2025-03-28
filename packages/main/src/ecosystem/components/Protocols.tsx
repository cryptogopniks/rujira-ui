import { i18n, Icons } from "rujira.ui";
import AutoRujira from "../assets/autorujira.png";
import Nami from "../assets/nami.png";
import Manta from "../assets/mantaswap.png";
import Boon from "../assets/boon.png";
import Calc from "../assets/calc.png";
import Coral from "../assets/coral.png";

const shuffleArray = (arr: any[]) =>
  arr
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);

const launched = [
  <div className="ecosystem">
    <img src={Nami} alt="NAMI Logo" />
    <i18n.p>
      Earn better interest and be your own bank! An easy-to-use platform
      simplifies the process, automating and optimizing lending stablecoins and
      earning interest for you. Improving your cashflow and risk profile is
      straightforward, putting the power of banking directly in your hands.
    </i18n.p>
    <div>
      <a href="https://www.namifi.app/" target="_blank">
        <Icons.LinkAngle />
      </a>
      <a href="https://twitter.com/NamiProtocol" target="_blank">
        <Icons.X />
      </a>
      <a href="https://medium.com/@NAMIProtocol" target="_blank">
        <Icons.Medium />
      </a>
    </div>
  </div>,
  <div className="ecosystem">
    <img src={Manta} alt="MANTA Logo" />
    <i18n.p>
      A decentralized liquidity hub owned and powered by a DAO with a mission to
      deliver a best-in-class experience to both traders and protocols utilising
      the Rujira ecosystem. Core activities are market making, focused on
      deepening liquidity on RUJI Trade orderbook through treasury deployment,
      and building revenue generating applications, tooling and analytics.
    </i18n.p>
    <div>
      <a href="https://dao.mantaswap.app" target="_blank">
        <Icons.LinkAngle />
      </a>
      <a href="https://twitter.com/Manta_DAO" target="_blank">
        <Icons.X />
      </a>
      <a href="https://t.me/MantaDAO" target="_blank">
        <Icons.Telegram />
      </a>
    </div>
  </div>,
  <div className="ecosystem">
    <img src={AutoRujira} alt="AutoRujira Logo" className="bigger" />
    <i18n.p>
      Simplifying your DeFi journey with streamlined, automated web3 operations.
      Manage investments and strategies seamlessly from one platform. A host of
      automation tools empowering everyone to maximize portfolio returns.
    </i18n.p>
    <div>
      <a href="https://autorujira.app/" target="_blank">
        <Icons.LinkAngle />
      </a>
      <a href="https://x.com/autorujira" target="_blank">
        <Icons.X />
      </a>
      <a href="https://t.me/autorujira" target="_blank">
        <Icons.Telegram />
      </a>
      <a href="https://discord.gg/P77vPrnWyr" target="_blank">
        <Icons.Discord />
      </a>
      <a href="https://autorujira.medium.com/" target="_blank">
        <Icons.Medium />
      </a>
    </div>
  </div>,
  <div className="ecosystem">
    <img src={Boon} alt="Boon Logo" />
    <i18n.p>
      AmpliFi your marketing exposure by rewarding supporters! Key principles of
      SocialFi, peer-to-peer marketing, micro-influencing and incentified
      participation are used to co-create campaigns with communities. A full
      suite of tools to identify, engage and reward superfans.
    </i18n.p>
    <div>
      <a href="https://boonhq.io" target="_blank">
        <Icons.LinkAngle />
      </a>
      <a href="https://x.com/BoonHQ_" target="_blank">
        <Icons.X />
      </a>
    </div>
  </div>,
  <div className="ecosystem">
    <img src={Calc} alt="Calc Logo" />
    <i18n.p>
      A powerful decentralized platform offering a range of recurring,
      customisable swap strategies. Set-and-forget investment mechanisms take
      the emotion out of decision making and let your portfolio do the work so
      you can spend more time on the things you love.
    </i18n.p>
    <div>
      <a href="https://calculated.fi" target="_blank">
        <Icons.LinkAngle />
      </a>
      <a href="https://twitter.com/CALC_finance" target="_blank">
        <Icons.X />
      </a>
      <a href="https://t.me/calcprotocol" target="_blank">
        <Icons.Telegram />
      </a>
    </div>
  </div>,
  <div className="ecosystem">
    <img src={Coral} alt="Coral Logo" />
    <i18n.p>
      An entry and exit ramp for Rujira users built for simplicity and speed,
      forgoing the formalities of the traditional financial world. A secure
      platform for crypto users to connect with others and exchange tokens for
      fiat in a decentralized manner.
    </i18n.p>
    <div>
      <a href="https://x.com/CoralP2P" target="_blank">
        <Icons.X />
      </a>
      <a href="https://t.co/OKNStQ1nq4" target="_blank">
        <Icons.Telegram />
      </a>
    </div>
  </div>,
];

export const Protocols = () => {
  return (
    <div className="row wrap pad">
      {shuffleArray(launched).map((c, i) => (
        <div className="col-12 col-sm-6 col-lg-4 mt-4" key={`eco_${i}`}>
          {c}
        </div>
      ))}

      {/* <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <span>Soon</span>
          <img src={KujiraIndex} alt="KujiraIndex Logo" />
          
          <i18n.p>
            KujiraIndex is a platform for asset indices. $KJI, the 1st index, is
            a basket of Kujira based tokens enabling easy diversification. More
            indices will launch in future tracking different asset classes.
          </i18n.p>
          <div>
            <a href="https://kujiraindex.io/" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/KujiraIndex" target="_blank">
              <Icons.X />
            </a>
            <a href="https://winkhub.app/creators/kujiraindex" target="_blank">
              <Icons.Wink />
            </a>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <span>Soon</span>
          <img src={YieldHarbour} alt="YieldHarbour Logo" />
          
          <i18n.p>
            YieldHarbour is a pioneering decentralized finance (DeFi) protocol,
            revolutionizing options trading with its straightforward,
            transparent approach. It's designed for both experienced traders and
            newcomers to DeFi options, ensuring a seamless and user-friendly
            experience.
          </i18n.p>
          <div>
            <a href="https://twitter.com/yieldharbour" target="_blank">
              <Icons.X />
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};
