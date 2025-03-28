/**
 * @generated SignedSource<<6fbeff69cbf5a6fcf5a0e434de06bfe4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MergePoolFragment$data = {
  readonly address: string;
  readonly currentRate: string;
  readonly id: string;
  readonly mergeAsset: {
    readonly asset: string;
    readonly metadata: {
      readonly decimals: number;
      readonly symbol: string;
    };
  };
  readonly mergeSupply: string;
  readonly rujiAllocation: string;
  readonly startRate: string;
  readonly status: {
    readonly merged: string;
  } | null | undefined;
  readonly " $fragmentType": "MergePoolFragment";
};
export type MergePoolFragment$key = {
  readonly " $data"?: MergePoolFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MergePoolFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MergePoolFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
      "kind": "ScalarField",
      "name": "currentRate",
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
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "decimals",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "mergeSupply",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rujiAllocation",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "startRate",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "MergeStatus",
      "kind": "LinkedField",
      "name": "status",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "merged",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "MergePool",
  "abstractKey": null
};

(node as any).hash = "c28e221d0c3944a6f6d1430c185bd32b";

export default node;
