/**
 * @generated SignedSource<<0fc40610a44e2132f19da71ba0c2751b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type WithdrawFragment$data = {
  readonly amount: string;
  readonly " $fragmentType": "WithdrawFragment";
};
export type WithdrawFragment$key = {
  readonly " $data"?: WithdrawFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"WithdrawFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "WithdrawFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "amount",
      "storageKey": null
    }
  ],
  "type": "Layer1Balance",
  "abstractKey": null
};

(node as any).hash = "1146678c3695e7b95f9b00299afaed0f";

export default node;
