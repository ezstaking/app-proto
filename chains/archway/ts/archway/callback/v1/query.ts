/* eslint-disable */
import { Params, CallbackFeesFeeSplit, Callback } from "./callback";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
export const protobufPackage = "archway.callback.v1";
/** QueryParamsRequest is the request for Query.Params. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response for Query.Params. */
export interface QueryParamsResponse {
  /** params defines all the module parameters. */
  params: Params;
}
/** QueryEstimateCallbackFeesRequest is the request for Query.EstimateCallbackFees. */
export interface QueryEstimateCallbackFeesRequest {
  /** block_height is the height at which to estimate the callback fees */
  blockHeight: bigint;
}
/** QueryEstimateCallbackFeesResponse is the response for Query.EstimateCallbackFees. */
export interface QueryEstimateCallbackFeesResponse {
  /** total_fees is the total fees that needs to be paid by the contract to reserve a callback */
  totalFees?: Coin;
  /** fee_split is the breakdown of the total_fees */
  feeSplit?: CallbackFeesFeeSplit;
}
/** QueryCallbacksRequest is the request for Query.Callbacks. */
export interface QueryCallbacksRequest {
  /** block_height is the height at which to query the callbacks */
  blockHeight: bigint;
}
/** QueryCallbacksResponse is the response for Query.Callbacks. */
export interface QueryCallbacksResponse {
  /** callbacks is the list of callbacks registered at the given height */
  callbacks: Callback[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/archway.callback.v1.QueryParamsRequest",
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
  typeUrl: "/archway.callback.v1.QueryParamsResponse",
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
function createBaseQueryEstimateCallbackFeesRequest(): QueryEstimateCallbackFeesRequest {
  return {
    blockHeight: BigInt(0),
  };
}
export const QueryEstimateCallbackFeesRequest = {
  typeUrl: "/archway.callback.v1.QueryEstimateCallbackFeesRequest",
  encode(
    message: QueryEstimateCallbackFeesRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryEstimateCallbackFeesRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateCallbackFeesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEstimateCallbackFeesRequest {
    const obj = createBaseQueryEstimateCallbackFeesRequest();
    if (isSet(object.blockHeight))
      obj.blockHeight = BigInt(object.blockHeight.toString());
    return obj;
  },
  toJSON(
    message: QueryEstimateCallbackFeesRequest,
  ): JsonSafe<QueryEstimateCallbackFeesRequest> {
    const obj: any = {};
    message.blockHeight !== undefined &&
      (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<QueryEstimateCallbackFeesRequest>, I>,
  >(object: I): QueryEstimateCallbackFeesRequest {
    const message = createBaseQueryEstimateCallbackFeesRequest();
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = BigInt(object.blockHeight.toString());
    }
    return message;
  },
};
function createBaseQueryEstimateCallbackFeesResponse(): QueryEstimateCallbackFeesResponse {
  return {
    totalFees: undefined,
    feeSplit: undefined,
  };
}
export const QueryEstimateCallbackFeesResponse = {
  typeUrl: "/archway.callback.v1.QueryEstimateCallbackFeesResponse",
  encode(
    message: QueryEstimateCallbackFeesResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.totalFees !== undefined) {
      Coin.encode(message.totalFees, writer.uint32(10).fork()).ldelim();
    }
    if (message.feeSplit !== undefined) {
      CallbackFeesFeeSplit.encode(
        message.feeSplit,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryEstimateCallbackFeesResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEstimateCallbackFeesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalFees = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.feeSplit = CallbackFeesFeeSplit.decode(
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
  fromJSON(object: any): QueryEstimateCallbackFeesResponse {
    const obj = createBaseQueryEstimateCallbackFeesResponse();
    if (isSet(object.totalFees))
      obj.totalFees = Coin.fromJSON(object.totalFees);
    if (isSet(object.feeSplit))
      obj.feeSplit = CallbackFeesFeeSplit.fromJSON(object.feeSplit);
    return obj;
  },
  toJSON(
    message: QueryEstimateCallbackFeesResponse,
  ): JsonSafe<QueryEstimateCallbackFeesResponse> {
    const obj: any = {};
    message.totalFees !== undefined &&
      (obj.totalFees = message.totalFees
        ? Coin.toJSON(message.totalFees)
        : undefined);
    message.feeSplit !== undefined &&
      (obj.feeSplit = message.feeSplit
        ? CallbackFeesFeeSplit.toJSON(message.feeSplit)
        : undefined);
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<QueryEstimateCallbackFeesResponse>, I>,
  >(object: I): QueryEstimateCallbackFeesResponse {
    const message = createBaseQueryEstimateCallbackFeesResponse();
    if (object.totalFees !== undefined && object.totalFees !== null) {
      message.totalFees = Coin.fromPartial(object.totalFees);
    }
    if (object.feeSplit !== undefined && object.feeSplit !== null) {
      message.feeSplit = CallbackFeesFeeSplit.fromPartial(object.feeSplit);
    }
    return message;
  },
};
function createBaseQueryCallbacksRequest(): QueryCallbacksRequest {
  return {
    blockHeight: BigInt(0),
  };
}
export const QueryCallbacksRequest = {
  typeUrl: "/archway.callback.v1.QueryCallbacksRequest",
  encode(
    message: QueryCallbacksRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryCallbacksRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCallbacksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCallbacksRequest {
    const obj = createBaseQueryCallbacksRequest();
    if (isSet(object.blockHeight))
      obj.blockHeight = BigInt(object.blockHeight.toString());
    return obj;
  },
  toJSON(message: QueryCallbacksRequest): JsonSafe<QueryCallbacksRequest> {
    const obj: any = {};
    message.blockHeight !== undefined &&
      (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCallbacksRequest>, I>>(
    object: I,
  ): QueryCallbacksRequest {
    const message = createBaseQueryCallbacksRequest();
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = BigInt(object.blockHeight.toString());
    }
    return message;
  },
};
function createBaseQueryCallbacksResponse(): QueryCallbacksResponse {
  return {
    callbacks: [],
  };
}
export const QueryCallbacksResponse = {
  typeUrl: "/archway.callback.v1.QueryCallbacksResponse",
  encode(
    message: QueryCallbacksResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.callbacks) {
      Callback.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryCallbacksResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCallbacksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.callbacks.push(Callback.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCallbacksResponse {
    const obj = createBaseQueryCallbacksResponse();
    if (Array.isArray(object?.callbacks))
      obj.callbacks = object.callbacks.map((e: any) => Callback.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryCallbacksResponse): JsonSafe<QueryCallbacksResponse> {
    const obj: any = {};
    if (message.callbacks) {
      obj.callbacks = message.callbacks.map((e) =>
        e ? Callback.toJSON(e) : undefined,
      );
    } else {
      obj.callbacks = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryCallbacksResponse>, I>>(
    object: I,
  ): QueryCallbacksResponse {
    const message = createBaseQueryCallbacksResponse();
    message.callbacks =
      object.callbacks?.map((e) => Callback.fromPartial(e)) || [];
    return message;
  },
};
/** Query service for the callback module. */
export interface Query {
  /** Params returns module parameters */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** EstimateCallbackFees returns the total amount of callback fees a contract needs to pay to register the callback */
  EstimateCallbackFees(
    request: QueryEstimateCallbackFeesRequest,
  ): Promise<QueryEstimateCallbackFeesResponse>;
  /** Callbacks returns all the callbacks registered at a given height */
  Callbacks(request: QueryCallbacksRequest): Promise<QueryCallbacksResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.EstimateCallbackFees = this.EstimateCallbackFees.bind(this);
    this.Callbacks = this.Callbacks.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "archway.callback.v1.Query",
      "Params",
      data,
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new BinaryReader(data)),
    );
  }
  EstimateCallbackFees(
    request: QueryEstimateCallbackFeesRequest,
  ): Promise<QueryEstimateCallbackFeesResponse> {
    const data = QueryEstimateCallbackFeesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "archway.callback.v1.Query",
      "EstimateCallbackFees",
      data,
    );
    return promise.then((data) =>
      QueryEstimateCallbackFeesResponse.decode(new BinaryReader(data)),
    );
  }
  Callbacks(request: QueryCallbacksRequest): Promise<QueryCallbacksResponse> {
    const data = QueryCallbacksRequest.encode(request).finish();
    const promise = this.rpc.request(
      "archway.callback.v1.Query",
      "Callbacks",
      data,
    );
    return promise.then((data) =>
      QueryCallbacksResponse.decode(new BinaryReader(data)),
    );
  }
}
