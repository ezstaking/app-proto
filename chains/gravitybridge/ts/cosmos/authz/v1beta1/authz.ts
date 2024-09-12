/* eslint-disable */
import { Any } from "../../../google/protobuf/any";
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
export const protobufPackage = "cosmos.authz.v1beta1";
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorization {
  /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
  msg: string;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface Grant {
  authorization?: Any;
  expiration: Timestamp;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GrantAuthorization {
  granter: string;
  grantee: string;
  authorization?: Any;
  expiration: Timestamp;
}
function createBaseGenericAuthorization(): GenericAuthorization {
  return {
    msg: "",
  };
}
export const GenericAuthorization = {
  typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
  encode(
    message: GenericAuthorization,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.msg !== "") {
      writer.uint32(10).string(message.msg);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GenericAuthorization {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenericAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenericAuthorization {
    const obj = createBaseGenericAuthorization();
    if (isSet(object.msg)) obj.msg = String(object.msg);
    return obj;
  },
  toJSON(message: GenericAuthorization): JsonSafe<GenericAuthorization> {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenericAuthorization>, I>>(
    object: I,
  ): GenericAuthorization {
    const message = createBaseGenericAuthorization();
    message.msg = object.msg ?? "";
    return message;
  },
};
function createBaseGrant(): Grant {
  return {
    authorization: undefined,
    expiration: Timestamp.fromPartial({}),
  };
}
export const Grant = {
  typeUrl: "/cosmos.authz.v1beta1.Grant",
  encode(
    message: Grant,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.authorization !== undefined) {
      Any.encode(message.authorization, writer.uint32(10).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(message.expiration, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Grant {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorization = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.expiration = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Grant {
    const obj = createBaseGrant();
    if (isSet(object.authorization))
      obj.authorization = Any.fromJSON(object.authorization);
    if (isSet(object.expiration))
      obj.expiration = fromJsonTimestamp(object.expiration);
    return obj;
  },
  toJSON(message: Grant): JsonSafe<Grant> {
    const obj: any = {};
    message.authorization !== undefined &&
      (obj.authorization = message.authorization
        ? Any.toJSON(message.authorization)
        : undefined);
    message.expiration !== undefined &&
      (obj.expiration = fromTimestamp(message.expiration).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Grant>, I>>(object: I): Grant {
    const message = createBaseGrant();
    if (object.authorization !== undefined && object.authorization !== null) {
      message.authorization = Any.fromPartial(object.authorization);
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = Timestamp.fromPartial(object.expiration);
    }
    return message;
  },
};
function createBaseGrantAuthorization(): GrantAuthorization {
  return {
    granter: "",
    grantee: "",
    authorization: undefined,
    expiration: Timestamp.fromPartial({}),
  };
}
export const GrantAuthorization = {
  typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
  encode(
    message: GrantAuthorization,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.authorization !== undefined) {
      Any.encode(message.authorization, writer.uint32(26).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(message.expiration, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GrantAuthorization {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.authorization = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.expiration = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GrantAuthorization {
    const obj = createBaseGrantAuthorization();
    if (isSet(object.granter)) obj.granter = String(object.granter);
    if (isSet(object.grantee)) obj.grantee = String(object.grantee);
    if (isSet(object.authorization))
      obj.authorization = Any.fromJSON(object.authorization);
    if (isSet(object.expiration))
      obj.expiration = fromJsonTimestamp(object.expiration);
    return obj;
  },
  toJSON(message: GrantAuthorization): JsonSafe<GrantAuthorization> {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.authorization !== undefined &&
      (obj.authorization = message.authorization
        ? Any.toJSON(message.authorization)
        : undefined);
    message.expiration !== undefined &&
      (obj.expiration = fromTimestamp(message.expiration).toISOString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GrantAuthorization>, I>>(
    object: I,
  ): GrantAuthorization {
    const message = createBaseGrantAuthorization();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    if (object.authorization !== undefined && object.authorization !== null) {
      message.authorization = Any.fromPartial(object.authorization);
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = Timestamp.fromPartial(object.expiration);
    }
    return message;
  },
};
