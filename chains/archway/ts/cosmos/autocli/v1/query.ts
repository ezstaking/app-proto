/* eslint-disable */
import { ModuleOptions } from "./options";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact, isSet, isObject, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.autocli.v1";
/** AppOptionsRequest is the RemoteInfoService/AppOptions request type. */
export interface AppOptionsRequest {}
export interface AppOptionsResponse_ModuleOptionsEntry {
  key: string;
  value?: ModuleOptions;
}
/** AppOptionsResponse is the RemoteInfoService/AppOptions response type. */
export interface AppOptionsResponse {
  /** module_options is a map of module name to autocli module options. */
  moduleOptions: {
    [key: string]: ModuleOptions;
  };
}
function createBaseAppOptionsRequest(): AppOptionsRequest {
  return {};
}
export const AppOptionsRequest = {
  typeUrl: "/cosmos.autocli.v1.AppOptionsRequest",
  encode(
    _: AppOptionsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AppOptionsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppOptionsRequest();
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
  fromJSON(_: any): AppOptionsRequest {
    const obj = createBaseAppOptionsRequest();
    return obj;
  },
  toJSON(_: AppOptionsRequest): JsonSafe<AppOptionsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AppOptionsRequest>, I>>(
    _: I,
  ): AppOptionsRequest {
    const message = createBaseAppOptionsRequest();
    return message;
  },
};
function createBaseAppOptionsResponse_ModuleOptionsEntry(): AppOptionsResponse_ModuleOptionsEntry {
  return {
    key: "",
    value: undefined,
  };
}
export const AppOptionsResponse_ModuleOptionsEntry = {
  encode(
    message: AppOptionsResponse_ModuleOptionsEntry,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      ModuleOptions.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): AppOptionsResponse_ModuleOptionsEntry {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppOptionsResponse_ModuleOptionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = ModuleOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AppOptionsResponse_ModuleOptionsEntry {
    const obj = createBaseAppOptionsResponse_ModuleOptionsEntry();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value)) obj.value = ModuleOptions.fromJSON(object.value);
    return obj;
  },
  toJSON(
    message: AppOptionsResponse_ModuleOptionsEntry,
  ): JsonSafe<AppOptionsResponse_ModuleOptionsEntry> {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? ModuleOptions.toJSON(message.value)
        : undefined);
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<AppOptionsResponse_ModuleOptionsEntry>, I>,
  >(object: I): AppOptionsResponse_ModuleOptionsEntry {
    const message = createBaseAppOptionsResponse_ModuleOptionsEntry();
    message.key = object.key ?? "";
    if (object.value !== undefined && object.value !== null) {
      message.value = ModuleOptions.fromPartial(object.value);
    }
    return message;
  },
};
function createBaseAppOptionsResponse(): AppOptionsResponse {
  return {
    moduleOptions: {},
  };
}
export const AppOptionsResponse = {
  typeUrl: "/cosmos.autocli.v1.AppOptionsResponse",
  encode(
    message: AppOptionsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    Object.entries(message.moduleOptions).forEach(([key, value]) => {
      AppOptionsResponse_ModuleOptionsEntry.encode(
        {
          key: key as any,
          value,
        },
        writer.uint32(10).fork(),
      ).ldelim();
    });
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): AppOptionsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppOptionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = AppOptionsResponse_ModuleOptionsEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry1.value !== undefined) {
            message.moduleOptions[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AppOptionsResponse {
    const obj = createBaseAppOptionsResponse();
    if (isObject(object.moduleOptions))
      obj.moduleOptions = Object.entries(object.moduleOptions).reduce<{
        [key: string]: ModuleOptions;
      }>((acc, [key, value]) => {
        acc[key] = ModuleOptions.fromJSON(value);
        return acc;
      }, {});
    return obj;
  },
  toJSON(message: AppOptionsResponse): JsonSafe<AppOptionsResponse> {
    const obj: any = {};
    obj.moduleOptions = {};
    if (message.moduleOptions) {
      Object.entries(message.moduleOptions).forEach(([k, v]) => {
        obj.moduleOptions[k] = ModuleOptions.toJSON(v);
      });
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AppOptionsResponse>, I>>(
    object: I,
  ): AppOptionsResponse {
    const message = createBaseAppOptionsResponse();
    message.moduleOptions = Object.entries(object.moduleOptions ?? {}).reduce<{
      [key: string]: ModuleOptions;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = ModuleOptions.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};
/** RemoteInfoService provides clients with the information they need
 to build dynamically CLI clients for remote chains. */
export interface Query {
  /** AppOptions returns the autocli options for all of the modules in an app. */
  AppOptions(request?: AppOptionsRequest): Promise<AppOptionsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AppOptions = this.AppOptions.bind(this);
  }
  AppOptions(request: AppOptionsRequest = {}): Promise<AppOptionsResponse> {
    const data = AppOptionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.autocli.v1.Query",
      "AppOptions",
      data,
    );
    return promise.then((data) =>
      AppOptionsResponse.decode(new BinaryReader(data)),
    );
  }
}
