#!/usr/bin/env node
import * as url from 'url';
import {join} from "path";
import {protoBuild} from "./../../../bin/proto_to_ts.mjs";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

protoBuild([
  join(__dirname, "./../proto/desmos"),
], "desmos");
