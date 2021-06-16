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
