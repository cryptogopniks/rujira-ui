/**
 * @generated SignedSource<<efe238676defc2ebee7ec69ea1fdd9a4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PortfolioBalanceFragment$data = {
  readonly account: {
    readonly fin: {
      readonly orders: {
        readonly edges: ReadonlyArray<{
          readonly cursor: string | null | undefined;
        } | null | undefined> | null | undefined;
      } | null | undefined;
    } | null | undefined;
    readonly merge: {
      readonly accounts: ReadonlyArray<{
        readonly merged: {
          readonly amount: string;
        };
      }> | null | undefined;
    } | null | undefined;
    readonly " $fragmentSpreads": FragmentRefs<"MergePortfolioAccountFragment" | "MergingFragment">;
  } | null | undefined;
  readonly address: string;
  readonly " $fragmentSpreads": FragmentRefs<"BalancesFragment" | "ValueFragment">;
  readonly " $fragmentType": "PortfolioBalanceFragment";
};
export type PortfolioBalanceFragment$key = {
  readonly " $data"?: PortfolioBalanceFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PortfolioBalanceFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PortfolioBalanceFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "address",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "BalancesFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ValueFragment"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Account",
      "kind": "LinkedField",
      "name": "account",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "MergePortfolioAccountFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "MergingFragment"
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "FinAccount",
          "kind": "LinkedField",
          "name": "fin",
          "plural": false,
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
                      "kind": "ScalarField",
                      "name": "cursor",
                      "storageKey": null
                    }
                  ],
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
          "concreteType": "MergeStats",
          "kind": "LinkedField",
          "name": "merge",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "MergeAccount",
              "kind": "LinkedField",
              "name": "accounts",
              "plural": true,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Balance",
                  "kind": "LinkedField",
                  "name": "merged",
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
  "type": "Layer1Account",
  "abstractKey": null
};

(node as any).hash = "835ddf124e7818843a85ecc3cccbea5c";

export default node;
