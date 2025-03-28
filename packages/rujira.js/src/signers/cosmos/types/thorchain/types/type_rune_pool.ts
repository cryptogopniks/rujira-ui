// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               unknown
// source: types/type_rune_pool.proto

import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, Exact, isSet } from "../../helpers";

/* eslint-disable */

export const protobufPackage = "types";

/** RUNEPool represents ownership of currently active POL. */
export interface RUNEPool {
  reserveUnits: string;
  poolUnits: string;
  runeDeposited: string;
  runeWithdrawn: string;
}

function createBaseRUNEPool(): RUNEPool {
  return {
    reserveUnits: "",
    poolUnits: "",
    runeDeposited: "",
    runeWithdrawn: "",
  };
}

export const RUNEPool = {
  encode(
    message: RUNEPool,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.reserveUnits !== "") {
      writer.uint32(10).string(message.reserveUnits);
    }
    if (message.poolUnits !== "") {
      writer.uint32(18).string(message.poolUnits);
    }
    if (message.runeDeposited !== "") {
      writer.uint32(26).string(message.runeDeposited);
    }
    if (message.runeWithdrawn !== "") {
      writer.uint32(34).string(message.runeWithdrawn);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RUNEPool {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRUNEPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.reserveUnits = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.poolUnits = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.runeDeposited = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.runeWithdrawn = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RUNEPool {
    return {
      reserveUnits: isSet(object.reserveUnits)
        ? globalThis.String(object.reserveUnits)
        : "",
      poolUnits: isSet(object.poolUnits)
        ? globalThis.String(object.poolUnits)
        : "",
      runeDeposited: isSet(object.runeDeposited)
        ? globalThis.String(object.runeDeposited)
        : "",
      runeWithdrawn: isSet(object.runeWithdrawn)
        ? globalThis.String(object.runeWithdrawn)
        : "",
    };
  },

  toJSON(message: RUNEPool): unknown {
    const obj: any = {};
    if (message.reserveUnits !== "") {
      obj.reserveUnits = message.reserveUnits;
    }
    if (message.poolUnits !== "") {
      obj.poolUnits = message.poolUnits;
    }
    if (message.runeDeposited !== "") {
      obj.runeDeposited = message.runeDeposited;
    }
    if (message.runeWithdrawn !== "") {
      obj.runeWithdrawn = message.runeWithdrawn;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RUNEPool>, I>>(base?: I): RUNEPool {
    return RUNEPool.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RUNEPool>, I>>(object: I): RUNEPool {
    const message = createBaseRUNEPool();
    message.reserveUnits = object.reserveUnits ?? "";
    message.poolUnits = object.poolUnits ?? "";
    message.runeDeposited = object.runeDeposited ?? "";
    message.runeWithdrawn = object.runeWithdrawn ?? "";
    return message;
  },
};
