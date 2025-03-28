/**
 * @generated SignedSource<<ad9179f57e2136f9cd3373986bbd1861>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrdersOrderFragment$data = {
  readonly deviation: string | null | undefined;
  readonly filled: string;
  readonly offer: string;
  readonly pair: string;
  readonly rate: string;
  readonly remaining: string;
  readonly side: string;
  readonly type: string;
  readonly updatedAt: any;
  readonly " $fragmentType": "OrdersOrderFragment";
};
export type OrdersOrderFragment$key = {
  readonly " $data"?: OrdersOrderFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"OrdersOrderFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OrdersOrderFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "deviation",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "filled",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "offer",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "pair",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "remaining",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rate",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "side",
      "storageKey": null
    },
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
      "name": "updatedAt",
      "storageKey": null
    }
  ],
  "type": "FinOrder",
  "abstractKey": null
};

(node as any).hash = "44bf6ed48f0eceff4d5ff753fe86bac4";

export default node;
