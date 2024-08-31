#!/bin/bash
set -x
# set -e

nvm use v20.5.0
npm run dev
npm publish --access public
