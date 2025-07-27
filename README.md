<h2 align="center">Node.js api template</h2>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()

</div>


---

## 📝 Table of Contents

- [Modules used](#modules)
- [Setting up a local enviroment](#getting_started)
- [Usage](#usage)
- [Authors](#authors)


## 📋 Modules used <a name = "modules"></a>

- <b>ts-node</b> → Allows you to run TypeScript code directly in Node.js without compiling it first.
- <b>express</b> → A fast and minimal web framework for building APIs and web applications in Node.js.
- <b>dotenv</b> → Loads environment variables from a .env file into process.env, making it easy to manage configuration.
- <b>jsonwebtoken</b> → Used to create and verify JSON Web Tokens (JWT), commonly for authentication and authorization.
- <b>compression</b> → Middleware that enables Gzip compression to reduce the size of the HTTP response.
- <b>cookie-parser </b> → Middleware that parses cookies attached to the client request object.
- <b>cors</b> → Enables Cross-Origin Resource Sharing (CORS), allowing your API to be accessed from different domains.
- <b>bcrypt</b> → A library to securely hash and compare passwords using the bcrypt algorithm.
- <b>mysql2</b> → A modern MySQL client for Node.js with support for Promises and prepared statements.
- <b>validator</b> → A library of string validators and sanitizers, useful for validating input like emails, URLs, etc.


## 🏁 Getting Started <a name = "getting_started"></a>

To download the source code you just need to type this in a bash:

```console
matteopiffari@main:~$ git clone https://github.com/matteopiffari/Node.js-api-template
```

Install all the modules:

```console
matteopiffari@main:~$ npm i
```


Now you just need to edit the .env file and add your credentials.

## 🎈 Usage <a name="usage"></a>

```console
matteopiffari@main:~$ cd Node.js-api-template
matteopiffari@main:~/Node.js-api-template$ npx ts-node src/server.ts
```

## ✍️ Authors <a name = "authors"></a>

- [matteopiffari](https://github.com/matteopiffari) - Idea & Work
