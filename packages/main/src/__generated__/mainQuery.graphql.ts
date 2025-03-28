/**
 * @generated SignedSource<<70640daeabbd3807f4abc4c0eca0f562>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Chain = "AVAX" | "BASE" | "BCH" | "BSC" | "BTC" | "DOGE" | "ETH" | "GAIA" | "KUJI" | "LTC" | "THOR" | "%future added value";
export type mainQuery$variables = {
  ids: ReadonlyArray<string>;
};
export type mainQuery$data = {
  readonly nodes: ReadonlyArray<{
    readonly address?: string;
    readonly chain?: Chain;
    readonly id?: string;
    readonly " $fragmentSpreads": FragmentRefs<"MergeAccountFragment" | "PortfolioBalanceFragment" | "SwapAccountFragment" | "SwitchAccountFragment" | "TradeFragment" | "ValueFragment">;
  }>;
  readonly rujira: {
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
    readonly " $fragmentSpreads": FragmentRefs<"MergeFragment" | "TradeRujiraFragment">;
  } | null | undefined;
  readonly thorchain: {
    readonly pools: ReadonlyArray<{
      readonly asset: {
        readonly asset: string;
      };
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"HeaderFragment" | "PortfolioFragment" | "SwapThorchainFragment" | "signerFragment">;
  } | null | undefined;
};
export type mainQuery = {
  response: mainQuery$data;
  variables: mainQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "ids"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "ids",
    "variableName": "ids"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "chain",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "asset",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "symbol",
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
    (v6/*: any*/)
  ],
  "storageKey": null
},
v8 = [
  (v4/*: any*/),
  (v7/*: any*/)
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "amount",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "concreteType": "Metadata",
  "kind": "LinkedField",
  "name": "metadata",
  "plural": false,
  "selections": [
    (v6/*: any*/),
    (v11/*: any*/)
  ],
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "current",
  "storageKey": null
},
v14 = {
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
v15 = {
  "alias": null,
  "args": null,
  "concreteType": "AssetVariants",
  "kind": "LinkedField",
  "name": "variants",
  "plural": false,
  "selections": [
    (v14/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "Asset",
      "kind": "LinkedField",
      "name": "secured",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "AssetVariants",
          "kind": "LinkedField",
          "name": "variants",
          "plural": false,
          "selections": [
            (v14/*: any*/)
          ],
          "storageKey": null
        },
        (v2/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "concreteType": "Price",
  "kind": "LinkedField",
  "name": "price",
  "plural": false,
  "selections": [
    (v13/*: any*/)
  ],
  "storageKey": null
},
v17 = [
  (v9/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Asset",
    "kind": "LinkedField",
    "name": "asset",
    "plural": false,
    "selections": [
      (v7/*: any*/),
      (v16/*: any*/),
      (v2/*: any*/)
    ],
    "storageKey": null
  }
],
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rate",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "concreteType": "Metadata",
  "kind": "LinkedField",
  "name": "metadata",
  "plural": false,
  "selections": [
    (v11/*: any*/)
  ],
  "storageKey": null
},
v20 = [
  (v5/*: any*/),
  (v10/*: any*/),
  (v4/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Metadata",
    "kind": "LinkedField",
    "name": "metadata",
    "plural": false,
    "selections": [
      (v11/*: any*/),
      (v6/*: any*/)
    ],
    "storageKey": null
  },
  (v2/*: any*/)
],
v21 = [
  (v4/*: any*/),
  (v7/*: any*/),
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "mainQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "nodes",
        "plural": true,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "PortfolioBalanceFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "SwapAccountFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ValueFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "MergeAccountFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "SwitchAccountFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "TradeFragment"
              }
            ],
            "type": "Layer1Account",
            "abstractKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Thorchain",
        "kind": "LinkedField",
        "name": "thorchain",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "HeaderFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SwapThorchainFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "signerFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PortfolioFragment"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Pool",
            "kind": "LinkedField",
            "name": "pools",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Asset",
                "kind": "LinkedField",
                "name": "asset",
                "plural": false,
                "selections": [
                  (v5/*: any*/)
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
        "concreteType": "Rujira",
        "kind": "LinkedField",
        "name": "rujira",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MergeFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TradeRujiraFragment"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "FinPair",
            "kind": "LinkedField",
            "name": "fin",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Asset",
                "kind": "LinkedField",
                "name": "assetBase",
                "plural": false,
                "selections": (v8/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Asset",
                "kind": "LinkedField",
                "name": "assetQuote",
                "plural": false,
                "selections": (v8/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
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
    "name": "mainQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "nodes",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Layer1Balance",
                "kind": "LinkedField",
                "name": "balances",
                "plural": true,
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
                      (v5/*: any*/),
                      (v10/*: any*/),
                      (v4/*: any*/),
                      (v12/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Price",
                        "kind": "LinkedField",
                        "name": "price",
                        "plural": false,
                        "selections": [
                          (v13/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "changeDay",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v15/*: any*/),
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Account",
                "kind": "LinkedField",
                "name": "account",
                "plural": false,
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
                        "selections": (v17/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Balance",
                        "kind": "LinkedField",
                        "name": "totalSize",
                        "plural": false,
                        "selections": (v17/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "MergeAccount",
                        "kind": "LinkedField",
                        "name": "accounts",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Balance",
                            "kind": "LinkedField",
                            "name": "merged",
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
                                  (v5/*: any*/),
                                  (v12/*: any*/),
                                  (v2/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          (v18/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "shares",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Balance",
                            "kind": "LinkedField",
                            "name": "size",
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
                                  (v5/*: any*/),
                                  (v19/*: any*/),
                                  (v16/*: any*/),
                                  (v2/*: any*/)
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
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "FinAccount",
                    "kind": "LinkedField",
                    "name": "fin",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "FinOrderConnection",
                        "kind": "LinkedField",
                        "name": "orders",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "FinOrderEdge",
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
                                "concreteType": "FinOrder",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "filled",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "remaining",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "deviation",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "offer",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "pair",
                                    "storageKey": null
                                  },
                                  (v18/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "side",
                                    "storageKey": null
                                  },
                                  (v10/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "updatedAt",
                                    "storageKey": null
                                  },
                                  (v2/*: any*/)
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
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "Layer1Account",
            "abstractKey": null
          }
        ],
        "storageKey": null
      },
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
            "args": null,
            "concreteType": "Pool",
            "kind": "LinkedField",
            "name": "pools",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Asset",
                "kind": "LinkedField",
                "name": "asset",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v10/*: any*/),
                  (v5/*: any*/),
                  (v12/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "AssetVariants",
                    "kind": "LinkedField",
                    "name": "variants",
                    "plural": false,
                    "selections": [
                      (v14/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Asset",
                        "kind": "LinkedField",
                        "name": "secured",
                        "plural": false,
                        "selections": (v20/*: any*/),
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Asset",
                        "kind": "LinkedField",
                        "name": "layer1",
                        "plural": false,
                        "selections": (v20/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v2/*: any*/),
                  (v16/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "status",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "assetTorPrice",
                "storageKey": null
              },
              (v11/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Asset",
            "kind": "LinkedField",
            "name": "rune",
            "plural": false,
            "selections": [
              (v16/*: any*/),
              (v19/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "InboundAddress",
            "kind": "LinkedField",
            "name": "inboundAddresses",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "router",
                "storageKey": null
              },
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "dustThreshold",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "gasRate",
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
        "concreteType": "Rujira",
        "kind": "LinkedField",
        "name": "rujira",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MergePool",
            "kind": "LinkedField",
            "name": "merge",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Asset",
                "kind": "LinkedField",
                "name": "mergeAsset",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v12/*: any*/),
                  (v2/*: any*/),
                  (v10/*: any*/),
                  (v4/*: any*/),
                  (v15/*: any*/)
                ],
                "storageKey": null
              },
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "currentRate",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "mergeSupply",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "rujiAllocation",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "startRate",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "MergeStatus",
                "kind": "LinkedField",
                "name": "status",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "merged",
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
            "concreteType": "FinPair",
            "kind": "LinkedField",
            "name": "fin",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Asset",
                "kind": "LinkedField",
                "name": "assetBase",
                "plural": false,
                "selections": (v21/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Asset",
                "kind": "LinkedField",
                "name": "assetQuote",
                "plural": false,
                "selections": (v21/*: any*/),
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "80809671a2684d7f31b5bf222e081a75",
    "id": null,
    "metadata": {},
    "name": "mainQuery",
    "operationKind": "query",
    "text": "query mainQuery(\n  $ids: [ID!]!\n) {\n  nodes(ids: $ids) {\n    __typename\n    ... on Layer1Account {\n      id\n      address\n      chain\n      ...PortfolioBalanceFragment\n      ...SwapAccountFragment\n      ...ValueFragment\n      ...MergeAccountFragment\n      ...SwitchAccountFragment\n      ...TradeFragment\n    }\n    id\n  }\n  thorchain {\n    ...HeaderFragment\n    ...SwapThorchainFragment\n    ...signerFragment\n    ...PortfolioFragment\n    pools {\n      asset {\n        asset\n        id\n      }\n    }\n  }\n  rujira {\n    ...MergeFragment\n    ...TradeRujiraFragment\n    fin {\n      address\n      assetBase {\n        chain\n        metadata {\n          symbol\n        }\n        id\n      }\n      assetQuote {\n        chain\n        metadata {\n          symbol\n        }\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment BalancesDepositFragment on Thorchain {\n  ...DepositFragment\n  pools {\n    asset {\n      asset\n      id\n    }\n  }\n}\n\nfragment BalancesFragment on Layer1Account {\n  balances {\n    ...WithdrawFragment\n    asset {\n      asset\n      type\n      chain\n      metadata {\n        symbol\n        decimals\n      }\n      price {\n        current\n        changeDay\n      }\n      variants {\n        native {\n          denom\n        }\n      }\n      id\n    }\n    amount\n  }\n}\n\nfragment ContextFragment on Thorchain {\n  pools {\n    decimals\n    asset {\n      asset\n      metadata {\n        decimals\n        symbol\n      }\n      type\n      chain\n      variants {\n        native {\n          denom\n        }\n        secured {\n          asset\n          type\n          chain\n          metadata {\n            decimals\n            symbol\n          }\n          id\n        }\n        layer1 {\n          asset\n          type\n          chain\n          metadata {\n            decimals\n            symbol\n          }\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment ConvertFragment on Layer1Balance {\n  amount\n  asset {\n    asset\n    metadata {\n      symbol\n      decimals\n    }\n    id\n  }\n}\n\nfragment ConvertStepFragment on MergePool {\n  address\n  mergeAsset {\n    type\n    chain\n    asset\n    metadata {\n      decimals\n      symbol\n    }\n    variants {\n      native {\n        denom\n      }\n      secured {\n        variants {\n          native {\n            denom\n          }\n        }\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment DepositFragment on Thorchain {\n  pools {\n    asset {\n      chain\n      type\n      asset\n      metadata {\n        symbol\n        decimals\n      }\n      variants {\n        native {\n          denom\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment HeaderFragment on Thorchain {\n  ...DepositFragment\n}\n\nfragment IbcFragment on Layer1Balance {\n  amount\n  asset {\n    asset\n    metadata {\n      symbol\n      decimals\n    }\n    variants {\n      native {\n        denom\n      }\n    }\n    id\n  }\n}\n\nfragment InputsBalancesFragment on Layer1Account {\n  balances {\n    amount\n    asset {\n      asset\n      metadata {\n        decimals\n      }\n      price {\n        current\n      }\n      type\n      id\n    }\n  }\n}\n\nfragment InputsFragment on Thorchain {\n  rune {\n    price {\n      current\n    }\n    metadata {\n      decimals\n    }\n    id\n  }\n  pools {\n    status\n    asset {\n      asset\n      type\n      chain\n      price {\n        current\n      }\n      metadata {\n        symbol\n        decimals\n      }\n      id\n    }\n    assetTorPrice\n  }\n}\n\nfragment MergeAccountFragment on Layer1Account {\n  address\n  chain\n  balances {\n    asset {\n      metadata {\n        symbol\n      }\n      id\n    }\n    ...SwitchFragment\n    ...ConvertFragment\n    ...IbcFragment\n  }\n}\n\nfragment MergeFragment on Rujira {\n  merge {\n    address\n    mergeAsset {\n      asset\n      metadata {\n        symbol\n      }\n      id\n    }\n    ...MergePoolFragment\n    ...ConvertStepFragment\n    id\n  }\n}\n\nfragment MergePoolFragment on MergePool {\n  id\n  address\n  currentRate\n  mergeAsset {\n    asset\n    metadata {\n      symbol\n      decimals\n    }\n    id\n  }\n  mergeSupply\n  rujiAllocation\n  startRate\n  status {\n    merged\n  }\n}\n\nfragment MergePortfolioAccountFragment on Account {\n  merge {\n    depositSize {\n      amount\n      asset {\n        metadata {\n          symbol\n        }\n        price {\n          current\n        }\n        id\n      }\n    }\n    totalSize {\n      amount\n      asset {\n        metadata {\n          symbol\n        }\n        price {\n          current\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment MergingFragment on Account {\n  merge {\n    accounts {\n      merged {\n        amount\n        asset {\n          asset\n          metadata {\n            symbol\n            decimals\n          }\n          id\n        }\n      }\n      rate\n      shares\n      size {\n        amount\n        asset {\n          asset\n          metadata {\n            decimals\n          }\n          price {\n            current\n          }\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment OrdersFragment on FinAccount {\n  orders {\n    edges {\n      node {\n        filled\n        remaining\n        ...OrdersOrderFragment\n        id\n      }\n    }\n  }\n}\n\nfragment OrdersOrderFragment on FinOrder {\n  deviation\n  filled\n  offer\n  pair\n  remaining\n  rate\n  side\n  type\n  updatedAt\n}\n\nfragment PortfolioBalanceFragment on Layer1Account {\n  address\n  ...BalancesFragment\n  ...ValueFragment\n  account {\n    ...MergePortfolioAccountFragment\n    ...MergingFragment\n    fin {\n      orders {\n        edges {\n          cursor\n        }\n      }\n    }\n    merge {\n      accounts {\n        merged {\n          amount\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment PortfolioFragment on Thorchain {\n  ...BalancesDepositFragment\n}\n\nfragment SubmitBalanceFragment on Layer1Balance {\n  amount\n  asset {\n    metadata {\n      decimals\n    }\n    ...msgAssetFragment\n    id\n  }\n}\n\nfragment SwapAccountFragment on Layer1Account {\n  id\n  ...InputsBalancesFragment\n}\n\nfragment SwapThorchainFragment on Thorchain {\n  ...InputsFragment\n  ...ContextFragment\n}\n\nfragment SwitchAccountFragment on Layer1Account {\n  address\n  chain\n  balances {\n    asset {\n      metadata {\n        symbol\n      }\n      id\n    }\n    ...SwitchFragment\n    ...ConvertFragment\n    ...IbcFragment\n  }\n}\n\nfragment SwitchFragment on Layer1Balance {\n  amount\n  asset {\n    asset\n    type\n    chain\n    metadata {\n      symbol\n      decimals\n    }\n    variants {\n      native {\n        denom\n      }\n    }\n    id\n  }\n}\n\nfragment TradeFragment on Layer1Account {\n  balances {\n    asset {\n      chain\n      metadata {\n        symbol\n      }\n      id\n    }\n    ...SubmitBalanceFragment\n  }\n  account {\n    fin {\n      ...OrdersFragment\n    }\n    id\n  }\n}\n\nfragment TradeRujiraFragment on Rujira {\n  fin {\n    address\n    assetBase {\n      chain\n      metadata {\n        symbol\n      }\n      id\n    }\n    assetQuote {\n      chain\n      metadata {\n        symbol\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment ValueFragment on Layer1Account {\n  balances {\n    amount\n    asset {\n      asset\n      metadata {\n        decimals\n      }\n      price {\n        current\n      }\n      id\n    }\n  }\n}\n\nfragment WithdrawFragment on Layer1Balance {\n  amount\n}\n\nfragment msgAssetFragment on Asset {\n  type\n  chain\n  asset\n  metadata {\n    decimals\n    symbol\n  }\n  variants {\n    native {\n      denom\n    }\n    secured {\n      variants {\n        native {\n          denom\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment signerFragment on Thorchain {\n  inboundAddresses {\n    address\n    router\n    chain\n    dustThreshold\n    gasRate\n  }\n}\n"
  }
};
})();

(node as any).hash = "7ecceb22220720c0e764d5af3ccfbe1c";

export default node;
