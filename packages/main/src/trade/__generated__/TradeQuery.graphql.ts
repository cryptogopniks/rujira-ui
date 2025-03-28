/**
 * @generated SignedSource<<5258041f9c79c6a4881992eace5b39e2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Chain = "AVAX" | "BASE" | "BCH" | "BSC" | "BTC" | "DOGE" | "ETH" | "GAIA" | "KUJI" | "LTC" | "THOR" | "%future added value";
export type TradeQuery$variables = {
  id: string;
};
export type TradeQuery$data = {
  readonly pair: {
    readonly address?: string;
    readonly assetBase?: {
      readonly chain: Chain;
      readonly metadata: {
        readonly symbol: string;
      };
    };
    readonly assetQuote?: {
      readonly chain: Chain;
      readonly metadata: {
        readonly symbol: string;
      };
    };
    readonly " $fragmentSpreads": FragmentRefs<"BookFragment" | "HeaderTradeFragment" | "SubmitFragment">;
  } | null | undefined;
};
export type TradeQuery = {
  response: TradeQuery$data;
  variables: TradeQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "chain",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "symbol",
  "storageKey": null
},
v5 = [
  (v3/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Metadata",
    "kind": "LinkedField",
    "name": "metadata",
    "plural": false,
    "selections": [
      (v4/*: any*/)
    ],
    "storageKey": null
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "Metadata",
  "kind": "LinkedField",
  "name": "metadata",
  "plural": false,
  "selections": [
    (v4/*: any*/),
    (v6/*: any*/)
  ],
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "asset",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "price",
  "storageKey": null
},
v11 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "value",
    "storageKey": null
  },
  (v10/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "total",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "side",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TradeQuery",
    "selections": [
      {
        "alias": "pair",
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Asset",
                "kind": "LinkedField",
                "name": "assetBase",
                "plural": false,
                "selections": (v5/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Asset",
                "kind": "LinkedField",
                "name": "assetQuote",
                "plural": false,
                "selections": (v5/*: any*/),
                "storageKey": null
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "BookFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "HeaderTradeFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "SubmitFragment"
              }
            ],
            "type": "FinPair",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TradeQuery",
    "selections": [
      {
        "alias": "pair",
        "args": (v1/*: any*/),
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
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Asset",
                "kind": "LinkedField",
                "name": "assetBase",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Asset",
                "kind": "LinkedField",
                "name": "assetQuote",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
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
                          (v8/*: any*/),
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
                            "name": "quoteAmount",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "baseAmount",
                            "storageKey": null
                          },
                          (v10/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "timestamp",
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
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "FinBook",
                "kind": "LinkedField",
                "name": "book",
                "plural": false,
                "selections": [
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "FinBookEntry",
                    "kind": "LinkedField",
                    "name": "bids",
                    "plural": true,
                    "selections": (v11/*: any*/),
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "FinBookEntry",
                    "kind": "LinkedField",
                    "name": "asks",
                    "plural": true,
                    "selections": (v11/*: any*/),
                    "storageKey": null
                  }
                ],
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
                          (v9/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Metadata",
                            "kind": "LinkedField",
                            "name": "metadata",
                            "plural": false,
                            "selections": [
                              (v6/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v8/*: any*/)
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
          },
          (v8/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "362e443310722bb96d88ccb9290b47bd",
    "id": null,
    "metadata": {},
    "name": "TradeQuery",
    "operationKind": "query",
    "text": "query TradeQuery(\n  $id: ID!\n) {\n  pair: node(id: $id) {\n    __typename\n    ... on FinPair {\n      address\n      assetBase {\n        chain\n        metadata {\n          symbol\n        }\n        id\n      }\n      assetQuote {\n        chain\n        metadata {\n          symbol\n        }\n        id\n      }\n      ...BookFragment\n      ...HeaderTradeFragment\n      ...SubmitFragment\n    }\n    id\n  }\n}\n\nfragment BookEntryFragment on FinBookEntry {\n  price\n  side\n  total\n  value\n}\n\nfragment BookFragment on FinPair {\n  assetBase {\n    asset\n    metadata {\n      symbol\n      decimals\n    }\n    id\n  }\n  assetQuote {\n    asset\n    metadata {\n      symbol\n      decimals\n    }\n    price {\n      current\n    }\n    id\n  }\n  ...HistoryFragment\n  book {\n    id\n    ...BookSubFragment\n  }\n}\n\nfragment BookSubFragment on FinBook {\n  id\n  bids {\n    value\n    price\n    total\n    ...BookEntryFragment\n  }\n  asks {\n    value\n    price\n    total\n    ...BookEntryFragment\n  }\n}\n\nfragment HeaderTradeFragment on FinPair {\n  address\n  assetBase {\n    asset\n    metadata {\n      symbol\n      decimals\n    }\n    id\n  }\n  assetQuote {\n    asset\n    metadata {\n      symbol\n      decimals\n    }\n    id\n  }\n  summary {\n    last\n    lastUsd\n    high\n    low\n    change\n    volume {\n      asset {\n        asset\n        metadata {\n          decimals\n        }\n        id\n      }\n      amount\n    }\n  }\n}\n\nfragment HistoryFragment on FinPair {\n  address\n  assetBase {\n    metadata {\n      symbol\n    }\n    id\n  }\n  assetQuote {\n    metadata {\n      symbol\n    }\n    id\n  }\n  trades {\n    edges {\n      cursor\n      node {\n        id\n        ...HistoryItemFragment\n      }\n    }\n  }\n}\n\nfragment HistoryItemFragment on FinTrade {\n  type\n  quoteAmount\n  baseAmount\n  price\n  timestamp\n}\n\nfragment SubmitFragment on FinPair {\n  address\n  assetBase {\n    metadata {\n      symbol\n    }\n    id\n  }\n  assetQuote {\n    metadata {\n      symbol\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "c26795e6452a44f1dcf13251e38004a5";

export default node;
