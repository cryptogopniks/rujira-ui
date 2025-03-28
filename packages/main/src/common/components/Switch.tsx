import { FC } from "react";
import {
  DepositModal as BaseDepositModal,
  Button,
  useGlobalModalContext,
} from "rujira.ui";
import "rujira.ui/src/scss/index.scss";

import { Network } from "rujira.js";
import { useAccounts } from "../../services/accounts";
import { Asset } from "../../services/asset";

export const SWITCH_ASSETS = [
  {
    type: "NATIVE",
    chain: Network.Gaia,
    asset: "GAIA.KUJI",
    metadata: {
      decimals: 6,
      symbol: "KUJI",
    },
    variants: {
      native: {
        denom:
          "ibc/4CC44260793F84006656DD868E017578F827A492978161DA31D7572BCB3F4289",
      },
    },
  },
  {
    type: "NATIVE",
    chain: Network.Gaia,
    asset: "GAIA.RKUJI",
    metadata: {
      decimals: 6,
      symbol: "RKUJI",
    },
    variants: {
      native: {
        denom:
          "ibc/50A69DC508ACCADE2DAC4B8B09AA6D9C9062FCBFA72BB4C6334367DECD972B06",
      },
    },
  },

  {
    type: "NATIVE",
    chain: Network.Gaia,
    asset: "GAIA.FUZN",
    metadata: {
      decimals: 6,
      symbol: "FUZN",
    },
    variants: {
      native: {
        denom:
          "ibc/6BBBB4B63C51648E9B8567F34505A9D5D8BAAC4C31D768971998BE8C18431C26",
      },
    },
  },

  {
    type: "NATIVE",
    chain: Network.Gaia,
    asset: "GAIA.WINK",
    metadata: {
      decimals: 6,
      symbol: "WINK",
    },
    variants: {
      native: {
        denom:
          "ibc/4363FD2EF60A7090E405B79A6C4337C5E9447062972028F5A99FB041B9571942",
      },
    },
  },

  {
    type: "NATIVE",
    chain: Network.Gaia,
    asset: "GAIA.NSTK",
    metadata: {
      decimals: 6,
      symbol: "NSTK",
    },
    variants: {
      native: {
        denom:
          "ibc/0B99C4EFF1BD05E56DEDEE1D88286DB79680C893724E0E7573BC369D79B5DDF3",
      },
    },
  },

  {
    type: "NATIVE",
    chain: Network.Gaia,
    asset: "GAIA.LVN",
    metadata: {
      decimals: 6,
      symbol: "LVN",
    },
    variants: {
      native: {
        denom:
          "ibc/6C95083ADD352D5D47FB4BA427015796E5FEF17A829463AD05ECD392EB38D889",
      },
    },
  },
] as Asset[];

export const Switch: FC<{ selected?: Asset }> = ({ selected }) => {
  const accountProvider = useAccounts();
  return (
    <BaseDepositModal
      title="Switch"
      selected={selected}
      assets={SWITCH_ASSETS}
      footer={Footer}
      targets={
        accountProvider.accounts
          ?.filter((a) => a.network === Network.Thorchain)
          .map((a) => a.address) || []
      }
    />
  );
};

const Footer: FC<{
  selected?: Asset;
  amount: bigint;
  target?: string;
}> = ({ selected }) => {
  const { hideModal } = useGlobalModalContext();

  // const _msg =
  //   selected && target && amount > 0n
  //     ? new MsgSecureDeposit(selected, amount, target)
  //     : null;
  if (!selected) return null;
  return (
    <>
      <div className="modal__footer mt-4 px-3 py-2 text-right">
        <Button
          className="button--grey button--outline"
          onClick={hideModal}
          label="Cancel"
        />
        <Button
          disabled
          className="button ml-1"
          onClick={() => {}}
          label="Coming Soon..."
          // msg={msg}
        />
        {/* <TxButton
          className="button ml-1"
          onClick={() => {}}
          label="Confirm"
          msg={msg}
        /> */}
      </div>
    </>
  );
};
