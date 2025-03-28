/**
 * @generated SignedSource<<7c9b834bbdc278501b7cbaa8c25a5665>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MergeFragment$data = {
  readonly merge: ReadonlyArray<{
    readonly address: string;
    readonly mergeAsset: {
      readonly asset: string;
      readonly metadata: {
        readonly symbol: string;
      };
    };
    readonly " $fragmentSpreads": FragmentRefs<"ConvertStepFragment" | "MergePoolFragment">;
  }>;
  readonly " $fragmentType": "MergeFragment";
};
export type MergeFragment$key = {
  readonly " $data"?: MergeFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MergeFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MergeFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "MergePool",
      "kind": "LinkedField",
      "name": "merge",
      "plural": true,
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
          "name": "mergeAsset",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "asset",
              "storageKey": null
            },
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
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "MergePoolFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ConvertStepFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Rujira",
  "abstractKey": null
};

(node as any).hash = "24fc4f3fe0ed591a7304ef664bac97b2";

export default node;
