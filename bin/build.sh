#!/usr/bin/env bash

NETWORK=$1
TS_OUTPUT_DIR="chains/${NETWORK}/ts"
PROTO_OUTPUT_DIR="chains/${NETWORK}/proto"
PACKAGES=${@:2}

echo "👉 Convert proto ${NETWORK}"

# Clean
./bin/clean.sh ${NETWORK}

# Checkout
./chains/${NETWORK}/bin/checkout.sh

# Export
./bin/proto_export.sh ${PROTO_OUTPUT_DIR} "${PACKAGES[@]}"

# Proto to TypeScript
./chains/${NETWORK}/bin/proto_to_ts.mjs

# Format
./bin/ts_format.sh ${TS_OUTPUT_DIR}

echo "✨ conversion done"
