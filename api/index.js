const express = require("express");
const colors = require("colors");
const cors = require("cors");
const dotenv = require("dotenv");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

const app = express();
dotenv.config();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(process.env.PORT || 8800, () => {
  console.log("Connected to backend!");
});
