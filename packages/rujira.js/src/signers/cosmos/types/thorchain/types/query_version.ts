// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               unknown
// source: types/query_version.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, Exact, isSet } from "../../helpers";
export const protobufPackage = "types";

export interface QueryVersionRequest {
  height: string;
}

export interface QueryVersionResponse {
  /** current version */
  current: string;
  /** next version (minimum version for a node to become Active) */
  next: string;
  /** height at which the minimum joining version last changed */
  nextSinceHeight: number;
  /** querier version */
  querier: string;
}

function createBaseQueryVersionRequest(): QueryVersionRequest {
  return { height: "" };
}

export const QueryVersionRequest = {
  encode(
    message: QueryVersionRequest,
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
  ): QueryVersionRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVersionRequest();
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

  fromJSON(object: any): QueryVersionRequest {
    return {
      height: isSet(object.height) ? globalThis.String(object.height) : "",
    };
  },

  toJSON(message: QueryVersionRequest): unknown {
    const obj: any = {};
    if (message.height !== "") {
      obj.height = message.height;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryVersionRequest>, I>>(
    base?: I
  ): QueryVersionRequest {
    return QueryVersionRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryVersionRequest>, I>>(
    object: I
  ): QueryVersionRequest {
    const message = createBaseQueryVersionRequest();
    message.height = object.height ?? "";
    return message;
  },
};

function createBaseQueryVersionResponse(): QueryVersionResponse {
  return { current: "", next: "", nextSinceHeight: 0, querier: "" };
}

export const QueryVersionResponse = {
  encode(
    message: QueryVersionResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.current !== "") {
      writer.uint32(10).string(message.current);
    }
    if (message.next !== "") {
      writer.uint32(18).string(message.next);
    }
    if (message.nextSinceHeight !== 0) {
      writer.uint32(24).int64(message.nextSinceHeight);
    }
    if (message.querier !== "") {
      writer.uint32(34).string(message.querier);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryVersionResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVersionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.current = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.next = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.nextSinceHeight = Number(reader.int64());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.querier = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryVersionResponse {
    return {
      current: isSet(object.current) ? globalThis.String(object.current) : "",
      next: isSet(object.next) ? globalThis.String(object.next) : "",
      nextSinceHeight: isSet(object.nextSinceHeight)
        ? globalThis.Number(object.nextSinceHeight)
        : 0,
      querier: isSet(object.querier) ? globalThis.String(object.querier) : "",
    };
  },

  toJSON(message: QueryVersionResponse): unknown {
    const obj: any = {};
    if (message.current !== "") {
      obj.current = message.current;
    }
    if (message.next !== "") {
      obj.next = message.next;
    }
    if (message.nextSinceHeight !== 0) {
      obj.nextSinceHeight = Math.round(message.nextSinceHeight);
    }
    if (message.querier !== "") {
      obj.querier = message.querier;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryVersionResponse>, I>>(
    base?: I
  ): QueryVersionResponse {
    return QueryVersionResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryVersionResponse>, I>>(
    object: I
  ): QueryVersionResponse {
    const message = createBaseQueryVersionResponse();
    message.current = object.current ?? "";
    message.next = object.next ?? "";
    message.nextSinceHeight = object.nextSinceHeight ?? 0;
    message.querier = object.querier ?? "";
    return message;
  },
};
