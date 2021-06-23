import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";

import App from "./components/App";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      user: {
        keyFields: "id"
        // or keyFields: ["id"]
      }
    }
  })
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
