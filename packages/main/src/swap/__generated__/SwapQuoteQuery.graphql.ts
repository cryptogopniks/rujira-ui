/**
 * @generated SignedSource<<bbdf91f9a01666c70bcd22fbf1dc7564>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs, Result } from "relay-runtime";
export type SwapQuoteQuery$variables = {
  affiliate?: ReadonlyArray<string> | null | undefined;
  affiliateBps?: ReadonlyArray<number> | null | undefined;
  amount: string;
  destination?: string | null | undefined;
  fromAsset: string;
  streamingInterval?: number | null | undefined;
  streamingQuantity?: string | null | undefined;
  toAsset: string;
};
export type SwapQuoteQuery$data = {
  readonly thorchain: {
    readonly quote: Result<{
      readonly expectedAssetOut: {
        readonly amount: string;
      };
      readonly " $fragmentSpreads": FragmentRefs<"ActionsFragment" | "InputsQuoteFragment" | "QuoteFragment">;
    } | null | undefined, unknown>;
  } | null | undefined;
};
export type SwapQuoteQuery = {
  response: SwapQuoteQuery$data;
  variables: SwapQuoteQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "affiliate"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "affiliateBps"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "amount"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "destination"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "fromAsset"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "streamingInterval"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "streamingQuantity"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "toAsset"
},
v8 = [
  {
    "kind": "Variable",
    "name": "affiliate",
    "variableName": "affiliate"
  },
  {
    "kind": "Variable",
    "name": "affiliateBps",
    "variableName": "affiliateBps"
  },
  {
    "kind": "Variable",
    "name": "amount",
    "variableName": "amount"
  },
  {
    "kind": "Variable",
    "name": "destination",
    "variableName": "destination"
  },
  {
    "kind": "Variable",
    "name": "fromAsset",
    "variableName": "fromAsset"
  },
  {
    "kind": "Variable",
    "name": "streamingInterval",
    "variableName": "streamingInterval"
  },
  {
    "kind": "Variable",
    "name": "streamingQuantity",
    "variableName": "streamingQuantity"
  },
  {
    "kind": "Variable",
    "name": "toAsset",
    "variableName": "toAsset"
  }
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "amount",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SwapQuoteQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Thorchain",
        "kind": "LinkedField",
        "name": "thorchain",
        "plural": false,
        "selections": [
          {
            "kind": "CatchField",
            "field": {
              "alias": null,
              "args": (v8/*: any*/),
              "concreteType": "Quote",
              "kind": "LinkedField",
              "name": "quote",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Layer1Balance",
                  "kind": "LinkedField",
                  "name": "expectedAssetOut",
                  "plural": false,
                  "selections": [
                    (v9/*: any*/)
                  ],
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ActionsFragment"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "QuoteFragment"
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "InputsQuoteFragment"
                }
              ],
              "storageKey": null
            },
            "to": "RESULT"
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
    "argumentDefinitions": [
      (v4/*: any*/),
      (v7/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/)
    ],
    "kind": "Operation",
    "name": "SwapQuoteQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Thorchain",
        "kind": "LinkedField",
        "name": "thorchain",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v8/*: any*/),
            "concreteType": "Quote",
            "kind": "LinkedField",
            "name": "quote",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Layer1Balance",
                "kind": "LinkedField",
                "name": "expectedAssetOut",
                "plural": false,
                "selections": [
                  (v9/*: any*/),
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
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "id",
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
                "concreteType": "Fees",
                "kind": "LinkedField",
                "name": "fees",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "totalBps",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "streamingSwapBlocks",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "streamingSwapSeconds",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "totalSwapSeconds",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "inboundAddress",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "memo",
                "storageKey": null
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
    "cacheID": "d7bf7dbc97504fd80fa542b612f6ff25",
    "id": null,
    "metadata": {},
    "name": "SwapQuoteQuery",
    "operationKind": "query",
    "text": "query SwapQuoteQuery(\n  $fromAsset: AssetString!\n  $toAsset: AssetString!\n  $amount: Bigint!\n  $affiliate: [String!]\n  $affiliateBps: [Int!]\n  $destination: Address\n  $streamingInterval: Int\n  $streamingQuantity: Bigint\n) {\n  thorchain {\n    quote(fromAsset: $fromAsset, toAsset: $toAsset, amount: $amount, affiliate: $affiliate, affiliateBps: $affiliateBps, destination: $destination, streamingInterval: $streamingInterval, streamingQuantity: $streamingQuantity) {\n      expectedAssetOut {\n        amount\n      }\n      ...ActionsFragment\n      ...QuoteFragment\n      ...InputsQuoteFragment\n    }\n  }\n}\n\nfragment ActionsFragment on Quote {\n  fees {\n    totalBps\n  }\n  streamingSwapBlocks\n  streamingSwapSeconds\n  totalSwapSeconds\n  inboundAddress\n  memo\n}\n\nfragment InputsQuoteFragment on Quote {\n  expectedAssetOut {\n    amount\n    asset {\n      asset\n      metadata {\n        decimals\n      }\n      price {\n        current\n      }\n      id\n    }\n  }\n}\n\nfragment QuoteFragment on Quote {\n  expectedAssetOut {\n    amount\n  }\n  fees {\n    totalBps\n  }\n  streamingSwapBlocks\n  streamingSwapSeconds\n  totalSwapSeconds\n}\n"
  }
};
})();

(node as any).hash = "502726fcd911f683b117302d5b6cb674";

export default node;
