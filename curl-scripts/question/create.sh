TOKEN='7ff3f9025073f206cee2a584e299b467'
TITLE='Does this work?'
TEXT='Running my curl script'
OWNER='628b9f8d44bee32089fbe916' 
# $ sh curl-scripts/question/create.sh
curl 'http://localhost:4741/questions' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "question": {
      "title": "'"${TITLE}"'",
      "text": "'"${TEXT}"'"
    }
  }'

echo