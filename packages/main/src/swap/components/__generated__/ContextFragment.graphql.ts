/**
 * @generated SignedSource<<948a704fea3e140ad006025ceef3110a>>
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
export type ContextFragment$data = {
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
        readonly layer1: {
          readonly asset: string;
          readonly chain: Chain;
          readonly metadata: {
            readonly decimals: number;
            readonly symbol: string;
          };
          readonly type: AssetType;
        } | null | undefined;
        readonly native: {
          readonly denom: string;
        } | null | undefined;
        readonly secured: {
          readonly asset: string;
          readonly chain: Chain;
          readonly metadata: {
            readonly decimals: number;
            readonly symbol: string;
          };
          readonly type: AssetType;
        } | null | undefined;
      };
    };
    readonly decimals: number;
  }>;
  readonly " $fragmentType": "ContextFragment";
};
export type ContextFragment$key = {
  readonly " $data"?: ContextFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContextFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "asset",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "Metadata",
  "kind": "LinkedField",
  "name": "metadata",
  "plural": false,
  "selections": [
    (v0/*: any*/),
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "chain",
  "storageKey": null
},
v5 = [
  (v1/*: any*/),
  (v3/*: any*/),
  (v4/*: any*/),
  (v2/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContextFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Pool",
      "kind": "LinkedField",
      "name": "pools",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Asset",
          "kind": "LinkedField",
          "name": "asset",
          "plural": false,
          "selections": [
            (v1/*: any*/),
            (v2/*: any*/),
            (v3/*: any*/),
            (v4/*: any*/),
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
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Asset",
                  "kind": "LinkedField",
                  "name": "secured",
                  "plural": false,
                  "selections": (v5/*: any*/),
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Asset",
                  "kind": "LinkedField",
                  "name": "layer1",
                  "plural": false,
                  "selections": (v5/*: any*/),
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
})();

(node as any).hash = "9e9cfa58e339ebbaedb1d01eb1fa2c67";

export default node;
