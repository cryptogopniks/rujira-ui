import { FC } from "react";
import { graphql, useFragment } from "react-relay";
import {
  DepositModal as BaseDepositModal,
  Button,
  useGlobalModalContext,
} from "rujira.ui";
import "rujira.ui/src/scss/index.scss";

import { Network } from "rujira.js";
import { useAccounts } from "../../services/accounts";
import { Asset } from "../../services/asset";
import { DepositFragment$key } from "./__generated__/DepositFragment.graphql";

const fragment = graphql`
  fragment DepositFragment on Thorchain {
    pools {
      asset {
        chain
        type
        asset
        metadata {
          symbol
          decimals
        }
        variants {
          native {
            denom
          }
        }
      }
    }
  }
`;

export const Deposit: FC<{ k?: DepositFragment$key; selected?: Asset }> = ({
  k,
  selected,
}) => {
  const data = useFragment(fragment, k);
  const assets = data?.pools.map((x) => x.asset as Asset) || [];
  const accountProvider = useAccounts();
  return (
    <BaseDepositModal
      selected={selected}
      assets={assets}
      footer={DepositFooter}
      targets={
        accountProvider.accounts
          ?.filter((a) => a.network === Network.Thorchain)
          .map((a) => a.address) || []
      }
    />
  );
};

const DepositFooter: FC<{
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
