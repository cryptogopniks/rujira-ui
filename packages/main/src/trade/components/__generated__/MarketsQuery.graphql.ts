/**
 * @generated SignedSource<<933ef8d59e7cddefd2396c52dcf1c8a5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MarketsQuery$variables = Record<PropertyKey, never>;
export type MarketsQuery$data = {
  readonly rujira: {
    readonly fin: ReadonlyArray<{
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
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"MarketsItemFragment">;
    }>;
  } | null | undefined;
};
export type MarketsQuery = {
  response: MarketsQuery$data;
  variables: MarketsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "symbol",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Metadata",
    "kind": "LinkedField",
    "name": "metadata",
    "plural": false,
    "selections": [
      (v2/*: any*/)
    ],
    "storageKey": null
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "asset",
  "storageKey": null
},
v6 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Metadata",
    "kind": "LinkedField",
    "name": "metadata",
    "plural": false,
    "selections": [
      (v2/*: any*/),
      (v4/*: any*/)
    ],
    "storageKey": null
  },
  (v0/*: any*/),
  (v5/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "chain",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MarketsQuery",
    "selections": [
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
            "concreteType": "FinPair",
            "kind": "LinkedField",
            "name": "fin",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Asset",
                "kind": "LinkedField",
                "name": "assetBase",
                "plural": false,
                "selections": (v3/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Asset",
                "kind": "LinkedField",
                "name": "assetQuote",
                "plural": false,
                "selections": (v3/*: any*/),
                "storageKey": null
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "MarketsItemFragment"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MarketsQuery",
    "selections": [
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
            "concreteType": "FinPair",
            "kind": "LinkedField",
            "name": "fin",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Asset",
                "kind": "LinkedField",
                "name": "assetBase",
                "plural": false,
                "selections": (v6/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Asset",
                "kind": "LinkedField",
                "name": "assetQuote",
                "plural": false,
                "selections": (v6/*: any*/),
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
                          (v5/*: any*/),
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
                          },
                          (v0/*: any*/)
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
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0b8745edb8f1832c2bb3342448889ee4",
    "id": null,
    "metadata": {},
    "name": "MarketsQuery",
    "operationKind": "query",
    "text": "query MarketsQuery {\n  rujira {\n    fin {\n      id\n      address\n      assetBase {\n        metadata {\n          symbol\n        }\n        id\n      }\n      assetQuote {\n        metadata {\n          symbol\n        }\n        id\n      }\n      ...MarketsItemFragment\n    }\n  }\n}\n\nfragment MarketsItemFragment on FinPair {\n  id\n  address\n  assetBase {\n    asset\n    chain\n    metadata {\n      symbol\n      decimals\n    }\n    id\n  }\n  assetQuote {\n    asset\n    chain\n    metadata {\n      symbol\n      decimals\n    }\n    id\n  }\n  summary {\n    last\n    change\n    volume {\n      asset {\n        asset\n        metadata {\n          decimals\n        }\n        id\n      }\n      amount\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "19432327344cb21416cf5b1d2bfee049";

export default node;
