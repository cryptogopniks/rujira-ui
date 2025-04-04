// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               unknown
// source: types/type_liquidity_provider.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, Exact, isSet } from "../../helpers";
import { Asset } from "../common/common";

export const protobufPackage = "types";

export interface LiquidityProvider {
  asset: Asset | undefined;
  runeAddress: string;
  assetAddress: string;
  lastAddHeight: number;
  lastWithdrawHeight: number;
  units: string;
  pendingRune: string;
  pendingAsset: string;
  pendingTxId: string;
  runeDepositValue: string;
  assetDepositValue: string;
}

function createBaseLiquidityProvider(): LiquidityProvider {
  return {
    asset: undefined,
    runeAddress: "",
    assetAddress: "",
    lastAddHeight: 0,
    lastWithdrawHeight: 0,
    units: "",
    pendingRune: "",
    pendingAsset: "",
    pendingTxId: "",
    runeDepositValue: "",
    assetDepositValue: "",
  };
}

export const LiquidityProvider = {
  encode(
    message: LiquidityProvider,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }
    if (message.runeAddress !== "") {
      writer.uint32(18).string(message.runeAddress);
    }
    if (message.assetAddress !== "") {
      writer.uint32(26).string(message.assetAddress);
    }
    if (message.lastAddHeight !== 0) {
      writer.uint32(32).int64(message.lastAddHeight);
    }
    if (message.lastWithdrawHeight !== 0) {
      writer.uint32(40).int64(message.lastWithdrawHeight);
    }
    if (message.units !== "") {
      writer.uint32(50).string(message.units);
    }
    if (message.pendingRune !== "") {
      writer.uint32(58).string(message.pendingRune);
    }
    if (message.pendingAsset !== "") {
      writer.uint32(66).string(message.pendingAsset);
    }
    if (message.pendingTxId !== "") {
      writer.uint32(74).string(message.pendingTxId);
    }
    if (message.runeDepositValue !== "") {
      writer.uint32(82).string(message.runeDepositValue);
    }
    if (message.assetDepositValue !== "") {
      writer.uint32(90).string(message.assetDepositValue);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LiquidityProvider {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.asset = Asset.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.runeAddress = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.assetAddress = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.lastAddHeight = Number(reader.int64());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.lastWithdrawHeight = Number(reader.int64());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.units = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.pendingRune = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.pendingAsset = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.pendingTxId = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.runeDepositValue = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.assetDepositValue = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LiquidityProvider {
    return {
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
      runeAddress: isSet(object.runeAddress)
        ? globalThis.String(object.runeAddress)
        : "",
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
      pendingRune: isSet(object.pendingRune)
        ? globalThis.String(object.pendingRune)
        : "",
      pendingAsset: isSet(object.pendingAsset)
        ? globalThis.String(object.pendingAsset)
        : "",
      pendingTxId: isSet(object.pendingTxId)
        ? globalThis.String(object.pendingTxId)
        : "",
      runeDepositValue: isSet(object.runeDepositValue)
        ? globalThis.String(object.runeDepositValue)
        : "",
      assetDepositValue: isSet(object.assetDepositValue)
        ? globalThis.String(object.assetDepositValue)
        : "",
    };
  },

  toJSON(message: LiquidityProvider): unknown {
    const obj: any = {};
    if (message.asset !== undefined) {
      obj.asset = Asset.toJSON(message.asset);
    }
    if (message.runeAddress !== "") {
      obj.runeAddress = message.runeAddress;
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
    if (message.pendingRune !== "") {
      obj.pendingRune = message.pendingRune;
    }
    if (message.pendingAsset !== "") {
      obj.pendingAsset = message.pendingAsset;
    }
    if (message.pendingTxId !== "") {
      obj.pendingTxId = message.pendingTxId;
    }
    if (message.runeDepositValue !== "") {
      obj.runeDepositValue = message.runeDepositValue;
    }
    if (message.assetDepositValue !== "") {
      obj.assetDepositValue = message.assetDepositValue;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LiquidityProvider>, I>>(
    base?: I
  ): LiquidityProvider {
    return LiquidityProvider.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LiquidityProvider>, I>>(
    object: I
  ): LiquidityProvider {
    const message = createBaseLiquidityProvider();
    message.asset =
      object.asset !== undefined && object.asset !== null
        ? Asset.fromPartial(object.asset)
        : undefined;
    message.runeAddress = object.runeAddress ?? "";
    message.assetAddress = object.assetAddress ?? "";
    message.lastAddHeight = object.lastAddHeight ?? 0;
    message.lastWithdrawHeight = object.lastWithdrawHeight ?? 0;
    message.units = object.units ?? "";
    message.pendingRune = object.pendingRune ?? "";
    message.pendingAsset = object.pendingAsset ?? "";
    message.pendingTxId = object.pendingTxId ?? "";
    message.runeDepositValue = object.runeDepositValue ?? "";
    message.assetDepositValue = object.assetDepositValue ?? "";
    return message;
  },
};
