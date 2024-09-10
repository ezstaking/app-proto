#!/usr/bin/env node
import * as url from 'url';
import {join} from "path";
import {protoBuild} from "./../../../bin//proto_build.mjs";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

protoBuild([
  join(__dirname, "./../proto/gaia"),
  join(__dirname, "./../proto/cosmos-sdk"),
  join(__dirname, "./../proto/ibc-go"),
  join(__dirname, "./../proto/interchain_security"),
  join(__dirname, "./../proto/wasmd"),
], "cosmoshub");
