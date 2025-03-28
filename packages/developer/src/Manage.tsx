import { useState } from "react";
import { useParams } from "react-router-dom";
import { Textarea } from "rujira.ui";
// import {
//   MsgCreateDenom,
//   MsgMintTokens,
// } from "../../rujira.js/src/signers/cosmos/types/thorchain/denom/v1/types/tx";
import { MsgExec } from "rujira.js";
import { TxButton } from "./common/components/TxButton";
import { RUNE } from "./services/asset";

// const CREATE = {
//   type_url: "/thorchain.denom.v1.MsgCreateDenom",
//   value: Buffer.from(
//     MsgCreateDenom.encode({
//       sender:
//         "sthor1y0v5znl0ucc6nsdalr9xeg0r3zyw44yn0uyd8tsgc8gl4j8stjcsjuyuv6",
//       id: "ruji",
//       metadata: {
//         description: "The Native token of Rujira",
//         denomUnits: [
//           {
//             denom: "x/ruji",
//             exponent: 8,
//             aliases: [],
//           },
//         ],
//         base: "RUJI",
//         display: "RUJI",
//         name: "RUJI",
//         symbol: "RUJI",
//         uri: "",
//         uriHash: "",
//       },
//     }).finish()
//   ).toString("base64"),
// };

// const _MINT = (recipient: string) => ({
//   type_url: "/thorchain.denom.v1.MsgMintTokens",
//   value: Buffer.from(
//     MsgMintTokens.encode({
//       sender:
//         "sthor1y0v5znl0ucc6nsdalr9xeg0r3zyw44yn0uyd8tsgc8gl4j8stjcsjuyuv6",
//       amount: { amount: "10000000000000000", denom: "x/ruji" },
//       recipient,
//     }).finish()
//   ).toString("base64"),
// });

export const Manage = () => {
  const { address } = useParams();
  const [payload, setPayload] = useState(JSON.stringify({}));
  const msg = address
    ? new MsgExec(RUNE, 0n, address, payload, (x) =>
        Buffer.from(JSON.stringify(JSON.parse(x)))
      )
    : null;
  return (
    <div className="rujira__inner--pad portfolio">
      <div className="rujira__inner">
        <h1 className="h1">Execute Contract</h1>
        <p>Contract</p>
        <p>{address}</p>
        <p>Msg</p>
        <Textarea
          value={payload}
          onChange={(e) => setPayload(e.target.value)}
        />
        <TxButton className="mt-2" label="Execute" msg={msg} />
      </div>
    </div>
  );
};
