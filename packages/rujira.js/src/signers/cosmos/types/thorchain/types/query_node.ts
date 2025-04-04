// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               unknown
// source: types/query_node.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial, Exact, isSet } from "../../helpers";
import { PubKeySet } from "../common/common";

export const protobufPackage = "types";

export interface QueryNodeRequest {
  address: string;
  height: string;
}

export interface QueryNodeResponse {
  nodeAddress: string;
  status: string;
  pubKeySet: PubKeySet | undefined;
  /** the consensus pub key for the node */
  validatorConsPubKey: string;
  /** the P2PID (:6040/p2pid endpoint) of the node */
  peerId: string;
  /** the block height at which the node became active */
  activeBlockHeight: number;
  /** the block height of the current provided information for the node */
  statusSince: number;
  nodeOperatorAddress: string;
  /** current node bond */
  totalBond: string;
  bondProviders: NodeBondProviders | undefined;
  /** the set of vault public keys of which the node is a member */
  signerMembership: string[];
  requestedToLeave: boolean;
  /** indicates whether the node has been forced to leave by the network, typically via ban */
  forcedToLeave: boolean;
  leaveHeight: number;
  /** the currently set version of the node */
  ipAddress: string;
  version: string;
  /** the accumulated slash points, reset at churn but excessive slash points may carry over */
  slashPoints: number;
  jail: NodeJail | undefined;
  currentAward: string;
  /** the last observed heights for all chain by the node */
  observeChains: ChainHeight[];
  preflightStatus: NodePreflightStatus | undefined;
}

export interface QueryNodesRequest {
  height: string;
}

export interface QueryNodesResponse {
  nodes: QueryNodeResponse[];
}

export interface NodeBondProviders {
  nodeOperatorFee: string;
  providers: NodeBondProvider[];
}

export interface NodeBondProvider {
  bondAddress: string;
  bond: string;
}

export interface NodeJail {
  releaseHeight: number;
  reason: string;
}

export interface ChainHeight {
  chain: string;
  height: number;
}

export interface NodePreflightStatus {
  /** the next status of the node */
  status: string;
  /** the reason for the transition to the next status */
  reason: string;
  code: number;
}

function createBaseQueryNodeRequest(): QueryNodeRequest {
  return { address: "", height: "" };
}

export const QueryNodeRequest = {
  encode(
    message: QueryNodeRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.height !== "") {
      writer.uint32(18).string(message.height);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryNodeRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = reader.string();
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

  fromJSON(object: any): QueryNodeRequest {
    return {
      address: isSet(object.address) ? globalThis.String(object.address) : "",
      height: isSet(object.height) ? globalThis.String(object.height) : "",
    };
  },

  toJSON(message: QueryNodeRequest): unknown {
    const obj: any = {};
    if (message.address !== "") {
      obj.address = message.address;
    }
    if (message.height !== "") {
      obj.height = message.height;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryNodeRequest>, I>>(
    base?: I
  ): QueryNodeRequest {
    return QueryNodeRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryNodeRequest>, I>>(
    object: I
  ): QueryNodeRequest {
    const message = createBaseQueryNodeRequest();
    message.address = object.address ?? "";
    message.height = object.height ?? "";
    return message;
  },
};

function createBaseQueryNodeResponse(): QueryNodeResponse {
  return {
    nodeAddress: "",
    status: "",
    pubKeySet: undefined,
    validatorConsPubKey: "",
    peerId: "",
    activeBlockHeight: 0,
    statusSince: 0,
    nodeOperatorAddress: "",
    totalBond: "",
    bondProviders: undefined,
    signerMembership: [],
    requestedToLeave: false,
    forcedToLeave: false,
    leaveHeight: 0,
    ipAddress: "",
    version: "",
    slashPoints: 0,
    jail: undefined,
    currentAward: "",
    observeChains: [],
    preflightStatus: undefined,
  };
}

export const QueryNodeResponse = {
  encode(
    message: QueryNodeResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.nodeAddress !== "") {
      writer.uint32(10).string(message.nodeAddress);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    if (message.pubKeySet !== undefined) {
      PubKeySet.encode(message.pubKeySet, writer.uint32(26).fork()).ldelim();
    }
    if (message.validatorConsPubKey !== "") {
      writer.uint32(34).string(message.validatorConsPubKey);
    }
    if (message.peerId !== "") {
      writer.uint32(42).string(message.peerId);
    }
    if (message.activeBlockHeight !== 0) {
      writer.uint32(48).int64(message.activeBlockHeight);
    }
    if (message.statusSince !== 0) {
      writer.uint32(56).int64(message.statusSince);
    }
    if (message.nodeOperatorAddress !== "") {
      writer.uint32(66).string(message.nodeOperatorAddress);
    }
    if (message.totalBond !== "") {
      writer.uint32(74).string(message.totalBond);
    }
    if (message.bondProviders !== undefined) {
      NodeBondProviders.encode(
        message.bondProviders,
        writer.uint32(82).fork()
      ).ldelim();
    }
    for (const v of message.signerMembership) {
      writer.uint32(90).string(v!);
    }
    if (message.requestedToLeave !== false) {
      writer.uint32(96).bool(message.requestedToLeave);
    }
    if (message.forcedToLeave !== false) {
      writer.uint32(104).bool(message.forcedToLeave);
    }
    if (message.leaveHeight !== 0) {
      writer.uint32(112).int64(message.leaveHeight);
    }
    if (message.ipAddress !== "") {
      writer.uint32(122).string(message.ipAddress);
    }
    if (message.version !== "") {
      writer.uint32(130).string(message.version);
    }
    if (message.slashPoints !== 0) {
      writer.uint32(136).int64(message.slashPoints);
    }
    if (message.jail !== undefined) {
      NodeJail.encode(message.jail, writer.uint32(146).fork()).ldelim();
    }
    if (message.currentAward !== "") {
      writer.uint32(154).string(message.currentAward);
    }
    for (const v of message.observeChains) {
      ChainHeight.encode(v!, writer.uint32(162).fork()).ldelim();
    }
    if (message.preflightStatus !== undefined) {
      NodePreflightStatus.encode(
        message.preflightStatus,
        writer.uint32(170).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryNodeResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodeAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.status = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pubKeySet = PubKeySet.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.validatorConsPubKey = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.peerId = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.activeBlockHeight = Number(reader.int64());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.statusSince = Number(reader.int64());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.nodeOperatorAddress = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.totalBond = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.bondProviders = NodeBondProviders.decode(
            reader,
            reader.uint32()
          );
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.signerMembership.push(reader.string());
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.requestedToLeave = reader.bool();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.forcedToLeave = reader.bool();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.leaveHeight = Number(reader.int64());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.ipAddress = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.version = reader.string();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.slashPoints = Number(reader.int64());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.jail = NodeJail.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.currentAward = reader.string();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.observeChains.push(
            ChainHeight.decode(reader, reader.uint32())
          );
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.preflightStatus = NodePreflightStatus.decode(
            reader,
            reader.uint32()
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

  fromJSON(object: any): QueryNodeResponse {
    return {
      nodeAddress: isSet(object.nodeAddress)
        ? globalThis.String(object.nodeAddress)
        : "",
      status: isSet(object.status) ? globalThis.String(object.status) : "",
      pubKeySet: isSet(object.pubKeySet)
        ? PubKeySet.fromJSON(object.pubKeySet)
        : undefined,
      validatorConsPubKey: isSet(object.validatorConsPubKey)
        ? globalThis.String(object.validatorConsPubKey)
        : "",
      peerId: isSet(object.peerId) ? globalThis.String(object.peerId) : "",
      activeBlockHeight: isSet(object.activeBlockHeight)
        ? globalThis.Number(object.activeBlockHeight)
        : 0,
      statusSince: isSet(object.statusSince)
        ? globalThis.Number(object.statusSince)
        : 0,
      nodeOperatorAddress: isSet(object.nodeOperatorAddress)
        ? globalThis.String(object.nodeOperatorAddress)
        : "",
      totalBond: isSet(object.totalBond)
        ? globalThis.String(object.totalBond)
        : "",
      bondProviders: isSet(object.bondProviders)
        ? NodeBondProviders.fromJSON(object.bondProviders)
        : undefined,
      signerMembership: globalThis.Array.isArray(object?.signerMembership)
        ? object.signerMembership.map((e: any) => globalThis.String(e))
        : [],
      requestedToLeave: isSet(object.requestedToLeave)
        ? globalThis.Boolean(object.requestedToLeave)
        : false,
      forcedToLeave: isSet(object.forcedToLeave)
        ? globalThis.Boolean(object.forcedToLeave)
        : false,
      leaveHeight: isSet(object.leaveHeight)
        ? globalThis.Number(object.leaveHeight)
        : 0,
      ipAddress: isSet(object.ipAddress)
        ? globalThis.String(object.ipAddress)
        : "",
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      slashPoints: isSet(object.slashPoints)
        ? globalThis.Number(object.slashPoints)
        : 0,
      jail: isSet(object.jail) ? NodeJail.fromJSON(object.jail) : undefined,
      currentAward: isSet(object.currentAward)
        ? globalThis.String(object.currentAward)
        : "",
      observeChains: globalThis.Array.isArray(object?.observeChains)
        ? object.observeChains.map((e: any) => ChainHeight.fromJSON(e))
        : [],
      preflightStatus: isSet(object.preflightStatus)
        ? NodePreflightStatus.fromJSON(object.preflightStatus)
        : undefined,
    };
  },

  toJSON(message: QueryNodeResponse): unknown {
    const obj: any = {};
    if (message.nodeAddress !== "") {
      obj.nodeAddress = message.nodeAddress;
    }
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.pubKeySet !== undefined) {
      obj.pubKeySet = PubKeySet.toJSON(message.pubKeySet);
    }
    if (message.validatorConsPubKey !== "") {
      obj.validatorConsPubKey = message.validatorConsPubKey;
    }
    if (message.peerId !== "") {
      obj.peerId = message.peerId;
    }
    if (message.activeBlockHeight !== 0) {
      obj.activeBlockHeight = Math.round(message.activeBlockHeight);
    }
    if (message.statusSince !== 0) {
      obj.statusSince = Math.round(message.statusSince);
    }
    if (message.nodeOperatorAddress !== "") {
      obj.nodeOperatorAddress = message.nodeOperatorAddress;
    }
    if (message.totalBond !== "") {
      obj.totalBond = message.totalBond;
    }
    if (message.bondProviders !== undefined) {
      obj.bondProviders = NodeBondProviders.toJSON(message.bondProviders);
    }
    if (message.signerMembership?.length) {
      obj.signerMembership = message.signerMembership;
    }
    if (message.requestedToLeave !== false) {
      obj.requestedToLeave = message.requestedToLeave;
    }
    if (message.forcedToLeave !== false) {
      obj.forcedToLeave = message.forcedToLeave;
    }
    if (message.leaveHeight !== 0) {
      obj.leaveHeight = Math.round(message.leaveHeight);
    }
    if (message.ipAddress !== "") {
      obj.ipAddress = message.ipAddress;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.slashPoints !== 0) {
      obj.slashPoints = Math.round(message.slashPoints);
    }
    if (message.jail !== undefined) {
      obj.jail = NodeJail.toJSON(message.jail);
    }
    if (message.currentAward !== "") {
      obj.currentAward = message.currentAward;
    }
    if (message.observeChains?.length) {
      obj.observeChains = message.observeChains.map((e) =>
        ChainHeight.toJSON(e)
      );
    }
    if (message.preflightStatus !== undefined) {
      obj.preflightStatus = NodePreflightStatus.toJSON(message.preflightStatus);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryNodeResponse>, I>>(
    base?: I
  ): QueryNodeResponse {
    return QueryNodeResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryNodeResponse>, I>>(
    object: I
  ): QueryNodeResponse {
    const message = createBaseQueryNodeResponse();
    message.nodeAddress = object.nodeAddress ?? "";
    message.status = object.status ?? "";
    message.pubKeySet =
      object.pubKeySet !== undefined && object.pubKeySet !== null
        ? PubKeySet.fromPartial(object.pubKeySet)
        : undefined;
    message.validatorConsPubKey = object.validatorConsPubKey ?? "";
    message.peerId = object.peerId ?? "";
    message.activeBlockHeight = object.activeBlockHeight ?? 0;
    message.statusSince = object.statusSince ?? 0;
    message.nodeOperatorAddress = object.nodeOperatorAddress ?? "";
    message.totalBond = object.totalBond ?? "";
    message.bondProviders =
      object.bondProviders !== undefined && object.bondProviders !== null
        ? NodeBondProviders.fromPartial(object.bondProviders)
        : undefined;
    message.signerMembership = object.signerMembership?.map((e) => e) || [];
    message.requestedToLeave = object.requestedToLeave ?? false;
    message.forcedToLeave = object.forcedToLeave ?? false;
    message.leaveHeight = object.leaveHeight ?? 0;
    message.ipAddress = object.ipAddress ?? "";
    message.version = object.version ?? "";
    message.slashPoints = object.slashPoints ?? 0;
    message.jail =
      object.jail !== undefined && object.jail !== null
        ? NodeJail.fromPartial(object.jail)
        : undefined;
    message.currentAward = object.currentAward ?? "";
    message.observeChains =
      object.observeChains?.map((e) => ChainHeight.fromPartial(e)) || [];
    message.preflightStatus =
      object.preflightStatus !== undefined && object.preflightStatus !== null
        ? NodePreflightStatus.fromPartial(object.preflightStatus)
        : undefined;
    return message;
  },
};

function createBaseQueryNodesRequest(): QueryNodesRequest {
  return { height: "" };
}

export const QueryNodesRequest = {
  encode(
    message: QueryNodesRequest,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.height !== "") {
      writer.uint32(10).string(message.height);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryNodesRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNodesRequest();
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

  fromJSON(object: any): QueryNodesRequest {
    return {
      height: isSet(object.height) ? globalThis.String(object.height) : "",
    };
  },

  toJSON(message: QueryNodesRequest): unknown {
    const obj: any = {};
    if (message.height !== "") {
      obj.height = message.height;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryNodesRequest>, I>>(
    base?: I
  ): QueryNodesRequest {
    return QueryNodesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryNodesRequest>, I>>(
    object: I
  ): QueryNodesRequest {
    const message = createBaseQueryNodesRequest();
    message.height = object.height ?? "";
    return message;
  },
};

function createBaseQueryNodesResponse(): QueryNodesResponse {
  return { nodes: [] };
}

export const QueryNodesResponse = {
  encode(
    message: QueryNodesResponse,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    for (const v of message.nodes) {
      QueryNodeResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): QueryNodesResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNodesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodes.push(QueryNodeResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryNodesResponse {
    return {
      nodes: globalThis.Array.isArray(object?.nodes)
        ? object.nodes.map((e: any) => QueryNodeResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryNodesResponse): unknown {
    const obj: any = {};
    if (message.nodes?.length) {
      obj.nodes = message.nodes.map((e) => QueryNodeResponse.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryNodesResponse>, I>>(
    base?: I
  ): QueryNodesResponse {
    return QueryNodesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryNodesResponse>, I>>(
    object: I
  ): QueryNodesResponse {
    const message = createBaseQueryNodesResponse();
    message.nodes =
      object.nodes?.map((e) => QueryNodeResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNodeBondProviders(): NodeBondProviders {
  return { nodeOperatorFee: "", providers: [] };
}

export const NodeBondProviders = {
  encode(
    message: NodeBondProviders,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.nodeOperatorFee !== "") {
      writer.uint32(10).string(message.nodeOperatorFee);
    }
    for (const v of message.providers) {
      NodeBondProvider.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): NodeBondProviders {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeBondProviders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodeOperatorFee = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.providers.push(
            NodeBondProvider.decode(reader, reader.uint32())
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

  fromJSON(object: any): NodeBondProviders {
    return {
      nodeOperatorFee: isSet(object.nodeOperatorFee)
        ? globalThis.String(object.nodeOperatorFee)
        : "",
      providers: globalThis.Array.isArray(object?.providers)
        ? object.providers.map((e: any) => NodeBondProvider.fromJSON(e))
        : [],
    };
  },

  toJSON(message: NodeBondProviders): unknown {
    const obj: any = {};
    if (message.nodeOperatorFee !== "") {
      obj.nodeOperatorFee = message.nodeOperatorFee;
    }
    if (message.providers?.length) {
      obj.providers = message.providers.map((e) => NodeBondProvider.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeBondProviders>, I>>(
    base?: I
  ): NodeBondProviders {
    return NodeBondProviders.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodeBondProviders>, I>>(
    object: I
  ): NodeBondProviders {
    const message = createBaseNodeBondProviders();
    message.nodeOperatorFee = object.nodeOperatorFee ?? "";
    message.providers =
      object.providers?.map((e) => NodeBondProvider.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNodeBondProvider(): NodeBondProvider {
  return { bondAddress: "", bond: "" };
}

export const NodeBondProvider = {
  encode(
    message: NodeBondProvider,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.bondAddress !== "") {
      writer.uint32(10).string(message.bondAddress);
    }
    if (message.bond !== "") {
      writer.uint32(18).string(message.bond);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): NodeBondProvider {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeBondProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bondAddress = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bond = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NodeBondProvider {
    return {
      bondAddress: isSet(object.bondAddress)
        ? globalThis.String(object.bondAddress)
        : "",
      bond: isSet(object.bond) ? globalThis.String(object.bond) : "",
    };
  },

  toJSON(message: NodeBondProvider): unknown {
    const obj: any = {};
    if (message.bondAddress !== "") {
      obj.bondAddress = message.bondAddress;
    }
    if (message.bond !== "") {
      obj.bond = message.bond;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeBondProvider>, I>>(
    base?: I
  ): NodeBondProvider {
    return NodeBondProvider.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodeBondProvider>, I>>(
    object: I
  ): NodeBondProvider {
    const message = createBaseNodeBondProvider();
    message.bondAddress = object.bondAddress ?? "";
    message.bond = object.bond ?? "";
    return message;
  },
};

function createBaseNodeJail(): NodeJail {
  return { releaseHeight: 0, reason: "" };
}

export const NodeJail = {
  encode(
    message: NodeJail,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.releaseHeight !== 0) {
      writer.uint32(8).int64(message.releaseHeight);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): NodeJail {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodeJail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.releaseHeight = Number(reader.int64());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.reason = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NodeJail {
    return {
      releaseHeight: isSet(object.releaseHeight)
        ? globalThis.Number(object.releaseHeight)
        : 0,
      reason: isSet(object.reason) ? globalThis.String(object.reason) : "",
    };
  },

  toJSON(message: NodeJail): unknown {
    const obj: any = {};
    if (message.releaseHeight !== 0) {
      obj.releaseHeight = Math.round(message.releaseHeight);
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodeJail>, I>>(base?: I): NodeJail {
    return NodeJail.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodeJail>, I>>(object: I): NodeJail {
    const message = createBaseNodeJail();
    message.releaseHeight = object.releaseHeight ?? 0;
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseChainHeight(): ChainHeight {
  return { chain: "", height: 0 };
}

export const ChainHeight = {
  encode(
    message: ChainHeight,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.chain !== "") {
      writer.uint32(10).string(message.chain);
    }
    if (message.height !== 0) {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ChainHeight {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainHeight();
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

          message.height = Number(reader.int64());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChainHeight {
    return {
      chain: isSet(object.chain) ? globalThis.String(object.chain) : "",
      height: isSet(object.height) ? globalThis.Number(object.height) : 0,
    };
  },

  toJSON(message: ChainHeight): unknown {
    const obj: any = {};
    if (message.chain !== "") {
      obj.chain = message.chain;
    }
    if (message.height !== 0) {
      obj.height = Math.round(message.height);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChainHeight>, I>>(base?: I): ChainHeight {
    return ChainHeight.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChainHeight>, I>>(
    object: I
  ): ChainHeight {
    const message = createBaseChainHeight();
    message.chain = object.chain ?? "";
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseNodePreflightStatus(): NodePreflightStatus {
  return { status: "", reason: "", code: 0 };
}

export const NodePreflightStatus = {
  encode(
    message: NodePreflightStatus,
    writer: BinaryWriter = BinaryWriter.create()
  ): BinaryWriter {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    if (message.code !== 0) {
      writer.uint32(24).int64(message.code);
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): NodePreflightStatus {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodePreflightStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.status = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.reason = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.code = Number(reader.int64());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NodePreflightStatus {
    return {
      status: isSet(object.status) ? globalThis.String(object.status) : "",
      reason: isSet(object.reason) ? globalThis.String(object.reason) : "",
      code: isSet(object.code) ? globalThis.Number(object.code) : 0,
    };
  },

  toJSON(message: NodePreflightStatus): unknown {
    const obj: any = {};
    if (message.status !== "") {
      obj.status = message.status;
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    if (message.code !== 0) {
      obj.code = Math.round(message.code);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodePreflightStatus>, I>>(
    base?: I
  ): NodePreflightStatus {
    return NodePreflightStatus.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodePreflightStatus>, I>>(
    object: I
  ): NodePreflightStatus {
    const message = createBaseNodePreflightStatus();
    message.status = object.status ?? "";
    message.reason = object.reason ?? "";
    message.code = object.code ?? 0;
    return message;
  },
};
