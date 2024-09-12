/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../binary";
import {
  isSet,
  bytesFromBase64,
  base64FromBytes,
  DeepPartial,
  Exact,
} from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "tendermint.crypto";
/** PublicKey defines the keys available for use with Tendermint Validators */
export interface PublicKey {
  ed25519?: Uint8Array;
}
/**
 * PrivateKey defines the keys available for use with Tendermint Validators
 * WARNING PrivateKey is used for internal purposes only
 */
export interface PrivateKey {
  ed25519?: Uint8Array;
}
function createBasePublicKey(): PublicKey {
  return {
    ed25519: undefined,
  };
}
export const PublicKey = {
  typeUrl: "/tendermint.crypto.PublicKey",
  encode(
    message: PublicKey,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.ed25519 !== undefined) {
      writer.uint32(10).bytes(message.ed25519);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PublicKey {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublicKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ed25519 = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PublicKey {
    const obj = createBasePublicKey();
    if (isSet(object.ed25519)) obj.ed25519 = bytesFromBase64(object.ed25519);
    return obj;
  },
  toJSON(message: PublicKey): JsonSafe<PublicKey> {
    const obj: any = {};
    message.ed25519 !== undefined &&
      (obj.ed25519 =
        message.ed25519 !== undefined
          ? base64FromBytes(message.ed25519)
          : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PublicKey>, I>>(
    object: I,
  ): PublicKey {
    const message = createBasePublicKey();
    message.ed25519 = object.ed25519 ?? undefined;
    return message;
  },
};
function createBasePrivateKey(): PrivateKey {
  return {
    ed25519: undefined,
  };
}
export const PrivateKey = {
  typeUrl: "/tendermint.crypto.PrivateKey",
  encode(
    message: PrivateKey,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.ed25519 !== undefined) {
      writer.uint32(10).bytes(message.ed25519);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PrivateKey {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivateKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ed25519 = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PrivateKey {
    const obj = createBasePrivateKey();
    if (isSet(object.ed25519)) obj.ed25519 = bytesFromBase64(object.ed25519);
    return obj;
  },
  toJSON(message: PrivateKey): JsonSafe<PrivateKey> {
    const obj: any = {};
    message.ed25519 !== undefined &&
      (obj.ed25519 =
        message.ed25519 !== undefined
          ? base64FromBytes(message.ed25519)
          : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PrivateKey>, I>>(
    object: I,
  ): PrivateKey {
    const message = createBasePrivateKey();
    message.ed25519 = object.ed25519 ?? undefined;
    return message;
  },
};
