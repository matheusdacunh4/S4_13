FROM node:16-alpine

RUN apk update

WORKDIR /app

COPY . .

CMD [ "yarn", "start" ]