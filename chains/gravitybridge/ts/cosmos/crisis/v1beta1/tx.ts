/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmos.crisis.v1beta1";
/** MsgVerifyInvariant represents a message to verify a particular invariance. */
export interface MsgVerifyInvariant {
  sender: string;
  invariantModuleName: string;
  invariantRoute: string;
}
/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */
export interface MsgVerifyInvariantResponse {}
function createBaseMsgVerifyInvariant(): MsgVerifyInvariant {
  return {
    sender: "",
    invariantModuleName: "",
    invariantRoute: "",
  };
}
export const MsgVerifyInvariant = {
  typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
  encode(
    message: MsgVerifyInvariant,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.invariantModuleName !== "") {
      writer.uint32(18).string(message.invariantModuleName);
    }
    if (message.invariantRoute !== "") {
      writer.uint32(26).string(message.invariantRoute);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgVerifyInvariant {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyInvariant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.invariantModuleName = reader.string();
          break;
        case 3:
          message.invariantRoute = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgVerifyInvariant {
    const obj = createBaseMsgVerifyInvariant();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.invariantModuleName))
      obj.invariantModuleName = String(object.invariantModuleName);
    if (isSet(object.invariantRoute))
      obj.invariantRoute = String(object.invariantRoute);
    return obj;
  },
  toJSON(message: MsgVerifyInvariant): JsonSafe<MsgVerifyInvariant> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.invariantModuleName !== undefined &&
      (obj.invariantModuleName = message.invariantModuleName);
    message.invariantRoute !== undefined &&
      (obj.invariantRoute = message.invariantRoute);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgVerifyInvariant>, I>>(
    object: I,
  ): MsgVerifyInvariant {
    const message = createBaseMsgVerifyInvariant();
    message.sender = object.sender ?? "";
    message.invariantModuleName = object.invariantModuleName ?? "";
    message.invariantRoute = object.invariantRoute ?? "";
    return message;
  },
};
function createBaseMsgVerifyInvariantResponse(): MsgVerifyInvariantResponse {
  return {};
}
export const MsgVerifyInvariantResponse = {
  typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariantResponse",
  encode(
    _: MsgVerifyInvariantResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgVerifyInvariantResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyInvariantResponse();
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
  fromJSON(_: any): MsgVerifyInvariantResponse {
    const obj = createBaseMsgVerifyInvariantResponse();
    return obj;
  },
  toJSON(_: MsgVerifyInvariantResponse): JsonSafe<MsgVerifyInvariantResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgVerifyInvariantResponse>, I>>(
    _: I,
  ): MsgVerifyInvariantResponse {
    const message = createBaseMsgVerifyInvariantResponse();
    return message;
  },
};
/** Msg defines the bank Msg service. */
export interface Msg {
  /** VerifyInvariant defines a method to verify a particular invariance. */
  VerifyInvariant(
    request: MsgVerifyInvariant,
  ): Promise<MsgVerifyInvariantResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.VerifyInvariant = this.VerifyInvariant.bind(this);
  }
  VerifyInvariant(
    request: MsgVerifyInvariant,
  ): Promise<MsgVerifyInvariantResponse> {
    const data = MsgVerifyInvariant.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.crisis.v1beta1.Msg",
      "VerifyInvariant",
      data,
    );
    return promise.then((data) =>
      MsgVerifyInvariantResponse.decode(new BinaryReader(data)),
    );
  }
}
