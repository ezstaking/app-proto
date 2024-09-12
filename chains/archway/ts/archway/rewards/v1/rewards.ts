/* eslint-disable */
import { DecCoin, Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import {
  isSet,
  DeepPartial,
  Exact,
  fromJsonTimestamp,
  fromTimestamp,
} from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "archway.rewards.v1";
/** Params defines the module parameters. */
export interface Params {
  /**
   * inflation_rewards_ratio defines the percentage of minted inflation tokens
   * that are used for dApp rewards [0.0, 1.0]. If set to 0.0, no inflation
   * rewards are distributed.
   */
  inflationRewardsRatio: string;
  /**
   * tx_fee_rebate_ratio defines the percentage of tx fees that are used for
   * dApp rewards [0.0, 1.0]. If set to 0.0, no fee rewards are distributed.
   */
  txFeeRebateRatio: string;
  /**
   * max_withdraw_records defines the maximum number of RewardsRecord objects
   * used for the withdrawal operation.
   */
  maxWithdrawRecords: bigint;
  /**
   * min_price_of_gas defines the minimum price for each single unit of gas in
   * the network. during the min consensus fee ante handler we will be taking
   * the max between min consensus fee and minimum price of gas to compute the
   * minimum tx computational fees, which are independent from contract flat
   * fees (premiums)
   */
  minPriceOfGas: DecCoin;
}
/**
 * ContractMetadata defines the contract rewards distribution options for a
 * particular contract.
 */
export interface ContractMetadata {
  /** contract_address defines the contract address (bech32 encoded). */
  contractAddress: string;
  /**
   * owner_address is the contract owner address that can modify contract reward
   * options (bech32 encoded). That could be the contract admin or the contract
   * itself. If owner_address is set to contract address, contract can modify
   * the metadata on its own using WASM bindings.
   */
  ownerAddress: string;
  /**
   * rewards_address is an address to distribute rewards to (bech32 encoded).
   * If not set (empty), rewards are not distributed for this contract.
   */
  rewardsAddress: string;
  /**
   * withdraw_to_wallet is a flag that defines if rewards should be immediately
   * withdrawn to the wallet instead of creating a rewards record to be lazily
   * withdrawn after.
   */
  withdrawToWallet: boolean;
}
/** BlockRewards defines block related rewards distribution data. */
export interface BlockRewards {
  /** height defines the block height. */
  height: bigint;
  /** inflation_rewards is the rewards to be distributed. */
  inflationRewards: Coin;
  /**
   * max_gas defines the maximum gas for the block that is used to distribute
   * inflation rewards (consensus parameter).
   */
  maxGas: bigint;
}
/** TxRewards defines transaction related rewards distribution data. */
export interface TxRewards {
  /**
   * tx_id is the tracking transaction ID (x/tracking is the data source for
   * this value).
   */
  txId: bigint;
  /** height defines the block height. */
  height: bigint;
  /** fee_rewards is the rewards to be distributed. */
  feeRewards: Coin[];
}
/**
 * RewardsRecord defines a record that is used to distribute rewards later (lazy
 * distribution). This record is being created by the x/rewards EndBlocker and
 * pruned after the rewards are distributed. An actual rewards x/bank transfer
 * might be triggered by a Tx (via CLI for example) or by a contract via WASM
 * bindings. For a contract to trigger rewards transfer, contract address must
 * be set as the rewards_address in a corresponding ContractMetadata.
 */
export interface RewardsRecord {
  /** id is the unique ID of the record. */
  id: bigint;
  /** rewards_address is the address to distribute rewards to (bech32 encoded). */
  rewardsAddress: string;
  /** rewards are the rewards to be transferred later. */
  rewards: Coin[];
  /** calculated_height defines the block height of rewards calculation event. */
  calculatedHeight: bigint;
  /** calculated_time defines the block time of rewards calculation event. */
  calculatedTime: Timestamp;
}
/** FlatFee defines the flat fee for a particular contract. */
export interface FlatFee {
  /** contract_address defines the contract address (bech32 encoded). */
  contractAddress: string;
  /** flat_fee defines the minimum flat fee set by the contract_owner */
  flatFee: Coin;
}
function createBaseParams(): Params {
  return {
    inflationRewardsRatio: "",
    txFeeRebateRatio: "",
    maxWithdrawRecords: BigInt(0),
    minPriceOfGas: DecCoin.fromPartial({}),
  };
}
export const Params = {
  typeUrl: "/archway.rewards.v1.Params",
  encode(
    message: Params,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.inflationRewardsRatio !== "") {
      writer.uint32(10).string(message.inflationRewardsRatio);
    }
    if (message.txFeeRebateRatio !== "") {
      writer.uint32(18).string(message.txFeeRebateRatio);
    }
    if (message.maxWithdrawRecords !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxWithdrawRecords);
    }
    if (message.minPriceOfGas !== undefined) {
      DecCoin.encode(message.minPriceOfGas, writer.uint32(34).fork()).ldelim();
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
          message.inflationRewardsRatio = reader.string();
          break;
        case 2:
          message.txFeeRebateRatio = reader.string();
          break;
        case 3:
          message.maxWithdrawRecords = reader.uint64();
          break;
        case 4:
          message.minPriceOfGas = DecCoin.decode(reader, reader.uint32());
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
    if (isSet(object.inflationRewardsRatio))
      obj.inflationRewardsRatio = String(object.inflationRewardsRatio);
    if (isSet(object.txFeeRebateRatio))
      obj.txFeeRebateRatio = String(object.txFeeRebateRatio);
    if (isSet(object.maxWithdrawRecords))
      obj.maxWithdrawRecords = BigInt(object.maxWithdrawRecords.toString());
    if (isSet(object.minPriceOfGas))
      obj.minPriceOfGas = DecCoin.fromJSON(object.minPriceOfGas);
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.inflationRewardsRatio !== undefined &&
      (obj.inflationRewardsRatio = message.inflationRewardsRatio);
    message.txFeeRebateRatio !== undefined &&
      (obj.txFeeRebateRatio = message.txFeeRebateRatio);
    message.maxWithdrawRecords !== undefined &&
      (obj.maxWithdrawRecords = (
        message.maxWithdrawRecords || BigInt(0)
      ).toString());
    message.minPriceOfGas !== undefined &&
      (obj.minPriceOfGas = message.minPriceOfGas
        ? DecCoin.toJSON(message.minPriceOfGas)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.inflationRewardsRatio = object.inflationRewardsRatio ?? "";
    message.txFeeRebateRatio = object.txFeeRebateRatio ?? "";
    if (
      object.maxWithdrawRecords !== undefined &&
      object.maxWithdrawRecords !== null
    ) {
      message.maxWithdrawRecords = BigInt(object.maxWithdrawRecords.toString());
    }
    if (object.minPriceOfGas !== undefined && object.minPriceOfGas !== null) {
      message.minPriceOfGas = DecCoin.fromPartial(object.minPriceOfGas);
    }
    return message;
  },
};
function createBaseContractMetadata(): ContractMetadata {
  return {
    contractAddress: "",
    ownerAddress: "",
    rewardsAddress: "",
    withdrawToWallet: false,
  };
}
export const ContractMetadata = {
  typeUrl: "/archway.rewards.v1.ContractMetadata",
  encode(
    message: ContractMetadata,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.ownerAddress !== "") {
      writer.uint32(18).string(message.ownerAddress);
    }
    if (message.rewardsAddress !== "") {
      writer.uint32(26).string(message.rewardsAddress);
    }
    if (message.withdrawToWallet === true) {
      writer.uint32(32).bool(message.withdrawToWallet);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ContractMetadata {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.ownerAddress = reader.string();
          break;
        case 3:
          message.rewardsAddress = reader.string();
          break;
        case 4:
          message.withdrawToWallet = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContractMetadata {
    const obj = createBaseContractMetadata();
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    if (isSet(object.ownerAddress))
      obj.ownerAddress = String(object.ownerAddress);
    if (isSet(object.rewardsAddress))
      obj.rewardsAddress = String(object.rewardsAddress);
    if (isSet(object.withdrawToWallet))
      obj.withdrawToWallet = Boolean(object.withdrawToWallet);
    return obj;
  },
  toJSON(message: ContractMetadata): JsonSafe<ContractMetadata> {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.ownerAddress !== undefined &&
      (obj.ownerAddress = message.ownerAddress);
    message.rewardsAddress !== undefined &&
      (obj.rewardsAddress = message.rewardsAddress);
    message.withdrawToWallet !== undefined &&
      (obj.withdrawToWallet = message.withdrawToWallet);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ContractMetadata>, I>>(
    object: I,
  ): ContractMetadata {
    const message = createBaseContractMetadata();
    message.contractAddress = object.contractAddress ?? "";
    message.ownerAddress = object.ownerAddress ?? "";
    message.rewardsAddress = object.rewardsAddress ?? "";
    message.withdrawToWallet = object.withdrawToWallet ?? false;
    return message;
  },
};
function createBaseBlockRewards(): BlockRewards {
  return {
    height: BigInt(0),
    inflationRewards: Coin.fromPartial({}),
    maxGas: BigInt(0),
  };
}
export const BlockRewards = {
  typeUrl: "/archway.rewards.v1.BlockRewards",
  encode(
    message: BlockRewards,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.inflationRewards !== undefined) {
      Coin.encode(message.inflationRewards, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxGas !== BigInt(0)) {
      writer.uint32(24).uint64(message.maxGas);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockRewards {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.inflationRewards = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.maxGas = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockRewards {
    const obj = createBaseBlockRewards();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.inflationRewards))
      obj.inflationRewards = Coin.fromJSON(object.inflationRewards);
    if (isSet(object.maxGas)) obj.maxGas = BigInt(object.maxGas.toString());
    return obj;
  },
  toJSON(message: BlockRewards): JsonSafe<BlockRewards> {
    const obj: any = {};
    message.height !== undefined &&
      (obj.height = (message.height || BigInt(0)).toString());
    message.inflationRewards !== undefined &&
      (obj.inflationRewards = message.inflationRewards
        ? Coin.toJSON(message.inflationRewards)
        : undefined);
    message.maxGas !== undefined &&
      (obj.maxGas = (message.maxGas || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BlockRewards>, I>>(
    object: I,
  ): BlockRewards {
    const message = createBaseBlockRewards();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    if (
      object.inflationRewards !== undefined &&
      object.inflationRewards !== null
    ) {
      message.inflationRewards = Coin.fromPartial(object.inflationRewards);
    }
    if (object.maxGas !== undefined && object.maxGas !== null) {
      message.maxGas = BigInt(object.maxGas.toString());
    }
    return message;
  },
};
function createBaseTxRewards(): TxRewards {
  return {
    txId: BigInt(0),
    height: BigInt(0),
    feeRewards: [],
  };
}
export const TxRewards = {
  typeUrl: "/archway.rewards.v1.TxRewards",
  encode(
    message: TxRewards,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.txId !== BigInt(0)) {
      writer.uint32(8).uint64(message.txId);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    for (const v of message.feeRewards) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxRewards {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txId = reader.uint64();
          break;
        case 2:
          message.height = reader.int64();
          break;
        case 3:
          message.feeRewards.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TxRewards {
    const obj = createBaseTxRewards();
    if (isSet(object.txId)) obj.txId = BigInt(object.txId.toString());
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (Array.isArray(object?.feeRewards))
      obj.feeRewards = object.feeRewards.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: TxRewards): JsonSafe<TxRewards> {
    const obj: any = {};
    message.txId !== undefined &&
      (obj.txId = (message.txId || BigInt(0)).toString());
    message.height !== undefined &&
      (obj.height = (message.height || BigInt(0)).toString());
    if (message.feeRewards) {
      obj.feeRewards = message.feeRewards.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.feeRewards = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TxRewards>, I>>(
    object: I,
  ): TxRewards {
    const message = createBaseTxRewards();
    if (object.txId !== undefined && object.txId !== null) {
      message.txId = BigInt(object.txId.toString());
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.feeRewards =
      object.feeRewards?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};
function createBaseRewardsRecord(): RewardsRecord {
  return {
    id: BigInt(0),
    rewardsAddress: "",
    rewards: [],
    calculatedHeight: BigInt(0),
    calculatedTime: Timestamp.fromPartial({}),
  };
}
export const RewardsRecord = {
  typeUrl: "/archway.rewards.v1.RewardsRecord",
  encode(
    message: RewardsRecord,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.rewardsAddress !== "") {
      writer.uint32(18).string(message.rewardsAddress);
    }
    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.calculatedHeight !== BigInt(0)) {
      writer.uint32(32).int64(message.calculatedHeight);
    }
    if (message.calculatedTime !== undefined) {
      Timestamp.encode(
        message.calculatedTime,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RewardsRecord {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardsRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.rewardsAddress = reader.string();
          break;
        case 3:
          message.rewards.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.calculatedHeight = reader.int64();
          break;
        case 5:
          message.calculatedTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RewardsRecord {
    const obj = createBaseRewardsRecord();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (isSet(object.rewardsAddress))
      obj.rewardsAddress = String(object.rewardsAddress);
    if (Array.isArray(object?.rewards))
      obj.rewards = object.rewards.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.calculatedHeight))
      obj.calculatedHeight = BigInt(object.calculatedHeight.toString());
    if (isSet(object.calculatedTime))
      obj.calculatedTime = fromJsonTimestamp(object.calculatedTime);
    return obj;
  },
  toJSON(message: RewardsRecord): JsonSafe<RewardsRecord> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.rewardsAddress !== undefined &&
      (obj.rewardsAddress = message.rewardsAddress);
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) =>
        e ? Coin.toJSON(e) : undefined,
      );
    } else {
      obj.rewards = [];
    }
    message.calculatedHeight !== undefined &&
      (obj.calculatedHeight = (
        message.calculatedHeight || BigInt(0)
      ).toString());
    message.calculatedTime !== undefined &&
      (obj.calculatedTime = fromTimestamp(
        message.calculatedTime,
      ).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RewardsRecord>, I>>(
    object: I,
  ): RewardsRecord {
    const message = createBaseRewardsRecord();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    message.rewardsAddress = object.rewardsAddress ?? "";
    message.rewards = object.rewards?.map((e) => Coin.fromPartial(e)) || [];
    if (
      object.calculatedHeight !== undefined &&
      object.calculatedHeight !== null
    ) {
      message.calculatedHeight = BigInt(object.calculatedHeight.toString());
    }
    if (object.calculatedTime !== undefined && object.calculatedTime !== null) {
      message.calculatedTime = Timestamp.fromPartial(object.calculatedTime);
    }
    return message;
  },
};
function createBaseFlatFee(): FlatFee {
  return {
    contractAddress: "",
    flatFee: Coin.fromPartial({}),
  };
}
export const FlatFee = {
  typeUrl: "/archway.rewards.v1.FlatFee",
  encode(
    message: FlatFee,
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
  decode(input: BinaryReader | Uint8Array, length?: number): FlatFee {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlatFee();
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
  fromJSON(object: any): FlatFee {
    const obj = createBaseFlatFee();
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    if (isSet(object.flatFee)) obj.flatFee = Coin.fromJSON(object.flatFee);
    return obj;
  },
  toJSON(message: FlatFee): JsonSafe<FlatFee> {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.flatFee !== undefined &&
      (obj.flatFee = message.flatFee
        ? Coin.toJSON(message.flatFee)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FlatFee>, I>>(object: I): FlatFee {
    const message = createBaseFlatFee();
    message.contractAddress = object.contractAddress ?? "";
    if (object.flatFee !== undefined && object.flatFee !== null) {
      message.flatFee = Coin.fromPartial(object.flatFee);
    }
    return message;
  },
};
