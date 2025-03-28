import clsx from "clsx";
import { FC, useState } from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { MsgExec, Network } from "rujira.js";
import { Decimal, DenomInput, i18n, Warning } from "rujira.ui";
import { ExclamationCircle } from "rujira.ui/src/components/icons/Icons";
import { TxButton } from "../../common/components/TxButton";
import { useAccounts } from "../../services/accounts";
import { Asset } from "../../services/asset";
import { ConvertFragment$key } from "./__generated__/ConvertFragment.graphql";
import { ConvertStepFragment$key } from "./__generated__/ConvertStepFragment.graphql";

const fragment = graphql`
  fragment ConvertFragment on Layer1Balance {
    amount
    asset {
      asset
      metadata {
        symbol
        decimals
      }
    }
  }
`;

const pool = graphql`
  fragment ConvertStepFragment on MergePool {
    address
    mergeAsset {
      type
      chain
      asset
      metadata {
        decimals
        symbol
      }
      variants {
        native {
          denom
        }
        secured {
          variants {
            native {
              denom
            }
          }
        }
      }
    }
  }
`;

export const Convert: FC<{
  k?: ConvertFragment$key;
  c?: ConvertStepFragment$key;
  step: number;
  setStep: (v: number) => void;
  symbol: string;
}> = ({ step, setStep, symbol, k, c }) => {
  const { accounts, selected, select } = useAccounts();
  const balance = useFragment(fragment, k);
  const contract = useFragment(pool, c);
  const [amount, setAmount] = useState(0n);

  const msg =
    selected && contract && amount > 0n
      ? new MsgExec(contract.mergeAsset as Asset, amount, contract.address, {
          deposit: {},
        })
      : null;

  const sender =
    selected?.network === Network.Thorchain
      ? selected
      : accounts?.find((a) => a.network === Network.Thorchain);

  return (
    <div className="col-12 mt-2 col-lg-4 mt-lg-0">
      <div
        className={clsx({
          "merge__step card h-full p-3": true,
          "merge__step--left": step === 2,
          "merge__step--left2x": step === 1,
          "merge__step--selected": step === 3,
        })}
        onClick={() => setStep(3)}>
        <i18n.h4
          className={clsx({
            "h5 text-center": true,
            "mb-0": selected,
          })}>
          Convert to RUJI
        </i18n.h4>

        {sender && (
          <p className="fs-13 text-center mb-1 mt-1 condensed">
            <span className="color-grey">from</span> {sender.address}
          </p>
        )}

        <DenomInput
          symbol={symbol}
          amount={amount}
          decimals={6}
          full={true}
          className="mt-2"
          onChangeAmount={setAmount}
        />
        {selected?.network === Network.Thorchain && (
          <button className="transparent flex jc-e mt-1 mr-1 ml-a color-white pointer">
            <i18n.p className="fs-14 condensed color-grey">
              Balance on THORChain:{" "}
            </i18n.p>
            <Decimal
              amount={BigInt(balance?.amount || 0)}
              onClick={() => setAmount(BigInt(balance?.amount || 0))}
              className="condensed fs-14 ml-0.5"
            />
          </button>
        )}
        {selected?.network !== Network.Thorchain && (
          <button
            className="transparent w-full"
            onClick={() => sender && select(sender)}>
            <Warning
              className="warning--sm mt-2 condensed pointer"
              color="orange">
              <ExclamationCircle className="color-orange" />
              Click here to switch to the
              <span className="color-white mx-0.5">THORChain</span> network
            </Warning>
          </button>
        )}
        <TxButton
          msg={msg}
          className="mt-3 w-full"
          label={i18n.t("Merge to RUJI")}
          disabled={step !== 3}
        />
      </div>
    </div>
  );
};
