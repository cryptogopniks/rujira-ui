// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               unknown
// source: thorchain/denom/v1/types/query.proto

import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, Exact, isSet } from "../../../../helpers";

/* eslint-disable */

export const protobufPackage = "thorchain.denom.v1";

export interface QueryDenomAdminRequest {
  denom: string;
}

export interface QueryDenomAdminResponse {
  admin: string;
}

function createBaseQueryDenomAdminRequest(): QueryDenomAdminRequest {
  return { denom: "" };
}

export const QueryDenomAdminRequest = {
  encode(
    message: QueryDenomAdminRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryDenomAdminRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomAdminRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDenomAdminRequest {
    return {
      denom: isSet(object.denom) ? globalThis.String(object.denom) : "",
    };
  },

  toJSON(message: QueryDenomAdminRequest): unknown {
    const obj: any = {};
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDenomAdminRequest>, I>>(
    base?: I
  ): QueryDenomAdminRequest {
    return QueryDenomAdminRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomAdminRequest>, I>>(
    object: I
  ): QueryDenomAdminRequest {
    const message = createBaseQueryDenomAdminRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryDenomAdminResponse(): QueryDenomAdminResponse {
  return { admin: "" };
}

export const QueryDenomAdminResponse = {
  encode(
    message: QueryDenomAdminResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.admin !== "") {
      writer.uint32(10).string(message.admin);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryDenomAdminResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomAdminResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.admin = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryDenomAdminResponse {
    return {
      admin: isSet(object.admin) ? globalThis.String(object.admin) : "",
    };
  },

  toJSON(message: QueryDenomAdminResponse): unknown {
    const obj: any = {};
    if (message.admin !== "") {
      obj.admin = message.admin;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDenomAdminResponse>, I>>(
    base?: I
  ): QueryDenomAdminResponse {
    return QueryDenomAdminResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryDenomAdminResponse>, I>>(
    object: I
  ): QueryDenomAdminResponse {
    const message = createBaseQueryDenomAdminResponse();
    message.admin = object.admin ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  DenomAdmin(request: QueryDenomAdminRequest): Promise<QueryDenomAdminResponse>;
}

export const QueryServiceName = "thorchain.denom.v1.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.DenomAdmin = this.DenomAdmin.bind(this);
  }
  DenomAdmin(
    request: QueryDenomAdminRequest
  ): Promise<QueryDenomAdminResponse> {
    const data = QueryDenomAdminRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DenomAdmin", data);
    return promise.then((data) =>
      QueryDenomAdminResponse.decode(new BinaryReader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}
