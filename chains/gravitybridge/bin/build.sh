#!/usr/bin/env bash

NETWORK="gravitybridge"
PACKAGES=("chains/gravitybridge/src/bech32-ibc" "chains/gravitybridge/src/ethermint" "chains/gravitybridge/src/gravitybridge/module" "shared-src/cosmos-sdk" "shared-src/ibc-go")

./bin/build.sh ${NETWORK} ${PACKAGES[@]}
