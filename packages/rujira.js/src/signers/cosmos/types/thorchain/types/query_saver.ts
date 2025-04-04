// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               unknown
// source: types/query_saver.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, Exact, isSet } from "../../helpers";
export const protobufPackage = "types";

export interface QuerySaverRequest {
  asset: string;
  address: string;
  height: string;
}

export interface QuerySaverResponse {
  asset: string;
  assetAddress: string;
  lastAddHeight: number;
  lastWithdrawHeight: number;
  units: string;
  assetDepositValue: string;
  assetRedeemValue: string;
  growthPct: string;
}

export interface QuerySaversRequest {
  asset: string;
  height: string;
}

export interface QuerySaversResponse {
  savers: QuerySaverResponse[];
}

function createBaseQuerySaverRequest(): QuerySaverRequest {
  return { asset: "", address: "", height: "" };
}

export const QuerySaverRequest = {
  encode(
    message: QuerySaverRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.height !== "") {
      writer.uint32(26).string(message.height);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QuerySaverRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySaverRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.asset = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): QuerySaverRequest {
    return {
      asset: isSet(object.asset) ? globalThis.String(object.asset) : "",
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      height: isSet(object.height) ? globalThis.String(object.height) : "",
    };
  },

  toJSON(message: QuerySaverRequest): unknown {
    const obj: any = {};
    if (message.asset !== "") {
      obj.asset = message.asset;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.height !== "") {
      obj.height = message.height;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuerySaverRequest>, I>>(
    base?: I
  ): QuerySaverRequest {
    return QuerySaverRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuerySaverRequest>, I>>(
    object: I
  ): QuerySaverRequest {
    const message = createBaseQuerySaverRequest();
    message.asset = object.asset ?? "";
    message.address = object.address ?? "";
    message.height = object.height ?? "";
    return message;
  },
};

function createBaseQuerySaverResponse(): QuerySaverResponse {
  return {
    asset: "",
    assetAddress: "",
    lastAddHeight: 0,
    lastWithdrawHeight: 0,
    units: "",
    assetDepositValue: "",
    assetRedeemValue: "",
    growthPct: "",
  };
}

export const QuerySaverResponse = {
  encode(
    message: QuerySaverResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.assetAddress !== "") {
      writer.uint32(18).string(message.assetAddress);
    }
    if (message.lastAddHeight !== 0) {
      writer.uint32(24).int64(message.lastAddHeight);
    }
    if (message.lastWithdrawHeight !== 0) {
      writer.uint32(32).int64(message.lastWithdrawHeight);
    }
    if (message.units !== "") {
      writer.uint32(42).string(message.units);
    }
    if (message.assetDepositValue !== "") {
      writer.uint32(50).string(message.assetDepositValue);
    }
    if (message.assetRedeemValue !== "") {
      writer.uint32(58).string(message.assetRedeemValue);
    }
    if (message.growthPct !== "") {
      writer.uint32(66).string(message.growthPct);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QuerySaverResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySaverResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.asset = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.assetAddress = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.lastAddHeight = Number(reader.int64());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.lastWithdrawHeight = Number(reader.int64());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.units = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.assetDepositValue = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.assetRedeemValue = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.growthPct = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QuerySaverResponse {
    return {
      asset: isSet(object.asset) ? globalThis.String(object.asset) : "",
      assetAddress: isSet(object.assetAddress)
        ? globalThis.String(object.assetAddress)
        : "",
      lastAddHeight: isSet(object.lastAddHeight)
        ? globalThis.Number(object.lastAddHeight)
        : 0,
      lastWithdrawHeight: isSet(object.lastWithdrawHeight)
        ? globalThis.Number(object.lastWithdrawHeight)
        : 0,
      units: isSet(object.units) ? globalThis.String(object.units) : "",
      assetDepositValue: isSet(object.assetDepositValue)
        ? globalThis.String(object.assetDepositValue)
        : "",
      assetRedeemValue: isSet(object.assetRedeemValue)
        ? globalThis.String(object.assetRedeemValue)
        : "",
      growthPct: isSet(object.growthPct)
        ? globalThis.String(object.growthPct)
        : "",
    };
  },

  toJSON(message: QuerySaverResponse): unknown {
    const obj: any = {};
    if (message.asset !== "") {
      obj.asset = message.asset;
    }
    if (message.assetAddress !== "") {
      obj.assetAddress = message.assetAddress;
    }
    if (message.lastAddHeight !== 0) {
      obj.lastAddHeight = Math.round(message.lastAddHeight);
    }
    if (message.lastWithdrawHeight !== 0) {
      obj.lastWithdrawHeight = Math.round(message.lastWithdrawHeight);
    }
    if (message.units !== "") {
      obj.units = message.units;
    }
    if (message.assetDepositValue !== "") {
      obj.assetDepositValue = message.assetDepositValue;
    }
    if (message.assetRedeemValue !== "") {
      obj.assetRedeemValue = message.assetRedeemValue;
    }
    if (message.growthPct !== "") {
      obj.growthPct = message.growthPct;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuerySaverResponse>, I>>(
    base?: I
  ): QuerySaverResponse {
    return QuerySaverResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuerySaverResponse>, I>>(
    object: I
  ): QuerySaverResponse {
    const message = createBaseQuerySaverResponse();
    message.asset = object.asset ?? "";
    message.assetAddress = object.assetAddress ?? "";
    message.lastAddHeight = object.lastAddHeight ?? 0;
    message.lastWithdrawHeight = object.lastWithdrawHeight ?? 0;
    message.units = object.units ?? "";
    message.assetDepositValue = object.assetDepositValue ?? "";
    message.assetRedeemValue = object.assetRedeemValue ?? "";
    message.growthPct = object.growthPct ?? "";
    return message;
  },
};

function createBaseQuerySaversRequest(): QuerySaversRequest {
  return { asset: "", height: "" };
}

export const QuerySaversRequest = {
  encode(
    message: QuerySaversRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.asset !== "") {
      writer.uint32(10).string(message.asset);
    }
    if (message.height !== "") {
      writer.uint32(18).string(message.height);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QuerySaversRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySaversRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.asset = reader.string();
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

  fromJSON(object: any): QuerySaversRequest {
    return {
      asset: isSet(object.asset) ? globalThis.String(object.asset) : "",
      height: isSet(object.height) ? globalThis.String(object.height) : "",
    };
  },

  toJSON(message: QuerySaversRequest): unknown {
    const obj: any = {};
    if (message.asset !== "") {
      obj.asset = message.asset;
    }
    if (message.height !== "") {
      obj.height = message.height;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuerySaversRequest>, I>>(
    base?: I
  ): QuerySaversRequest {
    return QuerySaversRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuerySaversRequest>, I>>(
    object: I
  ): QuerySaversRequest {
    const message = createBaseQuerySaversRequest();
    message.asset = object.asset ?? "";
    message.height = object.height ?? "";
    return message;
  },
};

function createBaseQuerySaversResponse(): QuerySaversResponse {
  return { savers: [] };
}

export const QuerySaversResponse = {
  encode(
    message: QuerySaversResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    for (const v of message.savers) {
      QuerySaverResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QuerySaversResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySaversResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.savers.push(
            QuerySaverResponse.decode(reader, reader.uint32())
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

  fromJSON(object: any): QuerySaversResponse {
    return {
      savers: globalThis.Array.isArray(object?.savers)
        ? object.savers.map((e: any) => QuerySaverResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QuerySaversResponse): unknown {
    const obj: any = {};
    if (message.savers?.length) {
      obj.savers = message.savers.map((e) => QuerySaverResponse.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QuerySaversResponse>, I>>(
    base?: I
  ): QuerySaversResponse {
    return QuerySaversResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QuerySaversResponse>, I>>(
    object: I
  ): QuerySaversResponse {
    const message = createBaseQuerySaversResponse();
    message.savers =
      object.savers?.map((e) => QuerySaverResponse.fromPartial(e)) || [];
    return message;
  },
};
