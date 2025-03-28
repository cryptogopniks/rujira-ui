import { Asset } from "../asset";
import { MsgDeposit } from "./deposit";
import { Msg } from "./msg";

export class MsgAddLiquidity extends MsgDeposit implements Msg {
  constructor(
    asset: Asset,
    amount: bigint,
    /** The thor address that will own the deposit, or the Layer 1 address which made the opposite deposit */
    private address: string,
    private pool: { asset: string },
    private options?: {
      affiliate?: { id: string; bp: bigint };
    }
  ) {
    super(asset, amount);
  }

  toMemo(): string {
    const { affiliate } = this.options || {};
    const parts = [
      `+`,
      this.pool.asset,
      this.address,
      affiliate?.id || "",
      affiliate?.bp.toString() || "",
    ];
    return parts.join(":");
  }
}
