/* eslint-disable */
import { Params } from "./params";
import { AuctionPeriod, Auction } from "./auction";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, Exact, isSet, Rpc } from "../../helpers";
export const protobufPackage = "auction.v1";
export interface QueryParamsRequest {}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryAuctionPeriodRequest {}
export interface QueryAuctionPeriodResponse {
  auctionPeriod?: AuctionPeriod;
}
export interface QueryAuctionsRequest {}
export interface QueryAuctionsResponse {
  auctions: Auction[];
}
export interface QueryAuctionByIdRequest {
  auctionId: bigint;
}
export interface QueryAuctionByIdResponse {
  auction?: Auction;
}
export interface QueryAuctionByDenomRequest {
  auctionDenom: string;
}
export interface QueryAuctionByDenomResponse {
  auction?: Auction;
}
export interface QueryAllAuctionsByBidderRequest {
  address: string;
}
export interface QueryAllAuctionsByBidderResponse {
  auctions: Auction[];
}
export interface QueryAuctionPoolRequest {}
export interface QueryAuctionPoolResponse {
  account: string;
  balances: Coin[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/auction.v1.QueryParamsRequest",
  encode(
    _: QueryParamsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryParamsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    _: I,
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: "/auction.v1.QueryParamsResponse",
  encode(
    message: QueryParamsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryParamsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I,
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseQueryAuctionPeriodRequest(): QueryAuctionPeriodRequest {
  return {};
}
export const QueryAuctionPeriodRequest = {
  typeUrl: "/auction.v1.QueryAuctionPeriodRequest",
  encode(
    _: QueryAuctionPeriodRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryAuctionPeriodRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionPeriodRequest();
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
  fromJSON(_: any): QueryAuctionPeriodRequest {
    const obj = createBaseQueryAuctionPeriodRequest();
    return obj;
  },
  toJSON(_: QueryAuctionPeriodRequest): JsonSafe<QueryAuctionPeriodRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuctionPeriodRequest>, I>>(
    _: I,
  ): QueryAuctionPeriodRequest {
    const message = createBaseQueryAuctionPeriodRequest();
    return message;
  },
};
function createBaseQueryAuctionPeriodResponse(): QueryAuctionPeriodResponse {
  return {
    auctionPeriod: undefined,
  };
}
export const QueryAuctionPeriodResponse = {
  typeUrl: "/auction.v1.QueryAuctionPeriodResponse",
  encode(
    message: QueryAuctionPeriodResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.auctionPeriod !== undefined) {
      AuctionPeriod.encode(
        message.auctionPeriod,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryAuctionPeriodResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionPeriodResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionPeriod = AuctionPeriod.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAuctionPeriodResponse {
    const obj = createBaseQueryAuctionPeriodResponse();
    if (isSet(object.auctionPeriod))
      obj.auctionPeriod = AuctionPeriod.fromJSON(object.auctionPeriod);
    return obj;
  },
  toJSON(
    message: QueryAuctionPeriodResponse,
  ): JsonSafe<QueryAuctionPeriodResponse> {
    const obj: any = {};
    message.auctionPeriod !== undefined &&
      (obj.auctionPeriod = message.auctionPeriod
        ? AuctionPeriod.toJSON(message.auctionPeriod)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuctionPeriodResponse>, I>>(
    object: I,
  ): QueryAuctionPeriodResponse {
    const message = createBaseQueryAuctionPeriodResponse();
    if (object.auctionPeriod !== undefined && object.auctionPeriod !== null) {
      message.auctionPeriod = AuctionPeriod.fromPartial(object.auctionPeriod);
    }
    return message;
  },
};
function createBaseQueryAuctionsRequest(): QueryAuctionsRequest {
  return {};
}
export const QueryAuctionsRequest = {
  typeUrl: "/auction.v1.QueryAuctionsRequest",
  encode(
    _: QueryAuctionsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryAuctionsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsRequest();
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
  fromJSON(_: any): QueryAuctionsRequest {
    const obj = createBaseQueryAuctionsRequest();
    return obj;
  },
  toJSON(_: QueryAuctionsRequest): JsonSafe<QueryAuctionsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuctionsRequest>, I>>(
    _: I,
  ): QueryAuctionsRequest {
    const message = createBaseQueryAuctionsRequest();
    return message;
  },
};
function createBaseQueryAuctionsResponse(): QueryAuctionsResponse {
  return {
    auctions: [],
  };
}
export const QueryAuctionsResponse = {
  typeUrl: "/auction.v1.QueryAuctionsResponse",
  encode(
    message: QueryAuctionsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.auctions) {
      Auction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryAuctionsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctions.push(Auction.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAuctionsResponse {
    const obj = createBaseQueryAuctionsResponse();
    if (Array.isArray(object?.auctions))
      obj.auctions = object.auctions.map((e: any) => Auction.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryAuctionsResponse): JsonSafe<QueryAuctionsResponse> {
    const obj: any = {};
    if (message.auctions) {
      obj.auctions = message.auctions.map((e) =>
        e ? Auction.toJSON(e) : undefined,
      );
    } else {
      obj.auctions = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuctionsResponse>, I>>(
    object: I,
  ): QueryAuctionsResponse {
    const message = createBaseQueryAuctionsResponse();
    message.auctions =
      object.auctions?.map((e) => Auction.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryAuctionByIdRequest(): QueryAuctionByIdRequest {
  return {
    auctionId: BigInt(0),
  };
}
export const QueryAuctionByIdRequest = {
  typeUrl: "/auction.v1.QueryAuctionByIdRequest",
  encode(
    message: QueryAuctionByIdRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.auctionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.auctionId);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryAuctionByIdRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAuctionByIdRequest {
    const obj = createBaseQueryAuctionByIdRequest();
    if (isSet(object.auctionId))
      obj.auctionId = BigInt(object.auctionId.toString());
    return obj;
  },
  toJSON(message: QueryAuctionByIdRequest): JsonSafe<QueryAuctionByIdRequest> {
    const obj: any = {};
    message.auctionId !== undefined &&
      (obj.auctionId = (message.auctionId || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuctionByIdRequest>, I>>(
    object: I,
  ): QueryAuctionByIdRequest {
    const message = createBaseQueryAuctionByIdRequest();
    if (object.auctionId !== undefined && object.auctionId !== null) {
      message.auctionId = BigInt(object.auctionId.toString());
    }
    return message;
  },
};
function createBaseQueryAuctionByIdResponse(): QueryAuctionByIdResponse {
  return {
    auction: undefined,
  };
}
export const QueryAuctionByIdResponse = {
  typeUrl: "/auction.v1.QueryAuctionByIdResponse",
  encode(
    message: QueryAuctionByIdResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.auction !== undefined) {
      Auction.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryAuctionByIdResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auction = Auction.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAuctionByIdResponse {
    const obj = createBaseQueryAuctionByIdResponse();
    if (isSet(object.auction)) obj.auction = Auction.fromJSON(object.auction);
    return obj;
  },
  toJSON(
    message: QueryAuctionByIdResponse,
  ): JsonSafe<QueryAuctionByIdResponse> {
    const obj: any = {};
    message.auction !== undefined &&
      (obj.auction = message.auction
        ? Auction.toJSON(message.auction)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuctionByIdResponse>, I>>(
    object: I,
  ): QueryAuctionByIdResponse {
    const message = createBaseQueryAuctionByIdResponse();
    if (object.auction !== undefined && object.auction !== null) {
      message.auction = Auction.fromPartial(object.auction);
    }
    return message;
  },
};
function createBaseQueryAuctionByDenomRequest(): QueryAuctionByDenomRequest {
  return {
    auctionDenom: "",
  };
}
export const QueryAuctionByDenomRequest = {
  typeUrl: "/auction.v1.QueryAuctionByDenomRequest",
  encode(
    message: QueryAuctionByDenomRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.auctionDenom !== "") {
      writer.uint32(10).string(message.auctionDenom);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryAuctionByDenomRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAuctionByDenomRequest {
    const obj = createBaseQueryAuctionByDenomRequest();
    if (isSet(object.auctionDenom))
      obj.auctionDenom = String(object.auctionDenom);
    return obj;
  },
  toJSON(
    message: QueryAuctionByDenomRequest,
  ): JsonSafe<QueryAuctionByDenomRequest> {
    const obj: any = {};
    message.auctionDenom !== undefined &&
      (obj.auctionDenom = message.auctionDenom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuctionByDenomRequest>, I>>(
    object: I,
  ): QueryAuctionByDenomRequest {
    const message = createBaseQueryAuctionByDenomRequest();
    message.auctionDenom = object.auctionDenom ?? "";
    return message;
  },
};
function createBaseQueryAuctionByDenomResponse(): QueryAuctionByDenomResponse {
  return {
    auction: undefined,
  };
}
export const QueryAuctionByDenomResponse = {
  typeUrl: "/auction.v1.QueryAuctionByDenomResponse",
  encode(
    message: QueryAuctionByDenomResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.auction !== undefined) {
      Auction.encode(message.auction, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryAuctionByDenomResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auction = Auction.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAuctionByDenomResponse {
    const obj = createBaseQueryAuctionByDenomResponse();
    if (isSet(object.auction)) obj.auction = Auction.fromJSON(object.auction);
    return obj;
  },
  toJSON(
    message: QueryAuctionByDenomResponse,
  ): JsonSafe<QueryAuctionByDenomResponse> {
    const obj: any = {};
    message.auction !== undefined &&
      (obj.auction = message.auction
        ? Auction.toJSON(message.auction)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuctionByDenomResponse>, I>>(
    object: I,
  ): QueryAuctionByDenomResponse {
    const message = createBaseQueryAuctionByDenomResponse();
    if (object.auction !== undefined && object.auction !== null) {
      message.auction = Auction.fromPartial(object.auction);
    }
    return message;
  },
};
function createBaseQueryAllAuctionsByBidderRequest(): QueryAllAuctionsByBidderRequest {
  return {
    address: "",
  };
}
export const QueryAllAuctionsByBidderRequest = {
  typeUrl: "/auction.v1.QueryAllAuctionsByBidderRequest",
  encode(
    message: QueryAllAuctionsByBidderRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryAllAuctionsByBidderRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAuctionsByBidderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllAuctionsByBidderRequest {
    const obj = createBaseQueryAllAuctionsByBidderRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(
    message: QueryAllAuctionsByBidderRequest,
  ): JsonSafe<QueryAllAuctionsByBidderRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllAuctionsByBidderRequest>, I>>(
    object: I,
  ): QueryAllAuctionsByBidderRequest {
    const message = createBaseQueryAllAuctionsByBidderRequest();
    message.address = object.address ?? "";
    return message;
  },
};
function createBaseQueryAllAuctionsByBidderResponse(): QueryAllAuctionsByBidderResponse {
  return {
    auctions: [],
  };
}
export const QueryAllAuctionsByBidderResponse = {
  typeUrl: "/auction.v1.QueryAllAuctionsByBidderResponse",
  encode(
    message: QueryAllAuctionsByBidderResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.auctions) {
      Auction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryAllAuctionsByBidderResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAuctionsByBidderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctions.push(Auction.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllAuctionsByBidderResponse {
    const obj = createBaseQueryAllAuctionsByBidderResponse();
    if (Array.isArray(object?.auctions))
      obj.auctions = object.auctions.map((e: any) => Auction.fromJSON(e));
    return obj;
  },
  toJSON(
    message: QueryAllAuctionsByBidderResponse,
  ): JsonSafe<QueryAllAuctionsByBidderResponse> {
    const obj: any = {};
    if (message.auctions) {
      obj.auctions = message.auctions.map((e) =>
        e ? Auction.toJSON(e) : undefined,
      );
    } else {
      obj.auctions = [];
    }
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<QueryAllAuctionsByBidderResponse>, I>,
  >(object: I): QueryAllAuctionsByBidderResponse {
    const message = createBaseQueryAllAuctionsByBidderResponse();
    message.auctions =
      object.auctions?.map((e) => Auction.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryAuctionPoolRequest(): QueryAuctionPoolRequest {
  return {};
}
export const QueryAuctionPoolRequest = {
  typeUrl: "/auction.v1.QueryAuctionPoolRequest",
  encode(
    _: QueryAuctionPoolRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryAuctionPoolRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionPoolRequest();
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
  fromJSON(_: any): QueryAuctionPoolRequest {
    const obj = createBaseQueryAuctionPoolRequest();
    return obj;
  },
  toJSON(_: QueryAuctionPoolRequest): JsonSafe<QueryAuctionPoolRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuctionPoolRequest>, I>>(
    _: I,
  ): QueryAuctionPoolRequest {
    const message = createBaseQueryAuctionPoolRequest();
    return message;
  },
};
function createBaseQueryAuctionPoolResponse(): QueryAuctionPoolResponse {
  return {
    account: "",
    balances: [],
  };
}
export const QueryAuctionPoolResponse = {
  typeUrl: "/auction.v1.QueryAuctionPoolResponse",
  encode(
    message: QueryAuctionPoolResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    for (const v of message.balances) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryAuctionPoolResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuctionPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.balances.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAuctionPoolResponse {
    const obj = createBaseQueryAuctionPoolResponse();
    if (isSet(object.account)) obj.account = String(object.account);
    if (Array.isArray(object?.balances))
      obj.balances = object.balances.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(
    message: QueryAuctionPoolResponse,
  ): JsonSafe<QueryAuctionPoolResponse> {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    if (message.balances) {
      obj.balances = message.balances.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.balances = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuctionPoolResponse>, I>>(
    object: I,
  ): QueryAuctionPoolResponse {
    const message = createBaseQueryAuctionPoolResponse();
    message.account = object.account ?? "";
    message.balances = object.balances?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params returns the current module parameters (decided by governance) */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** AuctionPeriod returns the current active auction period, or a future one if no period is active */
  AuctionPeriod(
    request?: QueryAuctionPeriodRequest,
  ): Promise<QueryAuctionPeriodResponse>;
  /** Auctions returns all current active auctions */
  Auctions(request?: QueryAuctionsRequest): Promise<QueryAuctionsResponse>;
  /** AuctionById returns an open auction given by its `id` */
  AuctionById(
    request: QueryAuctionByIdRequest,
  ): Promise<QueryAuctionByIdResponse>;
  /** AuctionByDenom returns an open auction given by its `denom` */
  AuctionByDenom(
    request: QueryAuctionByDenomRequest,
  ): Promise<QueryAuctionByDenomResponse>;
  /** AllAuctionsByBidder returns all open auctions with the given highest bidder address */
  AllAuctionsByBidder(
    request: QueryAllAuctionsByBidderRequest,
  ): Promise<QueryAllAuctionsByBidderResponse>;
  /**
   * AuctionPool returns the auction pool account address and the tokens which will be up for auction next,
   * (but does not return any amounts from auctions with no bidder)
   */
  AuctionPool(
    request?: QueryAuctionPoolRequest,
  ): Promise<QueryAuctionPoolResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.AuctionPeriod = this.AuctionPeriod.bind(this);
    this.Auctions = this.Auctions.bind(this);
    this.AuctionById = this.AuctionById.bind(this);
    this.AuctionByDenom = this.AuctionByDenom.bind(this);
    this.AllAuctionsByBidder = this.AllAuctionsByBidder.bind(this);
    this.AuctionPool = this.AuctionPool.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("auction.v1.Query", "Params", data);
    return promise.then((data) =>
      QueryParamsResponse.decode(new BinaryReader(data)),
    );
  }
  AuctionPeriod(
    request: QueryAuctionPeriodRequest = {},
  ): Promise<QueryAuctionPeriodResponse> {
    const data = QueryAuctionPeriodRequest.encode(request).finish();
    const promise = this.rpc.request("auction.v1.Query", "AuctionPeriod", data);
    return promise.then((data) =>
      QueryAuctionPeriodResponse.decode(new BinaryReader(data)),
    );
  }
  Auctions(request: QueryAuctionsRequest = {}): Promise<QueryAuctionsResponse> {
    const data = QueryAuctionsRequest.encode(request).finish();
    const promise = this.rpc.request("auction.v1.Query", "Auctions", data);
    return promise.then((data) =>
      QueryAuctionsResponse.decode(new BinaryReader(data)),
    );
  }
  AuctionById(
    request: QueryAuctionByIdRequest,
  ): Promise<QueryAuctionByIdResponse> {
    const data = QueryAuctionByIdRequest.encode(request).finish();
    const promise = this.rpc.request("auction.v1.Query", "AuctionById", data);
    return promise.then((data) =>
      QueryAuctionByIdResponse.decode(new BinaryReader(data)),
    );
  }
  AuctionByDenom(
    request: QueryAuctionByDenomRequest,
  ): Promise<QueryAuctionByDenomResponse> {
    const data = QueryAuctionByDenomRequest.encode(request).finish();
    const promise = this.rpc.request(
      "auction.v1.Query",
      "AuctionByDenom",
      data,
    );
    return promise.then((data) =>
      QueryAuctionByDenomResponse.decode(new BinaryReader(data)),
    );
  }
  AllAuctionsByBidder(
    request: QueryAllAuctionsByBidderRequest,
  ): Promise<QueryAllAuctionsByBidderResponse> {
    const data = QueryAllAuctionsByBidderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "auction.v1.Query",
      "AllAuctionsByBidder",
      data,
    );
    return promise.then((data) =>
      QueryAllAuctionsByBidderResponse.decode(new BinaryReader(data)),
    );
  }
  AuctionPool(
    request: QueryAuctionPoolRequest = {},
  ): Promise<QueryAuctionPoolResponse> {
    const data = QueryAuctionPoolRequest.encode(request).finish();
    const promise = this.rpc.request("auction.v1.Query", "AuctionPool", data);
    return promise.then((data) =>
      QueryAuctionPoolResponse.decode(new BinaryReader(data)),
    );
  }
}
