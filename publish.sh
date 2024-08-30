#!/bin/bash
set -x
# set -e

nvm use v20.5.0
npm run build
npm publish --access public
