import React from "react";
import ReactDOM from "react-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink
} from "@apollo/client";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import App from "./components/App";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Signup from "./components/SignupForm";
import SingupForm from "./components/SignupForm";

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
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SingupForm} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
