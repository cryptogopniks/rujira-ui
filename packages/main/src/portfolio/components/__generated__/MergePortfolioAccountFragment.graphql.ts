/**
 * @generated SignedSource<<034da3edf9beee7729321cb8c80bba63>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MergePortfolioAccountFragment$data = {
  readonly merge: {
    readonly depositSize: {
      readonly amount: string;
      readonly asset: {
        readonly metadata: {
          readonly symbol: string;
        };
        readonly price: {
          readonly current: string | null | undefined;
        } | null | undefined;
      };
    };
    readonly totalSize: {
      readonly amount: string;
      readonly asset: {
        readonly metadata: {
          readonly symbol: string;
        };
        readonly price: {
          readonly current: string | null | undefined;
        } | null | undefined;
      };
    };
  } | null | undefined;
  readonly " $fragmentType": "MergePortfolioAccountFragment";
};
export type MergePortfolioAccountFragment$key = {
  readonly " $data"?: MergePortfolioAccountFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MergePortfolioAccountFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
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
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MergePortfolioAccountFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "MergeStats",
      "kind": "LinkedField",
      "name": "merge",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Balance",
          "kind": "LinkedField",
          "name": "depositSize",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Balance",
          "kind": "LinkedField",
          "name": "totalSize",
          "plural": false,
          "selections": (v0/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Account",
  "abstractKey": null
};
})();

(node as any).hash = "609a899fc0c115b1c6f9c148649dcdbd";

export default node;
