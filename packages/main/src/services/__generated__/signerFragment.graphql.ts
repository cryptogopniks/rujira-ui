/**
 * @generated SignedSource<<b01a3998bbe76ded85c13c3ca9ddf4a8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
export type Chain = "AVAX" | "BASE" | "BCH" | "BSC" | "BTC" | "DOGE" | "ETH" | "GAIA" | "KUJI" | "LTC" | "THOR" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type signerFragment$data = {
  readonly inboundAddresses: ReadonlyArray<{
    readonly address: string;
    readonly chain: Chain;
    readonly dustThreshold: string;
    readonly gasRate: string | null | undefined;
    readonly router: string | null | undefined;
  }>;
  readonly " $fragmentType": "signerFragment";
};
export type signerFragment$key = {
  readonly " $data"?: signerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"signerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "signerFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "InboundAddress",
      "kind": "LinkedField",
      "name": "inboundAddresses",
      "plural": true,
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
          "name": "router",
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
          "kind": "ScalarField",
          "name": "dustThreshold",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "gasRate",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Thorchain",
  "abstractKey": null
};

(node as any).hash = "2fc029d37598ee37f2e5a0bea3ccd068";

export default node;
