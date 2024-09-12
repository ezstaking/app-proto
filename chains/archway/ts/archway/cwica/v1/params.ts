/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "archway.cwica.v1";
/** Params defines the parameters for the module. */
export interface Params {
  /** Defines maximum amount of messages which can be passed in MsgSendTx */
  msgSendTxMaxMessages: bigint;
}
function createBaseParams(): Params {
  return {
    msgSendTxMaxMessages: BigInt(0),
  };
}
export const Params = {
  typeUrl: "/archway.cwica.v1.Params",
  encode(
    message: Params,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.msgSendTxMaxMessages !== BigInt(0)) {
      writer.uint32(8).uint64(message.msgSendTxMaxMessages);
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
          message.msgSendTxMaxMessages = reader.uint64();
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
    if (isSet(object.msgSendTxMaxMessages))
      obj.msgSendTxMaxMessages = BigInt(object.msgSendTxMaxMessages.toString());
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.msgSendTxMaxMessages !== undefined &&
      (obj.msgSendTxMaxMessages = (
        message.msgSendTxMaxMessages || BigInt(0)
      ).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    if (
      object.msgSendTxMaxMessages !== undefined &&
      object.msgSendTxMaxMessages !== null
    ) {
      message.msgSendTxMaxMessages = BigInt(
        object.msgSendTxMaxMessages.toString(),
      );
    }
    return message;
  },
};
