#!/bin/bash

set -e

PACKAGE_NAME="$1"

if [[ ! $PACKAGE_NAME ]]; then
  echo "🔴  Package name must be provided!"
  exit
fi

PACKAGE_LIST=$(yarn list-packages)

if [[ ! $PACKAGE_LIST == *$PACKAGE_NAME* ]]; then
  echo "🔴  No package with name $PACKAGE_NAME found!"
  exit
fi

echo "📦  Preparing release for package: ${PACKAGE_NAME}"

DIFF=$(yarn lerna diff ${PACKAGE_NAME})

yarn lerna version prerelease --preid rc --create-release github --conventional-prerelease --conventional-commits --ignore-changes '**' --force-publish ${PACKAGE_NAME}