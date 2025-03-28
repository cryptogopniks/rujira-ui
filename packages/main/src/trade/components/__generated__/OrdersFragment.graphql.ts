/**
 * @generated SignedSource<<3aaae00c8bc7beb84f3041c41b6b4a48>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrdersFragment$data = {
  readonly orders: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly filled: string;
        readonly remaining: string;
        readonly " $fragmentSpreads": FragmentRefs<"OrdersOrderFragment">;
      } | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "OrdersFragment";
};
export type OrdersFragment$key = {
  readonly " $data"?: OrdersFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"OrdersFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OrdersFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "FinOrderConnection",
      "kind": "LinkedField",
      "name": "orders",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "FinOrderEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "FinOrder",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
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
                  "name": "remaining",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "OrdersOrderFragment"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "FinAccount",
  "abstractKey": null
};

(node as any).hash = "7e568a7dcc81f23c2577dcd21e9cc838";

export default node;
