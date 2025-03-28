/**
 * @generated SignedSource<<f594b831091d1f3e89abc1cff8603725>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SwapAccountFragment$data = {
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"InputsBalancesFragment">;
  readonly " $fragmentType": "SwapAccountFragment";
};
export type SwapAccountFragment$key = {
  readonly " $data"?: SwapAccountFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SwapAccountFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SwapAccountFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "InputsBalancesFragment"
    }
  ],
  "type": "Layer1Account",
  "abstractKey": null
};

(node as any).hash = "4039908a694e855cc0d007a135deda5f";

export default node;
