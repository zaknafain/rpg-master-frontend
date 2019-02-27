FROM node:10.15-alpine

RUN \
  echo "http://dl-cdn.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories \
  && echo "http://dl-cdn.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories \
  && echo "http://dl-cdn.alpinelinux.org/alpine/edge/testing" >> /etc/apk/repositories \
  && apk --no-cache  update \
  && apk --no-cache  upgrade \
  && apk add --no-cache --virtual .build-deps \
    gifsicle pngquant optipng libjpeg-turbo-utils \
    udev ttf-opensans chromium \
  && rm -rf /var/cache/apk/* /tmp/*

ENV CHROME_BIN /usr/bin/chromium-browser
ENV LIGHTHOUSE_CHROMIUM_PATH /usr/bin/chromium-browser

WORKDIR /rpg-master-frontend

EXPOSE 4200

COPY docker-entrypoint.sh /rpg-master-frontend/docker-entrypoint.sh
RUN chmod a+x /rpg-master-frontend/docker-entrypoint.sh
ENTRYPOINT ["/rpg-master-frontend/docker-entrypoint.sh"]

CMD ["npm", "start"]
