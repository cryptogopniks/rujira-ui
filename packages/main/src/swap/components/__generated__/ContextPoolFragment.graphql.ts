/**
 * @generated SignedSource<<5478520291e766078e29dd8c67211dbf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContextPoolFragment$data = {
  readonly asset: {
    readonly asset: string;
    readonly metadata: {
      readonly decimals: number;
      readonly symbol: string;
    };
  };
  readonly " $fragmentType": "ContextPoolFragment";
};
export type ContextPoolFragment$key = {
  readonly " $data"?: ContextPoolFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContextPoolFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContextPoolFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Layer1Asset",
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
              "name": "decimals",
              "storageKey": null
            },
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
    }
  ],
  "type": "Pool",
  "abstractKey": null
};

(node as any).hash = "0c4f236acc36273ea0c5f29245e6813d";

export default node;
