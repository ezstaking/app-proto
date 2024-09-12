#!/usr/bin/env bash

# https://github.com/Gravity-Bridge/Gravity-Bridge/blob/main/module/go.mod

echo "Checkout repositories..."

# cosmos-sdk
cd shared-src/cosmos-sdk
git checkout v0.45.16
cd ..

# ibc-go
cd ibc-go
git checkout v4.3.1

# bech32-ibc
cd ../../chains/gravitybridge/src/bech32-ibc
git checkout v0.4.5
cd ../

# ethermint
cd ethermint
git checkout v0.19.8
cd ../

# gravitybridge
cd gravitybridge
git checkout v1.11.2
cd ../
