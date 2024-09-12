/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact, isObject } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmos.autocli.v1";
/** ModuleOptions describes the CLI options for a Cosmos SDK module. */
export interface ModuleOptions {
  /** tx describes the tx command for the module. */
  tx?: ServiceCommandDescriptor;
  /** query describes the tx command for the module. */
  query?: ServiceCommandDescriptor;
}
export interface ServiceCommandDescriptor_SubCommandsEntry {
  key: string;
  value?: ServiceCommandDescriptor;
}
/** ServiceCommandDescriptor describes a CLI command based on a protobuf service. */
export interface ServiceCommandDescriptor {
  /**
   * service is the fully qualified name of the protobuf service to build
   * the command from. It can be left empty if sub_commands are used instead
   * which may be the case if a module provides multiple tx and/or query services.
   */
  service: string;
  /**
   * rpc_command_options are options for commands generated from rpc methods.
   * If no options are specified for a given rpc method on the service, a
   * command will be generated for that method with the default options.
   */
  rpcCommandOptions: RpcCommandOptions[];
  /**
   * sub_commands is a map of optional sub-commands for this command based on
   * different protobuf services. The map key is used as the name of the
   * sub-command.
   */
  subCommands: {
    [key: string]: ServiceCommandDescriptor;
  };
}
export interface RpcCommandOptions_FlagOptionsEntry {
  key: string;
  value?: FlagOptions;
}
/**
 * RpcCommandOptions specifies options for commands generated from protobuf
 * rpc methods.
 */
export interface RpcCommandOptions {
  /**
   * rpc_method is short name of the protobuf rpc method that this command is
   * generated from.
   */
  rpcMethod: string;
  /**
   * use is the one-line usage method. It also allows specifying an alternate
   * name for the command as the first word of the usage text.
   *
   * By default the name of an rpc command is the kebab-case short name of the
   * rpc method.
   */
  use: string;
  /** long is the long message shown in the 'help <this-command>' output. */
  long: string;
  /** short is the short description shown in the 'help' output. */
  short: string;
  /** example is examples of how to use the command. */
  example: string;
  /** alias is an array of aliases that can be used instead of the first word in Use. */
  alias: string[];
  /**
   * suggest_for is an array of command names for which this command will be suggested -
   * similar to aliases but only suggests.
   */
  suggestFor: string[];
  /** deprecated defines, if this command is deprecated and should print this string when used. */
  deprecated: string;
  /**
   * version defines the version for this command. If this value is non-empty and the command does not
   * define a "version" flag, a "version" boolean flag will be added to the command and, if specified,
   * will print content of the "Version" variable. A shorthand "v" flag will also be added if the
   * command does not define one.
   */
  version: string;
  /**
   * flag_options are options for flags generated from rpc request fields.
   * By default all request fields are configured as flags. They can
   * also be configured as positional args instead using positional_args.
   */
  flagOptions: {
    [key: string]: FlagOptions;
  };
  /** positional_args specifies positional arguments for the command. */
  positionalArgs: PositionalArgDescriptor[];
  /** skip specifies whether to skip this rpc method when generating commands. */
  skip: boolean;
}
/**
 * FlagOptions are options for flags generated from rpc request fields.
 * By default, all request fields are configured as flags based on the
 * kebab-case name of the field. Fields can be turned into positional arguments
 * instead by using RpcCommandOptions.positional_args.
 */
export interface FlagOptions {
  /** name is an alternate name to use for the field flag. */
  name: string;
  /** shorthand is a one-letter abbreviated flag. */
  shorthand: string;
  /** usage is the help message. */
  usage: string;
  /** default_value is the default value as text. */
  defaultValue: string;
  /** default value is the default value as text if the flag is used without any value. */
  noOptDefaultValue: string;
  /** deprecated is the usage text to show if this flag is deprecated. */
  deprecated: string;
  /** shorthand_deprecated is the usage text to show if the shorthand of this flag is deprecated. */
  shorthandDeprecated: string;
  /** hidden hides the flag from help/usage text */
  hidden: boolean;
}
/** PositionalArgDescriptor describes a positional argument. */
export interface PositionalArgDescriptor {
  /**
   * proto_field specifies the proto field to use as the positional arg. Any
   * fields used as positional args will not have a flag generated.
   */
  protoField: string;
  /**
   * varargs makes a positional parameter a varargs parameter. This can only be
   * applied to last positional parameter and the proto_field must a repeated
   * field.
   */
  varargs: boolean;
}
function createBaseModuleOptions(): ModuleOptions {
  return {
    tx: undefined,
    query: undefined,
  };
}
export const ModuleOptions = {
  typeUrl: "/cosmos.autocli.v1.ModuleOptions",
  encode(
    message: ModuleOptions,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.tx !== undefined) {
      ServiceCommandDescriptor.encode(
        message.tx,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.query !== undefined) {
      ServiceCommandDescriptor.encode(
        message.query,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModuleOptions {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = ServiceCommandDescriptor.decode(reader, reader.uint32());
          break;
        case 2:
          message.query = ServiceCommandDescriptor.decode(
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
  fromJSON(object: any): ModuleOptions {
    const obj = createBaseModuleOptions();
    if (isSet(object.tx)) obj.tx = ServiceCommandDescriptor.fromJSON(object.tx);
    if (isSet(object.query))
      obj.query = ServiceCommandDescriptor.fromJSON(object.query);
    return obj;
  },
  toJSON(message: ModuleOptions): JsonSafe<ModuleOptions> {
    const obj: any = {};
    message.tx !== undefined &&
      (obj.tx = message.tx
        ? ServiceCommandDescriptor.toJSON(message.tx)
        : undefined);
    message.query !== undefined &&
      (obj.query = message.query
        ? ServiceCommandDescriptor.toJSON(message.query)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ModuleOptions>, I>>(
    object: I,
  ): ModuleOptions {
    const message = createBaseModuleOptions();
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = ServiceCommandDescriptor.fromPartial(object.tx);
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = ServiceCommandDescriptor.fromPartial(object.query);
    }
    return message;
  },
};
function createBaseServiceCommandDescriptor_SubCommandsEntry(): ServiceCommandDescriptor_SubCommandsEntry {
  return {
    key: "",
    value: undefined,
  };
}
export const ServiceCommandDescriptor_SubCommandsEntry = {
  encode(
    message: ServiceCommandDescriptor_SubCommandsEntry,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ServiceCommandDescriptor.encode(
        message.value,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): ServiceCommandDescriptor_SubCommandsEntry {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceCommandDescriptor_SubCommandsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ServiceCommandDescriptor.decode(
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
  fromJSON(object: any): ServiceCommandDescriptor_SubCommandsEntry {
    const obj = createBaseServiceCommandDescriptor_SubCommandsEntry();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value))
      obj.value = ServiceCommandDescriptor.fromJSON(object.value);
    return obj;
  },
  toJSON(
    message: ServiceCommandDescriptor_SubCommandsEntry,
  ): JsonSafe<ServiceCommandDescriptor_SubCommandsEntry> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? ServiceCommandDescriptor.toJSON(message.value)
        : undefined);
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<ServiceCommandDescriptor_SubCommandsEntry>, I>,
  >(object: I): ServiceCommandDescriptor_SubCommandsEntry {
    const message = createBaseServiceCommandDescriptor_SubCommandsEntry();
    message.key = object.key ?? "";
    if (object.value !== undefined && object.value !== null) {
      message.value = ServiceCommandDescriptor.fromPartial(object.value);
    }
    return message;
  },
};
function createBaseServiceCommandDescriptor(): ServiceCommandDescriptor {
  return {
    service: "",
    rpcCommandOptions: [],
    subCommands: {},
  };
}
export const ServiceCommandDescriptor = {
  typeUrl: "/cosmos.autocli.v1.ServiceCommandDescriptor",
  encode(
    message: ServiceCommandDescriptor,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    for (const v of message.rpcCommandOptions) {
      RpcCommandOptions.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.subCommands).forEach(([key, value]) => {
      ServiceCommandDescriptor_SubCommandsEntry.encode(
        {
          key: key as any,
          value,
        },
        writer.uint32(26).fork(),
      ).ldelim();
    });
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): ServiceCommandDescriptor {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceCommandDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.service = reader.string();
          break;
        case 2:
          message.rpcCommandOptions.push(
            RpcCommandOptions.decode(reader, reader.uint32()),
          );
          break;
        case 3:
          const entry3 = ServiceCommandDescriptor_SubCommandsEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry3.value !== undefined) {
            message.subCommands[entry3.key] = entry3.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ServiceCommandDescriptor {
    const obj = createBaseServiceCommandDescriptor();
    if (isSet(object.service)) obj.service = String(object.service);
    if (Array.isArray(object?.rpcCommandOptions))
      obj.rpcCommandOptions = object.rpcCommandOptions.map((e: any) =>
        RpcCommandOptions.fromJSON(e),
      );
    if (isObject(object.subCommands))
      obj.subCommands = Object.entries(object.subCommands).reduce<{
        [key: string]: ServiceCommandDescriptor;
      }>((acc, [key, value]) => {
        acc[key] = ServiceCommandDescriptor.fromJSON(value);
        return acc;
      }, {});
    return obj;
  },
  toJSON(
    message: ServiceCommandDescriptor,
  ): JsonSafe<ServiceCommandDescriptor> {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service);
    if (message.rpcCommandOptions) {
      obj.rpcCommandOptions = message.rpcCommandOptions.map((e) =>
        e ? RpcCommandOptions.toJSON(e) : undefined,
      );
    } else {
      obj.rpcCommandOptions = [];
    }
    obj.subCommands = {};
    if (message.subCommands) {
      Object.entries(message.subCommands).forEach(([k, v]) => {
        obj.subCommands[k] = ServiceCommandDescriptor.toJSON(v);
      });
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ServiceCommandDescriptor>, I>>(
    object: I,
  ): ServiceCommandDescriptor {
    const message = createBaseServiceCommandDescriptor();
    message.service = object.service ?? "";
    message.rpcCommandOptions =
      object.rpcCommandOptions?.map((e) => RpcCommandOptions.fromPartial(e)) ||
      [];
    message.subCommands = Object.entries(object.subCommands ?? {}).reduce<{
      [key: string]: ServiceCommandDescriptor;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ServiceCommandDescriptor.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};
function createBaseRpcCommandOptions_FlagOptionsEntry(): RpcCommandOptions_FlagOptionsEntry {
  return {
    key: "",
    value: undefined,
  };
}
export const RpcCommandOptions_FlagOptionsEntry = {
  encode(
    message: RpcCommandOptions_FlagOptionsEntry,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      FlagOptions.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): RpcCommandOptions_FlagOptionsEntry {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRpcCommandOptions_FlagOptionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = FlagOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RpcCommandOptions_FlagOptionsEntry {
    const obj = createBaseRpcCommandOptions_FlagOptionsEntry();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value)) obj.value = FlagOptions.fromJSON(object.value);
    return obj;
  },
  toJSON(
    message: RpcCommandOptions_FlagOptionsEntry,
  ): JsonSafe<RpcCommandOptions_FlagOptionsEntry> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? FlagOptions.toJSON(message.value)
        : undefined);
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<RpcCommandOptions_FlagOptionsEntry>, I>,
  >(object: I): RpcCommandOptions_FlagOptionsEntry {
    const message = createBaseRpcCommandOptions_FlagOptionsEntry();
    message.key = object.key ?? "";
    if (object.value !== undefined && object.value !== null) {
      message.value = FlagOptions.fromPartial(object.value);
    }
    return message;
  },
};
function createBaseRpcCommandOptions(): RpcCommandOptions {
  return {
    rpcMethod: "",
    use: "",
    long: "",
    short: "",
    example: "",
    alias: [],
    suggestFor: [],
    deprecated: "",
    version: "",
    flagOptions: {},
    positionalArgs: [],
    skip: false,
  };
}
export const RpcCommandOptions = {
  typeUrl: "/cosmos.autocli.v1.RpcCommandOptions",
  encode(
    message: RpcCommandOptions,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.rpcMethod !== "") {
      writer.uint32(10).string(message.rpcMethod);
    }
    if (message.use !== "") {
      writer.uint32(18).string(message.use);
    }
    if (message.long !== "") {
      writer.uint32(26).string(message.long);
    }
    if (message.short !== "") {
      writer.uint32(34).string(message.short);
    }
    if (message.example !== "") {
      writer.uint32(42).string(message.example);
    }
    for (const v of message.alias) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.suggestFor) {
      writer.uint32(58).string(v!);
    }
    if (message.deprecated !== "") {
      writer.uint32(66).string(message.deprecated);
    }
    if (message.version !== "") {
      writer.uint32(74).string(message.version);
    }
    Object.entries(message.flagOptions).forEach(([key, value]) => {
      RpcCommandOptions_FlagOptionsEntry.encode(
        {
          key: key as any,
          value,
        },
        writer.uint32(82).fork(),
      ).ldelim();
    });
    for (const v of message.positionalArgs) {
      PositionalArgDescriptor.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.skip === true) {
      writer.uint32(96).bool(message.skip);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RpcCommandOptions {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRpcCommandOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rpcMethod = reader.string();
          break;
        case 2:
          message.use = reader.string();
          break;
        case 3:
          message.long = reader.string();
          break;
        case 4:
          message.short = reader.string();
          break;
        case 5:
          message.example = reader.string();
          break;
        case 6:
          message.alias.push(reader.string());
          break;
        case 7:
          message.suggestFor.push(reader.string());
          break;
        case 8:
          message.deprecated = reader.string();
          break;
        case 9:
          message.version = reader.string();
          break;
        case 10:
          const entry10 = RpcCommandOptions_FlagOptionsEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry10.value !== undefined) {
            message.flagOptions[entry10.key] = entry10.value;
          }
          break;
        case 11:
          message.positionalArgs.push(
            PositionalArgDescriptor.decode(reader, reader.uint32()),
          );
          break;
        case 12:
          message.skip = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RpcCommandOptions {
    const obj = createBaseRpcCommandOptions();
    if (isSet(object.rpcMethod)) obj.rpcMethod = String(object.rpcMethod);
    if (isSet(object.use)) obj.use = String(object.use);
    if (isSet(object.long)) obj.long = String(object.long);
    if (isSet(object.short)) obj.short = String(object.short);
    if (isSet(object.example)) obj.example = String(object.example);
    if (Array.isArray(object?.alias))
      obj.alias = object.alias.map((e: any) => String(e));
    if (Array.isArray(object?.suggestFor))
      obj.suggestFor = object.suggestFor.map((e: any) => String(e));
    if (isSet(object.deprecated)) obj.deprecated = String(object.deprecated);
    if (isSet(object.version)) obj.version = String(object.version);
    if (isObject(object.flagOptions))
      obj.flagOptions = Object.entries(object.flagOptions).reduce<{
        [key: string]: FlagOptions;
      }>((acc, [key, value]) => {
        acc[key] = FlagOptions.fromJSON(value);
        return acc;
      }, {});
    if (Array.isArray(object?.positionalArgs))
      obj.positionalArgs = object.positionalArgs.map((e: any) =>
        PositionalArgDescriptor.fromJSON(e),
      );
    if (isSet(object.skip)) obj.skip = Boolean(object.skip);
    return obj;
  },
  toJSON(message: RpcCommandOptions): JsonSafe<RpcCommandOptions> {
    const obj: any = {};
    message.rpcMethod !== undefined && (obj.rpcMethod = message.rpcMethod);
    message.use !== undefined && (obj.use = message.use);
    message.long !== undefined && (obj.long = message.long);
    message.short !== undefined && (obj.short = message.short);
    message.example !== undefined && (obj.example = message.example);
    if (message.alias) {
      obj.alias = message.alias.map((e) => e);
    } else {
      obj.alias = [];
    }
    if (message.suggestFor) {
      obj.suggestFor = message.suggestFor.map((e) => e);
    } else {
      obj.suggestFor = [];
    }
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.version !== undefined && (obj.version = message.version);
    obj.flagOptions = {};
    if (message.flagOptions) {
      Object.entries(message.flagOptions).forEach(([k, v]) => {
        obj.flagOptions[k] = FlagOptions.toJSON(v);
      });
    }
    if (message.positionalArgs) {
      obj.positionalArgs = message.positionalArgs.map((e) =>
        e ? PositionalArgDescriptor.toJSON(e) : undefined,
      );
    } else {
      obj.positionalArgs = [];
    }
    message.skip !== undefined && (obj.skip = message.skip);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<RpcCommandOptions>, I>>(
    object: I,
  ): RpcCommandOptions {
    const message = createBaseRpcCommandOptions();
    message.rpcMethod = object.rpcMethod ?? "";
    message.use = object.use ?? "";
    message.long = object.long ?? "";
    message.short = object.short ?? "";
    message.example = object.example ?? "";
    message.alias = object.alias?.map((e) => e) || [];
    message.suggestFor = object.suggestFor?.map((e) => e) || [];
    message.deprecated = object.deprecated ?? "";
    message.version = object.version ?? "";
    message.flagOptions = Object.entries(object.flagOptions ?? {}).reduce<{
      [key: string]: FlagOptions;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = FlagOptions.fromPartial(value);
      }
      return acc;
    }, {});
    message.positionalArgs =
      object.positionalArgs?.map((e) =>
        PositionalArgDescriptor.fromPartial(e),
      ) || [];
    message.skip = object.skip ?? false;
    return message;
  },
};
function createBaseFlagOptions(): FlagOptions {
  return {
    name: "",
    shorthand: "",
    usage: "",
    defaultValue: "",
    noOptDefaultValue: "",
    deprecated: "",
    shorthandDeprecated: "",
    hidden: false,
  };
}
export const FlagOptions = {
  typeUrl: "/cosmos.autocli.v1.FlagOptions",
  encode(
    message: FlagOptions,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.shorthand !== "") {
      writer.uint32(18).string(message.shorthand);
    }
    if (message.usage !== "") {
      writer.uint32(26).string(message.usage);
    }
    if (message.defaultValue !== "") {
      writer.uint32(34).string(message.defaultValue);
    }
    if (message.noOptDefaultValue !== "") {
      writer.uint32(42).string(message.noOptDefaultValue);
    }
    if (message.deprecated !== "") {
      writer.uint32(50).string(message.deprecated);
    }
    if (message.shorthandDeprecated !== "") {
      writer.uint32(58).string(message.shorthandDeprecated);
    }
    if (message.hidden === true) {
      writer.uint32(64).bool(message.hidden);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FlagOptions {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlagOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.shorthand = reader.string();
          break;
        case 3:
          message.usage = reader.string();
          break;
        case 4:
          message.defaultValue = reader.string();
          break;
        case 5:
          message.noOptDefaultValue = reader.string();
          break;
        case 6:
          message.deprecated = reader.string();
          break;
        case 7:
          message.shorthandDeprecated = reader.string();
          break;
        case 8:
          message.hidden = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FlagOptions {
    const obj = createBaseFlagOptions();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.shorthand)) obj.shorthand = String(object.shorthand);
    if (isSet(object.usage)) obj.usage = String(object.usage);
    if (isSet(object.defaultValue))
      obj.defaultValue = String(object.defaultValue);
    if (isSet(object.noOptDefaultValue))
      obj.noOptDefaultValue = String(object.noOptDefaultValue);
    if (isSet(object.deprecated)) obj.deprecated = String(object.deprecated);
    if (isSet(object.shorthandDeprecated))
      obj.shorthandDeprecated = String(object.shorthandDeprecated);
    if (isSet(object.hidden)) obj.hidden = Boolean(object.hidden);
    return obj;
  },
  toJSON(message: FlagOptions): JsonSafe<FlagOptions> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.shorthand !== undefined && (obj.shorthand = message.shorthand);
    message.usage !== undefined && (obj.usage = message.usage);
    message.defaultValue !== undefined &&
      (obj.defaultValue = message.defaultValue);
    message.noOptDefaultValue !== undefined &&
      (obj.noOptDefaultValue = message.noOptDefaultValue);
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    message.shorthandDeprecated !== undefined &&
      (obj.shorthandDeprecated = message.shorthandDeprecated);
    message.hidden !== undefined && (obj.hidden = message.hidden);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<FlagOptions>, I>>(
    object: I,
  ): FlagOptions {
    const message = createBaseFlagOptions();
    message.name = object.name ?? "";
    message.shorthand = object.shorthand ?? "";
    message.usage = object.usage ?? "";
    message.defaultValue = object.defaultValue ?? "";
    message.noOptDefaultValue = object.noOptDefaultValue ?? "";
    message.deprecated = object.deprecated ?? "";
    message.shorthandDeprecated = object.shorthandDeprecated ?? "";
    message.hidden = object.hidden ?? false;
    return message;
  },
};
function createBasePositionalArgDescriptor(): PositionalArgDescriptor {
  return {
    protoField: "",
    varargs: false,
  };
}
export const PositionalArgDescriptor = {
  typeUrl: "/cosmos.autocli.v1.PositionalArgDescriptor",
  encode(
    message: PositionalArgDescriptor,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.protoField !== "") {
      writer.uint32(10).string(message.protoField);
    }
    if (message.varargs === true) {
      writer.uint32(16).bool(message.varargs);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): PositionalArgDescriptor {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionalArgDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.protoField = reader.string();
          break;
        case 2:
          message.varargs = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PositionalArgDescriptor {
    const obj = createBasePositionalArgDescriptor();
    if (isSet(object.protoField)) obj.protoField = String(object.protoField);
    if (isSet(object.varargs)) obj.varargs = Boolean(object.varargs);
    return obj;
  },
  toJSON(message: PositionalArgDescriptor): JsonSafe<PositionalArgDescriptor> {
    const obj: any = {};
    message.protoField !== undefined && (obj.protoField = message.protoField);
    message.varargs !== undefined && (obj.varargs = message.varargs);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<PositionalArgDescriptor>, I>>(
    object: I,
  ): PositionalArgDescriptor {
    const message = createBasePositionalArgDescriptor();
    message.protoField = object.protoField ?? "";
    message.varargs = object.varargs ?? false;
    return message;
  },
};
