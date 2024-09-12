/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "auction.v1";
/** Params defines the parameters for the GravityBridge auction module. */
export interface Params {
  /** AuctionLength is the number of blocks that the AuctionPeriod will be active */
  auctionLength: bigint;
  /**
   * MinBidFee defines the required minimum fee that must be paid by bidders for their bid to be considered by the module.
   * This fee is paid out to the auction pool. This fee is separate from the standard Cosmos Tx spam protection fee.
   * This fee will not be charged unless a bid is successful.
   */
  minBidFee: bigint;
  /** NonAuctionableTokens is a list of token denomss which should never be auctioned from the auction pool */
  nonAuctionableTokens: string[];
  /** BurnWinningBids controls if we burn the tokens of the winning bidder instead of sending them to the auction pool */
  burnWinningBids: boolean;
  /**
   * Enabled controls whether auctions progress as usual, or are preserved in an inactive halted state.
   * When Enabled is false, bids will also fail to be processed.
   */
  enabled: boolean;
}
function createBaseParams(): Params {
  return {
    auctionLength: BigInt(0),
    minBidFee: BigInt(0),
    nonAuctionableTokens: [],
    burnWinningBids: false,
    enabled: false,
  };
}
export const Params = {
  typeUrl: "/auction.v1.Params",
  encode(
    message: Params,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.auctionLength !== BigInt(0)) {
      writer.uint32(8).uint64(message.auctionLength);
    }
    if (message.minBidFee !== BigInt(0)) {
      writer.uint32(16).uint64(message.minBidFee);
    }
    for (const v of message.nonAuctionableTokens) {
      writer.uint32(26).string(v!);
    }
    if (message.burnWinningBids === true) {
      writer.uint32(32).bool(message.burnWinningBids);
    }
    if (message.enabled === true) {
      writer.uint32(40).bool(message.enabled);
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
          message.auctionLength = reader.uint64();
          break;
        case 2:
          message.minBidFee = reader.uint64();
          break;
        case 3:
          message.nonAuctionableTokens.push(reader.string());
          break;
        case 4:
          message.burnWinningBids = reader.bool();
          break;
        case 5:
          message.enabled = reader.bool();
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
    if (isSet(object.auctionLength))
      obj.auctionLength = BigInt(object.auctionLength.toString());
    if (isSet(object.minBidFee))
      obj.minBidFee = BigInt(object.minBidFee.toString());
    if (Array.isArray(object?.nonAuctionableTokens))
      obj.nonAuctionableTokens = object.nonAuctionableTokens.map((e: any) =>
        String(e),
      );
    if (isSet(object.burnWinningBids))
      obj.burnWinningBids = Boolean(object.burnWinningBids);
    if (isSet(object.enabled)) obj.enabled = Boolean(object.enabled);
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.auctionLength !== undefined &&
      (obj.auctionLength = (message.auctionLength || BigInt(0)).toString());
    message.minBidFee !== undefined &&
      (obj.minBidFee = (message.minBidFee || BigInt(0)).toString());
    if (message.nonAuctionableTokens) {
      obj.nonAuctionableTokens = message.nonAuctionableTokens.map((e) => e);
    } else {
      obj.nonAuctionableTokens = [];
    }
    message.burnWinningBids !== undefined &&
      (obj.burnWinningBids = message.burnWinningBids);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    if (object.auctionLength !== undefined && object.auctionLength !== null) {
      message.auctionLength = BigInt(object.auctionLength.toString());
    }
    if (object.minBidFee !== undefined && object.minBidFee !== null) {
      message.minBidFee = BigInt(object.minBidFee.toString());
    }
    message.nonAuctionableTokens =
      object.nonAuctionableTokens?.map((e) => e) || [];
    message.burnWinningBids = object.burnWinningBids ?? false;
    message.enabled = object.enabled ?? false;
    return message;
  },
};
