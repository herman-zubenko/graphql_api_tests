FROM node:12-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json /app

RUN npm install

# Bundle app source
COPY . /app

# Run tests
CMD ["npm", "start"]