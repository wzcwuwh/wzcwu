#base image
FROM node:11.11.0

#set working directory
WORKDIR /app

#add `/app/node_moddules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

#install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@8.2.0

#add app
COPY . /app

#start app
CMD ng serve --host 0.0.0.0
