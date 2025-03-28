import { FC } from "react";
import { Provider, TxButton as TxButtonInner, TxButtonProps } from "rujira.ui";
import { useAccounts } from "../../services/accounts";
import { useSigner } from "../../services/signer";

export const TxButton: FC<
  Omit<TxButtonProps<Provider>, "signer" | "accountProvider">
> = ({ children, ...props }) => {
  const accountProvider = useAccounts();
  const signer = useSigner();
  return (
    <TxButtonInner accountProvider={accountProvider} signer={signer} {...props}>
      {children}
    </TxButtonInner>
  );
};
