import { TxResult } from "./accounts";

export enum Network {
  Avalanche = "AVAX",
  Base = "BASE",
  Bitcoin = "BTC",
  BitcoinCash = "BCH",
  Bsc = "BSC",
  Dogecoin = "DOGE",
  Ethereum = "ETH",
  Gaia = "GAIA",
  Kujira = "KUJI",
  Litecoin = "LTC",
  Thorchain = "THOR",
}

export const gasToken = (n: Network): { symbol: string; decimals: number } => {
  switch (n) {
    case Network.Avalanche:
      return { symbol: "AVAX", decimals: 18 };
    case Network.Base:
      return { symbol: "BASE", decimals: 18 };
    case Network.Bitcoin:
      return { symbol: "BTC", decimals: 8 };
    case Network.BitcoinCash:
      return { symbol: "BCH", decimals: 8 };
    case Network.Bsc:
      return { symbol: "BNB", decimals: 18 };
    case Network.Dogecoin:
      return { symbol: "DOGE", decimals: 8 };
    case Network.Ethereum:
      return { symbol: "ETH", decimals: 18 };
    case Network.Gaia:
      return { symbol: "ATOM", decimals: 6 };
    case Network.Kujira:
      return { symbol: "KUJI", decimals: 6 };
    case Network.Litecoin:
      return { symbol: "LTC", decimals: 8 };
    case Network.Thorchain:
      return { symbol: "RUNE", decimals: 8 };
  }
};

export const networkTxLink = ({ network, txHash, height }: TxResult) => {
  switch (network) {
    case Network.Avalanche:
      return `https://snowtrace.io/tx/${txHash}`;
    case Network.Base:
      return `https://basescan.io/tx/${txHash}`;
    case Network.Bitcoin:
      return `https://www.blockchain.com/explorer/transactions/btc/${txHash}`;
    case Network.BitcoinCash:
      return `https://blockchair.com/bitcoin-cash/transaction/${txHash}`;
    case Network.Bsc:
      return `https://bscscan.com/tx/${txHash}`;
    case Network.Dogecoin:
      return `https://dogechain.info/tx/${txHash}`;
    case Network.Ethereum:
      return `https://etherscan.io/tx/${txHash}`;
    case Network.Gaia:
      return `https://www.mintscan.io/cosmos/tx/${txHash}?height=${height}`;
    case Network.Kujira:
      return `https://chainsco.pe/kujira/tx/${txHash}`;
    case Network.Litecoin:
      return `https://blockchair.com/litecoin/transaction/${txHash}`;
    case Network.Thorchain:
      return `https://runescan.io/tx/${txHash}`;
  }
};

export const networkLabel = (n: Network): string => {
  switch (n) {
    case Network.Avalanche:
      return "Avalanche C-Chain";
    case Network.Base:
      return "Base";
    case Network.Bitcoin:
      return "Bitcoin";
    case Network.BitcoinCash:
      return "Bitcoin Cash";
    case Network.Bsc:
      return "BNB Chain";
    case Network.Dogecoin:
      return "Dogecoin";
    case Network.Ethereum:
      return "Ethereum";
    case Network.Gaia:
      return "Cosmos Hub";
    case Network.Kujira:
      return "Kujira";
    case Network.Litecoin:
      return "Litecoin";
    case Network.Thorchain:
      return "Rujira";
  }
};

export const networkId = (n: Network): string => {
  switch (n) {
    case Network.Avalanche:
      return "0xa86a";
    case Network.Base:
      return "0x2105";
    case Network.Bsc:
      return "56";
    case Network.Dogecoin:
      return "0x38";
    case Network.Ethereum:
      return "0x1";
    case Network.Bitcoin:
    case Network.BitcoinCash:
    case Network.Gaia:
    case Network.Kujira:
    case Network.Litecoin:
    case Network.Thorchain:
      throw new Error(`Non EVM chain ${n}`);
  }
};
