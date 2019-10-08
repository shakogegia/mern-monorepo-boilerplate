# Define the image we will use and version
FROM node:12.6.0

# Environment
WORKDIR /usr/src/app
ENV NODE_ENV=development

# Dependencies

COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/
COPY lerna.json /usr/src/app/

COPY packages/client/package.json /usr/src/app/packages/client/
COPY packages/client/yarn.lock /usr/src/app/packages/client/

COPY packages/common/package.json /usr/src/app/packages/common/
COPY packages/constants/yarn.lock /usr/src/app/packages/constants/

COPY packages/common/package.json /usr/src/app/packages/common/
COPY packages/constants/yarn.lock /usr/src/app/packages/constants/

# RUN npm ci --ignore-scripts --production --no-optional
RUN yarn
RUN npx lerna bootstrap --hoist


# Build

COPY . /usr/src/app/
RUN cd packages/client

# Expose our app port inside the app and 
EXPOSE 3030:3030

# Define commands that will run the app
CMD ["yarn", "start"]

# Serve
# FROM nginx:1.15-alpine
# COPY --from=builder /usr/src/app/packages/alice/build /usr/share/nginx/html