/* eslint-disable */
import { CallbackFeesFeeSplit } from "./callback";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "archway.callback.v1";
/** CallbackRegisteredEvent is emitted when a callback is registered. */
export interface CallbackRegisteredEvent {
  /** contract_address is the address of the contract for which callback is being registered (bech32 encoded). */
  contractAddress: string;
  /** job_id is an identifier of the callback. */
  jobId: bigint;
  /** callback_height is the height at which the callback is executed. */
  callbackHeight: bigint;
  /** fee_split is the breakdown of the fees paid by the contract to reserve the callback */
  feeSplit?: CallbackFeesFeeSplit;
  /** reserved_by is the address which reserved the callback (bech32 encoded). */
  reservedBy: string;
}
/** CallbackCancelledEvent is emitted when a callback is cancelled. */
export interface CallbackCancelledEvent {
  /** cancelled_by is the address of the contract whose callback is being cancelled (bech32 encoded) */
  cancelledBy: string;
  /** contract_address is the address of the contract (bech32 encoded) */
  contractAddress: string;
  /** job_id is an identifier the callback requestor had passed during registration of the callback */
  jobId: bigint;
  /** callback_height is the height at which the callback requestor had registered the callback */
  callbackHeight: bigint;
  /** refund_amount is the amount of fees which was refunded on cancellation */
  refundAmount: Coin;
}
/** CallbackExecutedSuccessEvent is emitted when a callback is executed successfully. */
export interface CallbackExecutedSuccessEvent {
  /** contract_address is the address of the contract for which callback is being executed (bech32 encoded). */
  contractAddress: string;
  /** job_id is an identifier of the callback. */
  jobId: bigint;
  /** sudo_msg is the input passed by the module to the contract */
  sudoMsg: string;
  /** gas_used is the amount of gas consumed during the callback execution */
  gasUsed: bigint;
}
/** CallbackExecutedFailedEvent is emitted when a callback execution fails. */
export interface CallbackExecutedFailedEvent {
  /** contract_address is the address of the contract for which callback is being executed (bech32 encoded). */
  contractAddress: string;
  /** job_id is an identifier of the callback. */
  jobId: bigint;
  /** sudo_msg is the input passed by the module to the contract */
  sudoMsg: string;
  /** gas_used is the amount of gas consumed during the callback execution */
  gasUsed: bigint;
  /** error is the error returned during the callback execution */
  error: string;
}
function createBaseCallbackRegisteredEvent(): CallbackRegisteredEvent {
  return {
    contractAddress: "",
    jobId: BigInt(0),
    callbackHeight: BigInt(0),
    feeSplit: undefined,
    reservedBy: "",
  };
}
export const CallbackRegisteredEvent = {
  typeUrl: "/archway.callback.v1.CallbackRegisteredEvent",
  encode(
    message: CallbackRegisteredEvent,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.jobId !== BigInt(0)) {
      writer.uint32(16).uint64(message.jobId);
    }
    if (message.callbackHeight !== BigInt(0)) {
      writer.uint32(24).int64(message.callbackHeight);
    }
    if (message.feeSplit !== undefined) {
      CallbackFeesFeeSplit.encode(
        message.feeSplit,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.reservedBy !== "") {
      writer.uint32(42).string(message.reservedBy);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): CallbackRegisteredEvent {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCallbackRegisteredEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.jobId = reader.uint64();
          break;
        case 3:
          message.callbackHeight = reader.int64();
          break;
        case 4:
          message.feeSplit = CallbackFeesFeeSplit.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 5:
          message.reservedBy = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CallbackRegisteredEvent {
    const obj = createBaseCallbackRegisteredEvent();
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    if (isSet(object.jobId)) obj.jobId = BigInt(object.jobId.toString());
    if (isSet(object.callbackHeight))
      obj.callbackHeight = BigInt(object.callbackHeight.toString());
    if (isSet(object.feeSplit))
      obj.feeSplit = CallbackFeesFeeSplit.fromJSON(object.feeSplit);
    if (isSet(object.reservedBy)) obj.reservedBy = String(object.reservedBy);
    return obj;
  },
  toJSON(message: CallbackRegisteredEvent): JsonSafe<CallbackRegisteredEvent> {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.jobId !== undefined &&
      (obj.jobId = (message.jobId || BigInt(0)).toString());
    message.callbackHeight !== undefined &&
      (obj.callbackHeight = (message.callbackHeight || BigInt(0)).toString());
    message.feeSplit !== undefined &&
      (obj.feeSplit = message.feeSplit
        ? CallbackFeesFeeSplit.toJSON(message.feeSplit)
        : undefined);
    message.reservedBy !== undefined && (obj.reservedBy = message.reservedBy);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CallbackRegisteredEvent>, I>>(
    object: I,
  ): CallbackRegisteredEvent {
    const message = createBaseCallbackRegisteredEvent();
    message.contractAddress = object.contractAddress ?? "";
    if (object.jobId !== undefined && object.jobId !== null) {
      message.jobId = BigInt(object.jobId.toString());
    }
    if (object.callbackHeight !== undefined && object.callbackHeight !== null) {
      message.callbackHeight = BigInt(object.callbackHeight.toString());
    }
    if (object.feeSplit !== undefined && object.feeSplit !== null) {
      message.feeSplit = CallbackFeesFeeSplit.fromPartial(object.feeSplit);
    }
    message.reservedBy = object.reservedBy ?? "";
    return message;
  },
};
function createBaseCallbackCancelledEvent(): CallbackCancelledEvent {
  return {
    cancelledBy: "",
    contractAddress: "",
    jobId: BigInt(0),
    callbackHeight: BigInt(0),
    refundAmount: Coin.fromPartial({}),
  };
}
export const CallbackCancelledEvent = {
  typeUrl: "/archway.callback.v1.CallbackCancelledEvent",
  encode(
    message: CallbackCancelledEvent,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.cancelledBy !== "") {
      writer.uint32(10).string(message.cancelledBy);
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
    if (message.refundAmount !== undefined) {
      Coin.encode(message.refundAmount, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): CallbackCancelledEvent {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCallbackCancelledEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cancelledBy = reader.string();
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
          message.refundAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CallbackCancelledEvent {
    const obj = createBaseCallbackCancelledEvent();
    if (isSet(object.cancelledBy)) obj.cancelledBy = String(object.cancelledBy);
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    if (isSet(object.jobId)) obj.jobId = BigInt(object.jobId.toString());
    if (isSet(object.callbackHeight))
      obj.callbackHeight = BigInt(object.callbackHeight.toString());
    if (isSet(object.refundAmount))
      obj.refundAmount = Coin.fromJSON(object.refundAmount);
    return obj;
  },
  toJSON(message: CallbackCancelledEvent): JsonSafe<CallbackCancelledEvent> {
    const obj: any = {};
    message.cancelledBy !== undefined &&
      (obj.cancelledBy = message.cancelledBy);
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.jobId !== undefined &&
      (obj.jobId = (message.jobId || BigInt(0)).toString());
    message.callbackHeight !== undefined &&
      (obj.callbackHeight = (message.callbackHeight || BigInt(0)).toString());
    message.refundAmount !== undefined &&
      (obj.refundAmount = message.refundAmount
        ? Coin.toJSON(message.refundAmount)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CallbackCancelledEvent>, I>>(
    object: I,
  ): CallbackCancelledEvent {
    const message = createBaseCallbackCancelledEvent();
    message.cancelledBy = object.cancelledBy ?? "";
    message.contractAddress = object.contractAddress ?? "";
    if (object.jobId !== undefined && object.jobId !== null) {
      message.jobId = BigInt(object.jobId.toString());
    }
    if (object.callbackHeight !== undefined && object.callbackHeight !== null) {
      message.callbackHeight = BigInt(object.callbackHeight.toString());
    }
    if (object.refundAmount !== undefined && object.refundAmount !== null) {
      message.refundAmount = Coin.fromPartial(object.refundAmount);
    }
    return message;
  },
};
function createBaseCallbackExecutedSuccessEvent(): CallbackExecutedSuccessEvent {
  return {
    contractAddress: "",
    jobId: BigInt(0),
    sudoMsg: "",
    gasUsed: BigInt(0),
  };
}
export const CallbackExecutedSuccessEvent = {
  typeUrl: "/archway.callback.v1.CallbackExecutedSuccessEvent",
  encode(
    message: CallbackExecutedSuccessEvent,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.jobId !== BigInt(0)) {
      writer.uint32(16).uint64(message.jobId);
    }
    if (message.sudoMsg !== "") {
      writer.uint32(26).string(message.sudoMsg);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(32).uint64(message.gasUsed);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): CallbackExecutedSuccessEvent {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCallbackExecutedSuccessEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.jobId = reader.uint64();
          break;
        case 3:
          message.sudoMsg = reader.string();
          break;
        case 4:
          message.gasUsed = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CallbackExecutedSuccessEvent {
    const obj = createBaseCallbackExecutedSuccessEvent();
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    if (isSet(object.jobId)) obj.jobId = BigInt(object.jobId.toString());
    if (isSet(object.sudoMsg)) obj.sudoMsg = String(object.sudoMsg);
    if (isSet(object.gasUsed)) obj.gasUsed = BigInt(object.gasUsed.toString());
    return obj;
  },
  toJSON(
    message: CallbackExecutedSuccessEvent,
  ): JsonSafe<CallbackExecutedSuccessEvent> {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.jobId !== undefined &&
      (obj.jobId = (message.jobId || BigInt(0)).toString());
    message.sudoMsg !== undefined && (obj.sudoMsg = message.sudoMsg);
    message.gasUsed !== undefined &&
      (obj.gasUsed = (message.gasUsed || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CallbackExecutedSuccessEvent>, I>>(
    object: I,
  ): CallbackExecutedSuccessEvent {
    const message = createBaseCallbackExecutedSuccessEvent();
    message.contractAddress = object.contractAddress ?? "";
    if (object.jobId !== undefined && object.jobId !== null) {
      message.jobId = BigInt(object.jobId.toString());
    }
    message.sudoMsg = object.sudoMsg ?? "";
    if (object.gasUsed !== undefined && object.gasUsed !== null) {
      message.gasUsed = BigInt(object.gasUsed.toString());
    }
    return message;
  },
};
function createBaseCallbackExecutedFailedEvent(): CallbackExecutedFailedEvent {
  return {
    contractAddress: "",
    jobId: BigInt(0),
    sudoMsg: "",
    gasUsed: BigInt(0),
    error: "",
  };
}
export const CallbackExecutedFailedEvent = {
  typeUrl: "/archway.callback.v1.CallbackExecutedFailedEvent",
  encode(
    message: CallbackExecutedFailedEvent,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.jobId !== BigInt(0)) {
      writer.uint32(16).uint64(message.jobId);
    }
    if (message.sudoMsg !== "") {
      writer.uint32(26).string(message.sudoMsg);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(32).uint64(message.gasUsed);
    }
    if (message.error !== "") {
      writer.uint32(42).string(message.error);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): CallbackExecutedFailedEvent {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCallbackExecutedFailedEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.jobId = reader.uint64();
          break;
        case 3:
          message.sudoMsg = reader.string();
          break;
        case 4:
          message.gasUsed = reader.uint64();
          break;
        case 5:
          message.error = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CallbackExecutedFailedEvent {
    const obj = createBaseCallbackExecutedFailedEvent();
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    if (isSet(object.jobId)) obj.jobId = BigInt(object.jobId.toString());
    if (isSet(object.sudoMsg)) obj.sudoMsg = String(object.sudoMsg);
    if (isSet(object.gasUsed)) obj.gasUsed = BigInt(object.gasUsed.toString());
    if (isSet(object.error)) obj.error = String(object.error);
    return obj;
  },
  toJSON(
    message: CallbackExecutedFailedEvent,
  ): JsonSafe<CallbackExecutedFailedEvent> {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.jobId !== undefined &&
      (obj.jobId = (message.jobId || BigInt(0)).toString());
    message.sudoMsg !== undefined && (obj.sudoMsg = message.sudoMsg);
    message.gasUsed !== undefined &&
      (obj.gasUsed = (message.gasUsed || BigInt(0)).toString());
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CallbackExecutedFailedEvent>, I>>(
    object: I,
  ): CallbackExecutedFailedEvent {
    const message = createBaseCallbackExecutedFailedEvent();
    message.contractAddress = object.contractAddress ?? "";
    if (object.jobId !== undefined && object.jobId !== null) {
      message.jobId = BigInt(object.jobId.toString());
    }
    message.sudoMsg = object.sudoMsg ?? "";
    if (object.gasUsed !== undefined && object.gasUsed !== null) {
      message.gasUsed = BigInt(object.gasUsed.toString());
    }
    message.error = object.error ?? "";
    return message;
  },
};
