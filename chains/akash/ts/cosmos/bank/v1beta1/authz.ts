/* eslint-disable */
import { Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "cosmos.bank.v1beta1";
/**
 * SendAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account.
 *
 * Since: cosmos-sdk 0.43
 */
export interface SendAuthorization {
  spendLimit: Coin[];
}
function createBaseSendAuthorization(): SendAuthorization {
  return {
    spendLimit: [],
  };
}
export const SendAuthorization = {
  typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
  encode(
    message: SendAuthorization,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.spendLimit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SendAuthorization {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.spendLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SendAuthorization {
    const obj = createBaseSendAuthorization();
    if (Array.isArray(object?.spendLimit))
      obj.spendLimit = object.spendLimit.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: SendAuthorization): JsonSafe<SendAuthorization> {
    const obj: any = {};
    if (message.spendLimit) {
      obj.spendLimit = message.spendLimit.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.spendLimit = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SendAuthorization>, I>>(
    object: I,
  ): SendAuthorization {
    const message = createBaseSendAuthorization();
    message.spendLimit =
      object.spendLimit?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
