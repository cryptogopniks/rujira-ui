// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               unknown
// source: types/query_balance_module.proto

import { BinaryReader, BinaryWriter } from "../../binary";
import {
  DeepPartial,
  Exact,
  base64FromBytes,
  bytesFromBase64,
  isSet,
} from "../../helpers";
import { Coin } from "../common/common";

/* eslint-disable */

export const protobufPackage = "types";

export interface QueryBalanceModuleRequest {
  name: string;
  height: string;
}

export interface QueryBalanceModuleResponse {
  name: string;
  address: Uint8Array;
  coins: Coin[];
}

function createBaseQueryBalanceModuleRequest(): QueryBalanceModuleRequest {
  return { name: "", height: "" };
}

export const QueryBalanceModuleRequest = {
  encode(
    message: QueryBalanceModuleRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.height !== "") {
      writer.uint32(18).string(message.height);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryBalanceModuleRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceModuleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.height = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceModuleRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      height: isSet(object.height) ? globalThis.String(object.height) : "",
    };
  },

  toJSON(message: QueryBalanceModuleRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.height !== "") {
      obj.height = message.height;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBalanceModuleRequest>, I>>(
    base?: I
  ): QueryBalanceModuleRequest {
    return QueryBalanceModuleRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryBalanceModuleRequest>, I>>(
    object: I
  ): QueryBalanceModuleRequest {
    const message = createBaseQueryBalanceModuleRequest();
    message.name = object.name ?? "";
    message.height = object.height ?? "";
    return message;
  },
};

function createBaseQueryBalanceModuleResponse(): QueryBalanceModuleResponse {
  return { name: "", address: new Uint8Array(0), coins: [] };
}

export const QueryBalanceModuleResponse = {
  encode(
    message: QueryBalanceModuleResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.address.length !== 0) {
      writer.uint32(18).bytes(message.address);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryBalanceModuleResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceModuleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.coins.push(Coin.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceModuleResponse {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      address: isSet(object.address)
        ? bytesFromBase64(object.address)
        : new Uint8Array(0),
      coins: globalThis.Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryBalanceModuleResponse): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.address.length !== 0) {
      obj.address = base64FromBytes(message.address);
    }
    if (message.coins?.length) {
      obj.coins = message.coins.map((e) => Coin.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryBalanceModuleResponse>, I>>(
    base?: I
  ): QueryBalanceModuleResponse {
    return QueryBalanceModuleResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryBalanceModuleResponse>, I>>(
    object: I
  ): QueryBalanceModuleResponse {
    const message = createBaseQueryBalanceModuleResponse();
    message.name = object.name ?? "";
    message.address = object.address ?? new Uint8Array(0);
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
