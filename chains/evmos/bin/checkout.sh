#!/usr/bin/env bash

# https://github.com/evmos/evmos/blob/main/go.mod

echo "Checkout repositories..."

cd shared-src

# cosmos-sdk
cd cosmos-sdk
git checkout v0.50.9
cd ..

# ibc-go
cd ibc-go
git checkout v8.5.0
cd ..

cd ../chains/evmos/src

# evmos
cd evmos
git checkout v19.2.0
cd ..
