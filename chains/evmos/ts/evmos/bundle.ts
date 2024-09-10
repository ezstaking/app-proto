/* eslint-disable */
import * as _146 from "./epochs/v1/genesis";
import * as _147 from "./epochs/v1/query";
import * as _148 from "./erc20/v1/erc20";
import * as _149 from "./erc20/v1/events";
import * as _150 from "./erc20/v1/genesis";
import * as _151 from "./erc20/v1/query";
import * as _152 from "./erc20/v1/tx";
import * as _153 from "./incentives/v1/genesis";
import * as _154 from "./incentives/v1/incentives";
import * as _155 from "./inflation/v1/genesis";
import * as _156 from "./inflation/v1/inflation";
import * as _157 from "./inflation/v1/query";
import * as _158 from "./inflation/v1/tx";
import * as _159 from "./vesting/v1/vesting";
import * as _160 from "./vesting/v2/events";
import * as _161 from "./vesting/v2/query";
import * as _162 from "./vesting/v2/tx";
import * as _163 from "./vesting/v2/vesting";
export namespace evmos {
  export namespace epochs {
    export const v1 = {
      ..._146,
      ..._147,
    };
  }
  export namespace erc20 {
    export const v1 = {
      ..._148,
      ..._149,
      ..._150,
      ..._151,
      ..._152,
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._153,
      ..._154,
    };
  }
  export namespace inflation {
    export const v1 = {
      ..._155,
      ..._156,
      ..._157,
      ..._158,
    };
  }
  export namespace vesting {
    export const v1 = {
      ..._159,
    };
    export const v2 = {
      ..._160,
      ..._161,
      ..._162,
      ..._163,
    };
  }
}
