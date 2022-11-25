ARG NODE_VERSION=16.18.1

FROM node:${NODE_VERSION}-alpine3.16 as build

RUN apk update && \
    apk add --no-cache --update \
      build-base~=0.5 \
      linux-headers~=5.16.7 \
      tzdata~=2022 \
      git~=2.36.3 \
      chromium~=102.0.5005.182

ENV CHROME_BIN=/usr/bin/chromium-browser

WORKDIR /rpg-master-frontend
COPY package.json yarn.lock ./

FROM build AS production

EXPOSE 4200

RUN yarn install && \
    yarn cache clean

COPY . .

CMD ["npm", "start"]

FROM build AS test

RUN yarn install && \
    yarn cache clean

COPY . .

FROM build AS development

EXPOSE 4200

RUN yarn install && \
    yarn cache clean

COPY . .

CMD ["npm", "start"]
