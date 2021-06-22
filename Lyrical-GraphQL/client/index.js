import "./style/style.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import App from "./components/App";
import Nav from "./components/Nav";
import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      songs: {
        keyFields: "id"
        // or keyFields: ["id"]
      }
    }
  })
});

class DebugRouter extends Router {
  constructor(props) {
    super(props);
    console.log("initial history is: ", JSON.stringify(this.history, null, 2));
    this.history.listen((location, action) => {
      console.log(
        `The current URL is ${location.pathname}${location.search}${location.hash}`
      );
      console.log(
        `The last navigation action was ${action}`,
        JSON.stringify(this.history, null, 2)
      );
    });
  }
}

class Root extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <App>
          <DebugRouter>
            <Nav />
            <Switch>
              <Route exact path="/" component={SongList} />
              <Route path="/songs/new" component={SongCreate} />
              <Route path="/songs/:id" component={SongDetail} />
            </Switch>
          </DebugRouter>
        </App>
      </ApolloProvider>
    );
  }
}

ReactDOM.render(<Root />, document.querySelector("#root"));
