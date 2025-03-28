/**
 * @generated SignedSource<<f74ccd1597405503f3b46a08237c2ec5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BookSubFragment$data = {
  readonly asks: ReadonlyArray<{
    readonly price: string;
    readonly total: string;
    readonly value: string;
    readonly " $fragmentSpreads": FragmentRefs<"BookEntryFragment">;
  }>;
  readonly bids: ReadonlyArray<{
    readonly price: string;
    readonly total: string;
    readonly value: string;
    readonly " $fragmentSpreads": FragmentRefs<"BookEntryFragment">;
  }>;
  readonly id: string;
  readonly " $fragmentType": "BookSubFragment";
};
export type BookSubFragment$key = {
  readonly " $data"?: BookSubFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BookSubFragment">;
};

const node: ReaderFragment = (function(){
var v0 = [
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
    "args": null,
    "kind": "FragmentSpread",
    "name": "BookEntryFragment"
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BookSubFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "FinBookEntry",
      "kind": "LinkedField",
      "name": "bids",
      "plural": true,
      "selections": (v0/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "FinBookEntry",
      "kind": "LinkedField",
      "name": "asks",
      "plural": true,
      "selections": (v0/*: any*/),
      "storageKey": null
    }
  ],
  "type": "FinBook",
  "abstractKey": null
};
})();

(node as any).hash = "113323172d1b60c6e89474d1600227d3";

export default node;
