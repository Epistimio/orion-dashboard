FROM node:16-slim
RUN mkdir /app
ADD build /app
WORKDIR /app
RUN npm install -g serve
EXPOSE 3000
CMD serve -s .