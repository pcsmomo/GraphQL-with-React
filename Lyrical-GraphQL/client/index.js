import "./style/style.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import App from "./components/App";
import Nav from "./components/Nav";
import SongList from "./components/SongList";
import SongCreate from "./components/SongCreate";
import SongDetail from "./components/SongDetail";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
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
            <Route exact path="/" component={SongList} />
            <Route exact path="/songs/new" component={SongCreate} />
            <Route exact path="/songs/:id" component={SongDetail} />
          </DebugRouter>
        </App>
      </ApolloProvider>
    );
  }
}

ReactDOM.render(<Root />, document.querySelector("#root"));
