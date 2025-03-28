/**
 * @generated SignedSource<<ac1033217f6d9df8eef3ccea1282ca41>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QuoteFragment$data = {
  readonly expectedAssetOut: {
    readonly amount: string;
  };
  readonly fees: {
    readonly totalBps: number;
  };
  readonly streamingSwapBlocks: number;
  readonly streamingSwapSeconds: number;
  readonly totalSwapSeconds: number;
  readonly " $fragmentType": "QuoteFragment";
};
export type QuoteFragment$key = {
  readonly " $data"?: QuoteFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"QuoteFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "QuoteFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Layer1Balance",
      "kind": "LinkedField",
      "name": "expectedAssetOut",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "amount",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
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
    }
  ],
  "type": "Quote",
  "abstractKey": null
};

(node as any).hash = "b99e22296f3b087a47a1b29219c9c22c";

export default node;
