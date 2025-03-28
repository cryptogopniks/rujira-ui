/**
 * @generated SignedSource<<7506e0cae0c81b65efcc8f626ba48cb2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type TradingViewSubscription$variables = {
  prefix: string;
};
export type TradingViewSubscription$data = {
  readonly edge: {
    readonly cursor: string | null | undefined;
    readonly node: {
      readonly bin?: any;
      readonly close?: string;
      readonly high?: string;
      readonly id?: string;
      readonly low?: string;
      readonly open?: string;
      readonly volume?: string;
    } | null | undefined;
  } | null | undefined;
};
export type TradingViewSubscription = {
  response: TradingViewSubscription$data;
  variables: TradingViewSubscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "prefix"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "prefix",
    "variableName": "prefix"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "open",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "close",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "high",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "low",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "volume",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bin",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TradingViewSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "NodeEdge",
        "kind": "LinkedField",
        "name": "edge",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "kind": "InlineFragment",
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/)
                ],
                "type": "FinCandle",
                "abstractKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootSubscriptionType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TradingViewSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "NodeEdge",
        "kind": "LinkedField",
        "name": "edge",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v3/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/)
                ],
                "type": "FinCandle",
                "abstractKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "20a3fc29f1757ca000ed94f14837dbc6",
    "id": null,
    "metadata": {},
    "name": "TradingViewSubscription",
    "operationKind": "subscription",
    "text": "subscription TradingViewSubscription(\n  $prefix: String!\n) {\n  edge(prefix: $prefix) {\n    cursor\n    node {\n      __typename\n      ... on FinCandle {\n        id\n        open\n        close\n        high\n        low\n        volume\n        bin\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4cf3820c8d24d01166b2e99d2d5dd840";

export default node;
