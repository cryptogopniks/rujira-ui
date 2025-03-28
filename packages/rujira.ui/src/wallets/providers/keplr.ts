import { Decimal } from "@cosmjs/math";
import {
  AccountData,
  ChainInfo,
  Keplr,
  Window as KeplrWindow,
} from "@keplr-wallet/types";
import {
  InboundAddress,
  Msg,
  Network,
  signers,
  Simulation,
  TxResult,
} from "rujira.js";
import * as config from "../config";
import { Account, WalletProvider } from "./types";

declare global {
  interface Window extends KeplrWindow {}
}

export interface KeplrContext extends ChainInfo {
  gasPrice: signers.cosmos.GasPrice;
}

const connect = async (
  k: Keplr,
  chain: ChainInfo
): Promise<readonly AccountData[]> => {
  await k.experimentalSuggestChain(chain);
  return k
    .enable(chain.chainId)
    .then(() => k.getOfflineSigner(chain.chainId))
    .then((x) => x.getAccounts());
};

const getGasPrice = (c: ChainInfo): signers.cosmos.GasPrice => ({
  denom: c.feeCurrencies[0].coinDenom,
  amount: Decimal.fromUserInput(
    c.feeCurrencies[0].gasPriceStep?.average.toString() || "0",
    18
  ),
});

const getNetwork = (c: ChainInfo): Network => {
  switch (c.chainName) {
    case "Kujira":
      return Network.Kujira;
    case "Cosmos Hub":
      return Network.Gaia;
    case "THORChain":
      return Network.Thorchain;
    default:
      throw new Error(`No Network for chain ${c.chainName}`);
  }
};

const getConfigs = (): ChainInfo[] => {
  switch (import.meta.env.MODE) {
    case "main":
    case "stage":
    case "mock":
    case "dev":
      return config[import.meta.env.MODE];
    default:
      throw new Error(`Invalid mode ${import.meta.env.MODE}`);
  }
};

export const getKeplrAccounts = async (
  k: Keplr
): Promise<
  { account: { address: string; network: Network }; context: KeplrContext }[]
> => {
  return Promise.all(
    getConfigs().map((x) =>
      connect(k, x).then((res) =>
        res.map((y) => ({
          account: {
            address: y.address,
            network: getNetwork(x),
          },
          context: {
            ...x,
            gasPrice: getGasPrice(x),
          },
        }))
      )
    )
  ).then((res) => res.flat());
};

export const keplrSimulate = async (
  context: KeplrContext,
  k: Keplr,
  account: Account,
  msg: Msg,
  inboundAddress?: InboundAddress
): Promise<Simulation> => {
  const encoded = await msg.toEncodeObject(account, inboundAddress);
  const signer = await k.getOfflineSignerAuto(context.chainId);
  const client = await signers.cosmos.CosmosClient.connectWithSigner(
    context.rpc,
    signers.cosmos.castSigner(signer)
  );

  const sim = await client.simulate(
    account.address,
    [encoded.msg],
    encoded.memo
  );

  return {
    symbol: context.feeCurrencies[0].coinDenom,
    decimals: context.feeCurrencies[0].coinDecimals,
    amount: BigInt(
      Math.floor(sim * context.gasPrice.amount.toFloatApproximation())
    ),
    gas: BigInt(sim),
  };
};

export const keplrSignAndBroadcast = async (
  context: KeplrContext,
  k: Keplr,
  account: Account,
  _simulation: Simulation,
  msg: Msg,
  inboundAddress?: InboundAddress
): Promise<TxResult> => {
  const encoded = await msg.toEncodeObject(account, inboundAddress);
  const signer = await k.getOfflineSignerAuto(context.chainId);
  const client = await signers.cosmos.CosmosClient.connectWithSigner(
    context.rpc,
    signers.cosmos.castSigner(signer),
    { gasPrice: context.gasPrice }
  );

  const res = await client.signAndBroadcast(
    account.address,
    [encoded.msg],
    "auto",
    encoded.memo
  );
  signers.cosmos.assertIsDeliverTxSuccess(res);
  return {
    network: account.network,
    address: account.address,
    txHash: res.transactionHash,
    height: BigInt(res.height),
  };
};

const provider: WalletProvider<ChainInfo> = {
  getAccounts: async (): Promise<
    { account: { address: string; network: Network }; context: ChainInfo }[]
  > => {
    const k = window.keplr;
    if (!k) throw new Error("Keplr extension not found");
    return getKeplrAccounts(k);
  },
  simulate: async function (
    context: KeplrContext,
    account: Account,
    msg: Msg,
    inboundAddress?: InboundAddress
  ): Promise<Simulation> {
    const k = window.keplr;
    if (!k) throw new Error("Keplr extension not found");
    return keplrSimulate(context, k, account, msg, inboundAddress);
  },
  signAndBroadcast: async function (
    context: KeplrContext,
    account: Account,
    simulation: Simulation,
    msg: Msg,
    inboundAddress?: InboundAddress
  ): Promise<TxResult> {
    const k = window.keplr;
    if (!k) throw new Error("Keplr extension not found");

    return keplrSignAndBroadcast(
      context,
      k,
      account,
      simulation,
      msg,
      inboundAddress
    );
  },
  onChange: function (cb) {
    window.addEventListener("keplr_keystorechange", () => {
      const k = window.keplr;
      if (!k) return;
      cb();
    });
  },
};

export default provider;
