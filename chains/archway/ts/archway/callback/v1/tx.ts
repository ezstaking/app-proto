/* eslint-disable */
import { Params } from "./callback";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "archway.callback.v1";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/callback parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
/** MsgUpdateParamsResponse defines the response structure for executing a MsgUpdateParams message. */
export interface MsgUpdateParamsResponse {}
/** MsgRequestCallback is the Msg/RequestCallback request type. */
export interface MsgRequestCallback {
  /** sender is the address who is requesting the callback (bech32 encoded) */
  sender: string;
  /** contract_address is the address of the contract which is requesting the callback (bech32 encoded) */
  contractAddress: string;
  /** job_id is an identifier the callback requestor can pass in to identify the callback when it happens */
  jobId: bigint;
  /** callback_height is the height at which the callback is executed. */
  callbackHeight: bigint;
  /** fees is the amount of fees being paid to register the contract */
  fees: Coin;
}
/** MsgRequestCallbackResponse defines the response structure for executing a MsgRequestCallback message. */
export interface MsgRequestCallbackResponse {}
/** MsgCancelCallback is the Msg/CancelCallback request type. */
export interface MsgCancelCallback {
  /** sender is the address of the contract which is cancelling the callback (bech32 encoded) */
  sender: string;
  /** contract_address is the address of the contract (bech32 encoded) */
  contractAddress: string;
  /** job_id is an identifier the callback requestor had passed during registration of the callback */
  jobId: bigint;
  /** callback_height is the height at which the callback requestor had registered the callback */
  callbackHeight: bigint;
}
/** MsgCancelCallbackResponse defines the response structure for executing a MsgCancelCallback message. */
export interface MsgCancelCallbackResponse {
  /** refund is the amount of fees being refunded due to the cancellation of the callback */
  refund: Coin;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  typeUrl: "/archway.callback.v1.MsgUpdateParams",
  encode(
    message: MsgUpdateParams,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    const obj = createBaseMsgUpdateParams();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(
    object: I,
  ): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/archway.callback.v1.MsgUpdateParamsResponse",
  encode(
    _: MsgUpdateParamsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgUpdateParamsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromJSON(_: any): MsgUpdateParamsResponse {
    const obj = createBaseMsgUpdateParamsResponse();
    return obj;
  },
  toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(
    _: I,
  ): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};
function createBaseMsgRequestCallback(): MsgRequestCallback {
  return {
    sender: "",
    contractAddress: "",
    jobId: BigInt(0),
    callbackHeight: BigInt(0),
    fees: Coin.fromPartial({}),
  };
}
export const MsgRequestCallback = {
  typeUrl: "/archway.callback.v1.MsgRequestCallback",
  encode(
    message: MsgRequestCallback,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.jobId !== BigInt(0)) {
      writer.uint32(24).uint64(message.jobId);
    }
    if (message.callbackHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.callbackHeight);
    }
    if (message.fees !== undefined) {
      Coin.encode(message.fees, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgRequestCallback {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        case 3:
          message.jobId = reader.uint64();
          break;
        case 4:
          message.callbackHeight = reader.int64();
          break;
        case 5:
          message.fees = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRequestCallback {
    const obj = createBaseMsgRequestCallback();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    if (isSet(object.jobId)) obj.jobId = BigInt(object.jobId.toString());
    if (isSet(object.callbackHeight))
      obj.callbackHeight = BigInt(object.callbackHeight.toString());
    if (isSet(object.fees)) obj.fees = Coin.fromJSON(object.fees);
    return obj;
  },
  toJSON(message: MsgRequestCallback): JsonSafe<MsgRequestCallback> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.jobId !== undefined &&
      (obj.jobId = (message.jobId || BigInt(0)).toString());
    message.callbackHeight !== undefined &&
      (obj.callbackHeight = (message.callbackHeight || BigInt(0)).toString());
    message.fees !== undefined &&
      (obj.fees = message.fees ? Coin.toJSON(message.fees) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRequestCallback>, I>>(
    object: I,
  ): MsgRequestCallback {
    const message = createBaseMsgRequestCallback();
    message.sender = object.sender ?? "";
    message.contractAddress = object.contractAddress ?? "";
    if (object.jobId !== undefined && object.jobId !== null) {
      message.jobId = BigInt(object.jobId.toString());
    }
    if (object.callbackHeight !== undefined && object.callbackHeight !== null) {
      message.callbackHeight = BigInt(object.callbackHeight.toString());
    }
    if (object.fees !== undefined && object.fees !== null) {
      message.fees = Coin.fromPartial(object.fees);
    }
    return message;
  },
};
function createBaseMsgRequestCallbackResponse(): MsgRequestCallbackResponse {
  return {};
}
export const MsgRequestCallbackResponse = {
  typeUrl: "/archway.callback.v1.MsgRequestCallbackResponse",
  encode(
    _: MsgRequestCallbackResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgRequestCallbackResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestCallbackResponse();
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
  fromJSON(_: any): MsgRequestCallbackResponse {
    const obj = createBaseMsgRequestCallbackResponse();
    return obj;
  },
  toJSON(_: MsgRequestCallbackResponse): JsonSafe<MsgRequestCallbackResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRequestCallbackResponse>, I>>(
    _: I,
  ): MsgRequestCallbackResponse {
    const message = createBaseMsgRequestCallbackResponse();
    return message;
  },
};
function createBaseMsgCancelCallback(): MsgCancelCallback {
  return {
    sender: "",
    contractAddress: "",
    jobId: BigInt(0),
    callbackHeight: BigInt(0),
  };
}
export const MsgCancelCallback = {
  typeUrl: "/archway.callback.v1.MsgCancelCallback",
  encode(
    message: MsgCancelCallback,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.jobId !== BigInt(0)) {
      writer.uint32(24).uint64(message.jobId);
    }
    if (message.callbackHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.callbackHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelCallback {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelCallback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        case 3:
          message.jobId = reader.uint64();
          break;
        case 4:
          message.callbackHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelCallback {
    const obj = createBaseMsgCancelCallback();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    if (isSet(object.jobId)) obj.jobId = BigInt(object.jobId.toString());
    if (isSet(object.callbackHeight))
      obj.callbackHeight = BigInt(object.callbackHeight.toString());
    return obj;
  },
  toJSON(message: MsgCancelCallback): JsonSafe<MsgCancelCallback> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.jobId !== undefined &&
      (obj.jobId = (message.jobId || BigInt(0)).toString());
    message.callbackHeight !== undefined &&
      (obj.callbackHeight = (message.callbackHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelCallback>, I>>(
    object: I,
  ): MsgCancelCallback {
    const message = createBaseMsgCancelCallback();
    message.sender = object.sender ?? "";
    message.contractAddress = object.contractAddress ?? "";
    if (object.jobId !== undefined && object.jobId !== null) {
      message.jobId = BigInt(object.jobId.toString());
    }
    if (object.callbackHeight !== undefined && object.callbackHeight !== null) {
      message.callbackHeight = BigInt(object.callbackHeight.toString());
    }
    return message;
  },
};
function createBaseMsgCancelCallbackResponse(): MsgCancelCallbackResponse {
  return {
    refund: Coin.fromPartial({}),
  };
}
export const MsgCancelCallbackResponse = {
  typeUrl: "/archway.callback.v1.MsgCancelCallbackResponse",
  encode(
    message: MsgCancelCallbackResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.refund !== undefined) {
      Coin.encode(message.refund, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgCancelCallbackResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelCallbackResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.refund = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelCallbackResponse {
    const obj = createBaseMsgCancelCallbackResponse();
    if (isSet(object.refund)) obj.refund = Coin.fromJSON(object.refund);
    return obj;
  },
  toJSON(
    message: MsgCancelCallbackResponse,
  ): JsonSafe<MsgCancelCallbackResponse> {
    const obj: any = {};
    message.refund !== undefined &&
      (obj.refund = message.refund ? Coin.toJSON(message.refund) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelCallbackResponse>, I>>(
    object: I,
  ): MsgCancelCallbackResponse {
    const message = createBaseMsgCancelCallbackResponse();
    if (object.refund !== undefined && object.refund !== null) {
      message.refund = Coin.fromPartial(object.refund);
    }
    return message;
  },
};
/** Msg defines the module messaging service. */
export interface Msg {
  /**
   * UpdateParams defines a governance operation for updating the x/callback
   * module parameters. The authority is defined in the keeper.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /** RequestCallback defines a message for registering a callback at a specific height by a given contract */
  RequestCallback(
    request: MsgRequestCallback,
  ): Promise<MsgRequestCallbackResponse>;
  /** CancelCallback defines a message for cancelling an existing callback */
  CancelCallback(
    request: MsgCancelCallback,
  ): Promise<MsgCancelCallbackResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.RequestCallback = this.RequestCallback.bind(this);
    this.CancelCallback = this.CancelCallback.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "archway.callback.v1.Msg",
      "UpdateParams",
      data,
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new BinaryReader(data)),
    );
  }
  RequestCallback(
    request: MsgRequestCallback,
  ): Promise<MsgRequestCallbackResponse> {
    const data = MsgRequestCallback.encode(request).finish();
    const promise = this.rpc.request(
      "archway.callback.v1.Msg",
      "RequestCallback",
      data,
    );
    return promise.then((data) =>
      MsgRequestCallbackResponse.decode(new BinaryReader(data)),
    );
  }
  CancelCallback(
    request: MsgCancelCallback,
  ): Promise<MsgCancelCallbackResponse> {
    const data = MsgCancelCallback.encode(request).finish();
    const promise = this.rpc.request(
      "archway.callback.v1.Msg",
      "CancelCallback",
      data,
    );
    return promise.then((data) =>
      MsgCancelCallbackResponse.decode(new BinaryReader(data)),
    );
  }
}
