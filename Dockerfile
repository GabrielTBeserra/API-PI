FROM node

WORKDIR /usr/src/movies-api

COPY package*.json ./
RUN npm install

COPY . .

CMD [ "node", "index.js" ]
