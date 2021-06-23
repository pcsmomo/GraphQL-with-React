import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink
} from "@apollo/client";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";

import App from "./components/App";

// const link = createHttpLink({
//   uri: "/graphql",
//   credentials: "same-origin"
// });

const client = new ApolloClient({
  uri: "/graphql",
  credentials: "same-origin",
  cache: new InMemoryCache({
    typePolicies: {
      user: {
        keyFields: "id"
        // or keyFields: ["id"]
      }
    }
  })
  // link,
});

const history = createBrowserHistory();

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <Route path="/" component={App}></Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
