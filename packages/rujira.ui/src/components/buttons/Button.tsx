import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import {
  ComponentPropsWithRef,
  ElementType,
  ForwardedRef,
  MouseEvent,
  ReactNode,
  Ref,
  RefAttributes,
  forwardRef,
} from "react";

export type ButtonProps<T extends ElementType = "button"> = {
  as?: T;
  label?: string;
  className?: string;
  children?: ReactNode;
} & DistributiveOmit<ComponentPropsWithRef<T>, "as">;

type FixedForwardRef = <T, P = {}>(
  render: (props: P, ref: Ref<T>) => ReactNode
) => (props: P & RefAttributes<T>) => ReactNode;

const fixedForwardRef = forwardRef as FixedForwardRef;

type DistributiveOmit<T, TOmitted extends PropertyKey> = T extends any
  ? Omit<T, TOmitted>
  : never;

const UnwrappedAnyComponent = <T extends ElementType>(
  props: ButtonProps<T>,
  ref: ForwardedRef<any>
) => {
  const { as: Comp = "button", label, children, className, ...rest } = props;

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  let gradient = "214, 21, 235, 1";
  if (className?.includes("button--grey")) {
    gradient = "96, 125, 139, 1";
  } else if (className?.includes("button--red")) {
    gradient = "244, 81, 30, 1";
  } else if (className?.includes("button--blue")) {
    gradient = "96, 251, 208, 1";
  } else if (className?.includes("button--dark")) {
    gradient = "214, 21, 235, 0.25";
  }

  return (
    <Comp
      {...rest}
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`button ${className}`}>
      <motion.div
        className="button__motion"
        style={{
          background: useMotionTemplate`
          radial-gradient(
            150px circle at ${mouseX}px ${mouseY}px,
            rgba(${gradient}),  
            transparent 100%
          )
        `,
        }}
      />
      {label && <span>{label}</span>}
      {children}
    </Comp>
  );
};

export const Button = fixedForwardRef(UnwrappedAnyComponent);
