import { FC, ReactElement } from "react";
import {
  Provider,
  SimulationComponentProps,
  TxButton as TxButtonInner,
  TxButtonProps,
  Warning,
} from "rujira.ui";
import { useAccounts } from "../../services/accounts";
import { useSigner } from "../../services/signer";

export const TxButton: FC<
  Omit<TxButtonProps<Provider>, "signer" | "accountProvider">
> = ({ children, ...props }) => {
  const accountProvider = useAccounts();
  const signer = useSigner();
  return (
    <TxButtonInner
      accountProvider={accountProvider}
      signer={signer}
      {...props}
      SimulationComponent={SimulationComponent}>
      {children}
    </TxButtonInner>
  );
};

const SimulationComponent = <P,>({
  error,
}: SimulationComponentProps<P>): ReactElement => {
  if (error) {
    return <Warning className="mt-1" msg={error.message} color="red" />;
  }
  return <></>;
};
