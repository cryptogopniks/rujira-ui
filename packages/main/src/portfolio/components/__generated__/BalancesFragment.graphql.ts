/**
 * @generated SignedSource<<ab777ecbfc6f74f30de445721f8bca09>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type AssetType = "LAYER_1" | "NATIVE" | "SECURED" | "%future added value";
export type Chain = "AVAX" | "BASE" | "BCH" | "BSC" | "BTC" | "DOGE" | "ETH" | "GAIA" | "KUJI" | "LTC" | "THOR" | "%future added value";
import { FragmentRefs, Result } from "relay-runtime";
export type BalancesFragment$data = {
  readonly balances: Result<ReadonlyArray<{
    readonly amount: string;
    readonly asset: {
      readonly asset: string;
      readonly chain: Chain;
      readonly metadata: {
        readonly decimals: number;
        readonly symbol: string;
      };
      readonly price: {
        readonly changeDay: number | null | undefined;
        readonly current: string | null | undefined;
      } | null | undefined;
      readonly type: AssetType;
      readonly variants: {
        readonly native: {
          readonly denom: string;
        } | null | undefined;
      };
    };
    readonly " $fragmentSpreads": FragmentRefs<"WithdrawFragment">;
  }> | null | undefined, unknown>;
  readonly " $fragmentType": "BalancesFragment";
};
export type BalancesFragment$key = {
  readonly " $data"?: BalancesFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BalancesFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BalancesFragment",
  "selections": [
    {
      "kind": "CatchField",
      "field": {
        "alias": null,
        "args": null,
        "concreteType": "Layer1Balance",
        "kind": "LinkedField",
        "name": "balances",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "WithdrawFragment"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Asset",
            "kind": "LinkedField",
            "name": "asset",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "asset",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "type",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "chain",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Metadata",
                "kind": "LinkedField",
                "name": "metadata",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "symbol",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "decimals",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Price",
                "kind": "LinkedField",
                "name": "price",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "current",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "changeDay",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "AssetVariants",
                "kind": "LinkedField",
                "name": "variants",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Denom",
                    "kind": "LinkedField",
                    "name": "native",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "denom",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "amount",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      "to": "RESULT"
    }
  ],
  "type": "Layer1Account",
  "abstractKey": null
};

(node as any).hash = "624300f4d7f1cf0f7a962d6cf1598fc2";

export default node;
