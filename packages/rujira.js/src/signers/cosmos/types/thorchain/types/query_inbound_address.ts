// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               unknown
// source: types/query_inbound_address.proto

import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, Exact, isSet } from "../../helpers";

/* eslint-disable */

export const protobufPackage = "types";

export interface QueryInboundAddressResponse {
  chain: string;
  pubKey: string;
  address: string;
  router: string;
  /** Returns true if trading is unavailable for this chain, either because trading is halted globally or specifically for this chain */
  halted: boolean;
  /** Returns true if trading is paused globally */
  globalTradingPaused: boolean;
  /** Returns true if trading is paused for this chain */
  chainTradingPaused: boolean;
  /** Returns true if LP actions are paused for this chain */
  chainLpActionsPaused: boolean;
  /** The minimum fee rate used by vaults to send outbound TXs. The actual fee rate may be higher. For EVM chains this is returned in gwei (1e9). */
  gasRate: string;
  /** Units of the gas_rate. */
  gasRateUnits: string;
  /** Avg size of outbound TXs on each chain. For UTXO chains it may be larger than average, as it takes into account vault consolidation txs, which can have many vouts */
  outboundTxSize: string;
  /** The total outbound fee charged to the user for outbound txs in the gas asset of the chain. */
  outboundFee: string;
  /** Defines the minimum transaction size for the chain in base units (sats, wei, uatom). Transactions with asset amounts lower than the dust_threshold are ignored. */
  dustThreshold: string;
}

export interface QueryInboundAddressesRequest {
  height: string;
}

export interface QueryInboundAddressesResponse {
  inboundAddresses: QueryInboundAddressResponse[];
}

function createBaseQueryInboundAddressResponse(): QueryInboundAddressResponse {
  return {
    chain: "",
    pubKey: "",
    address: "",
    router: "",
    halted: false,
    globalTradingPaused: false,
    chainTradingPaused: false,
    chainLpActionsPaused: false,
    gasRate: "",
    gasRateUnits: "",
    outboundTxSize: "",
    outboundFee: "",
    dustThreshold: "",
  };
}

export const QueryInboundAddressResponse = {
  encode(
    message: QueryInboundAddressResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.pubKey !== "") {
      writer.uint32(18).string(message.pubKey);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.router !== "") {
      writer.uint32(34).string(message.router);
    }
    if (message.halted !== false) {
      writer.uint32(40).bool(message.halted);
    }
    if (message.globalTradingPaused !== false) {
      writer.uint32(48).bool(message.globalTradingPaused);
    }
    if (message.chainTradingPaused !== false) {
      writer.uint32(56).bool(message.chainTradingPaused);
    }
    if (message.chainLpActionsPaused !== false) {
      writer.uint32(64).bool(message.chainLpActionsPaused);
    }
    if (message.gasRate !== "") {
      writer.uint32(74).string(message.gasRate);
    }
    if (message.gasRateUnits !== "") {
      writer.uint32(82).string(message.gasRateUnits);
    }
    if (message.outboundTxSize !== "") {
      writer.uint32(90).string(message.outboundTxSize);
    }
    if (message.outboundFee !== "") {
      writer.uint32(98).string(message.outboundFee);
    }
    if (message.dustThreshold !== "") {
      writer.uint32(106).string(message.dustThreshold);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryInboundAddressResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInboundAddressResponse();
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

          message.pubKey = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.address = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.router = reader.string();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.halted = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.globalTradingPaused = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.chainTradingPaused = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.chainLpActionsPaused = reader.bool();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.gasRate = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.gasRateUnits = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.outboundTxSize = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.outboundFee = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.dustThreshold = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryInboundAddressResponse {
    return {
      chain: isSet(object.chain) ? globalThis.String(object.chain) : "",
      pubKey: isSet(object.pubKey) ? globalThis.String(object.pubKey) : "",
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      router: isSet(object.router) ? globalThis.String(object.router) : "",
      halted: isSet(object.halted) ? globalThis.Boolean(object.halted) : false,
      globalTradingPaused: isSet(object.globalTradingPaused)
        ? globalThis.Boolean(object.globalTradingPaused)
        : false,
      chainTradingPaused: isSet(object.chainTradingPaused)
        ? globalThis.Boolean(object.chainTradingPaused)
        : false,
      chainLpActionsPaused: isSet(object.chainLpActionsPaused)
        ? globalThis.Boolean(object.chainLpActionsPaused)
        : false,
      gasRate: isSet(object.gasRate) ? globalThis.String(object.gasRate) : "",
      gasRateUnits: isSet(object.gasRateUnits)
        ? globalThis.String(object.gasRateUnits)
        : "",
      outboundTxSize: isSet(object.outboundTxSize)
        ? globalThis.String(object.outboundTxSize)
        : "",
      outboundFee: isSet(object.outboundFee)
        ? globalThis.String(object.outboundFee)
        : "",
      dustThreshold: isSet(object.dustThreshold)
        ? globalThis.String(object.dustThreshold)
        : "",
    };
  },

  toJSON(message: QueryInboundAddressResponse): unknown {
    const obj: any = {};
    if (message.chain !== "") {
      obj.chain = message.chain;
    }
    if (message.pubKey !== "") {
      obj.pubKey = message.pubKey;
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.router !== "") {
      obj.router = message.router;
    }
    if (message.halted !== false) {
      obj.halted = message.halted;
    }
    if (message.globalTradingPaused !== false) {
      obj.globalTradingPaused = message.globalTradingPaused;
    }
    if (message.chainTradingPaused !== false) {
      obj.chainTradingPaused = message.chainTradingPaused;
    }
    if (message.chainLpActionsPaused !== false) {
      obj.chainLpActionsPaused = message.chainLpActionsPaused;
    }
    if (message.gasRate !== "") {
      obj.gasRate = message.gasRate;
    }
    if (message.gasRateUnits !== "") {
      obj.gasRateUnits = message.gasRateUnits;
    }
    if (message.outboundTxSize !== "") {
      obj.outboundTxSize = message.outboundTxSize;
    }
    if (message.outboundFee !== "") {
      obj.outboundFee = message.outboundFee;
    }
    if (message.dustThreshold !== "") {
      obj.dustThreshold = message.dustThreshold;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryInboundAddressResponse>, I>>(
    base?: I
  ): QueryInboundAddressResponse {
    return QueryInboundAddressResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryInboundAddressResponse>, I>>(
    object: I
  ): QueryInboundAddressResponse {
    const message = createBaseQueryInboundAddressResponse();
    message.chain = object.chain ?? "";
    message.pubKey = object.pubKey ?? "";
    message.address = object.address ?? "";
    message.router = object.router ?? "";
    message.halted = object.halted ?? false;
    message.globalTradingPaused = object.globalTradingPaused ?? false;
    message.chainTradingPaused = object.chainTradingPaused ?? false;
    message.chainLpActionsPaused = object.chainLpActionsPaused ?? false;
    message.gasRate = object.gasRate ?? "";
    message.gasRateUnits = object.gasRateUnits ?? "";
    message.outboundTxSize = object.outboundTxSize ?? "";
    message.outboundFee = object.outboundFee ?? "";
    message.dustThreshold = object.dustThreshold ?? "";
    return message;
  },
};

function createBaseQueryInboundAddressesRequest(): QueryInboundAddressesRequest {
  return { height: "" };
}

export const QueryInboundAddressesRequest = {
  encode(
    message: QueryInboundAddressesRequest,
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
  ): QueryInboundAddressesRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInboundAddressesRequest();
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

  fromJSON(object: any): QueryInboundAddressesRequest {
    return {
      height: isSet(object.height) ? globalThis.String(object.height) : "",
    };
  },

  toJSON(message: QueryInboundAddressesRequest): unknown {
    const obj: any = {};
    if (message.height !== "") {
      obj.height = message.height;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryInboundAddressesRequest>, I>>(
    base?: I
  ): QueryInboundAddressesRequest {
    return QueryInboundAddressesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryInboundAddressesRequest>, I>>(
    object: I
  ): QueryInboundAddressesRequest {
    const message = createBaseQueryInboundAddressesRequest();
    message.height = object.height ?? "";
    return message;
  },
};

function createBaseQueryInboundAddressesResponse(): QueryInboundAddressesResponse {
  return { inboundAddresses: [] };
}

export const QueryInboundAddressesResponse = {
  encode(
    message: QueryInboundAddressesResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    for (const v of message.inboundAddresses) {
      QueryInboundAddressResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryInboundAddressesResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInboundAddressesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.inboundAddresses.push(
            QueryInboundAddressResponse.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryInboundAddressesResponse {
    return {
      inboundAddresses: globalThis.Array.isArray(object?.inboundAddresses)
        ? object.inboundAddresses.map((e: any) =>
            QueryInboundAddressResponse.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: QueryInboundAddressesResponse): unknown {
    const obj: any = {};
    if (message.inboundAddresses?.length) {
      obj.inboundAddresses = message.inboundAddresses.map((e) =>
        QueryInboundAddressResponse.toJSON(e)
      );
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryInboundAddressesResponse>, I>>(
    base?: I
  ): QueryInboundAddressesResponse {
    return QueryInboundAddressesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryInboundAddressesResponse>, I>>(
    object: I
  ): QueryInboundAddressesResponse {
    const message = createBaseQueryInboundAddressesResponse();
    message.inboundAddresses =
      object.inboundAddresses?.map((e) =>
        QueryInboundAddressResponse.fromPartial(e)
      ) || [];
    return message;
  },
};
