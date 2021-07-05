FROM node:alpine as build-deps

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

RUN yarn build

FROM nginx:alpine

COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]