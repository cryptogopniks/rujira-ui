// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               unknown
// source: types/msg_rune_pool.proto

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

export interface MsgRunePoolDeposit {
  signer: Uint8Array;
  tx: Tx | undefined;
}

export interface MsgRunePoolWithdraw {
  signer: Uint8Array;
  tx: Tx | undefined;
  basisPoints: string;
  affiliateAddress: string;
  affiliateBasisPoints: string;
}

function createBaseMsgRunePoolDeposit(): MsgRunePoolDeposit {
  return { signer: new Uint8Array(0), tx: undefined };
}

export const MsgRunePoolDeposit = {
  encode(
    message: MsgRunePoolDeposit,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.signer.length !== 0) {
      writer.uint32(10).bytes(message.signer);
    }
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): MsgRunePoolDeposit {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRunePoolDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.signer = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tx = Tx.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRunePoolDeposit {
    return {
      signer: isSet(object.signer)
        ? bytesFromBase64(object.signer)
        : new Uint8Array(0),
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
    };
  },

  toJSON(message: MsgRunePoolDeposit): unknown {
    const obj: any = {};
    if (message.signer.length !== 0) {
      obj.signer = base64FromBytes(message.signer);
    }
    if (message.tx !== undefined) {
      obj.tx = Tx.toJSON(message.tx);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRunePoolDeposit>, I>>(
    base?: I
  ): MsgRunePoolDeposit {
    return MsgRunePoolDeposit.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRunePoolDeposit>, I>>(
    object: I
  ): MsgRunePoolDeposit {
    const message = createBaseMsgRunePoolDeposit();
    message.signer = object.signer ?? new Uint8Array(0);
    message.tx =
      object.tx !== undefined && object.tx !== null
        ? Tx.fromPartial(object.tx)
        : undefined;
    return message;
  },
};

function createBaseMsgRunePoolWithdraw(): MsgRunePoolWithdraw {
  return {
    signer: new Uint8Array(0),
    tx: undefined,
    basisPoints: "",
    affiliateAddress: "",
    affiliateBasisPoints: "",
  };
}

export const MsgRunePoolWithdraw = {
  encode(
    message: MsgRunePoolWithdraw,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.signer.length !== 0) {
      writer.uint32(10).bytes(message.signer);
    }
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(18).fork()).ldelim();
    }
    if (message.basisPoints !== "") {
      writer.uint32(26).string(message.basisPoints);
    }
    if (message.affiliateAddress !== "") {
      writer.uint32(34).string(message.affiliateAddress);
    }
    if (message.affiliateBasisPoints !== "") {
      writer.uint32(42).string(message.affiliateBasisPoints);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): MsgRunePoolWithdraw {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRunePoolWithdraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.signer = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tx = Tx.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.basisPoints = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.affiliateAddress = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.affiliateBasisPoints = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgRunePoolWithdraw {
    return {
      signer: isSet(object.signer)
        ? bytesFromBase64(object.signer)
        : new Uint8Array(0),
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
      basisPoints: isSet(object.basisPoints)
        ? globalThis.String(object.basisPoints)
        : "",
      affiliateAddress: isSet(object.affiliateAddress)
        ? globalThis.String(object.affiliateAddress)
        : "",
      affiliateBasisPoints: isSet(object.affiliateBasisPoints)
        ? globalThis.String(object.affiliateBasisPoints)
        : "",
    };
  },

  toJSON(message: MsgRunePoolWithdraw): unknown {
    const obj: any = {};
    if (message.signer.length !== 0) {
      obj.signer = base64FromBytes(message.signer);
    }
    if (message.tx !== undefined) {
      obj.tx = Tx.toJSON(message.tx);
    }
    if (message.basisPoints !== "") {
      obj.basisPoints = message.basisPoints;
    }
    if (message.affiliateAddress !== "") {
      obj.affiliateAddress = message.affiliateAddress;
    }
    if (message.affiliateBasisPoints !== "") {
      obj.affiliateBasisPoints = message.affiliateBasisPoints;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgRunePoolWithdraw>, I>>(
    base?: I
  ): MsgRunePoolWithdraw {
    return MsgRunePoolWithdraw.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgRunePoolWithdraw>, I>>(
    object: I
  ): MsgRunePoolWithdraw {
    const message = createBaseMsgRunePoolWithdraw();
    message.signer = object.signer ?? new Uint8Array(0);
    message.tx =
      object.tx !== undefined && object.tx !== null
        ? Tx.fromPartial(object.tx)
        : undefined;
    message.basisPoints = object.basisPoints ?? "";
    message.affiliateAddress = object.affiliateAddress ?? "";
    message.affiliateBasisPoints = object.affiliateBasisPoints ?? "";
    return message;
  },
};
