/**
 * @generated SignedSource<<f8e37d671021e8eb54b203f1f61431dd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BookSubscription$variables = {
  id: string;
};
export type BookSubscription$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"BookSubFragment">;
  } | null | undefined;
};
export type BookSubscription = {
  response: BookSubscription$data;
  variables: BookSubscription$variables;
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
v2 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "value",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "price",
    "storageKey": null
  },
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
    "name": "BookSubscription",
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
            "kind": "InlineFragment",
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "BookSubFragment"
              }
            ],
            "type": "FinBook",
            "abstractKey": null
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
    "name": "BookSubscription",
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "FinBookEntry",
                "kind": "LinkedField",
                "name": "bids",
                "plural": true,
                "selections": (v2/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "FinBookEntry",
                "kind": "LinkedField",
                "name": "asks",
                "plural": true,
                "selections": (v2/*: any*/),
                "storageKey": null
              }
            ],
            "type": "FinBook",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "676e9877e7759de5adb26c4c2af8d4df",
    "id": null,
    "metadata": {},
    "name": "BookSubscription",
    "operationKind": "subscription",
    "text": "subscription BookSubscription(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on FinBook {\n      ...BookSubFragment\n    }\n    id\n  }\n}\n\nfragment BookEntryFragment on FinBookEntry {\n  price\n  side\n  total\n  value\n}\n\nfragment BookSubFragment on FinBook {\n  id\n  bids {\n    value\n    price\n    total\n    ...BookEntryFragment\n  }\n  asks {\n    value\n    price\n    total\n    ...BookEntryFragment\n  }\n}\n"
  }
};
})();

(node as any).hash = "dc02b2f99da8f65c843b1777fa2c3de0";

export default node;
