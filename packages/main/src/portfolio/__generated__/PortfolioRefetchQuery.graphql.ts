/**
 * @generated SignedSource<<5834cc7a4b7b7266135fafa0003626be>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PortfolioRefetchQuery$variables = {
  bch?: ReadonlyArray<string> | null | undefined;
  bsc?: ReadonlyArray<string> | null | undefined;
  btc?: ReadonlyArray<string> | null | undefined;
  doge?: ReadonlyArray<string> | null | undefined;
  evm?: ReadonlyArray<string> | null | undefined;
  gaia?: ReadonlyArray<string> | null | undefined;
  kuji?: ReadonlyArray<string> | null | undefined;
  ltc?: ReadonlyArray<string> | null | undefined;
  thor?: ReadonlyArray<string> | null | undefined;
};
export type PortfolioRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"PortfolioFragment">;
};
export type PortfolioRefetchQuery = {
  response: PortfolioRefetchQuery$data;
  variables: PortfolioRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": ([]/*: any*/),
    "kind": "LocalArgument",
    "name": "bch"
  },
  {
    "defaultValue": ([]/*: any*/),
    "kind": "LocalArgument",
    "name": "bsc"
  },
  {
    "defaultValue": ([]/*: any*/),
    "kind": "LocalArgument",
    "name": "btc"
  },
  {
    "defaultValue": ([]/*: any*/),
    "kind": "LocalArgument",
    "name": "doge"
  },
  {
    "defaultValue": ([]/*: any*/),
    "kind": "LocalArgument",
    "name": "evm"
  },
  {
    "defaultValue": ([]/*: any*/),
    "kind": "LocalArgument",
    "name": "gaia"
  },
  {
    "defaultValue": ([]/*: any*/),
    "kind": "LocalArgument",
    "name": "kuji"
  },
  {
    "defaultValue": ([]/*: any*/),
    "kind": "LocalArgument",
    "name": "ltc"
  },
  {
    "defaultValue": ([]/*: any*/),
    "kind": "LocalArgument",
    "name": "thor"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "amount",
  "storageKey": null
},
v2 = {
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
v3 = {
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
    },
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
v4 = [
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
    "concreteType": "NativeBalance",
    "kind": "LinkedField",
    "name": "balances",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "asset",
        "storageKey": null
      },
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
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
        "concreteType": "Balance",
        "kind": "LinkedField",
        "name": "balances",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "denom",
            "storageKey": null
          },
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v5 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "addresses",
        "variableName": "evm"
      }
    ],
    "concreteType": "NativeAccount",
    "kind": "LinkedField",
    "name": "accounts",
    "plural": true,
    "selections": (v4/*: any*/),
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PortfolioRefetchQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "bch",
            "variableName": "bch"
          },
          {
            "kind": "Variable",
            "name": "bsc",
            "variableName": "bsc"
          },
          {
            "kind": "Variable",
            "name": "btc",
            "variableName": "btc"
          },
          {
            "kind": "Variable",
            "name": "doge",
            "variableName": "doge"
          },
          {
            "kind": "Variable",
            "name": "evm",
            "variableName": "evm"
          },
          {
            "kind": "Variable",
            "name": "gaia",
            "variableName": "gaia"
          },
          {
            "kind": "Variable",
            "name": "kuji",
            "variableName": "kuji"
          },
          {
            "kind": "Variable",
            "name": "ltc",
            "variableName": "ltc"
          },
          {
            "kind": "Variable",
            "name": "thor",
            "variableName": "thor"
          }
        ],
        "kind": "FragmentSpread",
        "name": "PortfolioFragment"
      }
    ],
    "type": "RootQueryType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PortfolioRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Chains",
        "kind": "LinkedField",
        "name": "chains",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Chain",
            "kind": "LinkedField",
            "name": "avax",
            "plural": false,
            "selections": (v5/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Chain",
            "kind": "LinkedField",
            "name": "bch",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "addresses",
                    "variableName": "bch"
                  }
                ],
                "concreteType": "NativeAccount",
                "kind": "LinkedField",
                "name": "accounts",
                "plural": true,
                "selections": (v4/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Chain",
            "kind": "LinkedField",
            "name": "btc",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "addresses",
                    "variableName": "btc"
                  }
                ],
                "concreteType": "NativeAccount",
                "kind": "LinkedField",
                "name": "accounts",
                "plural": true,
                "selections": (v4/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Chain",
            "kind": "LinkedField",
            "name": "bsc",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "addresses",
                    "variableName": "bsc"
                  }
                ],
                "concreteType": "NativeAccount",
                "kind": "LinkedField",
                "name": "accounts",
                "plural": true,
                "selections": (v4/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Chain",
            "kind": "LinkedField",
            "name": "doge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "addresses",
                    "variableName": "doge"
                  }
                ],
                "concreteType": "NativeAccount",
                "kind": "LinkedField",
                "name": "accounts",
                "plural": true,
                "selections": (v4/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Chain",
            "kind": "LinkedField",
            "name": "eth",
            "plural": false,
            "selections": (v5/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Chain",
            "kind": "LinkedField",
            "name": "gaia",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "addresses",
                    "variableName": "gaia"
                  }
                ],
                "concreteType": "NativeAccount",
                "kind": "LinkedField",
                "name": "accounts",
                "plural": true,
                "selections": (v4/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Chain",
            "kind": "LinkedField",
            "name": "kuji",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "addresses",
                    "variableName": "kuji"
                  }
                ],
                "concreteType": "NativeAccount",
                "kind": "LinkedField",
                "name": "accounts",
                "plural": true,
                "selections": (v4/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Chain",
            "kind": "LinkedField",
            "name": "ltc",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "addresses",
                    "variableName": "ltc"
                  }
                ],
                "concreteType": "NativeAccount",
                "kind": "LinkedField",
                "name": "accounts",
                "plural": true,
                "selections": (v4/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Chain",
            "kind": "LinkedField",
            "name": "thor",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "addresses",
                    "variableName": "thor"
                  }
                ],
                "concreteType": "NativeAccount",
                "kind": "LinkedField",
                "name": "accounts",
                "plural": true,
                "selections": (v4/*: any*/),
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
    "cacheID": "a95d393680c3421a13a08ab73e295fb4",
    "id": null,
    "metadata": {},
    "name": "PortfolioRefetchQuery",
    "operationKind": "query",
    "text": "query PortfolioRefetchQuery(\n  $bch: [String!] = []\n  $bsc: [String!] = []\n  $btc: [String!] = []\n  $doge: [String!] = []\n  $evm: [String!] = []\n  $gaia: [String!] = []\n  $kuji: [String!] = []\n  $ltc: [String!] = []\n  $thor: [String!] = []\n) {\n  ...PortfolioFragment_1yKMD3\n}\n\nfragment BalancesFragment on NativeAccount {\n  balances {\n    asset\n    amount\n    metadata {\n      symbol\n      decimals\n    }\n    price {\n      current\n      changeDay\n    }\n  }\n  account {\n    balances {\n      amount\n      denom\n      metadata {\n        symbol\n        decimals\n      }\n      price {\n        current\n        changeDay\n      }\n    }\n  }\n}\n\nfragment PortfolioAccountFragment on NativeAccount {\n  address\n  ...BalancesFragment\n  ...ValueFragment\n}\n\nfragment PortfolioFragment_1yKMD3 on RootQueryType {\n  chains {\n    avax {\n      accounts(addresses: $evm) {\n        address\n        ...PortfolioAccountFragment\n      }\n    }\n    bch {\n      accounts(addresses: $bch) {\n        address\n        ...PortfolioAccountFragment\n      }\n    }\n    btc {\n      accounts(addresses: $btc) {\n        address\n        ...PortfolioAccountFragment\n      }\n    }\n    bsc {\n      accounts(addresses: $bsc) {\n        address\n        ...PortfolioAccountFragment\n      }\n    }\n    doge {\n      accounts(addresses: $doge) {\n        address\n        ...PortfolioAccountFragment\n      }\n    }\n    eth {\n      accounts(addresses: $evm) {\n        address\n        ...PortfolioAccountFragment\n      }\n    }\n    gaia {\n      accounts(addresses: $gaia) {\n        address\n        ...PortfolioAccountFragment\n      }\n    }\n    kuji {\n      accounts(addresses: $kuji) {\n        address\n        ...PortfolioAccountFragment\n      }\n    }\n    ltc {\n      accounts(addresses: $ltc) {\n        address\n        ...PortfolioAccountFragment\n      }\n    }\n    thor {\n      accounts(addresses: $thor) {\n        address\n        ...PortfolioAccountFragment\n      }\n    }\n  }\n}\n\nfragment ValueFragment on NativeAccount {\n  balances {\n    amount\n    metadata {\n      decimals\n    }\n    price {\n      current\n    }\n  }\n  account {\n    balances {\n      amount\n      metadata {\n        decimals\n      }\n      price {\n        current\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "90bd6e7033d26a0629022947f7ee1764";

export default node;
