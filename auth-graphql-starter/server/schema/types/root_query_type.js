const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    dummyId: {
      dummyText: { type: GraphQLString },
      resolve() {
        return "dummy";
      }
    }
  })
});

module.exports = RootQueryType;
