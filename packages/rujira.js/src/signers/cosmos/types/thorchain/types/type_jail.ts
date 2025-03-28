// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               unknown
// source: types/type_jail.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import {
  base64FromBytes,
  bytesFromBase64,
  DeepPartial,
  Exact,
  isSet,
} from "../../helpers";
export const protobufPackage = "types";

export interface Jail {
  nodeAddress: Uint8Array;
  releaseHeight: number;
  reason: string;
}

function createBaseJail(): Jail {
  return { nodeAddress: new Uint8Array(0), releaseHeight: 0, reason: "" };
}

export const Jail = {
  encode(
    message: Jail,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.nodeAddress.length !== 0) {
      writer.uint32(10).bytes(message.nodeAddress);
    }
    if (message.releaseHeight !== 0) {
      writer.uint32(16).int64(message.releaseHeight);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Jail {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodeAddress = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.releaseHeight = Number(reader.int64());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.reason = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Jail {
    return {
      nodeAddress: isSet(object.nodeAddress)
        ? bytesFromBase64(object.nodeAddress)
        : new Uint8Array(0),
      releaseHeight: isSet(object.releaseHeight)
        ? globalThis.Number(object.releaseHeight)
        : 0,
      reason: isSet(object.reason) ? globalThis.String(object.reason) : "",
    };
  },

  toJSON(message: Jail): unknown {
    const obj: any = {};
    if (message.nodeAddress.length !== 0) {
      obj.nodeAddress = base64FromBytes(message.nodeAddress);
    }
    if (message.releaseHeight !== 0) {
      obj.releaseHeight = Math.round(message.releaseHeight);
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Jail>, I>>(base?: I): Jail {
    return Jail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Jail>, I>>(object: I): Jail {
    const message = createBaseJail();
    message.nodeAddress = object.nodeAddress ?? new Uint8Array(0);
    message.releaseHeight = object.releaseHeight ?? 0;
    message.reason = object.reason ?? "";
    return message;
  },
};
