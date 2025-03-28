import { Network } from "./network";

export class IncorrectNetworkError extends Error {
  constructor(
    public current: Network,
    public required: Network
  ) {
    super();
  }
}

export const translateError = (message: string): string => {
  if (
    message.includes("failed to simulate swap") &&
    message.includes("fail to add outbound tx") &&
    message.includes("not enough asset to pay for fees")
  ) {
    return "Insufficient asset returned to pay for outbound fee";
  }

  if (
    message.includes("spendable balance") &&
    message.includes("is smaller than") &&
    message.includes("insufficient funds")
  ) {
    return "Insufficient funds";
  }

  if (message.includes("swap Source and Target cannot be the same"))
    return "Source and Target cannot be the same";

  if (message.includes("user rejected action")) return "Transaction Cancelled";

  if (message.includes("insufficient funds")) return "Insufficient Funds";

  if (message.includes(`Invalid \\\"to\\\" address.`))
    return `Invalid \"to\" address`;

  if (message.includes("account sequence mismatch"))
    return "Pending Transaction. Try again shortly";

  return message;
};
