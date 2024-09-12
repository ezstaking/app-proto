/* eslint-disable */
import { Any } from "../../../../google/protobuf/any";
import { ConnectionEnd } from "../../../core/connection/v1/connection";
import { Channel } from "../../../core/channel/v1/channel";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import {
  isSet,
  DeepPartial,
  Exact,
  bytesFromBase64,
  base64FromBytes,
} from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "ibc.lightclients.solomachine.v2";
/**
 * DataType defines the type of solo machine proof being created. This is done
 * to preserve uniqueness of different data sign byte encodings.
 */
export enum DataType {
  /** DATA_TYPE_UNINITIALIZED_UNSPECIFIED - Default State */
  DATA_TYPE_UNINITIALIZED_UNSPECIFIED = 0,
  /** DATA_TYPE_CLIENT_STATE - Data type for client state verification */
  DATA_TYPE_CLIENT_STATE = 1,
  /** DATA_TYPE_CONSENSUS_STATE - Data type for consensus state verification */
  DATA_TYPE_CONSENSUS_STATE = 2,
  /** DATA_TYPE_CONNECTION_STATE - Data type for connection state verification */
  DATA_TYPE_CONNECTION_STATE = 3,
  /** DATA_TYPE_CHANNEL_STATE - Data type for channel state verification */
  DATA_TYPE_CHANNEL_STATE = 4,
  /** DATA_TYPE_PACKET_COMMITMENT - Data type for packet commitment verification */
  DATA_TYPE_PACKET_COMMITMENT = 5,
  /** DATA_TYPE_PACKET_ACKNOWLEDGEMENT - Data type for packet acknowledgement verification */
  DATA_TYPE_PACKET_ACKNOWLEDGEMENT = 6,
  /** DATA_TYPE_PACKET_RECEIPT_ABSENCE - Data type for packet receipt absence verification */
  DATA_TYPE_PACKET_RECEIPT_ABSENCE = 7,
  /** DATA_TYPE_NEXT_SEQUENCE_RECV - Data type for next sequence recv verification */
  DATA_TYPE_NEXT_SEQUENCE_RECV = 8,
  /** DATA_TYPE_HEADER - Data type for header verification */
  DATA_TYPE_HEADER = 9,
  UNRECOGNIZED = -1,
}
export function dataTypeFromJSON(object: any): DataType {
  switch (object) {
    case 0:
    case "DATA_TYPE_UNINITIALIZED_UNSPECIFIED":
      return DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED;
    case 1:
    case "DATA_TYPE_CLIENT_STATE":
      return DataType.DATA_TYPE_CLIENT_STATE;
    case 2:
    case "DATA_TYPE_CONSENSUS_STATE":
      return DataType.DATA_TYPE_CONSENSUS_STATE;
    case 3:
    case "DATA_TYPE_CONNECTION_STATE":
      return DataType.DATA_TYPE_CONNECTION_STATE;
    case 4:
    case "DATA_TYPE_CHANNEL_STATE":
      return DataType.DATA_TYPE_CHANNEL_STATE;
    case 5:
    case "DATA_TYPE_PACKET_COMMITMENT":
      return DataType.DATA_TYPE_PACKET_COMMITMENT;
    case 6:
    case "DATA_TYPE_PACKET_ACKNOWLEDGEMENT":
      return DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT;
    case 7:
    case "DATA_TYPE_PACKET_RECEIPT_ABSENCE":
      return DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE;
    case 8:
    case "DATA_TYPE_NEXT_SEQUENCE_RECV":
      return DataType.DATA_TYPE_NEXT_SEQUENCE_RECV;
    case 9:
    case "DATA_TYPE_HEADER":
      return DataType.DATA_TYPE_HEADER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DataType.UNRECOGNIZED;
  }
}
export function dataTypeToJSON(object: DataType): string {
  switch (object) {
    case DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED:
      return "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";
    case DataType.DATA_TYPE_CLIENT_STATE:
      return "DATA_TYPE_CLIENT_STATE";
    case DataType.DATA_TYPE_CONSENSUS_STATE:
      return "DATA_TYPE_CONSENSUS_STATE";
    case DataType.DATA_TYPE_CONNECTION_STATE:
      return "DATA_TYPE_CONNECTION_STATE";
    case DataType.DATA_TYPE_CHANNEL_STATE:
      return "DATA_TYPE_CHANNEL_STATE";
    case DataType.DATA_TYPE_PACKET_COMMITMENT:
      return "DATA_TYPE_PACKET_COMMITMENT";
    case DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT:
      return "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";
    case DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE:
      return "DATA_TYPE_PACKET_RECEIPT_ABSENCE";
    case DataType.DATA_TYPE_NEXT_SEQUENCE_RECV:
      return "DATA_TYPE_NEXT_SEQUENCE_RECV";
    case DataType.DATA_TYPE_HEADER:
      return "DATA_TYPE_HEADER";
    case DataType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */
export interface ClientState {
  /** latest sequence of the client state */
  sequence: bigint;
  /** frozen sequence of the solo machine */
  isFrozen: boolean;
  consensusState?: ConsensusState;
  /**
   * when set to true, will allow governance to update a solo machine client.
   * The client will be unfrozen if it is frozen.
   */
  allowUpdateAfterProposal: boolean;
}
/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */
export interface ConsensusState {
  /** public key of the solo machine */
  publicKey?: Any;
  /**
   * diversifier allows the same public key to be re-used across different solo
   * machine clients (potentially on different chains) without being considered
   * misbehaviour.
   */
  diversifier: string;
  timestamp: bigint;
}
/** Header defines a solo machine consensus header */
export interface Header {
  /** sequence to update solo machine public key at */
  sequence: bigint;
  timestamp: bigint;
  signature: Uint8Array;
  newPublicKey?: Any;
  newDiversifier: string;
}
/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */
export interface Misbehaviour {
  clientId: string;
  sequence: bigint;
  signatureOne?: SignatureAndData;
  signatureTwo?: SignatureAndData;
}
/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */
export interface SignatureAndData {
  signature: Uint8Array;
  dataType: DataType;
  data: Uint8Array;
  timestamp: bigint;
}
/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 */
export interface TimestampedSignatureData {
  signatureData: Uint8Array;
  timestamp: bigint;
}
/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytes {
  sequence: bigint;
  timestamp: bigint;
  diversifier: string;
  /** type of the data used */
  dataType: DataType;
  /** marshaled data */
  data: Uint8Array;
}
/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderData {
  /** header public key */
  newPubKey?: Any;
  /** header diversifier */
  newDiversifier: string;
}
/** ClientStateData returns the SignBytes data for client state verification. */
export interface ClientStateData {
  path: Uint8Array;
  clientState?: Any;
}
/**
 * ConsensusStateData returns the SignBytes data for consensus state
 * verification.
 */
export interface ConsensusStateData {
  path: Uint8Array;
  consensusState?: Any;
}
/**
 * ConnectionStateData returns the SignBytes data for connection state
 * verification.
 */
export interface ConnectionStateData {
  path: Uint8Array;
  connection?: ConnectionEnd;
}
/**
 * ChannelStateData returns the SignBytes data for channel state
 * verification.
 */
export interface ChannelStateData {
  path: Uint8Array;
  channel?: Channel;
}
/**
 * PacketCommitmentData returns the SignBytes data for packet commitment
 * verification.
 */
export interface PacketCommitmentData {
  path: Uint8Array;
  commitment: Uint8Array;
}
/**
 * PacketAcknowledgementData returns the SignBytes data for acknowledgement
 * verification.
 */
export interface PacketAcknowledgementData {
  path: Uint8Array;
  acknowledgement: Uint8Array;
}
/**
 * PacketReceiptAbsenceData returns the SignBytes data for
 * packet receipt absence verification.
 */
export interface PacketReceiptAbsenceData {
  path: Uint8Array;
}
/**
 * NextSequenceRecvData returns the SignBytes data for verification of the next
 * sequence to be received.
 */
export interface NextSequenceRecvData {
  path: Uint8Array;
  nextSeqRecv: bigint;
}
function createBaseClientState(): ClientState {
  return {
    sequence: BigInt(0),
    isFrozen: false,
    consensusState: undefined,
    allowUpdateAfterProposal: false,
  };
}
export const ClientState = {
  typeUrl: "/ibc.lightclients.solomachine.v2.ClientState",
  encode(
    message: ClientState,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.isFrozen === true) {
      writer.uint32(16).bool(message.isFrozen);
    }
    if (message.consensusState !== undefined) {
      ConsensusState.encode(
        message.consensusState,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.allowUpdateAfterProposal === true) {
      writer.uint32(32).bool(message.allowUpdateAfterProposal);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientState {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        case 2:
          message.isFrozen = reader.bool();
          break;
        case 3:
          message.consensusState = ConsensusState.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 4:
          message.allowUpdateAfterProposal = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClientState {
    const obj = createBaseClientState();
    if (isSet(object.sequence))
      obj.sequence = BigInt(object.sequence.toString());
    if (isSet(object.isFrozen)) obj.isFrozen = Boolean(object.isFrozen);
    if (isSet(object.consensusState))
      obj.consensusState = ConsensusState.fromJSON(object.consensusState);
    if (isSet(object.allowUpdateAfterProposal))
      obj.allowUpdateAfterProposal = Boolean(object.allowUpdateAfterProposal);
    return obj;
  },
  toJSON(message: ClientState): JsonSafe<ClientState> {
    const obj: any = {};
    message.sequence !== undefined &&
      (obj.sequence = (message.sequence || BigInt(0)).toString());
    message.isFrozen !== undefined && (obj.isFrozen = message.isFrozen);
    message.consensusState !== undefined &&
      (obj.consensusState = message.consensusState
        ? ConsensusState.toJSON(message.consensusState)
        : undefined);
    message.allowUpdateAfterProposal !== undefined &&
      (obj.allowUpdateAfterProposal = message.allowUpdateAfterProposal);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ClientState>, I>>(
    object: I,
  ): ClientState {
    const message = createBaseClientState();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence.toString());
    }
    message.isFrozen = object.isFrozen ?? false;
    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = ConsensusState.fromPartial(
        object.consensusState,
      );
    }
    message.allowUpdateAfterProposal = object.allowUpdateAfterProposal ?? false;
    return message;
  },
};
function createBaseConsensusState(): ConsensusState {
  return {
    publicKey: undefined,
    diversifier: "",
    timestamp: BigInt(0),
  };
}
export const ConsensusState = {
  typeUrl: "/ibc.lightclients.solomachine.v2.ConsensusState",
  encode(
    message: ConsensusState,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.publicKey !== undefined) {
      Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.diversifier !== "") {
      writer.uint32(18).string(message.diversifier);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(24).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsensusState {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publicKey = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.diversifier = reader.string();
          break;
        case 3:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsensusState {
    const obj = createBaseConsensusState();
    if (isSet(object.publicKey)) obj.publicKey = Any.fromJSON(object.publicKey);
    if (isSet(object.diversifier)) obj.diversifier = String(object.diversifier);
    if (isSet(object.timestamp))
      obj.timestamp = BigInt(object.timestamp.toString());
    return obj;
  },
  toJSON(message: ConsensusState): JsonSafe<ConsensusState> {
    const obj: any = {};
    message.publicKey !== undefined &&
      (obj.publicKey = message.publicKey
        ? Any.toJSON(message.publicKey)
        : undefined);
    message.diversifier !== undefined &&
      (obj.diversifier = message.diversifier);
    message.timestamp !== undefined &&
      (obj.timestamp = (message.timestamp || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConsensusState>, I>>(
    object: I,
  ): ConsensusState {
    const message = createBaseConsensusState();
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = Any.fromPartial(object.publicKey);
    }
    message.diversifier = object.diversifier ?? "";
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp.toString());
    }
    return message;
  },
};
function createBaseHeader(): Header {
  return {
    sequence: BigInt(0),
    timestamp: BigInt(0),
    signature: new Uint8Array(),
    newPublicKey: undefined,
    newDiversifier: "",
  };
}
export const Header = {
  typeUrl: "/ibc.lightclients.solomachine.v2.Header",
  encode(
    message: Header,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    if (message.newPublicKey !== undefined) {
      Any.encode(message.newPublicKey, writer.uint32(34).fork()).ldelim();
    }
    if (message.newDiversifier !== "") {
      writer.uint32(42).string(message.newDiversifier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Header {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        case 2:
          message.timestamp = reader.uint64();
          break;
        case 3:
          message.signature = reader.bytes();
          break;
        case 4:
          message.newPublicKey = Any.decode(reader, reader.uint32());
          break;
        case 5:
          message.newDiversifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Header {
    const obj = createBaseHeader();
    if (isSet(object.sequence))
      obj.sequence = BigInt(object.sequence.toString());
    if (isSet(object.timestamp))
      obj.timestamp = BigInt(object.timestamp.toString());
    if (isSet(object.signature))
      obj.signature = bytesFromBase64(object.signature);
    if (isSet(object.newPublicKey))
      obj.newPublicKey = Any.fromJSON(object.newPublicKey);
    if (isSet(object.newDiversifier))
      obj.newDiversifier = String(object.newDiversifier);
    return obj;
  },
  toJSON(message: Header): JsonSafe<Header> {
    const obj: any = {};
    message.sequence !== undefined &&
      (obj.sequence = (message.sequence || BigInt(0)).toString());
    message.timestamp !== undefined &&
      (obj.timestamp = (message.timestamp || BigInt(0)).toString());
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array(),
      ));
    message.newPublicKey !== undefined &&
      (obj.newPublicKey = message.newPublicKey
        ? Any.toJSON(message.newPublicKey)
        : undefined);
    message.newDiversifier !== undefined &&
      (obj.newDiversifier = message.newDiversifier);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Header>, I>>(object: I): Header {
    const message = createBaseHeader();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence.toString());
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp.toString());
    }
    message.signature = object.signature ?? new Uint8Array();
    if (object.newPublicKey !== undefined && object.newPublicKey !== null) {
      message.newPublicKey = Any.fromPartial(object.newPublicKey);
    }
    message.newDiversifier = object.newDiversifier ?? "";
    return message;
  },
};
function createBaseMisbehaviour(): Misbehaviour {
  return {
    clientId: "",
    sequence: BigInt(0),
    signatureOne: undefined,
    signatureTwo: undefined,
  };
}
export const Misbehaviour = {
  typeUrl: "/ibc.lightclients.solomachine.v2.Misbehaviour",
  encode(
    message: Misbehaviour,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (message.signatureOne !== undefined) {
      SignatureAndData.encode(
        message.signatureOne,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.signatureTwo !== undefined) {
      SignatureAndData.encode(
        message.signatureTwo,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Misbehaviour {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.sequence = reader.uint64();
          break;
        case 3:
          message.signatureOne = SignatureAndData.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 4:
          message.signatureTwo = SignatureAndData.decode(
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
  fromJSON(object: any): Misbehaviour {
    const obj = createBaseMisbehaviour();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.sequence))
      obj.sequence = BigInt(object.sequence.toString());
    if (isSet(object.signatureOne))
      obj.signatureOne = SignatureAndData.fromJSON(object.signatureOne);
    if (isSet(object.signatureTwo))
      obj.signatureTwo = SignatureAndData.fromJSON(object.signatureTwo);
    return obj;
  },
  toJSON(message: Misbehaviour): JsonSafe<Misbehaviour> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.sequence !== undefined &&
      (obj.sequence = (message.sequence || BigInt(0)).toString());
    message.signatureOne !== undefined &&
      (obj.signatureOne = message.signatureOne
        ? SignatureAndData.toJSON(message.signatureOne)
        : undefined);
    message.signatureTwo !== undefined &&
      (obj.signatureTwo = message.signatureTwo
        ? SignatureAndData.toJSON(message.signatureTwo)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Misbehaviour>, I>>(
    object: I,
  ): Misbehaviour {
    const message = createBaseMisbehaviour();
    message.clientId = object.clientId ?? "";
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence.toString());
    }
    if (object.signatureOne !== undefined && object.signatureOne !== null) {
      message.signatureOne = SignatureAndData.fromPartial(object.signatureOne);
    }
    if (object.signatureTwo !== undefined && object.signatureTwo !== null) {
      message.signatureTwo = SignatureAndData.fromPartial(object.signatureTwo);
    }
    return message;
  },
};
function createBaseSignatureAndData(): SignatureAndData {
  return {
    signature: new Uint8Array(),
    dataType: 0,
    data: new Uint8Array(),
    timestamp: BigInt(0),
  };
}
export const SignatureAndData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.SignatureAndData",
  encode(
    message: SignatureAndData,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.signature.length !== 0) {
      writer.uint32(10).bytes(message.signature);
    }
    if (message.dataType !== 0) {
      writer.uint32(16).int32(message.dataType);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(32).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SignatureAndData {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureAndData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signature = reader.bytes();
          break;
        case 2:
          message.dataType = reader.int32() as any;
          break;
        case 3:
          message.data = reader.bytes();
          break;
        case 4:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SignatureAndData {
    const obj = createBaseSignatureAndData();
    if (isSet(object.signature))
      obj.signature = bytesFromBase64(object.signature);
    if (isSet(object.dataType))
      obj.dataType = dataTypeFromJSON(object.dataType);
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    if (isSet(object.timestamp))
      obj.timestamp = BigInt(object.timestamp.toString());
    return obj;
  },
  toJSON(message: SignatureAndData): JsonSafe<SignatureAndData> {
    const obj: any = {};
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(
        message.signature !== undefined ? message.signature : new Uint8Array(),
      ));
    message.dataType !== undefined &&
      (obj.dataType = dataTypeToJSON(message.dataType));
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array(),
      ));
    message.timestamp !== undefined &&
      (obj.timestamp = (message.timestamp || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SignatureAndData>, I>>(
    object: I,
  ): SignatureAndData {
    const message = createBaseSignatureAndData();
    message.signature = object.signature ?? new Uint8Array();
    message.dataType = object.dataType ?? 0;
    message.data = object.data ?? new Uint8Array();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp.toString());
    }
    return message;
  },
};
function createBaseTimestampedSignatureData(): TimestampedSignatureData {
  return {
    signatureData: new Uint8Array(),
    timestamp: BigInt(0),
  };
}
export const TimestampedSignatureData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.TimestampedSignatureData",
  encode(
    message: TimestampedSignatureData,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.signatureData.length !== 0) {
      writer.uint32(10).bytes(message.signatureData);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestamp);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): TimestampedSignatureData {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampedSignatureData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signatureData = reader.bytes();
          break;
        case 2:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TimestampedSignatureData {
    const obj = createBaseTimestampedSignatureData();
    if (isSet(object.signatureData))
      obj.signatureData = bytesFromBase64(object.signatureData);
    if (isSet(object.timestamp))
      obj.timestamp = BigInt(object.timestamp.toString());
    return obj;
  },
  toJSON(
    message: TimestampedSignatureData,
  ): JsonSafe<TimestampedSignatureData> {
    const obj: any = {};
    message.signatureData !== undefined &&
      (obj.signatureData = base64FromBytes(
        message.signatureData !== undefined
          ? message.signatureData
          : new Uint8Array(),
      ));
    message.timestamp !== undefined &&
      (obj.timestamp = (message.timestamp || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TimestampedSignatureData>, I>>(
    object: I,
  ): TimestampedSignatureData {
    const message = createBaseTimestampedSignatureData();
    message.signatureData = object.signatureData ?? new Uint8Array();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp.toString());
    }
    return message;
  },
};
function createBaseSignBytes(): SignBytes {
  return {
    sequence: BigInt(0),
    timestamp: BigInt(0),
    diversifier: "",
    dataType: 0,
    data: new Uint8Array(),
  };
}
export const SignBytes = {
  typeUrl: "/ibc.lightclients.solomachine.v2.SignBytes",
  encode(
    message: SignBytes,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.diversifier !== "") {
      writer.uint32(26).string(message.diversifier);
    }
    if (message.dataType !== 0) {
      writer.uint32(32).int32(message.dataType);
    }
    if (message.data.length !== 0) {
      writer.uint32(42).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SignBytes {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignBytes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        case 2:
          message.timestamp = reader.uint64();
          break;
        case 3:
          message.diversifier = reader.string();
          break;
        case 4:
          message.dataType = reader.int32() as any;
          break;
        case 5:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SignBytes {
    const obj = createBaseSignBytes();
    if (isSet(object.sequence))
      obj.sequence = BigInt(object.sequence.toString());
    if (isSet(object.timestamp))
      obj.timestamp = BigInt(object.timestamp.toString());
    if (isSet(object.diversifier)) obj.diversifier = String(object.diversifier);
    if (isSet(object.dataType))
      obj.dataType = dataTypeFromJSON(object.dataType);
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: SignBytes): JsonSafe<SignBytes> {
    const obj: any = {};
    message.sequence !== undefined &&
      (obj.sequence = (message.sequence || BigInt(0)).toString());
    message.timestamp !== undefined &&
      (obj.timestamp = (message.timestamp || BigInt(0)).toString());
    message.diversifier !== undefined &&
      (obj.diversifier = message.diversifier);
    message.dataType !== undefined &&
      (obj.dataType = dataTypeToJSON(message.dataType));
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SignBytes>, I>>(
    object: I,
  ): SignBytes {
    const message = createBaseSignBytes();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence.toString());
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp.toString());
    }
    message.diversifier = object.diversifier ?? "";
    message.dataType = object.dataType ?? 0;
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};
function createBaseHeaderData(): HeaderData {
  return {
    newPubKey: undefined,
    newDiversifier: "",
  };
}
export const HeaderData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.HeaderData",
  encode(
    message: HeaderData,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.newPubKey !== undefined) {
      Any.encode(message.newPubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.newDiversifier !== "") {
      writer.uint32(18).string(message.newDiversifier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HeaderData {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeaderData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newPubKey = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.newDiversifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HeaderData {
    const obj = createBaseHeaderData();
    if (isSet(object.newPubKey)) obj.newPubKey = Any.fromJSON(object.newPubKey);
    if (isSet(object.newDiversifier))
      obj.newDiversifier = String(object.newDiversifier);
    return obj;
  },
  toJSON(message: HeaderData): JsonSafe<HeaderData> {
    const obj: any = {};
    message.newPubKey !== undefined &&
      (obj.newPubKey = message.newPubKey
        ? Any.toJSON(message.newPubKey)
        : undefined);
    message.newDiversifier !== undefined &&
      (obj.newDiversifier = message.newDiversifier);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<HeaderData>, I>>(
    object: I,
  ): HeaderData {
    const message = createBaseHeaderData();
    if (object.newPubKey !== undefined && object.newPubKey !== null) {
      message.newPubKey = Any.fromPartial(object.newPubKey);
    }
    message.newDiversifier = object.newDiversifier ?? "";
    return message;
  },
};
function createBaseClientStateData(): ClientStateData {
  return {
    path: new Uint8Array(),
    clientState: undefined,
  };
}
export const ClientStateData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.ClientStateData",
  encode(
    message: ClientStateData,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientStateData {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientStateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClientStateData {
    const obj = createBaseClientStateData();
    if (isSet(object.path)) obj.path = bytesFromBase64(object.path);
    if (isSet(object.clientState))
      obj.clientState = Any.fromJSON(object.clientState);
    return obj;
  },
  toJSON(message: ClientStateData): JsonSafe<ClientStateData> {
    const obj: any = {};
    message.path !== undefined &&
      (obj.path = base64FromBytes(
        message.path !== undefined ? message.path : new Uint8Array(),
      ));
    message.clientState !== undefined &&
      (obj.clientState = message.clientState
        ? Any.toJSON(message.clientState)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ClientStateData>, I>>(
    object: I,
  ): ClientStateData {
    const message = createBaseClientStateData();
    message.path = object.path ?? new Uint8Array();
    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = Any.fromPartial(object.clientState);
    }
    return message;
  },
};
function createBaseConsensusStateData(): ConsensusStateData {
  return {
    path: new Uint8Array(),
    consensusState: undefined,
  };
}
export const ConsensusStateData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.ConsensusStateData",
  encode(
    message: ConsensusStateData,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): ConsensusStateData {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusStateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsensusStateData {
    const obj = createBaseConsensusStateData();
    if (isSet(object.path)) obj.path = bytesFromBase64(object.path);
    if (isSet(object.consensusState))
      obj.consensusState = Any.fromJSON(object.consensusState);
    return obj;
  },
  toJSON(message: ConsensusStateData): JsonSafe<ConsensusStateData> {
    const obj: any = {};
    message.path !== undefined &&
      (obj.path = base64FromBytes(
        message.path !== undefined ? message.path : new Uint8Array(),
      ));
    message.consensusState !== undefined &&
      (obj.consensusState = message.consensusState
        ? Any.toJSON(message.consensusState)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConsensusStateData>, I>>(
    object: I,
  ): ConsensusStateData {
    const message = createBaseConsensusStateData();
    message.path = object.path ?? new Uint8Array();
    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = Any.fromPartial(object.consensusState);
    }
    return message;
  },
};
function createBaseConnectionStateData(): ConnectionStateData {
  return {
    path: new Uint8Array(),
    connection: undefined,
  };
}
export const ConnectionStateData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.ConnectionStateData",
  encode(
    message: ConnectionStateData,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.connection !== undefined) {
      ConnectionEnd.encode(
        message.connection,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): ConnectionStateData {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionStateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.connection = ConnectionEnd.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConnectionStateData {
    const obj = createBaseConnectionStateData();
    if (isSet(object.path)) obj.path = bytesFromBase64(object.path);
    if (isSet(object.connection))
      obj.connection = ConnectionEnd.fromJSON(object.connection);
    return obj;
  },
  toJSON(message: ConnectionStateData): JsonSafe<ConnectionStateData> {
    const obj: any = {};
    message.path !== undefined &&
      (obj.path = base64FromBytes(
        message.path !== undefined ? message.path : new Uint8Array(),
      ));
    message.connection !== undefined &&
      (obj.connection = message.connection
        ? ConnectionEnd.toJSON(message.connection)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConnectionStateData>, I>>(
    object: I,
  ): ConnectionStateData {
    const message = createBaseConnectionStateData();
    message.path = object.path ?? new Uint8Array();
    if (object.connection !== undefined && object.connection !== null) {
      message.connection = ConnectionEnd.fromPartial(object.connection);
    }
    return message;
  },
};
function createBaseChannelStateData(): ChannelStateData {
  return {
    path: new Uint8Array(),
    channel: undefined,
  };
}
export const ChannelStateData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.ChannelStateData",
  encode(
    message: ChannelStateData,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ChannelStateData {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelStateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ChannelStateData {
    const obj = createBaseChannelStateData();
    if (isSet(object.path)) obj.path = bytesFromBase64(object.path);
    if (isSet(object.channel)) obj.channel = Channel.fromJSON(object.channel);
    return obj;
  },
  toJSON(message: ChannelStateData): JsonSafe<ChannelStateData> {
    const obj: any = {};
    message.path !== undefined &&
      (obj.path = base64FromBytes(
        message.path !== undefined ? message.path : new Uint8Array(),
      ));
    message.channel !== undefined &&
      (obj.channel = message.channel
        ? Channel.toJSON(message.channel)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ChannelStateData>, I>>(
    object: I,
  ): ChannelStateData {
    const message = createBaseChannelStateData();
    message.path = object.path ?? new Uint8Array();
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = Channel.fromPartial(object.channel);
    }
    return message;
  },
};
function createBasePacketCommitmentData(): PacketCommitmentData {
  return {
    path: new Uint8Array(),
    commitment: new Uint8Array(),
  };
}
export const PacketCommitmentData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.PacketCommitmentData",
  encode(
    message: PacketCommitmentData,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.commitment.length !== 0) {
      writer.uint32(18).bytes(message.commitment);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): PacketCommitmentData {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketCommitmentData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.commitment = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PacketCommitmentData {
    const obj = createBasePacketCommitmentData();
    if (isSet(object.path)) obj.path = bytesFromBase64(object.path);
    if (isSet(object.commitment))
      obj.commitment = bytesFromBase64(object.commitment);
    return obj;
  },
  toJSON(message: PacketCommitmentData): JsonSafe<PacketCommitmentData> {
    const obj: any = {};
    message.path !== undefined &&
      (obj.path = base64FromBytes(
        message.path !== undefined ? message.path : new Uint8Array(),
      ));
    message.commitment !== undefined &&
      (obj.commitment = base64FromBytes(
        message.commitment !== undefined
          ? message.commitment
          : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PacketCommitmentData>, I>>(
    object: I,
  ): PacketCommitmentData {
    const message = createBasePacketCommitmentData();
    message.path = object.path ?? new Uint8Array();
    message.commitment = object.commitment ?? new Uint8Array();
    return message;
  },
};
function createBasePacketAcknowledgementData(): PacketAcknowledgementData {
  return {
    path: new Uint8Array(),
    acknowledgement: new Uint8Array(),
  };
}
export const PacketAcknowledgementData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.PacketAcknowledgementData",
  encode(
    message: PacketAcknowledgementData,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): PacketAcknowledgementData {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketAcknowledgementData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.acknowledgement = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PacketAcknowledgementData {
    const obj = createBasePacketAcknowledgementData();
    if (isSet(object.path)) obj.path = bytesFromBase64(object.path);
    if (isSet(object.acknowledgement))
      obj.acknowledgement = bytesFromBase64(object.acknowledgement);
    return obj;
  },
  toJSON(
    message: PacketAcknowledgementData,
  ): JsonSafe<PacketAcknowledgementData> {
    const obj: any = {};
    message.path !== undefined &&
      (obj.path = base64FromBytes(
        message.path !== undefined ? message.path : new Uint8Array(),
      ));
    message.acknowledgement !== undefined &&
      (obj.acknowledgement = base64FromBytes(
        message.acknowledgement !== undefined
          ? message.acknowledgement
          : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PacketAcknowledgementData>, I>>(
    object: I,
  ): PacketAcknowledgementData {
    const message = createBasePacketAcknowledgementData();
    message.path = object.path ?? new Uint8Array();
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    return message;
  },
};
function createBasePacketReceiptAbsenceData(): PacketReceiptAbsenceData {
  return {
    path: new Uint8Array(),
  };
}
export const PacketReceiptAbsenceData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.PacketReceiptAbsenceData",
  encode(
    message: PacketReceiptAbsenceData,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): PacketReceiptAbsenceData {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketReceiptAbsenceData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PacketReceiptAbsenceData {
    const obj = createBasePacketReceiptAbsenceData();
    if (isSet(object.path)) obj.path = bytesFromBase64(object.path);
    return obj;
  },
  toJSON(
    message: PacketReceiptAbsenceData,
  ): JsonSafe<PacketReceiptAbsenceData> {
    const obj: any = {};
    message.path !== undefined &&
      (obj.path = base64FromBytes(
        message.path !== undefined ? message.path : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PacketReceiptAbsenceData>, I>>(
    object: I,
  ): PacketReceiptAbsenceData {
    const message = createBasePacketReceiptAbsenceData();
    message.path = object.path ?? new Uint8Array();
    return message;
  },
};
function createBaseNextSequenceRecvData(): NextSequenceRecvData {
  return {
    path: new Uint8Array(),
    nextSeqRecv: BigInt(0),
  };
}
export const NextSequenceRecvData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.NextSequenceRecvData",
  encode(
    message: NextSequenceRecvData,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.nextSeqRecv !== BigInt(0)) {
      writer.uint32(16).uint64(message.nextSeqRecv);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): NextSequenceRecvData {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNextSequenceRecvData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.nextSeqRecv = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NextSequenceRecvData {
    const obj = createBaseNextSequenceRecvData();
    if (isSet(object.path)) obj.path = bytesFromBase64(object.path);
    if (isSet(object.nextSeqRecv))
      obj.nextSeqRecv = BigInt(object.nextSeqRecv.toString());
    return obj;
  },
  toJSON(message: NextSequenceRecvData): JsonSafe<NextSequenceRecvData> {
    const obj: any = {};
    message.path !== undefined &&
      (obj.path = base64FromBytes(
        message.path !== undefined ? message.path : new Uint8Array(),
      ));
    message.nextSeqRecv !== undefined &&
      (obj.nextSeqRecv = (message.nextSeqRecv || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<NextSequenceRecvData>, I>>(
    object: I,
  ): NextSequenceRecvData {
    const message = createBaseNextSequenceRecvData();
    message.path = object.path ?? new Uint8Array();
    if (object.nextSeqRecv !== undefined && object.nextSeqRecv !== null) {
      message.nextSeqRecv = BigInt(object.nextSeqRecv.toString());
    }
    return message;
  },
};
