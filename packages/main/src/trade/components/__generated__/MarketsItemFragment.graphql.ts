/**
 * @generated SignedSource<<29cb606989c5342143aaf7c8bff3a013>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type Chain = "AVAX" | "BASE" | "BCH" | "BSC" | "BTC" | "DOGE" | "ETH" | "GAIA" | "KUJI" | "LTC" | "THOR" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type MarketsItemFragment$data = {
  readonly address: string;
  readonly assetBase: {
    readonly asset: string;
    readonly chain: Chain;
    readonly metadata: {
      readonly decimals: number;
      readonly symbol: string;
    };
  };
  readonly assetQuote: {
    readonly asset: string;
    readonly chain: Chain;
    readonly metadata: {
      readonly decimals: number;
      readonly symbol: string;
    };
  };
  readonly id: string;
  readonly summary: {
    readonly change: string;
    readonly last: string;
    readonly volume: {
      readonly amount: string;
      readonly asset: {
        readonly asset: string;
        readonly metadata: {
          readonly decimals: number;
        };
      };
    };
  } | null | undefined;
  readonly " $fragmentType": "MarketsItemFragment";
};
export type MarketsItemFragment$key = {
  readonly " $data"?: MarketsItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MarketsItemFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "asset",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
},
v2 = [
  (v0/*: any*/),
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
      (v1/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MarketsItemFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "address",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Asset",
      "kind": "LinkedField",
      "name": "assetBase",
      "plural": false,
      "selections": (v2/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Asset",
      "kind": "LinkedField",
      "name": "assetQuote",
      "plural": false,
      "selections": (v2/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "FinPairSummary",
      "kind": "LinkedField",
      "name": "summary",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "last",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "change",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Layer1Balance",
          "kind": "LinkedField",
          "name": "volume",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Asset",
              "kind": "LinkedField",
              "name": "asset",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Metadata",
                  "kind": "LinkedField",
                  "name": "metadata",
                  "plural": false,
                  "selections": [
                    (v1/*: any*/)
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "FinPair",
  "abstractKey": null
};
})();

(node as any).hash = "51e26e7f440d20907d794d7fd5149edb";

export default node;
