#!/bin/bash

API="http://localhost:7165"
URL_PATH="/posts"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo