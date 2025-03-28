/**
 * @generated SignedSource<<a7e6ec1f4a069942437126c4bb471618>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SubmitBalanceFragment$data = {
  readonly amount: string;
  readonly asset: {
    readonly metadata: {
      readonly decimals: number;
    };
    readonly " $fragmentSpreads": FragmentRefs<"msgAssetFragment">;
  };
  readonly " $fragmentType": "SubmitBalanceFragment";
};
export type SubmitBalanceFragment$key = {
  readonly " $data"?: SubmitBalanceFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SubmitBalanceFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SubmitBalanceFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "amount",
      "storageKey": null
    },
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
          "concreteType": "Metadata",
          "kind": "LinkedField",
          "name": "metadata",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "decimals",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "msgAssetFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Layer1Balance",
  "abstractKey": null
};

(node as any).hash = "338e377589d4d0919a1b79ccce0f8105";

export default node;
