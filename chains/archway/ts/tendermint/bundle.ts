/* eslint-disable */
import * as _202 from "./abci/types";
import * as _203 from "./crypto/keys";
import * as _204 from "./crypto/proof";
import * as _205 from "./libs/bits/types";
import * as _206 from "./p2p/types";
import * as _207 from "./types/block";
import * as _208 from "./types/evidence";
import * as _209 from "./types/params";
import * as _210 from "./types/types";
import * as _211 from "./types/validator";
import * as _212 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._202,
  };
  export const crypto = {
    ..._203,
    ..._204,
  };
  export namespace libs {
    export const bits = {
      ..._205,
    };
  }
  export const p2p = {
    ..._206,
  };
  export const types = {
    ..._207,
    ..._208,
    ..._209,
    ..._210,
    ..._211,
  };
  export const version = {
    ..._212,
  };
}
