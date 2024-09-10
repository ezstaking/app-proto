#!/usr/bin/env bash

NETWORK="akash"
PACKAGES=("chains/akash/src/akash" "shared-src/cosmos-sdk" "shared-src/ibc-go")

./bin/build.sh ${NETWORK} ${PACKAGES[@]}
