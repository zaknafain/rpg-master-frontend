ARG NODE_VERSION=21.4.0

FROM node:${NODE_VERSION}-alpine3.19 as build

RUN apk update && \
    apk add --no-cache --update \
      build-base~=0.5 \
      linux-headers~=6.5 \
      tzdata~=2023 \
      git~=2.43 \
      chromium~=120.0

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

RUN npm install -g @angular/cli \
    yarn install && \
    yarn cache clean

COPY . .

CMD ["npm", "start"]
