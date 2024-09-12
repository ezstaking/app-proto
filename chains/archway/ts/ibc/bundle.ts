/* eslint-disable */
import * as _163 from "./core/channel/v1/channel";
import * as _164 from "./core/channel/v1/genesis";
import * as _165 from "./core/channel/v1/query";
import * as _166 from "./core/channel/v1/tx";
import * as _167 from "./core/client/v1/client";
import * as _168 from "./core/client/v1/genesis";
import * as _169 from "./core/client/v1/query";
import * as _170 from "./core/client/v1/tx";
import * as _171 from "./core/commitment/v1/commitment";
import * as _172 from "./core/connection/v1/connection";
import * as _173 from "./core/connection/v1/genesis";
import * as _174 from "./core/connection/v1/query";
import * as _175 from "./core/connection/v1/tx";
import * as _176 from "./core/types/v1/genesis";
import * as _177 from "./applications/fee/v1/ack";
import * as _178 from "./applications/fee/v1/fee";
import * as _179 from "./applications/fee/v1/genesis";
import * as _180 from "./applications/fee/v1/metadata";
import * as _181 from "./applications/fee/v1/query";
import * as _182 from "./applications/fee/v1/tx";
import * as _183 from "./applications/interchain_accounts/controller/v1/controller";
import * as _184 from "./applications/interchain_accounts/controller/v1/query";
import * as _185 from "./applications/interchain_accounts/controller/v1/tx";
import * as _186 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _187 from "./applications/interchain_accounts/host/v1/host";
import * as _188 from "./applications/interchain_accounts/host/v1/query";
import * as _189 from "./applications/interchain_accounts/v1/account";
import * as _190 from "./applications/interchain_accounts/v1/metadata";
import * as _191 from "./applications/interchain_accounts/v1/packet";
import * as _192 from "./applications/transfer/v1/authz";
import * as _193 from "./applications/transfer/v1/genesis";
import * as _194 from "./applications/transfer/v1/query";
import * as _195 from "./applications/transfer/v1/transfer";
import * as _196 from "./applications/transfer/v1/tx";
import * as _197 from "./applications/transfer/v2/packet";
import * as _198 from "./lightclients/localhost/v2/localhost";
import * as _199 from "./lightclients/solomachine/v2/solomachine";
import * as _200 from "./lightclients/solomachine/v3/solomachine";
import * as _201 from "./lightclients/tendermint/v1/tendermint";
export namespace ibc {
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._163,
        ..._164,
        ..._165,
        ..._166,
      };
    }
    export namespace client {
      export const v1 = {
        ..._167,
        ..._168,
        ..._169,
        ..._170,
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._171,
      };
    }
    export namespace connection {
      export const v1 = {
        ..._172,
        ..._173,
        ..._174,
        ..._175,
      };
    }
    export namespace types {
      export const v1 = {
        ..._176,
      };
    }
  }
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._177,
        ..._178,
        ..._179,
        ..._180,
        ..._181,
        ..._182,
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._183,
          ..._184,
          ..._185,
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._186,
        };
      }
      export namespace host {
        export const v1 = {
          ..._187,
          ..._188,
        };
      }
      export const v1 = {
        ..._189,
        ..._190,
        ..._191,
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._192,
        ..._193,
        ..._194,
        ..._195,
        ..._196,
      };
      export const v2 = {
        ..._197,
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._198,
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._199,
      };
      export const v3 = {
        ..._200,
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._201,
      };
    }
  }
}
