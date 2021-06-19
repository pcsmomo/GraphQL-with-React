# GraphQL-with-React Summary

Udemy course, GraphQL with React: The Complete Developers Guide by Stephen Grider

- Node : v14.15.4
- NPM : 6.14.10

### 1. Introduction

- Diagram Tool : [Balsamiq Mockups](https://balsamiq.com/)
- Terminal : Iterm with zShell

### 4. Review of REST-ful Routing

When Rest-ful Routing goes nested and nested it's going to be too complicated.

### 7. Working with GraphQL

```
npm install --save express express-graphql graphql lodash
```

### 14. A Realistic Data Source

```
npm install --save-dev json-server
```

### 15. Async Resolve Functions

```
npm install --save axios
```

### 16. Nodemon Hookup

```
npm install --save-dev nodemon
```

### 25. Query Fragments

- Query can have a name, "findCompany"
- More than one query can be written with arbitrary keys such "apple" and "google"
- Query Fragment is useful not to repeat the same code

```graphql
query findCompany {
  apple: company(id: "1") {
    ...companyDetails
  }
  google: company(id: "2") {
    ...companyDetails
  }
}

fragment companyDetails on Company {
  id
  name
  description
  users {
    id
    firstName
    age
  }
}
```

### 27. NonNull Fields and Mutations

```graphql
mutation {
  addUser(firstName: "Noah", age: 30) {
    id
    firstName
    age
  }
}
```

### 28. Do It Yourself - Delete Mutation!

```graphql
mutation {
  deleteUser(id: "KVbi0uD") {
    id
  }
}
```

### 29. Do It Yourself - Edit Mutation!

```graphql
mutation {
  editUser(id: "23", firstName: "Billy", age: 35) {
    id
    firstName
    age
    company
  }
}
```

### 30. GraphQL Clients - Apollo vs Relay

- [Lokka](https://github.com/kadirahq/lokka) : As simple as possible
- [Apollo Client](https://www.apollographql.com/docs/react/) : Good balance
- [Relay](https://relay.dev/docs/) : Good performance in bad internet connection like mobile, but Complex in v1.0 (now it has v11)

### 31. Sidenote - Apollo Server vs GraphQL Server

- [express-graphql](https://github.com/graphql/express-graphql)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)

### 32. The Next App 03:40

- [Lyrical-Graphql Repositor])(https://github.com/stephengrider/lyrical-graphql) \
  _Must provide mongoLab URI to run server.js_

### 35. MongoLab Setup 09:05

- Add config.js for my own MONGO_URI

```
npm uninstall --save webpack html-webpack-plugin webpack-dev-middleware
```

```
npm install --save webpack html-webpack-plugin webpack-dev-middleware
```

```
npm uninstall --save babel-core babel-loader babel-preset-env babel-preset-react
```

```
npm install --save @babel/core babel-loader @babel/preset-env @babel/preset-react
```

### 36. Working Through the Schema

```graphql
mutation {
  addSong(title: "Cold Night") {
    id
  }
}
```

```graphql
mutation {
  addLyricToSong(
    songId: "60cbdd8a7ae7cc192a0eeec5"
    content: "Oh my oh my its a cold night"
  ) {
    id
  }
}
```

```graphql
{
  songs {
    id
    title
    lyrics {
      id
      content
    }
  }
}
```

### Update node modules up to date

#### Fix browser warnings

[DevTools failed to load SourceMap](https://stackoverflow.com/questions/61767538/devtools-failed-to-load-sourcemap-for-webpack-node-modules-js-map-http-e)

#### Remove body parser

Body Parser is now included in the default Express Package (version 4.16+)

#### Change the name expressGraphQL to graphqlHTTP

### 44. Adding React Router

```
npm uninstall --save react-router && npm install --save react-router-dom
```

### 46. Mutations in React

```graphql
mutation {
  addSong(title: "Dog Call") {
    id
    title
  }
}
```

### 48. Defining Query Variables in React

[Making all other cache updates](https://www.apollographql.com/docs/react/data/mutations/)
