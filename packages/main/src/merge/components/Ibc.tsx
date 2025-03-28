import clsx from "clsx";
import { FC, useState } from "react";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { MsgIbcTransfer, Network } from "rujira.js";
import { Decimal, DenomInput, i18n, Warning } from "rujira.ui";
import { ExclamationCircle } from "rujira.ui/src/components/icons/Icons";
import { TxButton } from "../../common/components/TxButton";
import { useAccounts } from "../../services/accounts";
import { IbcFragment$key } from "./__generated__/IbcFragment.graphql";

const fragment = graphql`
  fragment IbcFragment on Layer1Balance {
    amount
    asset {
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
`;

export const Ibc: FC<{
  k?: IbcFragment$key;
  step: number;
  setStep: (v: number) => void;
  channel: string;
  symbol: string;
}> = ({ k, step, setStep, channel, symbol }) => {
  const { accounts, selected, select } = useAccounts();
  const balance = useFragment(fragment, k);
  const [amount, setAmount] = useState(0n);
  const receiver = accounts?.find(
    (a) => a.provider === selected?.provider && a.network === Network.Gaia
  );

  const sender =
    selected?.network === Network.Kujira
      ? selected
      : accounts?.find((a) => a.network === Network.Kujira);

  const denom = balance?.asset.variants.native?.denom;

  const msg =
    denom && balance && receiver && amount > 0n
      ? new MsgIbcTransfer({
          sourceChannel: channel,
          token: {
            denom,
            amount: amount.toString(),
          },
          receiver: receiver.address,
        })
      : null;
  return (
    <div className="col-12 col-lg-4">
      <div
        className={clsx({
          "merge__step card h-full p-3": true,
          "merge__step--right": step === 2,
          "merge__step--right2x": step === 3,
          "merge__step--selected": step === 1,
        })}
        onClick={() => setStep(1)}>
        <i18n.h4
          className={clsx({
            "h5 text-center": true,
            "mb-0": selected,
          })}>
          IBC to Cosmos Hub
        </i18n.h4>
        {sender && (
          <p className="fs-13 text-center mb-1 mt-1 condensed">
            <span className="color-grey">from</span> {sender?.address}
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
        {selected?.network === Network.Kujira && (
          <button className="transparent flex jc-e mt-1 mr-1 ml-a color-white pointer">
            <i18n.p className="fs-14 condensed color-grey">
              Balance on Kujira:{" "}
            </i18n.p>
            <Decimal
              onClick={() => setAmount(BigInt(balance?.amount || 0))}
              amount={BigInt(balance?.amount || 0)}
              decimals={6}
              className="condensed fs-14 ml-0.5"
            />
          </button>
        )}
        {selected?.network !== Network.Kujira && (
          <button
            className="transparent w-full"
            onClick={() => sender && select(sender)}>
            <Warning
              className="warning--sm mt-2 condensed pointer"
              color="orange">
              <ExclamationCircle className="color-orange" />
              Click here to switch to the
              <span className="color-white mx-0.5">Kujira</span> network
            </Warning>
          </button>
        )}
        <TxButton
          msg={msg}
          className="button--grey mt-3 w-full"
          label={i18n.t("Send to Cosmos Hub")}
          disabled={step !== 1}
        />
      </div>
    </div>
  );
};
