import clsx from "clsx";
import { RujiraLogo } from "../logos/RujiraLogo";
import { Discord, Telegram, X } from "../icons/Icons";
import { ResolveLink } from "../header/ResolveLink";

type FooterProps = {
  className?: string;
  domain?: string;
  routerElement: any;
};

export const Footer: React.FC<FooterProps> = ({
  className,
  domain = "",
  routerElement,
}) => {
  return (
    <div
      className={clsx({
        rujira__footer: true,
        [`${className}`]: className,
      })}>
      <div className="rujira__inner">
        <div className="flex wrap pad-tight">
          <div className="col-12 col-xs-6 col-lg-3">
            <h4 className="fs-14 lh-18 fw-600 color-white">Everyone</h4>
            <nav className="flex dir-c">
              <ResolveLink as={routerElement} domain={domain} to="/merge">
                Merge
              </ResolveLink>
              <a href="https://docs.rujira.network" target="_blank">
                Documentation
              </a>
              <a
                href="https://docs.rujira.network/resources/branding"
                target="_blank">
                Brand Assets
              </a>
              <a href="https://runescan.io" target="_blank">
                Blockchain Explorer
              </a>
            </nav>
          </div>
          <div className="col-12 col-xs-6 col-lg-3 mt-3 mt-xs-0">
            <h4 className="fs-14 lh-18 fw-600 color-white">Developers</h4>
            <nav className="flex dir-c">
              {/* <ResolveLink as={routerElement} domain={domain} to="/developers">
                Getting Started
              </ResolveLink>
              <ResolveLink
                as={routerElement}
                domain={domain}
                to="/developer-tools">
                Developer Tools
              </ResolveLink> */}
              <a
                href="https://docs.rujira.network/developers/getting-started"
                target="_blank">
                Documentation
              </a>
              <a href="https://gitlab.com/thorchain/rujira" target="_blank">
                GitLab
              </a>
              <a href="https://gitlab.com/thorchain/rujira-ui" target="_blank">
                Rujira.ui
              </a>
            </nav>
          </div>
          <div className="col-12 col-xs-6 col-lg-3 mt-3 mt-lg-0">
            <h4 className="fs-14 lh-18 fw-600 color-white">Ecosystem</h4>
            <nav className="flex dir-c">
              <ResolveLink as={routerElement} domain={domain} to="/ecosystem">
                Built on Rujira
              </ResolveLink>
              {/* <a href="https://station.rujira.network/" target="_blank">
                Station Wallet
              </a> */}
            </nav>
          </div>
          <div className="col-12 col-xs-6 col-lg-3 mt-3 mt-lg-0">
            <h4 className="fs-14 lh-18 fw-600 color-white">Community</h4>
            <nav className="flex wrap mt-1">
              <a
                href="https://x.com/RujiraNetwork"
                target="_blank"
                className="block px-0.5">
                <X className="h-3 w-a" />
              </a>
              <a
                href="https://t.me/team_kujira"
                target="_blank"
                className="block px-0.5">
                <Telegram className="h-3 w-a" />
              </a>
              <a
                href="https://discord.gg/ddWCkJjD4u"
                target="_blank"
                className="block px-0.5">
                <Discord className="h-3 w-a" />
              </a>
            </nav>
          </div>
        </div>
        <div className="mt-4 flex wrap ai-c">
          <RujiraLogo
            animate={true}
            textColor="#fff"
            className="block w-a h-8 mr-3"
          />
          <p className="fs-12 lh-16 fw-500 color-grey my-2">
            All Rujira brand is in public domain. No rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
