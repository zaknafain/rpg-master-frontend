ARG NODE_VERSION=16.18.1

FROM node:${NODE_VERSION}-alpine3.15 as development

RUN apk add --no-cache chromium=99.0.4844.84-r0

ENV CHROME_BIN=/usr/bin/chromium-browser

WORKDIR /rpg-master-frontend

COPY package.json yarn.lock ./

RUN yarn install && \
    yarn cache clean

COPY . .

EXPOSE 4200

CMD ["npm", "start"]
