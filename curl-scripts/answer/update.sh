ANSWERID='628bcf9e702a632d2dce47c7'
TOKEN='7ff3f9025073f206cee2a584e299b467'
TEXT='updated answer'
QID='628ba81c0a44a124aad2941f'
USERID='628b9f8d44bee32089fbe916'
curl "http://localhost:4741/questions/${QID}/answers" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
--data '{
    "answer": {
      "text": "'"${TEXT}"'",
      "questionId": "'"${QID}"'",
      "user": "'"${USERID}"'",
      "answerId": "'"${ANSWERID}"'"
    }
  }'

echo
