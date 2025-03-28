/**
 * @generated SignedSource<<e94a4c5f3a46da3271bc072827d4d194>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ActionsFragment$data = {
  readonly fees: {
    readonly totalBps: number;
  };
  readonly inboundAddress: string;
  readonly memo: string;
  readonly streamingSwapBlocks: number;
  readonly streamingSwapSeconds: number;
  readonly totalSwapSeconds: number;
  readonly " $fragmentType": "ActionsFragment";
};
export type ActionsFragment$key = {
  readonly " $data"?: ActionsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ActionsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ActionsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Fees",
      "kind": "LinkedField",
      "name": "fees",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalBps",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "streamingSwapBlocks",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "streamingSwapSeconds",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalSwapSeconds",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "inboundAddress",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "memo",
      "storageKey": null
    }
  ],
  "type": "Quote",
  "abstractKey": null
};

(node as any).hash = "d5f69534e9d3d7c4bd4fbea60c4b722a";

export default node;
