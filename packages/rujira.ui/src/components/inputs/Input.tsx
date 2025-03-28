import clsx from "clsx";
import { useEffect } from "react";

export type InputProps = {
  label?: string;
  onSubmit?: () => void;
  labelClassName?: string;
  containerClassName?: string;
} & JSX.IntrinsicElements["input"];

export function Input({
  id,
  label,
  value,
  className,
  onChange,
  onSubmit,
  disabled,
  labelClassName,
  containerClassName,
  placeholder,
  ...rest
}: InputProps) {
  useEffect(() => {
    const handleUserKeyPress = (event: { keyCode: number }) => {
      const { keyCode } = event;
      if (keyCode === 13) {
        onSubmit?.();
      }
    };
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [onSubmit]);

  return (
    <div
      className={clsx({
        "input-container": true,
        "input-container--disabled": disabled,
        "input-container--no-label": !label,
        [`${containerClassName}`]: containerClassName,
      })}>
      <input
        {...rest}
        className={clsx({ input: true, [`${className}`]: className })}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={label || placeholder}
        disabled={disabled}
      />
      {label && (
        <label
          htmlFor={id}
          className={clsx({
            label: true,
            [`${labelClassName}`]: labelClassName,
          })}>
          {label && label}
        </label>
      )}
    </div>
  );
}
