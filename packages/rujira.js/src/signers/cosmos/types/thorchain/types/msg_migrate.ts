// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               unknown
// source: types/msg_migrate.proto

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

export interface MsgMigrate {
  tx: ObservedTx | undefined;
  blockHeight: number;
  signer: Uint8Array;
}

function createBaseMsgMigrate(): MsgMigrate {
  return { tx: undefined, blockHeight: 0, signer: new Uint8Array(0) };
}

export const MsgMigrate = {
  encode(
    message: MsgMigrate,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.tx !== undefined) {
      ObservedTx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockHeight !== 0) {
      writer.uint32(16).int64(message.blockHeight);
    }
    if (message.signer.length !== 0) {
      writer.uint32(26).bytes(message.signer);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgMigrate {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMigrate();
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
          if (tag !== 16) {
            break;
          }

          message.blockHeight = Number(reader.int64());
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

  fromJSON(object: any): MsgMigrate {
    return {
      tx: isSet(object.tx) ? ObservedTx.fromJSON(object.tx) : undefined,
      blockHeight: isSet(object.blockHeight)
        ? globalThis.Number(object.blockHeight)
        : 0,
      signer: isSet(object.signer)
        ? bytesFromBase64(object.signer)
        : new Uint8Array(0),
    };
  },

  toJSON(message: MsgMigrate): unknown {
    const obj: any = {};
    if (message.tx !== undefined) {
      obj.tx = ObservedTx.toJSON(message.tx);
    }
    if (message.blockHeight !== 0) {
      obj.blockHeight = Math.round(message.blockHeight);
    }
    if (message.signer.length !== 0) {
      obj.signer = base64FromBytes(message.signer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgMigrate>, I>>(base?: I): MsgMigrate {
    return MsgMigrate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgMigrate>, I>>(
    object: I
  ): MsgMigrate {
    const message = createBaseMsgMigrate();
    message.tx =
      object.tx !== undefined && object.tx !== null
        ? ObservedTx.fromPartial(object.tx)
        : undefined;
    message.blockHeight = object.blockHeight ?? 0;
    message.signer = object.signer ?? new Uint8Array(0);
    return message;
  },
};
