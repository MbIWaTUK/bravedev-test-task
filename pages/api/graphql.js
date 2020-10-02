import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    users: [User!]!
  }
  type User {
    name: String
  }
  type Mutation {
    pay(input: Values): Boolean
  }
  input Values{
    phone: String
    operator: String
    total: String
  }
`

const resolvers = {
  Query: {
    users(parent, args, context) {
      return [{ name: 'Nextjs' }]
    },
  },
  Mutation: {
    pay: async (parent, args, context, info) => {
      const { input } = args

      let randomIndex = Math.random()
      if (randomIndex > 0.5) {
        return false
      } else {
        return true
      }

    }
  }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })