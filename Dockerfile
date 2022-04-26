FROM node:16-slim
RUN mkdir /app
ADD . /app
WORKDIR /app
RUN yarn
EXPOSE 3000
CMD yarn start