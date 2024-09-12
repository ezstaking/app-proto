/* eslint-disable */
import { Params } from "./params";
import { AuctionPeriod, Auction } from "./auction";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "auction.v1";
/** GenesisState defines the auction module's genesis state. */
export interface GenesisState {
  params: Params;
  activePeriod?: AuctionPeriod;
  activeAuctions: Auction[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    activePeriod: undefined,
    activeAuctions: [],
  };
}
export const GenesisState = {
  typeUrl: "/auction.v1.GenesisState",
  encode(
    message: GenesisState,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.activePeriod !== undefined) {
      AuctionPeriod.encode(
        message.activePeriod,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    for (const v of message.activeAuctions) {
      Auction.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.activePeriod = AuctionPeriod.decode(reader, reader.uint32());
          break;
        case 3:
          message.activeAuctions.push(Auction.decode(reader, reader.uint32()));
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
    if (isSet(object.activePeriod))
      obj.activePeriod = AuctionPeriod.fromJSON(object.activePeriod);
    if (Array.isArray(object?.activeAuctions))
      obj.activeAuctions = object.activeAuctions.map((e: any) =>
        Auction.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.activePeriod !== undefined &&
      (obj.activePeriod = message.activePeriod
        ? AuctionPeriod.toJSON(message.activePeriod)
        : undefined);
    if (message.activeAuctions) {
      obj.activeAuctions = message.activeAuctions.map((e) =>
        e ? Auction.toJSON(e) : undefined,
      );
    } else {
      obj.activeAuctions = [];
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
    if (object.activePeriod !== undefined && object.activePeriod !== null) {
      message.activePeriod = AuctionPeriod.fromPartial(object.activePeriod);
    }
    message.activeAuctions =
      object.activeAuctions?.map((e) => Auction.fromPartial(e)) || [];
    return message;
  },
};
