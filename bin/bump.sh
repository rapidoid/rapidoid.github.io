#!/usr/bin/env bash
set -euo pipefail

echo Bumping version from $1 to $2 in $(pwd)
sed -i "s/$1/$2/g" *.html
