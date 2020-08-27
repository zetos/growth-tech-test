#!/bin/sh

echo "Compile TS to dist folder"
npm run build

echo "Build docker image"
docker build -t $(whoami)/overgroth-tech .

echo "Run docker container"
docker run -p 3001:3001 $(whoami)/overgroth-tech

# docker run -p 3001:3001 -d $(whoami)/mining-collector
