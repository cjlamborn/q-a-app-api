#!/bin/bash
# http://localhost:4741
QID='628ba81c0a44a124aad2941f'
TOKEN='7ff3f9025073f206cee2a584e299b467'
ANSWERID='628bcf9e702a632d2dce47c7'
# USERID='628b9f8d44bee32089fbe916'
curl "http://localhost:4741/questions/${QID}/answers/${ANSWERID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
