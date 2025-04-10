// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               unknown
// source: types/msg_tx_outbound.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import {
  base64FromBytes,
  bytesFromBase64,
  DeepPartial,
  Exact,
  isSet,
} from "../../helpers";
import { ObservedTx } from "./type_observed_tx";

export const protobufPackage = "types";

export interface MsgOutboundTx {
  tx: ObservedTx | undefined;
  inTxId: string;
  signer: Uint8Array;
}

function createBaseMsgOutboundTx(): MsgOutboundTx {
  return { tx: undefined, inTxId: "", signer: new Uint8Array(0) };
}

export const MsgOutboundTx = {
  encode(
    message: MsgOutboundTx,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.tx !== undefined) {
      ObservedTx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.inTxId !== "") {
      writer.uint32(18).string(message.inTxId);
    }
    if (message.signer.length !== 0) {
      writer.uint32(26).bytes(message.signer);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgOutboundTx {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgOutboundTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tx = ObservedTx.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.inTxId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.signer = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgOutboundTx {
    return {
      tx: isSet(object.tx) ? ObservedTx.fromJSON(object.tx) : undefined,
      inTxId: isSet(object.inTxId) ? globalThis.String(object.inTxId) : "",
      signer: isSet(object.signer)
        ? bytesFromBase64(object.signer)
        : new Uint8Array(0),
    };
  },

  toJSON(message: MsgOutboundTx): unknown {
    const obj: any = {};
    if (message.tx !== undefined) {
      obj.tx = ObservedTx.toJSON(message.tx);
    }
    if (message.inTxId !== "") {
      obj.inTxId = message.inTxId;
    }
    if (message.signer.length !== 0) {
      obj.signer = base64FromBytes(message.signer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgOutboundTx>, I>>(
    base?: I
  ): MsgOutboundTx {
    return MsgOutboundTx.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgOutboundTx>, I>>(
    object: I
  ): MsgOutboundTx {
    const message = createBaseMsgOutboundTx();
    message.tx =
      object.tx !== undefined && object.tx !== null
        ? ObservedTx.fromPartial(object.tx)
        : undefined;
    message.inTxId = object.inTxId ?? "";
    message.signer = object.signer ?? new Uint8Array(0);
    return message;
  },
};
