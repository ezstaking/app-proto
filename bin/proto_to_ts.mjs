#!/usr/bin/env node
import * as url from 'url';
import {join} from "path";
import {sync as rimraf} from "rimraf";
import telescope from "@cosmology/telescope";

export const protoBuild = (protoDirs, network) => {
  console.debug(`👉 Proto build...`);

  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  const outPath = join(__dirname, `./../chains/${network}/ts`);
  const options = {
    logLevel: 0,
    useSDKTypes: false,
    tsDisable: {
      disableAll: false,
    },
    eslintDisable: {
      disableAll: false,
    },
    bundle: {
      enabled: false,
    },
    interfaces: {
      enabled: true,
    },
    prototypes: {
      includePackageVar: true,
      strictNullCheckForPrototypeMethods: true,
      paginationDefaultFromPartial: true,
      addTypeUrlToObjects: true,
      // Those are causing trouble in CosmJS testing (https://github.com/cosmology-tech/telescope/issues/489)
      addTypeUrlToDecoders: false,
      excluded: {
        protos: [
          // "gogoproto/gogo.proto",
          // "cosmos_proto/cosmos.proto",
          //
          // "cosmos/autocli/v1/options.proto",
          // "cosmos/autocli/v1/query.proto",
          // "cosmos/authz/v1beta1/event.proto",
          // "cosmos/base/reflection/v2alpha1/reflection.proto",
          // "cosmos/crypto/secp256r1/keys.proto",
          // "ibc/core/port/v1/query.proto",
          // "ibc/lightclients/solomachine/v2/solomachine.proto",
          // "tendermint/libs/bits/types.proto",
          // "google/api/httpbody.proto",
          // "tendermint/blockchain/types.proto",
          // "tendermint/consensus/types.proto",
          // "tendermint/consensus/wal.proto",
          // "tendermint/mempool/types.proto",
          // "tendermint/p2p/conn.proto",
          // "tendermint/p2p/pex.proto",
          // "tendermint/privval/types.proto",
          // "tendermint/rpc/grpc/types.proto",
          // "tendermint/state/types.proto",
          // "tendermint/statesync/types.proto",
          // "tendermint/store/types.proto",
          // "tendermint/types/canonical.proto",
          // "tendermint/types/events.proto",
        ],
      },
      methods: {
        // There are users who need those functions. CosmJS does not need them directly.
        // See https://github.com/cosmos/cosmjs/pull/1329
        fromJSON: true,
        toJSON: true,
        fromAmino: false,
        toAmino: false,
        fromProto: false,
        toProto: false,
      },
      typingsFormat: {
        useDeepPartial: true,
        useExact: true,
        timestamp: "timestamp",
        duration: "duration",
        customTypes: {
          useCosmosSDKDec: false,
        },
        num64: "bigint",
      },
    },
    lcdClients: {
      enabled: false,
    },
    rpcClients: {
      enabled: true,
      inline: true,
      extensions: false,
      camelCase: false,
      enabledServices: ["Msg", "Query", "Service", "ReflectionService", "ABCIApplication"],
    },
    aminoEncoding: {
      enabled: true,
      useLegacyInlineEncoding: false,
    },
  };
  const builderParams = {protoDirs, outPath, options}

  rimraf(outPath);

  new telescope.TelescopeBuilder(builderParams).build().then(() => {
    console.log("✨ all done!", protoDirs, outPath);
  }).catch(e => {
    console.error(e);
    process.exit(1);
  })
}
