import { ChainInfo } from "@keplr-wallet/types";

const base = (prefix: string): Omit<ChainInfo, "rpc" | "rest" | "chainId"> => ({
  chainName: "THORChain",
  bip44: { coinType: 931 },
  bech32Config: {
    bech32PrefixAccAddr: prefix,
    bech32PrefixAccPub: prefix + "pub",
    bech32PrefixValAddr: prefix + "valoper",
    bech32PrefixValPub: prefix + "valoperpub",
    bech32PrefixConsAddr: prefix + "valcons",
    bech32PrefixConsPub: prefix + "valconspub",
  },
  currencies: [
    {
      coinDenom: "RUNE",
      coinMinimalDenom: "rune",
      coinDecimals: 8,
      coinGeckoId: "thorchain",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "RUNE",
      coinMinimalDenom: "rune",
      coinDecimals: 8,
      coinGeckoId: "thorchain",
      gasPriceStep: { low: 0.0, average: 0.0, high: 0.0 },
    },
  ],
});

export const dev = {
  ...base("sthor"),
  rpc: "https://thornode-devnet-rpc.bryanlabs.net",
  rest: "https://thornode-devnet-api.bryanlabs.net",
  chainId: "dev-1",
};

export const mock = {
  ...base("tthor"),
  rpc: "",
  rest: "",
  chainId: "",
};

export const stage = {
  ...base("sthor"),
  rpc: "https://stagenet-rpc.ninerealms.com",
  rest: "https://stagenet.ninerealms.com",
  chainId: "thorchain-stagenet-2",
};

export const main = {
  ...base("thor"),
  rpc: "https://thornode-mainnet-rpc.bryanlabs.net",
  rest: "http://thornode.ninerealms.com",
  chainId: "thorchain-1",
};
