#!/bin/bash

FILES_PATH=$(find src -type f -name '*.js')

for FILE in $FILES_PATH; do
  echo "Processing $FILE..."
  ex -c 'g/module.exports/d' -c 'wq' $FILE
done
