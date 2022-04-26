FROM node:16-slim
RUN mkdir /app
ADD . /app
WORKDIR /app
RUN yarn
RUN yarn build
EXPOSE 3000
CMD node_modules/.bin/serve -s build