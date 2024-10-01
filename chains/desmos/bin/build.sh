#!/usr/bin/env bash

NETWORK="desmos"
PACKAGES=("chains/desmos/src/desmos")

./bin/build.sh ${NETWORK} ${PACKAGES[@]}
