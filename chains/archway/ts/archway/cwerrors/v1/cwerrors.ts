/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "archway.cwerrors.v1";
/** ModuleErrors defines the module level error codes */
export enum ModuleErrors {
  /** ERR_UNKNOWN - ERR_UNKNOWN is the default error code */
  ERR_UNKNOWN = 0,
  /** ERR_CALLBACK_EXECUTION_FAILED - ERR_CALLBACK_EXECUTION_FAILED is the error code for when the error callback fails */
  ERR_CALLBACK_EXECUTION_FAILED = 1,
  UNRECOGNIZED = -1,
}
export function moduleErrorsFromJSON(object: any): ModuleErrors {
  switch (object) {
    case 0:
    case "ERR_UNKNOWN":
      return ModuleErrors.ERR_UNKNOWN;
    case 1:
    case "ERR_CALLBACK_EXECUTION_FAILED":
      return ModuleErrors.ERR_CALLBACK_EXECUTION_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ModuleErrors.UNRECOGNIZED;
  }
}
export function moduleErrorsToJSON(object: ModuleErrors): string {
  switch (object) {
    case ModuleErrors.ERR_UNKNOWN:
      return "ERR_UNKNOWN";
    case ModuleErrors.ERR_CALLBACK_EXECUTION_FAILED:
      return "ERR_CALLBACK_EXECUTION_FAILED";
    case ModuleErrors.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** SudoError defines the sudo message for the error callback */
export interface SudoError {
  /** module_name is the name of the module throwing the error */
  moduleName: string;
  /** error_code is the module level error code */
  errorCode: number;
  /**
   * contract_address is the address of the contract which will receive the
   * error callback
   */
  contractAddress: string;
  /** input_payload is any input which caused the error */
  inputPayload: string;
  /** error_message is the error message */
  errorMessage: string;
}
function createBaseSudoError(): SudoError {
  return {
    moduleName: "",
    errorCode: 0,
    contractAddress: "",
    inputPayload: "",
    errorMessage: "",
  };
}
export const SudoError = {
  typeUrl: "/archway.cwerrors.v1.SudoError",
  encode(
    message: SudoError,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    if (message.errorCode !== 0) {
      writer.uint32(16).int32(message.errorCode);
    }
    if (message.contractAddress !== "") {
      writer.uint32(26).string(message.contractAddress);
    }
    if (message.inputPayload !== "") {
      writer.uint32(34).string(message.inputPayload);
    }
    if (message.errorMessage !== "") {
      writer.uint32(42).string(message.errorMessage);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SudoError {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSudoError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        case 2:
          message.errorCode = reader.int32();
          break;
        case 3:
          message.contractAddress = reader.string();
          break;
        case 4:
          message.inputPayload = reader.string();
          break;
        case 5:
          message.errorMessage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SudoError {
    const obj = createBaseSudoError();
    if (isSet(object.moduleName)) obj.moduleName = String(object.moduleName);
    if (isSet(object.errorCode)) obj.errorCode = Number(object.errorCode);
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    if (isSet(object.inputPayload))
      obj.inputPayload = String(object.inputPayload);
    if (isSet(object.errorMessage))
      obj.errorMessage = String(object.errorMessage);
    return obj;
  },
  toJSON(message: SudoError): JsonSafe<SudoError> {
    const obj: any = {};
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    message.errorCode !== undefined &&
      (obj.errorCode = Math.round(message.errorCode));
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    message.inputPayload !== undefined &&
      (obj.inputPayload = message.inputPayload);
    message.errorMessage !== undefined &&
      (obj.errorMessage = message.errorMessage);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SudoError>, I>>(
    object: I,
  ): SudoError {
    const message = createBaseSudoError();
    message.moduleName = object.moduleName ?? "";
    message.errorCode = object.errorCode ?? 0;
    message.contractAddress = object.contractAddress ?? "";
    message.inputPayload = object.inputPayload ?? "";
    message.errorMessage = object.errorMessage ?? "";
    return message;
  },
};
