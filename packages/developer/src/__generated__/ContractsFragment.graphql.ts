/**
 * @generated SignedSource<<0e65d16e7a152dde88c71b4fe3d306ad>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ContractsFragment$data = {
  readonly codes: ReadonlyArray<{
    readonly checksum: string;
    readonly contracts: ReadonlyArray<{
      readonly address: string | null | undefined;
      readonly config: string | null | undefined;
      readonly info: {
        readonly admin: string | null | undefined;
        readonly label: string;
      } | null | undefined;
    }>;
    readonly creator: string;
    readonly id: string;
  }>;
  readonly " $fragmentType": "ContractsFragment";
};
export type ContractsFragment$key = {
  readonly " $data"?: ContractsFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ContractsFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContractsFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Code",
      "kind": "LinkedField",
      "name": "codes",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "creator",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "checksum",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Contract",
          "kind": "LinkedField",
          "name": "contracts",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ContractInfo",
              "kind": "LinkedField",
              "name": "info",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "admin",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "label",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
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
              "name": "config",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Developer",
  "abstractKey": null
};

(node as any).hash = "e460faa0f72f12d454a48fd97a53b033";

export default node;
