/**
 * @generated SignedSource<<4d7acbf2401397357a7cf2497e90a735>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type TradingViewQuery$variables = {
  after: any;
  before: any;
  pair: string;
  resolution: string;
};
export type TradingViewQuery$data = {
  readonly node: {
    readonly address?: string;
    readonly candles?: {
      readonly edges: ReadonlyArray<{
        readonly cursor: string | null | undefined;
        readonly node: {
          readonly bin: any;
          readonly close: string;
          readonly high: string;
          readonly id: string;
          readonly low: string;
          readonly open: string;
          readonly volume: string;
        } | null | undefined;
      } | null | undefined> | null | undefined;
    } | null | undefined;
  } | null | undefined;
};
export type TradingViewQuery = {
  response: TradingViewQuery$data;
  variables: TradingViewQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "before"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "pair"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "resolution"
},
v4 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "pair"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "kind": "InlineFragment",
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
      "args": [
        {
          "kind": "Variable",
          "name": "after",
          "variableName": "after"
        },
        {
          "kind": "Variable",
          "name": "before",
          "variableName": "before"
        },
        {
          "kind": "Variable",
          "name": "resolution",
          "variableName": "resolution"
        }
      ],
      "concreteType": "FinCandleConnection",
      "kind": "LinkedField",
      "name": "candles",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "FinCandleEdge",
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
              "concreteType": "FinCandle",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v5/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "open",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "close",
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
                  "name": "volume",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "bin",
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
  "type": "FinPair",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TradingViewQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "TradingViewQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
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
          (v6/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "91ccc9d85ea3bff0adf1a52a4ca25eca",
    "id": null,
    "metadata": {},
    "name": "TradingViewQuery",
    "operationKind": "query",
    "text": "query TradingViewQuery(\n  $pair: ID!\n  $after: Timestamp!\n  $before: Timestamp!\n  $resolution: String!\n) {\n  node(id: $pair) {\n    __typename\n    ... on FinPair {\n      address\n      candles(after: $after, before: $before, resolution: $resolution) {\n        edges {\n          cursor\n          node {\n            id\n            open\n            close\n            high\n            low\n            volume\n            bin\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "d736c5bdcdf873c66c239f137e641727";

export default node;
