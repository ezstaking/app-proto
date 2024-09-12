#!/usr/bin/env bash

# https://github.com/AssetMantle/node/blob/v1.0.1/go.mod
# https://github.com/AssetMantle/modules/blob/v0.4.0/go.mod

echo "Checkout repositories..."

# cosmos-sdk
cd shared-src/cosmos-sdk
git checkout v0.45.16
cd ..

# ibc-go
cd ibc-go
git checkout v4.4.2
cd ..

# wasmd
cd wasmd
git checkout v0.30.0
cd ..

# assetmantle
cd ../chains/assetmantle/src/assetmantle
git checkout v1.0.1
