/**
 * @generated SignedSource<<51a9b4becfc0878aae309bb7bad6ddbc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SubmitFragment$data = {
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
  readonly " $fragmentType": "SubmitFragment";
};
export type SubmitFragment$key = {
  readonly " $data"?: SubmitFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SubmitFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
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
        "name": "symbol",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SubmitFragment",
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
      "args": null,
      "concreteType": "Asset",
      "kind": "LinkedField",
      "name": "assetBase",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Asset",
      "kind": "LinkedField",
      "name": "assetQuote",
      "plural": false,
      "selections": (v0/*: any*/),
      "storageKey": null
    }
  ],
  "type": "FinPair",
  "abstractKey": null
};
})();

(node as any).hash = "5a26293b9b9f27b840ee019f0aea482e";

export default node;
