/* eslint-disable */
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "auction.v1";
/**
 * AuctionPeriod represents a period of auctions.
 * An AuctionPeriod applies to as many auctionable tokens exist in the auction pool
 * Note: see params for a list of non-auctionable tokens
 */
export interface AuctionPeriod {
  /** Block height at which the AuctionPeriod starts. */
  startBlockHeight: bigint;
  /** Block height at which the AuctionPeriod end. */
  endBlockHeight: bigint;
}
/**
 * Auction represents a single auction.
 * An Auction has a unique identifier relative to its Auction Period Id , an amount being auctioned, a status, and a highest bid.
 */
export interface Auction {
  /** Unique identifier for the Auction. */
  id: bigint;
  /** Amount being auctioned. */
  amount: Coin;
  /** Highest bid on the Auction. */
  highestBid?: Bid;
}
/**
 * Bid represents a bid on an Auction.
 * A Bid includes the identifier of the Auction, the amount of the bid, and the address of the bidder.
 */
export interface Bid {
  /** Amount of the bid. */
  bidAmount: bigint;
  /** Address of the bidder. */
  bidderAddress: string;
}
/** AuctionId enables easy storage and retrieval of the most recently used AuctionId */
export interface AuctionId {
  id: bigint;
}
function createBaseAuctionPeriod(): AuctionPeriod {
  return {
    startBlockHeight: BigInt(0),
    endBlockHeight: BigInt(0),
  };
}
export const AuctionPeriod = {
  typeUrl: "/auction.v1.AuctionPeriod",
  encode(
    message: AuctionPeriod,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.startBlockHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.startBlockHeight);
    }
    if (message.endBlockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.endBlockHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AuctionPeriod {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuctionPeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startBlockHeight = reader.uint64();
          break;
        case 2:
          message.endBlockHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AuctionPeriod {
    const obj = createBaseAuctionPeriod();
    if (isSet(object.startBlockHeight))
      obj.startBlockHeight = BigInt(object.startBlockHeight.toString());
    if (isSet(object.endBlockHeight))
      obj.endBlockHeight = BigInt(object.endBlockHeight.toString());
    return obj;
  },
  toJSON(message: AuctionPeriod): JsonSafe<AuctionPeriod> {
    const obj: any = {};
    message.startBlockHeight !== undefined &&
      (obj.startBlockHeight = (
        message.startBlockHeight || BigInt(0)
      ).toString());
    message.endBlockHeight !== undefined &&
      (obj.endBlockHeight = (message.endBlockHeight || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AuctionPeriod>, I>>(
    object: I,
  ): AuctionPeriod {
    const message = createBaseAuctionPeriod();
    if (
      object.startBlockHeight !== undefined &&
      object.startBlockHeight !== null
    ) {
      message.startBlockHeight = BigInt(object.startBlockHeight.toString());
    }
    if (object.endBlockHeight !== undefined && object.endBlockHeight !== null) {
      message.endBlockHeight = BigInt(object.endBlockHeight.toString());
    }
    return message;
  },
};
function createBaseAuction(): Auction {
  return {
    id: BigInt(0),
    amount: Coin.fromPartial({}),
    highestBid: undefined,
  };
}
export const Auction = {
  typeUrl: "/auction.v1.Auction",
  encode(
    message: Auction,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.highestBid !== undefined) {
      Bid.encode(message.highestBid, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Auction {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.highestBid = Bid.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Auction {
    const obj = createBaseAuction();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    if (isSet(object.highestBid))
      obj.highestBid = Bid.fromJSON(object.highestBid);
    return obj;
  },
  toJSON(message: Auction): JsonSafe<Auction> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.highestBid !== undefined &&
      (obj.highestBid = message.highestBid
        ? Bid.toJSON(message.highestBid)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Auction>, I>>(object: I): Auction {
    const message = createBaseAuction();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    if (object.highestBid !== undefined && object.highestBid !== null) {
      message.highestBid = Bid.fromPartial(object.highestBid);
    }
    return message;
  },
};
function createBaseBid(): Bid {
  return {
    bidAmount: BigInt(0),
    bidderAddress: "",
  };
}
export const Bid = {
  typeUrl: "/auction.v1.Bid",
  encode(
    message: Bid,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.bidAmount !== BigInt(0)) {
      writer.uint32(8).uint64(message.bidAmount);
    }
    if (message.bidderAddress !== "") {
      writer.uint32(18).string(message.bidderAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Bid {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidAmount = reader.uint64();
          break;
        case 2:
          message.bidderAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Bid {
    const obj = createBaseBid();
    if (isSet(object.bidAmount))
      obj.bidAmount = BigInt(object.bidAmount.toString());
    if (isSet(object.bidderAddress))
      obj.bidderAddress = String(object.bidderAddress);
    return obj;
  },
  toJSON(message: Bid): JsonSafe<Bid> {
    const obj: any = {};
    message.bidAmount !== undefined &&
      (obj.bidAmount = (message.bidAmount || BigInt(0)).toString());
    message.bidderAddress !== undefined &&
      (obj.bidderAddress = message.bidderAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Bid>, I>>(object: I): Bid {
    const message = createBaseBid();
    if (object.bidAmount !== undefined && object.bidAmount !== null) {
      message.bidAmount = BigInt(object.bidAmount.toString());
    }
    message.bidderAddress = object.bidderAddress ?? "";
    return message;
  },
};
function createBaseAuctionId(): AuctionId {
  return {
    id: BigInt(0),
  };
}
export const AuctionId = {
  typeUrl: "/auction.v1.AuctionId",
  encode(
    message: AuctionId,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AuctionId {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuctionId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AuctionId {
    const obj = createBaseAuctionId();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    return obj;
  },
  toJSON(message: AuctionId): JsonSafe<AuctionId> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AuctionId>, I>>(
    object: I,
  ): AuctionId {
    const message = createBaseAuctionId();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    return message;
  },
};
