![Image](https://i.imgur.com/GFf41dB.png)

# MERN Monorepo Boilerplate

This repository contains API, Socket Server, React and React Native.

- Node.js: Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. Node.js brings JavaScript to the server
- MongoDB: A document-based open source database
- Express: A Fast, unopinionated, minimalist web framework for Node.js
- React: A JavaScript front-end library for building user interfaces
- Expo: a set of tools and services for building, deploying, and quickly iterating on native iOS, and Android apps from the same codebase.

## Packages

- [x] Express.js 4.16.1
- [x] Socket.IO 2.3.0
- [x] React 16.10.2
- [x] React-dom 16.10.2
- [x] Expo 35

## Tooling

- [x] ES6
- [x] Eslint
- [x] Prettier
- [x] Precomit Lint
- [x] Versioning

## Monorepo

- [x] Yarn workspaces
- [x] Lerna.js

## Usage

```sh
# clone repository
git clone git@github.com:shakogegia/mern-monorepo-boilerplate.git

# cd into
cd mern-monorepo-boilerplate

# install required dependencies
yarn

# run by
yarn dev
```

## Link Packages

```
npx lerna add @workspace/common --scope=client
```

## All contributions are welcome

Contributions are more than welcomed.
Feel free to open issues for asking questions, suggesting features or other things!
