/* eslint-disable */
import { TxInfo, ContractOperationInfo } from "./tracking";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "archway.tracking.v1";
/** GenesisState defines the initial state of the tracking module. */
export interface GenesisState {
  /** tx_info_last_id defines the last unique ID for a TxInfo objs. */
  txInfoLastId: bigint;
  /** tx_infos defines a list of all the tracked transactions. */
  txInfos: TxInfo[];
  /**
   * contract_op_info_last_id defines the last unique ID for
   * ContractOperationInfo objs.
   */
  contractOpInfoLastId: bigint;
  /** contract_op_infos defines a list of all the tracked contract operations. */
  contractOpInfos: ContractOperationInfo[];
}
function createBaseGenesisState(): GenesisState {
  return {
    txInfoLastId: BigInt(0),
    txInfos: [],
    contractOpInfoLastId: BigInt(0),
    contractOpInfos: [],
  };
}
export const GenesisState = {
  typeUrl: "/archway.tracking.v1.GenesisState",
  encode(
    message: GenesisState,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.txInfoLastId !== BigInt(0)) {
      writer.uint32(8).uint64(message.txInfoLastId);
    }
    for (const v of message.txInfos) {
      TxInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.contractOpInfoLastId !== BigInt(0)) {
      writer.uint32(24).uint64(message.contractOpInfoLastId);
    }
    for (const v of message.contractOpInfos) {
      ContractOperationInfo.encode(v!, writer.uint32(34).fork()).ldelim();
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
          message.txInfoLastId = reader.uint64();
          break;
        case 2:
          message.txInfos.push(TxInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.contractOpInfoLastId = reader.uint64();
          break;
        case 4:
          message.contractOpInfos.push(
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
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.txInfoLastId))
      obj.txInfoLastId = BigInt(object.txInfoLastId.toString());
    if (Array.isArray(object?.txInfos))
      obj.txInfos = object.txInfos.map((e: any) => TxInfo.fromJSON(e));
    if (isSet(object.contractOpInfoLastId))
      obj.contractOpInfoLastId = BigInt(object.contractOpInfoLastId.toString());
    if (Array.isArray(object?.contractOpInfos))
      obj.contractOpInfos = object.contractOpInfos.map((e: any) =>
        ContractOperationInfo.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.txInfoLastId !== undefined &&
      (obj.txInfoLastId = (message.txInfoLastId || BigInt(0)).toString());
    if (message.txInfos) {
      obj.txInfos = message.txInfos.map((e) =>
        e ? TxInfo.toJSON(e) : undefined,
      );
    } else {
      obj.txInfos = [];
    }
    message.contractOpInfoLastId !== undefined &&
      (obj.contractOpInfoLastId = (
        message.contractOpInfoLastId || BigInt(0)
      ).toString());
    if (message.contractOpInfos) {
      obj.contractOpInfos = message.contractOpInfos.map((e) =>
        e ? ContractOperationInfo.toJSON(e) : undefined,
      );
    } else {
      obj.contractOpInfos = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I,
  ): GenesisState {
    const message = createBaseGenesisState();
    if (object.txInfoLastId !== undefined && object.txInfoLastId !== null) {
      message.txInfoLastId = BigInt(object.txInfoLastId.toString());
    }
    message.txInfos = object.txInfos?.map((e) => TxInfo.fromPartial(e)) || [];
    if (
      object.contractOpInfoLastId !== undefined &&
      object.contractOpInfoLastId !== null
    ) {
      message.contractOpInfoLastId = BigInt(
        object.contractOpInfoLastId.toString(),
      );
    }
    message.contractOpInfos =
      object.contractOpInfos?.map((e) =>
        ContractOperationInfo.fromPartial(e),
      ) || [];
    return message;
  },
};
