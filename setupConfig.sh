WORKFLOW_READ_TOKEN=$1
WORKFLOW_READ_TOKEN_PLACEHOLDER='WORKFLOW_READ_TOKEN - DO NOT SPECIFY - POPULATED AUTOMATICALLY'

ex src/config.js << EOEX
%s/$WORKFLOW_READ_TOKEN_PLACEHOLDER/$WORKFLOW_READ_TOKEN/
wq
EOEX
