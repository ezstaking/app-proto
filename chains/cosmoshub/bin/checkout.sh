#!/usr/bin/env bash

# https://github.com/cosmos/gaia/blob/v20.0.0/go.mod

echo "Checkout repositories..."

cd shared-src

# cosmos-sdk
cd cosmos-sdk
git fetch -p --all && git checkout v0.50.9-lsm
cd ..

# ibc-go
cd ibc-go
git fetch -p --all && git checkout v8.5.1
cd ..

# wasmd
cd wasmd
git fetch -p --all && git checkout v0.53.0
cd ..

cd ../chains/cosmoshub/src

# interchain_security
cd interchain_security
git fetch -p --all && git checkout v6.1.0
cd ..

# gaia
cd gaia
git fetch -p --all && git checkout v20.0.0
cd ..
