/* eslint-disable */
import { Metadata } from "../../cosmos/bank/v1beta1/bank";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../binary";
import {
  isSet,
  DeepPartial,
  Exact,
  bytesFromBase64,
  base64FromBytes,
} from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "gravity.v1";
/** BridgeValidator represents a validator's ETH address and its power */
export interface BridgeValidator {
  power: bigint;
  ethereumAddress: string;
}
/**
 * Valset is the Ethereum Bridge Multsig Set, each gravity validator also
 * maintains an ETH key to sign messages, these are used to check signatures on
 * ETH because of the significant gas savings
 */
export interface Valset {
  nonce: bigint;
  members: BridgeValidator[];
  height: bigint;
  rewardAmount: string;
  /** the reward token in it's Ethereum hex address representation */
  rewardToken: string;
}
/**
 * LastObservedEthereumBlockHeight stores the last observed
 * Ethereum block height along with the Cosmos block height that
 * it was observed at. These two numbers can be used to project
 * outward and always produce batches with timeouts in the future
 * even if no Ethereum block height has been relayed for a long time
 */
export interface LastObservedEthereumBlockHeight {
  cosmosBlockHeight: bigint;
  ethereumBlockHeight: bigint;
}
/**
 * This records the relationship between an ERC20 token and the denom
 * of the corresponding Cosmos originated asset
 */
export interface ERC20ToDenom {
  erc20: string;
  denom: string;
}
/**
 * UnhaltBridgeProposal defines a custom governance proposal useful for restoring
 * the bridge after a oracle disagreement. Once this proposal is passed bridge state will roll back events
 * to the nonce provided in target_nonce if and only if those events have not yet been observed (executed on the Cosmos chain). This allows for easy
 * handling of cases where for example an Ethereum hardfork has occured and more than 1/3 of the vlaidtor set
 * disagrees with the rest. Normally this would require a chain halt, manual genesis editing and restar to resolve
 * with this feature a governance proposal can be used instead
 */
export interface UnhaltBridgeProposal {
  title: string;
  description: string;
  targetNonce: bigint;
}
/**
 * AirdropProposal defines a custom governance proposal type that allows an airdrop to occur in a decentralized
 * fashion. A list of destination addresses and an amount per airdrop recipient is provided. The funds for this
 * airdrop are removed from the Community Pool, if the community pool does not have sufficient funding to perform
 * the airdrop to all provided recipients nothing will occur
 */
export interface AirdropProposal {
  title: string;
  description: string;
  denom: string;
  recipients: Uint8Array;
  amounts: bigint[];
}
/**
 * IBCMetadataProposal defines a custom governance proposal type that allows governance to set the
 * metadata for an IBC token, this will allow Gravity to deploy an ERC20 representing this token on
 * Ethereum
 * Name: the token name
 * Symbol: the token symbol
 * Description: the token description, not sent to ETH at all, only used on Cosmos
 * Display: the token display name (only used on Cosmos to decide ERC20 Decimals)
 * Deicmals: the decimals for the display unit
 * ibc_denom is the denom of the token in question on this chain
 */
export interface IBCMetadataProposal {
  title: string;
  description: string;
  metadata: Metadata;
  ibcDenom: string;
}
/**
 * PendingIbcAutoForward represents a SendToCosmos transaction with a foreign CosmosReceiver which will be added to the
 * PendingIbcAutoForward queue in attestation_handler and sent over IBC on some submission of a MsgExecuteIbcAutoForwards
 */
export interface PendingIbcAutoForward {
  /** the destination address. sdk.AccAddress does not preserve foreign prefixes */
  foreignReceiver: string;
  /** the token sent from ethereum to the ibc-enabled chain over `IbcChannel` */
  token?: Coin;
  /** the IBC channel to send `Amount` over via ibc-transfer module */
  ibcChannel: string;
  /** the EventNonce from the MsgSendToCosmosClaim, used for ordering the queue */
  eventNonce: bigint;
}
function createBaseBridgeValidator(): BridgeValidator {
  return {
    power: BigInt(0),
    ethereumAddress: "",
  };
}
export const BridgeValidator = {
  typeUrl: "/gravity.v1.BridgeValidator",
  encode(
    message: BridgeValidator,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.power !== BigInt(0)) {
      writer.uint32(8).uint64(message.power);
    }
    if (message.ethereumAddress !== "") {
      writer.uint32(18).string(message.ethereumAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BridgeValidator {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBridgeValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.power = reader.uint64();
          break;
        case 2:
          message.ethereumAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BridgeValidator {
    const obj = createBaseBridgeValidator();
    if (isSet(object.power)) obj.power = BigInt(object.power.toString());
    if (isSet(object.ethereumAddress))
      obj.ethereumAddress = String(object.ethereumAddress);
    return obj;
  },
  toJSON(message: BridgeValidator): JsonSafe<BridgeValidator> {
    const obj: any = {};
    message.power !== undefined &&
      (obj.power = (message.power || BigInt(0)).toString());
    message.ethereumAddress !== undefined &&
      (obj.ethereumAddress = message.ethereumAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BridgeValidator>, I>>(
    object: I,
  ): BridgeValidator {
    const message = createBaseBridgeValidator();
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power.toString());
    }
    message.ethereumAddress = object.ethereumAddress ?? "";
    return message;
  },
};
function createBaseValset(): Valset {
  return {
    nonce: BigInt(0),
    members: [],
    height: BigInt(0),
    rewardAmount: "",
    rewardToken: "",
  };
}
export const Valset = {
  typeUrl: "/gravity.v1.Valset",
  encode(
    message: Valset,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    for (const v of message.members) {
      BridgeValidator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).uint64(message.height);
    }
    if (message.rewardAmount !== "") {
      writer.uint32(34).string(message.rewardAmount);
    }
    if (message.rewardToken !== "") {
      writer.uint32(42).string(message.rewardToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Valset {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64();
          break;
        case 2:
          message.members.push(BridgeValidator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.height = reader.uint64();
          break;
        case 4:
          message.rewardAmount = reader.string();
          break;
        case 5:
          message.rewardToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Valset {
    const obj = createBaseValset();
    if (isSet(object.nonce)) obj.nonce = BigInt(object.nonce.toString());
    if (Array.isArray(object?.members))
      obj.members = object.members.map((e: any) => BridgeValidator.fromJSON(e));
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.rewardAmount))
      obj.rewardAmount = String(object.rewardAmount);
    if (isSet(object.rewardToken)) obj.rewardToken = String(object.rewardToken);
    return obj;
  },
  toJSON(message: Valset): JsonSafe<Valset> {
    const obj: any = {};
    message.nonce !== undefined &&
      (obj.nonce = (message.nonce || BigInt(0)).toString());
    if (message.members) {
      obj.members = message.members.map((e) =>
        e ? BridgeValidator.toJSON(e) : undefined,
      );
    } else {
      obj.members = [];
    }
    message.height !== undefined &&
      (obj.height = (message.height || BigInt(0)).toString());
    message.rewardAmount !== undefined &&
      (obj.rewardAmount = message.rewardAmount);
    message.rewardToken !== undefined &&
      (obj.rewardToken = message.rewardToken);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Valset>, I>>(object: I): Valset {
    const message = createBaseValset();
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce.toString());
    }
    message.members =
      object.members?.map((e) => BridgeValidator.fromPartial(e)) || [];
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    message.rewardAmount = object.rewardAmount ?? "";
    message.rewardToken = object.rewardToken ?? "";
    return message;
  },
};
function createBaseLastObservedEthereumBlockHeight(): LastObservedEthereumBlockHeight {
  return {
    cosmosBlockHeight: BigInt(0),
    ethereumBlockHeight: BigInt(0),
  };
}
export const LastObservedEthereumBlockHeight = {
  typeUrl: "/gravity.v1.LastObservedEthereumBlockHeight",
  encode(
    message: LastObservedEthereumBlockHeight,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.cosmosBlockHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.cosmosBlockHeight);
    }
    if (message.ethereumBlockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.ethereumBlockHeight);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): LastObservedEthereumBlockHeight {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastObservedEthereumBlockHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cosmosBlockHeight = reader.uint64();
          break;
        case 2:
          message.ethereumBlockHeight = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LastObservedEthereumBlockHeight {
    const obj = createBaseLastObservedEthereumBlockHeight();
    if (isSet(object.cosmosBlockHeight))
      obj.cosmosBlockHeight = BigInt(object.cosmosBlockHeight.toString());
    if (isSet(object.ethereumBlockHeight))
      obj.ethereumBlockHeight = BigInt(object.ethereumBlockHeight.toString());
    return obj;
  },
  toJSON(
    message: LastObservedEthereumBlockHeight,
  ): JsonSafe<LastObservedEthereumBlockHeight> {
    const obj: any = {};
    message.cosmosBlockHeight !== undefined &&
      (obj.cosmosBlockHeight = (
        message.cosmosBlockHeight || BigInt(0)
      ).toString());
    message.ethereumBlockHeight !== undefined &&
      (obj.ethereumBlockHeight = (
        message.ethereumBlockHeight || BigInt(0)
      ).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LastObservedEthereumBlockHeight>, I>>(
    object: I,
  ): LastObservedEthereumBlockHeight {
    const message = createBaseLastObservedEthereumBlockHeight();
    if (
      object.cosmosBlockHeight !== undefined &&
      object.cosmosBlockHeight !== null
    ) {
      message.cosmosBlockHeight = BigInt(object.cosmosBlockHeight.toString());
    }
    if (
      object.ethereumBlockHeight !== undefined &&
      object.ethereumBlockHeight !== null
    ) {
      message.ethereumBlockHeight = BigInt(
        object.ethereumBlockHeight.toString(),
      );
    }
    return message;
  },
};
function createBaseERC20ToDenom(): ERC20ToDenom {
  return {
    erc20: "",
    denom: "",
  };
}
export const ERC20ToDenom = {
  typeUrl: "/gravity.v1.ERC20ToDenom",
  encode(
    message: ERC20ToDenom,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.erc20 !== "") {
      writer.uint32(10).string(message.erc20);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ERC20ToDenom {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseERC20ToDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.erc20 = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ERC20ToDenom {
    const obj = createBaseERC20ToDenom();
    if (isSet(object.erc20)) obj.erc20 = String(object.erc20);
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: ERC20ToDenom): JsonSafe<ERC20ToDenom> {
    const obj: any = {};
    message.erc20 !== undefined && (obj.erc20 = message.erc20);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ERC20ToDenom>, I>>(
    object: I,
  ): ERC20ToDenom {
    const message = createBaseERC20ToDenom();
    message.erc20 = object.erc20 ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};
function createBaseUnhaltBridgeProposal(): UnhaltBridgeProposal {
  return {
    title: "",
    description: "",
    targetNonce: BigInt(0),
  };
}
export const UnhaltBridgeProposal = {
  typeUrl: "/gravity.v1.UnhaltBridgeProposal",
  encode(
    message: UnhaltBridgeProposal,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.targetNonce !== BigInt(0)) {
      writer.uint32(32).uint64(message.targetNonce);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): UnhaltBridgeProposal {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnhaltBridgeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 4:
          message.targetNonce = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UnhaltBridgeProposal {
    const obj = createBaseUnhaltBridgeProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.targetNonce))
      obj.targetNonce = BigInt(object.targetNonce.toString());
    return obj;
  },
  toJSON(message: UnhaltBridgeProposal): JsonSafe<UnhaltBridgeProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.targetNonce !== undefined &&
      (obj.targetNonce = (message.targetNonce || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<UnhaltBridgeProposal>, I>>(
    object: I,
  ): UnhaltBridgeProposal {
    const message = createBaseUnhaltBridgeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    if (object.targetNonce !== undefined && object.targetNonce !== null) {
      message.targetNonce = BigInt(object.targetNonce.toString());
    }
    return message;
  },
};
function createBaseAirdropProposal(): AirdropProposal {
  return {
    title: "",
    description: "",
    denom: "",
    recipients: new Uint8Array(),
    amounts: [],
  };
}
export const AirdropProposal = {
  typeUrl: "/gravity.v1.AirdropProposal",
  encode(
    message: AirdropProposal,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.recipients.length !== 0) {
      writer.uint32(34).bytes(message.recipients);
    }
    writer.uint32(42).fork();
    for (const v of message.amounts) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AirdropProposal {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAirdropProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.recipients = reader.bytes();
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.amounts.push(reader.uint64());
            }
          } else {
            message.amounts.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AirdropProposal {
    const obj = createBaseAirdropProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.denom)) obj.denom = String(object.denom);
    if (isSet(object.recipients))
      obj.recipients = bytesFromBase64(object.recipients);
    if (Array.isArray(object?.amounts))
      obj.amounts = object.amounts.map((e: any) => BigInt(e.toString()));
    return obj;
  },
  toJSON(message: AirdropProposal): JsonSafe<AirdropProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.denom !== undefined && (obj.denom = message.denom);
    message.recipients !== undefined &&
      (obj.recipients = base64FromBytes(
        message.recipients !== undefined
          ? message.recipients
          : new Uint8Array(),
      ));
    if (message.amounts) {
      obj.amounts = message.amounts.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.amounts = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AirdropProposal>, I>>(
    object: I,
  ): AirdropProposal {
    const message = createBaseAirdropProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
    message.recipients = object.recipients ?? new Uint8Array();
    message.amounts = object.amounts?.map((e) => BigInt(e.toString())) || [];
    return message;
  },
};
function createBaseIBCMetadataProposal(): IBCMetadataProposal {
  return {
    title: "",
    description: "",
    metadata: Metadata.fromPartial({}),
    ibcDenom: "",
  };
}
export const IBCMetadataProposal = {
  typeUrl: "/gravity.v1.IBCMetadataProposal",
  encode(
    message: IBCMetadataProposal,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
    }
    if (message.ibcDenom !== "") {
      writer.uint32(34).string(message.ibcDenom);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): IBCMetadataProposal {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIBCMetadataProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 4:
          message.ibcDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IBCMetadataProposal {
    const obj = createBaseIBCMetadataProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.metadata))
      obj.metadata = Metadata.fromJSON(object.metadata);
    if (isSet(object.ibcDenom)) obj.ibcDenom = String(object.ibcDenom);
    return obj;
  },
  toJSON(message: IBCMetadataProposal): JsonSafe<IBCMetadataProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? Metadata.toJSON(message.metadata)
        : undefined);
    message.ibcDenom !== undefined && (obj.ibcDenom = message.ibcDenom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<IBCMetadataProposal>, I>>(
    object: I,
  ): IBCMetadataProposal {
    const message = createBaseIBCMetadataProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromPartial(object.metadata);
    }
    message.ibcDenom = object.ibcDenom ?? "";
    return message;
  },
};
function createBasePendingIbcAutoForward(): PendingIbcAutoForward {
  return {
    foreignReceiver: "",
    token: undefined,
    ibcChannel: "",
    eventNonce: BigInt(0),
  };
}
export const PendingIbcAutoForward = {
  typeUrl: "/gravity.v1.PendingIbcAutoForward",
  encode(
    message: PendingIbcAutoForward,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.foreignReceiver !== "") {
      writer.uint32(10).string(message.foreignReceiver);
    }
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(18).fork()).ldelim();
    }
    if (message.ibcChannel !== "") {
      writer.uint32(26).string(message.ibcChannel);
    }
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(32).uint64(message.eventNonce);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): PendingIbcAutoForward {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingIbcAutoForward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.foreignReceiver = reader.string();
          break;
        case 2:
          message.token = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.ibcChannel = reader.string();
          break;
        case 4:
          message.eventNonce = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PendingIbcAutoForward {
    const obj = createBasePendingIbcAutoForward();
    if (isSet(object.foreignReceiver))
      obj.foreignReceiver = String(object.foreignReceiver);
    if (isSet(object.token)) obj.token = Coin.fromJSON(object.token);
    if (isSet(object.ibcChannel)) obj.ibcChannel = String(object.ibcChannel);
    if (isSet(object.eventNonce))
      obj.eventNonce = BigInt(object.eventNonce.toString());
    return obj;
  },
  toJSON(message: PendingIbcAutoForward): JsonSafe<PendingIbcAutoForward> {
    const obj: any = {};
    message.foreignReceiver !== undefined &&
      (obj.foreignReceiver = message.foreignReceiver);
    message.token !== undefined &&
      (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
    message.ibcChannel !== undefined && (obj.ibcChannel = message.ibcChannel);
    message.eventNonce !== undefined &&
      (obj.eventNonce = (message.eventNonce || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PendingIbcAutoForward>, I>>(
    object: I,
  ): PendingIbcAutoForward {
    const message = createBasePendingIbcAutoForward();
    message.foreignReceiver = object.foreignReceiver ?? "";
    if (object.token !== undefined && object.token !== null) {
      message.token = Coin.fromPartial(object.token);
    }
    message.ibcChannel = object.ibcChannel ?? "";
    if (object.eventNonce !== undefined && object.eventNonce !== null) {
      message.eventNonce = BigInt(object.eventNonce.toString());
    }
    return message;
  },
};
