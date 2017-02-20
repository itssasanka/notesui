FROM node

RUN mkdir /code
WORKDIR /code

ADD . /code

RUN npm install -g ember-cli
