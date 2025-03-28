/**
 * @generated SignedSource<<2edca1025bb012e274112e30bb8d88e5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type Chain = "AVAX" | "BASE" | "BCH" | "BSC" | "BTC" | "DOGE" | "ETH" | "GAIA" | "KUJI" | "LTC" | "THOR" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type TradeFragment$data = {
  readonly account: {
    readonly fin: {
      readonly " $fragmentSpreads": FragmentRefs<"OrdersFragment">;
    } | null | undefined;
  } | null | undefined;
  readonly balances: ReadonlyArray<{
    readonly asset: {
      readonly chain: Chain;
      readonly metadata: {
        readonly symbol: string;
      };
    };
    readonly " $fragmentSpreads": FragmentRefs<"SubmitBalanceFragment">;
  }> | null | undefined;
  readonly " $fragmentType": "TradeFragment";
};
export type TradeFragment$key = {
  readonly " $data"?: TradeFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TradeFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TradeFragment",
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
          "concreteType": "Asset",
          "kind": "LinkedField",
          "name": "asset",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "chain",
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
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SubmitBalanceFragment"
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
          "concreteType": "FinAccount",
          "kind": "LinkedField",
          "name": "fin",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "OrdersFragment"
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

(node as any).hash = "f0cb28ad6fadd78119fb29392472cd6c";

export default node;
