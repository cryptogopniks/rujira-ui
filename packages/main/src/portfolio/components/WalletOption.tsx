import React from "react";

export type WalletOptionType = {
  description: string;
  children: React.ReactNode;
  links: {
    url: string;
    icon: React.ReactNode;
  }[];
};

export const WalletOption = ({
  description,
  links,
  children,
}: WalletOptionType) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mt-4">
      <div className="card h-full p-3 flex dir-c ai-s portfolio__wallet">
        <div className="portfolio__wallet-logo">{children}</div>
        <p>{description}</p>
        <div className="portfolio__wallet-links">
          {links.map((l, i) => (
            <a key={`pw-${i}`} href={l.url} target="_blank">
              {l.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
