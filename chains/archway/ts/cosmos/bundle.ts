/* eslint-disable */
import * as _30 from "./base/query/v1beta1/pagination";
import * as _31 from "./base/v1beta1/coin";
import * as _32 from "./base/abci/v1beta1/abci";
import * as _33 from "./base/kv/v1beta1/kv";
import * as _34 from "./base/node/v1beta1/query";
import * as _35 from "./base/reflection/v1beta1/reflection";
import * as _36 from "./base/reflection/v2alpha1/reflection";
import * as _37 from "./base/snapshots/v1beta1/snapshot";
import * as _38 from "./base/store/v1beta1/commit_info";
import * as _39 from "./base/store/v1beta1/listening";
import * as _40 from "./base/tendermint/v1beta1/query";
import * as _41 from "./base/tendermint/v1beta1/types";
import * as _42 from "./msg/v1/msg";
import * as _43 from "./upgrade/v1beta1/upgrade";
import * as _44 from "./upgrade/v1beta1/query";
import * as _45 from "./upgrade/v1beta1/tx";
import * as _46 from "./upgrade/module/v1/module";
import * as _47 from "./app/runtime/v1alpha1/module";
import * as _48 from "./app/v1alpha1/config";
import * as _49 from "./app/v1alpha1/module";
import * as _50 from "./app/v1alpha1/query";
import * as _51 from "./auth/module/v1/module";
import * as _52 from "./auth/v1beta1/auth";
import * as _53 from "./auth/v1beta1/genesis";
import * as _54 from "./auth/v1beta1/query";
import * as _55 from "./auth/v1beta1/tx";
import * as _56 from "./authz/module/v1/module";
import * as _57 from "./authz/v1beta1/authz";
import * as _58 from "./authz/v1beta1/event";
import * as _59 from "./authz/v1beta1/genesis";
import * as _60 from "./authz/v1beta1/query";
import * as _61 from "./authz/v1beta1/tx";
import * as _62 from "./autocli/v1/options";
import * as _63 from "./autocli/v1/query";
import * as _64 from "./bank/module/v1/module";
import * as _65 from "./bank/v1beta1/authz";
import * as _66 from "./bank/v1beta1/bank";
import * as _67 from "./bank/v1beta1/genesis";
import * as _68 from "./bank/v1beta1/query";
import * as _69 from "./bank/v1beta1/tx";
import * as _70 from "./capability/module/v1/module";
import * as _71 from "./capability/v1beta1/capability";
import * as _72 from "./capability/v1beta1/genesis";
import * as _73 from "./consensus/module/v1/module";
import * as _74 from "./consensus/v1/query";
import * as _75 from "./consensus/v1/tx";
import * as _76 from "./crisis/module/v1/module";
import * as _77 from "./crisis/v1beta1/genesis";
import * as _78 from "./crisis/v1beta1/tx";
import * as _79 from "./crypto/ed25519/keys";
import * as _80 from "./crypto/hd/v1/hd";
import * as _81 from "./crypto/keyring/v1/record";
import * as _82 from "./crypto/multisig/keys";
import * as _83 from "./crypto/secp256k1/keys";
import * as _84 from "./crypto/secp256r1/keys";
import * as _85 from "./distribution/module/v1/module";
import * as _86 from "./distribution/v1beta1/distribution";
import * as _87 from "./distribution/v1beta1/genesis";
import * as _88 from "./distribution/v1beta1/query";
import * as _89 from "./distribution/v1beta1/tx";
import * as _90 from "./evidence/module/v1/module";
import * as _91 from "./evidence/v1beta1/evidence";
import * as _92 from "./evidence/v1beta1/genesis";
import * as _93 from "./evidence/v1beta1/query";
import * as _94 from "./evidence/v1beta1/tx";
import * as _95 from "./feegrant/module/v1/module";
import * as _96 from "./feegrant/v1beta1/feegrant";
import * as _97 from "./feegrant/v1beta1/genesis";
import * as _98 from "./feegrant/v1beta1/query";
import * as _99 from "./feegrant/v1beta1/tx";
import * as _100 from "./genutil/module/v1/module";
import * as _101 from "./genutil/v1beta1/genesis";
import * as _102 from "./gov/module/v1/module";
import * as _103 from "./gov/v1/genesis";
import * as _104 from "./gov/v1/gov";
import * as _105 from "./gov/v1/query";
import * as _106 from "./gov/v1/tx";
import * as _107 from "./gov/v1beta1/genesis";
import * as _108 from "./gov/v1beta1/gov";
import * as _109 from "./gov/v1beta1/query";
import * as _110 from "./gov/v1beta1/tx";
import * as _111 from "./group/module/v1/module";
import * as _112 from "./group/v1/events";
import * as _113 from "./group/v1/genesis";
import * as _114 from "./group/v1/query";
import * as _115 from "./group/v1/tx";
import * as _116 from "./group/v1/types";
import * as _117 from "./mint/module/v1/module";
import * as _118 from "./mint/v1beta1/genesis";
import * as _119 from "./mint/v1beta1/mint";
import * as _120 from "./mint/v1beta1/query";
import * as _121 from "./mint/v1beta1/tx";
import * as _122 from "./nft/module/v1/module";
import * as _123 from "./nft/v1beta1/event";
import * as _124 from "./nft/v1beta1/genesis";
import * as _125 from "./nft/v1beta1/nft";
import * as _126 from "./nft/v1beta1/query";
import * as _127 from "./nft/v1beta1/tx";
import * as _128 from "./orm/module/v1alpha1/module";
import * as _129 from "./orm/query/v1alpha1/query";
import * as _130 from "./orm/v1/orm";
import * as _131 from "./orm/v1alpha1/schema";
import * as _132 from "./params/module/v1/module";
import * as _133 from "./params/v1beta1/params";
import * as _134 from "./params/v1beta1/query";
import * as _135 from "./query/v1/query";
import * as _136 from "./reflection/v1/reflection";
import * as _137 from "./slashing/module/v1/module";
import * as _138 from "./slashing/v1beta1/genesis";
import * as _139 from "./slashing/v1beta1/query";
import * as _140 from "./slashing/v1beta1/slashing";
import * as _141 from "./slashing/v1beta1/tx";
import * as _142 from "./staking/module/v1/module";
import * as _143 from "./staking/v1beta1/authz";
import * as _144 from "./staking/v1beta1/genesis";
import * as _145 from "./staking/v1beta1/query";
import * as _146 from "./staking/v1beta1/staking";
import * as _147 from "./staking/v1beta1/tx";
import * as _148 from "./tx/config/v1/config";
import * as _149 from "./tx/signing/v1beta1/signing";
import * as _150 from "./tx/v1beta1/service";
import * as _151 from "./tx/v1beta1/tx";
import * as _152 from "./vesting/module/v1/module";
import * as _153 from "./vesting/v1beta1/tx";
import * as _154 from "./vesting/v1beta1/vesting";
import * as _155 from "./ics23/v1/proofs";
export namespace cosmos {
  export namespace base {
    export namespace query {
      export const v1beta1 = {
        ..._30,
      };
    }
    export const v1beta1 = {
      ..._31,
    };
    export namespace abci {
      export const v1beta1 = {
        ..._32,
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._33,
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._34,
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._35,
      };
      export const v2alpha1 = {
        ..._36,
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._37,
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._38,
        ..._39,
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._40,
        ..._41,
      };
    }
  }
  export namespace msg {
    export const v1 = {
      ..._42,
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._43,
      ..._44,
      ..._45,
    };
    export namespace module {
      export const v1 = {
        ..._46,
      };
    }
  }
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._47,
      };
    }
    export const v1alpha1 = {
      ..._48,
      ..._49,
      ..._50,
    };
  }
  export namespace auth {
    export namespace module {
      export const v1 = {
        ..._51,
      };
    }
    export const v1beta1 = {
      ..._52,
      ..._53,
      ..._54,
      ..._55,
    };
  }
  export namespace authz {
    export namespace module {
      export const v1 = {
        ..._56,
      };
    }
    export const v1beta1 = {
      ..._57,
      ..._58,
      ..._59,
      ..._60,
      ..._61,
    };
  }
  export namespace autocli {
    export const v1 = {
      ..._62,
      ..._63,
    };
  }
  export namespace bank {
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
      ..._69,
    };
  }
  export namespace capability {
    export namespace module {
      export const v1 = {
        ..._70,
      };
    }
    export const v1beta1 = {
      ..._71,
      ..._72,
    };
  }
  export namespace consensus {
    export namespace module {
      export const v1 = {
        ..._73,
      };
    }
    export const v1 = {
      ..._74,
      ..._75,
    };
  }
  export namespace crisis {
    export namespace module {
      export const v1 = {
        ..._76,
      };
    }
    export const v1beta1 = {
      ..._77,
      ..._78,
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._79,
    };
    export namespace hd {
      export const v1 = {
        ..._80,
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._81,
      };
    }
    export const multisig = {
      ..._82,
    };
    export const secp256k1 = {
      ..._83,
    };
    export const secp256r1 = {
      ..._84,
    };
  }
  export namespace distribution {
    export namespace module {
      export const v1 = {
        ..._85,
      };
    }
    export const v1beta1 = {
      ..._86,
      ..._87,
      ..._88,
      ..._89,
    };
  }
  export namespace evidence {
    export namespace module {
      export const v1 = {
        ..._90,
      };
    }
    export const v1beta1 = {
      ..._91,
      ..._92,
      ..._93,
      ..._94,
    };
  }
  export namespace feegrant {
    export namespace module {
      export const v1 = {
        ..._95,
      };
    }
    export const v1beta1 = {
      ..._96,
      ..._97,
      ..._98,
      ..._99,
    };
  }
  export namespace genutil {
    export namespace module {
      export const v1 = {
        ..._100,
      };
    }
    export const v1beta1 = {
      ..._101,
    };
  }
  export namespace gov {
    export namespace module {
      export const v1 = {
        ..._102,
      };
    }
    export const v1 = {
      ..._103,
      ..._104,
      ..._105,
      ..._106,
    };
    export const v1beta1 = {
      ..._107,
      ..._108,
      ..._109,
      ..._110,
    };
  }
  export namespace group {
    export namespace module {
      export const v1 = {
        ..._111,
      };
    }
    export const v1 = {
      ..._112,
      ..._113,
      ..._114,
      ..._115,
      ..._116,
    };
  }
  export namespace mint {
    export namespace module {
      export const v1 = {
        ..._117,
      };
    }
    export const v1beta1 = {
      ..._118,
      ..._119,
      ..._120,
      ..._121,
    };
  }
  export namespace nft {
    export namespace module {
      export const v1 = {
        ..._122,
      };
    }
    export const v1beta1 = {
      ..._123,
      ..._124,
      ..._125,
      ..._126,
      ..._127,
    };
  }
  export namespace orm {
    export namespace module {
      export const v1alpha1 = {
        ..._128,
      };
    }
    export namespace query {
      export const v1alpha1 = {
        ..._129,
      };
    }
    export const v1 = {
      ..._130,
    };
    export const v1alpha1 = {
      ..._131,
    };
  }
  export namespace params {
    export namespace module {
      export const v1 = {
        ..._132,
      };
    }
    export const v1beta1 = {
      ..._133,
      ..._134,
    };
  }
  export namespace query {
    export const v1 = {
      ..._135,
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._136,
    };
  }
  export namespace slashing {
    export namespace module {
      export const v1 = {
        ..._137,
      };
    }
    export const v1beta1 = {
      ..._138,
      ..._139,
      ..._140,
      ..._141,
    };
  }
  export namespace staking {
    export namespace module {
      export const v1 = {
        ..._142,
      };
    }
    export const v1beta1 = {
      ..._143,
      ..._144,
      ..._145,
      ..._146,
      ..._147,
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._148,
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._149,
      };
    }
    export const v1beta1 = {
      ..._150,
      ..._151,
    };
  }
  export namespace vesting {
    export namespace module {
      export const v1 = {
        ..._152,
      };
    }
    export const v1beta1 = {
      ..._153,
      ..._154,
    };
  }
  export namespace ics23 {
    export const v1 = {
      ..._155,
    };
  }
}
