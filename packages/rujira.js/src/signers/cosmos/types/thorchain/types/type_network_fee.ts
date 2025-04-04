// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               unknown
// source: types/type_network_fee.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, Exact, isSet } from "../../helpers";
export const protobufPackage = "types";

/**
 * NetworkFee represents the fee rate and typical outbound transaction size. Some chains
 * may have simplifid usage to report the fee as the "fee_rate" and set size to 1.
 */
export interface NetworkFee {
  chain: string;
  transactionSize: number;
  transactionFeeRate: number;
}

function createBaseNetworkFee(): NetworkFee {
  return { chain: "", transactionSize: 0, transactionFeeRate: 0 };
}

export const NetworkFee = {
  encode(
    message: NetworkFee,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.transactionSize !== 0) {
      writer.uint32(16).uint64(message.transactionSize);
    }
    if (message.transactionFeeRate !== 0) {
      writer.uint32(24).uint64(message.transactionFeeRate);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): NetworkFee {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNetworkFee();
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
          if (tag !== 16) {
            break;
          }

          message.transactionSize = Number(reader.uint64());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.transactionFeeRate = Number(reader.uint64());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NetworkFee {
    return {
      chain: isSet(object.chain) ? globalThis.String(object.chain) : "",
      transactionSize: isSet(object.transactionSize)
        ? globalThis.Number(object.transactionSize)
        : 0,
      transactionFeeRate: isSet(object.transactionFeeRate)
        ? globalThis.Number(object.transactionFeeRate)
        : 0,
    };
  },

  toJSON(message: NetworkFee): unknown {
    const obj: any = {};
    if (message.chain !== "") {
      obj.chain = message.chain;
    }
    if (message.transactionSize !== 0) {
      obj.transactionSize = Math.round(message.transactionSize);
    }
    if (message.transactionFeeRate !== 0) {
      obj.transactionFeeRate = Math.round(message.transactionFeeRate);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NetworkFee>, I>>(base?: I): NetworkFee {
    return NetworkFee.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NetworkFee>, I>>(
    object: I
  ): NetworkFee {
    const message = createBaseNetworkFee();
    message.chain = object.chain ?? "";
    message.transactionSize = object.transactionSize ?? 0;
    message.transactionFeeRate = object.transactionFeeRate ?? 0;
    return message;
  },
};
