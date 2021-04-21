FROM node:15-buster-slim

ADD . .

RUN npm install

EXPOSE 3000

CMD npm run -d start
