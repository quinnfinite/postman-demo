<h1 align="center">Welcome to postman-demo 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/quinnfinite/postman-demo#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/quinnfinite/postman-demo/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/quinnfinite/postman-demo/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/quinnfinite/postman-demo" />
  </a>
  <a href="https://twitter.com/quinnroyston" target="_blank">
    <img alt="Twitter: quinnroyston" src="https://img.shields.io/twitter/follow/quinnroyston.svg?style=social" />
  </a>
</p>

> Demo for Postman
> For more information on API's, Postman, and HTTP Requests refer to my other walkthrough [Article] (https://medium.com/javascript-in-plain-english/going-postal-with-postman-http-requests-apis-in-plain-english-802b8a573335)

### 🏠 [Homepage](https://github.com/quinnfinite/postman-demo#readme)

## Requirements
  - Node
  - MongoDB

## Setup Process
1. Install
2. Create a .env file in the root directory with the following
  - DB_URL - Set equal to the url for your MongoDB database - if using locally this will likely be mongodb://localhost:27017
  - DB_NAME - Set equal to animals, or something similar
  - PORT - Set to whatever port you'd like to use. Recommend 8000
  - NUMBER_OF_ANIMALS - Set to however many animals you'd like to seed the database with
3. Setup Database
4. Seed Database
5. Start Server and Enjoy :)


## Install

```sh
npm install
```

## Setup Database
```sh
npm run createDB
```
## Seed Database
```sh
npm run seed
```

## Usage

```sh
npm run start
```

## Endpoints
#### GET - /animals
Retrieves all animals from the database. 

Accepts parameters to filter animals.

#### POST - /animals
Adds animals to the database. 

This endpoint allows adding multiple animals at a time and accepts an array of objects from the body of the request.

#### PATCH - /animals
Updates a single animal. Pass the information about the animal into the body of the request

#### DELETE - /eat/:id
Deletes a single animal. Include the id for the animal in the endpoints path.


## Author

👤 **Quinn Royston**

* Twitter: [@quinnroyston](https://twitter.com/quinnroyston)
* Github: [@quinnfinite](https://github.com/quinnfinite)
* LinkedIn: [@quinnroyston](https://linkedin.com/in/quinnroyston)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/quinnfinite/postman-demo/issues). You can also take a look at the [contributing guide](https://github.com/quinnfinite/postman-demo/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Quinn Royston](https://github.com/quinnfinite).<br />
This project is [ISC](https://github.com/quinnfinite/postman-demo/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_