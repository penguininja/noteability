FROM node:15-buster-slim

USER 0

ADD . .

RUN npm install && \
    chown -R 1001:0 . && \
    chmod -R ug+rwx .

EXPOSE 3000

USER 1001

CMD npm run -d start
