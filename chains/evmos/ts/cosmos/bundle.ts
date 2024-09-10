/* eslint-disable */
import * as _2 from "./auth/v1beta1/auth";
import * as _3 from "./auth/v1beta1/genesis";
import * as _4 from "./auth/v1beta1/query";
import * as _5 from "./auth/v1beta1/tx";
import * as _6 from "./auth/module/v1/module";
import * as _7 from "./bank/v1beta1/bank";
import * as _8 from "./bank/v1beta1/authz";
import * as _9 from "./bank/v1beta1/genesis";
import * as _10 from "./bank/v1beta1/query";
import * as _11 from "./bank/v1beta1/tx";
import * as _12 from "./bank/module/v1/module";
import * as _13 from "./base/query/v1beta1/pagination";
import * as _14 from "./base/v1beta1/coin";
import * as _15 from "./base/abci/v1beta1/abci";
import * as _16 from "./base/node/v1beta1/query";
import * as _17 from "./base/reflection/v1beta1/reflection";
import * as _18 from "./base/reflection/v2alpha1/reflection";
import * as _19 from "./base/tendermint/v1beta1/query";
import * as _20 from "./base/tendermint/v1beta1/types";
import * as _21 from "./msg/v1/msg";
import * as _22 from "./msg/textual/v1/textual";
import * as _23 from "./vesting/v1beta1/vesting";
import * as _24 from "./vesting/v1beta1/tx";
import * as _25 from "./vesting/module/v1/module";
import * as _26 from "./app/runtime/v1alpha1/module";
import * as _27 from "./app/v1alpha1/config";
import * as _28 from "./app/v1alpha1/module";
import * as _29 from "./app/v1alpha1/query";
import * as _30 from "./authz/module/v1/module";
import * as _31 from "./authz/v1beta1/authz";
import * as _32 from "./authz/v1beta1/event";
import * as _33 from "./authz/v1beta1/genesis";
import * as _34 from "./authz/v1beta1/query";
import * as _35 from "./authz/v1beta1/tx";
import * as _36 from "./autocli/v1/options";
import * as _37 from "./autocli/v1/query";
import * as _38 from "./circuit/module/v1/module";
import * as _39 from "./circuit/v1/query";
import * as _40 from "./circuit/v1/tx";
import * as _41 from "./circuit/v1/types";
import * as _42 from "./consensus/module/v1/module";
import * as _43 from "./consensus/v1/query";
import * as _44 from "./consensus/v1/tx";
import * as _45 from "./crisis/module/v1/module";
import * as _46 from "./crisis/v1beta1/genesis";
import * as _47 from "./crisis/v1beta1/tx";
import * as _48 from "./crypto/ed25519/keys";
import * as _49 from "./crypto/hd/v1/hd";
import * as _50 from "./crypto/keyring/v1/record";
import * as _51 from "./crypto/multisig/keys";
import * as _52 from "./crypto/secp256k1/keys";
import * as _53 from "./crypto/secp256r1/keys";
import * as _54 from "./distribution/module/v1/module";
import * as _55 from "./distribution/v1beta1/distribution";
import * as _56 from "./distribution/v1beta1/genesis";
import * as _57 from "./distribution/v1beta1/query";
import * as _58 from "./distribution/v1beta1/tx";
import * as _59 from "./evidence/module/v1/module";
import * as _60 from "./evidence/v1beta1/evidence";
import * as _61 from "./evidence/v1beta1/genesis";
import * as _62 from "./evidence/v1beta1/query";
import * as _63 from "./evidence/v1beta1/tx";
import * as _64 from "./feegrant/module/v1/module";
import * as _65 from "./feegrant/v1beta1/feegrant";
import * as _66 from "./feegrant/v1beta1/genesis";
import * as _67 from "./feegrant/v1beta1/query";
import * as _68 from "./feegrant/v1beta1/tx";
import * as _69 from "./genutil/module/v1/module";
import * as _70 from "./genutil/v1beta1/genesis";
import * as _71 from "./gov/module/v1/module";
import * as _72 from "./gov/v1/genesis";
import * as _73 from "./gov/v1/gov";
import * as _74 from "./gov/v1/query";
import * as _75 from "./gov/v1/tx";
import * as _76 from "./gov/v1beta1/genesis";
import * as _77 from "./gov/v1beta1/gov";
import * as _78 from "./gov/v1beta1/query";
import * as _79 from "./gov/v1beta1/tx";
import * as _80 from "./group/module/v1/module";
import * as _81 from "./group/v1/events";
import * as _82 from "./group/v1/genesis";
import * as _83 from "./group/v1/query";
import * as _84 from "./group/v1/tx";
import * as _85 from "./group/v1/types";
import * as _86 from "./mint/module/v1/module";
import * as _87 from "./mint/v1beta1/genesis";
import * as _88 from "./mint/v1beta1/mint";
import * as _89 from "./mint/v1beta1/query";
import * as _90 from "./mint/v1beta1/tx";
import * as _91 from "./nft/module/v1/module";
import * as _92 from "./nft/v1beta1/event";
import * as _93 from "./nft/v1beta1/genesis";
import * as _94 from "./nft/v1beta1/nft";
import * as _95 from "./nft/v1beta1/query";
import * as _96 from "./nft/v1beta1/tx";
import * as _97 from "./orm/module/v1alpha1/module";
import * as _98 from "./orm/query/v1alpha1/query";
import * as _99 from "./orm/v1/orm";
import * as _100 from "./orm/v1alpha1/schema";
import * as _101 from "./params/module/v1/module";
import * as _102 from "./params/v1beta1/params";
import * as _103 from "./params/v1beta1/query";
import * as _104 from "./query/v1/query";
import * as _105 from "./reflection/v1/reflection";
import * as _106 from "./slashing/module/v1/module";
import * as _107 from "./slashing/v1beta1/genesis";
import * as _108 from "./slashing/v1beta1/query";
import * as _109 from "./slashing/v1beta1/slashing";
import * as _110 from "./slashing/v1beta1/tx";
import * as _111 from "./staking/module/v1/module";
import * as _112 from "./staking/v1beta1/authz";
import * as _113 from "./staking/v1beta1/genesis";
import * as _114 from "./staking/v1beta1/query";
import * as _115 from "./staking/v1beta1/staking";
import * as _116 from "./staking/v1beta1/tx";
import * as _117 from "./store/internal/kv/v1beta1/kv";
import * as _118 from "./store/snapshots/v1/snapshot";
import * as _119 from "./store/streaming/abci/grpc";
import * as _120 from "./store/v1beta1/commit_info";
import * as _121 from "./store/v1beta1/listening";
import * as _122 from "./tx/config/v1/config";
import * as _123 from "./tx/signing/v1beta1/signing";
import * as _124 from "./tx/v1beta1/service";
import * as _125 from "./tx/v1beta1/tx";
import * as _126 from "./upgrade/module/v1/module";
import * as _127 from "./upgrade/v1beta1/query";
import * as _128 from "./upgrade/v1beta1/tx";
import * as _129 from "./upgrade/v1beta1/upgrade";
import * as _130 from "./ics23/v1/proofs";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._2,
      ..._3,
      ..._4,
      ..._5,
    };
    export namespace module {
      export const v1 = {
        ..._6,
      };
    }
  }
  export namespace bank {
    export const v1beta1 = {
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._11,
    };
    export namespace module {
      export const v1 = {
        ..._12,
      };
    }
  }
  export namespace base {
    export namespace query {
      export const v1beta1 = {
        ..._13,
      };
    }
    export const v1beta1 = {
      ..._14,
    };
    export namespace abci {
      export const v1beta1 = {
        ..._15,
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._16,
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._17,
      };
      export const v2alpha1 = {
        ..._18,
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._19,
        ..._20,
      };
    }
  }
  export namespace msg {
    export const v1 = {
      ..._21,
    };
    export namespace textual {
      export const v1 = {
        ..._22,
      };
    }
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._23,
      ..._24,
    };
    export namespace module {
      export const v1 = {
        ..._25,
      };
    }
  }
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._26,
      };
    }
    export const v1alpha1 = {
      ..._27,
      ..._28,
      ..._29,
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._30,
      };
    }
    export const v1beta1 = {
      ..._31,
      ..._32,
      ..._33,
      ..._34,
      ..._35,
    };
  }
  export namespace autocli {
    export const v1 = {
      ..._36,
      ..._37,
    };
  }
  export namespace circuit {
    export namespace module {
      export const v1 = {
        ..._38,
      };
    }
    export const v1 = {
      ..._39,
      ..._40,
      ..._41,
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._42,
      };
    }
    export const v1 = {
      ..._43,
      ..._44,
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._45,
      };
    }
    export const v1beta1 = {
      ..._46,
      ..._47,
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._48,
    };
    export namespace hd {
      export const v1 = {
        ..._49,
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._50,
      };
    }
    export const multisig = {
      ..._51,
    };
    export const secp256k1 = {
      ..._52,
    };
    export const secp256r1 = {
      ..._53,
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._54,
      };
    }
    export const v1beta1 = {
      ..._55,
      ..._56,
      ..._57,
      ..._58,
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._59,
      };
    }
    export const v1beta1 = {
      ..._60,
      ..._61,
      ..._62,
      ..._63,
    };
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._64,
      };
    }
    export const v1beta1 = {
      ..._65,
      ..._66,
      ..._67,
      ..._68,
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._69,
      };
    }
    export const v1beta1 = {
      ..._70,
    };
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._71,
      };
    }
    export const v1 = {
      ..._72,
      ..._73,
      ..._74,
      ..._75,
    };
    export const v1beta1 = {
      ..._76,
      ..._77,
      ..._78,
      ..._79,
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._80,
      };
    }
    export const v1 = {
      ..._81,
      ..._82,
      ..._83,
      ..._84,
      ..._85,
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._86,
      };
    }
    export const v1beta1 = {
      ..._87,
      ..._88,
      ..._89,
      ..._90,
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._91,
      };
    }
    export const v1beta1 = {
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._96,
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._97,
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._98,
      };
    }
    export const v1 = {
      ..._99,
    };
    export const v1alpha1 = {
      ..._100,
    };
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._101,
      };
    }
    export const v1beta1 = {
      ..._102,
      ..._103,
    };
  }
  export namespace query {
    export const v1 = {
      ..._104,
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._105,
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._106,
      };
    }
    export const v1beta1 = {
      ..._107,
      ..._108,
      ..._109,
      ..._110,
    };
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._111,
      };
    }
    export const v1beta1 = {
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._117,
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._118,
      };
    }
    export namespace streaming {
      export const abci = {
        ..._119,
      };
    }
    export const v1beta1 = {
      ..._120,
      ..._121,
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._122,
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._123,
      };
    }
    export const v1beta1 = {
      ..._124,
      ..._125,
    };
  }
  export namespace upgrade {
    export namespace module {
      export const v1 = {
        ..._126,
      };
    }
    export const v1beta1 = {
      ..._127,
      ..._128,
      ..._129,
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._130,
    };
  }
}
