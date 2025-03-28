// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               unknown
// source: types/msg_switch.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import {
  base64FromBytes,
  bytesFromBase64,
  DeepPartial,
  Exact,
  isSet,
} from "../../helpers";
import { Asset, Tx } from "../common/common";

export const protobufPackage = "types";

export interface MsgSwitch {
  tx: Tx | undefined;
  asset: Asset | undefined;
  amount: string;
  address: Uint8Array;
  signer: Uint8Array;
}

function createBaseMsgSwitch(): MsgSwitch {
  return {
    tx: undefined,
    asset: undefined,
    amount: "",
    address: new Uint8Array(0),
    signer: new Uint8Array(0),
  };
}

export const MsgSwitch = {
  encode(
    message: MsgSwitch,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(18).fork()).ldelim();
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.address.length !== 0) {
      writer.uint32(34).bytes(message.address);
    }
    if (message.signer.length !== 0) {
      writer.uint32(42).bytes(message.signer);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MsgSwitch {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwitch();
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

          message.asset = Asset.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.address = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): MsgSwitch {
    return {
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
      amount: isSet(object.amount) ? globalThis.String(object.amount) : "",
      address: isSet(object.address)
        ? bytesFromBase64(object.address)
        : new Uint8Array(0),
      signer: isSet(object.signer)
        ? bytesFromBase64(object.signer)
        : new Uint8Array(0),
    };
  },

  toJSON(message: MsgSwitch): unknown {
    const obj: any = {};
    if (message.tx !== undefined) {
      obj.tx = Tx.toJSON(message.tx);
    }
    if (message.asset !== undefined) {
      obj.asset = Asset.toJSON(message.asset);
    }
    if (message.amount !== "") {
      obj.amount = message.amount;
    }
    if (message.address.length !== 0) {
      obj.address = base64FromBytes(message.address);
    }
    if (message.signer.length !== 0) {
      obj.signer = base64FromBytes(message.signer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgSwitch>, I>>(base?: I): MsgSwitch {
    return MsgSwitch.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgSwitch>, I>>(
    object: I
  ): MsgSwitch {
    const message = createBaseMsgSwitch();
    message.tx =
      object.tx !== undefined && object.tx !== null
        ? Tx.fromPartial(object.tx)
        : undefined;
    message.asset =
      object.asset !== undefined && object.asset !== null
        ? Asset.fromPartial(object.asset)
        : undefined;
    message.amount = object.amount ?? "";
    message.address = object.address ?? new Uint8Array(0);
    message.signer = object.signer ?? new Uint8Array(0);
    return message;
  },
};
