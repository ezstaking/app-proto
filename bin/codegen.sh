#!/usr/bin/env bash

if [ $# -eq 0 ]
  then
    echo "No network supplied"
    exit 1
fi

./chains/${1}/bin/build.sh

exit 0
