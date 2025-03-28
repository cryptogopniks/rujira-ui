/**
 * @generated SignedSource<<a1aa2fe9c46496e12729567445067dbe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SwapThorchainFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ContextFragment" | "InputsFragment">;
  readonly " $fragmentType": "SwapThorchainFragment";
};
export type SwapThorchainFragment$key = {
  readonly " $data"?: SwapThorchainFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SwapThorchainFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SwapThorchainFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "InputsFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ContextFragment"
    }
  ],
  "type": "Thorchain",
  "abstractKey": null
};

(node as any).hash = "0cb49ca5e345b62e2257d014792d2437";

export default node;
