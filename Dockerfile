ARG NODE_VERSION=16.14.2

FROM node:${NODE_VERSION}-alpine3.15 as development

WORKDIR /rpg-master-frontend

COPY package.json yarn.lock ./

RUN yarn install && \
    yarn cache clean

COPY . .

EXPOSE 4200

CMD ["npm", "start"]
