/**
 * @generated SignedSource<<9e2638856a881ad707043e339a4a46b9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BalancesDepositFragment$data = {
  readonly pools: ReadonlyArray<{
    readonly asset: {
      readonly asset: string;
    };
  }>;
  readonly " $fragmentSpreads": FragmentRefs<"DepositFragment">;
  readonly " $fragmentType": "BalancesDepositFragment";
};
export type BalancesDepositFragment$key = {
  readonly " $data"?: BalancesDepositFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BalancesDepositFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BalancesDepositFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DepositFragment"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Pool",
      "kind": "LinkedField",
      "name": "pools",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Asset",
          "kind": "LinkedField",
          "name": "asset",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "asset",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Thorchain",
  "abstractKey": null
};

(node as any).hash = "3179b31c3fa79a11ce4b642d5136390f";

export default node;
