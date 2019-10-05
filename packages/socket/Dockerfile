# Define the image we will use and version
FROM node:12.6.0

# Create an app directory to hold the application code
WORKDIR /usr/src/app

# Duplicate the dependency file to the container's project root directory.
COPY package*.json ./

# Install app dependencies
RUN yarn && mv /usr/src/app/node_modules /node_modules

# Bundle app source inside the docker image
COPY . .

# Expose our app port inside the app and 
EXPOSE 8888:8888

# Define commands that will run the app
CMD ["yarn", "start"]
