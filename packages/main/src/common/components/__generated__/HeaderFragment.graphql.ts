/**
 * @generated SignedSource<<63f421193ff538dbec8ffe3b99349279>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HeaderFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"DepositFragment">;
  readonly " $fragmentType": "HeaderFragment";
};
export type HeaderFragment$key = {
  readonly " $data"?: HeaderFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HeaderFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HeaderFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DepositFragment"
    }
  ],
  "type": "Thorchain",
  "abstractKey": null
};

(node as any).hash = "dd683753d7ed8afc0e25d6dc4677c3d9";

export default node;
