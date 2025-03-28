import { Network } from "./network";

export interface Asset<T extends string = string> {
  type: T;
  chain: Network;
  asset: string;
  metadata: {
    decimals: number;
    symbol: string;
  };
  variants?: {
    layer1?: Asset<T>;
    secured?: Asset<T>;
    native?: { denom: string };
  } | null;
}
