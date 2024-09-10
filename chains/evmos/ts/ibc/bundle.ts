/* eslint-disable */
import * as _184 from "./applications/fee/v1/ack";
import * as _185 from "./applications/fee/v1/fee";
import * as _186 from "./applications/fee/v1/genesis";
import * as _187 from "./applications/fee/v1/metadata";
import * as _188 from "./applications/fee/v1/query";
import * as _189 from "./applications/fee/v1/tx";
import * as _190 from "./applications/interchain_accounts/controller/v1/controller";
import * as _191 from "./applications/interchain_accounts/controller/v1/query";
import * as _192 from "./applications/interchain_accounts/controller/v1/tx";
import * as _193 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _194 from "./applications/interchain_accounts/host/v1/host";
import * as _195 from "./applications/interchain_accounts/host/v1/query";
import * as _196 from "./applications/interchain_accounts/host/v1/tx";
import * as _197 from "./applications/interchain_accounts/v1/account";
import * as _198 from "./applications/interchain_accounts/v1/metadata";
import * as _199 from "./applications/interchain_accounts/v1/packet";
import * as _200 from "./applications/transfer/v1/authz";
import * as _201 from "./applications/transfer/v1/genesis";
import * as _202 from "./applications/transfer/v1/query";
import * as _203 from "./applications/transfer/v1/transfer";
import * as _204 from "./applications/transfer/v1/tx";
import * as _205 from "./applications/transfer/v2/packet";
import * as _206 from "./core/channel/v1/channel";
import * as _207 from "./core/channel/v1/genesis";
import * as _208 from "./core/channel/v1/query";
import * as _209 from "./core/channel/v1/tx";
import * as _210 from "./core/channel/v1/upgrade";
import * as _211 from "./core/client/v1/client";
import * as _212 from "./core/client/v1/genesis";
import * as _213 from "./core/client/v1/query";
import * as _214 from "./core/client/v1/tx";
import * as _215 from "./core/commitment/v1/commitment";
import * as _216 from "./core/connection/v1/connection";
import * as _217 from "./core/connection/v1/genesis";
import * as _218 from "./core/connection/v1/query";
import * as _219 from "./core/connection/v1/tx";
import * as _220 from "./core/types/v1/genesis";
import * as _221 from "./lightclients/localhost/v2/localhost";
import * as _222 from "./lightclients/solomachine/v2/solomachine";
import * as _223 from "./lightclients/solomachine/v3/solomachine";
import * as _224 from "./lightclients/tendermint/v1/tendermint";
import * as _225 from "./lightclients/wasm/v1/genesis";
import * as _226 from "./lightclients/wasm/v1/query";
import * as _227 from "./lightclients/wasm/v1/tx";
import * as _228 from "./lightclients/wasm/v1/wasm";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._184,
        ..._185,
        ..._186,
        ..._187,
        ..._188,
        ..._189,
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._190,
          ..._191,
          ..._192,
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._193,
        };
      }
      export namespace host {
        export const v1 = {
          ..._194,
          ..._195,
          ..._196,
        };
      }
      export const v1 = {
        ..._197,
        ..._198,
        ..._199,
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._200,
        ..._201,
        ..._202,
        ..._203,
        ..._204,
      };
      export const v2 = {
        ..._205,
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._206,
        ..._207,
        ..._208,
        ..._209,
        ..._210,
      };
    }
    export namespace client {
      export const v1 = {
        ..._211,
        ..._212,
        ..._213,
        ..._214,
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._215,
      };
    }
    export namespace connection {
      export const v1 = {
        ..._216,
        ..._217,
        ..._218,
        ..._219,
      };
    }
    export namespace types {
      export const v1 = {
        ..._220,
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._221,
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._222,
      };
      export const v3 = {
        ..._223,
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._224,
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._225,
        ..._226,
        ..._227,
        ..._228,
      };
    }
  }
}
