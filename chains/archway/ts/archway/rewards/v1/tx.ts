/* eslint-disable */
import { ContractMetadata, Params } from "./rewards";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "archway.rewards.v1";
/** MsgSetContractMetadata is the request for Msg.SetContractMetadata. */
export interface MsgSetContractMetadata {
  /** sender_address is the msg sender address (bech32 encoded). */
  senderAddress: string;
  /**
   * metadata is the contract metadata to set / update.
   * If metadata exists, non-empty fields will be updated.
   */
  metadata: ContractMetadata;
}
/** MsgSetContractMetadataResponse is the response for Msg.SetContractMetadata. */
export interface MsgSetContractMetadataResponse {}
/** MsgWithdrawRewards is the request for Msg.WithdrawRewards. */
export interface MsgWithdrawRewards {
  /** rewards_address is the address to distribute rewards to (bech32 encoded). */
  rewardsAddress: string;
  /**
   * records_limit defines the maximum number of RewardsRecord objects to
   * process. If provided limit is 0, the default limit is used.
   */
  recordsLimit?: MsgWithdrawRewards_RecordsLimit;
  /** record_ids defines specific RewardsRecord object IDs to process. */
  recordIds?: MsgWithdrawRewards_RecordIDs;
}
export interface MsgWithdrawRewards_RecordsLimit {
  limit: bigint;
}
export interface MsgWithdrawRewards_RecordIDs {
  ids: bigint[];
}
/** MsgWithdrawRewardsResponse is the response for Msg.WithdrawRewards. */
export interface MsgWithdrawRewardsResponse {
  /** records_num is the number of RewardsRecord objects processed. */
  recordsNum: bigint;
  /** rewards are the total rewards transferred. */
  totalRewards: Coin[];
}
/** MsgSetFlatFee is the request for Msg.SetFlatFee. */
export interface MsgSetFlatFee {
  /** sender_address is the msg sender address (bech32 encoded). */
  senderAddress: string;
  /** contract_address is the contract address (bech32 encoded). */
  contractAddress: string;
  /** flat_fee_amount defines the minimum flat fee set by the contract_owner */
  flatFeeAmount: Coin;
}
/** MsgSetFlatFeeResponse is the response for Msg.SetFlatFee. */
export interface MsgSetFlatFeeResponse {}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: archway v5 && cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /**
   * params defines the x/rewards parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: archway v5 && cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
function createBaseMsgSetContractMetadata(): MsgSetContractMetadata {
  return {
    senderAddress: "",
    metadata: ContractMetadata.fromPartial({}),
  };
}
export const MsgSetContractMetadata = {
  typeUrl: "/archway.rewards.v1.MsgSetContractMetadata",
  encode(
    message: MsgSetContractMetadata,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    if (message.metadata !== undefined) {
      ContractMetadata.encode(
        message.metadata,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgSetContractMetadata {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetContractMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderAddress = reader.string();
          break;
        case 2:
          message.metadata = ContractMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetContractMetadata {
    const obj = createBaseMsgSetContractMetadata();
    if (isSet(object.senderAddress))
      obj.senderAddress = String(object.senderAddress);
    if (isSet(object.metadata))
      obj.metadata = ContractMetadata.fromJSON(object.metadata);
    return obj;
  },
  toJSON(message: MsgSetContractMetadata): JsonSafe<MsgSetContractMetadata> {
    const obj: any = {};
    message.senderAddress !== undefined &&
      (obj.senderAddress = message.senderAddress);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? ContractMetadata.toJSON(message.metadata)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetContractMetadata>, I>>(
    object: I,
  ): MsgSetContractMetadata {
    const message = createBaseMsgSetContractMetadata();
    message.senderAddress = object.senderAddress ?? "";
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = ContractMetadata.fromPartial(object.metadata);
    }
    return message;
  },
};
function createBaseMsgSetContractMetadataResponse(): MsgSetContractMetadataResponse {
  return {};
}
export const MsgSetContractMetadataResponse = {
  typeUrl: "/archway.rewards.v1.MsgSetContractMetadataResponse",
  encode(
    _: MsgSetContractMetadataResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgSetContractMetadataResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetContractMetadataResponse();
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
  fromJSON(_: any): MsgSetContractMetadataResponse {
    const obj = createBaseMsgSetContractMetadataResponse();
    return obj;
  },
  toJSON(
    _: MsgSetContractMetadataResponse,
  ): JsonSafe<MsgSetContractMetadataResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetContractMetadataResponse>, I>>(
    _: I,
  ): MsgSetContractMetadataResponse {
    const message = createBaseMsgSetContractMetadataResponse();
    return message;
  },
};
function createBaseMsgWithdrawRewards(): MsgWithdrawRewards {
  return {
    rewardsAddress: "",
    recordsLimit: undefined,
    recordIds: undefined,
  };
}
export const MsgWithdrawRewards = {
  typeUrl: "/archway.rewards.v1.MsgWithdrawRewards",
  encode(
    message: MsgWithdrawRewards,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.rewardsAddress !== "") {
      writer.uint32(10).string(message.rewardsAddress);
    }
    if (message.recordsLimit !== undefined) {
      MsgWithdrawRewards_RecordsLimit.encode(
        message.recordsLimit,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.recordIds !== undefined) {
      MsgWithdrawRewards_RecordIDs.encode(
        message.recordIds,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgWithdrawRewards {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardsAddress = reader.string();
          break;
        case 2:
          message.recordsLimit = MsgWithdrawRewards_RecordsLimit.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 3:
          message.recordIds = MsgWithdrawRewards_RecordIDs.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawRewards {
    const obj = createBaseMsgWithdrawRewards();
    if (isSet(object.rewardsAddress))
      obj.rewardsAddress = String(object.rewardsAddress);
    if (isSet(object.recordsLimit))
      obj.recordsLimit = MsgWithdrawRewards_RecordsLimit.fromJSON(
        object.recordsLimit,
      );
    if (isSet(object.recordIds))
      obj.recordIds = MsgWithdrawRewards_RecordIDs.fromJSON(object.recordIds);
    return obj;
  },
  toJSON(message: MsgWithdrawRewards): JsonSafe<MsgWithdrawRewards> {
    const obj: any = {};
    message.rewardsAddress !== undefined &&
      (obj.rewardsAddress = message.rewardsAddress);
    message.recordsLimit !== undefined &&
      (obj.recordsLimit = message.recordsLimit
        ? MsgWithdrawRewards_RecordsLimit.toJSON(message.recordsLimit)
        : undefined);
    message.recordIds !== undefined &&
      (obj.recordIds = message.recordIds
        ? MsgWithdrawRewards_RecordIDs.toJSON(message.recordIds)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawRewards>, I>>(
    object: I,
  ): MsgWithdrawRewards {
    const message = createBaseMsgWithdrawRewards();
    message.rewardsAddress = object.rewardsAddress ?? "";
    if (object.recordsLimit !== undefined && object.recordsLimit !== null) {
      message.recordsLimit = MsgWithdrawRewards_RecordsLimit.fromPartial(
        object.recordsLimit,
      );
    }
    if (object.recordIds !== undefined && object.recordIds !== null) {
      message.recordIds = MsgWithdrawRewards_RecordIDs.fromPartial(
        object.recordIds,
      );
    }
    return message;
  },
};
function createBaseMsgWithdrawRewards_RecordsLimit(): MsgWithdrawRewards_RecordsLimit {
  return {
    limit: BigInt(0),
  };
}
export const MsgWithdrawRewards_RecordsLimit = {
  typeUrl: "/archway.rewards.v1.RecordsLimit",
  encode(
    message: MsgWithdrawRewards_RecordsLimit,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.limit !== BigInt(0)) {
      writer.uint32(8).uint64(message.limit);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgWithdrawRewards_RecordsLimit {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRewards_RecordsLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limit = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawRewards_RecordsLimit {
    const obj = createBaseMsgWithdrawRewards_RecordsLimit();
    if (isSet(object.limit)) obj.limit = BigInt(object.limit.toString());
    return obj;
  },
  toJSON(
    message: MsgWithdrawRewards_RecordsLimit,
  ): JsonSafe<MsgWithdrawRewards_RecordsLimit> {
    const obj: any = {};
    message.limit !== undefined &&
      (obj.limit = (message.limit || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawRewards_RecordsLimit>, I>>(
    object: I,
  ): MsgWithdrawRewards_RecordsLimit {
    const message = createBaseMsgWithdrawRewards_RecordsLimit();
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = BigInt(object.limit.toString());
    }
    return message;
  },
};
function createBaseMsgWithdrawRewards_RecordIDs(): MsgWithdrawRewards_RecordIDs {
  return {
    ids: [],
  };
}
export const MsgWithdrawRewards_RecordIDs = {
  typeUrl: "/archway.rewards.v1.RecordIDs",
  encode(
    message: MsgWithdrawRewards_RecordIDs,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.ids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgWithdrawRewards_RecordIDs {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRewards_RecordIDs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ids.push(reader.uint64());
            }
          } else {
            message.ids.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawRewards_RecordIDs {
    const obj = createBaseMsgWithdrawRewards_RecordIDs();
    if (Array.isArray(object?.ids))
      obj.ids = object.ids.map((e: any) => BigInt(e.toString()));
    return obj;
  },
  toJSON(
    message: MsgWithdrawRewards_RecordIDs,
  ): JsonSafe<MsgWithdrawRewards_RecordIDs> {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.ids = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawRewards_RecordIDs>, I>>(
    object: I,
  ): MsgWithdrawRewards_RecordIDs {
    const message = createBaseMsgWithdrawRewards_RecordIDs();
    message.ids = object.ids?.map((e) => BigInt(e.toString())) || [];
    return message;
  },
};
function createBaseMsgWithdrawRewardsResponse(): MsgWithdrawRewardsResponse {
  return {
    recordsNum: BigInt(0),
    totalRewards: [],
  };
}
export const MsgWithdrawRewardsResponse = {
  typeUrl: "/archway.rewards.v1.MsgWithdrawRewardsResponse",
  encode(
    message: MsgWithdrawRewardsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.recordsNum !== BigInt(0)) {
      writer.uint32(8).uint64(message.recordsNum);
    }
    for (const v of message.totalRewards) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgWithdrawRewardsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordsNum = reader.uint64();
          break;
        case 2:
          message.totalRewards.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawRewardsResponse {
    const obj = createBaseMsgWithdrawRewardsResponse();
    if (isSet(object.recordsNum))
      obj.recordsNum = BigInt(object.recordsNum.toString());
    if (Array.isArray(object?.totalRewards))
      obj.totalRewards = object.totalRewards.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(
    message: MsgWithdrawRewardsResponse,
  ): JsonSafe<MsgWithdrawRewardsResponse> {
    const obj: any = {};
    message.recordsNum !== undefined &&
      (obj.recordsNum = (message.recordsNum || BigInt(0)).toString());
    if (message.totalRewards) {
      obj.totalRewards = message.totalRewards.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.totalRewards = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgWithdrawRewardsResponse>, I>>(
    object: I,
  ): MsgWithdrawRewardsResponse {
    const message = createBaseMsgWithdrawRewardsResponse();
    if (object.recordsNum !== undefined && object.recordsNum !== null) {
      message.recordsNum = BigInt(object.recordsNum.toString());
    }
    message.totalRewards =
      object.totalRewards?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMsgSetFlatFee(): MsgSetFlatFee {
  return {
    senderAddress: "",
    contractAddress: "",
    flatFeeAmount: Coin.fromPartial({}),
  };
}
export const MsgSetFlatFee = {
  typeUrl: "/archway.rewards.v1.MsgSetFlatFee",
  encode(
    message: MsgSetFlatFee,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.flatFeeAmount !== undefined) {
      Coin.encode(message.flatFeeAmount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetFlatFee {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetFlatFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderAddress = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        case 3:
          message.flatFeeAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetFlatFee {
    const obj = createBaseMsgSetFlatFee();
    if (isSet(object.senderAddress))
      obj.senderAddress = String(object.senderAddress);
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    if (isSet(object.flatFeeAmount))
      obj.flatFeeAmount = Coin.fromJSON(object.flatFeeAmount);
    return obj;
  },
  toJSON(message: MsgSetFlatFee): JsonSafe<MsgSetFlatFee> {
    const obj: any = {};
    message.senderAddress !== undefined &&
      (obj.senderAddress = message.senderAddress);
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.flatFeeAmount !== undefined &&
      (obj.flatFeeAmount = message.flatFeeAmount
        ? Coin.toJSON(message.flatFeeAmount)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetFlatFee>, I>>(
    object: I,
  ): MsgSetFlatFee {
    const message = createBaseMsgSetFlatFee();
    message.senderAddress = object.senderAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    if (object.flatFeeAmount !== undefined && object.flatFeeAmount !== null) {
      message.flatFeeAmount = Coin.fromPartial(object.flatFeeAmount);
    }
    return message;
  },
};
function createBaseMsgSetFlatFeeResponse(): MsgSetFlatFeeResponse {
  return {};
}
export const MsgSetFlatFeeResponse = {
  typeUrl: "/archway.rewards.v1.MsgSetFlatFeeResponse",
  encode(
    _: MsgSetFlatFeeResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgSetFlatFeeResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetFlatFeeResponse();
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
  fromJSON(_: any): MsgSetFlatFeeResponse {
    const obj = createBaseMsgSetFlatFeeResponse();
    return obj;
  },
  toJSON(_: MsgSetFlatFeeResponse): JsonSafe<MsgSetFlatFeeResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetFlatFeeResponse>, I>>(
    _: I,
  ): MsgSetFlatFeeResponse {
    const message = createBaseMsgSetFlatFeeResponse();
    return message;
  },
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  typeUrl: "/archway.rewards.v1.MsgUpdateParams",
  encode(
    message: MsgUpdateParams,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    const obj = createBaseMsgUpdateParams();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(
    object: I,
  ): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/archway.rewards.v1.MsgUpdateParamsResponse",
  encode(
    _: MsgUpdateParamsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgUpdateParamsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
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
  fromJSON(_: any): MsgUpdateParamsResponse {
    const obj = createBaseMsgUpdateParamsResponse();
    return obj;
  },
  toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(
    _: I,
  ): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};
/** Msg defines the module messaging service. */
export interface Msg {
  /**
   * SetContractMetadata creates or updates an existing contract metadata.
   * Method is authorized to the contract owner (admin if no metadata exists).
   */
  SetContractMetadata(
    request: MsgSetContractMetadata,
  ): Promise<MsgSetContractMetadataResponse>;
  /**
   * WithdrawRewards performs collected rewards distribution.
   * Rewards might be credited from multiple contracts (rewards_address must be
   * set in the corresponding contract metadata).
   */
  WithdrawRewards(
    request: MsgWithdrawRewards,
  ): Promise<MsgWithdrawRewardsResponse>;
  /**
   * SetFlatFee sets or updates or removes the flat fee to interact with the
   * contract Method is authorized to the contract owner.
   */
  SetFlatFee(request: MsgSetFlatFee): Promise<MsgSetFlatFeeResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/rewards
   * module parameters. The authority is defined in the keeper.
   *
   * Since: archway v5 && cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetContractMetadata = this.SetContractMetadata.bind(this);
    this.WithdrawRewards = this.WithdrawRewards.bind(this);
    this.SetFlatFee = this.SetFlatFee.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  SetContractMetadata(
    request: MsgSetContractMetadata,
  ): Promise<MsgSetContractMetadataResponse> {
    const data = MsgSetContractMetadata.encode(request).finish();
    const promise = this.rpc.request(
      "archway.rewards.v1.Msg",
      "SetContractMetadata",
      data,
    );
    return promise.then((data) =>
      MsgSetContractMetadataResponse.decode(new BinaryReader(data)),
    );
  }
  WithdrawRewards(
    request: MsgWithdrawRewards,
  ): Promise<MsgWithdrawRewardsResponse> {
    const data = MsgWithdrawRewards.encode(request).finish();
    const promise = this.rpc.request(
      "archway.rewards.v1.Msg",
      "WithdrawRewards",
      data,
    );
    return promise.then((data) =>
      MsgWithdrawRewardsResponse.decode(new BinaryReader(data)),
    );
  }
  SetFlatFee(request: MsgSetFlatFee): Promise<MsgSetFlatFeeResponse> {
    const data = MsgSetFlatFee.encode(request).finish();
    const promise = this.rpc.request(
      "archway.rewards.v1.Msg",
      "SetFlatFee",
      data,
    );
    return promise.then((data) =>
      MsgSetFlatFeeResponse.decode(new BinaryReader(data)),
    );
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "archway.rewards.v1.Msg",
      "UpdateParams",
      data,
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new BinaryReader(data)),
    );
  }
}
