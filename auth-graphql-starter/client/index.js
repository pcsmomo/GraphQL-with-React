import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

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

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>Auth Starter</div>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
