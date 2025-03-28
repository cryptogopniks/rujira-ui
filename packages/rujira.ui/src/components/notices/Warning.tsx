import clsx from "clsx";
import { ExclamationCircle, ExclamationTriangle, Xmark } from "../icons/Icons";

type Props = {
  msg?: string;
  color?: "teal" | "orange" | "red";
  dismiss?: () => void;
} & JSX.IntrinsicElements["div"];

export const Warning: React.FC<Props> = ({
  color,
  msg,
  dismiss,
  className,
  children,
}) => {
  return (
    <div
      className={clsx({
        warning: true,
        [`warning--${color}`]: color,
        [`${className}`]: className,
      })}>
      {children || (
        <>
          {color == "red" ? (
            <ExclamationTriangle className="warning__icon" />
          ) : (
            <ExclamationCircle className="warning__icon" />
          )}
        </>
      )}
      {msg && <span className="warning__msg">{msg}</span>}
      {dismiss && (
        <button onClick={dismiss} className="transparent warning__close">
          <Xmark />
        </button>
      )}
    </div>
  );
};
