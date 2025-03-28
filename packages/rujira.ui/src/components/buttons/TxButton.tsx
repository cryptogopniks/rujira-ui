import clsx from "clsx";
import { ElementType, ReactElement, useEffect, useState } from "react";
import toast, { Renderable } from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import {
  AccountProvider,
  IncorrectNetworkError,
  Msg,
  networkLabel,
  networkTxLink,
  Signer,
  Simulation,
  translateError,
  TxResult,
} from "rujira.js";
import { i18n } from "../../i18n";
import { ExclamationCircle } from "../icons/Icons";
import { Warning } from "../notices/Warning";
import { Decimal } from "../numbers/Decimal";
import { Button, ButtonProps } from "./Button";

export type TxButtonProps<
  P,
  T extends ElementType = "button",
> = ButtonProps<T> & {
  accountProvider: AccountProvider<P>;
  signer: Signer;
  msg: Msg | null;
  SimulationComponent?: ElementType<{
    accountProvider: AccountProvider<P>;
    simulation?: Simulation;
    error?: Error;
    msg: Msg | null;
  }>;
  onSuccess?: (res: TxResult) => void;
  hideSimulation?: boolean;
  toastOpts?: {
    loading?: Renderable;
    success?: Renderable | ((res: TxResult) => Renderable);
    error?: Renderable | ((err: any) => Renderable);
  };
};

export const TxButton = <P,>({
  accountProvider,
  signer,
  msg,
  onSuccess,
  SimulationComponent = DefaultSimulationComponent,
  children,
  toastOpts = {},
  className,
  hideSimulation,
  ...rest
}: TxButtonProps<P>): ReactElement => {
  const { simulate, signAndBroadcast } = signer;
  const [simulation, setSimulation] = useState<Simulation>();
  const [simulationError, setSimulationError] = useState<Error>();
  const { loading, success, error } = toastOpts;

  useEffect(() => {
    setSimulationError(undefined);
    setSimulation(undefined);
    msg &&
      simulate &&
      simulate(msg).then(setSimulation).catch(setSimulationError);
  }, [msg]);

  const onClick = () => {
    if (!simulation) throw new Error(`Simulation required`);
    if (!msg) throw new Error(`Msg required`);
    if (!signAndBroadcast) throw new Error(`signAndBroadcast unavailable`);

    const p = signAndBroadcast(simulation, msg).then((res) => {
      onSuccess && onSuccess(res);
      return res;
    });
    toast.promise(p, {
      loading: loading || i18n.t("Submitting Transaction"),
      success: success || successHandler,
      error:
        error ||
        ((err: any) =>
          i18n.t(
            translateError(err.message) || "Error Submitting Transaction"
          )),
    });
  };

  return (
    <>
      <Button
        {...rest}
        onClick={onClick}
        className={clsx({
          "button--grey": !!simulationError,
          [`${className}`]: className,
        })}
        disabled={!simulation || !msg || !!simulationError}
        data-tooltip-id="tx-button-tip"
        data-tooltip-html={
          simulationError && simulationError.message !== ""
            ? `<p class="fs-12 lh-16 fw-400 w-36 mb-0.5">${translateError(simulationError.message)}</p>`
            : undefined
        }>
        {children}
      </Button>
      {!hideSimulation && msg && (
        <SimulationComponent
          accountProvider={accountProvider}
          simulation={simulation}
          error={simulationError}
          msg={msg}
        />
      )}
    </>
  );
};

export const TxButtonTip = () => (
  <Tooltip
    id="tx-button-tip"
    className="tooltip"
    float={true}
    style={{ zIndex: 201 }}
  />
);
export interface SimulationComponentProps<P> {
  accountProvider: AccountProvider<P>;
  simulation?: Simulation;
  error?: Error;
  msg: Msg | null;
}

const DefaultSimulationComponent = <P,>({
  accountProvider,
  simulation,
  error,
}: SimulationComponentProps<P>): ReactElement => {
  if (error instanceof IncorrectNetworkError) {
    const target =
      accountProvider.accounts?.find(
        (a) =>
          a.provider === accountProvider.selected?.provider &&
          a.network === error.required
      ) || accountProvider.accounts?.find((a) => a.network === error.required);
    return target ? (
      <button
        className="transparent w-full"
        onClick={() => {
          accountProvider.select(target);
        }}>
        <Warning className="warning--sm mt-2 condensed pointer" color="orange">
          <ExclamationCircle className="color-orange" />
          Incorrect Network. Click to select the
          <span className="color-white mx-0.5">
            {networkLabel(error.required)}
          </span>{" "}
          network
        </Warning>
      </button>
    ) : (
      <span className="transparent w-full">
        <Warning className="warning--sm mt-2 condensed pointer" color="orange">
          <ExclamationCircle className="color-orange" />
          Incorrect Network.
          <span className="color-white mx-0.5">{error.required}</span>
          wallet required
        </Warning>
      </span>
    );
  }

  if (!error) {
    return (
      <small className="fs-12 text-center mt-1 color-white block mb-1">
        {simulation ? (
          <>
            {i18n.t("Network fee")}:{" "}
            <Decimal
              amount={simulation.amount}
              decimals={simulation.decimals}
              symbol={simulation.symbol}
            />
          </>
        ) : null}
      </small>
    );
  }
  return <></>;
};

const successHandler = (res: TxResult): Renderable => (
  <p>
    {i18n.t("Transaction Succeeded")}
    <br />
    <a
      href={networkTxLink(res)}
      target="_blank"
      className="color-white no-underline fs-12">
      {res.txHash.slice(0, 8) + "..." + res.txHash.slice(-8)}
    </a>
  </p>
);
