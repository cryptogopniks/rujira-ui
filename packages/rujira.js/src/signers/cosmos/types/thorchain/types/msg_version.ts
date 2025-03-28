// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               unknown
// source: types/msg_version.proto

import { BinaryReader, BinaryWriter } from "../../binary";
import {
  base64FromBytes,
  bytesFromBase64,
  DeepPartial,
  Exact,
  isSet,
} from "../../helpers";

/* eslint-disable */

export const protobufPackage = "types";

export interface MsgSetVersion {
  version: string;
  signer: Uint8Array;
}

function createBaseMsgSetVersion(): MsgSetVersion {
  return { version: "", signer: new Uint8Array(0) };
}

export const MsgSetVersion = {
  encode(
    message: MsgSetVersion,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.signer.length !== 0) {
      writer.uint32(18).bytes(message.signer);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetVersion {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): MsgSetVersion {
    return {
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      signer: isSet(object.signer)
        ? bytesFromBase64(object.signer)
        : new Uint8Array(0),
    };
  },

  toJSON(message: MsgSetVersion): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.signer.length !== 0) {
      obj.signer = base64FromBytes(message.signer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetVersion>, I>>(
    base?: I
  ): MsgSetVersion {
    return MsgSetVersion.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetVersion>, I>>(
    object: I
  ): MsgSetVersion {
    const message = createBaseMsgSetVersion();
    message.version = object.version ?? "";
    message.signer = object.signer ?? new Uint8Array(0);
    return message;
  },
};
