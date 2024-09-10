/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, Exact, Rpc } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "cosmos.base.reflection.v2alpha1";
/** AppDescriptor describes a cosmos-sdk based application */
export interface AppDescriptor {
  /**
   * AuthnDescriptor provides information on how to authenticate transactions on the application
   * NOTE: experimental and subject to change in future releases.
   */
  authn?: AuthnDescriptor;
  /** chain provides the chain descriptor */
  chain?: ChainDescriptor;
  /** codec provides metadata information regarding codec related types */
  codec?: CodecDescriptor;
  /** configuration provides metadata information regarding the sdk.Config type */
  configuration?: ConfigurationDescriptor;
  /** query_services provides metadata information regarding the available queriable endpoints */
  queryServices?: QueryServicesDescriptor;
  /** tx provides metadata information regarding how to send transactions to the given application */
  tx?: TxDescriptor;
}
/** TxDescriptor describes the accepted transaction type */
export interface TxDescriptor {
  /**
   * fullname is the protobuf fullname of the raw transaction type (for instance the tx.Tx type)
   * it is not meant to support polymorphism of transaction types, it is supposed to be used by
   * reflection clients to understand if they can handle a specific transaction type in an application.
   */
  fullname: string;
  /** msgs lists the accepted application messages (sdk.Msg) */
  msgs: MsgDescriptor[];
}
/**
 * AuthnDescriptor provides information on how to sign transactions without relying
 * on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures
 */
export interface AuthnDescriptor {
  /** sign_modes defines the supported signature algorithm */
  signModes: SigningModeDescriptor[];
}
/**
 * SigningModeDescriptor provides information on a signing flow of the application
 * NOTE(fdymylja): here we could go as far as providing an entire flow on how
 * to sign a message given a SigningModeDescriptor, but it's better to think about
 * this another time
 */
export interface SigningModeDescriptor {
  /** name defines the unique name of the signing mode */
  name: string;
  /** number is the unique int32 identifier for the sign_mode enum */
  number: number;
  /**
   * authn_info_provider_method_fullname defines the fullname of the method to call to get
   * the metadata required to authenticate using the provided sign_modes
   */
  authnInfoProviderMethodFullname: string;
}
/** ChainDescriptor describes chain information of the application */
export interface ChainDescriptor {
  /** id is the chain id */
  id: string;
}
/** CodecDescriptor describes the registered interfaces and provides metadata information on the types */
export interface CodecDescriptor {
  /** interfaces is a list of the registerted interfaces descriptors */
  interfaces: InterfaceDescriptor[];
}
/** InterfaceDescriptor describes the implementation of an interface */
export interface InterfaceDescriptor {
  /** fullname is the name of the interface */
  fullname: string;
  /**
   * interface_accepting_messages contains information regarding the proto messages which contain the interface as
   * google.protobuf.Any field
   */
  interfaceAcceptingMessages: InterfaceAcceptingMessageDescriptor[];
  /** interface_implementers is a list of the descriptors of the interface implementers */
  interfaceImplementers: InterfaceImplementerDescriptor[];
}
/** InterfaceImplementerDescriptor describes an interface implementer */
export interface InterfaceImplementerDescriptor {
  /** fullname is the protobuf queryable name of the interface implementer */
  fullname: string;
  /**
   * type_url defines the type URL used when marshalling the type as any
   * this is required so we can provide type safe google.protobuf.Any marshalling and
   * unmarshalling, making sure that we don't accept just 'any' type
   * in our interface fields
   */
  typeUrl: string;
}
/**
 * InterfaceAcceptingMessageDescriptor describes a protobuf message which contains
 * an interface represented as a google.protobuf.Any
 */
export interface InterfaceAcceptingMessageDescriptor {
  /** fullname is the protobuf fullname of the type containing the interface */
  fullname: string;
  /**
   * field_descriptor_names is a list of the protobuf name (not fullname) of the field
   * which contains the interface as google.protobuf.Any (the interface is the same, but
   * it can be in multiple fields of the same proto message)
   */
  fieldDescriptorNames: string[];
}
/** ConfigurationDescriptor contains metadata information on the sdk.Config */
export interface ConfigurationDescriptor {
  /** bech32_account_address_prefix is the account address prefix */
  bech32AccountAddressPrefix: string;
}
/** MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction */
export interface MsgDescriptor {
  /** msg_type_url contains the TypeURL of a sdk.Msg. */
  msgTypeUrl: string;
}
/** GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorRequest {}
/** GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorResponse {
  /** authn describes how to authenticate to the application when sending transactions */
  authn?: AuthnDescriptor;
}
/** GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC */
export interface GetChainDescriptorRequest {}
/** GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC */
export interface GetChainDescriptorResponse {
  /** chain describes application chain information */
  chain?: ChainDescriptor;
}
/** GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC */
export interface GetCodecDescriptorRequest {}
/** GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC */
export interface GetCodecDescriptorResponse {
  /** codec describes the application codec such as registered interfaces and implementations */
  codec?: CodecDescriptor;
}
/** GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorRequest {}
/** GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorResponse {
  /** config describes the application's sdk.Config */
  config?: ConfigurationDescriptor;
}
/** GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorRequest {}
/** GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorResponse {
  /** queries provides information on the available queryable services */
  queries?: QueryServicesDescriptor;
}
/** GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC */
export interface GetTxDescriptorRequest {}
/** GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC */
export interface GetTxDescriptorResponse {
  /**
   * tx provides information on msgs that can be forwarded to the application
   * alongside the accepted transaction protobuf type
   */
  tx?: TxDescriptor;
}
/** QueryServicesDescriptor contains the list of cosmos-sdk queriable services */
export interface QueryServicesDescriptor {
  /** query_services is a list of cosmos-sdk QueryServiceDescriptor */
  queryServices: QueryServiceDescriptor[];
}
/** QueryServiceDescriptor describes a cosmos-sdk queryable service */
export interface QueryServiceDescriptor {
  /** fullname is the protobuf fullname of the service descriptor */
  fullname: string;
  /** is_module describes if this service is actually exposed by an application's module */
  isModule: boolean;
  /** methods provides a list of query service methods */
  methods: QueryMethodDescriptor[];
}
/**
 * QueryMethodDescriptor describes a queryable method of a query service
 * no other info is provided beside method name and tendermint queryable path
 * because it would be redundant with the grpc reflection service
 */
export interface QueryMethodDescriptor {
  /** name is the protobuf name (not fullname) of the method */
  name: string;
  /**
   * full_query_path is the path that can be used to query
   * this method via tendermint abci.Query
   */
  fullQueryPath: string;
}
function createBaseAppDescriptor(): AppDescriptor {
  return {
    authn: undefined,
    chain: undefined,
    codec: undefined,
    configuration: undefined,
    queryServices: undefined,
    tx: undefined,
  };
}
export const AppDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.AppDescriptor",
  encode(
    message: AppDescriptor,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.authn !== undefined) {
      AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
    }
    if (message.chain !== undefined) {
      ChainDescriptor.encode(message.chain, writer.uint32(18).fork()).ldelim();
    }
    if (message.codec !== undefined) {
      CodecDescriptor.encode(message.codec, writer.uint32(26).fork()).ldelim();
    }
    if (message.configuration !== undefined) {
      ConfigurationDescriptor.encode(
        message.configuration,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.queryServices !== undefined) {
      QueryServicesDescriptor.encode(
        message.queryServices,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.tx !== undefined) {
      TxDescriptor.encode(message.tx, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AppDescriptor {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authn = AuthnDescriptor.decode(reader, reader.uint32());
          break;
        case 2:
          message.chain = ChainDescriptor.decode(reader, reader.uint32());
          break;
        case 3:
          message.codec = CodecDescriptor.decode(reader, reader.uint32());
          break;
        case 4:
          message.configuration = ConfigurationDescriptor.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 5:
          message.queryServices = QueryServicesDescriptor.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 6:
          message.tx = TxDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AppDescriptor {
    const obj = createBaseAppDescriptor();
    if (isSet(object.authn)) obj.authn = AuthnDescriptor.fromJSON(object.authn);
    if (isSet(object.chain)) obj.chain = ChainDescriptor.fromJSON(object.chain);
    if (isSet(object.codec)) obj.codec = CodecDescriptor.fromJSON(object.codec);
    if (isSet(object.configuration))
      obj.configuration = ConfigurationDescriptor.fromJSON(
        object.configuration,
      );
    if (isSet(object.queryServices))
      obj.queryServices = QueryServicesDescriptor.fromJSON(
        object.queryServices,
      );
    if (isSet(object.tx)) obj.tx = TxDescriptor.fromJSON(object.tx);
    return obj;
  },
  toJSON(message: AppDescriptor): JsonSafe<AppDescriptor> {
    const obj: any = {};
    message.authn !== undefined &&
      (obj.authn = message.authn
        ? AuthnDescriptor.toJSON(message.authn)
        : undefined);
    message.chain !== undefined &&
      (obj.chain = message.chain
        ? ChainDescriptor.toJSON(message.chain)
        : undefined);
    message.codec !== undefined &&
      (obj.codec = message.codec
        ? CodecDescriptor.toJSON(message.codec)
        : undefined);
    message.configuration !== undefined &&
      (obj.configuration = message.configuration
        ? ConfigurationDescriptor.toJSON(message.configuration)
        : undefined);
    message.queryServices !== undefined &&
      (obj.queryServices = message.queryServices
        ? QueryServicesDescriptor.toJSON(message.queryServices)
        : undefined);
    message.tx !== undefined &&
      (obj.tx = message.tx ? TxDescriptor.toJSON(message.tx) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AppDescriptor>, I>>(
    object: I,
  ): AppDescriptor {
    const message = createBaseAppDescriptor();
    if (object.authn !== undefined && object.authn !== null) {
      message.authn = AuthnDescriptor.fromPartial(object.authn);
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = ChainDescriptor.fromPartial(object.chain);
    }
    if (object.codec !== undefined && object.codec !== null) {
      message.codec = CodecDescriptor.fromPartial(object.codec);
    }
    if (object.configuration !== undefined && object.configuration !== null) {
      message.configuration = ConfigurationDescriptor.fromPartial(
        object.configuration,
      );
    }
    if (object.queryServices !== undefined && object.queryServices !== null) {
      message.queryServices = QueryServicesDescriptor.fromPartial(
        object.queryServices,
      );
    }
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = TxDescriptor.fromPartial(object.tx);
    }
    return message;
  },
};
function createBaseTxDescriptor(): TxDescriptor {
  return {
    fullname: "",
    msgs: [],
  };
}
export const TxDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.TxDescriptor",
  encode(
    message: TxDescriptor,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    for (const v of message.msgs) {
      MsgDescriptor.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxDescriptor {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.msgs.push(MsgDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TxDescriptor {
    const obj = createBaseTxDescriptor();
    if (isSet(object.fullname)) obj.fullname = String(object.fullname);
    if (Array.isArray(object?.msgs))
      obj.msgs = object.msgs.map((e: any) => MsgDescriptor.fromJSON(e));
    return obj;
  },
  toJSON(message: TxDescriptor): JsonSafe<TxDescriptor> {
    const obj: any = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);
    if (message.msgs) {
      obj.msgs = message.msgs.map((e) =>
        e ? MsgDescriptor.toJSON(e) : undefined,
      );
    } else {
      obj.msgs = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<TxDescriptor>, I>>(
    object: I,
  ): TxDescriptor {
    const message = createBaseTxDescriptor();
    message.fullname = object.fullname ?? "";
    message.msgs = object.msgs?.map((e) => MsgDescriptor.fromPartial(e)) || [];
    return message;
  },
};
function createBaseAuthnDescriptor(): AuthnDescriptor {
  return {
    signModes: [],
  };
}
export const AuthnDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.AuthnDescriptor",
  encode(
    message: AuthnDescriptor,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.signModes) {
      SigningModeDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AuthnDescriptor {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthnDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signModes.push(
            SigningModeDescriptor.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AuthnDescriptor {
    const obj = createBaseAuthnDescriptor();
    if (Array.isArray(object?.signModes))
      obj.signModes = object.signModes.map((e: any) =>
        SigningModeDescriptor.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: AuthnDescriptor): JsonSafe<AuthnDescriptor> {
    const obj: any = {};
    if (message.signModes) {
      obj.signModes = message.signModes.map((e) =>
        e ? SigningModeDescriptor.toJSON(e) : undefined,
      );
    } else {
      obj.signModes = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AuthnDescriptor>, I>>(
    object: I,
  ): AuthnDescriptor {
    const message = createBaseAuthnDescriptor();
    message.signModes =
      object.signModes?.map((e) => SigningModeDescriptor.fromPartial(e)) || [];
    return message;
  },
};
function createBaseSigningModeDescriptor(): SigningModeDescriptor {
  return {
    name: "",
    number: 0,
    authnInfoProviderMethodFullname: "",
  };
}
export const SigningModeDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.SigningModeDescriptor",
  encode(
    message: SigningModeDescriptor,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== 0) {
      writer.uint32(16).int32(message.number);
    }
    if (message.authnInfoProviderMethodFullname !== "") {
      writer.uint32(26).string(message.authnInfoProviderMethodFullname);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): SigningModeDescriptor {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningModeDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.number = reader.int32();
          break;
        case 3:
          message.authnInfoProviderMethodFullname = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SigningModeDescriptor {
    const obj = createBaseSigningModeDescriptor();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.number)) obj.number = Number(object.number);
    if (isSet(object.authnInfoProviderMethodFullname))
      obj.authnInfoProviderMethodFullname = String(
        object.authnInfoProviderMethodFullname,
      );
    return obj;
  },
  toJSON(message: SigningModeDescriptor): JsonSafe<SigningModeDescriptor> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.number !== undefined && (obj.number = Math.round(message.number));
    message.authnInfoProviderMethodFullname !== undefined &&
      (obj.authnInfoProviderMethodFullname =
        message.authnInfoProviderMethodFullname);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<SigningModeDescriptor>, I>>(
    object: I,
  ): SigningModeDescriptor {
    const message = createBaseSigningModeDescriptor();
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    message.authnInfoProviderMethodFullname =
      object.authnInfoProviderMethodFullname ?? "";
    return message;
  },
};
function createBaseChainDescriptor(): ChainDescriptor {
  return {
    id: "",
  };
}
export const ChainDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.ChainDescriptor",
  encode(
    message: ChainDescriptor,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ChainDescriptor {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ChainDescriptor {
    const obj = createBaseChainDescriptor();
    if (isSet(object.id)) obj.id = String(object.id);
    return obj;
  },
  toJSON(message: ChainDescriptor): JsonSafe<ChainDescriptor> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ChainDescriptor>, I>>(
    object: I,
  ): ChainDescriptor {
    const message = createBaseChainDescriptor();
    message.id = object.id ?? "";
    return message;
  },
};
function createBaseCodecDescriptor(): CodecDescriptor {
  return {
    interfaces: [],
  };
}
export const CodecDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.CodecDescriptor",
  encode(
    message: CodecDescriptor,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.interfaces) {
      InterfaceDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CodecDescriptor {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodecDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interfaces.push(
            InterfaceDescriptor.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CodecDescriptor {
    const obj = createBaseCodecDescriptor();
    if (Array.isArray(object?.interfaces))
      obj.interfaces = object.interfaces.map((e: any) =>
        InterfaceDescriptor.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: CodecDescriptor): JsonSafe<CodecDescriptor> {
    const obj: any = {};
    if (message.interfaces) {
      obj.interfaces = message.interfaces.map((e) =>
        e ? InterfaceDescriptor.toJSON(e) : undefined,
      );
    } else {
      obj.interfaces = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<CodecDescriptor>, I>>(
    object: I,
  ): CodecDescriptor {
    const message = createBaseCodecDescriptor();
    message.interfaces =
      object.interfaces?.map((e) => InterfaceDescriptor.fromPartial(e)) || [];
    return message;
  },
};
function createBaseInterfaceDescriptor(): InterfaceDescriptor {
  return {
    fullname: "",
    interfaceAcceptingMessages: [],
    interfaceImplementers: [],
  };
}
export const InterfaceDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceDescriptor",
  encode(
    message: InterfaceDescriptor,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    for (const v of message.interfaceAcceptingMessages) {
      InterfaceAcceptingMessageDescriptor.encode(
        v!,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    for (const v of message.interfaceImplementers) {
      InterfaceImplementerDescriptor.encode(
        v!,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): InterfaceDescriptor {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterfaceDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.interfaceAcceptingMessages.push(
            InterfaceAcceptingMessageDescriptor.decode(reader, reader.uint32()),
          );
          break;
        case 3:
          message.interfaceImplementers.push(
            InterfaceImplementerDescriptor.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InterfaceDescriptor {
    const obj = createBaseInterfaceDescriptor();
    if (isSet(object.fullname)) obj.fullname = String(object.fullname);
    if (Array.isArray(object?.interfaceAcceptingMessages))
      obj.interfaceAcceptingMessages = object.interfaceAcceptingMessages.map(
        (e: any) => InterfaceAcceptingMessageDescriptor.fromJSON(e),
      );
    if (Array.isArray(object?.interfaceImplementers))
      obj.interfaceImplementers = object.interfaceImplementers.map((e: any) =>
        InterfaceImplementerDescriptor.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: InterfaceDescriptor): JsonSafe<InterfaceDescriptor> {
    const obj: any = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);
    if (message.interfaceAcceptingMessages) {
      obj.interfaceAcceptingMessages = message.interfaceAcceptingMessages.map(
        (e) => (e ? InterfaceAcceptingMessageDescriptor.toJSON(e) : undefined),
      );
    } else {
      obj.interfaceAcceptingMessages = [];
    }
    if (message.interfaceImplementers) {
      obj.interfaceImplementers = message.interfaceImplementers.map((e) =>
        e ? InterfaceImplementerDescriptor.toJSON(e) : undefined,
      );
    } else {
      obj.interfaceImplementers = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<InterfaceDescriptor>, I>>(
    object: I,
  ): InterfaceDescriptor {
    const message = createBaseInterfaceDescriptor();
    message.fullname = object.fullname ?? "";
    message.interfaceAcceptingMessages =
      object.interfaceAcceptingMessages?.map((e) =>
        InterfaceAcceptingMessageDescriptor.fromPartial(e),
      ) || [];
    message.interfaceImplementers =
      object.interfaceImplementers?.map((e) =>
        InterfaceImplementerDescriptor.fromPartial(e),
      ) || [];
    return message;
  },
};
function createBaseInterfaceImplementerDescriptor(): InterfaceImplementerDescriptor {
  return {
    fullname: "",
    typeUrl: "",
  };
}
export const InterfaceImplementerDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor",
  encode(
    message: InterfaceImplementerDescriptor,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    if (message.typeUrl !== "") {
      writer.uint32(18).string(message.typeUrl);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): InterfaceImplementerDescriptor {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterfaceImplementerDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.typeUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InterfaceImplementerDescriptor {
    const obj = createBaseInterfaceImplementerDescriptor();
    if (isSet(object.fullname)) obj.fullname = String(object.fullname);
    if (isSet(object.typeUrl)) obj.typeUrl = String(object.typeUrl);
    return obj;
  },
  toJSON(
    message: InterfaceImplementerDescriptor,
  ): JsonSafe<InterfaceImplementerDescriptor> {
    const obj: any = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);
    message.typeUrl !== undefined && (obj.typeUrl = message.typeUrl);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<InterfaceImplementerDescriptor>, I>>(
    object: I,
  ): InterfaceImplementerDescriptor {
    const message = createBaseInterfaceImplementerDescriptor();
    message.fullname = object.fullname ?? "";
    message.typeUrl = object.typeUrl ?? "";
    return message;
  },
};
function createBaseInterfaceAcceptingMessageDescriptor(): InterfaceAcceptingMessageDescriptor {
  return {
    fullname: "",
    fieldDescriptorNames: [],
  };
}
export const InterfaceAcceptingMessageDescriptor = {
  typeUrl:
    "/cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor",
  encode(
    message: InterfaceAcceptingMessageDescriptor,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    for (const v of message.fieldDescriptorNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): InterfaceAcceptingMessageDescriptor {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterfaceAcceptingMessageDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.fieldDescriptorNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InterfaceAcceptingMessageDescriptor {
    const obj = createBaseInterfaceAcceptingMessageDescriptor();
    if (isSet(object.fullname)) obj.fullname = String(object.fullname);
    if (Array.isArray(object?.fieldDescriptorNames))
      obj.fieldDescriptorNames = object.fieldDescriptorNames.map((e: any) =>
        String(e),
      );
    return obj;
  },
  toJSON(
    message: InterfaceAcceptingMessageDescriptor,
  ): JsonSafe<InterfaceAcceptingMessageDescriptor> {
    const obj: any = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);
    if (message.fieldDescriptorNames) {
      obj.fieldDescriptorNames = message.fieldDescriptorNames.map((e) => e);
    } else {
      obj.fieldDescriptorNames = [];
    }
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<InterfaceAcceptingMessageDescriptor>, I>,
  >(object: I): InterfaceAcceptingMessageDescriptor {
    const message = createBaseInterfaceAcceptingMessageDescriptor();
    message.fullname = object.fullname ?? "";
    message.fieldDescriptorNames =
      object.fieldDescriptorNames?.map((e) => e) || [];
    return message;
  },
};
function createBaseConfigurationDescriptor(): ConfigurationDescriptor {
  return {
    bech32AccountAddressPrefix: "",
  };
}
export const ConfigurationDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.ConfigurationDescriptor",
  encode(
    message: ConfigurationDescriptor,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.bech32AccountAddressPrefix !== "") {
      writer.uint32(10).string(message.bech32AccountAddressPrefix);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): ConfigurationDescriptor {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigurationDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bech32AccountAddressPrefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConfigurationDescriptor {
    const obj = createBaseConfigurationDescriptor();
    if (isSet(object.bech32AccountAddressPrefix))
      obj.bech32AccountAddressPrefix = String(
        object.bech32AccountAddressPrefix,
      );
    return obj;
  },
  toJSON(message: ConfigurationDescriptor): JsonSafe<ConfigurationDescriptor> {
    const obj: any = {};
    message.bech32AccountAddressPrefix !== undefined &&
      (obj.bech32AccountAddressPrefix = message.bech32AccountAddressPrefix);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ConfigurationDescriptor>, I>>(
    object: I,
  ): ConfigurationDescriptor {
    const message = createBaseConfigurationDescriptor();
    message.bech32AccountAddressPrefix =
      object.bech32AccountAddressPrefix ?? "";
    return message;
  },
};
function createBaseMsgDescriptor(): MsgDescriptor {
  return {
    msgTypeUrl: "",
  };
}
export const MsgDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.MsgDescriptor",
  encode(
    message: MsgDescriptor,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.msgTypeUrl !== "") {
      writer.uint32(10).string(message.msgTypeUrl);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDescriptor {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgTypeUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDescriptor {
    const obj = createBaseMsgDescriptor();
    if (isSet(object.msgTypeUrl)) obj.msgTypeUrl = String(object.msgTypeUrl);
    return obj;
  },
  toJSON(message: MsgDescriptor): JsonSafe<MsgDescriptor> {
    const obj: any = {};
    message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDescriptor>, I>>(
    object: I,
  ): MsgDescriptor {
    const message = createBaseMsgDescriptor();
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    return message;
  },
};
function createBaseGetAuthnDescriptorRequest(): GetAuthnDescriptorRequest {
  return {};
}
export const GetAuthnDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest",
  encode(
    _: GetAuthnDescriptorRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetAuthnDescriptorRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthnDescriptorRequest();
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
  fromJSON(_: any): GetAuthnDescriptorRequest {
    const obj = createBaseGetAuthnDescriptorRequest();
    return obj;
  },
  toJSON(_: GetAuthnDescriptorRequest): JsonSafe<GetAuthnDescriptorRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetAuthnDescriptorRequest>, I>>(
    _: I,
  ): GetAuthnDescriptorRequest {
    const message = createBaseGetAuthnDescriptorRequest();
    return message;
  },
};
function createBaseGetAuthnDescriptorResponse(): GetAuthnDescriptorResponse {
  return {
    authn: undefined,
  };
}
export const GetAuthnDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse",
  encode(
    message: GetAuthnDescriptorResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.authn !== undefined) {
      AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetAuthnDescriptorResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthnDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authn = AuthnDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetAuthnDescriptorResponse {
    const obj = createBaseGetAuthnDescriptorResponse();
    if (isSet(object.authn)) obj.authn = AuthnDescriptor.fromJSON(object.authn);
    return obj;
  },
  toJSON(
    message: GetAuthnDescriptorResponse,
  ): JsonSafe<GetAuthnDescriptorResponse> {
    const obj: any = {};
    message.authn !== undefined &&
      (obj.authn = message.authn
        ? AuthnDescriptor.toJSON(message.authn)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetAuthnDescriptorResponse>, I>>(
    object: I,
  ): GetAuthnDescriptorResponse {
    const message = createBaseGetAuthnDescriptorResponse();
    if (object.authn !== undefined && object.authn !== null) {
      message.authn = AuthnDescriptor.fromPartial(object.authn);
    }
    return message;
  },
};
function createBaseGetChainDescriptorRequest(): GetChainDescriptorRequest {
  return {};
}
export const GetChainDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest",
  encode(
    _: GetChainDescriptorRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetChainDescriptorRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetChainDescriptorRequest();
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
  fromJSON(_: any): GetChainDescriptorRequest {
    const obj = createBaseGetChainDescriptorRequest();
    return obj;
  },
  toJSON(_: GetChainDescriptorRequest): JsonSafe<GetChainDescriptorRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetChainDescriptorRequest>, I>>(
    _: I,
  ): GetChainDescriptorRequest {
    const message = createBaseGetChainDescriptorRequest();
    return message;
  },
};
function createBaseGetChainDescriptorResponse(): GetChainDescriptorResponse {
  return {
    chain: undefined,
  };
}
export const GetChainDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse",
  encode(
    message: GetChainDescriptorResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.chain !== undefined) {
      ChainDescriptor.encode(message.chain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetChainDescriptorResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetChainDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = ChainDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetChainDescriptorResponse {
    const obj = createBaseGetChainDescriptorResponse();
    if (isSet(object.chain)) obj.chain = ChainDescriptor.fromJSON(object.chain);
    return obj;
  },
  toJSON(
    message: GetChainDescriptorResponse,
  ): JsonSafe<GetChainDescriptorResponse> {
    const obj: any = {};
    message.chain !== undefined &&
      (obj.chain = message.chain
        ? ChainDescriptor.toJSON(message.chain)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetChainDescriptorResponse>, I>>(
    object: I,
  ): GetChainDescriptorResponse {
    const message = createBaseGetChainDescriptorResponse();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = ChainDescriptor.fromPartial(object.chain);
    }
    return message;
  },
};
function createBaseGetCodecDescriptorRequest(): GetCodecDescriptorRequest {
  return {};
}
export const GetCodecDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest",
  encode(
    _: GetCodecDescriptorRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetCodecDescriptorRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCodecDescriptorRequest();
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
  fromJSON(_: any): GetCodecDescriptorRequest {
    const obj = createBaseGetCodecDescriptorRequest();
    return obj;
  },
  toJSON(_: GetCodecDescriptorRequest): JsonSafe<GetCodecDescriptorRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetCodecDescriptorRequest>, I>>(
    _: I,
  ): GetCodecDescriptorRequest {
    const message = createBaseGetCodecDescriptorRequest();
    return message;
  },
};
function createBaseGetCodecDescriptorResponse(): GetCodecDescriptorResponse {
  return {
    codec: undefined,
  };
}
export const GetCodecDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse",
  encode(
    message: GetCodecDescriptorResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.codec !== undefined) {
      CodecDescriptor.encode(message.codec, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetCodecDescriptorResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCodecDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codec = CodecDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetCodecDescriptorResponse {
    const obj = createBaseGetCodecDescriptorResponse();
    if (isSet(object.codec)) obj.codec = CodecDescriptor.fromJSON(object.codec);
    return obj;
  },
  toJSON(
    message: GetCodecDescriptorResponse,
  ): JsonSafe<GetCodecDescriptorResponse> {
    const obj: any = {};
    message.codec !== undefined &&
      (obj.codec = message.codec
        ? CodecDescriptor.toJSON(message.codec)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetCodecDescriptorResponse>, I>>(
    object: I,
  ): GetCodecDescriptorResponse {
    const message = createBaseGetCodecDescriptorResponse();
    if (object.codec !== undefined && object.codec !== null) {
      message.codec = CodecDescriptor.fromPartial(object.codec);
    }
    return message;
  },
};
function createBaseGetConfigurationDescriptorRequest(): GetConfigurationDescriptorRequest {
  return {};
}
export const GetConfigurationDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest",
  encode(
    _: GetConfigurationDescriptorRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetConfigurationDescriptorRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetConfigurationDescriptorRequest();
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
  fromJSON(_: any): GetConfigurationDescriptorRequest {
    const obj = createBaseGetConfigurationDescriptorRequest();
    return obj;
  },
  toJSON(
    _: GetConfigurationDescriptorRequest,
  ): JsonSafe<GetConfigurationDescriptorRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<GetConfigurationDescriptorRequest>, I>,
  >(_: I): GetConfigurationDescriptorRequest {
    const message = createBaseGetConfigurationDescriptorRequest();
    return message;
  },
};
function createBaseGetConfigurationDescriptorResponse(): GetConfigurationDescriptorResponse {
  return {
    config: undefined,
  };
}
export const GetConfigurationDescriptorResponse = {
  typeUrl:
    "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse",
  encode(
    message: GetConfigurationDescriptorResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.config !== undefined) {
      ConfigurationDescriptor.encode(
        message.config,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetConfigurationDescriptorResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetConfigurationDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = ConfigurationDescriptor.decode(
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
  fromJSON(object: any): GetConfigurationDescriptorResponse {
    const obj = createBaseGetConfigurationDescriptorResponse();
    if (isSet(object.config))
      obj.config = ConfigurationDescriptor.fromJSON(object.config);
    return obj;
  },
  toJSON(
    message: GetConfigurationDescriptorResponse,
  ): JsonSafe<GetConfigurationDescriptorResponse> {
    const obj: any = {};
    message.config !== undefined &&
      (obj.config = message.config
        ? ConfigurationDescriptor.toJSON(message.config)
        : undefined);
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<GetConfigurationDescriptorResponse>, I>,
  >(object: I): GetConfigurationDescriptorResponse {
    const message = createBaseGetConfigurationDescriptorResponse();
    if (object.config !== undefined && object.config !== null) {
      message.config = ConfigurationDescriptor.fromPartial(object.config);
    }
    return message;
  },
};
function createBaseGetQueryServicesDescriptorRequest(): GetQueryServicesDescriptorRequest {
  return {};
}
export const GetQueryServicesDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest",
  encode(
    _: GetQueryServicesDescriptorRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetQueryServicesDescriptorRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetQueryServicesDescriptorRequest();
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
  fromJSON(_: any): GetQueryServicesDescriptorRequest {
    const obj = createBaseGetQueryServicesDescriptorRequest();
    return obj;
  },
  toJSON(
    _: GetQueryServicesDescriptorRequest,
  ): JsonSafe<GetQueryServicesDescriptorRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<GetQueryServicesDescriptorRequest>, I>,
  >(_: I): GetQueryServicesDescriptorRequest {
    const message = createBaseGetQueryServicesDescriptorRequest();
    return message;
  },
};
function createBaseGetQueryServicesDescriptorResponse(): GetQueryServicesDescriptorResponse {
  return {
    queries: undefined,
  };
}
export const GetQueryServicesDescriptorResponse = {
  typeUrl:
    "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse",
  encode(
    message: GetQueryServicesDescriptorResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.queries !== undefined) {
      QueryServicesDescriptor.encode(
        message.queries,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetQueryServicesDescriptorResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetQueryServicesDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queries = QueryServicesDescriptor.decode(
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
  fromJSON(object: any): GetQueryServicesDescriptorResponse {
    const obj = createBaseGetQueryServicesDescriptorResponse();
    if (isSet(object.queries))
      obj.queries = QueryServicesDescriptor.fromJSON(object.queries);
    return obj;
  },
  toJSON(
    message: GetQueryServicesDescriptorResponse,
  ): JsonSafe<GetQueryServicesDescriptorResponse> {
    const obj: any = {};
    message.queries !== undefined &&
      (obj.queries = message.queries
        ? QueryServicesDescriptor.toJSON(message.queries)
        : undefined);
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<GetQueryServicesDescriptorResponse>, I>,
  >(object: I): GetQueryServicesDescriptorResponse {
    const message = createBaseGetQueryServicesDescriptorResponse();
    if (object.queries !== undefined && object.queries !== null) {
      message.queries = QueryServicesDescriptor.fromPartial(object.queries);
    }
    return message;
  },
};
function createBaseGetTxDescriptorRequest(): GetTxDescriptorRequest {
  return {};
}
export const GetTxDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest",
  encode(
    _: GetTxDescriptorRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetTxDescriptorRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxDescriptorRequest();
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
  fromJSON(_: any): GetTxDescriptorRequest {
    const obj = createBaseGetTxDescriptorRequest();
    return obj;
  },
  toJSON(_: GetTxDescriptorRequest): JsonSafe<GetTxDescriptorRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetTxDescriptorRequest>, I>>(
    _: I,
  ): GetTxDescriptorRequest {
    const message = createBaseGetTxDescriptorRequest();
    return message;
  },
};
function createBaseGetTxDescriptorResponse(): GetTxDescriptorResponse {
  return {
    tx: undefined,
  };
}
export const GetTxDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse",
  encode(
    message: GetTxDescriptorResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.tx !== undefined) {
      TxDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): GetTxDescriptorResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = TxDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetTxDescriptorResponse {
    const obj = createBaseGetTxDescriptorResponse();
    if (isSet(object.tx)) obj.tx = TxDescriptor.fromJSON(object.tx);
    return obj;
  },
  toJSON(message: GetTxDescriptorResponse): JsonSafe<GetTxDescriptorResponse> {
    const obj: any = {};
    message.tx !== undefined &&
      (obj.tx = message.tx ? TxDescriptor.toJSON(message.tx) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GetTxDescriptorResponse>, I>>(
    object: I,
  ): GetTxDescriptorResponse {
    const message = createBaseGetTxDescriptorResponse();
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = TxDescriptor.fromPartial(object.tx);
    }
    return message;
  },
};
function createBaseQueryServicesDescriptor(): QueryServicesDescriptor {
  return {
    queryServices: [],
  };
}
export const QueryServicesDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServicesDescriptor",
  encode(
    message: QueryServicesDescriptor,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.queryServices) {
      QueryServiceDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryServicesDescriptor {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServicesDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryServices.push(
            QueryServiceDescriptor.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryServicesDescriptor {
    const obj = createBaseQueryServicesDescriptor();
    if (Array.isArray(object?.queryServices))
      obj.queryServices = object.queryServices.map((e: any) =>
        QueryServiceDescriptor.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: QueryServicesDescriptor): JsonSafe<QueryServicesDescriptor> {
    const obj: any = {};
    if (message.queryServices) {
      obj.queryServices = message.queryServices.map((e) =>
        e ? QueryServiceDescriptor.toJSON(e) : undefined,
      );
    } else {
      obj.queryServices = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryServicesDescriptor>, I>>(
    object: I,
  ): QueryServicesDescriptor {
    const message = createBaseQueryServicesDescriptor();
    message.queryServices =
      object.queryServices?.map((e) => QueryServiceDescriptor.fromPartial(e)) ||
      [];
    return message;
  },
};
function createBaseQueryServiceDescriptor(): QueryServiceDescriptor {
  return {
    fullname: "",
    isModule: false,
    methods: [],
  };
}
export const QueryServiceDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServiceDescriptor",
  encode(
    message: QueryServiceDescriptor,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.fullname !== "") {
      writer.uint32(10).string(message.fullname);
    }
    if (message.isModule === true) {
      writer.uint32(16).bool(message.isModule);
    }
    for (const v of message.methods) {
      QueryMethodDescriptor.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryServiceDescriptor {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.isModule = reader.bool();
          break;
        case 3:
          message.methods.push(
            QueryMethodDescriptor.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryServiceDescriptor {
    const obj = createBaseQueryServiceDescriptor();
    if (isSet(object.fullname)) obj.fullname = String(object.fullname);
    if (isSet(object.isModule)) obj.isModule = Boolean(object.isModule);
    if (Array.isArray(object?.methods))
      obj.methods = object.methods.map((e: any) =>
        QueryMethodDescriptor.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: QueryServiceDescriptor): JsonSafe<QueryServiceDescriptor> {
    const obj: any = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);
    message.isModule !== undefined && (obj.isModule = message.isModule);
    if (message.methods) {
      obj.methods = message.methods.map((e) =>
        e ? QueryMethodDescriptor.toJSON(e) : undefined,
      );
    } else {
      obj.methods = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryServiceDescriptor>, I>>(
    object: I,
  ): QueryServiceDescriptor {
    const message = createBaseQueryServiceDescriptor();
    message.fullname = object.fullname ?? "";
    message.isModule = object.isModule ?? false;
    message.methods =
      object.methods?.map((e) => QueryMethodDescriptor.fromPartial(e)) || [];
    return message;
  },
};
function createBaseQueryMethodDescriptor(): QueryMethodDescriptor {
  return {
    name: "",
    fullQueryPath: "",
  };
}
export const QueryMethodDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.QueryMethodDescriptor",
  encode(
    message: QueryMethodDescriptor,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.fullQueryPath !== "") {
      writer.uint32(18).string(message.fullQueryPath);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): QueryMethodDescriptor {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMethodDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.fullQueryPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMethodDescriptor {
    const obj = createBaseQueryMethodDescriptor();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.fullQueryPath))
      obj.fullQueryPath = String(object.fullQueryPath);
    return obj;
  },
  toJSON(message: QueryMethodDescriptor): JsonSafe<QueryMethodDescriptor> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.fullQueryPath !== undefined &&
      (obj.fullQueryPath = message.fullQueryPath);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryMethodDescriptor>, I>>(
    object: I,
  ): QueryMethodDescriptor {
    const message = createBaseQueryMethodDescriptor();
    message.name = object.name ?? "";
    message.fullQueryPath = object.fullQueryPath ?? "";
    return message;
  },
};
/** ReflectionService defines a service for application reflection. */
export interface ReflectionService {
  /**
   * GetAuthnDescriptor returns information on how to authenticate transactions in the application
   * NOTE: this RPC is still experimental and might be subject to breaking changes or removal in
   * future releases of the cosmos-sdk.
   */
  GetAuthnDescriptor(
    request?: GetAuthnDescriptorRequest,
  ): Promise<GetAuthnDescriptorResponse>;
  /** GetChainDescriptor returns the description of the chain */
  GetChainDescriptor(
    request?: GetChainDescriptorRequest,
  ): Promise<GetChainDescriptorResponse>;
  /** GetCodecDescriptor returns the descriptor of the codec of the application */
  GetCodecDescriptor(
    request?: GetCodecDescriptorRequest,
  ): Promise<GetCodecDescriptorResponse>;
  /** GetConfigurationDescriptor returns the descriptor for the sdk.Config of the application */
  GetConfigurationDescriptor(
    request?: GetConfigurationDescriptorRequest,
  ): Promise<GetConfigurationDescriptorResponse>;
  /** GetQueryServicesDescriptor returns the available gRPC queryable services of the application */
  GetQueryServicesDescriptor(
    request?: GetQueryServicesDescriptorRequest,
  ): Promise<GetQueryServicesDescriptorResponse>;
  /** GetTxDescriptor returns information on the used transaction object and available msgs that can be used */
  GetTxDescriptor(
    request?: GetTxDescriptorRequest,
  ): Promise<GetTxDescriptorResponse>;
}
export class ReflectionServiceClientImpl implements ReflectionService {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GetAuthnDescriptor = this.GetAuthnDescriptor.bind(this);
    this.GetChainDescriptor = this.GetChainDescriptor.bind(this);
    this.GetCodecDescriptor = this.GetCodecDescriptor.bind(this);
    this.GetConfigurationDescriptor =
      this.GetConfigurationDescriptor.bind(this);
    this.GetQueryServicesDescriptor =
      this.GetQueryServicesDescriptor.bind(this);
    this.GetTxDescriptor = this.GetTxDescriptor.bind(this);
  }
  GetAuthnDescriptor(
    request: GetAuthnDescriptorRequest = {},
  ): Promise<GetAuthnDescriptorResponse> {
    const data = GetAuthnDescriptorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.base.reflection.v2alpha1.ReflectionService",
      "GetAuthnDescriptor",
      data,
    );
    return promise.then((data) =>
      GetAuthnDescriptorResponse.decode(new BinaryReader(data)),
    );
  }
  GetChainDescriptor(
    request: GetChainDescriptorRequest = {},
  ): Promise<GetChainDescriptorResponse> {
    const data = GetChainDescriptorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.base.reflection.v2alpha1.ReflectionService",
      "GetChainDescriptor",
      data,
    );
    return promise.then((data) =>
      GetChainDescriptorResponse.decode(new BinaryReader(data)),
    );
  }
  GetCodecDescriptor(
    request: GetCodecDescriptorRequest = {},
  ): Promise<GetCodecDescriptorResponse> {
    const data = GetCodecDescriptorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.base.reflection.v2alpha1.ReflectionService",
      "GetCodecDescriptor",
      data,
    );
    return promise.then((data) =>
      GetCodecDescriptorResponse.decode(new BinaryReader(data)),
    );
  }
  GetConfigurationDescriptor(
    request: GetConfigurationDescriptorRequest = {},
  ): Promise<GetConfigurationDescriptorResponse> {
    const data = GetConfigurationDescriptorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.base.reflection.v2alpha1.ReflectionService",
      "GetConfigurationDescriptor",
      data,
    );
    return promise.then((data) =>
      GetConfigurationDescriptorResponse.decode(new BinaryReader(data)),
    );
  }
  GetQueryServicesDescriptor(
    request: GetQueryServicesDescriptorRequest = {},
  ): Promise<GetQueryServicesDescriptorResponse> {
    const data = GetQueryServicesDescriptorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.base.reflection.v2alpha1.ReflectionService",
      "GetQueryServicesDescriptor",
      data,
    );
    return promise.then((data) =>
      GetQueryServicesDescriptorResponse.decode(new BinaryReader(data)),
    );
  }
  GetTxDescriptor(
    request: GetTxDescriptorRequest = {},
  ): Promise<GetTxDescriptorResponse> {
    const data = GetTxDescriptorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.base.reflection.v2alpha1.ReflectionService",
      "GetTxDescriptor",
      data,
    );
    return promise.then((data) =>
      GetTxDescriptorResponse.decode(new BinaryReader(data)),
    );
  }
}
