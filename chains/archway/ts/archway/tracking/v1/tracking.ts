/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "archway.tracking.v1";
/** ContractOperation denotes which operation consumed gas. */
export enum ContractOperation {
  /** CONTRACT_OPERATION_UNSPECIFIED - Invalid or unknown operation */
  CONTRACT_OPERATION_UNSPECIFIED = 0,
  /** CONTRACT_OPERATION_INSTANTIATION - Instantiate operation */
  CONTRACT_OPERATION_INSTANTIATION = 1,
  /** CONTRACT_OPERATION_EXECUTION - Execute operation */
  CONTRACT_OPERATION_EXECUTION = 2,
  /** CONTRACT_OPERATION_QUERY - Query */
  CONTRACT_OPERATION_QUERY = 3,
  /** CONTRACT_OPERATION_MIGRATE - Migrate operation */
  CONTRACT_OPERATION_MIGRATE = 4,
  /** CONTRACT_OPERATION_IBC - IBC operations */
  CONTRACT_OPERATION_IBC = 5,
  /** CONTRACT_OPERATION_SUDO - Sudo operation */
  CONTRACT_OPERATION_SUDO = 6,
  /** CONTRACT_OPERATION_REPLY - Reply callback operation */
  CONTRACT_OPERATION_REPLY = 7,
  UNRECOGNIZED = -1,
}
export function contractOperationFromJSON(object: any): ContractOperation {
  switch (object) {
    case 0:
    case "CONTRACT_OPERATION_UNSPECIFIED":
      return ContractOperation.CONTRACT_OPERATION_UNSPECIFIED;
    case 1:
    case "CONTRACT_OPERATION_INSTANTIATION":
      return ContractOperation.CONTRACT_OPERATION_INSTANTIATION;
    case 2:
    case "CONTRACT_OPERATION_EXECUTION":
      return ContractOperation.CONTRACT_OPERATION_EXECUTION;
    case 3:
    case "CONTRACT_OPERATION_QUERY":
      return ContractOperation.CONTRACT_OPERATION_QUERY;
    case 4:
    case "CONTRACT_OPERATION_MIGRATE":
      return ContractOperation.CONTRACT_OPERATION_MIGRATE;
    case 5:
    case "CONTRACT_OPERATION_IBC":
      return ContractOperation.CONTRACT_OPERATION_IBC;
    case 6:
    case "CONTRACT_OPERATION_SUDO":
      return ContractOperation.CONTRACT_OPERATION_SUDO;
    case 7:
    case "CONTRACT_OPERATION_REPLY":
      return ContractOperation.CONTRACT_OPERATION_REPLY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ContractOperation.UNRECOGNIZED;
  }
}
export function contractOperationToJSON(object: ContractOperation): string {
  switch (object) {
    case ContractOperation.CONTRACT_OPERATION_UNSPECIFIED:
      return "CONTRACT_OPERATION_UNSPECIFIED";
    case ContractOperation.CONTRACT_OPERATION_INSTANTIATION:
      return "CONTRACT_OPERATION_INSTANTIATION";
    case ContractOperation.CONTRACT_OPERATION_EXECUTION:
      return "CONTRACT_OPERATION_EXECUTION";
    case ContractOperation.CONTRACT_OPERATION_QUERY:
      return "CONTRACT_OPERATION_QUERY";
    case ContractOperation.CONTRACT_OPERATION_MIGRATE:
      return "CONTRACT_OPERATION_MIGRATE";
    case ContractOperation.CONTRACT_OPERATION_IBC:
      return "CONTRACT_OPERATION_IBC";
    case ContractOperation.CONTRACT_OPERATION_SUDO:
      return "CONTRACT_OPERATION_SUDO";
    case ContractOperation.CONTRACT_OPERATION_REPLY:
      return "CONTRACT_OPERATION_REPLY";
    case ContractOperation.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * TxInfo keeps a transaction gas tracking data.
 * Object is being created at the module EndBlocker.
 */
export interface TxInfo {
  /** id defines the unique transaction ID. */
  id: bigint;
  /** height defines the block height of the transaction. */
  height: bigint;
  /**
   * total_gas defines total gas consumption by the transaction.
   * It is the sum of gas consumed by all contract operations (VM + SDK gas).
   */
  totalGas: bigint;
}
/**
 * ContractOperationInfo keeps a single contract operation gas consumption data.
 * Object is being created by the IngestGasRecord call from the wasmd.
 */
export interface ContractOperationInfo {
  /** id defines the unique operation ID. */
  id: bigint;
  /** tx_id defines a transaction ID operation relates to (TxInfo.id). */
  txId: bigint;
  /** contract_address defines the contract address operation relates to. */
  contractAddress: string;
  /** operation_type defines the gas consumption type. */
  operationType: ContractOperation;
  /**
   * vm_gas is the gas consumption reported by the WASM VM.
   * Value is adjusted by this module (CalculateUpdatedGas func).
   */
  vmGas: bigint;
  /**
   * sdk_gas is the gas consumption reported by the SDK gas meter and the WASM
   * GasRegister (cost of Execute/Query/etc). Value is adjusted by this module
   * (CalculateUpdatedGas func).
   */
  sdkGas: bigint;
}
/** BlockTracking is the tracking information for a block. */
export interface BlockTracking {
  /** txs defines the list of transactions tracked in the block. */
  txs: TxTracking[];
}
/** TxTracking is the tracking information for a single transaction. */
export interface TxTracking {
  /** info defines the transaction details. */
  info: TxInfo;
  /**
   * contract_operations defines the list of contract operations consumed by the
   * transaction.
   */
  contractOperations: ContractOperationInfo[];
}
function createBaseTxInfo(): TxInfo {
  return {
    id: BigInt(0),
    height: BigInt(0),
    totalGas: BigInt(0),
  };
}
export const TxInfo = {
  typeUrl: "/archway.tracking.v1.TxInfo",
  encode(
    message: TxInfo,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    if (message.totalGas !== BigInt(0)) {
      writer.uint32(24).uint64(message.totalGas);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxInfo {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.height = reader.int64();
          break;
        case 3:
          message.totalGas = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TxInfo {
    const obj = createBaseTxInfo();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.totalGas))
      obj.totalGas = BigInt(object.totalGas.toString());
    return obj;
  },
  toJSON(message: TxInfo): JsonSafe<TxInfo> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.height !== undefined &&
      (obj.height = (message.height || BigInt(0)).toString());
    message.totalGas !== undefined &&
      (obj.totalGas = (message.totalGas || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TxInfo>, I>>(object: I): TxInfo {
    const message = createBaseTxInfo();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    if (object.totalGas !== undefined && object.totalGas !== null) {
      message.totalGas = BigInt(object.totalGas.toString());
    }
    return message;
  },
};
function createBaseContractOperationInfo(): ContractOperationInfo {
  return {
    id: BigInt(0),
    txId: BigInt(0),
    contractAddress: "",
    operationType: 0,
    vmGas: BigInt(0),
    sdkGas: BigInt(0),
  };
}
export const ContractOperationInfo = {
  typeUrl: "/archway.tracking.v1.ContractOperationInfo",
  encode(
    message: ContractOperationInfo,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.txId !== BigInt(0)) {
      writer.uint32(16).uint64(message.txId);
    }
    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }
    if (message.operationType !== 0) {
      writer.uint32(32).int32(message.operationType);
    }
    if (message.vmGas !== BigInt(0)) {
      writer.uint32(40).uint64(message.vmGas);
    }
    if (message.sdkGas !== BigInt(0)) {
      writer.uint32(48).uint64(message.sdkGas);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): ContractOperationInfo {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContractOperationInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.txId = reader.uint64();
          break;
        case 3:
          message.contractAddress = reader.string();
          break;
        case 4:
          message.operationType = reader.int32() as any;
          break;
        case 5:
          message.vmGas = reader.uint64();
          break;
        case 6:
          message.sdkGas = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ContractOperationInfo {
    const obj = createBaseContractOperationInfo();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (isSet(object.txId)) obj.txId = BigInt(object.txId.toString());
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    if (isSet(object.operationType))
      obj.operationType = contractOperationFromJSON(object.operationType);
    if (isSet(object.vmGas)) obj.vmGas = BigInt(object.vmGas.toString());
    if (isSet(object.sdkGas)) obj.sdkGas = BigInt(object.sdkGas.toString());
    return obj;
  },
  toJSON(message: ContractOperationInfo): JsonSafe<ContractOperationInfo> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.txId !== undefined &&
      (obj.txId = (message.txId || BigInt(0)).toString());
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.operationType !== undefined &&
      (obj.operationType = contractOperationToJSON(message.operationType));
    message.vmGas !== undefined &&
      (obj.vmGas = (message.vmGas || BigInt(0)).toString());
    message.sdkGas !== undefined &&
      (obj.sdkGas = (message.sdkGas || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ContractOperationInfo>, I>>(
    object: I,
  ): ContractOperationInfo {
    const message = createBaseContractOperationInfo();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    if (object.txId !== undefined && object.txId !== null) {
      message.txId = BigInt(object.txId.toString());
    }
    message.contractAddress = object.contractAddress ?? "";
    message.operationType = object.operationType ?? 0;
    if (object.vmGas !== undefined && object.vmGas !== null) {
      message.vmGas = BigInt(object.vmGas.toString());
    }
    if (object.sdkGas !== undefined && object.sdkGas !== null) {
      message.sdkGas = BigInt(object.sdkGas.toString());
    }
    return message;
  },
};
function createBaseBlockTracking(): BlockTracking {
  return {
    txs: [],
  };
}
export const BlockTracking = {
  typeUrl: "/archway.tracking.v1.BlockTracking",
  encode(
    message: BlockTracking,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.txs) {
      TxTracking.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockTracking {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockTracking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(TxTracking.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockTracking {
    const obj = createBaseBlockTracking();
    if (Array.isArray(object?.txs))
      obj.txs = object.txs.map((e: any) => TxTracking.fromJSON(e));
    return obj;
  },
  toJSON(message: BlockTracking): JsonSafe<BlockTracking> {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map((e) => (e ? TxTracking.toJSON(e) : undefined));
    } else {
      obj.txs = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BlockTracking>, I>>(
    object: I,
  ): BlockTracking {
    const message = createBaseBlockTracking();
    message.txs = object.txs?.map((e) => TxTracking.fromPartial(e)) || [];
    return message;
  },
};
function createBaseTxTracking(): TxTracking {
  return {
    info: TxInfo.fromPartial({}),
    contractOperations: [],
  };
}
export const TxTracking = {
  typeUrl: "/archway.tracking.v1.TxTracking",
  encode(
    message: TxTracking,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.info !== undefined) {
      TxInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.contractOperations) {
      ContractOperationInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxTracking {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxTracking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = TxInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.contractOperations.push(
            ContractOperationInfo.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TxTracking {
    const obj = createBaseTxTracking();
    if (isSet(object.info)) obj.info = TxInfo.fromJSON(object.info);
    if (Array.isArray(object?.contractOperations))
      obj.contractOperations = object.contractOperations.map((e: any) =>
        ContractOperationInfo.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: TxTracking): JsonSafe<TxTracking> {
    const obj: any = {};
    message.info !== undefined &&
      (obj.info = message.info ? TxInfo.toJSON(message.info) : undefined);
    if (message.contractOperations) {
      obj.contractOperations = message.contractOperations.map((e) =>
        e ? ContractOperationInfo.toJSON(e) : undefined,
      );
    } else {
      obj.contractOperations = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TxTracking>, I>>(
    object: I,
  ): TxTracking {
    const message = createBaseTxTracking();
    if (object.info !== undefined && object.info !== null) {
      message.info = TxInfo.fromPartial(object.info);
    }
    message.contractOperations =
      object.contractOperations?.map((e) =>
        ContractOperationInfo.fromPartial(e),
      ) || [];
    return message;
  },
};
