FROM node:15.8.0-alpine

RUN echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
    apk --no-cache update && \
    apk add --no-cache chromium=81.0.4044.113-r0 && \
    rm -rf /var/cache/apk/* /tmp/*

ENV CHROME_BIN /usr/bin/chromium-browser
ENV LIGHTHOUSE_CHROMIUM_PATH /usr/bin/chromium-browser

WORKDIR /rpg-master-frontend
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json

RUN npm install -g @angular/cli@10.0.7
RUN npm install

EXPOSE 4200

COPY docker-entrypoint.sh /opt/rpg-master-frontend/docker-entrypoint.sh
ENTRYPOINT ["/opt/rpg-master-frontend/docker-entrypoint.sh"]
