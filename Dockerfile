FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

# RUN mkdir -p /usr/local/pgsql/data

# RUN initdb -D /usr/local/pgsql/data

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]