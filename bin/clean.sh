#!/usr/bin/env bash

NETWORK=$1

echo "👉 Clean proto"

rm -rf "./chains/${NETWORK}/ts"
rm -rf "./chains/${NETWORK}/proto"

echo "✨ clean done"
