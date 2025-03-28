import { Window as KeplrWindow } from "@keplr-wallet/types";
import { BrowserProvider, Eip1193Provider, JsonRpcSigner } from "ethers";
import { InboundAddress, Msg, Simulation, TxResult, gasToken } from "rujira.js";
import { Network } from "rujira.js/src/network";
import { Account, WalletProvider } from "./types";

declare global {
  interface Window extends KeplrWindow {
    trustwallet?: Eip1193Provider;
  }
}

export interface TrustContext {
  signer: JsonRpcSigner;
}

export const getTrustAccounts = (
  e: Eip1193Provider
): Promise<{ address: string; network: Network }[]> => {
  const provider = new BrowserProvider(e);
  return provider.getSigner().then((x) => [
    {
      address: x.address,
      network: Network.Avalanche,
    },
    {
      address: x.address,
      network: Network.Bsc,
    },
    {
      address: x.address,
      network: Network.Ethereum,
    },
  ]);
};

const provider: WalletProvider<TrustContext> = {
  getAccounts: async (): Promise<
    {
      account: { address: string; network: Network };
      context: TrustContext;
    }[]
  > => {
    const eth = window?.trustwallet;
    if (!eth) throw new Error("Trust Wallet extension not found");
    const provider = new BrowserProvider(eth);

    return getTrustAccounts(eth).then((res) =>
      res.map((account) => ({
        account,
        context: { signer: new JsonRpcSigner(provider, account.address) },
      }))
    );
  },
  simulate: async function (
    context: TrustContext,
    account: Account,
    tx: Msg,
    inboundAddress?: InboundAddress
  ): Promise<Simulation> {
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
    context: TrustContext,
    account: Account,
    simulation: Simulation,
    tx: Msg,
    inboundAddress?: InboundAddress
  ): Promise<TxResult> {
    const provider =
      window?.trustwallet && new BrowserProvider(window.trustwallet);
    if (!provider) throw new Error("Trust Wallet extension not found");
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
