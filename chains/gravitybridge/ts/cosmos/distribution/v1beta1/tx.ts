/* eslint-disable */
import { Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmos.distribution.v1beta1";
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddress {
  delegatorAddress: string;
  withdrawAddress: string;
}
/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */
export interface MsgSetWithdrawAddressResponse {}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorReward {
  delegatorAddress: string;
  validatorAddress: string;
}
/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */
export interface MsgWithdrawDelegatorRewardResponse {}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommission {
  validatorAddress: string;
}
/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */
export interface MsgWithdrawValidatorCommissionResponse {}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPool {
  amount: Coin[];
  depositor: string;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponse {}
function createBaseMsgSetWithdrawAddress(): MsgSetWithdrawAddress {
  return {
    delegatorAddress: "",
    withdrawAddress: "",
  };
}
export const MsgSetWithdrawAddress = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
  encode(
    message: MsgSetWithdrawAddress,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(18).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgSetWithdrawAddress {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWithdrawAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetWithdrawAddress {
    const obj = createBaseMsgSetWithdrawAddress();
    if (isSet(object.delegatorAddress))
      obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.withdrawAddress))
      obj.withdrawAddress = String(object.withdrawAddress);
    return obj;
  },
  toJSON(message: MsgSetWithdrawAddress): JsonSafe<MsgSetWithdrawAddress> {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.withdrawAddress !== undefined &&
      (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetWithdrawAddress>, I>>(
    object: I,
  ): MsgSetWithdrawAddress {
    const message = createBaseMsgSetWithdrawAddress();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
};
function createBaseMsgSetWithdrawAddressResponse(): MsgSetWithdrawAddressResponse {
  return {};
}
export const MsgSetWithdrawAddressResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse",
  encode(
    _: MsgSetWithdrawAddressResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgSetWithdrawAddressResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWithdrawAddressResponse();
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
  fromJSON(_: any): MsgSetWithdrawAddressResponse {
    const obj = createBaseMsgSetWithdrawAddressResponse();
    return obj;
  },
  toJSON(
    _: MsgSetWithdrawAddressResponse,
  ): JsonSafe<MsgSetWithdrawAddressResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetWithdrawAddressResponse>, I>>(
    _: I,
  ): MsgSetWithdrawAddressResponse {
    const message = createBaseMsgSetWithdrawAddressResponse();
    return message;
  },
};
function createBaseMsgWithdrawDelegatorReward(): MsgWithdrawDelegatorReward {
  return {
    delegatorAddress: "",
    validatorAddress: "",
  };
}
export const MsgWithdrawDelegatorReward = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
  encode(
    message: MsgWithdrawDelegatorReward,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgWithdrawDelegatorReward {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegatorReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawDelegatorReward {
    const obj = createBaseMsgWithdrawDelegatorReward();
    if (isSet(object.delegatorAddress))
      obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorAddress))
      obj.validatorAddress = String(object.validatorAddress);
    return obj;
  },
  toJSON(
    message: MsgWithdrawDelegatorReward,
  ): JsonSafe<MsgWithdrawDelegatorReward> {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawDelegatorReward>, I>>(
    object: I,
  ): MsgWithdrawDelegatorReward {
    const message = createBaseMsgWithdrawDelegatorReward();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};
function createBaseMsgWithdrawDelegatorRewardResponse(): MsgWithdrawDelegatorRewardResponse {
  return {};
}
export const MsgWithdrawDelegatorRewardResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse",
  encode(
    _: MsgWithdrawDelegatorRewardResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgWithdrawDelegatorRewardResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegatorRewardResponse();
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
  fromJSON(_: any): MsgWithdrawDelegatorRewardResponse {
    const obj = createBaseMsgWithdrawDelegatorRewardResponse();
    return obj;
  },
  toJSON(
    _: MsgWithdrawDelegatorRewardResponse,
  ): JsonSafe<MsgWithdrawDelegatorRewardResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<MsgWithdrawDelegatorRewardResponse>, I>,
  >(_: I): MsgWithdrawDelegatorRewardResponse {
    const message = createBaseMsgWithdrawDelegatorRewardResponse();
    return message;
  },
};
function createBaseMsgWithdrawValidatorCommission(): MsgWithdrawValidatorCommission {
  return {
    validatorAddress: "",
  };
}
export const MsgWithdrawValidatorCommission = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
  encode(
    message: MsgWithdrawValidatorCommission,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgWithdrawValidatorCommission {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawValidatorCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawValidatorCommission {
    const obj = createBaseMsgWithdrawValidatorCommission();
    if (isSet(object.validatorAddress))
      obj.validatorAddress = String(object.validatorAddress);
    return obj;
  },
  toJSON(
    message: MsgWithdrawValidatorCommission,
  ): JsonSafe<MsgWithdrawValidatorCommission> {
    const obj: any = {};
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawValidatorCommission>, I>>(
    object: I,
  ): MsgWithdrawValidatorCommission {
    const message = createBaseMsgWithdrawValidatorCommission();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
};
function createBaseMsgWithdrawValidatorCommissionResponse(): MsgWithdrawValidatorCommissionResponse {
  return {};
}
export const MsgWithdrawValidatorCommissionResponse = {
  typeUrl:
    "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse",
  encode(
    _: MsgWithdrawValidatorCommissionResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgWithdrawValidatorCommissionResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawValidatorCommissionResponse();
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
  fromJSON(_: any): MsgWithdrawValidatorCommissionResponse {
    const obj = createBaseMsgWithdrawValidatorCommissionResponse();
    return obj;
  },
  toJSON(
    _: MsgWithdrawValidatorCommissionResponse,
  ): JsonSafe<MsgWithdrawValidatorCommissionResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<MsgWithdrawValidatorCommissionResponse>, I>,
  >(_: I): MsgWithdrawValidatorCommissionResponse {
    const message = createBaseMsgWithdrawValidatorCommissionResponse();
    return message;
  },
};
function createBaseMsgFundCommunityPool(): MsgFundCommunityPool {
  return {
    amount: [],
    depositor: "",
  };
}
export const MsgFundCommunityPool = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
  encode(
    message: MsgFundCommunityPool,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgFundCommunityPool {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundCommunityPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgFundCommunityPool {
    const obj = createBaseMsgFundCommunityPool();
    if (Array.isArray(object?.amount))
      obj.amount = object.amount.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.depositor)) obj.depositor = String(object.depositor);
    return obj;
  },
  toJSON(message: MsgFundCommunityPool): JsonSafe<MsgFundCommunityPool> {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgFundCommunityPool>, I>>(
    object: I,
  ): MsgFundCommunityPool {
    const message = createBaseMsgFundCommunityPool();
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    message.depositor = object.depositor ?? "";
    return message;
  },
};
function createBaseMsgFundCommunityPoolResponse(): MsgFundCommunityPoolResponse {
  return {};
}
export const MsgFundCommunityPoolResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse",
  encode(
    _: MsgFundCommunityPoolResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgFundCommunityPoolResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundCommunityPoolResponse();
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
  fromJSON(_: any): MsgFundCommunityPoolResponse {
    const obj = createBaseMsgFundCommunityPoolResponse();
    return obj;
  },
  toJSON(
    _: MsgFundCommunityPoolResponse,
  ): JsonSafe<MsgFundCommunityPoolResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgFundCommunityPoolResponse>, I>>(
    _: I,
  ): MsgFundCommunityPoolResponse {
    const message = createBaseMsgFundCommunityPoolResponse();
    return message;
  },
};
/** Msg defines the distribution Msg service. */
export interface Msg {
  /**
   * SetWithdrawAddress defines a method to change the withdraw address
   * for a delegator (or validator self-delegation).
   */
  SetWithdrawAddress(
    request: MsgSetWithdrawAddress,
  ): Promise<MsgSetWithdrawAddressResponse>;
  /**
   * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
   * from a single validator.
   */
  WithdrawDelegatorReward(
    request: MsgWithdrawDelegatorReward,
  ): Promise<MsgWithdrawDelegatorRewardResponse>;
  /**
   * WithdrawValidatorCommission defines a method to withdraw the
   * full commission to the validator address.
   */
  WithdrawValidatorCommission(
    request: MsgWithdrawValidatorCommission,
  ): Promise<MsgWithdrawValidatorCommissionResponse>;
  /**
   * FundCommunityPool defines a method to allow an account to directly
   * fund the community pool.
   */
  FundCommunityPool(
    request: MsgFundCommunityPool,
  ): Promise<MsgFundCommunityPoolResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetWithdrawAddress = this.SetWithdrawAddress.bind(this);
    this.WithdrawDelegatorReward = this.WithdrawDelegatorReward.bind(this);
    this.WithdrawValidatorCommission =
      this.WithdrawValidatorCommission.bind(this);
    this.FundCommunityPool = this.FundCommunityPool.bind(this);
  }
  SetWithdrawAddress(
    request: MsgSetWithdrawAddress,
  ): Promise<MsgSetWithdrawAddressResponse> {
    const data = MsgSetWithdrawAddress.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.distribution.v1beta1.Msg",
      "SetWithdrawAddress",
      data,
    );
    return promise.then((data) =>
      MsgSetWithdrawAddressResponse.decode(new BinaryReader(data)),
    );
  }
  WithdrawDelegatorReward(
    request: MsgWithdrawDelegatorReward,
  ): Promise<MsgWithdrawDelegatorRewardResponse> {
    const data = MsgWithdrawDelegatorReward.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.distribution.v1beta1.Msg",
      "WithdrawDelegatorReward",
      data,
    );
    return promise.then((data) =>
      MsgWithdrawDelegatorRewardResponse.decode(new BinaryReader(data)),
    );
  }
  WithdrawValidatorCommission(
    request: MsgWithdrawValidatorCommission,
  ): Promise<MsgWithdrawValidatorCommissionResponse> {
    const data = MsgWithdrawValidatorCommission.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.distribution.v1beta1.Msg",
      "WithdrawValidatorCommission",
      data,
    );
    return promise.then((data) =>
      MsgWithdrawValidatorCommissionResponse.decode(new BinaryReader(data)),
    );
  }
  FundCommunityPool(
    request: MsgFundCommunityPool,
  ): Promise<MsgFundCommunityPoolResponse> {
    const data = MsgFundCommunityPool.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.distribution.v1beta1.Msg",
      "FundCommunityPool",
      data,
    );
    return promise.then((data) =>
      MsgFundCommunityPoolResponse.decode(new BinaryReader(data)),
    );
  }
}
