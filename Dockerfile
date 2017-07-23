FROM node:boron-alpine

ARG source
EXPOSE 8080

WORKDIR /app

RUN npm install express http-proxy compression

COPY ${source:-dist} ./dist
COPY ${source:-server.js} .

CMD node server.js
