/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "archway.cwerrors.v1";
/** Params defines the set of parameters for the cwerrors module. */
export interface Params {
  /** error_stored_time is the block height until which error is stored */
  errorStoredTime: bigint;
  /** subsciption_fee is the fee required to subscribe to error callbacks */
  subscriptionFee: Coin;
  /** subscription_period is the period for which the subscription is valid */
  subscriptionPeriod: bigint;
}
function createBaseParams(): Params {
  return {
    errorStoredTime: BigInt(0),
    subscriptionFee: Coin.fromPartial({}),
    subscriptionPeriod: BigInt(0),
  };
}
export const Params = {
  typeUrl: "/archway.cwerrors.v1.Params",
  encode(
    message: Params,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.errorStoredTime !== BigInt(0)) {
      writer.uint32(8).int64(message.errorStoredTime);
    }
    if (message.subscriptionFee !== undefined) {
      Coin.encode(message.subscriptionFee, writer.uint32(18).fork()).ldelim();
    }
    if (message.subscriptionPeriod !== BigInt(0)) {
      writer.uint32(24).int64(message.subscriptionPeriod);
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
          message.errorStoredTime = reader.int64();
          break;
        case 2:
          message.subscriptionFee = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.subscriptionPeriod = reader.int64();
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
    if (isSet(object.errorStoredTime))
      obj.errorStoredTime = BigInt(object.errorStoredTime.toString());
    if (isSet(object.subscriptionFee))
      obj.subscriptionFee = Coin.fromJSON(object.subscriptionFee);
    if (isSet(object.subscriptionPeriod))
      obj.subscriptionPeriod = BigInt(object.subscriptionPeriod.toString());
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.errorStoredTime !== undefined &&
      (obj.errorStoredTime = (message.errorStoredTime || BigInt(0)).toString());
    message.subscriptionFee !== undefined &&
      (obj.subscriptionFee = message.subscriptionFee
        ? Coin.toJSON(message.subscriptionFee)
        : undefined);
    message.subscriptionPeriod !== undefined &&
      (obj.subscriptionPeriod = (
        message.subscriptionPeriod || BigInt(0)
      ).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    if (
      object.errorStoredTime !== undefined &&
      object.errorStoredTime !== null
    ) {
      message.errorStoredTime = BigInt(object.errorStoredTime.toString());
    }
    if (
      object.subscriptionFee !== undefined &&
      object.subscriptionFee !== null
    ) {
      message.subscriptionFee = Coin.fromPartial(object.subscriptionFee);
    }
    if (
      object.subscriptionPeriod !== undefined &&
      object.subscriptionPeriod !== null
    ) {
      message.subscriptionPeriod = BigInt(object.subscriptionPeriod.toString());
    }
    return message;
  },
};
