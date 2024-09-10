#!/usr/bin/env bash

NETWORK="evmos"
PACKAGES=("chains/evmos/src/evmos" "shared-src/cosmos-sdk" "shared-src/ibc-go")

./bin//build.sh ${NETWORK} ${PACKAGES[@]}
