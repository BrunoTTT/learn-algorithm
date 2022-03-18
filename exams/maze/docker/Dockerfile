FROM node:alpine

WORKDIR /maze

COPY maps/ ./maps
COPY src/ ./src

ENTRYPOINT node ./src/main.js
