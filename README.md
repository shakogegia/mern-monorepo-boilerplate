# MERN Monorepo Boilerplate

Node.js: Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. Node.js brings JavaScript to the server
MongoDB: A document-based open source database
Express: A Fast, unopinionated, minimalist web framework for Node.js
React: A JavaScript front-end library for building user interfaces


Template for modular projects using React, Node.js, Lerna and GraphQL.

## Build

```
git clone git@github.com:mxro/nodejs-react-monorepo-starter-kit.git
cd nodejs-react-monorepo-starter-kit
lerna bootstrap
```

## Development Environment

To spin up a local development server with hot reload, run:

```
yarn build
yarn watch
```

This will perform hot reloads on the main server component `server-main` and React app `client-main`. To enable hot reloading on other components, also run the following in a different terminal window:

```
yarn watch-componentss
```

## Deploy

To run production version

```
yarn build
PORT=8081 yarn serve
```

## Based on

- [Apollo Server Getting Started](https://www.apollographql.com/docs/apollo-server/getting-started.html)
- [create-react-app](https://github.com/facebook/create-react-app)
- [How to get create-react-app to work with a Node.js back-end API](https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0)
