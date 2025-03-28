import { Asset } from "../asset";
import { MsgDeposit } from "./deposit";
import { Msg } from "./msg";

export class MsgSwap extends MsgDeposit implements Msg {
  constructor(
    asset: Asset,
    amount: bigint,
    private to: { asset: string },
    private destination?: string | { address: string; refund: string },
    private options?: {
      slip?: bigint | { limit: bigint; interval: bigint; quantity: bigint };
      affiliate?: { id: string; bp: bigint };
    }
  ) {
    super(asset, amount);
  }

  toMemo(): string {
    const { slip, affiliate } = this.options || {};
    const parts = [
      `=`,
      this.to.asset,
      this.destination
        ? typeof this.destination === "string"
          ? this.destination
          : `${this.destination.address}/${this.destination.refund}`
        : "",
      slip
        ? typeof slip == "bigint"
          ? slip.toString()
          : `${slip.limit}/${slip.interval}/${slip.quantity}`
        : "",
      affiliate?.id || "",
      affiliate?.bp.toString() || "",
    ];

    return parts.join(":");
  }
}
