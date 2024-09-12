/* eslint-disable */
import { Params } from "./params";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { SudoError } from "./cwerrors";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "archway.cwerrors.v1";
/**
 * ParamsUpdatedEvent defines the event which is thrown when the module
 * parameters are updated
 */
export interface ParamsUpdatedEvent {
  /** new_params are the new parameters for the module */
  newParams: Params;
  /** authority is the address of the authority that updated the parameters */
  authority: string;
}
/**
 * SubscribedToErrorsEvent defines the event which is thrown when a contract
 * subscribes to errors
 */
export interface SubscribedToErrorsEvent {
  /** sender is the address which initiated the subscription */
  sender: string;
  /**
   * contract_address is the address of the contract which is subscribed to
   * errors
   */
  contractAddress: string;
  /** fees_paid is the fees paid for the subscription */
  feesPaid: Coin;
  /**
   * subscription_valid_till is the block height till which the subscription is
   * valid
   */
  subscriptionValidTill: bigint;
}
/** StoringErrorEvent defines the event which is thrown when an error is stored */
export interface StoringErrorEvent {
  /** error is the error which is stored */
  error: SudoError;
  /**
   * deletion_block_height is the block height at which the error will be pruned
   * from the state
   */
  deletionBlockHeight: bigint;
}
/**
 * SudoErrorCallbackFailedEvent defines the event which is thrown when a sudo
 * error callback fails
 */
export interface SudoErrorCallbackFailedEvent {
  /** error is the error for which the callback is executed */
  error: SudoError;
  /** callback_error_message is the error message of why the callback failed */
  callbackErrorMessage: string;
}
function createBaseParamsUpdatedEvent(): ParamsUpdatedEvent {
  return {
    newParams: Params.fromPartial({}),
    authority: "",
  };
}
export const ParamsUpdatedEvent = {
  typeUrl: "/archway.cwerrors.v1.ParamsUpdatedEvent",
  encode(
    message: ParamsUpdatedEvent,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.newParams !== undefined) {
      Params.encode(message.newParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): ParamsUpdatedEvent {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsUpdatedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newParams = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ParamsUpdatedEvent {
    const obj = createBaseParamsUpdatedEvent();
    if (isSet(object.newParams))
      obj.newParams = Params.fromJSON(object.newParams);
    if (isSet(object.authority)) obj.authority = String(object.authority);
    return obj;
  },
  toJSON(message: ParamsUpdatedEvent): JsonSafe<ParamsUpdatedEvent> {
    const obj: any = {};
    message.newParams !== undefined &&
      (obj.newParams = message.newParams
        ? Params.toJSON(message.newParams)
        : undefined);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ParamsUpdatedEvent>, I>>(
    object: I,
  ): ParamsUpdatedEvent {
    const message = createBaseParamsUpdatedEvent();
    if (object.newParams !== undefined && object.newParams !== null) {
      message.newParams = Params.fromPartial(object.newParams);
    }
    message.authority = object.authority ?? "";
    return message;
  },
};
function createBaseSubscribedToErrorsEvent(): SubscribedToErrorsEvent {
  return {
    sender: "",
    contractAddress: "",
    feesPaid: Coin.fromPartial({}),
    subscriptionValidTill: BigInt(0),
  };
}
export const SubscribedToErrorsEvent = {
  typeUrl: "/archway.cwerrors.v1.SubscribedToErrorsEvent",
  encode(
    message: SubscribedToErrorsEvent,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.feesPaid !== undefined) {
      Coin.encode(message.feesPaid, writer.uint32(26).fork()).ldelim();
    }
    if (message.subscriptionValidTill !== BigInt(0)) {
      writer.uint32(32).int64(message.subscriptionValidTill);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): SubscribedToErrorsEvent {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribedToErrorsEvent();
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
          message.feesPaid = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.subscriptionValidTill = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SubscribedToErrorsEvent {
    const obj = createBaseSubscribedToErrorsEvent();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    if (isSet(object.feesPaid)) obj.feesPaid = Coin.fromJSON(object.feesPaid);
    if (isSet(object.subscriptionValidTill))
      obj.subscriptionValidTill = BigInt(
        object.subscriptionValidTill.toString(),
      );
    return obj;
  },
  toJSON(message: SubscribedToErrorsEvent): JsonSafe<SubscribedToErrorsEvent> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.feesPaid !== undefined &&
      (obj.feesPaid = message.feesPaid
        ? Coin.toJSON(message.feesPaid)
        : undefined);
    message.subscriptionValidTill !== undefined &&
      (obj.subscriptionValidTill = (
        message.subscriptionValidTill || BigInt(0)
      ).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SubscribedToErrorsEvent>, I>>(
    object: I,
  ): SubscribedToErrorsEvent {
    const message = createBaseSubscribedToErrorsEvent();
    message.sender = object.sender ?? "";
    message.contractAddress = object.contractAddress ?? "";
    if (object.feesPaid !== undefined && object.feesPaid !== null) {
      message.feesPaid = Coin.fromPartial(object.feesPaid);
    }
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
function createBaseStoringErrorEvent(): StoringErrorEvent {
  return {
    error: SudoError.fromPartial({}),
    deletionBlockHeight: BigInt(0),
  };
}
export const StoringErrorEvent = {
  typeUrl: "/archway.cwerrors.v1.StoringErrorEvent",
  encode(
    message: StoringErrorEvent,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.error !== undefined) {
      SudoError.encode(message.error, writer.uint32(10).fork()).ldelim();
    }
    if (message.deletionBlockHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.deletionBlockHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StoringErrorEvent {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoringErrorEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = SudoError.decode(reader, reader.uint32());
          break;
        case 2:
          message.deletionBlockHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StoringErrorEvent {
    const obj = createBaseStoringErrorEvent();
    if (isSet(object.error)) obj.error = SudoError.fromJSON(object.error);
    if (isSet(object.deletionBlockHeight))
      obj.deletionBlockHeight = BigInt(object.deletionBlockHeight.toString());
    return obj;
  },
  toJSON(message: StoringErrorEvent): JsonSafe<StoringErrorEvent> {
    const obj: any = {};
    message.error !== undefined &&
      (obj.error = message.error ? SudoError.toJSON(message.error) : undefined);
    message.deletionBlockHeight !== undefined &&
      (obj.deletionBlockHeight = (
        message.deletionBlockHeight || BigInt(0)
      ).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<StoringErrorEvent>, I>>(
    object: I,
  ): StoringErrorEvent {
    const message = createBaseStoringErrorEvent();
    if (object.error !== undefined && object.error !== null) {
      message.error = SudoError.fromPartial(object.error);
    }
    if (
      object.deletionBlockHeight !== undefined &&
      object.deletionBlockHeight !== null
    ) {
      message.deletionBlockHeight = BigInt(
        object.deletionBlockHeight.toString(),
      );
    }
    return message;
  },
};
function createBaseSudoErrorCallbackFailedEvent(): SudoErrorCallbackFailedEvent {
  return {
    error: SudoError.fromPartial({}),
    callbackErrorMessage: "",
  };
}
export const SudoErrorCallbackFailedEvent = {
  typeUrl: "/archway.cwerrors.v1.SudoErrorCallbackFailedEvent",
  encode(
    message: SudoErrorCallbackFailedEvent,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.error !== undefined) {
      SudoError.encode(message.error, writer.uint32(10).fork()).ldelim();
    }
    if (message.callbackErrorMessage !== "") {
      writer.uint32(18).string(message.callbackErrorMessage);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): SudoErrorCallbackFailedEvent {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSudoErrorCallbackFailedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = SudoError.decode(reader, reader.uint32());
          break;
        case 2:
          message.callbackErrorMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SudoErrorCallbackFailedEvent {
    const obj = createBaseSudoErrorCallbackFailedEvent();
    if (isSet(object.error)) obj.error = SudoError.fromJSON(object.error);
    if (isSet(object.callbackErrorMessage))
      obj.callbackErrorMessage = String(object.callbackErrorMessage);
    return obj;
  },
  toJSON(
    message: SudoErrorCallbackFailedEvent,
  ): JsonSafe<SudoErrorCallbackFailedEvent> {
    const obj: any = {};
    message.error !== undefined &&
      (obj.error = message.error ? SudoError.toJSON(message.error) : undefined);
    message.callbackErrorMessage !== undefined &&
      (obj.callbackErrorMessage = message.callbackErrorMessage);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SudoErrorCallbackFailedEvent>, I>>(
    object: I,
  ): SudoErrorCallbackFailedEvent {
    const message = createBaseSudoErrorCallbackFailedEvent();
    if (object.error !== undefined && object.error !== null) {
      message.error = SudoError.fromPartial(object.error);
    }
    message.callbackErrorMessage = object.callbackErrorMessage ?? "";
    return message;
  },
};
