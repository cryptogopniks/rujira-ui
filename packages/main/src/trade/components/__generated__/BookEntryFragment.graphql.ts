/**
 * @generated SignedSource<<a40f598d34449f8f6fa901ac250f195a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BookEntryFragment$data = {
  readonly price: string;
  readonly side: string;
  readonly total: string;
  readonly value: string;
  readonly " $fragmentType": "BookEntryFragment";
};
export type BookEntryFragment$key = {
  readonly " $data"?: BookEntryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BookEntryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BookEntryFragment",
  "selections": [
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
      "name": "side",
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
      "name": "value",
      "storageKey": null
    }
  ],
  "type": "FinBookEntry",
  "abstractKey": null
};

(node as any).hash = "f2ede65c06664e8f284357c42b19cf9a";

export default node;
