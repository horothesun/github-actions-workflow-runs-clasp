CONFIG_JSON_FILE="src/config.json"
TMP_CONFIG_JSON_FILE="tmp.config.json"
jq ".workflow_read_token = \"$1\"" $CONFIG_JSON_FILE > $TMP_CONFIG_JSON_FILE
mv $TMP_CONFIG_JSON_FILE $CONFIG_JSON_FILE
