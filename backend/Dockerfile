FROM node:alpine

# ENV
ENV NODE_ENV=stage
# ENV NODE_ENV=production

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# RUN npm install
# If you are building your code for production
RUN npm install --only=production

# Bundle app source
COPY ./dist ./dist
COPY ./config ./config

EXPOSE 3000

CMD [ "node", "dist/src/index.js" ]