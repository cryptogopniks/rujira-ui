/**
 * @generated SignedSource<<199d11ee02dbae2eff39770ec41b0829>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BalancesAccountFragment$data = {
  readonly account: {
    readonly balances: ReadonlyArray<{
      readonly amount: bigint;
      readonly denom: string;
    }>;
  } | null | undefined;
  readonly balances: ReadonlyArray<{
    readonly amount: bigint;
    readonly asset: string;
    readonly metadata: {
      readonly decimals: number;
      readonly symbol: string;
    };
    readonly price: {
      readonly changeDay: number | null | undefined;
      readonly current: bigint | null | undefined;
    } | null | undefined;
  }>;
  readonly " $fragmentType": "BalancesAccountFragment";
};
export type BalancesAccountFragment$key = {
  readonly " $data"?: BalancesAccountFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"BalancesAccountFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "amount",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BalancesAccountFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "NativeBalance",
      "kind": "LinkedField",
      "name": "balances",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "asset",
          "storageKey": null
        },
        (v0/*: any*/),
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
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "changeDay",
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
      "concreteType": "Account",
      "kind": "LinkedField",
      "name": "account",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Balance",
          "kind": "LinkedField",
          "name": "balances",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "denom",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "NativeAccount",
  "abstractKey": null
};
})();

(node as any).hash = "e5130e79e109cef9557564663e595a61";

export default node;
