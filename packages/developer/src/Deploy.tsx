import { Buffer } from "buffer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { MsgInstantiate } from "rujira.js";
import { Input, Textarea } from "rujira.ui";
import { TxButton } from "./common/components/TxButton";
import { useAccounts } from "./services/accounts";

export const Deploy = () => {
  const { code_id } = useParams();
  const [label, setLabel] = useState("Some Label");

  const [payload, setPayload] = useState("{}");
  const { selected } = useAccounts();
  const msg = code_id
    ? new MsgInstantiate(
        BigInt(code_id),
        payload,
        label,
        [],
        selected?.address,
        (x) => Buffer.from(JSON.stringify(JSON.parse(x)))
      )
    : null;
  return (
    <div className="rujira__inner--pad portfolio">
      <div className="rujira__inner">
        <h1 className="h1">Deploy Code</h1>
        <p>Code ID</p>
        <p>{code_id}</p>
        <p>Msg</p>
        <Textarea
          value={payload}
          onChange={(e) => setPayload(e.target.value)}
        />
        <p>Label</p>

        <Input
          value={label}
          onChange={(x) => setLabel(x.currentTarget.value)}
        />
        <TxButton className="mt-2" label="Instantiate" msg={msg} />
      </div>
    </div>
  );
};
