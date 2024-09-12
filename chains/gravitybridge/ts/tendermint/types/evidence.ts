/* eslint-disable */
import { Vote, SignedHeader, Header } from "./types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { PublicKey } from "../crypto/keys";
import { BinaryReader, BinaryWriter } from "../../binary";
import {
  isSet,
  fromJsonTimestamp,
  fromTimestamp,
  DeepPartial,
  Exact,
  bytesFromBase64,
  base64FromBytes,
} from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "tendermint.types";
/**
 * DuplicateVoteEvidence contains evidence a validator signed two conflicting
 * votes.
 */
export interface DuplicateVoteEvidence {
  voteA?: Vote;
  voteB?: Vote;
  timestamp: Timestamp;
}
export interface PotentialAmnesiaEvidence {
  voteA?: Vote;
  voteB?: Vote;
  heightStamp: bigint;
  timestamp: Timestamp;
}
export interface AmnesiaEvidence {
  potentialAmnesiaEvidence?: PotentialAmnesiaEvidence;
  polc?: ProofOfLockChange;
}
export interface ConflictingHeadersEvidence {
  h1?: SignedHeader;
  h2?: SignedHeader;
}
export interface LunaticValidatorEvidence {
  header?: Header;
  vote?: Vote;
  invalidHeaderField: string;
  timestamp: Timestamp;
}
export interface Evidence {
  duplicateVoteEvidence?: DuplicateVoteEvidence;
  conflictingHeadersEvidence?: ConflictingHeadersEvidence;
  lunaticValidatorEvidence?: LunaticValidatorEvidence;
  potentialAmnesiaEvidence?: PotentialAmnesiaEvidence;
  amnesiaEvidence?: AmnesiaEvidence;
}
/** EvidenceData contains any evidence of malicious wrong-doing by validators */
export interface EvidenceData {
  evidence: Evidence[];
  hash: Uint8Array;
}
export interface ProofOfLockChange {
  votes: Vote[];
  pubKey?: PublicKey;
}
function createBaseDuplicateVoteEvidence(): DuplicateVoteEvidence {
  return {
    voteA: undefined,
    voteB: undefined,
    timestamp: Timestamp.fromPartial({}),
  };
}
export const DuplicateVoteEvidence = {
  typeUrl: "/tendermint.types.DuplicateVoteEvidence",
  encode(
    message: DuplicateVoteEvidence,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.voteA !== undefined) {
      Vote.encode(message.voteA, writer.uint32(10).fork()).ldelim();
    }
    if (message.voteB !== undefined) {
      Vote.encode(message.voteB, writer.uint32(18).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): DuplicateVoteEvidence {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDuplicateVoteEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteA = Vote.decode(reader, reader.uint32());
          break;
        case 2:
          message.voteB = Vote.decode(reader, reader.uint32());
          break;
        case 3:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DuplicateVoteEvidence {
    const obj = createBaseDuplicateVoteEvidence();
    if (isSet(object.voteA)) obj.voteA = Vote.fromJSON(object.voteA);
    if (isSet(object.voteB)) obj.voteB = Vote.fromJSON(object.voteB);
    if (isSet(object.timestamp))
      obj.timestamp = fromJsonTimestamp(object.timestamp);
    return obj;
  },
  toJSON(message: DuplicateVoteEvidence): JsonSafe<DuplicateVoteEvidence> {
    const obj: any = {};
    message.voteA !== undefined &&
      (obj.voteA = message.voteA ? Vote.toJSON(message.voteA) : undefined);
    message.voteB !== undefined &&
      (obj.voteB = message.voteB ? Vote.toJSON(message.voteB) : undefined);
    message.timestamp !== undefined &&
      (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<DuplicateVoteEvidence>, I>>(
    object: I,
  ): DuplicateVoteEvidence {
    const message = createBaseDuplicateVoteEvidence();
    if (object.voteA !== undefined && object.voteA !== null) {
      message.voteA = Vote.fromPartial(object.voteA);
    }
    if (object.voteB !== undefined && object.voteB !== null) {
      message.voteB = Vote.fromPartial(object.voteB);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromPartial(object.timestamp);
    }
    return message;
  },
};
function createBasePotentialAmnesiaEvidence(): PotentialAmnesiaEvidence {
  return {
    voteA: undefined,
    voteB: undefined,
    heightStamp: BigInt(0),
    timestamp: Timestamp.fromPartial({}),
  };
}
export const PotentialAmnesiaEvidence = {
  typeUrl: "/tendermint.types.PotentialAmnesiaEvidence",
  encode(
    message: PotentialAmnesiaEvidence,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.voteA !== undefined) {
      Vote.encode(message.voteA, writer.uint32(10).fork()).ldelim();
    }
    if (message.voteB !== undefined) {
      Vote.encode(message.voteB, writer.uint32(18).fork()).ldelim();
    }
    if (message.heightStamp !== BigInt(0)) {
      writer.uint32(24).int64(message.heightStamp);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): PotentialAmnesiaEvidence {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePotentialAmnesiaEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteA = Vote.decode(reader, reader.uint32());
          break;
        case 2:
          message.voteB = Vote.decode(reader, reader.uint32());
          break;
        case 3:
          message.heightStamp = reader.int64();
          break;
        case 4:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PotentialAmnesiaEvidence {
    const obj = createBasePotentialAmnesiaEvidence();
    if (isSet(object.voteA)) obj.voteA = Vote.fromJSON(object.voteA);
    if (isSet(object.voteB)) obj.voteB = Vote.fromJSON(object.voteB);
    if (isSet(object.heightStamp))
      obj.heightStamp = BigInt(object.heightStamp.toString());
    if (isSet(object.timestamp))
      obj.timestamp = fromJsonTimestamp(object.timestamp);
    return obj;
  },
  toJSON(
    message: PotentialAmnesiaEvidence,
  ): JsonSafe<PotentialAmnesiaEvidence> {
    const obj: any = {};
    message.voteA !== undefined &&
      (obj.voteA = message.voteA ? Vote.toJSON(message.voteA) : undefined);
    message.voteB !== undefined &&
      (obj.voteB = message.voteB ? Vote.toJSON(message.voteB) : undefined);
    message.heightStamp !== undefined &&
      (obj.heightStamp = (message.heightStamp || BigInt(0)).toString());
    message.timestamp !== undefined &&
      (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PotentialAmnesiaEvidence>, I>>(
    object: I,
  ): PotentialAmnesiaEvidence {
    const message = createBasePotentialAmnesiaEvidence();
    if (object.voteA !== undefined && object.voteA !== null) {
      message.voteA = Vote.fromPartial(object.voteA);
    }
    if (object.voteB !== undefined && object.voteB !== null) {
      message.voteB = Vote.fromPartial(object.voteB);
    }
    if (object.heightStamp !== undefined && object.heightStamp !== null) {
      message.heightStamp = BigInt(object.heightStamp.toString());
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromPartial(object.timestamp);
    }
    return message;
  },
};
function createBaseAmnesiaEvidence(): AmnesiaEvidence {
  return {
    potentialAmnesiaEvidence: undefined,
    polc: undefined,
  };
}
export const AmnesiaEvidence = {
  typeUrl: "/tendermint.types.AmnesiaEvidence",
  encode(
    message: AmnesiaEvidence,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.potentialAmnesiaEvidence !== undefined) {
      PotentialAmnesiaEvidence.encode(
        message.potentialAmnesiaEvidence,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.polc !== undefined) {
      ProofOfLockChange.encode(message.polc, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AmnesiaEvidence {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAmnesiaEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.potentialAmnesiaEvidence = PotentialAmnesiaEvidence.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.polc = ProofOfLockChange.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AmnesiaEvidence {
    const obj = createBaseAmnesiaEvidence();
    if (isSet(object.potentialAmnesiaEvidence))
      obj.potentialAmnesiaEvidence = PotentialAmnesiaEvidence.fromJSON(
        object.potentialAmnesiaEvidence,
      );
    if (isSet(object.polc)) obj.polc = ProofOfLockChange.fromJSON(object.polc);
    return obj;
  },
  toJSON(message: AmnesiaEvidence): JsonSafe<AmnesiaEvidence> {
    const obj: any = {};
    message.potentialAmnesiaEvidence !== undefined &&
      (obj.potentialAmnesiaEvidence = message.potentialAmnesiaEvidence
        ? PotentialAmnesiaEvidence.toJSON(message.potentialAmnesiaEvidence)
        : undefined);
    message.polc !== undefined &&
      (obj.polc = message.polc
        ? ProofOfLockChange.toJSON(message.polc)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AmnesiaEvidence>, I>>(
    object: I,
  ): AmnesiaEvidence {
    const message = createBaseAmnesiaEvidence();
    if (
      object.potentialAmnesiaEvidence !== undefined &&
      object.potentialAmnesiaEvidence !== null
    ) {
      message.potentialAmnesiaEvidence = PotentialAmnesiaEvidence.fromPartial(
        object.potentialAmnesiaEvidence,
      );
    }
    if (object.polc !== undefined && object.polc !== null) {
      message.polc = ProofOfLockChange.fromPartial(object.polc);
    }
    return message;
  },
};
function createBaseConflictingHeadersEvidence(): ConflictingHeadersEvidence {
  return {
    h1: undefined,
    h2: undefined,
  };
}
export const ConflictingHeadersEvidence = {
  typeUrl: "/tendermint.types.ConflictingHeadersEvidence",
  encode(
    message: ConflictingHeadersEvidence,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.h1 !== undefined) {
      SignedHeader.encode(message.h1, writer.uint32(10).fork()).ldelim();
    }
    if (message.h2 !== undefined) {
      SignedHeader.encode(message.h2, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): ConflictingHeadersEvidence {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConflictingHeadersEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.h1 = SignedHeader.decode(reader, reader.uint32());
          break;
        case 2:
          message.h2 = SignedHeader.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConflictingHeadersEvidence {
    const obj = createBaseConflictingHeadersEvidence();
    if (isSet(object.h1)) obj.h1 = SignedHeader.fromJSON(object.h1);
    if (isSet(object.h2)) obj.h2 = SignedHeader.fromJSON(object.h2);
    return obj;
  },
  toJSON(
    message: ConflictingHeadersEvidence,
  ): JsonSafe<ConflictingHeadersEvidence> {
    const obj: any = {};
    message.h1 !== undefined &&
      (obj.h1 = message.h1 ? SignedHeader.toJSON(message.h1) : undefined);
    message.h2 !== undefined &&
      (obj.h2 = message.h2 ? SignedHeader.toJSON(message.h2) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConflictingHeadersEvidence>, I>>(
    object: I,
  ): ConflictingHeadersEvidence {
    const message = createBaseConflictingHeadersEvidence();
    if (object.h1 !== undefined && object.h1 !== null) {
      message.h1 = SignedHeader.fromPartial(object.h1);
    }
    if (object.h2 !== undefined && object.h2 !== null) {
      message.h2 = SignedHeader.fromPartial(object.h2);
    }
    return message;
  },
};
function createBaseLunaticValidatorEvidence(): LunaticValidatorEvidence {
  return {
    header: undefined,
    vote: undefined,
    invalidHeaderField: "",
    timestamp: Timestamp.fromPartial({}),
  };
}
export const LunaticValidatorEvidence = {
  typeUrl: "/tendermint.types.LunaticValidatorEvidence",
  encode(
    message: LunaticValidatorEvidence,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(18).fork()).ldelim();
    }
    if (message.invalidHeaderField !== "") {
      writer.uint32(26).string(message.invalidHeaderField);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): LunaticValidatorEvidence {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLunaticValidatorEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        case 3:
          message.invalidHeaderField = reader.string();
          break;
        case 4:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LunaticValidatorEvidence {
    const obj = createBaseLunaticValidatorEvidence();
    if (isSet(object.header)) obj.header = Header.fromJSON(object.header);
    if (isSet(object.vote)) obj.vote = Vote.fromJSON(object.vote);
    if (isSet(object.invalidHeaderField))
      obj.invalidHeaderField = String(object.invalidHeaderField);
    if (isSet(object.timestamp))
      obj.timestamp = fromJsonTimestamp(object.timestamp);
    return obj;
  },
  toJSON(
    message: LunaticValidatorEvidence,
  ): JsonSafe<LunaticValidatorEvidence> {
    const obj: any = {};
    message.header !== undefined &&
      (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.vote !== undefined &&
      (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    message.invalidHeaderField !== undefined &&
      (obj.invalidHeaderField = message.invalidHeaderField);
    message.timestamp !== undefined &&
      (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<LunaticValidatorEvidence>, I>>(
    object: I,
  ): LunaticValidatorEvidence {
    const message = createBaseLunaticValidatorEvidence();
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromPartial(object.header);
    }
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromPartial(object.vote);
    }
    message.invalidHeaderField = object.invalidHeaderField ?? "";
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromPartial(object.timestamp);
    }
    return message;
  },
};
function createBaseEvidence(): Evidence {
  return {
    duplicateVoteEvidence: undefined,
    conflictingHeadersEvidence: undefined,
    lunaticValidatorEvidence: undefined,
    potentialAmnesiaEvidence: undefined,
    amnesiaEvidence: undefined,
  };
}
export const Evidence = {
  typeUrl: "/tendermint.types.Evidence",
  encode(
    message: Evidence,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.duplicateVoteEvidence !== undefined) {
      DuplicateVoteEvidence.encode(
        message.duplicateVoteEvidence,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.conflictingHeadersEvidence !== undefined) {
      ConflictingHeadersEvidence.encode(
        message.conflictingHeadersEvidence,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.lunaticValidatorEvidence !== undefined) {
      LunaticValidatorEvidence.encode(
        message.lunaticValidatorEvidence,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.potentialAmnesiaEvidence !== undefined) {
      PotentialAmnesiaEvidence.encode(
        message.potentialAmnesiaEvidence,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.amnesiaEvidence !== undefined) {
      AmnesiaEvidence.encode(
        message.amnesiaEvidence,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Evidence {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duplicateVoteEvidence = DuplicateVoteEvidence.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.conflictingHeadersEvidence =
            ConflictingHeadersEvidence.decode(reader, reader.uint32());
          break;
        case 3:
          message.lunaticValidatorEvidence = LunaticValidatorEvidence.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 4:
          message.potentialAmnesiaEvidence = PotentialAmnesiaEvidence.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 5:
          message.amnesiaEvidence = AmnesiaEvidence.decode(
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
  fromJSON(object: any): Evidence {
    const obj = createBaseEvidence();
    if (isSet(object.duplicateVoteEvidence))
      obj.duplicateVoteEvidence = DuplicateVoteEvidence.fromJSON(
        object.duplicateVoteEvidence,
      );
    if (isSet(object.conflictingHeadersEvidence))
      obj.conflictingHeadersEvidence = ConflictingHeadersEvidence.fromJSON(
        object.conflictingHeadersEvidence,
      );
    if (isSet(object.lunaticValidatorEvidence))
      obj.lunaticValidatorEvidence = LunaticValidatorEvidence.fromJSON(
        object.lunaticValidatorEvidence,
      );
    if (isSet(object.potentialAmnesiaEvidence))
      obj.potentialAmnesiaEvidence = PotentialAmnesiaEvidence.fromJSON(
        object.potentialAmnesiaEvidence,
      );
    if (isSet(object.amnesiaEvidence))
      obj.amnesiaEvidence = AmnesiaEvidence.fromJSON(object.amnesiaEvidence);
    return obj;
  },
  toJSON(message: Evidence): JsonSafe<Evidence> {
    const obj: any = {};
    message.duplicateVoteEvidence !== undefined &&
      (obj.duplicateVoteEvidence = message.duplicateVoteEvidence
        ? DuplicateVoteEvidence.toJSON(message.duplicateVoteEvidence)
        : undefined);
    message.conflictingHeadersEvidence !== undefined &&
      (obj.conflictingHeadersEvidence = message.conflictingHeadersEvidence
        ? ConflictingHeadersEvidence.toJSON(message.conflictingHeadersEvidence)
        : undefined);
    message.lunaticValidatorEvidence !== undefined &&
      (obj.lunaticValidatorEvidence = message.lunaticValidatorEvidence
        ? LunaticValidatorEvidence.toJSON(message.lunaticValidatorEvidence)
        : undefined);
    message.potentialAmnesiaEvidence !== undefined &&
      (obj.potentialAmnesiaEvidence = message.potentialAmnesiaEvidence
        ? PotentialAmnesiaEvidence.toJSON(message.potentialAmnesiaEvidence)
        : undefined);
    message.amnesiaEvidence !== undefined &&
      (obj.amnesiaEvidence = message.amnesiaEvidence
        ? AmnesiaEvidence.toJSON(message.amnesiaEvidence)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Evidence>, I>>(object: I): Evidence {
    const message = createBaseEvidence();
    if (
      object.duplicateVoteEvidence !== undefined &&
      object.duplicateVoteEvidence !== null
    ) {
      message.duplicateVoteEvidence = DuplicateVoteEvidence.fromPartial(
        object.duplicateVoteEvidence,
      );
    }
    if (
      object.conflictingHeadersEvidence !== undefined &&
      object.conflictingHeadersEvidence !== null
    ) {
      message.conflictingHeadersEvidence =
        ConflictingHeadersEvidence.fromPartial(
          object.conflictingHeadersEvidence,
        );
    }
    if (
      object.lunaticValidatorEvidence !== undefined &&
      object.lunaticValidatorEvidence !== null
    ) {
      message.lunaticValidatorEvidence = LunaticValidatorEvidence.fromPartial(
        object.lunaticValidatorEvidence,
      );
    }
    if (
      object.potentialAmnesiaEvidence !== undefined &&
      object.potentialAmnesiaEvidence !== null
    ) {
      message.potentialAmnesiaEvidence = PotentialAmnesiaEvidence.fromPartial(
        object.potentialAmnesiaEvidence,
      );
    }
    if (
      object.amnesiaEvidence !== undefined &&
      object.amnesiaEvidence !== null
    ) {
      message.amnesiaEvidence = AmnesiaEvidence.fromPartial(
        object.amnesiaEvidence,
      );
    }
    return message;
  },
};
function createBaseEvidenceData(): EvidenceData {
  return {
    evidence: [],
    hash: new Uint8Array(),
  };
}
export const EvidenceData = {
  typeUrl: "/tendermint.types.EvidenceData",
  encode(
    message: EvidenceData,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.evidence) {
      Evidence.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EvidenceData {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidenceData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence.push(Evidence.decode(reader, reader.uint32()));
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EvidenceData {
    const obj = createBaseEvidenceData();
    if (Array.isArray(object?.evidence))
      obj.evidence = object.evidence.map((e: any) => Evidence.fromJSON(e));
    if (isSet(object.hash)) obj.hash = bytesFromBase64(object.hash);
    return obj;
  },
  toJSON(message: EvidenceData): JsonSafe<EvidenceData> {
    const obj: any = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map((e) =>
        e ? Evidence.toJSON(e) : undefined,
      );
    } else {
      obj.evidence = [];
    }
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EvidenceData>, I>>(
    object: I,
  ): EvidenceData {
    const message = createBaseEvidenceData();
    message.evidence =
      object.evidence?.map((e) => Evidence.fromPartial(e)) || [];
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
};
function createBaseProofOfLockChange(): ProofOfLockChange {
  return {
    votes: [],
    pubKey: undefined,
  };
}
export const ProofOfLockChange = {
  typeUrl: "/tendermint.types.ProofOfLockChange",
  encode(
    message: ProofOfLockChange,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProofOfLockChange {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofOfLockChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProofOfLockChange {
    const obj = createBaseProofOfLockChange();
    if (Array.isArray(object?.votes))
      obj.votes = object.votes.map((e: any) => Vote.fromJSON(e));
    if (isSet(object.pubKey)) obj.pubKey = PublicKey.fromJSON(object.pubKey);
    return obj;
  },
  toJSON(message: ProofOfLockChange): JsonSafe<ProofOfLockChange> {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    message.pubKey !== undefined &&
      (obj.pubKey = message.pubKey
        ? PublicKey.toJSON(message.pubKey)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ProofOfLockChange>, I>>(
    object: I,
  ): ProofOfLockChange {
    const message = createBaseProofOfLockChange();
    message.votes = object.votes?.map((e) => Vote.fromPartial(e)) || [];
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = PublicKey.fromPartial(object.pubKey);
    }
    return message;
  },
};
