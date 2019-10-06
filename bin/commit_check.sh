#!/bin/bash

set -e

# latest commit
LATEST_COMMIT=$(git rev-parse HEAD)

# packages commit
API_COMMIT=$(git log -1 --format=format:%H --full-diff packages/api)
SOCKET_COMMIT=$(git log -1 --format=format:%H --full-diff packages/socket)
COMMON_COMMIT=$(git log -1 --format=format:%H --full-diff packages/common)
CONSTANTS_COMMIT=$(git log -1 --format=format:%H --full-diff packages/constants)
CLIENT_COMMIT=$(git log -1 --format=format:%H --full-diff packages/client)

if [ $API_COMMIT = $LATEST_COMMIT ]; then
  echo "Package API has changed"
  ./packages/api/.circleci/config.yml
elif [ $SOCKET_COMMIT = $LATEST_COMMIT ]; then
  echo "Package SOCKET has changed"
  ./packages/socket/.circleci/config.yml
elif [ $COMMON_COMMIT = $LATEST_COMMIT ]; then
  echo "Package COMMON has changed"
  ./packages/common/.circleci/config.yml
elif [ $CONSTANTS_COMMIT = $LATEST_COMMIT ]; then
  echo "Package CONSTANTS has changed"
  ./packages/constants/.circleci/config.yml
elif [ $CLIENT_COMMIT = $LATEST_COMMIT ]; then
  echo "Package CLIENT has changed"
  ./packages/client/.circleci/config.yml
else
  echo "no packages of relevance has changed"
  exit 0
fi
