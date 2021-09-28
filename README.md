# 💬 MEVN Chat

[![Web](https://img.shields.io/badge/web-blue?logo=w3c)](https://github.com/topics/web)
[![JavaScript](https://img.shields.io/badge/javascript-blue?logo=javascript)](https://github.com/topics/javascript)
[![VueJS](https://img.shields.io/badge/vue-2.6.11-blue?logo=vue.js)](https://github.com/topics/vue)
[![BulmaCSS](https://img.shields.io/badge/bulma-0.8.1-blue?logo=bulma)](https://github.com/topics/bulma)
[![SocketIO](https://img.shields.io/github/package-json/dependency-version/practical-works/mevn-chat/socket.io?logo=socket.io)](https://github.com/topics/socket.io)

[![NodeJS](https://img.shields.io/badge/node-blue?logo=node.js)](https://github.com/topics/node)
[![ExpressJS](https://img.shields.io/github/package-json/dependency-version/practical-works/mevn-chat/express?logo=express)](https://github.com/topics/express)
[![MongoDB](https://img.shields.io/badge/mongodb-3.2.22-blue?logo=mongodb)](https://github.com/topics/mongo)
[![Mongoose](https://img.shields.io/github/package-json/dependency-version/practical-works/mevn-chat/mongoose?logo=mongodb)](https://github.com/topics/mongoose)

Realtime chat web application example made with the **MEVN** stack (**MongoDB**, **ExpressJS**, **VueJS**, and **NodeJS**).

[**🌐 View Live Demo**](https://amb-mevn-chat.herokuapp.com/)

![Screenshot](./screenshot.gif?raw=true)

## 🏁 Getting started

1. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the repository:

```bash
cd somewhere
git clone https://github.com/practical-works/mevn-chat.git
cd mevn-chat
```
2. Install the dependencies:

```bash
npm i
```

3. Install [Nodemon](https://github.com/remy/nodemon/) globally:

```bash
npm i -g nodemon`
```

4. Run development **database**:

```bash
npm run db
```

5. Run development **server**:

```bash
npm run server
```

## ✈️ Deployment

1. Create and run a live **MongoDB** database using a service like [**MongoDB Atlas**](https://www.mongodb.com/cloud/atlas) and get the **connection string**.

  The MongoDB **connection string** (URL) usually looks something like this:

  > mongodb+srv://**username**:**password**@**host-address**/**database-name**?retryWrites=true&w=majority

  where **username**, **password**, **host-address**, and **database-name** are placeholders for the values provided by the service and specific to the user.

  2. Push the repository to a **node server** using a service like [**Heroku**](https://heroku.com).

3. In the remote server:

  a. Set the environment variable `CONNECTION_STRING` to the obtained mongoDB **connection string**:

  ```bash
  CONNECTION_STRING=mongodb+srv://...etc
  ```

  b. Install the dependencies:

  ```bash
  npm i
  ```

  c. Start the server for production:

  ```bash
  npm start
  ```

## 🚀 Development

### 🏭 Environment

- Runtime: [**NodeJS**](https://github.com/nodejs)
- Package Manager: [**NPM**](https://github.com/npm)
- Editor: [**Sublime Text**](https://www.sublimetext.com)

### 🌑 Backend

- ⚛️ Core:
  - Main: [**NodeJS**](https://github.com/nodejs/node) / [**ExpressJS**](https://github.com/expressjs/express)
- 💽 Database:
  - Main: [**MongoDB**](https://www.mongodb.com/)
  - Object Modeling: [**Mongoose**](https://github.com/Automattic/mongoose)
- 🔧 Utils:
  - Realtime Communication (Server Side): [**Socket.IO**](https://github.com/socketio/socket.io)
  - Console Logging: [**Morgan**](https://github.com/expressjs/morgan)
  - Console Coloration: [**Colors.JS**](https://github.com/Marak/colors.js)

### 🌕 Frontend

- ⚛️ Core:
  - Main: [**VueJS**](https://github.com/vuejs/vue)
- 🎨 UI:
  - Main: [**Bulma**](https://github.com/jgthms/bulma)
- 🔧 Utils:
  - Realtime Communication (Client Side): [**Socket.IO**](https://github.com/socketio/socket.io)
  - Date Formatting: [**MomentJS**](https://github.com/moment/moment)

## 📄 License

Licensed under [MIT](./LICENSE).
