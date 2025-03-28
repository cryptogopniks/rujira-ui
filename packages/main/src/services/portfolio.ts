const options = { method: "GET", headers: { accept: "application/json" } };

export namespace Portfolio {
  interface Response {
    address: string;
    tokens: TokenResponse[];
    defi_positions: DefiPositionResponse[];
    nfts: NftResponse[];
  }

  interface TokenResponse {
    token: string;
    token_address: string;
    balance: bigint;
    price_usd: bigint;
    value_usd: bigint;
  }

  interface DefiPositionResponse {
    protocol: string;
    contract_address: string;
    position: string;
    value_eth: number;
    value_usd: number;
  }

  interface NftResponse {
    token_address: string;
    nft_id: number;
    valuation_eth: number;
  }

  export interface Token {
    token: string;
    tokenAddress: string;
    balance: bigint;
    priceUsd: bigint;
    valueUsd: bigint;
  }

  const castTokenResponse = (res: TokenResponse): Token => ({
    token: res.token,
    tokenAddress: res.token_address,
    balance: BigInt(res.balance),
    priceUsd: BigInt(res.price_usd),
    valueUsd: BigInt(res.value_usd),
  });

  export const getPortfolio = (address: string): Promise<Token[]> =>
    fetch(
      `https://api.nansen.ai/v1/address/portfolio?address=${address}`,
      options
    )
      .then((res) => res.json())
      .then((res: Response) => res.tokens.map(castTokenResponse));
}
