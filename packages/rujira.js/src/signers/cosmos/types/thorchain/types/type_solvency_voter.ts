// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               unknown
// source: types/type_solvency_voter.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, Exact, isSet } from "../../helpers";
import { Coin } from "../common/common";

export const protobufPackage = "types";

export interface SolvencyVoter {
  id: string;
  chain: string;
  pubKey: string;
  coins: Coin[];
  height: number;
  consensusBlockHeight: number;
  signers: string[];
}

function createBaseSolvencyVoter(): SolvencyVoter {
  return {
    id: "",
    chain: "",
    pubKey: "",
    coins: [],
    height: 0,
    consensusBlockHeight: 0,
    signers: [],
  };
}

export const SolvencyVoter = {
  encode(
    message: SolvencyVoter,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.pubKey !== "") {
      writer.uint32(26).string(message.pubKey);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.height !== 0) {
      writer.uint32(40).int64(message.height);
    }
    if (message.consensusBlockHeight !== 0) {
      writer.uint32(48).int64(message.consensusBlockHeight);
    }
    for (const v of message.signers) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SolvencyVoter {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSolvencyVoter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.chain = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pubKey = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.coins.push(Coin.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.height = Number(reader.int64());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.consensusBlockHeight = Number(reader.int64());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.signers.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SolvencyVoter {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      chain: isSet(object.chain) ? globalThis.String(object.chain) : "",
      pubKey: isSet(object.pubKey) ? globalThis.String(object.pubKey) : "",
      coins: globalThis.Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
      consensusBlockHeight: isSet(object.consensusBlockHeight)
        ? globalThis.Number(object.consensusBlockHeight)
        : 0,
      signers: globalThis.Array.isArray(object?.signers)
        ? object.signers.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: SolvencyVoter): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.chain !== "") {
      obj.chain = message.chain;
    }
    if (message.pubKey !== "") {
      obj.pubKey = message.pubKey;
    }
    if (message.coins?.length) {
      obj.coins = message.coins.map((e) => Coin.toJSON(e));
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    if (message.consensusBlockHeight !== 0) {
      obj.consensusBlockHeight = Math.round(message.consensusBlockHeight);
    }
    if (message.signers?.length) {
      obj.signers = message.signers;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SolvencyVoter>, I>>(
    base?: I
  ): SolvencyVoter {
    return SolvencyVoter.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SolvencyVoter>, I>>(
    object: I
  ): SolvencyVoter {
    const message = createBaseSolvencyVoter();
    message.id = object.id ?? "";
    message.chain = object.chain ?? "";
    message.pubKey = object.pubKey ?? "";
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    message.height = object.height ?? 0;
    message.consensusBlockHeight = object.consensusBlockHeight ?? 0;
    message.signers = object.signers?.map((e) => e) || [];
    return message;
  },
};
