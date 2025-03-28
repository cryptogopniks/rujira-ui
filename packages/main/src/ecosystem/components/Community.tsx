import { i18n, Icons } from "rujira.ui";
import KujiraTrack from "../assets/kujira-track-logo@2x.png";
import SmartStake from "../assets/smartstake-logo@2px.png";
import SeaShanty from "../assets/seashanty-logo@2x.png";
import CosmoBot from "../assets/cosmobot-logo@2x.png";
import KujiKast from "../assets/kujikast-logo@2x.png";

export const Community = () => {
  return (
    <div className="row wrap pad">
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img src={KujiraTrack} alt="KUJIRA Track Logo" />
          <i18n.p>
            A single portal to crucial data about the performance of the Kujira
            ecosystem. View graphs, charts and information about the health of
            the blockchain in real time.
          </i18n.p>
          <div>
            <a href="https://kujira-track.app/" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/OcebotKuji" target="_blank">
              <Icons.X />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img src={SmartStake} alt="Smart Stake Logo" />
          <i18n.p>
            Smart Stake benefits the Kujira community by sharing an immense
            amount of information about the blockchain. This includes blockchain
            statistics, decentralisation data, Validator and network
            performance, among other data points.
          </i18n.p>
          <div>
            <a href="https://kujira.smartstake.io/" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/SmartStake" target="_blank">
              <Icons.X />
            </a>
            <a href="https://t.me/SmartStake" target="_blank">
              <Icons.Telegram />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img src={SeaShanty} alt="SeaShanty Logo" />
          <i18n.p>
            Receive real-time notifications in Telegram from this bot for orders
            on FIN, proposals on Blue, and liquidations on ORCA. SeaShanty
            provides updates for several KUJIRA dApps, and other useful info.
          </i18n.p>
          <div>
            <a href="https://twitter.com/Capybara_Labs" target="_blank">
              <Icons.X />
            </a>
            <a href="https://t.me/KujiraNotification_bot" target="_blank">
              <Icons.Telegram />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img src={CosmoBot} alt="Cosmobot Logo" />
          <i18n.p>
            Cosmobot helps and protects communities. It removes scammers and
            spammers from Telegram chats. It provides information, through a
            number of #commands. Users may also send a #tip to another chat
            group member to show appreciation.
          </i18n.p>
          <div>
            <a href="https://t.me/ibc_cosmobot" target="_blank">
              <Icons.Telegram />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img src={KujiKast} alt="Kuji Kast Logo" />
          <i18n.p>
            These Youtube creators make videos covering the Kujira ecosystem.
            Using skits, interviews and controversial hot takes, they blend
            shrewd insight with irreverent humour. Wink if you get it.
          </i18n.p>
          <div>
            <a href="https://kujikast.com/" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/KujiKast" target="_blank">
              <Icons.Telegram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
