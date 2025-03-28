/**
 * @generated SignedSource<<16b69ac96057b4fecfb5da3efbb133bb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type AssetType = "LAYER_1" | "NATIVE" | "SECURED" | "%future added value";
export type Chain = "AVAX" | "BASE" | "BCH" | "BSC" | "BTC" | "DOGE" | "ETH" | "GAIA" | "KUJI" | "LTC" | "THOR" | "%future added value";
export type PoolStatus = "AVAILABLE" | "STAGED" | "SUSPENDED" | "UNKNOWN" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type InputsFragment$data = {
  readonly pools: ReadonlyArray<{
    readonly asset: {
      readonly asset: string;
      readonly chain: Chain;
      readonly metadata: {
        readonly decimals: number;
        readonly symbol: string;
      };
      readonly price: {
        readonly current: string | null | undefined;
      } | null | undefined;
      readonly type: AssetType;
    };
    readonly assetTorPrice: string;
    readonly status: PoolStatus;
  }>;
  readonly rune: {
    readonly metadata: {
      readonly decimals: number;
    };
    readonly price: {
      readonly current: string | null | undefined;
    } | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "InputsFragment";
};
export type InputsFragment$key = {
  readonly " $data"?: InputsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"InputsFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
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
v1 = {
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
  "name": "InputsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Asset",
      "kind": "LinkedField",
      "name": "rune",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Metadata",
          "kind": "LinkedField",
          "name": "metadata",
          "plural": false,
          "selections": [
            (v1/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Pool",
      "kind": "LinkedField",
      "name": "pools",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "status",
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
              "kind": "ScalarField",
              "name": "type",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "chain",
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
                (v1/*: any*/)
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
          "name": "assetTorPrice",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Thorchain",
  "abstractKey": null
};
})();

(node as any).hash = "9ef9f54069d841a33bb3bd34c25c5fab";

export default node;
