/**
 * @generated SignedSource<<1eb5d4bb815e6db44f41d8f6cdde0985>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type mainQuery$variables = Record<PropertyKey, never>;
export type mainQuery$data = {
  readonly developer: {
    readonly " $fragmentSpreads": FragmentRefs<"ContractsFragment">;
  } | null | undefined;
};
export type mainQuery = {
  response: mainQuery$data;
  variables: mainQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "mainQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Developer",
        "kind": "LinkedField",
        "name": "developer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ContractsFragment"
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
    "name": "mainQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Developer",
        "kind": "LinkedField",
        "name": "developer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Code",
            "kind": "LinkedField",
            "name": "codes",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "creator",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "checksum",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Contract",
                "kind": "LinkedField",
                "name": "contracts",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ContractInfo",
                    "kind": "LinkedField",
                    "name": "info",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "admin",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "label",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
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
                    "kind": "ScalarField",
                    "name": "config",
                    "storageKey": null
                  },
                  (v0/*: any*/)
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
    "cacheID": "9dcaf75aa0247e9a0d46a1d2b85c7785",
    "id": null,
    "metadata": {},
    "name": "mainQuery",
    "operationKind": "query",
    "text": "query mainQuery {\n  developer {\n    ...ContractsFragment\n  }\n}\n\nfragment ContractsFragment on Developer {\n  codes {\n    id\n    creator\n    checksum\n    contracts {\n      info {\n        admin\n        label\n      }\n      address\n      config\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5e3031cd1aef55303b8e9392ecc4cd51";

export default node;
