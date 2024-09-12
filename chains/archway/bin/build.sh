#!/usr/bin/env bash

NETWORK="archway"
PACKAGES=("chains/archway/src/wasmd" "chains/archway/src/archway/proto" "shared-src/cosmos-sdk" "shared-src/ibc-go")

./bin/build.sh ${NETWORK} ${PACKAGES[@]}
