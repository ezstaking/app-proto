/* eslint-disable */
import * as _6 from "./bank/v1beta1/bank";
import * as _7 from "./bank/v1beta1/authz";
import * as _8 from "./bank/v1beta1/genesis";
import * as _9 from "./bank/v1beta1/query";
import * as _10 from "./bank/v1beta1/tx";
import * as _11 from "./base/abci/v1beta1/abci";
import * as _12 from "./base/query/v1beta1/pagination";
import * as _13 from "./base/v1beta1/coin";
import * as _14 from "./base/kv/v1beta1/kv";
import * as _15 from "./base/node/v1beta1/query";
import * as _16 from "./base/reflection/v1beta1/reflection";
import * as _17 from "./base/reflection/v2alpha1/reflection";
import * as _18 from "./base/snapshots/v1beta1/snapshot";
import * as _19 from "./base/store/v1beta1/commit_info";
import * as _20 from "./base/store/v1beta1/listening";
import * as _21 from "./base/tendermint/v1beta1/query";
import * as _22 from "./upgrade/v1beta1/upgrade";
import * as _23 from "./upgrade/v1beta1/query";
import * as _24 from "./auth/v1beta1/auth";
import * as _25 from "./auth/v1beta1/genesis";
import * as _26 from "./auth/v1beta1/query";
import * as _27 from "./authz/v1beta1/authz";
import * as _28 from "./authz/v1beta1/event";
import * as _29 from "./authz/v1beta1/genesis";
import * as _30 from "./authz/v1beta1/query";
import * as _31 from "./authz/v1beta1/tx";
import * as _32 from "./capability/v1beta1/capability";
import * as _33 from "./capability/v1beta1/genesis";
import * as _34 from "./crisis/v1beta1/genesis";
import * as _35 from "./crisis/v1beta1/tx";
import * as _36 from "./crypto/ed25519/keys";
import * as _37 from "./crypto/multisig/keys";
import * as _38 from "./crypto/secp256k1/keys";
import * as _39 from "./crypto/secp256r1/keys";
import * as _40 from "./distribution/v1beta1/distribution";
import * as _41 from "./distribution/v1beta1/genesis";
import * as _42 from "./distribution/v1beta1/query";
import * as _43 from "./distribution/v1beta1/tx";
import * as _44 from "./evidence/v1beta1/evidence";
import * as _45 from "./evidence/v1beta1/genesis";
import * as _46 from "./evidence/v1beta1/query";
import * as _47 from "./evidence/v1beta1/tx";
import * as _48 from "./feegrant/v1beta1/feegrant";
import * as _49 from "./feegrant/v1beta1/genesis";
import * as _50 from "./feegrant/v1beta1/query";
import * as _51 from "./feegrant/v1beta1/tx";
import * as _52 from "./genutil/v1beta1/genesis";
import * as _53 from "./gov/v1beta1/genesis";
import * as _54 from "./gov/v1beta1/gov";
import * as _55 from "./gov/v1beta1/query";
import * as _56 from "./gov/v1beta1/tx";
import * as _57 from "./mint/v1beta1/genesis";
import * as _58 from "./mint/v1beta1/mint";
import * as _59 from "./mint/v1beta1/query";
import * as _60 from "./params/v1beta1/params";
import * as _61 from "./params/v1beta1/query";
import * as _62 from "./slashing/v1beta1/genesis";
import * as _63 from "./slashing/v1beta1/query";
import * as _64 from "./slashing/v1beta1/slashing";
import * as _65 from "./slashing/v1beta1/tx";
import * as _66 from "./staking/v1beta1/authz";
import * as _67 from "./staking/v1beta1/genesis";
import * as _68 from "./staking/v1beta1/query";
import * as _69 from "./staking/v1beta1/staking";
import * as _70 from "./staking/v1beta1/tx";
import * as _71 from "./tx/signing/v1beta1/signing";
import * as _72 from "./tx/v1beta1/service";
import * as _73 from "./tx/v1beta1/tx";
import * as _74 from "./vesting/v1beta1/tx";
import * as _75 from "./vesting/v1beta1/vesting";
export namespace cosmos {
  export namespace bank {
    export const v1beta1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._11,
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._12,
      };
    }
    export const v1beta1 = {
      ..._13,
    };
    export namespace kv {
      export const v1beta1 = {
        ..._14,
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._15,
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._16,
      };
      export const v2alpha1 = {
        ..._17,
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._18,
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._19,
        ..._20,
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._21,
      };
    }
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._22,
      ..._23,
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._24,
      ..._25,
      ..._26,
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._27,
      ..._28,
      ..._29,
      ..._30,
      ..._31,
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._32,
      ..._33,
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._34,
      ..._35,
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._36,
    };
    export const multisig = {
      ..._37,
    };
    export const secp256k1 = {
      ..._38,
    };
    export const secp256r1 = {
      ..._39,
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._40,
      ..._41,
      ..._42,
      ..._43,
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._44,
      ..._45,
      ..._46,
      ..._47,
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._48,
      ..._49,
      ..._50,
      ..._51,
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._52,
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._53,
      ..._54,
      ..._55,
      ..._56,
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._57,
      ..._58,
      ..._59,
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._60,
      ..._61,
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._62,
      ..._63,
      ..._64,
      ..._65,
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._70,
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._71,
      };
    }
    export const v1beta1 = {
      ..._72,
      ..._73,
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._74,
      ..._75,
    };
  }
}
