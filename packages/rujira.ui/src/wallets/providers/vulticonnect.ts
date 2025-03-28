import { Window as KeplrWindow } from "@keplr-wallet/types";
import { BrowserProvider, Eip1193Provider, JsonRpcSigner } from "ethers";
import {
  InboundAddress,
  Msg,
  Network,
  Simulation,
  TxResult,
  gasToken,
} from "rujira.js";
import { Account, WalletProvider } from "./types";

declare global {
  interface Window extends KeplrWindow {
    vultisig?: {
      ethereum: Eip1193Provider;

      getVaults: () => Promise<
        {
          chains: {
            address: string;
            cmcId: number;
            decimals: number;
            derivationKey: string;
            id: string;
            name: string;
            ticker: string;
          }[];
        }[]
      >;
    };
  }
}

const map: Record<string, Network> = {
  "0xa86a": Network.Avalanche,
  "0x2105": Network.Base,
  "0x1f96": Network.Bitcoin,
  "0x2710": Network.BitcoinCash,
  "0x38": Network.Bsc,
  "0x7d0": Network.Dogecoin,
  "0x1": Network.Ethereum,
  "cosmoshub-4": Network.Gaia,
  "kaiyo-1": Network.Kujira,
  Litecoin_litecoin: Network.Litecoin,
  Thorchain_1: Network.Thorchain,
};

export interface VulticonnectContext {
  signer?: JsonRpcSigner;
}

const provider: WalletProvider<VulticonnectContext> = {
  getAccounts: async (): Promise<
    {
      account: { address: string; network: Network };
      context: VulticonnectContext;
    }[]
  > => {
    const v = window.vultisig;
    if (!v) throw new Error("VultiConnect extension not found");
    return v.getVaults().then(([x]) => {
      return x.chains.reduce(
        (
          a: {
            account: { address: string; network: Network };
            context: VulticonnectContext;
          }[],
          v
        ) =>
          map[v.id]
            ? [
                {
                  account: { address: v.address, network: map[v.id] },
                  context: {},
                },
                ...a,
              ]
            : a,
        []
      );
    });
  },
  simulate: async function (
    context: VulticonnectContext,
    account: Account,
    tx: Msg,
    inboundAddress?: InboundAddress
  ): Promise<Simulation> {
    if (!context.signer) throw new Error(`VultiConnet signer not available`);
    const { request, chainId } = await tx.toTransactionRequest(
      account,
      inboundAddress
    );

    await context.signer.provider.send("wallet_switchEthereumChain", [
      { chainId },
    ]);

    const gas = await context.signer.estimateGas(request);
    return {
      ...gasToken(account.network),
      amount: gas * (inboundAddress?.gasRate || 0n) * 2n,
      gas,
    };
  },
  signAndBroadcast: async function (
    context: VulticonnectContext,
    account: Account,
    simulation: Simulation,
    tx: Msg,
    inboundAddress?: InboundAddress
  ): Promise<TxResult> {
    if (!context.signer) throw new Error(`VultiConnet signer not available`);
    const provider =
      window?.vultisig && new BrowserProvider(window.vultisig.ethereum);
    if (!provider) throw new Error("VultiConnect extension not found");
    const req = await tx.toTransactionRequest(account, inboundAddress);

    try {
      const res = await context.signer.sendTransaction({
        ...req.request,
        gasLimit: simulation.gas,
        gasPrice: inboundAddress?.gasRate,
      });
      return {
        network: account.network,
        address: account.address,
        txHash: res.hash,
        height: BigInt(res.blockNumber || 0),
      };
    } catch (error: any) {
      throw new Error(error?.error?.message);
    }
  },
};

export default provider;
