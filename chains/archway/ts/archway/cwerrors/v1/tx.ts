/* eslint-disable */
import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "archway.cwerrors.v1";
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /**
   * params defines the x/cwerrors parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
/** MsgSubscribeToError is the Msg/SubscribeToError request type. */
export interface MsgSubscribeToError {
  /**
   * sender is the address of who is registering the contarcts for callback on
   * error
   */
  sender: string;
  /** contract is the address of the contract that will be called on error */
  contractAddress: string;
  /**
   * fee is the subscription fee for the feature (current no fee is charged for
   * this feature)
   */
  fee: Coin;
}
/**
 * MsgSubscribeToErrorResponse defines the response structure for executing a
 * MsgSubscribeToError message.
 */
export interface MsgSubscribeToErrorResponse {
  /**
   * subscription_valid_till is the block height till which the subscription is
   * valid
   */
  subscriptionValidTill: bigint;
}
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  typeUrl: "/archway.cwerrors.v1.MsgUpdateParams",
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
  typeUrl: "/archway.cwerrors.v1.MsgUpdateParamsResponse",
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
function createBaseMsgSubscribeToError(): MsgSubscribeToError {
  return {
    sender: "",
    contractAddress: "",
    fee: Coin.fromPartial({}),
  };
}
export const MsgSubscribeToError = {
  typeUrl: "/archway.cwerrors.v1.MsgSubscribeToError",
  encode(
    message: MsgSubscribeToError,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgSubscribeToError {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubscribeToError();
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
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubscribeToError {
    const obj = createBaseMsgSubscribeToError();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    if (isSet(object.fee)) obj.fee = Coin.fromJSON(object.fee);
    return obj;
  },
  toJSON(message: MsgSubscribeToError): JsonSafe<MsgSubscribeToError> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.fee !== undefined &&
      (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubscribeToError>, I>>(
    object: I,
  ): MsgSubscribeToError {
    const message = createBaseMsgSubscribeToError();
    message.sender = object.sender ?? "";
    message.contractAddress = object.contractAddress ?? "";
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = Coin.fromPartial(object.fee);
    }
    return message;
  },
};
function createBaseMsgSubscribeToErrorResponse(): MsgSubscribeToErrorResponse {
  return {
    subscriptionValidTill: BigInt(0),
  };
}
export const MsgSubscribeToErrorResponse = {
  typeUrl: "/archway.cwerrors.v1.MsgSubscribeToErrorResponse",
  encode(
    message: MsgSubscribeToErrorResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.subscriptionValidTill !== BigInt(0)) {
      writer.uint32(8).int64(message.subscriptionValidTill);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgSubscribeToErrorResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubscribeToErrorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriptionValidTill = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubscribeToErrorResponse {
    const obj = createBaseMsgSubscribeToErrorResponse();
    if (isSet(object.subscriptionValidTill))
      obj.subscriptionValidTill = BigInt(
        object.subscriptionValidTill.toString(),
      );
    return obj;
  },
  toJSON(
    message: MsgSubscribeToErrorResponse,
  ): JsonSafe<MsgSubscribeToErrorResponse> {
    const obj: any = {};
    message.subscriptionValidTill !== undefined &&
      (obj.subscriptionValidTill = (
        message.subscriptionValidTill || BigInt(0)
      ).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubscribeToErrorResponse>, I>>(
    object: I,
  ): MsgSubscribeToErrorResponse {
    const message = createBaseMsgSubscribeToErrorResponse();
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
/** Msg defines the cwerrors Msg service. */
export interface Msg {
  /**
   * UpdateParams defines a governance operation for updating the x/cwerrors
   * module parameters. The authority is defined in the keeper.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * SubscribeToError defines an operation which will register a contract for a
   * sudo callback on errors
   */
  SubscribeToError(
    request: MsgSubscribeToError,
  ): Promise<MsgSubscribeToErrorResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UpdateParams = this.UpdateParams.bind(this);
    this.SubscribeToError = this.SubscribeToError.bind(this);
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "archway.cwerrors.v1.Msg",
      "UpdateParams",
      data,
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new BinaryReader(data)),
    );
  }
  SubscribeToError(
    request: MsgSubscribeToError,
  ): Promise<MsgSubscribeToErrorResponse> {
    const data = MsgSubscribeToError.encode(request).finish();
    const promise = this.rpc.request(
      "archway.cwerrors.v1.Msg",
      "SubscribeToError",
      data,
    );
    return promise.then((data) =>
      MsgSubscribeToErrorResponse.decode(new BinaryReader(data)),
    );
  }
}
