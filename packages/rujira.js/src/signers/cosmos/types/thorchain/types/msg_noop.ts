// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               unknown
// source: types/msg_noop.proto

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

export interface MsgNoOp {
  observedTx: ObservedTx | undefined;
  signer: Uint8Array;
  action: string;
}

function createBaseMsgNoOp(): MsgNoOp {
  return { observedTx: undefined, signer: new Uint8Array(0), action: "" };
}

export const MsgNoOp = {
  encode(
    message: MsgNoOp,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.observedTx !== undefined) {
      ObservedTx.encode(message.observedTx, writer.uint32(10).fork()).ldelim();
    }
    if (message.signer.length !== 0) {
      writer.uint32(18).bytes(message.signer);
    }
    if (message.action !== "") {
      writer.uint32(26).string(message.action);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgNoOp {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgNoOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.observedTx = ObservedTx.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.signer = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.action = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgNoOp {
    return {
      observedTx: isSet(object.observedTx)
        ? ObservedTx.fromJSON(object.observedTx)
        : undefined,
      signer: isSet(object.signer)
        ? bytesFromBase64(object.signer)
        : new Uint8Array(0),
      action: isSet(object.action) ? globalThis.String(object.action) : "",
    };
  },

  toJSON(message: MsgNoOp): unknown {
    const obj: any = {};
    if (message.observedTx !== undefined) {
      obj.observedTx = ObservedTx.toJSON(message.observedTx);
    }
    if (message.signer.length !== 0) {
      obj.signer = base64FromBytes(message.signer);
    }
    if (message.action !== "") {
      obj.action = message.action;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgNoOp>, I>>(base?: I): MsgNoOp {
    return MsgNoOp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgNoOp>, I>>(object: I): MsgNoOp {
    const message = createBaseMsgNoOp();
    message.observedTx =
      object.observedTx !== undefined && object.observedTx !== null
        ? ObservedTx.fromPartial(object.observedTx)
        : undefined;
    message.signer = object.signer ?? new Uint8Array(0);
    message.action = object.action ?? "";
    return message;
  },
};
