FROM registry.access.redhat.com/ubi8/nodejs-14 AS build

USER 0
WORKDIR /app

ADD . .

RUN rm package-lock.json && \
    npm install && \
    chown -R 1001:0 . && \
    chmod -R ug+rwx . && \
    npm run build

FROM registry.access.redhat.com/ubi8/nodejs-14 AS run

USER 0
WORKDIR /app
COPY --from=build /app/build build

RUN npm install -g serve

USER 1001

CMD serve -s build -l 3000
