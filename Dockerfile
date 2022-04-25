FROM node:16
RUN mkdir /app
ADD . /app
WORKDIR /app
RUN yarn
EXPOSE 3000
CMD yarn start