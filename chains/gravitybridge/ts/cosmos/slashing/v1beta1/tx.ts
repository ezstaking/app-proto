/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmos.slashing.v1beta1";
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjail {
  validatorAddr: string;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponse {}
function createBaseMsgUnjail(): MsgUnjail {
  return {
    validatorAddr: "",
  };
}
export const MsgUnjail = {
  typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
  encode(
    message: MsgUnjail,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnjail {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnjail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnjail {
    const obj = createBaseMsgUnjail();
    if (isSet(object.validatorAddr))
      obj.validatorAddr = String(object.validatorAddr);
    return obj;
  },
  toJSON(message: MsgUnjail): JsonSafe<MsgUnjail> {
    const obj: any = {};
    message.validatorAddr !== undefined &&
      (obj.validatorAddr = message.validatorAddr);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUnjail>, I>>(
    object: I,
  ): MsgUnjail {
    const message = createBaseMsgUnjail();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
};
function createBaseMsgUnjailResponse(): MsgUnjailResponse {
  return {};
}
export const MsgUnjailResponse = {
  typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse",
  encode(
    _: MsgUnjailResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUnjailResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnjailResponse();
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
  fromJSON(_: any): MsgUnjailResponse {
    const obj = createBaseMsgUnjailResponse();
    return obj;
  },
  toJSON(_: MsgUnjailResponse): JsonSafe<MsgUnjailResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUnjailResponse>, I>>(
    _: I,
  ): MsgUnjailResponse {
    const message = createBaseMsgUnjailResponse();
    return message;
  },
};
/** Msg defines the slashing Msg service. */
export interface Msg {
  /**
   * Unjail defines a method for unjailing a jailed validator, thus returning
   * them into the bonded validator set, so they can begin receiving provisions
   * and rewards again.
   */
  Unjail(request: MsgUnjail): Promise<MsgUnjailResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Unjail = this.Unjail.bind(this);
  }
  Unjail(request: MsgUnjail): Promise<MsgUnjailResponse> {
    const data = MsgUnjail.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.slashing.v1beta1.Msg",
      "Unjail",
      data,
    );
    return promise.then((data) =>
      MsgUnjailResponse.decode(new BinaryReader(data)),
    );
  }
}
