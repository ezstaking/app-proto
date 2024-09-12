/* eslint-disable */
import {
  Params,
  ContractMetadata,
  BlockRewards,
  TxRewards,
  RewardsRecord,
  FlatFee,
} from "./rewards";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "archway.rewards.v1";
/** GenesisState defines the initial state of the tracking module. */
export interface GenesisState {
  /** params defines all the module parameters. */
  params: Params;
  /** contracts_metadata defines a list of all contracts metadata. */
  contractsMetadata: ContractMetadata[];
  /** block_rewards defines a list of all block rewards objects. */
  blockRewards: BlockRewards[];
  /** tx_rewards defines a list of all tx rewards objects. */
  txRewards: TxRewards[];
  /** min_consensus_fee defines the minimum gas unit price. */
  minConsensusFee: DecCoin;
  /** rewards_record_last_id defines the last unique ID for a RewardsRecord objs. */
  rewardsRecordLastId: bigint;
  /**
   * rewards_records defines a list of all active (undistributed) rewards
   * records.
   */
  rewardsRecords: RewardsRecord[];
  /** flat_fees defines a list of contract flat fee. */
  flatFees: FlatFee[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    contractsMetadata: [],
    blockRewards: [],
    txRewards: [],
    minConsensusFee: DecCoin.fromPartial({}),
    rewardsRecordLastId: BigInt(0),
    rewardsRecords: [],
    flatFees: [],
  };
}
export const GenesisState = {
  typeUrl: "/archway.rewards.v1.GenesisState",
  encode(
    message: GenesisState,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.contractsMetadata) {
      ContractMetadata.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.blockRewards) {
      BlockRewards.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.txRewards) {
      TxRewards.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.minConsensusFee !== undefined) {
      DecCoin.encode(
        message.minConsensusFee,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.rewardsRecordLastId !== BigInt(0)) {
      writer.uint32(48).uint64(message.rewardsRecordLastId);
    }
    for (const v of message.rewardsRecords) {
      RewardsRecord.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.flatFees) {
      FlatFee.encode(v!, writer.uint32(66).fork()).ldelim();
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
          message.contractsMetadata.push(
            ContractMetadata.decode(reader, reader.uint32()),
          );
          break;
        case 3:
          message.blockRewards.push(
            BlockRewards.decode(reader, reader.uint32()),
          );
          break;
        case 4:
          message.txRewards.push(TxRewards.decode(reader, reader.uint32()));
          break;
        case 5:
          message.minConsensusFee = DecCoin.decode(reader, reader.uint32());
          break;
        case 6:
          message.rewardsRecordLastId = reader.uint64();
          break;
        case 7:
          message.rewardsRecords.push(
            RewardsRecord.decode(reader, reader.uint32()),
          );
          break;
        case 8:
          message.flatFees.push(FlatFee.decode(reader, reader.uint32()));
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
    if (Array.isArray(object?.contractsMetadata))
      obj.contractsMetadata = object.contractsMetadata.map((e: any) =>
        ContractMetadata.fromJSON(e),
      );
    if (Array.isArray(object?.blockRewards))
      obj.blockRewards = object.blockRewards.map((e: any) =>
        BlockRewards.fromJSON(e),
      );
    if (Array.isArray(object?.txRewards))
      obj.txRewards = object.txRewards.map((e: any) => TxRewards.fromJSON(e));
    if (isSet(object.minConsensusFee))
      obj.minConsensusFee = DecCoin.fromJSON(object.minConsensusFee);
    if (isSet(object.rewardsRecordLastId))
      obj.rewardsRecordLastId = BigInt(object.rewardsRecordLastId.toString());
    if (Array.isArray(object?.rewardsRecords))
      obj.rewardsRecords = object.rewardsRecords.map((e: any) =>
        RewardsRecord.fromJSON(e),
      );
    if (Array.isArray(object?.flatFees))
      obj.flatFees = object.flatFees.map((e: any) => FlatFee.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.contractsMetadata) {
      obj.contractsMetadata = message.contractsMetadata.map((e) =>
        e ? ContractMetadata.toJSON(e) : undefined,
      );
    } else {
      obj.contractsMetadata = [];
    }
    if (message.blockRewards) {
      obj.blockRewards = message.blockRewards.map((e) =>
        e ? BlockRewards.toJSON(e) : undefined,
      );
    } else {
      obj.blockRewards = [];
    }
    if (message.txRewards) {
      obj.txRewards = message.txRewards.map((e) =>
        e ? TxRewards.toJSON(e) : undefined,
      );
    } else {
      obj.txRewards = [];
    }
    message.minConsensusFee !== undefined &&
      (obj.minConsensusFee = message.minConsensusFee
        ? DecCoin.toJSON(message.minConsensusFee)
        : undefined);
    message.rewardsRecordLastId !== undefined &&
      (obj.rewardsRecordLastId = (
        message.rewardsRecordLastId || BigInt(0)
      ).toString());
    if (message.rewardsRecords) {
      obj.rewardsRecords = message.rewardsRecords.map((e) =>
        e ? RewardsRecord.toJSON(e) : undefined,
      );
    } else {
      obj.rewardsRecords = [];
    }
    if (message.flatFees) {
      obj.flatFees = message.flatFees.map((e) =>
        e ? FlatFee.toJSON(e) : undefined,
      );
    } else {
      obj.flatFees = [];
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
    message.contractsMetadata =
      object.contractsMetadata?.map((e) => ContractMetadata.fromPartial(e)) ||
      [];
    message.blockRewards =
      object.blockRewards?.map((e) => BlockRewards.fromPartial(e)) || [];
    message.txRewards =
      object.txRewards?.map((e) => TxRewards.fromPartial(e)) || [];
    if (
      object.minConsensusFee !== undefined &&
      object.minConsensusFee !== null
    ) {
      message.minConsensusFee = DecCoin.fromPartial(object.minConsensusFee);
    }
    if (
      object.rewardsRecordLastId !== undefined &&
      object.rewardsRecordLastId !== null
    ) {
      message.rewardsRecordLastId = BigInt(
        object.rewardsRecordLastId.toString(),
      );
    }
    message.rewardsRecords =
      object.rewardsRecords?.map((e) => RewardsRecord.fromPartial(e)) || [];
    message.flatFees =
      object.flatFees?.map((e) => FlatFee.fromPartial(e)) || [];
    return message;
  },
};
