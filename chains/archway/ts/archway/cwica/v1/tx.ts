/* eslint-disable */
import { Any } from "../../../google/protobuf/any";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "archway.cwica.v1";
/**
 * MsgRegisterInterchainAccount defines the Msg/RegisterInterchainAccount
 * request type.
 */
export interface MsgRegisterInterchainAccount {
  /**
   * contract_address is the address of the contrat who wants to register an ica
   * account on the counterparty chain
   */
  contractAddress: string;
  /** connection_id is the connection id between the two chains */
  connectionId: string;
}
/**
 * MsgRegisterInterchainAccountResponse defines the response for
 * Msg/RegisterInterchainAccount
 */
export interface MsgRegisterInterchainAccountResponse {}
/** MsgSendTx defines the Msg/SendTx request type. */
export interface MsgSendTx {
  /**
   * contract_address is the address of the who wants to submit a transaction to
   * the counterparty chain
   */
  contractAddress: string;
  /** connection_id is the connection id between the two chains */
  connectionId: string;
  /** msgs are the messages to be submitted to the counterparty chain */
  msgs: Any[];
  /** memo is the memo to be included in the packet */
  memo: string;
  /** timeout in seconds after which the packet times out */
  timeout: bigint;
}
/** MsgSendTxResponse defines the response for Msg/SendTx */
export interface MsgSendTxResponse {
  /**
   * sequence_id is the channel's sequence_id for outgoing ibc packet. Unique
   * per a channel.
   */
  sequenceId: bigint;
  /** channel is the channel id the transaction was submitted from */
  channel: string;
}
/** MsgUpdateParams is the MsgUpdateParams request type. */
export interface MsgUpdateParams {
  /**
   * authority is the address of the authority that is allowed to update the
   * cwica module parameters.
   */
  authority: string;
  /**
   * params deines the module parmeters to update
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
/** MsgUpdateParamsResponse is the MsgUpdateParams response type. */
export interface MsgUpdateParamsResponse {}
function createBaseMsgRegisterInterchainAccount(): MsgRegisterInterchainAccount {
  return {
    contractAddress: "",
    connectionId: "",
  };
}
export const MsgRegisterInterchainAccount = {
  typeUrl: "/archway.cwica.v1.MsgRegisterInterchainAccount",
  encode(
    message: MsgRegisterInterchainAccount,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgRegisterInterchainAccount {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterInterchainAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterInterchainAccount {
    const obj = createBaseMsgRegisterInterchainAccount();
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    if (isSet(object.connectionId))
      obj.connectionId = String(object.connectionId);
    return obj;
  },
  toJSON(
    message: MsgRegisterInterchainAccount,
  ): JsonSafe<MsgRegisterInterchainAccount> {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterInterchainAccount>, I>>(
    object: I,
  ): MsgRegisterInterchainAccount {
    const message = createBaseMsgRegisterInterchainAccount();
    message.contractAddress = object.contractAddress ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  },
};
function createBaseMsgRegisterInterchainAccountResponse(): MsgRegisterInterchainAccountResponse {
  return {};
}
export const MsgRegisterInterchainAccountResponse = {
  typeUrl: "/archway.cwica.v1.MsgRegisterInterchainAccountResponse",
  encode(
    _: MsgRegisterInterchainAccountResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgRegisterInterchainAccountResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterInterchainAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRegisterInterchainAccountResponse {
    const obj = createBaseMsgRegisterInterchainAccountResponse();
    return obj;
  },
  toJSON(
    _: MsgRegisterInterchainAccountResponse,
  ): JsonSafe<MsgRegisterInterchainAccountResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<MsgRegisterInterchainAccountResponse>, I>,
  >(_: I): MsgRegisterInterchainAccountResponse {
    const message = createBaseMsgRegisterInterchainAccountResponse();
    return message;
  },
};
function createBaseMsgSendTx(): MsgSendTx {
  return {
    contractAddress: "",
    connectionId: "",
    msgs: [],
    memo: "",
    timeout: BigInt(0),
  };
}
export const MsgSendTx = {
  typeUrl: "/archway.cwica.v1.MsgSendTx",
  encode(
    message: MsgSendTx,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    for (const v of message.msgs) {
      Any.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.memo !== "") {
      writer.uint32(34).string(message.memo);
    }
    if (message.timeout !== BigInt(0)) {
      writer.uint32(40).uint64(message.timeout);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSendTx {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        case 3:
          message.msgs.push(Any.decode(reader, reader.uint32()));
          break;
        case 4:
          message.memo = reader.string();
          break;
        case 5:
          message.timeout = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSendTx {
    const obj = createBaseMsgSendTx();
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    if (isSet(object.connectionId))
      obj.connectionId = String(object.connectionId);
    if (Array.isArray(object?.msgs))
      obj.msgs = object.msgs.map((e: any) => Any.fromJSON(e));
    if (isSet(object.memo)) obj.memo = String(object.memo);
    if (isSet(object.timeout)) obj.timeout = BigInt(object.timeout.toString());
    return obj;
  },
  toJSON(message: MsgSendTx): JsonSafe<MsgSendTx> {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.connectionId !== undefined &&
      (obj.connectionId = message.connectionId);
    if (message.msgs) {
      obj.msgs = message.msgs.map((e) => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.msgs = [];
    }
    message.memo !== undefined && (obj.memo = message.memo);
    message.timeout !== undefined &&
      (obj.timeout = (message.timeout || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSendTx>, I>>(
    object: I,
  ): MsgSendTx {
    const message = createBaseMsgSendTx();
    message.contractAddress = object.contractAddress ?? "";
    message.connectionId = object.connectionId ?? "";
    message.msgs = object.msgs?.map((e) => Any.fromPartial(e)) || [];
    message.memo = object.memo ?? "";
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = BigInt(object.timeout.toString());
    }
    return message;
  },
};
function createBaseMsgSendTxResponse(): MsgSendTxResponse {
  return {
    sequenceId: BigInt(0),
    channel: "",
  };
}
export const MsgSendTxResponse = {
  typeUrl: "/archway.cwica.v1.MsgSendTxResponse",
  encode(
    message: MsgSendTxResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.sequenceId !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequenceId);
    }
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSendTxResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequenceId = reader.uint64();
          break;
        case 2:
          message.channel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSendTxResponse {
    const obj = createBaseMsgSendTxResponse();
    if (isSet(object.sequenceId))
      obj.sequenceId = BigInt(object.sequenceId.toString());
    if (isSet(object.channel)) obj.channel = String(object.channel);
    return obj;
  },
  toJSON(message: MsgSendTxResponse): JsonSafe<MsgSendTxResponse> {
    const obj: any = {};
    message.sequenceId !== undefined &&
      (obj.sequenceId = (message.sequenceId || BigInt(0)).toString());
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSendTxResponse>, I>>(
    object: I,
  ): MsgSendTxResponse {
    const message = createBaseMsgSendTxResponse();
    if (object.sequenceId !== undefined && object.sequenceId !== null) {
      message.sequenceId = BigInt(object.sequenceId.toString());
    }
    message.channel = object.channel ?? "";
    return message;
  },
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  typeUrl: "/archway.cwica.v1.MsgUpdateParams",
  encode(
    message: MsgUpdateParams,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    const obj = createBaseMsgUpdateParams();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParams>, I>>(
    object: I,
  ): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/archway.cwica.v1.MsgUpdateParamsResponse",
  encode(
    _: MsgUpdateParamsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgUpdateParamsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    const obj = createBaseMsgUpdateParamsResponse();
    return obj;
  },
  toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateParamsResponse>, I>>(
    _: I,
  ): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
};
/** Msg defines the Msg service. */
export interface Msg {
  /** RegisterInterchainAccount registers an account on the counterparty chain. */
  RegisterInterchainAccount(
    request: MsgRegisterInterchainAccount,
  ): Promise<MsgRegisterInterchainAccountResponse>;
  /** SendTx submits a transaction with msgs to the counterparty chain. */
  SendTx(request: MsgSendTx): Promise<MsgSendTxResponse>;
  /** UpdateParams updates the cwica module parameters. */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RegisterInterchainAccount = this.RegisterInterchainAccount.bind(this);
    this.SendTx = this.SendTx.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  RegisterInterchainAccount(
    request: MsgRegisterInterchainAccount,
  ): Promise<MsgRegisterInterchainAccountResponse> {
    const data = MsgRegisterInterchainAccount.encode(request).finish();
    const promise = this.rpc.request(
      "archway.cwica.v1.Msg",
      "RegisterInterchainAccount",
      data,
    );
    return promise.then((data) =>
      MsgRegisterInterchainAccountResponse.decode(new BinaryReader(data)),
    );
  }
  SendTx(request: MsgSendTx): Promise<MsgSendTxResponse> {
    const data = MsgSendTx.encode(request).finish();
    const promise = this.rpc.request("archway.cwica.v1.Msg", "SendTx", data);
    return promise.then((data) =>
      MsgSendTxResponse.decode(new BinaryReader(data)),
    );
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request(
      "archway.cwica.v1.Msg",
      "UpdateParams",
      data,
    );
    return promise.then((data) =>
      MsgUpdateParamsResponse.decode(new BinaryReader(data)),
    );
  }
}
