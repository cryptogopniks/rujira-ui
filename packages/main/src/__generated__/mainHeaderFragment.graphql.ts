/**
 * @generated SignedSource<<3b51b6b7e8b5586c6637468b9b8b749e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type AssetType = "LAYER_1" | "NATIVE" | "SECURED" | "%future added value";
export type Chain = "AVAX" | "BASE" | "BCH" | "BSC" | "BTC" | "DOGE" | "ETH" | "GAIA" | "KUJI" | "LTC" | "THOR" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type mainHeaderFragment$data = {
  readonly pools: ReadonlyArray<{
    readonly asset: {
      readonly asset: string;
      readonly chain: Chain;
      readonly metadata: {
        readonly decimals: number;
        readonly symbol: string;
      };
      readonly type: AssetType;
      readonly variants: {
        readonly native: {
          readonly denom: string;
        } | null | undefined;
      };
    };
  }>;
  readonly " $fragmentType": "mainHeaderFragment";
};
export type mainHeaderFragment$key = {
  readonly " $data"?: mainHeaderFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"mainHeaderFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "mainHeaderFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Pool",
      "kind": "LinkedField",
      "name": "pools",
      "plural": true,
      "selections": [
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
              "name": "chain",
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
              "name": "asset",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Thorchain",
  "abstractKey": null
};

(node as any).hash = "e9601dd7f9cf3ace9c6e5a368331f022";

export default node;
