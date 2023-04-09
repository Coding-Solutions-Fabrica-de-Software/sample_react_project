FROM node:lts-alpine as build

WORKDIR /app
COPY . /app

RUN yarn

RUN yarn run build

FROM nginx:1.21.6-alpine
COPY --from=build /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]