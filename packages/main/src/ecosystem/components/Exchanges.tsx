import { i18n, Icons } from "rujira.ui";
import kraken from "../assets/kraken.svg";
import MEXC from "../assets/mexc.svg";

export const Exchanges = () => {
  return (
    <div className="row wrap pad">
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img
            src={kraken}
            alt="Kraken Logo"
            style={{ height: "1.5rem", marginTop: "0.5rem" }}
          />
          {/* <h3>Kraken</h3> */}
          <i18n.p>Trade KUJI / USD and KUJI / EUR on Kraken Pro.</i18n.p>
          <div>
            <a href="https://pro.kraken.com/app/trade/kuji-usd" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/krakenfx" target="_blank">
              <Icons.X />
            </a>
            <a href="https://t.me/kraken_exchange_official" target="_blank">
              <Icons.Telegram />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img
            src={MEXC}
            alt="Mexc Logo"
            style={{ height: "1.5rem", marginTop: "0.5rem" }}
          />
          {/* <h3>MEXC</h3> */}
          <i18n.p>Trade KUJI / USDT on the global MEXC exchange.</i18n.p>
          <div>
            <a href="https://www.mexc.com/exchange/KUJI_USDT" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/MEXC_Official" target="_blank">
              <Icons.X />
            </a>
            <a href="https://t.me/MEXCEnglish" target="_blank">
              <Icons.Telegram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
