import { i18n, Icons } from "rujira.ui";
import Halborn from "../assets/halborn.png";
import Zellic from "../assets/zellic.png";
import FYEO from "../assets/fyeo.png";

export const Auditors = () => {
  return (
    <div className="row wrap pad">
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img src={Halborn} alt="Halborn Logo" />
          <i18n.p>
            Providers of Blockchain Security, from smart contract auditing and
            pen testing to advisory services and beyond. They are dedicated to
            securing blockchain-powered projects through a range of
            enterprise-grade SaaS solutions and security advisory services used
            to identify and rectify vulnerabilities.
          </i18n.p>
          <div>
            <a href="https://www.halborn.com" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/HalbornSecurity" target="_blank">
              <Icons.X />
            </a>
            <a href="https://github.com/HalbornSecurity" target="_blank">
              <Icons.GitHub />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img src={Zellic} alt="Zellic Logo" />
          <i18n.p>
            A background in real-world offensive security, traditional info-sec
            and competitive hacking helps this team find what others miss.
            Specializing in securing emerging technologies, they offer a full
            vulnerability research process, assigning multiple engineers per
            engagement to ensure quality control.
          </i18n.p>
          <div>
            <a href="https://www.zellic.io" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/zellic_io" target="_blank">
              <Icons.X />
            </a>
            <a href="https://github.com/zellic/" target="_blank">
              <Icons.GitHub />
            </a>
            <a href="https://t.me/zellic_io" target="_blank">
              <Icons.Telegram />
            </a>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-4 mt-4">
        <div className="ecosystem">
          <img src={FYEO} alt="FYEO Logo" />
          <i18n.p>
            FYEO has some of the world's leading experts in DeFi logic to test
            and analyze systems for potential vulnerabilities. Their services
            include comprehensive code, logic, and functionality review for
            implementations of advanced cryptographic or blockchain solutions.
          </i18n.p>
          <div>
            <a href="https://www.fyeo.io" target="_blank">
              <Icons.LinkAngle />
            </a>
            <a href="https://twitter.com/gofyeo" target="_blank">
              <Icons.X />
            </a>
            <a
              href="https://github.com/fyeo-io/public-audit-reports/blob/main/PublicAuditMatrix.md"
              target="_blank">
              <Icons.GitHub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
