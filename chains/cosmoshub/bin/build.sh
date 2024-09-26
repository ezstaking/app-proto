#!/usr/bin/env bash

NETWORK="cosmoshub"
PACKAGES=("chains/cosmoshub/src/gaia" "chains/cosmoshub/src/interchain_security/proto" "shared-src/cosmos-sdk" "shared-src/ibc-go" "shared-src/wasmd")

./bin/build.sh ${NETWORK} ${PACKAGES[@]}
