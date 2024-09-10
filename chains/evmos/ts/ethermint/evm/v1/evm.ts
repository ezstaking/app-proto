/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import {
  isSet,
  DeepPartial,
  Exact,
  bytesFromBase64,
  base64FromBytes,
} from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "ethermint.evm.v1";
/** AccessType defines the types of permissions for the operations */
export enum AccessType {
  /** ACCESS_TYPE_PERMISSIONLESS - ACCESS_TYPE_PERMISSIONLESS does not restrict the operation to anyone */
  ACCESS_TYPE_PERMISSIONLESS = 0,
  /** ACCESS_TYPE_RESTRICTED - ACCESS_TYPE_RESTRICTED restrict the operation to anyone */
  ACCESS_TYPE_RESTRICTED = 1,
  /** ACCESS_TYPE_PERMISSIONED - ACCESS_TYPE_PERMISSIONED only allows the operation for specific addresses */
  ACCESS_TYPE_PERMISSIONED = 2,
  UNRECOGNIZED = -1,
}
export function accessTypeFromJSON(object: any): AccessType {
  switch (object) {
    case 0:
    case "ACCESS_TYPE_PERMISSIONLESS":
      return AccessType.ACCESS_TYPE_PERMISSIONLESS;
    case 1:
    case "ACCESS_TYPE_RESTRICTED":
      return AccessType.ACCESS_TYPE_RESTRICTED;
    case 2:
    case "ACCESS_TYPE_PERMISSIONED":
      return AccessType.ACCESS_TYPE_PERMISSIONED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccessType.UNRECOGNIZED;
  }
}
export function accessTypeToJSON(object: AccessType): string {
  switch (object) {
    case AccessType.ACCESS_TYPE_PERMISSIONLESS:
      return "ACCESS_TYPE_PERMISSIONLESS";
    case AccessType.ACCESS_TYPE_RESTRICTED:
      return "ACCESS_TYPE_RESTRICTED";
    case AccessType.ACCESS_TYPE_PERMISSIONED:
      return "ACCESS_TYPE_PERMISSIONED";
    case AccessType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Params defines the EVM module parameters */
export interface Params {
  /**
   * evm_denom represents the token denomination used to run the EVM state
   * transitions.
   */
  evmDenom: string;
  /** extra_eips defines the additional EIPs for the vm.Config */
  extraEips: string[];
  /** chain_config defines the EVM chain configuration parameters */
  chainConfig: ChainConfig;
  /**
   * allow_unprotected_txs defines if replay-protected (i.e non EIP155
   * signed) transactions can be executed on the state machine.
   */
  allowUnprotectedTxs: boolean;
  /** evm_channels is the list of channel identifiers from EVM compatible chains */
  evmChannels: string[];
  /** access_control defines the permission policy of the EVM */
  accessControl: AccessControl;
  /**
   * active_static_precompiles defines the slice of hex addresses of the precompiled
   * contracts that are active
   */
  activeStaticPrecompiles: string[];
}
/**
 * AccessControl defines the permission policy of the EVM
 * for creating and calling contracts
 */
export interface AccessControl {
  /** create defines the permission policy for creating contracts */
  create: AccessControlType;
  /** call defines the permission policy for calling contracts */
  call: AccessControlType;
}
/** AccessControlType defines the permission type for policies */
export interface AccessControlType {
  /** access_type defines which type of permission is required for the operation */
  accessType: AccessType;
  /**
   * access_control_list defines defines different things depending on the AccessType:
   * - ACCESS_TYPE_PERMISSIONLESS: list of addresses that are blocked from performing the operation
   * - ACCESS_TYPE_RESTRICTED: ignored
   * - ACCESS_TYPE_PERMISSIONED: list of addresses that are allowed to perform the operation
   */
  accessControlList: string[];
}
/**
 * ChainConfig defines the Ethereum ChainConfig parameters using *sdk.Int values
 * instead of *big.Int.
 */
export interface ChainConfig {
  /** homestead_block switch (nil no fork, 0 = already homestead) */
  homesteadBlock: string;
  /** dao_fork_block corresponds to TheDAO hard-fork switch block (nil no fork) */
  daoForkBlock: string;
  /** dao_fork_support defines whether the nodes supports or opposes the DAO hard-fork */
  daoForkSupport: boolean;
  /**
   * eip150_block: EIP150 implements the Gas price changes
   * (https://github.com/ethereum/EIPs/issues/150) EIP150 HF block (nil no fork)
   */
  eip150Block: string;
  /** eip150_hash: EIP150 HF hash (needed for header only clients as only gas pricing changed) */
  eip150Hash: string;
  /** eip155_block: EIP155Block HF block */
  eip155Block: string;
  /** eip158_block: EIP158 HF block */
  eip158Block: string;
  /** byzantium_block: Byzantium switch block (nil no fork, 0 = already on byzantium) */
  byzantiumBlock: string;
  /** constantinople_block: Constantinople switch block (nil no fork, 0 = already activated) */
  constantinopleBlock: string;
  /** petersburg_block: Petersburg switch block (nil same as Constantinople) */
  petersburgBlock: string;
  /** istanbul_block: Istanbul switch block (nil no fork, 0 = already on istanbul) */
  istanbulBlock: string;
  /** muir_glacier_block: Eip-2384 (bomb delay) switch block (nil no fork, 0 = already activated) */
  muirGlacierBlock: string;
  /** berlin_block: Berlin switch block (nil = no fork, 0 = already on berlin) */
  berlinBlock: string;
  /** london_block: London switch block (nil = no fork, 0 = already on london) */
  londonBlock: string;
  /** arrow_glacier_block: Eip-4345 (bomb delay) switch block (nil = no fork, 0 = already activated) */
  arrowGlacierBlock: string;
  /** gray_glacier_block: EIP-5133 (bomb delay) switch block (nil = no fork, 0 = already activated) */
  grayGlacierBlock: string;
  /** merge_netsplit_block: Virtual fork after The Merge to use as a network splitter */
  mergeNetsplitBlock: string;
  /** shanghai_block switch block (nil = no fork, 0 = already on shanghai) */
  shanghaiBlock: string;
  /** cancun_block switch block (nil = no fork, 0 = already on cancun) */
  cancunBlock: string;
}
/** State represents a single Storage key value pair item. */
export interface State {
  /** key is the stored key */
  key: string;
  /** value is the stored value for the given key */
  value: string;
}
/**
 * TransactionLogs define the logs generated from a transaction execution
 * with a given hash. It it used for import/export data as transactions are not
 * persisted on blockchain state after an upgrade.
 */
export interface TransactionLogs {
  /** hash of the transaction */
  hash: string;
  /** logs is an array of Logs for the given transaction hash */
  logs: Log[];
}
/**
 * Log represents an protobuf compatible Ethereum Log that defines a contract
 * log event. These events are generated by the LOG opcode and stored/indexed by
 * the node.
 *
 * NOTE: address, topics and data are consensus fields. The rest of the fields
 * are derived, i.e. filled in by the nodes, but not secured by consensus.
 */
export interface Log {
  /** address of the contract that generated the event */
  address: string;
  /** topics is a list of topics provided by the contract. */
  topics: string[];
  /** data which is supplied by the contract, usually ABI-encoded */
  data: Uint8Array;
  /** block_number of the block in which the transaction was included */
  blockNumber: bigint;
  /** tx_hash is the transaction hash */
  txHash: string;
  /** tx_index of the transaction in the block */
  txIndex: bigint;
  /** block_hash of the block in which the transaction was included */
  blockHash: string;
  /** index of the log in the block */
  index: bigint;
  /**
   * removed is true if this log was reverted due to a chain
   * reorganisation. You must pay attention to this field if you receive logs
   * through a filter query.
   */
  removed: boolean;
}
/** TxResult stores results of Tx execution. */
export interface TxResult {
  /**
   * contract_address contains the ethereum address of the created contract (if
   * any). If the state transition is an evm.Call, the contract address will be
   * empty.
   */
  contractAddress: string;
  /** bloom represents the bloom filter bytes */
  bloom: Uint8Array;
  /**
   * tx_logs contains the transaction hash and the proto-compatible ethereum
   * logs.
   */
  txLogs: TransactionLogs;
  /** ret defines the bytes from the execution. */
  ret: Uint8Array;
  /** reverted flag is set to true when the call has been reverted */
  reverted: boolean;
  /** gas_used notes the amount of gas consumed while execution */
  gasUsed: bigint;
}
/** AccessTuple is the element type of an access list. */
export interface AccessTuple {
  /** address is a hex formatted ethereum address */
  address: string;
  /** storage_keys are hex formatted hashes of the storage keys */
  storageKeys: string[];
}
/** TraceConfig holds extra parameters to trace functions. */
export interface TraceConfig {
  /** tracer is a custom javascript tracer */
  tracer: string;
  /**
   * timeout overrides the default timeout of 5 seconds for JavaScript-based tracing
   * calls
   */
  timeout: string;
  /** reexec defines the number of blocks the tracer is willing to go back */
  reexec: bigint;
  /** disable_stack switches stack capture */
  disableStack: boolean;
  /** disable_storage switches storage capture */
  disableStorage: boolean;
  /** debug can be used to print output during capture end */
  debug: boolean;
  /** limit defines the maximum length of output, but zero means unlimited */
  limit: number;
  /** overrides can be used to execute a trace using future fork rules */
  overrides?: ChainConfig;
  /** enable_memory switches memory capture */
  enableMemory: boolean;
  /** enable_return_data switches the capture of return data */
  enableReturnData: boolean;
  /** tracer_json_config configures the tracer using a JSON string */
  tracerJsonConfig: string;
}
function createBaseParams(): Params {
  return {
    evmDenom: "",
    extraEips: [],
    chainConfig: ChainConfig.fromPartial({}),
    allowUnprotectedTxs: false,
    evmChannels: [],
    accessControl: AccessControl.fromPartial({}),
    activeStaticPrecompiles: [],
  };
}
export const Params = {
  typeUrl: "/ethermint.evm.v1.Params",
  encode(
    message: Params,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.evmDenom !== "") {
      writer.uint32(10).string(message.evmDenom);
    }
    for (const v of message.extraEips) {
      writer.uint32(34).string(v!);
    }
    if (message.chainConfig !== undefined) {
      ChainConfig.encode(
        message.chainConfig,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.allowUnprotectedTxs === true) {
      writer.uint32(48).bool(message.allowUnprotectedTxs);
    }
    for (const v of message.evmChannels) {
      writer.uint32(66).string(v!);
    }
    if (message.accessControl !== undefined) {
      AccessControl.encode(
        message.accessControl,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    for (const v of message.activeStaticPrecompiles) {
      writer.uint32(82).string(v!);
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
          message.evmDenom = reader.string();
          break;
        case 4:
          message.extraEips.push(reader.string());
          break;
        case 5:
          message.chainConfig = ChainConfig.decode(reader, reader.uint32());
          break;
        case 6:
          message.allowUnprotectedTxs = reader.bool();
          break;
        case 8:
          message.evmChannels.push(reader.string());
          break;
        case 9:
          message.accessControl = AccessControl.decode(reader, reader.uint32());
          break;
        case 10:
          message.activeStaticPrecompiles.push(reader.string());
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
    if (isSet(object.evmDenom)) obj.evmDenom = String(object.evmDenom);
    if (Array.isArray(object?.extraEips))
      obj.extraEips = object.extraEips.map((e: any) => String(e));
    if (isSet(object.chainConfig))
      obj.chainConfig = ChainConfig.fromJSON(object.chainConfig);
    if (isSet(object.allowUnprotectedTxs))
      obj.allowUnprotectedTxs = Boolean(object.allowUnprotectedTxs);
    if (Array.isArray(object?.evmChannels))
      obj.evmChannels = object.evmChannels.map((e: any) => String(e));
    if (isSet(object.accessControl))
      obj.accessControl = AccessControl.fromJSON(object.accessControl);
    if (Array.isArray(object?.activeStaticPrecompiles))
      obj.activeStaticPrecompiles = object.activeStaticPrecompiles.map(
        (e: any) => String(e),
      );
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.evmDenom !== undefined && (obj.evmDenom = message.evmDenom);
    if (message.extraEips) {
      obj.extraEips = message.extraEips.map((e) => e);
    } else {
      obj.extraEips = [];
    }
    message.chainConfig !== undefined &&
      (obj.chainConfig = message.chainConfig
        ? ChainConfig.toJSON(message.chainConfig)
        : undefined);
    message.allowUnprotectedTxs !== undefined &&
      (obj.allowUnprotectedTxs = message.allowUnprotectedTxs);
    if (message.evmChannels) {
      obj.evmChannels = message.evmChannels.map((e) => e);
    } else {
      obj.evmChannels = [];
    }
    message.accessControl !== undefined &&
      (obj.accessControl = message.accessControl
        ? AccessControl.toJSON(message.accessControl)
        : undefined);
    if (message.activeStaticPrecompiles) {
      obj.activeStaticPrecompiles = message.activeStaticPrecompiles.map(
        (e) => e,
      );
    } else {
      obj.activeStaticPrecompiles = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.evmDenom = object.evmDenom ?? "";
    message.extraEips = object.extraEips?.map((e) => e) || [];
    if (object.chainConfig !== undefined && object.chainConfig !== null) {
      message.chainConfig = ChainConfig.fromPartial(object.chainConfig);
    }
    message.allowUnprotectedTxs = object.allowUnprotectedTxs ?? false;
    message.evmChannels = object.evmChannels?.map((e) => e) || [];
    if (object.accessControl !== undefined && object.accessControl !== null) {
      message.accessControl = AccessControl.fromPartial(object.accessControl);
    }
    message.activeStaticPrecompiles =
      object.activeStaticPrecompiles?.map((e) => e) || [];
    return message;
  },
};
function createBaseAccessControl(): AccessControl {
  return {
    create: AccessControlType.fromPartial({}),
    call: AccessControlType.fromPartial({}),
  };
}
export const AccessControl = {
  typeUrl: "/ethermint.evm.v1.AccessControl",
  encode(
    message: AccessControl,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.create !== undefined) {
      AccessControlType.encode(
        message.create,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.call !== undefined) {
      AccessControlType.encode(message.call, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccessControl {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessControl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.create = AccessControlType.decode(reader, reader.uint32());
          break;
        case 2:
          message.call = AccessControlType.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccessControl {
    const obj = createBaseAccessControl();
    if (isSet(object.create))
      obj.create = AccessControlType.fromJSON(object.create);
    if (isSet(object.call)) obj.call = AccessControlType.fromJSON(object.call);
    return obj;
  },
  toJSON(message: AccessControl): JsonSafe<AccessControl> {
    const obj: any = {};
    message.create !== undefined &&
      (obj.create = message.create
        ? AccessControlType.toJSON(message.create)
        : undefined);
    message.call !== undefined &&
      (obj.call = message.call
        ? AccessControlType.toJSON(message.call)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AccessControl>, I>>(
    object: I,
  ): AccessControl {
    const message = createBaseAccessControl();
    if (object.create !== undefined && object.create !== null) {
      message.create = AccessControlType.fromPartial(object.create);
    }
    if (object.call !== undefined && object.call !== null) {
      message.call = AccessControlType.fromPartial(object.call);
    }
    return message;
  },
};
function createBaseAccessControlType(): AccessControlType {
  return {
    accessType: 0,
    accessControlList: [],
  };
}
export const AccessControlType = {
  typeUrl: "/ethermint.evm.v1.AccessControlType",
  encode(
    message: AccessControlType,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.accessType !== 0) {
      writer.uint32(8).int32(message.accessType);
    }
    for (const v of message.accessControlList) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccessControlType {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessControlType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accessType = reader.int32() as any;
          break;
        case 2:
          message.accessControlList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccessControlType {
    const obj = createBaseAccessControlType();
    if (isSet(object.accessType))
      obj.accessType = accessTypeFromJSON(object.accessType);
    if (Array.isArray(object?.accessControlList))
      obj.accessControlList = object.accessControlList.map((e: any) =>
        String(e),
      );
    return obj;
  },
  toJSON(message: AccessControlType): JsonSafe<AccessControlType> {
    const obj: any = {};
    message.accessType !== undefined &&
      (obj.accessType = accessTypeToJSON(message.accessType));
    if (message.accessControlList) {
      obj.accessControlList = message.accessControlList.map((e) => e);
    } else {
      obj.accessControlList = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AccessControlType>, I>>(
    object: I,
  ): AccessControlType {
    const message = createBaseAccessControlType();
    message.accessType = object.accessType ?? 0;
    message.accessControlList = object.accessControlList?.map((e) => e) || [];
    return message;
  },
};
function createBaseChainConfig(): ChainConfig {
  return {
    homesteadBlock: "",
    daoForkBlock: "",
    daoForkSupport: false,
    eip150Block: "",
    eip150Hash: "",
    eip155Block: "",
    eip158Block: "",
    byzantiumBlock: "",
    constantinopleBlock: "",
    petersburgBlock: "",
    istanbulBlock: "",
    muirGlacierBlock: "",
    berlinBlock: "",
    londonBlock: "",
    arrowGlacierBlock: "",
    grayGlacierBlock: "",
    mergeNetsplitBlock: "",
    shanghaiBlock: "",
    cancunBlock: "",
  };
}
export const ChainConfig = {
  typeUrl: "/ethermint.evm.v1.ChainConfig",
  encode(
    message: ChainConfig,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.homesteadBlock !== "") {
      writer.uint32(10).string(message.homesteadBlock);
    }
    if (message.daoForkBlock !== "") {
      writer.uint32(18).string(message.daoForkBlock);
    }
    if (message.daoForkSupport === true) {
      writer.uint32(24).bool(message.daoForkSupport);
    }
    if (message.eip150Block !== "") {
      writer.uint32(34).string(message.eip150Block);
    }
    if (message.eip150Hash !== "") {
      writer.uint32(42).string(message.eip150Hash);
    }
    if (message.eip155Block !== "") {
      writer.uint32(50).string(message.eip155Block);
    }
    if (message.eip158Block !== "") {
      writer.uint32(58).string(message.eip158Block);
    }
    if (message.byzantiumBlock !== "") {
      writer.uint32(66).string(message.byzantiumBlock);
    }
    if (message.constantinopleBlock !== "") {
      writer.uint32(74).string(message.constantinopleBlock);
    }
    if (message.petersburgBlock !== "") {
      writer.uint32(82).string(message.petersburgBlock);
    }
    if (message.istanbulBlock !== "") {
      writer.uint32(90).string(message.istanbulBlock);
    }
    if (message.muirGlacierBlock !== "") {
      writer.uint32(98).string(message.muirGlacierBlock);
    }
    if (message.berlinBlock !== "") {
      writer.uint32(106).string(message.berlinBlock);
    }
    if (message.londonBlock !== "") {
      writer.uint32(138).string(message.londonBlock);
    }
    if (message.arrowGlacierBlock !== "") {
      writer.uint32(146).string(message.arrowGlacierBlock);
    }
    if (message.grayGlacierBlock !== "") {
      writer.uint32(162).string(message.grayGlacierBlock);
    }
    if (message.mergeNetsplitBlock !== "") {
      writer.uint32(170).string(message.mergeNetsplitBlock);
    }
    if (message.shanghaiBlock !== "") {
      writer.uint32(178).string(message.shanghaiBlock);
    }
    if (message.cancunBlock !== "") {
      writer.uint32(186).string(message.cancunBlock);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ChainConfig {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.homesteadBlock = reader.string();
          break;
        case 2:
          message.daoForkBlock = reader.string();
          break;
        case 3:
          message.daoForkSupport = reader.bool();
          break;
        case 4:
          message.eip150Block = reader.string();
          break;
        case 5:
          message.eip150Hash = reader.string();
          break;
        case 6:
          message.eip155Block = reader.string();
          break;
        case 7:
          message.eip158Block = reader.string();
          break;
        case 8:
          message.byzantiumBlock = reader.string();
          break;
        case 9:
          message.constantinopleBlock = reader.string();
          break;
        case 10:
          message.petersburgBlock = reader.string();
          break;
        case 11:
          message.istanbulBlock = reader.string();
          break;
        case 12:
          message.muirGlacierBlock = reader.string();
          break;
        case 13:
          message.berlinBlock = reader.string();
          break;
        case 17:
          message.londonBlock = reader.string();
          break;
        case 18:
          message.arrowGlacierBlock = reader.string();
          break;
        case 20:
          message.grayGlacierBlock = reader.string();
          break;
        case 21:
          message.mergeNetsplitBlock = reader.string();
          break;
        case 22:
          message.shanghaiBlock = reader.string();
          break;
        case 23:
          message.cancunBlock = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ChainConfig {
    const obj = createBaseChainConfig();
    if (isSet(object.homesteadBlock))
      obj.homesteadBlock = String(object.homesteadBlock);
    if (isSet(object.daoForkBlock))
      obj.daoForkBlock = String(object.daoForkBlock);
    if (isSet(object.daoForkSupport))
      obj.daoForkSupport = Boolean(object.daoForkSupport);
    if (isSet(object.eip150Block)) obj.eip150Block = String(object.eip150Block);
    if (isSet(object.eip150Hash)) obj.eip150Hash = String(object.eip150Hash);
    if (isSet(object.eip155Block)) obj.eip155Block = String(object.eip155Block);
    if (isSet(object.eip158Block)) obj.eip158Block = String(object.eip158Block);
    if (isSet(object.byzantiumBlock))
      obj.byzantiumBlock = String(object.byzantiumBlock);
    if (isSet(object.constantinopleBlock))
      obj.constantinopleBlock = String(object.constantinopleBlock);
    if (isSet(object.petersburgBlock))
      obj.petersburgBlock = String(object.petersburgBlock);
    if (isSet(object.istanbulBlock))
      obj.istanbulBlock = String(object.istanbulBlock);
    if (isSet(object.muirGlacierBlock))
      obj.muirGlacierBlock = String(object.muirGlacierBlock);
    if (isSet(object.berlinBlock)) obj.berlinBlock = String(object.berlinBlock);
    if (isSet(object.londonBlock)) obj.londonBlock = String(object.londonBlock);
    if (isSet(object.arrowGlacierBlock))
      obj.arrowGlacierBlock = String(object.arrowGlacierBlock);
    if (isSet(object.grayGlacierBlock))
      obj.grayGlacierBlock = String(object.grayGlacierBlock);
    if (isSet(object.mergeNetsplitBlock))
      obj.mergeNetsplitBlock = String(object.mergeNetsplitBlock);
    if (isSet(object.shanghaiBlock))
      obj.shanghaiBlock = String(object.shanghaiBlock);
    if (isSet(object.cancunBlock)) obj.cancunBlock = String(object.cancunBlock);
    return obj;
  },
  toJSON(message: ChainConfig): JsonSafe<ChainConfig> {
    const obj: any = {};
    message.homesteadBlock !== undefined &&
      (obj.homesteadBlock = message.homesteadBlock);
    message.daoForkBlock !== undefined &&
      (obj.daoForkBlock = message.daoForkBlock);
    message.daoForkSupport !== undefined &&
      (obj.daoForkSupport = message.daoForkSupport);
    message.eip150Block !== undefined &&
      (obj.eip150Block = message.eip150Block);
    message.eip150Hash !== undefined && (obj.eip150Hash = message.eip150Hash);
    message.eip155Block !== undefined &&
      (obj.eip155Block = message.eip155Block);
    message.eip158Block !== undefined &&
      (obj.eip158Block = message.eip158Block);
    message.byzantiumBlock !== undefined &&
      (obj.byzantiumBlock = message.byzantiumBlock);
    message.constantinopleBlock !== undefined &&
      (obj.constantinopleBlock = message.constantinopleBlock);
    message.petersburgBlock !== undefined &&
      (obj.petersburgBlock = message.petersburgBlock);
    message.istanbulBlock !== undefined &&
      (obj.istanbulBlock = message.istanbulBlock);
    message.muirGlacierBlock !== undefined &&
      (obj.muirGlacierBlock = message.muirGlacierBlock);
    message.berlinBlock !== undefined &&
      (obj.berlinBlock = message.berlinBlock);
    message.londonBlock !== undefined &&
      (obj.londonBlock = message.londonBlock);
    message.arrowGlacierBlock !== undefined &&
      (obj.arrowGlacierBlock = message.arrowGlacierBlock);
    message.grayGlacierBlock !== undefined &&
      (obj.grayGlacierBlock = message.grayGlacierBlock);
    message.mergeNetsplitBlock !== undefined &&
      (obj.mergeNetsplitBlock = message.mergeNetsplitBlock);
    message.shanghaiBlock !== undefined &&
      (obj.shanghaiBlock = message.shanghaiBlock);
    message.cancunBlock !== undefined &&
      (obj.cancunBlock = message.cancunBlock);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ChainConfig>, I>>(
    object: I,
  ): ChainConfig {
    const message = createBaseChainConfig();
    message.homesteadBlock = object.homesteadBlock ?? "";
    message.daoForkBlock = object.daoForkBlock ?? "";
    message.daoForkSupport = object.daoForkSupport ?? false;
    message.eip150Block = object.eip150Block ?? "";
    message.eip150Hash = object.eip150Hash ?? "";
    message.eip155Block = object.eip155Block ?? "";
    message.eip158Block = object.eip158Block ?? "";
    message.byzantiumBlock = object.byzantiumBlock ?? "";
    message.constantinopleBlock = object.constantinopleBlock ?? "";
    message.petersburgBlock = object.petersburgBlock ?? "";
    message.istanbulBlock = object.istanbulBlock ?? "";
    message.muirGlacierBlock = object.muirGlacierBlock ?? "";
    message.berlinBlock = object.berlinBlock ?? "";
    message.londonBlock = object.londonBlock ?? "";
    message.arrowGlacierBlock = object.arrowGlacierBlock ?? "";
    message.grayGlacierBlock = object.grayGlacierBlock ?? "";
    message.mergeNetsplitBlock = object.mergeNetsplitBlock ?? "";
    message.shanghaiBlock = object.shanghaiBlock ?? "";
    message.cancunBlock = object.cancunBlock ?? "";
    return message;
  },
};
function createBaseState(): State {
  return {
    key: "",
    value: "",
  };
}
export const State = {
  typeUrl: "/ethermint.evm.v1.State",
  encode(
    message: State,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): State {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): State {
    const obj = createBaseState();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value)) obj.value = String(object.value);
    return obj;
  },
  toJSON(message: State): JsonSafe<State> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<State>, I>>(object: I): State {
    const message = createBaseState();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};
function createBaseTransactionLogs(): TransactionLogs {
  return {
    hash: "",
    logs: [],
  };
}
export const TransactionLogs = {
  typeUrl: "/ethermint.evm.v1.TransactionLogs",
  encode(
    message: TransactionLogs,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    for (const v of message.logs) {
      Log.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TransactionLogs {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionLogs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.logs.push(Log.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TransactionLogs {
    const obj = createBaseTransactionLogs();
    if (isSet(object.hash)) obj.hash = String(object.hash);
    if (Array.isArray(object?.logs))
      obj.logs = object.logs.map((e: any) => Log.fromJSON(e));
    return obj;
  },
  toJSON(message: TransactionLogs): JsonSafe<TransactionLogs> {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    if (message.logs) {
      obj.logs = message.logs.map((e) => (e ? Log.toJSON(e) : undefined));
    } else {
      obj.logs = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TransactionLogs>, I>>(
    object: I,
  ): TransactionLogs {
    const message = createBaseTransactionLogs();
    message.hash = object.hash ?? "";
    message.logs = object.logs?.map((e) => Log.fromPartial(e)) || [];
    return message;
  },
};
function createBaseLog(): Log {
  return {
    address: "",
    topics: [],
    data: new Uint8Array(),
    blockNumber: BigInt(0),
    txHash: "",
    txIndex: BigInt(0),
    blockHash: "",
    index: BigInt(0),
    removed: false,
  };
}
export const Log = {
  typeUrl: "/ethermint.evm.v1.Log",
  encode(
    message: Log,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.topics) {
      writer.uint32(18).string(v!);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (message.blockNumber !== BigInt(0)) {
      writer.uint32(32).uint64(message.blockNumber);
    }
    if (message.txHash !== "") {
      writer.uint32(42).string(message.txHash);
    }
    if (message.txIndex !== BigInt(0)) {
      writer.uint32(48).uint64(message.txIndex);
    }
    if (message.blockHash !== "") {
      writer.uint32(58).string(message.blockHash);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(64).uint64(message.index);
    }
    if (message.removed === true) {
      writer.uint32(72).bool(message.removed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Log {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.topics.push(reader.string());
          break;
        case 3:
          message.data = reader.bytes();
          break;
        case 4:
          message.blockNumber = reader.uint64();
          break;
        case 5:
          message.txHash = reader.string();
          break;
        case 6:
          message.txIndex = reader.uint64();
          break;
        case 7:
          message.blockHash = reader.string();
          break;
        case 8:
          message.index = reader.uint64();
          break;
        case 9:
          message.removed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Log {
    const obj = createBaseLog();
    if (isSet(object.address)) obj.address = String(object.address);
    if (Array.isArray(object?.topics))
      obj.topics = object.topics.map((e: any) => String(e));
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    if (isSet(object.blockNumber))
      obj.blockNumber = BigInt(object.blockNumber.toString());
    if (isSet(object.txHash)) obj.txHash = String(object.txHash);
    if (isSet(object.txIndex)) obj.txIndex = BigInt(object.txIndex.toString());
    if (isSet(object.blockHash)) obj.blockHash = String(object.blockHash);
    if (isSet(object.index)) obj.index = BigInt(object.index.toString());
    if (isSet(object.removed)) obj.removed = Boolean(object.removed);
    return obj;
  },
  toJSON(message: Log): JsonSafe<Log> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.topics) {
      obj.topics = message.topics.map((e) => e);
    } else {
      obj.topics = [];
    }
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array(),
      ));
    message.blockNumber !== undefined &&
      (obj.blockNumber = (message.blockNumber || BigInt(0)).toString());
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.txIndex !== undefined &&
      (obj.txIndex = (message.txIndex || BigInt(0)).toString());
    message.blockHash !== undefined && (obj.blockHash = message.blockHash);
    message.index !== undefined &&
      (obj.index = (message.index || BigInt(0)).toString());
    message.removed !== undefined && (obj.removed = message.removed);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Log>, I>>(object: I): Log {
    const message = createBaseLog();
    message.address = object.address ?? "";
    message.topics = object.topics?.map((e) => e) || [];
    message.data = object.data ?? new Uint8Array();
    if (object.blockNumber !== undefined && object.blockNumber !== null) {
      message.blockNumber = BigInt(object.blockNumber.toString());
    }
    message.txHash = object.txHash ?? "";
    if (object.txIndex !== undefined && object.txIndex !== null) {
      message.txIndex = BigInt(object.txIndex.toString());
    }
    message.blockHash = object.blockHash ?? "";
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index.toString());
    }
    message.removed = object.removed ?? false;
    return message;
  },
};
function createBaseTxResult(): TxResult {
  return {
    contractAddress: "",
    bloom: new Uint8Array(),
    txLogs: TransactionLogs.fromPartial({}),
    ret: new Uint8Array(),
    reverted: false,
    gasUsed: BigInt(0),
  };
}
export const TxResult = {
  typeUrl: "/ethermint.evm.v1.TxResult",
  encode(
    message: TxResult,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.bloom.length !== 0) {
      writer.uint32(18).bytes(message.bloom);
    }
    if (message.txLogs !== undefined) {
      TransactionLogs.encode(message.txLogs, writer.uint32(26).fork()).ldelim();
    }
    if (message.ret.length !== 0) {
      writer.uint32(34).bytes(message.ret);
    }
    if (message.reverted === true) {
      writer.uint32(40).bool(message.reverted);
    }
    if (message.gasUsed !== BigInt(0)) {
      writer.uint32(48).uint64(message.gasUsed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxResult {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.bloom = reader.bytes();
          break;
        case 3:
          message.txLogs = TransactionLogs.decode(reader, reader.uint32());
          break;
        case 4:
          message.ret = reader.bytes();
          break;
        case 5:
          message.reverted = reader.bool();
          break;
        case 6:
          message.gasUsed = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TxResult {
    const obj = createBaseTxResult();
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    if (isSet(object.bloom)) obj.bloom = bytesFromBase64(object.bloom);
    if (isSet(object.txLogs))
      obj.txLogs = TransactionLogs.fromJSON(object.txLogs);
    if (isSet(object.ret)) obj.ret = bytesFromBase64(object.ret);
    if (isSet(object.reverted)) obj.reverted = Boolean(object.reverted);
    if (isSet(object.gasUsed)) obj.gasUsed = BigInt(object.gasUsed.toString());
    return obj;
  },
  toJSON(message: TxResult): JsonSafe<TxResult> {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.bloom !== undefined &&
      (obj.bloom = base64FromBytes(
        message.bloom !== undefined ? message.bloom : new Uint8Array(),
      ));
    message.txLogs !== undefined &&
      (obj.txLogs = message.txLogs
        ? TransactionLogs.toJSON(message.txLogs)
        : undefined);
    message.ret !== undefined &&
      (obj.ret = base64FromBytes(
        message.ret !== undefined ? message.ret : new Uint8Array(),
      ));
    message.reverted !== undefined && (obj.reverted = message.reverted);
    message.gasUsed !== undefined &&
      (obj.gasUsed = (message.gasUsed || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TxResult>, I>>(object: I): TxResult {
    const message = createBaseTxResult();
    message.contractAddress = object.contractAddress ?? "";
    message.bloom = object.bloom ?? new Uint8Array();
    if (object.txLogs !== undefined && object.txLogs !== null) {
      message.txLogs = TransactionLogs.fromPartial(object.txLogs);
    }
    message.ret = object.ret ?? new Uint8Array();
    message.reverted = object.reverted ?? false;
    if (object.gasUsed !== undefined && object.gasUsed !== null) {
      message.gasUsed = BigInt(object.gasUsed.toString());
    }
    return message;
  },
};
function createBaseAccessTuple(): AccessTuple {
  return {
    address: "",
    storageKeys: [],
  };
}
export const AccessTuple = {
  typeUrl: "/ethermint.evm.v1.AccessTuple",
  encode(
    message: AccessTuple,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.storageKeys) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccessTuple {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessTuple();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.storageKeys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccessTuple {
    const obj = createBaseAccessTuple();
    if (isSet(object.address)) obj.address = String(object.address);
    if (Array.isArray(object?.storageKeys))
      obj.storageKeys = object.storageKeys.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: AccessTuple): JsonSafe<AccessTuple> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.storageKeys) {
      obj.storageKeys = message.storageKeys.map((e) => e);
    } else {
      obj.storageKeys = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AccessTuple>, I>>(
    object: I,
  ): AccessTuple {
    const message = createBaseAccessTuple();
    message.address = object.address ?? "";
    message.storageKeys = object.storageKeys?.map((e) => e) || [];
    return message;
  },
};
function createBaseTraceConfig(): TraceConfig {
  return {
    tracer: "",
    timeout: "",
    reexec: BigInt(0),
    disableStack: false,
    disableStorage: false,
    debug: false,
    limit: 0,
    overrides: undefined,
    enableMemory: false,
    enableReturnData: false,
    tracerJsonConfig: "",
  };
}
export const TraceConfig = {
  typeUrl: "/ethermint.evm.v1.TraceConfig",
  encode(
    message: TraceConfig,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.tracer !== "") {
      writer.uint32(10).string(message.tracer);
    }
    if (message.timeout !== "") {
      writer.uint32(18).string(message.timeout);
    }
    if (message.reexec !== BigInt(0)) {
      writer.uint32(24).uint64(message.reexec);
    }
    if (message.disableStack === true) {
      writer.uint32(40).bool(message.disableStack);
    }
    if (message.disableStorage === true) {
      writer.uint32(48).bool(message.disableStorage);
    }
    if (message.debug === true) {
      writer.uint32(64).bool(message.debug);
    }
    if (message.limit !== 0) {
      writer.uint32(72).int32(message.limit);
    }
    if (message.overrides !== undefined) {
      ChainConfig.encode(message.overrides, writer.uint32(82).fork()).ldelim();
    }
    if (message.enableMemory === true) {
      writer.uint32(88).bool(message.enableMemory);
    }
    if (message.enableReturnData === true) {
      writer.uint32(96).bool(message.enableReturnData);
    }
    if (message.tracerJsonConfig !== "") {
      writer.uint32(106).string(message.tracerJsonConfig);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TraceConfig {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTraceConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tracer = reader.string();
          break;
        case 2:
          message.timeout = reader.string();
          break;
        case 3:
          message.reexec = reader.uint64();
          break;
        case 5:
          message.disableStack = reader.bool();
          break;
        case 6:
          message.disableStorage = reader.bool();
          break;
        case 8:
          message.debug = reader.bool();
          break;
        case 9:
          message.limit = reader.int32();
          break;
        case 10:
          message.overrides = ChainConfig.decode(reader, reader.uint32());
          break;
        case 11:
          message.enableMemory = reader.bool();
          break;
        case 12:
          message.enableReturnData = reader.bool();
          break;
        case 13:
          message.tracerJsonConfig = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TraceConfig {
    const obj = createBaseTraceConfig();
    if (isSet(object.tracer)) obj.tracer = String(object.tracer);
    if (isSet(object.timeout)) obj.timeout = String(object.timeout);
    if (isSet(object.reexec)) obj.reexec = BigInt(object.reexec.toString());
    if (isSet(object.disableStack))
      obj.disableStack = Boolean(object.disableStack);
    if (isSet(object.disableStorage))
      obj.disableStorage = Boolean(object.disableStorage);
    if (isSet(object.debug)) obj.debug = Boolean(object.debug);
    if (isSet(object.limit)) obj.limit = Number(object.limit);
    if (isSet(object.overrides))
      obj.overrides = ChainConfig.fromJSON(object.overrides);
    if (isSet(object.enableMemory))
      obj.enableMemory = Boolean(object.enableMemory);
    if (isSet(object.enableReturnData))
      obj.enableReturnData = Boolean(object.enableReturnData);
    if (isSet(object.tracerJsonConfig))
      obj.tracerJsonConfig = String(object.tracerJsonConfig);
    return obj;
  },
  toJSON(message: TraceConfig): JsonSafe<TraceConfig> {
    const obj: any = {};
    message.tracer !== undefined && (obj.tracer = message.tracer);
    message.timeout !== undefined && (obj.timeout = message.timeout);
    message.reexec !== undefined &&
      (obj.reexec = (message.reexec || BigInt(0)).toString());
    message.disableStack !== undefined &&
      (obj.disableStack = message.disableStack);
    message.disableStorage !== undefined &&
      (obj.disableStorage = message.disableStorage);
    message.debug !== undefined && (obj.debug = message.debug);
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.overrides !== undefined &&
      (obj.overrides = message.overrides
        ? ChainConfig.toJSON(message.overrides)
        : undefined);
    message.enableMemory !== undefined &&
      (obj.enableMemory = message.enableMemory);
    message.enableReturnData !== undefined &&
      (obj.enableReturnData = message.enableReturnData);
    message.tracerJsonConfig !== undefined &&
      (obj.tracerJsonConfig = message.tracerJsonConfig);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TraceConfig>, I>>(
    object: I,
  ): TraceConfig {
    const message = createBaseTraceConfig();
    message.tracer = object.tracer ?? "";
    message.timeout = object.timeout ?? "";
    if (object.reexec !== undefined && object.reexec !== null) {
      message.reexec = BigInt(object.reexec.toString());
    }
    message.disableStack = object.disableStack ?? false;
    message.disableStorage = object.disableStorage ?? false;
    message.debug = object.debug ?? false;
    message.limit = object.limit ?? 0;
    if (object.overrides !== undefined && object.overrides !== null) {
      message.overrides = ChainConfig.fromPartial(object.overrides);
    }
    message.enableMemory = object.enableMemory ?? false;
    message.enableReturnData = object.enableReturnData ?? false;
    message.tracerJsonConfig = object.tracerJsonConfig ?? "";
    return message;
  },
};
