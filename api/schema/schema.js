const { projects, clients } = require("../sampleData");
const { GraphQLObjectType, GraphQLString } = require("graphql");

// Client Type
const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    name: { type: GraphQLString },
  }),
});
