/* eslint-disable */
import { Height } from "../../../core/client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "ibc.lightclients.localhost.v1";
/**
 * ClientState defines a loopback (localhost) client. It requires (read-only)
 * access to keys outside the client prefix.
 */
export interface ClientState {
  /** self chain ID */
  chainId: string;
  /** self latest block height */
  height: Height;
}
function createBaseClientState(): ClientState {
  return {
    chainId: "",
    height: Height.fromPartial({}),
  };
}
export const ClientState = {
  typeUrl: "/ibc.lightclients.localhost.v1.ClientState",
  encode(
    message: ClientState,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientState {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClientState {
    const obj = createBaseClientState();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.height)) obj.height = Height.fromJSON(object.height);
    return obj;
  },
  toJSON(message: ClientState): JsonSafe<ClientState> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.height !== undefined &&
      (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ClientState>, I>>(
    object: I,
  ): ClientState {
    const message = createBaseClientState();
    message.chainId = object.chainId ?? "";
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromPartial(object.height);
    }
    return message;
  },
};
