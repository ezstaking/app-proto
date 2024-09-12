#!/usr/bin/env bash

NETWORK="assetmantle"
PACKAGES=("chains/assetmantle/src/assetmantle" "shared-src/cosmos-sdk" "shared-src/ibc-go" "shared-src/wasmd")

./bin/build.sh ${NETWORK} ${PACKAGES[@]}
