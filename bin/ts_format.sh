#!/usr/bin/env bash

echo "👉 Format ./${1}/**/*.ts"

prettier --write --log-level warn "./${1}/**/*.ts"

echo "✨ format done"
