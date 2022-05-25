#!/bin/bash
# sh curl-scripts/answer/create.sh
TOKEN='7ff3f9025073f206cee2a584e299b467'
TEXT='this is my answer'
QID='628ba81c0a44a124aad2941f'
USERID='628b9f8d44bee32089fbe916'
curl "http://localhost:4741/answers" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
    "answer": {
      "text": "'"${TEXT}"'",
      "questionId": "'"${QID}"'",
      "user": "'"${USERID}"'"
    }
  }'

echo
# TEXT='this is my answer'
# QID='628ba81c0a44a124aad2941f'
# USERID='628b9f8d44bee32089fbe916'
#   curl 'http://localhost:4741/answers' \
#     --include \
#     --request POST \
#     --header "Content-Type: application/json" \
#     --data '{
#       "answer": {
#         "text": "'"${TEXT}"'",
#         "questionId": "'"${QID}"'",
#         "user": "'"${USERID}"'"
#       }
#     }'

# echo
