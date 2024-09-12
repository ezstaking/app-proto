/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "archway.cwfees.v1";
/** MsgRegisterAsGranter allows a contract to register itself as a fee granter. */
export interface MsgRegisterAsGranter {
  grantingContract: string;
}
/** MsgRegisterAsGranterResponse defines the response of RegisterAsGranter. */
export interface MsgRegisterAsGranterResponse {}
/** MsgUnregisterAsGranter can be used by a cosmwasm contract to unregister itself as a fee granter. */
export interface MsgUnregisterAsGranter {
  grantingContract: string;
}
/** MsgUnregisterAsGranterResponse defines the response of UnregisterAsGranter. */
export interface MsgUnregisterAsGranterResponse {}
/** IsGrantingContract is the request type of IsGrantingContract RPC. */
export interface IsGrantingContractRequest {
  /**
   * contract_address defines the address of the contract
   * which we want to check if it is a granter or not.
   */
  contractAddress: string;
}
/** IsGrantingContractResponse is the response type of IsGRantingContract RPC. */
export interface IsGrantingContractResponse {
  /** is_granting_contract report if the contract is a granter or not. */
  isGrantingContract: boolean;
}
/** GenesisState represents the genesis state of the cwfeesant module. */
export interface GenesisState {
  grantingContracts: string[];
}
function createBaseMsgRegisterAsGranter(): MsgRegisterAsGranter {
  return {
    grantingContract: "",
  };
}
export const MsgRegisterAsGranter = {
  typeUrl: "/archway.cwfees.v1.MsgRegisterAsGranter",
  encode(
    message: MsgRegisterAsGranter,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.grantingContract !== "") {
      writer.uint32(10).string(message.grantingContract);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgRegisterAsGranter {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAsGranter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantingContract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRegisterAsGranter {
    const obj = createBaseMsgRegisterAsGranter();
    if (isSet(object.grantingContract))
      obj.grantingContract = String(object.grantingContract);
    return obj;
  },
  toJSON(message: MsgRegisterAsGranter): JsonSafe<MsgRegisterAsGranter> {
    const obj: any = {};
    message.grantingContract !== undefined &&
      (obj.grantingContract = message.grantingContract);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterAsGranter>, I>>(
    object: I,
  ): MsgRegisterAsGranter {
    const message = createBaseMsgRegisterAsGranter();
    message.grantingContract = object.grantingContract ?? "";
    return message;
  },
};
function createBaseMsgRegisterAsGranterResponse(): MsgRegisterAsGranterResponse {
  return {};
}
export const MsgRegisterAsGranterResponse = {
  typeUrl: "/archway.cwfees.v1.MsgRegisterAsGranterResponse",
  encode(
    _: MsgRegisterAsGranterResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgRegisterAsGranterResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterAsGranterResponse();
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
  fromJSON(_: any): MsgRegisterAsGranterResponse {
    const obj = createBaseMsgRegisterAsGranterResponse();
    return obj;
  },
  toJSON(
    _: MsgRegisterAsGranterResponse,
  ): JsonSafe<MsgRegisterAsGranterResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRegisterAsGranterResponse>, I>>(
    _: I,
  ): MsgRegisterAsGranterResponse {
    const message = createBaseMsgRegisterAsGranterResponse();
    return message;
  },
};
function createBaseMsgUnregisterAsGranter(): MsgUnregisterAsGranter {
  return {
    grantingContract: "",
  };
}
export const MsgUnregisterAsGranter = {
  typeUrl: "/archway.cwfees.v1.MsgUnregisterAsGranter",
  encode(
    message: MsgUnregisterAsGranter,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.grantingContract !== "") {
      writer.uint32(10).string(message.grantingContract);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgUnregisterAsGranter {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnregisterAsGranter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantingContract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnregisterAsGranter {
    const obj = createBaseMsgUnregisterAsGranter();
    if (isSet(object.grantingContract))
      obj.grantingContract = String(object.grantingContract);
    return obj;
  },
  toJSON(message: MsgUnregisterAsGranter): JsonSafe<MsgUnregisterAsGranter> {
    const obj: any = {};
    message.grantingContract !== undefined &&
      (obj.grantingContract = message.grantingContract);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUnregisterAsGranter>, I>>(
    object: I,
  ): MsgUnregisterAsGranter {
    const message = createBaseMsgUnregisterAsGranter();
    message.grantingContract = object.grantingContract ?? "";
    return message;
  },
};
function createBaseMsgUnregisterAsGranterResponse(): MsgUnregisterAsGranterResponse {
  return {};
}
export const MsgUnregisterAsGranterResponse = {
  typeUrl: "/archway.cwfees.v1.MsgUnregisterAsGranterResponse",
  encode(
    _: MsgUnregisterAsGranterResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgUnregisterAsGranterResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnregisterAsGranterResponse();
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
  fromJSON(_: any): MsgUnregisterAsGranterResponse {
    const obj = createBaseMsgUnregisterAsGranterResponse();
    return obj;
  },
  toJSON(
    _: MsgUnregisterAsGranterResponse,
  ): JsonSafe<MsgUnregisterAsGranterResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgUnregisterAsGranterResponse>, I>>(
    _: I,
  ): MsgUnregisterAsGranterResponse {
    const message = createBaseMsgUnregisterAsGranterResponse();
    return message;
  },
};
function createBaseIsGrantingContractRequest(): IsGrantingContractRequest {
  return {
    contractAddress: "",
  };
}
export const IsGrantingContractRequest = {
  typeUrl: "/archway.cwfees.v1.IsGrantingContractRequest",
  encode(
    message: IsGrantingContractRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): IsGrantingContractRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsGrantingContractRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IsGrantingContractRequest {
    const obj = createBaseIsGrantingContractRequest();
    if (isSet(object.contractAddress))
      obj.contractAddress = String(object.contractAddress);
    return obj;
  },
  toJSON(
    message: IsGrantingContractRequest,
  ): JsonSafe<IsGrantingContractRequest> {
    const obj: any = {};
    message.contractAddress !== undefined &&
      (obj.contractAddress = message.contractAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<IsGrantingContractRequest>, I>>(
    object: I,
  ): IsGrantingContractRequest {
    const message = createBaseIsGrantingContractRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
};
function createBaseIsGrantingContractResponse(): IsGrantingContractResponse {
  return {
    isGrantingContract: false,
  };
}
export const IsGrantingContractResponse = {
  typeUrl: "/archway.cwfees.v1.IsGrantingContractResponse",
  encode(
    message: IsGrantingContractResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.isGrantingContract === true) {
      writer.uint32(8).bool(message.isGrantingContract);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): IsGrantingContractResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIsGrantingContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isGrantingContract = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IsGrantingContractResponse {
    const obj = createBaseIsGrantingContractResponse();
    if (isSet(object.isGrantingContract))
      obj.isGrantingContract = Boolean(object.isGrantingContract);
    return obj;
  },
  toJSON(
    message: IsGrantingContractResponse,
  ): JsonSafe<IsGrantingContractResponse> {
    const obj: any = {};
    message.isGrantingContract !== undefined &&
      (obj.isGrantingContract = message.isGrantingContract);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<IsGrantingContractResponse>, I>>(
    object: I,
  ): IsGrantingContractResponse {
    const message = createBaseIsGrantingContractResponse();
    message.isGrantingContract = object.isGrantingContract ?? false;
    return message;
  },
};
function createBaseGenesisState(): GenesisState {
  return {
    grantingContracts: [],
  };
}
export const GenesisState = {
  typeUrl: "/archway.cwfees.v1.GenesisState",
  encode(
    message: GenesisState,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.grantingContracts) {
      writer.uint32(10).string(v!);
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
          message.grantingContracts.push(reader.string());
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
    if (Array.isArray(object?.grantingContracts))
      obj.grantingContracts = object.grantingContracts.map((e: any) =>
        String(e),
      );
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.grantingContracts) {
      obj.grantingContracts = message.grantingContracts.map((e) => e);
    } else {
      obj.grantingContracts = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I,
  ): GenesisState {
    const message = createBaseGenesisState();
    message.grantingContracts = object.grantingContracts?.map((e) => e) || [];
    return message;
  },
};
export interface Query {
  /** IsGrantingContract can be used to check if a contract is a granting contract. */
  IsGrantingContract(
    request: IsGrantingContractRequest,
  ): Promise<IsGrantingContractResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.IsGrantingContract = this.IsGrantingContract.bind(this);
  }
  IsGrantingContract(
    request: IsGrantingContractRequest,
  ): Promise<IsGrantingContractResponse> {
    const data = IsGrantingContractRequest.encode(request).finish();
    const promise = this.rpc.request(
      "archway.cwfees.v1.Query",
      "IsGrantingContract",
      data,
    );
    return promise.then((data) =>
      IsGrantingContractResponse.decode(new BinaryReader(data)),
    );
  }
}
export interface Msg {
  /** RegisterAsGranter allows a cosmwasm contract to register itself as a fee granter. */
  RegisterAsGranter(
    request: MsgRegisterAsGranter,
  ): Promise<MsgRegisterAsGranterResponse>;
  /** UnregisterAsGranter allows a cosmwasm contract to unregister itself as a fee granter. */
  UnregisterAsGranter(
    request: MsgUnregisterAsGranter,
  ): Promise<MsgUnregisterAsGranterResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RegisterAsGranter = this.RegisterAsGranter.bind(this);
    this.UnregisterAsGranter = this.UnregisterAsGranter.bind(this);
  }
  RegisterAsGranter(
    request: MsgRegisterAsGranter,
  ): Promise<MsgRegisterAsGranterResponse> {
    const data = MsgRegisterAsGranter.encode(request).finish();
    const promise = this.rpc.request(
      "archway.cwfees.v1.Msg",
      "RegisterAsGranter",
      data,
    );
    return promise.then((data) =>
      MsgRegisterAsGranterResponse.decode(new BinaryReader(data)),
    );
  }
  UnregisterAsGranter(
    request: MsgUnregisterAsGranter,
  ): Promise<MsgUnregisterAsGranterResponse> {
    const data = MsgUnregisterAsGranter.encode(request).finish();
    const promise = this.rpc.request(
      "archway.cwfees.v1.Msg",
      "UnregisterAsGranter",
      data,
    );
    return promise.then((data) =>
      MsgUnregisterAsGranterResponse.decode(new BinaryReader(data)),
    );
  }
}
