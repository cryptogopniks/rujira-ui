// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               unknown
// source: types/query_export.proto

import { BinaryReader, BinaryWriter } from "../../binary";
import {
  DeepPartial,
  Exact,
  base64FromBytes,
  bytesFromBase64,
  isSet,
} from "../../helpers";

/* eslint-disable */

export const protobufPackage = "types";

export interface QueryExportRequest {
  height: string;
}

export interface QueryExportResponse {
  content: Uint8Array;
}

function createBaseQueryExportRequest(): QueryExportRequest {
  return { height: "" };
}

export const QueryExportRequest = {
  encode(
    message: QueryExportRequest,
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
  ): QueryExportRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExportRequest();
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

  fromJSON(object: any): QueryExportRequest {
    return {
      height: isSet(object.height) ? globalThis.String(object.height) : "",
    };
  },

  toJSON(message: QueryExportRequest): unknown {
    const obj: any = {};
    if (message.height !== "") {
      obj.height = message.height;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryExportRequest>, I>>(
    base?: I
  ): QueryExportRequest {
    return QueryExportRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryExportRequest>, I>>(
    object: I
  ): QueryExportRequest {
    const message = createBaseQueryExportRequest();
    message.height = object.height ?? "";
    return message;
  },
};

function createBaseQueryExportResponse(): QueryExportResponse {
  return { content: new Uint8Array(0) };
}

export const QueryExportResponse = {
  encode(
    message: QueryExportResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.content.length !== 0) {
      writer.uint32(10).bytes(message.content);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryExportResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.content = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryExportResponse {
    return {
      content: isSet(object.content)
        ? bytesFromBase64(object.content)
        : new Uint8Array(0),
    };
  },

  toJSON(message: QueryExportResponse): unknown {
    const obj: any = {};
    if (message.content.length !== 0) {
      obj.content = base64FromBytes(message.content);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryExportResponse>, I>>(
    base?: I
  ): QueryExportResponse {
    return QueryExportResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryExportResponse>, I>>(
    object: I
  ): QueryExportResponse {
    const message = createBaseQueryExportResponse();
    message.content = object.content ?? new Uint8Array(0);
    return message;
  },
};
