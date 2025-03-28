// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               unknown
// source: types/type_clout.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, Exact, isSet } from "../../helpers";
export const protobufPackage = "types";

export interface SwapperClout {
  address: string;
  score: string;
  reclaimed: string;
  spent: string;
  lastSpentHeight: number;
  lastReclaimHeight: number;
}

function createBaseSwapperClout(): SwapperClout {
  return {
    address: "",
    score: "",
    reclaimed: "",
    spent: "",
    lastSpentHeight: 0,
    lastReclaimHeight: 0,
  };
}

export const SwapperClout = {
  encode(
    message: SwapperClout,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.score !== "") {
      writer.uint32(18).string(message.score);
    }
    if (message.reclaimed !== "") {
      writer.uint32(26).string(message.reclaimed);
    }
    if (message.spent !== "") {
      writer.uint32(34).string(message.spent);
    }
    if (message.lastSpentHeight !== 0) {
      writer.uint32(40).int64(message.lastSpentHeight);
    }
    if (message.lastReclaimHeight !== 0) {
      writer.uint32(48).int64(message.lastReclaimHeight);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SwapperClout {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwapperClout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.score = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.reclaimed = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.spent = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.lastSpentHeight = Number(reader.int64());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.lastReclaimHeight = Number(reader.int64());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SwapperClout {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      score: isSet(object.score) ? globalThis.String(object.score) : "",
      reclaimed: isSet(object.reclaimed)
        ? globalThis.String(object.reclaimed)
        : "",
      spent: isSet(object.spent) ? globalThis.String(object.spent) : "",
      lastSpentHeight: isSet(object.lastSpentHeight)
        ? globalThis.Number(object.lastSpentHeight)
        : 0,
      lastReclaimHeight: isSet(object.lastReclaimHeight)
        ? globalThis.Number(object.lastReclaimHeight)
        : 0,
    };
  },

  toJSON(message: SwapperClout): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.score !== "") {
      obj.score = message.score;
    }
    if (message.reclaimed !== "") {
      obj.reclaimed = message.reclaimed;
    }
    if (message.spent !== "") {
      obj.spent = message.spent;
    }
    if (message.lastSpentHeight !== 0) {
      obj.lastSpentHeight = Math.round(message.lastSpentHeight);
    }
    if (message.lastReclaimHeight !== 0) {
      obj.lastReclaimHeight = Math.round(message.lastReclaimHeight);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SwapperClout>, I>>(
    base?: I
  ): SwapperClout {
    return SwapperClout.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SwapperClout>, I>>(
    object: I
  ): SwapperClout {
    const message = createBaseSwapperClout();
    message.address = object.address ?? "";
    message.score = object.score ?? "";
    message.reclaimed = object.reclaimed ?? "";
    message.spent = object.spent ?? "";
    message.lastSpentHeight = object.lastSpentHeight ?? 0;
    message.lastReclaimHeight = object.lastReclaimHeight ?? 0;
    return message;
  },
};
