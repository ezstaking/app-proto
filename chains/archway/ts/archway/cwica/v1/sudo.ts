/* eslint-disable */
import { Packet } from "../../../ibc/core/channel/v1/channel";
import { BinaryReader, BinaryWriter } from "../../../binary";
import {
  isSet,
  DeepPartial,
  Exact,
  bytesFromBase64,
  base64FromBytes,
} from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "archway.cwica.v1";
/**
 * Sudopayload is the payload for the sudo call sent by the cwica module on IBC
 * actions
 */
export interface SudoPayload {
  /** ICA is the message which carries the success responses */
  ica?: ICASuccess;
}
/** ICASuccess is the success message after the ICA operation has taken place */
export interface ICASuccess {
  /**
   * account_registered is the message which carries the success response after
   * the ica account has been registered
   */
  accountRegistered?: AccountRegistered;
  /**
   * tx_executed is the message which carries the success response after the ica
   * tx has been executed
   */
  txExecuted?: TxExecuted;
}
/**
 * AccountRegistered is contains the address of the registered account on the
 * counterparty chain
 */
export interface AccountRegistered {
  /**
   * counterparty_address is the address of the account on the counterparty
   * chain
   */
  counterpartyAddress: string;
}
/** TxExecuted is the response message after the execute of the ICA tx */
export interface TxExecuted {
  /** packet is the ibc packet which was executed */
  packet?: Packet;
  /** data is the response data after the tx has been executed */
  data: Uint8Array;
}
function createBaseSudoPayload(): SudoPayload {
  return {
    ica: undefined,
  };
}
export const SudoPayload = {
  typeUrl: "/archway.cwica.v1.SudoPayload",
  encode(
    message: SudoPayload,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.ica !== undefined) {
      ICASuccess.encode(message.ica, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SudoPayload {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSudoPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ica = ICASuccess.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SudoPayload {
    const obj = createBaseSudoPayload();
    if (isSet(object.ica)) obj.ica = ICASuccess.fromJSON(object.ica);
    return obj;
  },
  toJSON(message: SudoPayload): JsonSafe<SudoPayload> {
    const obj: any = {};
    message.ica !== undefined &&
      (obj.ica = message.ica ? ICASuccess.toJSON(message.ica) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SudoPayload>, I>>(
    object: I,
  ): SudoPayload {
    const message = createBaseSudoPayload();
    if (object.ica !== undefined && object.ica !== null) {
      message.ica = ICASuccess.fromPartial(object.ica);
    }
    return message;
  },
};
function createBaseICASuccess(): ICASuccess {
  return {
    accountRegistered: undefined,
    txExecuted: undefined,
  };
}
export const ICASuccess = {
  typeUrl: "/archway.cwica.v1.ICASuccess",
  encode(
    message: ICASuccess,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.accountRegistered !== undefined) {
      AccountRegistered.encode(
        message.accountRegistered,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.txExecuted !== undefined) {
      TxExecuted.encode(message.txExecuted, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ICASuccess {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseICASuccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountRegistered = AccountRegistered.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.txExecuted = TxExecuted.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ICASuccess {
    const obj = createBaseICASuccess();
    if (isSet(object.accountRegistered))
      obj.accountRegistered = AccountRegistered.fromJSON(
        object.accountRegistered,
      );
    if (isSet(object.txExecuted))
      obj.txExecuted = TxExecuted.fromJSON(object.txExecuted);
    return obj;
  },
  toJSON(message: ICASuccess): JsonSafe<ICASuccess> {
    const obj: any = {};
    message.accountRegistered !== undefined &&
      (obj.accountRegistered = message.accountRegistered
        ? AccountRegistered.toJSON(message.accountRegistered)
        : undefined);
    message.txExecuted !== undefined &&
      (obj.txExecuted = message.txExecuted
        ? TxExecuted.toJSON(message.txExecuted)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ICASuccess>, I>>(
    object: I,
  ): ICASuccess {
    const message = createBaseICASuccess();
    if (
      object.accountRegistered !== undefined &&
      object.accountRegistered !== null
    ) {
      message.accountRegistered = AccountRegistered.fromPartial(
        object.accountRegistered,
      );
    }
    if (object.txExecuted !== undefined && object.txExecuted !== null) {
      message.txExecuted = TxExecuted.fromPartial(object.txExecuted);
    }
    return message;
  },
};
function createBaseAccountRegistered(): AccountRegistered {
  return {
    counterpartyAddress: "",
  };
}
export const AccountRegistered = {
  typeUrl: "/archway.cwica.v1.AccountRegistered",
  encode(
    message: AccountRegistered,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.counterpartyAddress !== "") {
      writer.uint32(10).string(message.counterpartyAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AccountRegistered {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountRegistered();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.counterpartyAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccountRegistered {
    const obj = createBaseAccountRegistered();
    if (isSet(object.counterpartyAddress))
      obj.counterpartyAddress = String(object.counterpartyAddress);
    return obj;
  },
  toJSON(message: AccountRegistered): JsonSafe<AccountRegistered> {
    const obj: any = {};
    message.counterpartyAddress !== undefined &&
      (obj.counterpartyAddress = message.counterpartyAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AccountRegistered>, I>>(
    object: I,
  ): AccountRegistered {
    const message = createBaseAccountRegistered();
    message.counterpartyAddress = object.counterpartyAddress ?? "";
    return message;
  },
};
function createBaseTxExecuted(): TxExecuted {
  return {
    packet: undefined,
    data: new Uint8Array(),
  };
}
export const TxExecuted = {
  typeUrl: "/archway.cwica.v1.TxExecuted",
  encode(
    message: TxExecuted,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxExecuted {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxExecuted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TxExecuted {
    const obj = createBaseTxExecuted();
    if (isSet(object.packet)) obj.packet = Packet.fromJSON(object.packet);
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: TxExecuted): JsonSafe<TxExecuted> {
    const obj: any = {};
    message.packet !== undefined &&
      (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TxExecuted>, I>>(
    object: I,
  ): TxExecuted {
    const message = createBaseTxExecuted();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromPartial(object.packet);
    }
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};
