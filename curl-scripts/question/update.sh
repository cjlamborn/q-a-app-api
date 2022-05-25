#!/bin/bash
# http://localhost:4741
ID='628ba81c0a44a124aad2941f'
TOKEN='7ff3f9025073f206cee2a584e299b467'
TITLE='New title'
TEXT='New text'

curl "http://localhost:4741/questions/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "question": {
      "title": "'"${TITLE}"'",
      "text": "'"${TEXT}"'"
    }
  }'

echo
