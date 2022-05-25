#!/bin/sh
ID='628ba81c0a44a124aad2941f'
TOKEN='7ff3f9025073f206cee2a584e299b467'
curl "http://localhost:4741/questions/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo