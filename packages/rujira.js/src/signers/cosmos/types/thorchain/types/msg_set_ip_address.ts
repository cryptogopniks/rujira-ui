// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               unknown
// source: types/msg_set_ip_address.proto

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

export interface MsgSetIPAddress {
  ipAddress: string;
  signer: Uint8Array;
}

function createBaseMsgSetIPAddress(): MsgSetIPAddress {
  return { ipAddress: "", signer: new Uint8Array(0) };
}

export const MsgSetIPAddress = {
  encode(
    message: MsgSetIPAddress,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.ipAddress !== "") {
      writer.uint32(10).string(message.ipAddress);
    }
    if (message.signer.length !== 0) {
      writer.uint32(18).bytes(message.signer);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetIPAddress {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetIPAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ipAddress = reader.string();
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

  fromJSON(object: any): MsgSetIPAddress {
    return {
      ipAddress: isSet(object.ipAddress)
        ? globalThis.String(object.ipAddress)
        : "",
      signer: isSet(object.signer)
        ? bytesFromBase64(object.signer)
        : new Uint8Array(0),
    };
  },

  toJSON(message: MsgSetIPAddress): unknown {
    const obj: any = {};
    if (message.ipAddress !== "") {
      obj.ipAddress = message.ipAddress;
    }
    if (message.signer.length !== 0) {
      obj.signer = base64FromBytes(message.signer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSetIPAddress>, I>>(
    base?: I
  ): MsgSetIPAddress {
    return MsgSetIPAddress.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetIPAddress>, I>>(
    object: I
  ): MsgSetIPAddress {
    const message = createBaseMsgSetIPAddress();
    message.ipAddress = object.ipAddress ?? "";
    message.signer = object.signer ?? new Uint8Array(0);
    return message;
  },
};
