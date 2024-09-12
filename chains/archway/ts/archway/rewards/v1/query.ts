/* eslint-disable */
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";
import {
  Params,
  ContractMetadata,
  BlockRewards,
  TxRewards,
  RewardsRecord,
} from "./rewards";
import { Coin, DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
export const protobufPackage = "archway.rewards.v1";
/** QueryParamsRequest is the request for Query.Params. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response for Query.Params. */
export interface QueryParamsResponse {
  params: Params;
}
/** QueryContractMetadataRequest is the request for Query.ContractMetadata. */
export interface QueryContractMetadataRequest {
  /** contract_address is the contract address (bech32 encoded). */
  contractAddress: string;
}
/** QueryContractMetadataResponse is the response for Query.ContractMetadata. */
export interface QueryContractMetadataResponse {
  metadata: ContractMetadata;
}
/**
 * QueryBlockRewardsTrackingRequest is the request for
 * Query.BlockRewardsTracking.
 */
export interface QueryBlockRewardsTrackingRequest {}
/**
 * QueryBlockRewardsTrackingResponse is the response for
 * Query.BlockRewardsTracking.
 */
export interface QueryBlockRewardsTrackingResponse {
  block: BlockTracking;
}
/** QueryRewardsPoolRequest is the request for Query.RewardsPool. */
export interface QueryRewardsPoolRequest {}
/** QueryRewardsPoolResponse is the response for Query.RewardsPool. */
export interface QueryRewardsPoolResponse {
  /** undistributed_funds are undistributed yet tokens (ready for withdrawal). */
  undistributedFunds: Coin[];
  /**
   * treasury_funds are treasury tokens available (no mechanism is available to
   * withdraw ATM). Treasury tokens are collected on a block basis. Those tokens
   * are unused block rewards.
   */
  treasuryFunds: Coin[];
}
/** QueryEstimateTxFeesRequest is the request for Query.EstimateTxFees. */
export interface QueryEstimateTxFeesRequest {
  /** gas_limit is the transaction gas limit. */
  gasLimit: bigint;
  /** contract_address whose flat fee is considered when estimating tx fees. */
  contractAddress: string;
}
/** QueryEstimateTxFeesResponse is the response for Query.EstimateTxFees. */
export interface QueryEstimateTxFeesResponse {
  /** gas_unit_price defines the minimum transaction fee per gas unit. */
  gasUnitPrice: DecCoin;
  /** estimated_fee is the estimated transaction fee for a given gas limit. */
  estimatedFee: Coin[];
}
/** BlockTracking is the tracking information for a block. */
export interface BlockTracking {
  /** inflation_rewards defines the inflation rewards for the block. */
  inflationRewards: BlockRewards;
  /** tx_rewards defines the transaction rewards for the block. */
  txRewards: TxRewards[];
}
/** QueryRewardsRecordsRequest is the request for Query.RewardsRecords. */
export interface QueryRewardsRecordsRequest {
  /**
   * rewards_address is the target address to query records for (bech32
   * encoded).
   */
  rewardsAddress: string;
  /** pagination is an optional pagination options for the request. */
  pagination?: PageRequest;
}
/** QueryRewardsRecordsResponse is the response for Query.RewardsRecords. */
export interface QueryRewardsRecordsResponse {
  /** records is the list of rewards records. */
  records: RewardsRecord[];
  /** pagination is the pagination details in the response. */
  pagination?: PageResponse;
}
/** QueryOutstandingRewardsRequest is the request for Query.OutstandingRewards. */
export interface QueryOutstandingRewardsRequest {
  /**
   * rewards_address is the target address to query calculated rewards for
   * (bech32 encoded).
   */
  rewardsAddress: string;
}
/** QueryOutstandingRewardsResponse is the response for Query.OutstandingRewards. */
export interface QueryOutstandingRewardsResponse {
  /** total_rewards is the total rewards credited to the rewards_address. */
  totalRewards: Coin[];
  /**
   * records_num is the total number of RewardsRecord objects stored for the
   * rewards_address.
   */
  recordsNum: bigint;
}
/** QueryFlatFeeRequest is the request for Query.FlatFeet */
export interface QueryFlatFeeRequest {
  /** contract_address is the contract address (bech32 encoded). */
  contractAddress: string;
}
/** QueryFlatFeeResponse is the response for Query.FlatFee */
export interface QueryFlatFeeResponse {
  /**
   * flat_fee_amount defines the minimum flat fee set by the contract_owner per
   * contract execution.
   */
  flatFeeAmount: Coin;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/archway.rewards.v1.QueryParamsRequest",
  encode(
    _: QueryParamsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryParamsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    _: I,
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: "/archway.rewards.v1.QueryParamsResponse",
  encode(
    message: QueryParamsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryParamsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I,
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseQueryContractMetadataRequest(): QueryContractMetadataRequest {
  return {
    contractAddress: "",
  };
}
export const QueryContractMetadataRequest = {
  typeUrl: "/archway.rewards.v1.QueryContractMetadataRequest",
  encode(
    message: QueryContractMetadataRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryContractMetadataRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContractMetadataRequest {
    const obj = createBaseQueryContractMetadataRequest();
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    return obj;
  },
  toJSON(
    message: QueryContractMetadataRequest,
  ): JsonSafe<QueryContractMetadataRequest> {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryContractMetadataRequest>, I>>(
    object: I,
  ): QueryContractMetadataRequest {
    const message = createBaseQueryContractMetadataRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};
function createBaseQueryContractMetadataResponse(): QueryContractMetadataResponse {
  return {
    metadata: ContractMetadata.fromPartial({}),
  };
}
export const QueryContractMetadataResponse = {
  typeUrl: "/archway.rewards.v1.QueryContractMetadataResponse",
  encode(
    message: QueryContractMetadataResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.metadata !== undefined) {
      ContractMetadata.encode(
        message.metadata,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryContractMetadataResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContractMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = ContractMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContractMetadataResponse {
    const obj = createBaseQueryContractMetadataResponse();
    if (isSet(object.metadata))
      obj.metadata = ContractMetadata.fromJSON(object.metadata);
    return obj;
  },
  toJSON(
    message: QueryContractMetadataResponse,
  ): JsonSafe<QueryContractMetadataResponse> {
    const obj: any = {};
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? ContractMetadata.toJSON(message.metadata)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryContractMetadataResponse>, I>>(
    object: I,
  ): QueryContractMetadataResponse {
    const message = createBaseQueryContractMetadataResponse();
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = ContractMetadata.fromPartial(object.metadata);
    }
    return message;
  },
};
function createBaseQueryBlockRewardsTrackingRequest(): QueryBlockRewardsTrackingRequest {
  return {};
}
export const QueryBlockRewardsTrackingRequest = {
  typeUrl: "/archway.rewards.v1.QueryBlockRewardsTrackingRequest",
  encode(
    _: QueryBlockRewardsTrackingRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryBlockRewardsTrackingRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlockRewardsTrackingRequest();
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
  fromJSON(_: any): QueryBlockRewardsTrackingRequest {
    const obj = createBaseQueryBlockRewardsTrackingRequest();
    return obj;
  },
  toJSON(
    _: QueryBlockRewardsTrackingRequest,
  ): JsonSafe<QueryBlockRewardsTrackingRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<QueryBlockRewardsTrackingRequest>, I>,
  >(_: I): QueryBlockRewardsTrackingRequest {
    const message = createBaseQueryBlockRewardsTrackingRequest();
    return message;
  },
};
function createBaseQueryBlockRewardsTrackingResponse(): QueryBlockRewardsTrackingResponse {
  return {
    block: BlockTracking.fromPartial({}),
  };
}
export const QueryBlockRewardsTrackingResponse = {
  typeUrl: "/archway.rewards.v1.QueryBlockRewardsTrackingResponse",
  encode(
    message: QueryBlockRewardsTrackingResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.block !== undefined) {
      BlockTracking.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryBlockRewardsTrackingResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlockRewardsTrackingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = BlockTracking.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBlockRewardsTrackingResponse {
    const obj = createBaseQueryBlockRewardsTrackingResponse();
    if (isSet(object.block)) obj.block = BlockTracking.fromJSON(object.block);
    return obj;
  },
  toJSON(
    message: QueryBlockRewardsTrackingResponse,
  ): JsonSafe<QueryBlockRewardsTrackingResponse> {
    const obj: any = {};
    message.block !== undefined &&
      (obj.block = message.block
        ? BlockTracking.toJSON(message.block)
        : undefined);
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<QueryBlockRewardsTrackingResponse>, I>,
  >(object: I): QueryBlockRewardsTrackingResponse {
    const message = createBaseQueryBlockRewardsTrackingResponse();
    if (object.block !== undefined && object.block !== null) {
      message.block = BlockTracking.fromPartial(object.block);
    }
    return message;
  },
};
function createBaseQueryRewardsPoolRequest(): QueryRewardsPoolRequest {
  return {};
}
export const QueryRewardsPoolRequest = {
  typeUrl: "/archway.rewards.v1.QueryRewardsPoolRequest",
  encode(
    _: QueryRewardsPoolRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryRewardsPoolRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsPoolRequest();
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
  fromJSON(_: any): QueryRewardsPoolRequest {
    const obj = createBaseQueryRewardsPoolRequest();
    return obj;
  },
  toJSON(_: QueryRewardsPoolRequest): JsonSafe<QueryRewardsPoolRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRewardsPoolRequest>, I>>(
    _: I,
  ): QueryRewardsPoolRequest {
    const message = createBaseQueryRewardsPoolRequest();
    return message;
  },
};
function createBaseQueryRewardsPoolResponse(): QueryRewardsPoolResponse {
  return {
    undistributedFunds: [],
    treasuryFunds: [],
  };
}
export const QueryRewardsPoolResponse = {
  typeUrl: "/archway.rewards.v1.QueryRewardsPoolResponse",
  encode(
    message: QueryRewardsPoolResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.undistributedFunds) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.treasuryFunds) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryRewardsPoolResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.undistributedFunds.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.treasuryFunds.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRewardsPoolResponse {
    const obj = createBaseQueryRewardsPoolResponse();
    if (Array.isArray(object?.undistributedFunds))
      obj.undistributedFunds = object.undistributedFunds.map((e: any) =>
        Coin.fromJSON(e),
      );
    if (Array.isArray(object?.treasuryFunds))
      obj.treasuryFunds = object.treasuryFunds.map((e: any) =>
        Coin.fromJSON(e),
      );
    return obj;
  },
  toJSON(
    message: QueryRewardsPoolResponse,
  ): JsonSafe<QueryRewardsPoolResponse> {
    const obj: any = {};
    if (message.undistributedFunds) {
      obj.undistributedFunds = message.undistributedFunds.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.undistributedFunds = [];
    }
    if (message.treasuryFunds) {
      obj.treasuryFunds = message.treasuryFunds.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.treasuryFunds = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRewardsPoolResponse>, I>>(
    object: I,
  ): QueryRewardsPoolResponse {
    const message = createBaseQueryRewardsPoolResponse();
    message.undistributedFunds =
      object.undistributedFunds?.map((e) => Coin.fromPartial(e)) || [];
    message.treasuryFunds =
      object.treasuryFunds?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryEstimateTxFeesRequest(): QueryEstimateTxFeesRequest {
  return {
    gasLimit: BigInt(0),
    contractAddress: "",
  };
}
export const QueryEstimateTxFeesRequest = {
  typeUrl: "/archway.rewards.v1.QueryEstimateTxFeesRequest",
  encode(
    message: QueryEstimateTxFeesRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.gasLimit !== BigInt(0)) {
      writer.uint32(8).uint64(message.gasLimit);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryEstimateTxFeesRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateTxFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasLimit = reader.uint64();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEstimateTxFeesRequest {
    const obj = createBaseQueryEstimateTxFeesRequest();
    if (isSet(object.gasLimit))
      obj.gasLimit = BigInt(object.gasLimit.toString());
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    return obj;
  },
  toJSON(
    message: QueryEstimateTxFeesRequest,
  ): JsonSafe<QueryEstimateTxFeesRequest> {
    const obj: any = {};
    message.gasLimit !== undefined &&
      (obj.gasLimit = (message.gasLimit || BigInt(0)).toString());
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEstimateTxFeesRequest>, I>>(
    object: I,
  ): QueryEstimateTxFeesRequest {
    const message = createBaseQueryEstimateTxFeesRequest();
    if (object.gasLimit !== undefined && object.gasLimit !== null) {
      message.gasLimit = BigInt(object.gasLimit.toString());
    }
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};
function createBaseQueryEstimateTxFeesResponse(): QueryEstimateTxFeesResponse {
  return {
    gasUnitPrice: DecCoin.fromPartial({}),
    estimatedFee: [],
  };
}
export const QueryEstimateTxFeesResponse = {
  typeUrl: "/archway.rewards.v1.QueryEstimateTxFeesResponse",
  encode(
    message: QueryEstimateTxFeesResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.gasUnitPrice !== undefined) {
      DecCoin.encode(message.gasUnitPrice, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.estimatedFee) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryEstimateTxFeesResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateTxFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasUnitPrice = DecCoin.decode(reader, reader.uint32());
          break;
        case 2:
          message.estimatedFee.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEstimateTxFeesResponse {
    const obj = createBaseQueryEstimateTxFeesResponse();
    if (isSet(object.gasUnitPrice))
      obj.gasUnitPrice = DecCoin.fromJSON(object.gasUnitPrice);
    if (Array.isArray(object?.estimatedFee))
      obj.estimatedFee = object.estimatedFee.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(
    message: QueryEstimateTxFeesResponse,
  ): JsonSafe<QueryEstimateTxFeesResponse> {
    const obj: any = {};
    message.gasUnitPrice !== undefined &&
      (obj.gasUnitPrice = message.gasUnitPrice
        ? DecCoin.toJSON(message.gasUnitPrice)
        : undefined);
    if (message.estimatedFee) {
      obj.estimatedFee = message.estimatedFee.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.estimatedFee = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryEstimateTxFeesResponse>, I>>(
    object: I,
  ): QueryEstimateTxFeesResponse {
    const message = createBaseQueryEstimateTxFeesResponse();
    if (object.gasUnitPrice !== undefined && object.gasUnitPrice !== null) {
      message.gasUnitPrice = DecCoin.fromPartial(object.gasUnitPrice);
    }
    message.estimatedFee =
      object.estimatedFee?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseBlockTracking(): BlockTracking {
  return {
    inflationRewards: BlockRewards.fromPartial({}),
    txRewards: [],
  };
}
export const BlockTracking = {
  typeUrl: "/archway.rewards.v1.BlockTracking",
  encode(
    message: BlockTracking,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.inflationRewards !== undefined) {
      BlockRewards.encode(
        message.inflationRewards,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    for (const v of message.txRewards) {
      TxRewards.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockTracking {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockTracking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflationRewards = BlockRewards.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.txRewards.push(TxRewards.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockTracking {
    const obj = createBaseBlockTracking();
    if (isSet(object.inflationRewards))
      obj.inflationRewards = BlockRewards.fromJSON(object.inflationRewards);
    if (Array.isArray(object?.txRewards))
      obj.txRewards = object.txRewards.map((e: any) => TxRewards.fromJSON(e));
    return obj;
  },
  toJSON(message: BlockTracking): JsonSafe<BlockTracking> {
    const obj: any = {};
    message.inflationRewards !== undefined &&
      (obj.inflationRewards = message.inflationRewards
        ? BlockRewards.toJSON(message.inflationRewards)
        : undefined);
    if (message.txRewards) {
      obj.txRewards = message.txRewards.map((e) =>
        e ? TxRewards.toJSON(e) : undefined,
      );
    } else {
      obj.txRewards = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BlockTracking>, I>>(
    object: I,
  ): BlockTracking {
    const message = createBaseBlockTracking();
    if (
      object.inflationRewards !== undefined &&
      object.inflationRewards !== null
    ) {
      message.inflationRewards = BlockRewards.fromPartial(
        object.inflationRewards,
      );
    }
    message.txRewards =
      object.txRewards?.map((e) => TxRewards.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryRewardsRecordsRequest(): QueryRewardsRecordsRequest {
  return {
    rewardsAddress: "",
    pagination: undefined,
  };
}
export const QueryRewardsRecordsRequest = {
  typeUrl: "/archway.rewards.v1.QueryRewardsRecordsRequest",
  encode(
    message: QueryRewardsRecordsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.rewardsAddress !== "") {
      writer.uint32(10).string(message.rewardsAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryRewardsRecordsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardsAddress = reader.string();
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
  fromJSON(object: any): QueryRewardsRecordsRequest {
    const obj = createBaseQueryRewardsRecordsRequest();
    if (isSet(object.rewardsAddress))
      obj.rewardsAddress = String(object.rewardsAddress);
    if (isSet(object.pagination))
      obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(
    message: QueryRewardsRecordsRequest,
  ): JsonSafe<QueryRewardsRecordsRequest> {
    const obj: any = {};
    message.rewardsAddress !== undefined &&
      (obj.rewardsAddress = message.rewardsAddress);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRewardsRecordsRequest>, I>>(
    object: I,
  ): QueryRewardsRecordsRequest {
    const message = createBaseQueryRewardsRecordsRequest();
    message.rewardsAddress = object.rewardsAddress ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryRewardsRecordsResponse(): QueryRewardsRecordsResponse {
  return {
    records: [],
    pagination: undefined,
  };
}
export const QueryRewardsRecordsResponse = {
  typeUrl: "/archway.rewards.v1.QueryRewardsRecordsResponse",
  encode(
    message: QueryRewardsRecordsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.records) {
      RewardsRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryRewardsRecordsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRewardsRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(RewardsRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRewardsRecordsResponse {
    const obj = createBaseQueryRewardsRecordsResponse();
    if (Array.isArray(object?.records))
      obj.records = object.records.map((e: any) => RewardsRecord.fromJSON(e));
    if (isSet(object.pagination))
      obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(
    message: QueryRewardsRecordsResponse,
  ): JsonSafe<QueryRewardsRecordsResponse> {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map((e) =>
        e ? RewardsRecord.toJSON(e) : undefined,
      );
    } else {
      obj.records = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryRewardsRecordsResponse>, I>>(
    object: I,
  ): QueryRewardsRecordsResponse {
    const message = createBaseQueryRewardsRecordsResponse();
    message.records =
      object.records?.map((e) => RewardsRecord.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryOutstandingRewardsRequest(): QueryOutstandingRewardsRequest {
  return {
    rewardsAddress: "",
  };
}
export const QueryOutstandingRewardsRequest = {
  typeUrl: "/archway.rewards.v1.QueryOutstandingRewardsRequest",
  encode(
    message: QueryOutstandingRewardsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.rewardsAddress !== "") {
      writer.uint32(10).string(message.rewardsAddress);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryOutstandingRewardsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutstandingRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardsAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOutstandingRewardsRequest {
    const obj = createBaseQueryOutstandingRewardsRequest();
    if (isSet(object.rewardsAddress))
      obj.rewardsAddress = String(object.rewardsAddress);
    return obj;
  },
  toJSON(
    message: QueryOutstandingRewardsRequest,
  ): JsonSafe<QueryOutstandingRewardsRequest> {
    const obj: any = {};
    message.rewardsAddress !== undefined &&
      (obj.rewardsAddress = message.rewardsAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryOutstandingRewardsRequest>, I>>(
    object: I,
  ): QueryOutstandingRewardsRequest {
    const message = createBaseQueryOutstandingRewardsRequest();
    message.rewardsAddress = object.rewardsAddress ?? "";
    return message;
  },
};
function createBaseQueryOutstandingRewardsResponse(): QueryOutstandingRewardsResponse {
  return {
    totalRewards: [],
    recordsNum: BigInt(0),
  };
}
export const QueryOutstandingRewardsResponse = {
  typeUrl: "/archway.rewards.v1.QueryOutstandingRewardsResponse",
  encode(
    message: QueryOutstandingRewardsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.totalRewards) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.recordsNum !== BigInt(0)) {
      writer.uint32(16).uint64(message.recordsNum);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryOutstandingRewardsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutstandingRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalRewards.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.recordsNum = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOutstandingRewardsResponse {
    const obj = createBaseQueryOutstandingRewardsResponse();
    if (Array.isArray(object?.totalRewards))
      obj.totalRewards = object.totalRewards.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.recordsNum))
      obj.recordsNum = BigInt(object.recordsNum.toString());
    return obj;
  },
  toJSON(
    message: QueryOutstandingRewardsResponse,
  ): JsonSafe<QueryOutstandingRewardsResponse> {
    const obj: any = {};
    if (message.totalRewards) {
      obj.totalRewards = message.totalRewards.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.totalRewards = [];
    }
    message.recordsNum !== undefined &&
      (obj.recordsNum = (message.recordsNum || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryOutstandingRewardsResponse>, I>>(
    object: I,
  ): QueryOutstandingRewardsResponse {
    const message = createBaseQueryOutstandingRewardsResponse();
    message.totalRewards =
      object.totalRewards?.map((e) => Coin.fromPartial(e)) || [];
    if (object.recordsNum !== undefined && object.recordsNum !== null) {
      message.recordsNum = BigInt(object.recordsNum.toString());
    }
    return message;
  },
};
function createBaseQueryFlatFeeRequest(): QueryFlatFeeRequest {
  return {
    contractAddress: "",
  };
}
export const QueryFlatFeeRequest = {
  typeUrl: "/archway.rewards.v1.QueryFlatFeeRequest",
  encode(
    message: QueryFlatFeeRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryFlatFeeRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlatFeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFlatFeeRequest {
    const obj = createBaseQueryFlatFeeRequest();
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    return obj;
  },
  toJSON(message: QueryFlatFeeRequest): JsonSafe<QueryFlatFeeRequest> {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryFlatFeeRequest>, I>>(
    object: I,
  ): QueryFlatFeeRequest {
    const message = createBaseQueryFlatFeeRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};
function createBaseQueryFlatFeeResponse(): QueryFlatFeeResponse {
  return {
    flatFeeAmount: Coin.fromPartial({}),
  };
}
export const QueryFlatFeeResponse = {
  typeUrl: "/archway.rewards.v1.QueryFlatFeeResponse",
  encode(
    message: QueryFlatFeeResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.flatFeeAmount !== undefined) {
      Coin.encode(message.flatFeeAmount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryFlatFeeResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFlatFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.flatFeeAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryFlatFeeResponse {
    const obj = createBaseQueryFlatFeeResponse();
    if (isSet(object.flatFeeAmount))
      obj.flatFeeAmount = Coin.fromJSON(object.flatFeeAmount);
    return obj;
  },
  toJSON(message: QueryFlatFeeResponse): JsonSafe<QueryFlatFeeResponse> {
    const obj: any = {};
    message.flatFeeAmount !== undefined &&
      (obj.flatFeeAmount = message.flatFeeAmount
        ? Coin.toJSON(message.flatFeeAmount)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryFlatFeeResponse>, I>>(
    object: I,
  ): QueryFlatFeeResponse {
    const message = createBaseQueryFlatFeeResponse();
    if (object.flatFeeAmount !== undefined && object.flatFeeAmount !== null) {
      message.flatFeeAmount = Coin.fromPartial(object.flatFeeAmount);
    }
    return message;
  },
};
/** Query service for the tracking module. */
export interface Query {
  /** Params returns module parameters. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ContractMetadata returns the contract rewards parameters (metadata). */
  ContractMetadata(
    request: QueryContractMetadataRequest,
  ): Promise<QueryContractMetadataResponse>;
  /** BlockRewardsTracking returns block rewards tracking for the current block. */
  BlockRewardsTracking(
    request?: QueryBlockRewardsTrackingRequest,
  ): Promise<QueryBlockRewardsTrackingResponse>;
  /** RewardsPool returns the current undistributed rewards pool funds. */
  RewardsPool(
    request?: QueryRewardsPoolRequest,
  ): Promise<QueryRewardsPoolResponse>;
  /**
   * EstimateTxFees returns the estimated transaction fees for the given
   * transaction gas limit using the minimum consensus fee value for the current
   * block.
   */
  EstimateTxFees(
    request: QueryEstimateTxFeesRequest,
  ): Promise<QueryEstimateTxFeesResponse>;
  /**
   * RewardsRecords returns the paginated list of RewardsRecord objects stored
   * for the provided rewards_address.
   */
  RewardsRecords(
    request: QueryRewardsRecordsRequest,
  ): Promise<QueryRewardsRecordsResponse>;
  /**
   * OutstandingRewards returns total rewards credited from different contracts
   * for the provided rewards_address.
   */
  OutstandingRewards(
    request: QueryOutstandingRewardsRequest,
  ): Promise<QueryOutstandingRewardsResponse>;
  /**
   * FlatFee returns the flat fee set by the contract owner for the provided
   * contract_address
   */
  FlatFee(request: QueryFlatFeeRequest): Promise<QueryFlatFeeResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.ContractMetadata = this.ContractMetadata.bind(this);
    this.BlockRewardsTracking = this.BlockRewardsTracking.bind(this);
    this.RewardsPool = this.RewardsPool.bind(this);
    this.EstimateTxFees = this.EstimateTxFees.bind(this);
    this.RewardsRecords = this.RewardsRecords.bind(this);
    this.OutstandingRewards = this.OutstandingRewards.bind(this);
    this.FlatFee = this.FlatFee.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "archway.rewards.v1.Query",
      "Params",
      data,
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new BinaryReader(data)),
    );
  }
  ContractMetadata(
    request: QueryContractMetadataRequest,
  ): Promise<QueryContractMetadataResponse> {
    const data = QueryContractMetadataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "archway.rewards.v1.Query",
      "ContractMetadata",
      data,
    );
    return promise.then((data) =>
      QueryContractMetadataResponse.decode(new BinaryReader(data)),
    );
  }
  BlockRewardsTracking(
    request: QueryBlockRewardsTrackingRequest = {},
  ): Promise<QueryBlockRewardsTrackingResponse> {
    const data = QueryBlockRewardsTrackingRequest.encode(request).finish();
    const promise = this.rpc.request(
      "archway.rewards.v1.Query",
      "BlockRewardsTracking",
      data,
    );
    return promise.then((data) =>
      QueryBlockRewardsTrackingResponse.decode(new BinaryReader(data)),
    );
  }
  RewardsPool(
    request: QueryRewardsPoolRequest = {},
  ): Promise<QueryRewardsPoolResponse> {
    const data = QueryRewardsPoolRequest.encode(request).finish();
    const promise = this.rpc.request(
      "archway.rewards.v1.Query",
      "RewardsPool",
      data,
    );
    return promise.then((data) =>
      QueryRewardsPoolResponse.decode(new BinaryReader(data)),
    );
  }
  EstimateTxFees(
    request: QueryEstimateTxFeesRequest,
  ): Promise<QueryEstimateTxFeesResponse> {
    const data = QueryEstimateTxFeesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "archway.rewards.v1.Query",
      "EstimateTxFees",
      data,
    );
    return promise.then((data) =>
      QueryEstimateTxFeesResponse.decode(new BinaryReader(data)),
    );
  }
  RewardsRecords(
    request: QueryRewardsRecordsRequest,
  ): Promise<QueryRewardsRecordsResponse> {
    const data = QueryRewardsRecordsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "archway.rewards.v1.Query",
      "RewardsRecords",
      data,
    );
    return promise.then((data) =>
      QueryRewardsRecordsResponse.decode(new BinaryReader(data)),
    );
  }
  OutstandingRewards(
    request: QueryOutstandingRewardsRequest,
  ): Promise<QueryOutstandingRewardsResponse> {
    const data = QueryOutstandingRewardsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "archway.rewards.v1.Query",
      "OutstandingRewards",
      data,
    );
    return promise.then((data) =>
      QueryOutstandingRewardsResponse.decode(new BinaryReader(data)),
    );
  }
  FlatFee(request: QueryFlatFeeRequest): Promise<QueryFlatFeeResponse> {
    const data = QueryFlatFeeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "archway.rewards.v1.Query",
      "FlatFee",
      data,
    );
    return promise.then((data) =>
      QueryFlatFeeResponse.decode(new BinaryReader(data)),
    );
  }
}
