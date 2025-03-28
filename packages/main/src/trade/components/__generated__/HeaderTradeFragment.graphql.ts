/**
 * @generated SignedSource<<ec7a6ca57e20462651f8580dff373172>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HeaderTradeFragment$data = {
  readonly address: string;
  readonly assetBase: {
    readonly asset: string;
    readonly metadata: {
      readonly decimals: number;
      readonly symbol: string;
    };
  };
  readonly assetQuote: {
    readonly asset: string;
    readonly metadata: {
      readonly decimals: number;
      readonly symbol: string;
    };
  };
  readonly summary: {
    readonly change: string;
    readonly high: string;
    readonly last: string;
    readonly lastUsd: string;
    readonly low: string;
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
  readonly " $fragmentType": "HeaderTradeFragment";
};
export type HeaderTradeFragment$key = {
  readonly " $data"?: HeaderTradeFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HeaderTradeFragment">;
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
  "name": "HeaderTradeFragment",
  "selections": [
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
          "name": "lastUsd",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "high",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "low",
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

(node as any).hash = "76785e8547c28117dba054e8eca8a032";

export default node;
