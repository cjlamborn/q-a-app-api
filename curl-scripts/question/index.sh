#!/bin/sh
TOKEN='7ff3f9025073f206cee2a584e299b467'
# API="http://localhost:4741"
# URL_PATH="/examples"
# sh curl-scripts/question/index.sh
curl "http://localhost:4741/questions" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo