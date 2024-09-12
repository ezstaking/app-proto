/* eslint-disable */
import * as _92 from "./applications/transfer/v1/query";
import * as _93 from "./applications/transfer/v1/transfer";
import * as _94 from "./applications/transfer/v1/genesis";
import * as _95 from "./applications/transfer/v1/tx";
import * as _96 from "./applications/transfer/v2/packet";
import * as _97 from "./applications/fee/v1/ack";
import * as _98 from "./applications/fee/v1/fee";
import * as _99 from "./applications/fee/v1/genesis";
import * as _100 from "./applications/fee/v1/metadata";
import * as _101 from "./applications/fee/v1/query";
import * as _102 from "./applications/fee/v1/tx";
import * as _103 from "./applications/interchain_accounts/controller/v1/controller";
import * as _104 from "./applications/interchain_accounts/controller/v1/query";
import * as _105 from "./applications/interchain_accounts/host/v1/host";
import * as _106 from "./applications/interchain_accounts/host/v1/query";
import * as _107 from "./applications/interchain_accounts/v1/account";
import * as _108 from "./applications/interchain_accounts/v1/genesis";
import * as _109 from "./applications/interchain_accounts/v1/metadata";
import * as _110 from "./applications/interchain_accounts/v1/packet";
import * as _111 from "./core/channel/v1/channel";
import * as _112 from "./core/channel/v1/tx";
import * as _113 from "./core/channel/v1/genesis";
import * as _114 from "./core/channel/v1/query";
import * as _115 from "./core/client/v1/client";
import * as _116 from "./core/client/v1/query";
import * as _117 from "./core/client/v1/genesis";
import * as _118 from "./core/client/v1/tx";
import * as _119 from "./core/commitment/v1/commitment";
import * as _120 from "./core/connection/v1/connection";
import * as _121 from "./core/connection/v1/genesis";
import * as _122 from "./core/connection/v1/query";
import * as _123 from "./core/connection/v1/tx";
import * as _124 from "./core/types/v1/genesis";
import * as _125 from "./lightclients/tendermint/v1/tendermint";
import * as _126 from "./lightclients/localhost/v1/localhost";
import * as _127 from "./lightclients/solomachine/v1/solomachine";
import * as _128 from "./lightclients/solomachine/v2/solomachine";
export namespace ibc {
  export namespace applications {
    export namespace transfer {
      export const v1 = {
        ..._92,
        ..._93,
        ..._94,
        ..._95,
      };
      export const v2 = {
        ..._96,
      };
    }
    export namespace fee {
      export const v1 = {
        ..._97,
        ..._98,
        ..._99,
        ..._100,
        ..._101,
        ..._102,
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._103,
          ..._104,
        };
      }
      export namespace host {
        export const v1 = {
          ..._105,
          ..._106,
        };
      }
      export const v1 = {
        ..._107,
        ..._108,
        ..._109,
        ..._110,
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._111,
        ..._112,
        ..._113,
        ..._114,
      };
    }
    export namespace client {
      export const v1 = {
        ..._115,
        ..._116,
        ..._117,
        ..._118,
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._119,
      };
    }
    export namespace connection {
      export const v1 = {
        ..._120,
        ..._121,
        ..._122,
        ..._123,
      };
    }
    export namespace types {
      export const v1 = {
        ..._124,
      };
    }
  }
  export namespace lightclients {
    export namespace tendermint {
      export const v1 = {
        ..._125,
      };
    }
    export namespace localhost {
      export const v1 = {
        ..._126,
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._127,
      };
      export const v2 = {
        ..._128,
      };
    }
  }
}
