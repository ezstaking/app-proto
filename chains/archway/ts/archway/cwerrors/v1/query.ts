/* eslint-disable */
import { Params } from "./params";
import { SudoError } from "./cwerrors";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
export const protobufPackage = "archway.cwerrors.v1";
/** QueryParamsRequest is the request for Query.Params. */
export interface QueryParamsRequest {}
/** QueryParamsResponse is the response for Query.Params. */
export interface QueryParamsResponse {
  /** params defines all the module parameters. */
  params: Params;
}
/** QueryErrorsRequest is the request for Query.Errors. */
export interface QueryErrorsRequest {
  /** contract_address is the address of the contract whose errors to query for */
  contractAddress: string;
}
/** QueryErrorsResponse is the response for Query.Errors. */
export interface QueryErrorsResponse {
  /** errors defines all the contract errors which will be returned */
  errors: SudoError[];
}
/** QueryIsSubscribedRequest is the request for Query.IsSubscribed. */
export interface QueryIsSubscribedRequest {
  /** contract_address is the address of the contract to query if subscribed */
  contractAddress: string;
}
/** QueryIsSubscribedResponse is the response for Query.IsSubscribed. */
export interface QueryIsSubscribedResponse {
  /** subscribed defines if the contract is subscribed to sudo error callbacks */
  subscribed: boolean;
  /**
   * subscription_valid_till defines the block height till which the
   * subscription is valid
   */
  subscriptionValidTill: bigint;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/archway.cwerrors.v1.QueryParamsRequest",
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
  typeUrl: "/archway.cwerrors.v1.QueryParamsResponse",
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
function createBaseQueryErrorsRequest(): QueryErrorsRequest {
  return {
    contractAddress: "",
  };
}
export const QueryErrorsRequest = {
  typeUrl: "/archway.cwerrors.v1.QueryErrorsRequest",
  encode(
    message: QueryErrorsRequest,
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
  ): QueryErrorsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryErrorsRequest();
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
  fromJSON(object: any): QueryErrorsRequest {
    const obj = createBaseQueryErrorsRequest();
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    return obj;
  },
  toJSON(message: QueryErrorsRequest): JsonSafe<QueryErrorsRequest> {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryErrorsRequest>, I>>(
    object: I,
  ): QueryErrorsRequest {
    const message = createBaseQueryErrorsRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};
function createBaseQueryErrorsResponse(): QueryErrorsResponse {
  return {
    errors: [],
  };
}
export const QueryErrorsResponse = {
  typeUrl: "/archway.cwerrors.v1.QueryErrorsResponse",
  encode(
    message: QueryErrorsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.errors) {
      SudoError.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryErrorsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryErrorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.errors.push(SudoError.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryErrorsResponse {
    const obj = createBaseQueryErrorsResponse();
    if (Array.isArray(object?.errors))
      obj.errors = object.errors.map((e: any) => SudoError.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryErrorsResponse): JsonSafe<QueryErrorsResponse> {
    const obj: any = {};
    if (message.errors) {
      obj.errors = message.errors.map((e) =>
        e ? SudoError.toJSON(e) : undefined,
      );
    } else {
      obj.errors = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryErrorsResponse>, I>>(
    object: I,
  ): QueryErrorsResponse {
    const message = createBaseQueryErrorsResponse();
    message.errors = object.errors?.map((e) => SudoError.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryIsSubscribedRequest(): QueryIsSubscribedRequest {
  return {
    contractAddress: "",
  };
}
export const QueryIsSubscribedRequest = {
  typeUrl: "/archway.cwerrors.v1.QueryIsSubscribedRequest",
  encode(
    message: QueryIsSubscribedRequest,
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
  ): QueryIsSubscribedRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsSubscribedRequest();
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
  fromJSON(object: any): QueryIsSubscribedRequest {
    const obj = createBaseQueryIsSubscribedRequest();
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    return obj;
  },
  toJSON(
    message: QueryIsSubscribedRequest,
  ): JsonSafe<QueryIsSubscribedRequest> {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryIsSubscribedRequest>, I>>(
    object: I,
  ): QueryIsSubscribedRequest {
    const message = createBaseQueryIsSubscribedRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};
function createBaseQueryIsSubscribedResponse(): QueryIsSubscribedResponse {
  return {
    subscribed: false,
    subscriptionValidTill: BigInt(0),
  };
}
export const QueryIsSubscribedResponse = {
  typeUrl: "/archway.cwerrors.v1.QueryIsSubscribedResponse",
  encode(
    message: QueryIsSubscribedResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.subscribed === true) {
      writer.uint32(8).bool(message.subscribed);
    }
    if (message.subscriptionValidTill !== BigInt(0)) {
      writer.uint32(16).int64(message.subscriptionValidTill);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryIsSubscribedResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIsSubscribedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscribed = reader.bool();
          break;
        case 2:
          message.subscriptionValidTill = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIsSubscribedResponse {
    const obj = createBaseQueryIsSubscribedResponse();
    if (isSet(object.subscribed)) obj.subscribed = Boolean(object.subscribed);
    if (isSet(object.subscriptionValidTill))
      obj.subscriptionValidTill = BigInt(
        object.subscriptionValidTill.toString(),
      );
    return obj;
  },
  toJSON(
    message: QueryIsSubscribedResponse,
  ): JsonSafe<QueryIsSubscribedResponse> {
    const obj: any = {};
    message.subscribed !== undefined && (obj.subscribed = message.subscribed);
    message.subscriptionValidTill !== undefined &&
      (obj.subscriptionValidTill = (
        message.subscriptionValidTill || BigInt(0)
      ).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryIsSubscribedResponse>, I>>(
    object: I,
  ): QueryIsSubscribedResponse {
    const message = createBaseQueryIsSubscribedResponse();
    message.subscribed = object.subscribed ?? false;
    if (
      object.subscriptionValidTill !== undefined &&
      object.subscriptionValidTill !== null
    ) {
      message.subscriptionValidTill = BigInt(
        object.subscriptionValidTill.toString(),
      );
    }
    return message;
  },
};
/** Query service for the cwerrors module. */
export interface Query {
  /** Params queries all the module parameters. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Errors queries all the errors for a given contract. */
  Errors(request: QueryErrorsRequest): Promise<QueryErrorsResponse>;
  /** IsSubscribed queries if a contract is subscribed to sudo error callbacks. */
  IsSubscribed(
    request: QueryIsSubscribedRequest,
  ): Promise<QueryIsSubscribedResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Errors = this.Errors.bind(this);
    this.IsSubscribed = this.IsSubscribed.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "archway.cwerrors.v1.Query",
      "Params",
      data,
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new BinaryReader(data)),
    );
  }
  Errors(request: QueryErrorsRequest): Promise<QueryErrorsResponse> {
    const data = QueryErrorsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "archway.cwerrors.v1.Query",
      "Errors",
      data,
    );
    return promise.then((data) =>
      QueryErrorsResponse.decode(new BinaryReader(data)),
    );
  }
  IsSubscribed(
    request: QueryIsSubscribedRequest,
  ): Promise<QueryIsSubscribedResponse> {
    const data = QueryIsSubscribedRequest.encode(request).finish();
    const promise = this.rpc.request(
      "archway.cwerrors.v1.Query",
      "IsSubscribed",
      data,
    );
    return promise.then((data) =>
      QueryIsSubscribedResponse.decode(new BinaryReader(data)),
    );
  }
}
