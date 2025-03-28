/**
 * @generated SignedSource<<97ba04a093153ecddd8e2baec76079ba>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PortfolioNativeAccountFragment$data = {
  readonly address: string | null | undefined;
  readonly balances: ReadonlyArray<{
    readonly amount: string | null | undefined;
    readonly asset: string | null | undefined;
  } | null | undefined> | null | undefined;
  readonly " $fragmentType": "PortfolioNativeAccountFragment";
};
export type PortfolioNativeAccountFragment$key = {
  readonly " $data"?: PortfolioNativeAccountFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PortfolioNativeAccountFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PortfolioNativeAccountFragment",
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
  "type": "NativeAccount",
  "abstractKey": null
};

(node as any).hash = "e2f7892ebc547224fd76cc85f1183e5b";

export default node;
