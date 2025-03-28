import clsx from "clsx";
import { FC, useState } from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { MsgSwitch, Network } from "rujira.js";
import { Decimal, DenomInput, i18n, Warning } from "rujira.ui";
import { ExclamationCircle } from "rujira.ui/src/components/icons/Icons";
import { TxButton } from "../../common/components/TxButton";
import { useAccounts } from "../../services/accounts";
import { Asset } from "../../services/asset";
import { Subscription } from "../../services/useNodeSubscription";
import { SwitchFragment$key } from "./__generated__/SwitchFragment.graphql";

const fragment = graphql`
  fragment SwitchFragment on Layer1Balance {
    amount
    asset {
      asset
      type
      chain
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
`;

const subscription = graphql`
  subscription SwitchSubscription($id: ID!) {
    node(id: $id) {
      ... on Layer1Account {
        balances {
          amount
        }
      }
    }
  }
`;

export const Switch: FC<{
  k?: SwitchFragment$key;
  step: number;
  setStep: (v: number) => void;
  symbol: string;
}> = ({ k, step, setStep, symbol }) => {
  const balance = useFragment(fragment, k);
  const [amount, setAmount] = useState(0n);
  const { accounts, selected, select } = useAccounts();
  const receiver = accounts?.find(
    (a) => a.provider === selected?.provider && a.network === Network.Thorchain
  );

  const msg =
    balance?.asset && receiver && amount > 0n
      ? new MsgSwitch(balance.asset as Asset, amount, receiver.address)
      : null;

  const sender =
    selected?.network === Network.Gaia
      ? selected
      : accounts?.find((a) => a.network === Network.Gaia);

  return (
    <div className="col-12 mt-2 col-lg-4 mt-lg-0 merge__steps">
      {selected?.network === Network.Gaia && (
        <Subscription
          id={`gaia:${selected?.address}`}
          subscription={subscription}
        />
      )}

      <div
        className={clsx({
          "merge__step card h-full p-3": true,
          "merge__step--right": step > 2,
          "merge__step--left": step < 2,
          "merge__step--selected": step === 2,
        })}
        onClick={() => setStep(2)}>
        <i18n.h4
          className={clsx({
            "h5 text-center": true,
            "mb-0": selected,
          })}>
          Deposit on THORChain
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
        {selected?.network === Network.Gaia && (
          <button className="transparent flex jc-e mt-1 mr-1 ml-a color-white pointer">
            <i18n.p className="fs-14 condensed color-grey">
              Balance on Cosmos Hub:{" "}
            </i18n.p>
            <Decimal
              amount={BigInt(balance?.amount || 0)}
              decimals={6}
              onClick={() => setAmount(BigInt(balance?.amount || 0))}
              className="condensed fs-14 ml-0.5"
            />
          </button>
        )}
        {selected?.network !== Network.Gaia && (
          <button
            className="transparent w-full"
            onClick={() => sender && select(sender)}>
            <Warning
              className="warning--sm mt-2 condensed pointer"
              color="orange">
              <ExclamationCircle className="color-orange" />
              Click here to switch to the
              <span className="color-white mx-0.5">Cosmos</span> network
            </Warning>
          </button>
        )}
        <TxButton
          msg={msg}
          className="button--blue mt-3 w-full"
          label={i18n.t("Deposit")}
          disabled={step !== 2}
        />
      </div>
    </div>
  );
};
