/**
 * @generated SignedSource<<8408a632bfd34c7e817c2773547067ee>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HistoryItemFragment$data = {
  readonly baseAmount: string;
  readonly price: string;
  readonly quoteAmount: string;
  readonly timestamp: any;
  readonly type: string;
  readonly " $fragmentType": "HistoryItemFragment";
};
export type HistoryItemFragment$key = {
  readonly " $data"?: HistoryItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"HistoryItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HistoryItemFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "quoteAmount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "baseAmount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "price",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "timestamp",
      "storageKey": null
    }
  ],
  "type": "FinTrade",
  "abstractKey": null
};

(node as any).hash = "4d1daf6bf5a62309e0dccaf2eafa83d6";

export default node;
