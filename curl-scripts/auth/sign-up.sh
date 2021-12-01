# EMAIL=i@i.com PASSWORD=i sh curl-scripts/auth/sign-up.sh

#!/bin/bash

API="http://localhost:7165"
URL_PATH="/sign-up"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'",
      "name": "'"${NAME}"'",
      "address": "'"${ADDRESS}"'"
    }
  }'

echo