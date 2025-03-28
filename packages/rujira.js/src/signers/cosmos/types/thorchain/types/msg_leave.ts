// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               unknown
// source: types/msg_leave.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import {
  base64FromBytes,
  bytesFromBase64,
  DeepPartial,
  Exact,
  isSet,
} from "../../helpers";
import { Tx } from "../common/common";

export const protobufPackage = "types";

export interface MsgLeave {
  tx: Tx | undefined;
  nodeAddress: Uint8Array;
  signer: Uint8Array;
}

function createBaseMsgLeave(): MsgLeave {
  return {
    tx: undefined,
    nodeAddress: new Uint8Array(0),
    signer: new Uint8Array(0),
  };
}

export const MsgLeave = {
  encode(
    message: MsgLeave,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.nodeAddress.length !== 0) {
      writer.uint32(18).bytes(message.nodeAddress);
    }
    if (message.signer.length !== 0) {
      writer.uint32(26).bytes(message.signer);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgLeave {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeave();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tx = Tx.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nodeAddress = reader.bytes();
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

  fromJSON(object: any): MsgLeave {
    return {
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
      nodeAddress: isSet(object.nodeAddress)
        ? bytesFromBase64(object.nodeAddress)
        : new Uint8Array(0),
      signer: isSet(object.signer)
        ? bytesFromBase64(object.signer)
        : new Uint8Array(0),
    };
  },

  toJSON(message: MsgLeave): unknown {
    const obj: any = {};
    if (message.tx !== undefined) {
      obj.tx = Tx.toJSON(message.tx);
    }
    if (message.nodeAddress.length !== 0) {
      obj.nodeAddress = base64FromBytes(message.nodeAddress);
    }
    if (message.signer.length !== 0) {
      obj.signer = base64FromBytes(message.signer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgLeave>, I>>(base?: I): MsgLeave {
    return MsgLeave.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgLeave>, I>>(object: I): MsgLeave {
    const message = createBaseMsgLeave();
    message.tx =
      object.tx !== undefined && object.tx !== null
        ? Tx.fromPartial(object.tx)
        : undefined;
    message.nodeAddress = object.nodeAddress ?? new Uint8Array(0);
    message.signer = object.signer ?? new Uint8Array(0);
    return message;
  },
};
