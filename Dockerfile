FROM node:9.4.0

ENV CONSUMER_KEY _
ENV CONSUMER_SECRET _
ENV ACCESS_TOKEN_KEY _
ENV ACCESS_TOKEN_SECRET _

COPY . /bot
WORKDIR /bot
RUN npm install