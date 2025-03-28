/**
 * @generated SignedSource<<76e732ef083c02183d1b3ea43b70048e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type InputsQuoteFragment$data = {
  readonly expectedAssetOut: {
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
  readonly " $fragmentType": "InputsQuoteFragment";
};
export type InputsQuoteFragment$key = {
  readonly " $data"?: InputsQuoteFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"InputsQuoteFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "InputsQuoteFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Layer1Balance",
      "kind": "LinkedField",
      "name": "expectedAssetOut",
      "plural": false,
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
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Quote",
  "abstractKey": null
};

(node as any).hash = "edf0575e9d4b6442b277f08c1b5a2137";

export default node;
