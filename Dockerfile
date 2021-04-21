FROM registry.access.redhat.com/ubi8/nodejs-14

ADD . .

RUN npm install

EXPOSE 3000

CMD npm run -d start
