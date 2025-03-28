import { FC } from "react";
import { Network } from "rujira.js";
import { NetworkIcons } from "../..";

export const NetworkIcon: FC<{
  network: Network;
  className?: string;
  selected?: boolean;
}> = ({ network, className, selected = true }) => {
  switch (network) {
    case Network.Avalanche:
      return selected ? (
        <NetworkIcons.Avalanche className={className} />
      ) : (
        <NetworkIcons.AvalancheSimple className={className} />
      );
    case Network.Base:
      return selected ? (
        <NetworkIcons.Base className={className} />
      ) : (
        <NetworkIcons.Base className={className} />
      );
    case Network.Bitcoin:
      return selected ? (
        <NetworkIcons.Bitcoin className={className} />
      ) : (
        <NetworkIcons.BitcoinSimple className={className} />
      );
    case Network.BitcoinCash:
      return selected ? (
        <NetworkIcons.BitcoinCash className={className} />
      ) : (
        <NetworkIcons.BitcoinCashSimple className={className} />
      );
    case Network.Bsc:
      return selected ? (
        <NetworkIcons.BinanceSmartChain className={className} />
      ) : (
        <NetworkIcons.BinanceSmartChainSimple className={className} />
      );
    case Network.Dogecoin:
      return selected ? (
        <NetworkIcons.Doge className={className} />
      ) : (
        <NetworkIcons.DogeSimple className={className} />
      );
    case Network.Ethereum:
      return selected ? (
        <NetworkIcons.Ethereum className={className} />
      ) : (
        <NetworkIcons.EthereumSimple className={className} />
      );
    case Network.Gaia:
      return selected ? (
        <NetworkIcons.Cosmos className={className} />
      ) : (
        <NetworkIcons.CosmosSimple className={className} />
      );
    case Network.Kujira:
      return selected ? (
        <NetworkIcons.Kujira className={className} />
      ) : (
        <NetworkIcons.KujiraSimple className={className} />
      );
    case Network.Litecoin:
      return selected ? (
        <NetworkIcons.Litecoin className={className} />
      ) : (
        <NetworkIcons.LitecoinSimple className={className} />
      );
    case Network.Thorchain:
      return selected ? (
        <NetworkIcons.Thorchain className={className} />
      ) : (
        <NetworkIcons.ThorchainSimple className={className} />
      );
  }
};
