import { ApolloServer, gql } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    users: [User!]!
    operators:[Operator]
  }
  type Operator{
    id: ID
    name: String
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
    operators: async (parent, args, context, info) => {
      const operatorList = [
        {
          id: 1,
          name: "МТС"
        },
        {
          id: 2,
          name: "Билайн"
        },
        {
          id: 3,
          name: "Мегафон"
        },
      ]
      return operatorList
    }
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