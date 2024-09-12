/* eslint-disable */
import { BlockTracking } from "./tracking";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet, Rpc } from "../../../helpers";
export const protobufPackage = "archway.tracking.v1";
/** QueryBlockGasTrackingRequest is the request for Query.BlockGasTracking. */
export interface QueryBlockGasTrackingRequest {}
/** QueryBlockGasTrackingResponse is the response for Query.BlockGasTracking. */
export interface QueryBlockGasTrackingResponse {
  block: BlockTracking;
}
function createBaseQueryBlockGasTrackingRequest(): QueryBlockGasTrackingRequest {
  return {};
}
export const QueryBlockGasTrackingRequest = {
  typeUrl: "/archway.tracking.v1.QueryBlockGasTrackingRequest",
  encode(
    _: QueryBlockGasTrackingRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryBlockGasTrackingRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlockGasTrackingRequest();
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
  fromJSON(_: any): QueryBlockGasTrackingRequest {
    const obj = createBaseQueryBlockGasTrackingRequest();
    return obj;
  },
  toJSON(
    _: QueryBlockGasTrackingRequest,
  ): JsonSafe<QueryBlockGasTrackingRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBlockGasTrackingRequest>, I>>(
    _: I,
  ): QueryBlockGasTrackingRequest {
    const message = createBaseQueryBlockGasTrackingRequest();
    return message;
  },
};
function createBaseQueryBlockGasTrackingResponse(): QueryBlockGasTrackingResponse {
  return {
    block: BlockTracking.fromPartial({}),
  };
}
export const QueryBlockGasTrackingResponse = {
  typeUrl: "/archway.tracking.v1.QueryBlockGasTrackingResponse",
  encode(
    message: QueryBlockGasTrackingResponse,
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
  ): QueryBlockGasTrackingResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBlockGasTrackingResponse();
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
  fromJSON(object: any): QueryBlockGasTrackingResponse {
    const obj = createBaseQueryBlockGasTrackingResponse();
    if (isSet(object.block)) obj.block = BlockTracking.fromJSON(object.block);
    return obj;
  },
  toJSON(
    message: QueryBlockGasTrackingResponse,
  ): JsonSafe<QueryBlockGasTrackingResponse> {
    const obj: any = {};
    message.block !== undefined &&
      (obj.block = message.block
        ? BlockTracking.toJSON(message.block)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryBlockGasTrackingResponse>, I>>(
    object: I,
  ): QueryBlockGasTrackingResponse {
    const message = createBaseQueryBlockGasTrackingResponse();
    if (object.block !== undefined && object.block !== null) {
      message.block = BlockTracking.fromPartial(object.block);
    }
    return message;
  },
};
/** Query service for the tracking module. */
export interface Query {
  /** BlockGasTracking returns block gas tracking for the current block */
  BlockGasTracking(
    request?: QueryBlockGasTrackingRequest,
  ): Promise<QueryBlockGasTrackingResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.BlockGasTracking = this.BlockGasTracking.bind(this);
  }
  BlockGasTracking(
    request: QueryBlockGasTrackingRequest = {},
  ): Promise<QueryBlockGasTrackingResponse> {
    const data = QueryBlockGasTrackingRequest.encode(request).finish();
    const promise = this.rpc.request(
      "archway.tracking.v1.Query",
      "BlockGasTracking",
      data,
    );
    return promise.then((data) =>
      QueryBlockGasTrackingResponse.decode(new BinaryReader(data)),
    );
  }
}
