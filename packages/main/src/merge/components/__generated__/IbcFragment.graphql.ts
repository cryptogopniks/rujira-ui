/**
 * @generated SignedSource<<c31acf3fb43895c476a2968f4e742c3b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IbcFragment$data = {
  readonly amount: string;
  readonly asset: {
    readonly asset: string;
    readonly metadata: {
      readonly decimals: number;
      readonly symbol: string;
    };
    readonly variants: {
      readonly native: {
        readonly denom: string;
      } | null | undefined;
    };
  };
  readonly " $fragmentType": "IbcFragment";
};
export type IbcFragment$key = {
  readonly " $data"?: IbcFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"IbcFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IbcFragment",
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
          "concreteType": "AssetVariants",
          "kind": "LinkedField",
          "name": "variants",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Denom",
              "kind": "LinkedField",
              "name": "native",
              "plural": false,
              "selections": [
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
      "storageKey": null
    }
  ],
  "type": "Layer1Balance",
  "abstractKey": null
};

(node as any).hash = "aecb8384687f8e091bca130c32202740";

export default node;
