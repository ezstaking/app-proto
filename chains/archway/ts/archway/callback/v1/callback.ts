/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "archway.callback.v1";
/** Callback defines the callback structure. */
export interface Callback {
  /** contract_address is the address of the contract which is requesting the callback (bech32 encoded). */
  contractAddress: string;
  /** job_id is an identifier the callback requestor can pass in to identify the callback when it happens. */
  jobId: bigint;
  /** callback_height is the height at which the callback is executed. */
  callbackHeight: bigint;
  /** fee_split is the breakdown of the fees paid by the contract to reserve the callback */
  feeSplit?: CallbackFeesFeeSplit;
  /** reserved_by is the address which reserved the callback (bech32 encoded). */
  reservedBy: string;
  /** callback_gas_limit is the maximum gas that can be consumed by this callback. */
  maxGasLimit: bigint;
}
/** CallbackFeesFeeSplit is the breakdown of all the fees that need to be paid by the contract to reserve a callback */
export interface CallbackFeesFeeSplit {
  /** transaction_fees is the transaction fees for the callback based on its gas consumption */
  transactionFees?: Coin;
  /** block_reservation_fees is the block reservation fees portion of the callback reservation fees */
  blockReservationFees?: Coin;
  /** future_reservation_fees is the future reservation fees portion of the callback reservation fees */
  futureReservationFees?: Coin;
  /** surplus_fees is any extra fees passed in for the registration of the callback */
  surplusFees?: Coin;
}
/** Params defines the module parameters. */
export interface Params {
  /** callback_gas_limit is the maximum gas that can be consumed by a callback. */
  callbackGasLimit: bigint;
  /** max_block_reservation_limit is the maximum number of callbacks which can be registered in a given block. */
  maxBlockReservationLimit: bigint;
  /** max_future_reservation_limit is the maximum number of blocks in the future that a contract can request a callback in. */
  maxFutureReservationLimit: bigint;
  /** block_reservation_fee_multiplier is used to calculate a part of the reservation fees which will need to be paid when requesting the callback. */
  blockReservationFeeMultiplier: string;
  /** future_reservation_fee_multiplier is used to calculate a part of the reservation fees which will need to be paid while requesting the callback. */
  futureReservationFeeMultiplier: string;
}
function createBaseCallback(): Callback {
  return {
    contractAddress: "",
    jobId: BigInt(0),
    callbackHeight: BigInt(0),
    feeSplit: undefined,
    reservedBy: "",
    maxGasLimit: BigInt(0),
  };
}
export const Callback = {
  typeUrl: "/archway.callback.v1.Callback",
  encode(
    message: Callback,
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
    if (message.maxGasLimit !== BigInt(0)) {
      writer.uint32(48).uint64(message.maxGasLimit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Callback {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCallback();
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
        case 6:
          message.maxGasLimit = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Callback {
    const obj = createBaseCallback();
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    if (isSet(object.jobId)) obj.jobId = BigInt(object.jobId.toString());
    if (isSet(object.callbackHeight))
      obj.callbackHeight = BigInt(object.callbackHeight.toString());
    if (isSet(object.feeSplit))
      obj.feeSplit = CallbackFeesFeeSplit.fromJSON(object.feeSplit);
    if (isSet(object.reservedBy)) obj.reservedBy = String(object.reservedBy);
    if (isSet(object.maxGasLimit))
      obj.maxGasLimit = BigInt(object.maxGasLimit.toString());
    return obj;
  },
  toJSON(message: Callback): JsonSafe<Callback> {
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
    message.maxGasLimit !== undefined &&
      (obj.maxGasLimit = (message.maxGasLimit || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Callback>, I>>(object: I): Callback {
    const message = createBaseCallback();
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
    if (object.maxGasLimit !== undefined && object.maxGasLimit !== null) {
      message.maxGasLimit = BigInt(object.maxGasLimit.toString());
    }
    return message;
  },
};
function createBaseCallbackFeesFeeSplit(): CallbackFeesFeeSplit {
  return {
    transactionFees: undefined,
    blockReservationFees: undefined,
    futureReservationFees: undefined,
    surplusFees: undefined,
  };
}
export const CallbackFeesFeeSplit = {
  typeUrl: "/archway.callback.v1.CallbackFeesFeeSplit",
  encode(
    message: CallbackFeesFeeSplit,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.transactionFees !== undefined) {
      Coin.encode(message.transactionFees, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockReservationFees !== undefined) {
      Coin.encode(
        message.blockReservationFees,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.futureReservationFees !== undefined) {
      Coin.encode(
        message.futureReservationFees,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.surplusFees !== undefined) {
      Coin.encode(message.surplusFees, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): CallbackFeesFeeSplit {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCallbackFeesFeeSplit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactionFees = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.blockReservationFees = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.futureReservationFees = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.surplusFees = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CallbackFeesFeeSplit {
    const obj = createBaseCallbackFeesFeeSplit();
    if (isSet(object.transactionFees))
      obj.transactionFees = Coin.fromJSON(object.transactionFees);
    if (isSet(object.blockReservationFees))
      obj.blockReservationFees = Coin.fromJSON(object.blockReservationFees);
    if (isSet(object.futureReservationFees))
      obj.futureReservationFees = Coin.fromJSON(object.futureReservationFees);
    if (isSet(object.surplusFees))
      obj.surplusFees = Coin.fromJSON(object.surplusFees);
    return obj;
  },
  toJSON(message: CallbackFeesFeeSplit): JsonSafe<CallbackFeesFeeSplit> {
    const obj: any = {};
    message.transactionFees !== undefined &&
      (obj.transactionFees = message.transactionFees
        ? Coin.toJSON(message.transactionFees)
        : undefined);
    message.blockReservationFees !== undefined &&
      (obj.blockReservationFees = message.blockReservationFees
        ? Coin.toJSON(message.blockReservationFees)
        : undefined);
    message.futureReservationFees !== undefined &&
      (obj.futureReservationFees = message.futureReservationFees
        ? Coin.toJSON(message.futureReservationFees)
        : undefined);
    message.surplusFees !== undefined &&
      (obj.surplusFees = message.surplusFees
        ? Coin.toJSON(message.surplusFees)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CallbackFeesFeeSplit>, I>>(
    object: I,
  ): CallbackFeesFeeSplit {
    const message = createBaseCallbackFeesFeeSplit();
    if (
      object.transactionFees !== undefined &&
      object.transactionFees !== null
    ) {
      message.transactionFees = Coin.fromPartial(object.transactionFees);
    }
    if (
      object.blockReservationFees !== undefined &&
      object.blockReservationFees !== null
    ) {
      message.blockReservationFees = Coin.fromPartial(
        object.blockReservationFees,
      );
    }
    if (
      object.futureReservationFees !== undefined &&
      object.futureReservationFees !== null
    ) {
      message.futureReservationFees = Coin.fromPartial(
        object.futureReservationFees,
      );
    }
    if (object.surplusFees !== undefined && object.surplusFees !== null) {
      message.surplusFees = Coin.fromPartial(object.surplusFees);
    }
    return message;
  },
};
function createBaseParams(): Params {
  return {
    callbackGasLimit: BigInt(0),
    maxBlockReservationLimit: BigInt(0),
    maxFutureReservationLimit: BigInt(0),
    blockReservationFeeMultiplier: "",
    futureReservationFeeMultiplier: "",
  };
}
export const Params = {
  typeUrl: "/archway.callback.v1.Params",
  encode(
    message: Params,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.callbackGasLimit !== BigInt(0)) {
      writer.uint32(8).uint64(message.callbackGasLimit);
    }
    if (message.maxBlockReservationLimit !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxBlockReservationLimit);
    }
    if (message.maxFutureReservationLimit !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxFutureReservationLimit);
    }
    if (message.blockReservationFeeMultiplier !== "") {
      writer.uint32(34).string(message.blockReservationFeeMultiplier);
    }
    if (message.futureReservationFeeMultiplier !== "") {
      writer.uint32(42).string(message.futureReservationFeeMultiplier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.callbackGasLimit = reader.uint64();
          break;
        case 2:
          message.maxBlockReservationLimit = reader.uint64();
          break;
        case 3:
          message.maxFutureReservationLimit = reader.uint64();
          break;
        case 4:
          message.blockReservationFeeMultiplier = reader.string();
          break;
        case 5:
          message.futureReservationFeeMultiplier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.callbackGasLimit))
      obj.callbackGasLimit = BigInt(object.callbackGasLimit.toString());
    if (isSet(object.maxBlockReservationLimit))
      obj.maxBlockReservationLimit = BigInt(
        object.maxBlockReservationLimit.toString(),
      );
    if (isSet(object.maxFutureReservationLimit))
      obj.maxFutureReservationLimit = BigInt(
        object.maxFutureReservationLimit.toString(),
      );
    if (isSet(object.blockReservationFeeMultiplier))
      obj.blockReservationFeeMultiplier = String(
        object.blockReservationFeeMultiplier,
      );
    if (isSet(object.futureReservationFeeMultiplier))
      obj.futureReservationFeeMultiplier = String(
        object.futureReservationFeeMultiplier,
      );
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.callbackGasLimit !== undefined &&
      (obj.callbackGasLimit = (
        message.callbackGasLimit || BigInt(0)
      ).toString());
    message.maxBlockReservationLimit !== undefined &&
      (obj.maxBlockReservationLimit = (
        message.maxBlockReservationLimit || BigInt(0)
      ).toString());
    message.maxFutureReservationLimit !== undefined &&
      (obj.maxFutureReservationLimit = (
        message.maxFutureReservationLimit || BigInt(0)
      ).toString());
    message.blockReservationFeeMultiplier !== undefined &&
      (obj.blockReservationFeeMultiplier =
        message.blockReservationFeeMultiplier);
    message.futureReservationFeeMultiplier !== undefined &&
      (obj.futureReservationFeeMultiplier =
        message.futureReservationFeeMultiplier);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    if (
      object.callbackGasLimit !== undefined &&
      object.callbackGasLimit !== null
    ) {
      message.callbackGasLimit = BigInt(object.callbackGasLimit.toString());
    }
    if (
      object.maxBlockReservationLimit !== undefined &&
      object.maxBlockReservationLimit !== null
    ) {
      message.maxBlockReservationLimit = BigInt(
        object.maxBlockReservationLimit.toString(),
      );
    }
    if (
      object.maxFutureReservationLimit !== undefined &&
      object.maxFutureReservationLimit !== null
    ) {
      message.maxFutureReservationLimit = BigInt(
        object.maxFutureReservationLimit.toString(),
      );
    }
    message.blockReservationFeeMultiplier =
      object.blockReservationFeeMultiplier ?? "";
    message.futureReservationFeeMultiplier =
      object.futureReservationFeeMultiplier ?? "";
    return message;
  },
};
