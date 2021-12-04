#!/bin/bash

API="http://localhost:7165"
URL_PATH="/posts"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "post": {
      "name": "'"${NAME}"'",
      "location": "'"${LOCATION}"'",
      "content": "'"${CONTENT}"'",
      "rating": "'"${RATING}"'"
    }
  }'

echo