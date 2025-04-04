// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               unknown
// source: types/misc.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, Exact, isSet } from "../../helpers";
export const protobufPackage = "types";

export interface ProtoInt64 {
  value: number;
}

export interface ProtoUint64 {
  value: number;
}

export interface ProtoAccAddresses {
  value: Uint8Array[];
}

export interface ProtoStrings {
  value: string[];
}

export interface ProtoBools {
  value: boolean[];
}

function createBaseProtoInt64(): ProtoInt64 {
  return { value: 0 };
}

export const ProtoInt64 = {
  encode(
    message: ProtoInt64,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.value !== 0) {
      writer.uint32(8).int64(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProtoInt64 {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoInt64();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = Number(reader.int64());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProtoInt64 {
    return { value: isSet(object.value) ? globalThis.Number(object.value) : 0 };
  },

  toJSON(message: ProtoInt64): unknown {
    const obj: any = {};
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProtoInt64>, I>>(base?: I): ProtoInt64 {
    return ProtoInt64.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProtoInt64>, I>>(
    object: I
  ): ProtoInt64 {
    const message = createBaseProtoInt64();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseProtoUint64(): ProtoUint64 {
  return { value: 0 };
}

export const ProtoUint64 = {
  encode(
    message: ProtoUint64,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.value !== 0) {
      writer.uint32(8).uint64(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProtoUint64 {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoUint64();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.value = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProtoUint64 {
    return { value: isSet(object.value) ? globalThis.Number(object.value) : 0 };
  },

  toJSON(message: ProtoUint64): unknown {
    const obj: any = {};
    if (message.value !== 0) {
      obj.value = Math.round(message.value);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProtoUint64>, I>>(base?: I): ProtoUint64 {
    return ProtoUint64.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProtoUint64>, I>>(
    object: I
  ): ProtoUint64 {
    const message = createBaseProtoUint64();
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseProtoAccAddresses(): ProtoAccAddresses {
  return { value: [] };
}

export const ProtoAccAddresses = {
  encode(
    message: ProtoAccAddresses,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    for (const v of message.value) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProtoAccAddresses {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoAccAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProtoAccAddresses {
    return {
      value: globalThis.Array.isArray(object?.value)
        ? object.value.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: ProtoAccAddresses): unknown {
    const obj: any = {};
    if (message.value?.length) {
      obj.value = message.value.map((e) => base64FromBytes(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProtoAccAddresses>, I>>(
    base?: I
  ): ProtoAccAddresses {
    return ProtoAccAddresses.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProtoAccAddresses>, I>>(
    object: I
  ): ProtoAccAddresses {
    const message = createBaseProtoAccAddresses();
    message.value = object.value?.map((e) => e) || [];
    return message;
  },
};

function createBaseProtoStrings(): ProtoStrings {
  return { value: [] };
}

export const ProtoStrings = {
  encode(
    message: ProtoStrings,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    for (const v of message.value) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProtoStrings {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoStrings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProtoStrings {
    return {
      value: globalThis.Array.isArray(object?.value)
        ? object.value.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: ProtoStrings): unknown {
    const obj: any = {};
    if (message.value?.length) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProtoStrings>, I>>(
    base?: I
  ): ProtoStrings {
    return ProtoStrings.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProtoStrings>, I>>(
    object: I
  ): ProtoStrings {
    const message = createBaseProtoStrings();
    message.value = object.value?.map((e) => e) || [];
    return message;
  },
};

function createBaseProtoBools(): ProtoBools {
  return { value: [] };
}

export const ProtoBools = {
  encode(
    message: ProtoBools,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.value) {
      writer.bool(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProtoBools {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtoBools();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.value.push(reader.bool());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.value.push(reader.bool());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProtoBools {
    return {
      value: globalThis.Array.isArray(object?.value)
        ? object.value.map((e: any) => globalThis.Boolean(e))
        : [],
    };
  },

  toJSON(message: ProtoBools): unknown {
    const obj: any = {};
    if (message.value?.length) {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ProtoBools>, I>>(base?: I): ProtoBools {
    return ProtoBools.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ProtoBools>, I>>(
    object: I
  ): ProtoBools {
    const message = createBaseProtoBools();
    message.value = object.value?.map((e) => e) || [];
    return message;
  },
};
