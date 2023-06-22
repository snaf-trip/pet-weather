#!/bin/bash

# abort on errors
set -e

# load .env
eval "$(cat .env <(echo) <(declare -x))"

# build
npm build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'


# if you are deploying under a user then do:
# git push -f https://github.com/<USERNAME>/<REPO>.git master:gh-pages

# if you are deploying under an organization then do:
# git push -f https://github.com/snaf-trip/pet-weather.git master:gh-pages

cd -
