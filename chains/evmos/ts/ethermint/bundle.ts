/* eslint-disable */
import * as _131 from "./crypto/v1/ethsecp256k1/keys";
import * as _132 from "./evm/v1/events";
import * as _133 from "./evm/v1/evm";
import * as _134 from "./evm/v1/genesis";
import * as _135 from "./evm/v1/query";
import * as _136 from "./evm/v1/tx";
import * as _137 from "./feemarket/v1/events";
import * as _138 from "./feemarket/v1/feemarket";
import * as _139 from "./feemarket/v1/genesis";
import * as _140 from "./feemarket/v1/query";
import * as _141 from "./feemarket/v1/tx";
import * as _142 from "./types/v1/account";
import * as _143 from "./types/v1/dynamic_fee";
import * as _144 from "./types/v1/indexer";
import * as _145 from "./types/v1/web3";
export namespace ethermint {
  export namespace crypto {
    export namespace v1 {
      export const ethsecp256k1 = {
        ..._131,
      };
    }
  }
  export namespace evm {
    export const v1 = {
      ..._132,
      ..._133,
      ..._134,
      ..._135,
      ..._136,
    };
  }
  export namespace feemarket {
    export const v1 = {
      ..._137,
      ..._138,
      ..._139,
      ..._140,
      ..._141,
    };
  }
  export namespace types {
    export const v1 = {
      ..._142,
      ..._143,
      ..._144,
      ..._145,
    };
  }
}
