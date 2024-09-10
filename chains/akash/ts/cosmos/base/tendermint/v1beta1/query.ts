/* eslint-disable */
import { PageRequest, PageResponse } from "../../query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { BlockID } from "../../../../tendermint/types/types";
import { Block } from "../../../../tendermint/types/block";
import { DefaultNodeInfo } from "../../../../tendermint/p2p/types";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "cosmos.base.tendermint.v1beta1";
/** GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightRequest {
  height: bigint;
  /** pagination defines an pagination for the request. */
  pagination?: PageRequest;
}
/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightResponse {
  blockHeight: bigint;
  validators: Validator[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}
/** GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetRequest {
  /** pagination defines an pagination for the request. */
  pagination?: PageRequest;
}
/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetResponse {
  blockHeight: bigint;
  validators: Validator[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}
/** Validator is the type for the validator-set. */
export interface Validator {
  address: string;
  pubKey?: Any;
  votingPower: bigint;
  proposerPriority: bigint;
}
/** GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightRequest {
  height: bigint;
}
/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightResponse {
  blockId?: BlockID;
  block?: Block;
}
/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockRequest {}
/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockResponse {
  blockId?: BlockID;
  block?: Block;
}
/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequest {}
/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingResponse {
  syncing: boolean;
}
/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequest {}
/** GetNodeInfoResponse is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoResponse {
  defaultNodeInfo?: DefaultNodeInfo;
  applicationVersion?: VersionInfo;
}
/** VersionInfo is the type for the GetNodeInfoResponse message. */
export interface VersionInfo {
  name: string;
  appName: string;
  version: string;
  gitCommit: string;
  buildTags: string;
  goVersion: string;
  buildDeps: Module[];
  /** Since: cosmos-sdk 0.43 */
  cosmosSdkVersion: string;
}
/** Module is the type for VersionInfo */
export interface Module {
  /** module path */
  path: string;
  /** module version */
  version: string;
  /** checksum */
  sum: string;
}
function createBaseGetValidatorSetByHeightRequest(): GetValidatorSetByHeightRequest {
  return {
    height: BigInt(0),
    pagination: undefined,
  };
}
export const GetValidatorSetByHeightRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest",
  encode(
    message: GetValidatorSetByHeightRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetValidatorSetByHeightRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetValidatorSetByHeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetValidatorSetByHeightRequest {
    const obj = createBaseGetValidatorSetByHeightRequest();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.pagination))
      obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(
    message: GetValidatorSetByHeightRequest,
  ): JsonSafe<GetValidatorSetByHeightRequest> {
    const obj: any = {};
    message.height !== undefined &&
      (obj.height = (message.height || BigInt(0)).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetValidatorSetByHeightRequest>, I>>(
    object: I,
  ): GetValidatorSetByHeightRequest {
    const message = createBaseGetValidatorSetByHeightRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseGetValidatorSetByHeightResponse(): GetValidatorSetByHeightResponse {
  return {
    blockHeight: BigInt(0),
    validators: [],
    pagination: undefined,
  };
}
export const GetValidatorSetByHeightResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse",
  encode(
    message: GetValidatorSetByHeightResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetValidatorSetByHeightResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetValidatorSetByHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetValidatorSetByHeightResponse {
    const obj = createBaseGetValidatorSetByHeightResponse();
    if (isSet(object.blockHeight))
      obj.blockHeight = BigInt(object.blockHeight.toString());
    if (Array.isArray(object?.validators))
      obj.validators = object.validators.map((e: any) => Validator.fromJSON(e));
    if (isSet(object.pagination))
      obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(
    message: GetValidatorSetByHeightResponse,
  ): JsonSafe<GetValidatorSetByHeightResponse> {
    const obj: any = {};
    message.blockHeight !== undefined &&
      (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    if (message.validators) {
      obj.validators = message.validators.map((e) =>
        e ? Validator.toJSON(e) : undefined,
      );
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetValidatorSetByHeightResponse>, I>>(
    object: I,
  ): GetValidatorSetByHeightResponse {
    const message = createBaseGetValidatorSetByHeightResponse();
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = BigInt(object.blockHeight.toString());
    }
    message.validators =
      object.validators?.map((e) => Validator.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseGetLatestValidatorSetRequest(): GetLatestValidatorSetRequest {
  return {
    pagination: undefined,
  };
}
export const GetLatestValidatorSetRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest",
  encode(
    message: GetLatestValidatorSetRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetLatestValidatorSetRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestValidatorSetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetLatestValidatorSetRequest {
    const obj = createBaseGetLatestValidatorSetRequest();
    if (isSet(object.pagination))
      obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(
    message: GetLatestValidatorSetRequest,
  ): JsonSafe<GetLatestValidatorSetRequest> {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetLatestValidatorSetRequest>, I>>(
    object: I,
  ): GetLatestValidatorSetRequest {
    const message = createBaseGetLatestValidatorSetRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseGetLatestValidatorSetResponse(): GetLatestValidatorSetResponse {
  return {
    blockHeight: BigInt(0),
    validators: [],
    pagination: undefined,
  };
}
export const GetLatestValidatorSetResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse",
  encode(
    message: GetLatestValidatorSetResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetLatestValidatorSetResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetLatestValidatorSetResponse {
    const obj = createBaseGetLatestValidatorSetResponse();
    if (isSet(object.blockHeight))
      obj.blockHeight = BigInt(object.blockHeight.toString());
    if (Array.isArray(object?.validators))
      obj.validators = object.validators.map((e: any) => Validator.fromJSON(e));
    if (isSet(object.pagination))
      obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(
    message: GetLatestValidatorSetResponse,
  ): JsonSafe<GetLatestValidatorSetResponse> {
    const obj: any = {};
    message.blockHeight !== undefined &&
      (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    if (message.validators) {
      obj.validators = message.validators.map((e) =>
        e ? Validator.toJSON(e) : undefined,
      );
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetLatestValidatorSetResponse>, I>>(
    object: I,
  ): GetLatestValidatorSetResponse {
    const message = createBaseGetLatestValidatorSetResponse();
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = BigInt(object.blockHeight.toString());
    }
    message.validators =
      object.validators?.map((e) => Validator.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseValidator(): Validator {
  return {
    address: "",
    pubKey: undefined,
    votingPower: BigInt(0),
    proposerPriority: BigInt(0),
  };
}
export const Validator = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.Validator",
  encode(
    message: Validator,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.votingPower !== BigInt(0)) {
      writer.uint32(24).int64(message.votingPower);
    }
    if (message.proposerPriority !== BigInt(0)) {
      writer.uint32(32).int64(message.proposerPriority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Validator {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pubKey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.votingPower = reader.int64();
          break;
        case 4:
          message.proposerPriority = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Validator {
    const obj = createBaseValidator();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.pubKey)) obj.pubKey = Any.fromJSON(object.pubKey);
    if (isSet(object.votingPower))
      obj.votingPower = BigInt(object.votingPower.toString());
    if (isSet(object.proposerPriority))
      obj.proposerPriority = BigInt(object.proposerPriority.toString());
    return obj;
  },
  toJSON(message: Validator): JsonSafe<Validator> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pubKey !== undefined &&
      (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    message.votingPower !== undefined &&
      (obj.votingPower = (message.votingPower || BigInt(0)).toString());
    message.proposerPriority !== undefined &&
      (obj.proposerPriority = (
        message.proposerPriority || BigInt(0)
      ).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Validator>, I>>(
    object: I,
  ): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? "";
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = Any.fromPartial(object.pubKey);
    }
    if (object.votingPower !== undefined && object.votingPower !== null) {
      message.votingPower = BigInt(object.votingPower.toString());
    }
    if (
      object.proposerPriority !== undefined &&
      object.proposerPriority !== null
    ) {
      message.proposerPriority = BigInt(object.proposerPriority.toString());
    }
    return message;
  },
};
function createBaseGetBlockByHeightRequest(): GetBlockByHeightRequest {
  return {
    height: BigInt(0),
  };
}
export const GetBlockByHeightRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest",
  encode(
    message: GetBlockByHeightRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetBlockByHeightRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockByHeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetBlockByHeightRequest {
    const obj = createBaseGetBlockByHeightRequest();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    return obj;
  },
  toJSON(message: GetBlockByHeightRequest): JsonSafe<GetBlockByHeightRequest> {
    const obj: any = {};
    message.height !== undefined &&
      (obj.height = (message.height || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetBlockByHeightRequest>, I>>(
    object: I,
  ): GetBlockByHeightRequest {
    const message = createBaseGetBlockByHeightRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    return message;
  },
};
function createBaseGetBlockByHeightResponse(): GetBlockByHeightResponse {
  return {
    blockId: undefined,
    block: undefined,
  };
}
export const GetBlockByHeightResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse",
  encode(
    message: GetBlockByHeightResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetBlockByHeightResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockByHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block = Block.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetBlockByHeightResponse {
    const obj = createBaseGetBlockByHeightResponse();
    if (isSet(object.blockId)) obj.blockId = BlockID.fromJSON(object.blockId);
    if (isSet(object.block)) obj.block = Block.fromJSON(object.block);
    return obj;
  },
  toJSON(
    message: GetBlockByHeightResponse,
  ): JsonSafe<GetBlockByHeightResponse> {
    const obj: any = {};
    message.blockId !== undefined &&
      (obj.blockId = message.blockId
        ? BlockID.toJSON(message.blockId)
        : undefined);
    message.block !== undefined &&
      (obj.block = message.block ? Block.toJSON(message.block) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetBlockByHeightResponse>, I>>(
    object: I,
  ): GetBlockByHeightResponse {
    const message = createBaseGetBlockByHeightResponse();
    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = BlockID.fromPartial(object.blockId);
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = Block.fromPartial(object.block);
    }
    return message;
  },
};
function createBaseGetLatestBlockRequest(): GetLatestBlockRequest {
  return {};
}
export const GetLatestBlockRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest",
  encode(
    _: GetLatestBlockRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetLatestBlockRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): GetLatestBlockRequest {
    const obj = createBaseGetLatestBlockRequest();
    return obj;
  },
  toJSON(_: GetLatestBlockRequest): JsonSafe<GetLatestBlockRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetLatestBlockRequest>, I>>(
    _: I,
  ): GetLatestBlockRequest {
    const message = createBaseGetLatestBlockRequest();
    return message;
  },
};
function createBaseGetLatestBlockResponse(): GetLatestBlockResponse {
  return {
    blockId: undefined,
    block: undefined,
  };
}
export const GetLatestBlockResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse",
  encode(
    message: GetLatestBlockResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetLatestBlockResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block = Block.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetLatestBlockResponse {
    const obj = createBaseGetLatestBlockResponse();
    if (isSet(object.blockId)) obj.blockId = BlockID.fromJSON(object.blockId);
    if (isSet(object.block)) obj.block = Block.fromJSON(object.block);
    return obj;
  },
  toJSON(message: GetLatestBlockResponse): JsonSafe<GetLatestBlockResponse> {
    const obj: any = {};
    message.blockId !== undefined &&
      (obj.blockId = message.blockId
        ? BlockID.toJSON(message.blockId)
        : undefined);
    message.block !== undefined &&
      (obj.block = message.block ? Block.toJSON(message.block) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetLatestBlockResponse>, I>>(
    object: I,
  ): GetLatestBlockResponse {
    const message = createBaseGetLatestBlockResponse();
    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = BlockID.fromPartial(object.blockId);
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = Block.fromPartial(object.block);
    }
    return message;
  },
};
function createBaseGetSyncingRequest(): GetSyncingRequest {
  return {};
}
export const GetSyncingRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest",
  encode(
    _: GetSyncingRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetSyncingRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSyncingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): GetSyncingRequest {
    const obj = createBaseGetSyncingRequest();
    return obj;
  },
  toJSON(_: GetSyncingRequest): JsonSafe<GetSyncingRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetSyncingRequest>, I>>(
    _: I,
  ): GetSyncingRequest {
    const message = createBaseGetSyncingRequest();
    return message;
  },
};
function createBaseGetSyncingResponse(): GetSyncingResponse {
  return {
    syncing: false,
  };
}
export const GetSyncingResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse",
  encode(
    message: GetSyncingResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.syncing === true) {
      writer.uint32(8).bool(message.syncing);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetSyncingResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSyncingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syncing = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetSyncingResponse {
    const obj = createBaseGetSyncingResponse();
    if (isSet(object.syncing)) obj.syncing = Boolean(object.syncing);
    return obj;
  },
  toJSON(message: GetSyncingResponse): JsonSafe<GetSyncingResponse> {
    const obj: any = {};
    message.syncing !== undefined && (obj.syncing = message.syncing);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetSyncingResponse>, I>>(
    object: I,
  ): GetSyncingResponse {
    const message = createBaseGetSyncingResponse();
    message.syncing = object.syncing ?? false;
    return message;
  },
};
function createBaseGetNodeInfoRequest(): GetNodeInfoRequest {
  return {};
}
export const GetNodeInfoRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest",
  encode(
    _: GetNodeInfoRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetNodeInfoRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNodeInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): GetNodeInfoRequest {
    const obj = createBaseGetNodeInfoRequest();
    return obj;
  },
  toJSON(_: GetNodeInfoRequest): JsonSafe<GetNodeInfoRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetNodeInfoRequest>, I>>(
    _: I,
  ): GetNodeInfoRequest {
    const message = createBaseGetNodeInfoRequest();
    return message;
  },
};
function createBaseGetNodeInfoResponse(): GetNodeInfoResponse {
  return {
    defaultNodeInfo: undefined,
    applicationVersion: undefined,
  };
}
export const GetNodeInfoResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse",
  encode(
    message: GetNodeInfoResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.defaultNodeInfo !== undefined) {
      DefaultNodeInfo.encode(
        message.defaultNodeInfo,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.applicationVersion !== undefined) {
      VersionInfo.encode(
        message.applicationVersion,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetNodeInfoResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNodeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.defaultNodeInfo = DefaultNodeInfo.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.applicationVersion = VersionInfo.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetNodeInfoResponse {
    const obj = createBaseGetNodeInfoResponse();
    if (isSet(object.defaultNodeInfo))
      obj.defaultNodeInfo = DefaultNodeInfo.fromJSON(object.defaultNodeInfo);
    if (isSet(object.applicationVersion))
      obj.applicationVersion = VersionInfo.fromJSON(object.applicationVersion);
    return obj;
  },
  toJSON(message: GetNodeInfoResponse): JsonSafe<GetNodeInfoResponse> {
    const obj: any = {};
    message.defaultNodeInfo !== undefined &&
      (obj.defaultNodeInfo = message.defaultNodeInfo
        ? DefaultNodeInfo.toJSON(message.defaultNodeInfo)
        : undefined);
    message.applicationVersion !== undefined &&
      (obj.applicationVersion = message.applicationVersion
        ? VersionInfo.toJSON(message.applicationVersion)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetNodeInfoResponse>, I>>(
    object: I,
  ): GetNodeInfoResponse {
    const message = createBaseGetNodeInfoResponse();
    if (
      object.defaultNodeInfo !== undefined &&
      object.defaultNodeInfo !== null
    ) {
      message.defaultNodeInfo = DefaultNodeInfo.fromPartial(
        object.defaultNodeInfo,
      );
    }
    if (
      object.applicationVersion !== undefined &&
      object.applicationVersion !== null
    ) {
      message.applicationVersion = VersionInfo.fromPartial(
        object.applicationVersion,
      );
    }
    return message;
  },
};
function createBaseVersionInfo(): VersionInfo {
  return {
    name: "",
    appName: "",
    version: "",
    gitCommit: "",
    buildTags: "",
    goVersion: "",
    buildDeps: [],
    cosmosSdkVersion: "",
  };
}
export const VersionInfo = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo",
  encode(
    message: VersionInfo,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.appName !== "") {
      writer.uint32(18).string(message.appName);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.gitCommit !== "") {
      writer.uint32(34).string(message.gitCommit);
    }
    if (message.buildTags !== "") {
      writer.uint32(42).string(message.buildTags);
    }
    if (message.goVersion !== "") {
      writer.uint32(50).string(message.goVersion);
    }
    for (const v of message.buildDeps) {
      Module.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.cosmosSdkVersion !== "") {
      writer.uint32(66).string(message.cosmosSdkVersion);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VersionInfo {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.appName = reader.string();
          break;
        case 3:
          message.version = reader.string();
          break;
        case 4:
          message.gitCommit = reader.string();
          break;
        case 5:
          message.buildTags = reader.string();
          break;
        case 6:
          message.goVersion = reader.string();
          break;
        case 7:
          message.buildDeps.push(Module.decode(reader, reader.uint32()));
          break;
        case 8:
          message.cosmosSdkVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VersionInfo {
    const obj = createBaseVersionInfo();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.appName)) obj.appName = String(object.appName);
    if (isSet(object.version)) obj.version = String(object.version);
    if (isSet(object.gitCommit)) obj.gitCommit = String(object.gitCommit);
    if (isSet(object.buildTags)) obj.buildTags = String(object.buildTags);
    if (isSet(object.goVersion)) obj.goVersion = String(object.goVersion);
    if (Array.isArray(object?.buildDeps))
      obj.buildDeps = object.buildDeps.map((e: any) => Module.fromJSON(e));
    if (isSet(object.cosmosSdkVersion))
      obj.cosmosSdkVersion = String(object.cosmosSdkVersion);
    return obj;
  },
  toJSON(message: VersionInfo): JsonSafe<VersionInfo> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.appName !== undefined && (obj.appName = message.appName);
    message.version !== undefined && (obj.version = message.version);
    message.gitCommit !== undefined && (obj.gitCommit = message.gitCommit);
    message.buildTags !== undefined && (obj.buildTags = message.buildTags);
    message.goVersion !== undefined && (obj.goVersion = message.goVersion);
    if (message.buildDeps) {
      obj.buildDeps = message.buildDeps.map((e) =>
        e ? Module.toJSON(e) : undefined,
      );
    } else {
      obj.buildDeps = [];
    }
    message.cosmosSdkVersion !== undefined &&
      (obj.cosmosSdkVersion = message.cosmosSdkVersion);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<VersionInfo>, I>>(
    object: I,
  ): VersionInfo {
    const message = createBaseVersionInfo();
    message.name = object.name ?? "";
    message.appName = object.appName ?? "";
    message.version = object.version ?? "";
    message.gitCommit = object.gitCommit ?? "";
    message.buildTags = object.buildTags ?? "";
    message.goVersion = object.goVersion ?? "";
    message.buildDeps =
      object.buildDeps?.map((e) => Module.fromPartial(e)) || [];
    message.cosmosSdkVersion = object.cosmosSdkVersion ?? "";
    return message;
  },
};
function createBaseModule(): Module {
  return {
    path: "",
    version: "",
    sum: "",
  };
}
export const Module = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.Module",
  encode(
    message: Module,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.sum !== "") {
      writer.uint32(26).string(message.sum);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Module {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.sum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Module {
    const obj = createBaseModule();
    if (isSet(object.path)) obj.path = String(object.path);
    if (isSet(object.version)) obj.version = String(object.version);
    if (isSet(object.sum)) obj.sum = String(object.sum);
    return obj;
  },
  toJSON(message: Module): JsonSafe<Module> {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.version !== undefined && (obj.version = message.version);
    message.sum !== undefined && (obj.sum = message.sum);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Module>, I>>(object: I): Module {
    const message = createBaseModule();
    message.path = object.path ?? "";
    message.version = object.version ?? "";
    message.sum = object.sum ?? "";
    return message;
  },
};
/** Service defines the gRPC querier service for tendermint queries. */
export interface Service {
  /** GetNodeInfo queries the current node info. */
  GetNodeInfo(request?: GetNodeInfoRequest): Promise<GetNodeInfoResponse>;
  /** GetSyncing queries node syncing. */
  GetSyncing(request?: GetSyncingRequest): Promise<GetSyncingResponse>;
  /** GetLatestBlock returns the latest block. */
  GetLatestBlock(
    request?: GetLatestBlockRequest,
  ): Promise<GetLatestBlockResponse>;
  /** GetBlockByHeight queries block for given height. */
  GetBlockByHeight(
    request: GetBlockByHeightRequest,
  ): Promise<GetBlockByHeightResponse>;
  /** GetLatestValidatorSet queries latest validator-set. */
  GetLatestValidatorSet(
    request?: GetLatestValidatorSetRequest,
  ): Promise<GetLatestValidatorSetResponse>;
  /** GetValidatorSetByHeight queries validator-set at a given height. */
  GetValidatorSetByHeight(
    request: GetValidatorSetByHeightRequest,
  ): Promise<GetValidatorSetByHeightResponse>;
}
export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetNodeInfo = this.GetNodeInfo.bind(this);
    this.GetSyncing = this.GetSyncing.bind(this);
    this.GetLatestBlock = this.GetLatestBlock.bind(this);
    this.GetBlockByHeight = this.GetBlockByHeight.bind(this);
    this.GetLatestValidatorSet = this.GetLatestValidatorSet.bind(this);
    this.GetValidatorSetByHeight = this.GetValidatorSetByHeight.bind(this);
  }
  GetNodeInfo(request: GetNodeInfoRequest = {}): Promise<GetNodeInfoResponse> {
    const data = GetNodeInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.base.tendermint.v1beta1.Service",
      "GetNodeInfo",
      data,
    );
    return promise.then((data) =>
      GetNodeInfoResponse.decode(new BinaryReader(data)),
    );
  }
  GetSyncing(request: GetSyncingRequest = {}): Promise<GetSyncingResponse> {
    const data = GetSyncingRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.base.tendermint.v1beta1.Service",
      "GetSyncing",
      data,
    );
    return promise.then((data) =>
      GetSyncingResponse.decode(new BinaryReader(data)),
    );
  }
  GetLatestBlock(
    request: GetLatestBlockRequest = {},
  ): Promise<GetLatestBlockResponse> {
    const data = GetLatestBlockRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.base.tendermint.v1beta1.Service",
      "GetLatestBlock",
      data,
    );
    return promise.then((data) =>
      GetLatestBlockResponse.decode(new BinaryReader(data)),
    );
  }
  GetBlockByHeight(
    request: GetBlockByHeightRequest,
  ): Promise<GetBlockByHeightResponse> {
    const data = GetBlockByHeightRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.base.tendermint.v1beta1.Service",
      "GetBlockByHeight",
      data,
    );
    return promise.then((data) =>
      GetBlockByHeightResponse.decode(new BinaryReader(data)),
    );
  }
  GetLatestValidatorSet(
    request: GetLatestValidatorSetRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<GetLatestValidatorSetResponse> {
    const data = GetLatestValidatorSetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.base.tendermint.v1beta1.Service",
      "GetLatestValidatorSet",
      data,
    );
    return promise.then((data) =>
      GetLatestValidatorSetResponse.decode(new BinaryReader(data)),
    );
  }
  GetValidatorSetByHeight(
    request: GetValidatorSetByHeightRequest,
  ): Promise<GetValidatorSetByHeightResponse> {
    const data = GetValidatorSetByHeightRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.base.tendermint.v1beta1.Service",
      "GetValidatorSetByHeight",
      data,
    );
    return promise.then((data) =>
      GetValidatorSetByHeightResponse.decode(new BinaryReader(data)),
    );
  }
}
