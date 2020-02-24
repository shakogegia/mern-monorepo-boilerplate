#!/usr/bin/env bash

set -e

# Env Type SE | PROD
ENV_TYPE=$1

# Environment Variables list
ENV_VARS="${*:2}"

# Set env vars
for var in $(echo $ENV_VARS)
 do 
  ENV_VAR_NAME="${var}_${ENV_TYPE}"
  
  eval "value=\${$ENV_VAR_NAME}"
  
  declare $var="$value"
  export $var="$value"
done