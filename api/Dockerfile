FROM node:18.16.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN yarn build

RUN yarn prisma generate

EXPOSE 5000
