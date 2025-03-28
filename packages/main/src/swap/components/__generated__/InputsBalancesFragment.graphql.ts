/**
 * @generated SignedSource<<e15feca504b2ed3f6d2f8efba20801c1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type AssetType = "LAYER_1" | "NATIVE" | "SECURED" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type InputsBalancesFragment$data = {
  readonly balances: ReadonlyArray<{
    readonly amount: string;
    readonly asset: {
      readonly asset: string;
      readonly metadata: {
        readonly decimals: number;
      };
      readonly price: {
        readonly current: string | null | undefined;
      } | null | undefined;
      readonly type: AssetType;
    };
  }> | null | undefined;
  readonly " $fragmentType": "InputsBalancesFragment";
};
export type InputsBalancesFragment$key = {
  readonly " $data"?: InputsBalancesFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"InputsBalancesFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InputsBalancesFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Layer1Balance",
      "kind": "LinkedField",
      "name": "balances",
      "plural": true,
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
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Price",
              "kind": "LinkedField",
              "name": "price",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "current",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "type",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Layer1Account",
  "abstractKey": null
};

(node as any).hash = "8a6a77562fda53d1652d6fcc052fd213";

export default node;
