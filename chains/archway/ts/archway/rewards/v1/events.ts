/* eslint-disable */
import { ContractMetadata } from "./rewards";
import { Coin, DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "archway.rewards.v1";
/**
 * ContractMetadataSetEvent is emitted when the contract metadata is created or
 * updated.
 */
export interface ContractMetadataSetEvent {
  /** contract_address defines the contract address. */
  contractAddress: string;
  /** metadata defines the new contract metadata state. */
  metadata: ContractMetadata;
}
/**
 * ContractRewardCalculationEvent is emitted when the contract reward is
 * calculated.
 */
export interface ContractRewardCalculationEvent {
  /** contract_address defines the contract address. */
  contractAddress: string;
  /**
   * gas_consumed defines the total gas consumption by all WASM operations
   * within one transaction.
   */
  gasConsumed: bigint;
  /** inflation_rewards defines the inflation rewards portions of the rewards. */
  inflationRewards: Coin;
  /** fee_rebate_rewards defines the fee rebate rewards portions of the rewards. */
  feeRebateRewards: Coin[];
  /** metadata defines the contract metadata (if set). */
  metadata?: ContractMetadata;
}
/**
 * RewardsWithdrawEvent is emitted when credited rewards for a specific
 * rewards_address are distributed. Event could be triggered by a transaction
 * (via CLI for example) or by a contract via WASM bindings.
 */
export interface RewardsWithdrawEvent {
  /** rewards_address defines the rewards address rewards are distributed to. */
  rewardAddress: string;
  /** rewards defines the total rewards being distributed. */
  rewards: Coin[];
}
/** MinConsensusFeeSetEvent is emitted when the minimum consensus fee is updated. */
export interface MinConsensusFeeSetEvent {
  /** fee defines the updated minimum gas unit price. */
  fee: DecCoin;
}
/** ContractFlatFeeSetEvent is emitted when the contract flat fee is updated */
export interface ContractFlatFeeSetEvent {
  /**
   * contract_address defines the bech32 address of the contract for which the
   * flat fee is set
   */
  contractAddress: string;
  /**
   * flat_fee defines the amount that has been set as the minimum fee for the
   * contract
   */
  flatFee: Coin;
}
function createBaseContractMetadataSetEvent(): ContractMetadataSetEvent {
  return {
    contractAddress: "",
    metadata: ContractMetadata.fromPartial({}),
  };
}
export const ContractMetadataSetEvent = {
  typeUrl: "/archway.rewards.v1.ContractMetadataSetEvent",
  encode(
    message: ContractMetadataSetEvent,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
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
  ): ContractMetadataSetEvent {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractMetadataSetEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
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
  fromJSON(object: any): ContractMetadataSetEvent {
    const obj = createBaseContractMetadataSetEvent();
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    if (isSet(object.metadata))
      obj.metadata = ContractMetadata.fromJSON(object.metadata);
    return obj;
  },
  toJSON(
    message: ContractMetadataSetEvent,
  ): JsonSafe<ContractMetadataSetEvent> {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? ContractMetadata.toJSON(message.metadata)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ContractMetadataSetEvent>, I>>(
    object: I,
  ): ContractMetadataSetEvent {
    const message = createBaseContractMetadataSetEvent();
    message.contractAddress = object.contractAddress ?? "";
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = ContractMetadata.fromPartial(object.metadata);
    }
    return message;
  },
};
function createBaseContractRewardCalculationEvent(): ContractRewardCalculationEvent {
  return {
    contractAddress: "",
    gasConsumed: BigInt(0),
    inflationRewards: Coin.fromPartial({}),
    feeRebateRewards: [],
    metadata: undefined,
  };
}
export const ContractRewardCalculationEvent = {
  typeUrl: "/archway.rewards.v1.ContractRewardCalculationEvent",
  encode(
    message: ContractRewardCalculationEvent,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.gasConsumed !== BigInt(0)) {
      writer.uint32(16).uint64(message.gasConsumed);
    }
    if (message.inflationRewards !== undefined) {
      Coin.encode(message.inflationRewards, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.feeRebateRewards) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.metadata !== undefined) {
      ContractMetadata.encode(
        message.metadata,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): ContractRewardCalculationEvent {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractRewardCalculationEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.gasConsumed = reader.uint64();
          break;
        case 3:
          message.inflationRewards = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.feeRebateRewards.push(Coin.decode(reader, reader.uint32()));
          break;
        case 5:
          message.metadata = ContractMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContractRewardCalculationEvent {
    const obj = createBaseContractRewardCalculationEvent();
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    if (isSet(object.gasConsumed))
      obj.gasConsumed = BigInt(object.gasConsumed.toString());
    if (isSet(object.inflationRewards))
      obj.inflationRewards = Coin.fromJSON(object.inflationRewards);
    if (Array.isArray(object?.feeRebateRewards))
      obj.feeRebateRewards = object.feeRebateRewards.map((e: any) =>
        Coin.fromJSON(e),
      );
    if (isSet(object.metadata))
      obj.metadata = ContractMetadata.fromJSON(object.metadata);
    return obj;
  },
  toJSON(
    message: ContractRewardCalculationEvent,
  ): JsonSafe<ContractRewardCalculationEvent> {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.gasConsumed !== undefined &&
      (obj.gasConsumed = (message.gasConsumed || BigInt(0)).toString());
    message.inflationRewards !== undefined &&
      (obj.inflationRewards = message.inflationRewards
        ? Coin.toJSON(message.inflationRewards)
        : undefined);
    if (message.feeRebateRewards) {
      obj.feeRebateRewards = message.feeRebateRewards.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.feeRebateRewards = [];
    }
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? ContractMetadata.toJSON(message.metadata)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ContractRewardCalculationEvent>, I>>(
    object: I,
  ): ContractRewardCalculationEvent {
    const message = createBaseContractRewardCalculationEvent();
    message.contractAddress = object.contractAddress ?? "";
    if (object.gasConsumed !== undefined && object.gasConsumed !== null) {
      message.gasConsumed = BigInt(object.gasConsumed.toString());
    }
    if (
      object.inflationRewards !== undefined &&
      object.inflationRewards !== null
    ) {
      message.inflationRewards = Coin.fromPartial(object.inflationRewards);
    }
    message.feeRebateRewards =
      object.feeRebateRewards?.map((e) => Coin.fromPartial(e)) || [];
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = ContractMetadata.fromPartial(object.metadata);
    }
    return message;
  },
};
function createBaseRewardsWithdrawEvent(): RewardsWithdrawEvent {
  return {
    rewardAddress: "",
    rewards: [],
  };
}
export const RewardsWithdrawEvent = {
  typeUrl: "/archway.rewards.v1.RewardsWithdrawEvent",
  encode(
    message: RewardsWithdrawEvent,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.rewardAddress !== "") {
      writer.uint32(10).string(message.rewardAddress);
    }
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): RewardsWithdrawEvent {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardsWithdrawEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewardAddress = reader.string();
          break;
        case 2:
          message.rewards.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RewardsWithdrawEvent {
    const obj = createBaseRewardsWithdrawEvent();
    if (isSet(object.rewardAddress))
      obj.rewardAddress = String(object.rewardAddress);
    if (Array.isArray(object?.rewards))
      obj.rewards = object.rewards.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: RewardsWithdrawEvent): JsonSafe<RewardsWithdrawEvent> {
    const obj: any = {};
    message.rewardAddress !== undefined &&
      (obj.rewardAddress = message.rewardAddress);
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RewardsWithdrawEvent>, I>>(
    object: I,
  ): RewardsWithdrawEvent {
    const message = createBaseRewardsWithdrawEvent();
    message.rewardAddress = object.rewardAddress ?? "";
    message.rewards = object.rewards?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseMinConsensusFeeSetEvent(): MinConsensusFeeSetEvent {
  return {
    fee: DecCoin.fromPartial({}),
  };
}
export const MinConsensusFeeSetEvent = {
  typeUrl: "/archway.rewards.v1.MinConsensusFeeSetEvent",
  encode(
    message: MinConsensusFeeSetEvent,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.fee !== undefined) {
      DecCoin.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MinConsensusFeeSetEvent {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinConsensusFeeSetEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MinConsensusFeeSetEvent {
    const obj = createBaseMinConsensusFeeSetEvent();
    if (isSet(object.fee)) obj.fee = DecCoin.fromJSON(object.fee);
    return obj;
  },
  toJSON(message: MinConsensusFeeSetEvent): JsonSafe<MinConsensusFeeSetEvent> {
    const obj: any = {};
    message.fee !== undefined &&
      (obj.fee = message.fee ? DecCoin.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MinConsensusFeeSetEvent>, I>>(
    object: I,
  ): MinConsensusFeeSetEvent {
    const message = createBaseMinConsensusFeeSetEvent();
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = DecCoin.fromPartial(object.fee);
    }
    return message;
  },
};
function createBaseContractFlatFeeSetEvent(): ContractFlatFeeSetEvent {
  return {
    contractAddress: "",
    flatFee: Coin.fromPartial({}),
  };
}
export const ContractFlatFeeSetEvent = {
  typeUrl: "/archway.rewards.v1.ContractFlatFeeSetEvent",
  encode(
    message: ContractFlatFeeSetEvent,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.flatFee !== undefined) {
      Coin.encode(message.flatFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): ContractFlatFeeSetEvent {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractFlatFeeSetEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.flatFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContractFlatFeeSetEvent {
    const obj = createBaseContractFlatFeeSetEvent();
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    if (isSet(object.flatFee)) obj.flatFee = Coin.fromJSON(object.flatFee);
    return obj;
  },
  toJSON(message: ContractFlatFeeSetEvent): JsonSafe<ContractFlatFeeSetEvent> {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.flatFee !== undefined &&
      (obj.flatFee = message.flatFee
        ? Coin.toJSON(message.flatFee)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ContractFlatFeeSetEvent>, I>>(
    object: I,
  ): ContractFlatFeeSetEvent {
    const message = createBaseContractFlatFeeSetEvent();
    message.contractAddress = object.contractAddress ?? "";
    if (object.flatFee !== undefined && object.flatFee !== null) {
      message.flatFee = Coin.fromPartial(object.flatFee);
    }
    return message;
  },
};
