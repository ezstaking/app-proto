#!/usr/bin/env bash

# https://github.com/cosmos/gaia/blob/v19.2.0/go.mod

echo "Checkout repositories..."

cd shared-src

# cosmos-sdk
cd cosmos-sdk
git checkout v0.50.9-lsm
cd ..

# ibc-go
cd ibc-go
git checkout v8.4.0
cd ..

# wasmd
cd wasmd
git checkout v0.51.0
cd ..

cd ../chains/cosmoshub/src

# interchain_security
cd interchain_security
git checkout v5.2.0
cd ..

# gaia
cd gaia
git checkout v19.2.0
cd ..
