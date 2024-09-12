/* eslint-disable */
import { Params, Callback } from "./callback";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "archway.callback.v1";
/** GenesisState defines the initial state of the callback module. */
export interface GenesisState {
  /** params defines all the module parameters. */
  params: Params;
  /** callbacks defines all the callbacks which are yet to be executed */
  callbacks: Callback[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    callbacks: [],
  };
}
export const GenesisState = {
  typeUrl: "/archway.callback.v1.GenesisState",
  encode(
    message: GenesisState,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.callbacks) {
      Callback.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.callbacks.push(Callback.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.callbacks))
      obj.callbacks = object.callbacks.map((e: any) => Callback.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.callbacks) {
      obj.callbacks = message.callbacks.map((e) =>
        e ? Callback.toJSON(e) : undefined,
      );
    } else {
      obj.callbacks = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I,
  ): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.callbacks =
      object.callbacks?.map((e) => Callback.fromPartial(e)) || [];
    return message;
  },
};
