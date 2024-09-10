/* eslint-disable */
import * as _151 from "./applications/fee/v1/ack";
import * as _152 from "./applications/fee/v1/fee";
import * as _153 from "./applications/fee/v1/genesis";
import * as _154 from "./applications/fee/v1/metadata";
import * as _155 from "./applications/fee/v1/query";
import * as _156 from "./applications/fee/v1/tx";
import * as _157 from "./applications/interchain_accounts/controller/v1/controller";
import * as _158 from "./applications/interchain_accounts/controller/v1/query";
import * as _159 from "./applications/interchain_accounts/controller/v1/tx";
import * as _160 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _161 from "./applications/interchain_accounts/host/v1/host";
import * as _162 from "./applications/interchain_accounts/host/v1/query";
import * as _163 from "./applications/interchain_accounts/host/v1/tx";
import * as _164 from "./applications/interchain_accounts/v1/account";
import * as _165 from "./applications/interchain_accounts/v1/metadata";
import * as _166 from "./applications/interchain_accounts/v1/packet";
import * as _167 from "./applications/transfer/v1/authz";
import * as _168 from "./applications/transfer/v1/genesis";
import * as _169 from "./applications/transfer/v1/query";
import * as _170 from "./applications/transfer/v1/transfer";
import * as _171 from "./applications/transfer/v1/tx";
import * as _172 from "./applications/transfer/v2/packet";
import * as _173 from "./core/channel/v1/channel";
import * as _174 from "./core/channel/v1/genesis";
import * as _175 from "./core/channel/v1/query";
import * as _176 from "./core/channel/v1/tx";
import * as _177 from "./core/channel/v1/upgrade";
import * as _178 from "./core/client/v1/client";
import * as _179 from "./core/client/v1/genesis";
import * as _180 from "./core/client/v1/query";
import * as _181 from "./core/client/v1/tx";
import * as _182 from "./core/commitment/v1/commitment";
import * as _183 from "./core/connection/v1/connection";
import * as _184 from "./core/connection/v1/genesis";
import * as _185 from "./core/connection/v1/query";
import * as _186 from "./core/connection/v1/tx";
import * as _187 from "./core/types/v1/genesis";
import * as _188 from "./lightclients/localhost/v2/localhost";
import * as _189 from "./lightclients/solomachine/v2/solomachine";
import * as _190 from "./lightclients/solomachine/v3/solomachine";
import * as _191 from "./lightclients/tendermint/v1/tendermint";
import * as _192 from "./lightclients/wasm/v1/genesis";
import * as _193 from "./lightclients/wasm/v1/query";
import * as _194 from "./lightclients/wasm/v1/tx";
import * as _195 from "./lightclients/wasm/v1/wasm";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._151,
        ..._152,
        ..._153,
        ..._154,
        ..._155,
        ..._156,
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._157,
          ..._158,
          ..._159,
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._160,
        };
      }
      export namespace host {
        export const v1 = {
          ..._161,
          ..._162,
          ..._163,
        };
      }
      export const v1 = {
        ..._164,
        ..._165,
        ..._166,
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._167,
        ..._168,
        ..._169,
        ..._170,
        ..._171,
      };
      export const v2 = {
        ..._172,
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._173,
        ..._174,
        ..._175,
        ..._176,
        ..._177,
      };
    }
    export namespace client {
      export const v1 = {
        ..._178,
        ..._179,
        ..._180,
        ..._181,
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._182,
      };
    }
    export namespace connection {
      export const v1 = {
        ..._183,
        ..._184,
        ..._185,
        ..._186,
      };
    }
    export namespace types {
      export const v1 = {
        ..._187,
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._188,
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._189,
      };
      export const v3 = {
        ..._190,
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._191,
      };
    }
    export namespace wasm {
      export const v1 = {
        ..._192,
        ..._193,
        ..._194,
        ..._195,
      };
    }
  }
}
