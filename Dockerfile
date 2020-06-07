FROM node:10.21.0-buster

WORKDIR /usr/init

COPY ./ ./

EXPOSE 80

CMD [ "node", "server.js" ]