#!/bin/bash

WORKFLOW_READ_TOKEN_PLACEHOLDER='WORKFLOW_READ_TOKEN - DO NOT SPECIFY - POPULATED AUTOMATICALLY'

ex -c "%s/$WORKFLOW_READ_TOKEN_PLACEHOLDER/$1/" -c 'wq' src/config.js
