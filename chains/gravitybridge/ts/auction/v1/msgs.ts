/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "auction.v1";
/**
 * MsgBid is a message type for placing a bid on an auction with given `auction_id`
 * `bidder` is the signer of the Msg
 * `amount` is the native token amount locked by the auction module if the bid is accepted as the highest bid
 * `bid_fee` is the native token amount sent to the auction pool, and should be at least equal to the min bid fee param
 *
 * Additionally, all bids must meet or exceed `min_bid_amount`
 */
export interface MsgBid {
  /** ID of the auction to bid on */
  auctionId: bigint;
  /** Address of the bidder */
  bidder: string;
  /** Amount of the bid */
  amount: bigint;
  /** Fee amount */
  bidFee: bigint;
}
export interface MsgBidResponse {}
function createBaseMsgBid(): MsgBid {
  return {
    auctionId: BigInt(0),
    bidder: "",
    amount: BigInt(0),
    bidFee: BigInt(0),
  };
}
export const MsgBid = {
  typeUrl: "/auction.v1.MsgBid",
  encode(
    message: MsgBid,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.auctionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.auctionId);
    }
    if (message.bidder !== "") {
      writer.uint32(18).string(message.bidder);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.bidFee !== BigInt(0)) {
      writer.uint32(32).uint64(message.bidFee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBid {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.uint64();
          break;
        case 2:
          message.bidder = reader.string();
          break;
        case 3:
          message.amount = reader.uint64();
          break;
        case 4:
          message.bidFee = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBid {
    const obj = createBaseMsgBid();
    if (isSet(object.auctionId))
      obj.auctionId = BigInt(object.auctionId.toString());
    if (isSet(object.bidder)) obj.bidder = String(object.bidder);
    if (isSet(object.amount)) obj.amount = BigInt(object.amount.toString());
    if (isSet(object.bidFee)) obj.bidFee = BigInt(object.bidFee.toString());
    return obj;
  },
  toJSON(message: MsgBid): JsonSafe<MsgBid> {
    const obj: any = {};
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || BigInt(0)).toString());
    message.bidder !== undefined && (obj.bidder = message.bidder);
    message.amount !== undefined &&
      (obj.amount = (message.amount || BigInt(0)).toString());
    message.bidFee !== undefined &&
      (obj.bidFee = (message.bidFee || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBid>, I>>(object: I): MsgBid {
    const message = createBaseMsgBid();
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = BigInt(object.auctionId.toString());
    }
    message.bidder = object.bidder ?? "";
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount.toString());
    }
    if (object.bidFee !== undefined && object.bidFee !== null) {
      message.bidFee = BigInt(object.bidFee.toString());
    }
    return message;
  },
};
function createBaseMsgBidResponse(): MsgBidResponse {
  return {};
}
export const MsgBidResponse = {
  typeUrl: "/auction.v1.MsgBidResponse",
  encode(
    _: MsgBidResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgBidResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBidResponse();
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
  fromJSON(_: any): MsgBidResponse {
    const obj = createBaseMsgBidResponse();
    return obj;
  },
  toJSON(_: MsgBidResponse): JsonSafe<MsgBidResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBidResponse>, I>>(
    _: I,
  ): MsgBidResponse {
    const message = createBaseMsgBidResponse();
    return message;
  },
};
/** Msg defines the state transitions possible within auction */
export interface Msg {
  Bid(request: MsgBid): Promise<MsgBidResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Bid = this.Bid.bind(this);
  }
  Bid(request: MsgBid): Promise<MsgBidResponse> {
    const data = MsgBid.encode(request).finish();
    const promise = this.rpc.request("auction.v1.Msg", "Bid", data);
    return promise.then((data) =>
      MsgBidResponse.decode(new BinaryReader(data)),
    );
  }
}
