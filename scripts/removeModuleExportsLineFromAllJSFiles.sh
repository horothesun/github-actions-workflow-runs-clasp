#!/bin/bash

ALL_JS_FILES=$(find src -type f -name '*.js')

for FILE in $ALL_JS_FILES; do
  echo "Processing $FILE..."
  ex -c 'g/module.exports/d' -c 'wq' $FILE
done
