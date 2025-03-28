import { gzip } from "pako";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MsgStore } from "rujira.js";
import { TxButton } from "./common/components/TxButton";

export const Store = () => {
  const [file, setFile] = useState<File | null>();
  const [wasmByteCode, setWasmByteCode] = useState<Uint8Array>();

  useEffect(() => {
    setWasmByteCode(undefined);
    let reader = new FileReader();
    reader.onload = () => {
      const data = reader.result as ArrayBuffer;
      const compressed = gzip(data, {
        level: 9,
      });

      setWasmByteCode(compressed);
    };
    reader.onerror = (error: any) => toast.error(error.message);

    file && reader.readAsArrayBuffer(file);
  }, [file]);

  const msg = wasmByteCode ? new MsgStore(wasmByteCode) : null;
  return (
    <div className="rujira__inner--pad portfolio">
      <div className="rujira__inner">
        <h1 className="h1">Store Code</h1>

        <input type="file" onChange={(e) => setFile(e.target.files?.item(0))} />
        <TxButton className="mt-2" label="Store" msg={msg} />
      </div>
    </div>
  );
};
