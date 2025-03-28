/**
 * @generated SignedSource<<f730f43b4c418929d726f6e1bfbe88f7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SwapAccountFragmentRefreshQuery$variables = {
  id: string;
};
export type SwapAccountFragmentRefreshQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"SwapAccountFragment">;
  } | null | undefined;
};
export type SwapAccountFragmentRefreshQuery = {
  response: SwapAccountFragmentRefreshQuery$data;
  variables: SwapAccountFragmentRefreshQuery$variables;
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
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SwapAccountFragmentRefreshQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SwapAccountFragment"
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
    "name": "SwapAccountFragmentRefreshQuery",
    "selections": [
      {
        "alias": null,
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
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Layer1Balance",
                "kind": "LinkedField",
                "name": "balances",
                "plural": true,
                "selections": [
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
                        "name": "type",
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
            "type": "Layer1Account",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1dede00b0a54a63cf4aae9adda083cbf",
    "id": null,
    "metadata": {},
    "name": "SwapAccountFragmentRefreshQuery",
    "operationKind": "query",
    "text": "query SwapAccountFragmentRefreshQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...SwapAccountFragment\n    id\n  }\n}\n\nfragment InputsBalancesFragment on Layer1Account {\n  balances {\n    amount\n    asset {\n      asset\n      metadata {\n        decimals\n      }\n      price {\n        current\n      }\n      type\n      id\n    }\n  }\n}\n\nfragment SwapAccountFragment on Layer1Account {\n  id\n  ...InputsBalancesFragment\n}\n"
  }
};
})();

(node as any).hash = "8f377cd37cbffa32c7651c58ebc8a3e4";

export default node;
