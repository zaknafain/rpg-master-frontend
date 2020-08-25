#!/usr/bin/env sh

npm list || npm install

if [ "$1" = '' ]; then
  ng serve --disableHostCheck --host 0.0.0.0
else
  exec "$@"
fi
