/**
 * @generated SignedSource<<ecd5cf3607efa51cfcc4734d2f999b01>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type Chain = "AVAX" | "BASE" | "BCH" | "BSC" | "BTC" | "DOGE" | "ETH" | "GAIA" | "KUJI" | "LTC" | "THOR" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type TradeRujiraFragment$data = {
  readonly fin: ReadonlyArray<{
    readonly address: string;
    readonly assetBase: {
      readonly chain: Chain;
      readonly metadata: {
        readonly symbol: string;
      };
    };
    readonly assetQuote: {
      readonly chain: Chain;
      readonly metadata: {
        readonly symbol: string;
      };
    };
  }>;
  readonly " $fragmentType": "TradeRujiraFragment";
};
export type TradeRujiraFragment$key = {
  readonly " $data"?: TradeRujiraFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TradeRujiraFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
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
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TradeRujiraFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "FinPair",
      "kind": "LinkedField",
      "name": "fin",
      "plural": true,
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Rujira",
  "abstractKey": null
};
})();

(node as any).hash = "554447984221e1ae51186822de96c5ac";

export default node;
