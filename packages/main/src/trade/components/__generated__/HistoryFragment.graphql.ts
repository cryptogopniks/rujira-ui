/**
 * @generated SignedSource<<09f5213e0fd1ae0c112eb80d163e7ac7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HistoryFragment$data = {
  readonly address: string;
  readonly assetBase: {
    readonly metadata: {
      readonly symbol: string;
    };
  };
  readonly assetQuote: {
    readonly metadata: {
      readonly symbol: string;
    };
  };
  readonly trades: {
    readonly edges: ReadonlyArray<{
      readonly cursor: string | null | undefined;
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"HistoryItemFragment">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "HistoryFragment";
};
export type HistoryFragment$key = {
  readonly " $data"?: HistoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HistoryFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
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
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HistoryFragment",
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
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Asset",
      "kind": "LinkedField",
      "name": "assetQuote",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "FinTradeConnection",
      "kind": "LinkedField",
      "name": "trades",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "FinTradeEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "FinTrade",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "HistoryItemFragment"
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
  "type": "FinPair",
  "abstractKey": null
};
})();

(node as any).hash = "1a2f7467d3f7f936c2d358571d4b0ac4";

export default node;
