#!/usr/bin/env bash
set -euo pipefail

echo Bumping version from $1 to $2 in $(pwd)
sed -i "s/$1/$2/g" *.html

git add *.html
git commit -m "Bumped version to $2"
git status
