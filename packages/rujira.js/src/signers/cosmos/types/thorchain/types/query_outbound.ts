// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               unknown
// source: types/query_outbound.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, Exact, isSet } from "../../helpers";
import { Coin } from "../common/common";

export const protobufPackage = "types";

export interface QueryScheduledOutboundRequest {
  height: string;
}

export interface QueryPendingOutboundRequest {
  height: string;
}

export interface QueryOutboundResponse {
  txOutItems: QueryTxOutItem[];
}

export interface QueryTxOutItem {
  chain: string;
  toAddress: string;
  vaultPubKey: string;
  coin: Coin | undefined;
  memo: string;
  maxGas: Coin[];
  gasRate: number;
  inHash: string;
  outHash: string;
  height: number;
  /** clout spent in RUNE for the outbound */
  cloutSpent: string;
}

function createBaseQueryScheduledOutboundRequest(): QueryScheduledOutboundRequest {
  return { height: "" };
}

export const QueryScheduledOutboundRequest = {
  encode(
    message: QueryScheduledOutboundRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.height !== "") {
      writer.uint32(10).string(message.height);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryScheduledOutboundRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryScheduledOutboundRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryScheduledOutboundRequest {
    return {
      height: isSet(object.height) ? globalThis.String(object.height) : "",
    };
  },

  toJSON(message: QueryScheduledOutboundRequest): unknown {
    const obj: any = {};
    if (message.height !== "") {
      obj.height = message.height;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryScheduledOutboundRequest>, I>>(
    base?: I
  ): QueryScheduledOutboundRequest {
    return QueryScheduledOutboundRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryScheduledOutboundRequest>, I>>(
    object: I
  ): QueryScheduledOutboundRequest {
    const message = createBaseQueryScheduledOutboundRequest();
    message.height = object.height ?? "";
    return message;
  },
};

function createBaseQueryPendingOutboundRequest(): QueryPendingOutboundRequest {
  return { height: "" };
}

export const QueryPendingOutboundRequest = {
  encode(
    message: QueryPendingOutboundRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.height !== "") {
      writer.uint32(10).string(message.height);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryPendingOutboundRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingOutboundRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): QueryPendingOutboundRequest {
    return {
      height: isSet(object.height) ? globalThis.String(object.height) : "",
    };
  },

  toJSON(message: QueryPendingOutboundRequest): unknown {
    const obj: any = {};
    if (message.height !== "") {
      obj.height = message.height;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryPendingOutboundRequest>, I>>(
    base?: I
  ): QueryPendingOutboundRequest {
    return QueryPendingOutboundRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryPendingOutboundRequest>, I>>(
    object: I
  ): QueryPendingOutboundRequest {
    const message = createBaseQueryPendingOutboundRequest();
    message.height = object.height ?? "";
    return message;
  },
};

function createBaseQueryOutboundResponse(): QueryOutboundResponse {
  return { txOutItems: [] };
}

export const QueryOutboundResponse = {
  encode(
    message: QueryOutboundResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    for (const v of message.txOutItems) {
      QueryTxOutItem.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryOutboundResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutboundResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.txOutItems.push(
            QueryTxOutItem.decode(reader, reader.uint32())
          );
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryOutboundResponse {
    return {
      txOutItems: globalThis.Array.isArray(object?.txOutItems)
        ? object.txOutItems.map((e: any) => QueryTxOutItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryOutboundResponse): unknown {
    const obj: any = {};
    if (message.txOutItems?.length) {
      obj.txOutItems = message.txOutItems.map((e) => QueryTxOutItem.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryOutboundResponse>, I>>(
    base?: I
  ): QueryOutboundResponse {
    return QueryOutboundResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryOutboundResponse>, I>>(
    object: I
  ): QueryOutboundResponse {
    const message = createBaseQueryOutboundResponse();
    message.txOutItems =
      object.txOutItems?.map((e) => QueryTxOutItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryTxOutItem(): QueryTxOutItem {
  return {
    chain: "",
    toAddress: "",
    vaultPubKey: "",
    coin: undefined,
    memo: "",
    maxGas: [],
    gasRate: 0,
    inHash: "",
    outHash: "",
    height: 0,
    cloutSpent: "",
  };
}

export const QueryTxOutItem = {
  encode(
    message: QueryTxOutItem,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.toAddress !== "") {
      writer.uint32(18).string(message.toAddress);
    }
    if (message.vaultPubKey !== "") {
      writer.uint32(26).string(message.vaultPubKey);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(34).fork()).ldelim();
    }
    if (message.memo !== "") {
      writer.uint32(42).string(message.memo);
    }
    for (const v of message.maxGas) {
      Coin.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.gasRate !== 0) {
      writer.uint32(56).int64(message.gasRate);
    }
    if (message.inHash !== "") {
      writer.uint32(66).string(message.inHash);
    }
    if (message.outHash !== "") {
      writer.uint32(74).string(message.outHash);
    }
    if (message.height !== 0) {
      writer.uint32(80).int64(message.height);
    }
    if (message.cloutSpent !== "") {
      writer.uint32(90).string(message.cloutSpent);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryTxOutItem {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTxOutItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.chain = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.toAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.vaultPubKey = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.coin = Coin.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.memo = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.maxGas.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.gasRate = Number(reader.int64());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.inHash = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.outHash = reader.string();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.height = Number(reader.int64());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.cloutSpent = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryTxOutItem {
    return {
      chain: isSet(object.chain) ? globalThis.String(object.chain) : "",
      toAddress: isSet(object.toAddress)
        ? globalThis.String(object.toAddress)
        : "",
      vaultPubKey: isSet(object.vaultPubKey)
        ? globalThis.String(object.vaultPubKey)
        : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
      memo: isSet(object.memo) ? globalThis.String(object.memo) : "",
      maxGas: globalThis.Array.isArray(object?.maxGas)
        ? object.maxGas.map((e: any) => Coin.fromJSON(e))
        : [],
      gasRate: isSet(object.gasRate) ? globalThis.Number(object.gasRate) : 0,
      inHash: isSet(object.inHash) ? globalThis.String(object.inHash) : "",
      outHash: isSet(object.outHash) ? globalThis.String(object.outHash) : "",
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
      cloutSpent: isSet(object.cloutSpent)
        ? globalThis.String(object.cloutSpent)
        : "",
    };
  },

  toJSON(message: QueryTxOutItem): unknown {
    const obj: any = {};
    if (message.chain !== "") {
      obj.chain = message.chain;
    }
    if (message.toAddress !== "") {
      obj.toAddress = message.toAddress;
    }
    if (message.vaultPubKey !== "") {
      obj.vaultPubKey = message.vaultPubKey;
    }
    if (message.coin !== undefined) {
      obj.coin = Coin.toJSON(message.coin);
    }
    if (message.memo !== "") {
      obj.memo = message.memo;
    }
    if (message.maxGas?.length) {
      obj.maxGas = message.maxGas.map((e) => Coin.toJSON(e));
    }
    if (message.gasRate !== 0) {
      obj.gasRate = Math.round(message.gasRate);
    }
    if (message.inHash !== "") {
      obj.inHash = message.inHash;
    }
    if (message.outHash !== "") {
      obj.outHash = message.outHash;
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    if (message.cloutSpent !== "") {
      obj.cloutSpent = message.cloutSpent;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryTxOutItem>, I>>(
    base?: I
  ): QueryTxOutItem {
    return QueryTxOutItem.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryTxOutItem>, I>>(
    object: I
  ): QueryTxOutItem {
    const message = createBaseQueryTxOutItem();
    message.chain = object.chain ?? "";
    message.toAddress = object.toAddress ?? "";
    message.vaultPubKey = object.vaultPubKey ?? "";
    message.coin =
      object.coin !== undefined && object.coin !== null
        ? Coin.fromPartial(object.coin)
        : undefined;
    message.memo = object.memo ?? "";
    message.maxGas = object.maxGas?.map((e) => Coin.fromPartial(e)) || [];
    message.gasRate = object.gasRate ?? 0;
    message.inHash = object.inHash ?? "";
    message.outHash = object.outHash ?? "";
    message.height = object.height ?? 0;
    message.cloutSpent = object.cloutSpent ?? "";
    return message;
  },
};
