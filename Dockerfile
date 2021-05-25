FROM node

WORKDIR app

COPY package*.json ./

EXPOSE 8000

# RUN apt-get update

RUN npm install

COPY . .

CMD ["node", "index.js"]