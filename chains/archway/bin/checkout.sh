#!/usr/bin/env bash

# https://github.com/archway-network/archway/blob/v8.0.0/go.mod

echo "Checkout repositories..."

# cosmos-sdk
cd shared-src/cosmos-sdk
git checkout v0.47.11
cd ..

# ibc-go
cd ibc-go
git checkout v7.4.0

# wasmd
cd ../../chains/archway/src/wasmd
git checkout v0.46.0-archway
cd ../

# archway
cd archway
git checkout v8.0.0
