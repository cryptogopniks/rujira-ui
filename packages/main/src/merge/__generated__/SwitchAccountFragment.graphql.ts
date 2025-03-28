/**
 * @generated SignedSource<<c41b084f237e6d5c76b46276ea8825c9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type Chain = "AVAX" | "BASE" | "BCH" | "BSC" | "BTC" | "DOGE" | "ETH" | "GAIA" | "KUJI" | "LTC" | "THOR" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type SwitchAccountFragment$data = {
  readonly address: string;
  readonly balances: ReadonlyArray<{
    readonly asset: {
      readonly metadata: {
        readonly symbol: string;
      };
    };
    readonly " $fragmentSpreads": FragmentRefs<"ConvertFragment" | "IbcFragment" | "SwitchFragment">;
  }> | null | undefined;
  readonly chain: Chain;
  readonly " $fragmentType": "SwitchAccountFragment";
};
export type SwitchAccountFragment$key = {
  readonly " $data"?: SwitchAccountFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SwitchAccountFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SwitchAccountFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "address",
      "storageKey": null
    },
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
          "name": "SwitchFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ConvertFragment"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "IbcFragment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Layer1Account",
  "abstractKey": null
};

(node as any).hash = "d34bfa6152432f89f1a580e4e54d7900";

export default node;
