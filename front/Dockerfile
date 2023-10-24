FROM node:latest as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:alpine

WORKDIR /app

COPY --from=build /app/build ./build

RUN npm install -g serve

EXPOSE 5173

CMD ["serve", "-s", "build", "-l", "5173"]
