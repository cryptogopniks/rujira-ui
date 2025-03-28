/**
 * @generated SignedSource<<86bce831f0ad02e554301dccf9af9cc5>>
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
export type msgAssetFragment$data = {
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
    readonly secured: {
      readonly variants: {
        readonly native: {
          readonly denom: string;
        } | null | undefined;
      };
    } | null | undefined;
  };
  readonly " $fragmentType": "msgAssetFragment";
};
export type msgAssetFragment$key = {
  readonly " $data"?: msgAssetFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"msgAssetFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
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
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "msgAssetFragment",
  "selections": [
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
          "name": "decimals",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "symbol",
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
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Asset",
          "kind": "LinkedField",
          "name": "secured",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "AssetVariants",
              "kind": "LinkedField",
              "name": "variants",
              "plural": false,
              "selections": [
                (v0/*: any*/)
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
  "type": "Asset",
  "abstractKey": null
};
})();

(node as any).hash = "3ca4c5b7d6b779cc1752e73bab6b3607";

export default node;
