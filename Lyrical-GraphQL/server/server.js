const express = require("express");
const models = require("./models");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schema/schema");
const NOAH_MONGO_URI = require("./config");

const app = express();

// Replace with your mongoLab URI
const MONGO_URI = NOAH_MONGO_URI;
if (!MONGO_URI) {
  throw new Error("You must provide a MongoLab URI");
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection
  .once("open", () => console.log("Connected to MongoLab instance."))
  .on("error", (error) => console.log("Error connecting to MongoLab:", error));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config.js");
app.use(webpackMiddleware(webpack(webpackConfig)));

// Common use to use React Router on Express.
// but bundle.js was create only on "/"" but other path.

// const path = require("path");
// app.use("/client", express.static("../client"));
// app.get("*", (req, res) => {
//   console.log(req.path);
//   console.log(path.join(__dirname, "../client", "index.html"));
//   res.sendFile(path.join(__dirname, "../client", "index.html"));
// });

module.exports = app;
