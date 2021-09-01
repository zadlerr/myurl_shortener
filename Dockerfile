FROM node:14

WORKDIR /usr/src/app

COPY package* ./

RUN npm install

# RUN mkdir -p /usr/local/pgsql/data

# RUN initdb -D /usr/local/pgsql/data

# RUN 

COPY . .

EXPOSE 8080

CMD [ "node", "./bin/www" ]