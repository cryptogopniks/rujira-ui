/**
 * @generated SignedSource<<050ab7e942b52091c6e199455cbb2cae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MergingFragment$data = {
  readonly merge: {
    readonly accounts: ReadonlyArray<{
      readonly merged: {
        readonly amount: string;
        readonly asset: {
          readonly asset: string;
          readonly metadata: {
            readonly decimals: number;
            readonly symbol: string;
          };
        };
      };
      readonly rate: string;
      readonly shares: string;
      readonly size: {
        readonly amount: string;
        readonly asset: {
          readonly asset: string;
          readonly metadata: {
            readonly decimals: number;
          };
          readonly price: {
            readonly current: string | null | undefined;
          } | null | undefined;
        };
      };
    }> | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "MergingFragment";
};
export type MergingFragment$key = {
  readonly " $data"?: MergingFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MergingFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "amount",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "asset",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MergingFragment",
  "selections": [
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
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Asset",
                  "kind": "LinkedField",
                  "name": "asset",
                  "plural": false,
                  "selections": [
                    (v1/*: any*/),
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
                        (v2/*: any*/)
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
              "kind": "ScalarField",
              "name": "rate",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "shares",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "Balance",
              "kind": "LinkedField",
              "name": "size",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Asset",
                  "kind": "LinkedField",
                  "name": "asset",
                  "plural": false,
                  "selections": [
                    (v1/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "Metadata",
                      "kind": "LinkedField",
                      "name": "metadata",
                      "plural": false,
                      "selections": [
                        (v2/*: any*/)
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
  "type": "Account",
  "abstractKey": null
};
})();

(node as any).hash = "448bd8fcab65b205bbdf69631b0b5859";

export default node;
