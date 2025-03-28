/**
 * @generated SignedSource<<fa8be72ea0c0e75109a374ba71ecbb2e>>
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
export type SwitchFragment$data = {
  readonly amount: string;
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
  readonly " $fragmentType": "SwitchFragment";
};
export type SwitchFragment$key = {
  readonly " $data"?: SwitchFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SwitchFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SwitchFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "amount",
      "storageKey": null
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
  "type": "Layer1Balance",
  "abstractKey": null
};

(node as any).hash = "3ecdf0dd31d54f28fb48929c9f89f359";

export default node;
