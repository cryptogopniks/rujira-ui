/**
 * @generated SignedSource<<0b174346882310f4590f1967116baa2c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type mainSubscription$variables = {
  id: string;
};
export type mainSubscription$data = {
  readonly node: {
    readonly balances?: ReadonlyArray<{
      readonly amount: string;
    }> | null | undefined;
  } | null | undefined;
};
export type mainSubscription = {
  response: mainSubscription$data;
  variables: mainSubscription$variables;
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Layer1Account",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "mainSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/)
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
    "name": "mainSubscription",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1ecd30448f7290f5df9ae3fd8766e653",
    "id": null,
    "metadata": {},
    "name": "mainSubscription",
    "operationKind": "subscription",
    "text": "subscription mainSubscription(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on Layer1Account {\n      balances {\n        amount\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "c640b92a0f3e0343ed5a3586d3746823";

export default node;
