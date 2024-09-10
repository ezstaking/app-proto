#!/usr/bin/env bash

# https://github.com/akash-network/node/blob/main/go.mod

echo "Checkout repositories..."

# cosmos-sdk
cd shared-src/cosmos-sdk
git checkout v0.45.16
cd ..

# ibc-go
cd ibc-go
git checkout v4.6.0

# akash
cd ../../chains/akash/src/akash
git checkout v0.36.0
