# Define the image we will use and version
FROM node:12.6.0

# Create an app directory to hold the application code
WORKDIR /usr/src/app

# Duplicate the dependency file to the container's project root directory.
COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/
COPY lerna.json /usr/src/app/

COPY packages/common/package.json /usr/src/app/packages/common/
COPY packages/constants/package.json /usr/src/app/packages/constants/
COPY packages/api/package.json /usr/src/app/packages/client/

# Install app dependencies
RUN yarn
RUN yarn lerna bootstrap

# Bundle app source inside the docker image
COPY . .

# Expose our app port inside the app and [HOST:CONTAINER]
EXPOSE 3000:3000

# Define commands that will run the app
CMD ["yarn", "lerna", "run", "start", "--stream", "--scope", "@workspace/client"]
