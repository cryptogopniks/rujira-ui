/**
 * @generated SignedSource<<565f41ebfb848a316d3a666cc37efd56>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PortfolioFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"BalancesDepositFragment">;
  readonly " $fragmentType": "PortfolioFragment";
};
export type PortfolioFragment$key = {
  readonly " $data"?: PortfolioFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PortfolioFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PortfolioFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BalancesDepositFragment"
    }
  ],
  "type": "Thorchain",
  "abstractKey": null
};

(node as any).hash = "fc20536f66b1516731a0f294df9425a2";

export default node;
