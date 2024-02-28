FROM node:18.16.1 as builder
RUN mkdir /usr/app
COPY . /usr/app
WORKDIR /usr/app
RUN npm install
ENV PATH /usr/src/app/node_modules/.bin:$PATH
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /usr/app/dist .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]