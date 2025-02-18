// Next.js Custom Route Handler: https://nextjs.org/docs/app/building-your-application/routing/router-handlers
import { readFileSync } from 'fs'
import { createSchema, createYoga } from 'graphql-yoga'
 
interface NextContext {
  params: Promise<Record<string, string>>
}
const typeDefs = readFileSync('./schema.graphql', 'utf8')

 
  const resolvers = {
    resolvers: {
      Query: {
        greetings: () => 'This is the `greetings` field of the root `Query` type'
      }
    }
  },
  const schema = createSchema({ typeDefs, resolvers })
  const yoga = createYoga({ schema })
 

  const { handleRequest } = createYoga<NextContext>({
    // schema,
    graphqlEndpoint: '/api/graphql',
    context: async ({ request }) => {
      console.log(request)

      return {
        params: await request.json()
      }

    },
    cors: {
      maxAge: 600,
      allowedHeaders: ['Content-Type', 'Authorization'],
      exposedHeaders: ['Content-Type', 'Authorization'],
      methods: ['GET', 'POST', 'OPTIONS'],
      origin: '*',
      credentials: true,
    },
    fetchAPI: { Response, fetch: fetch }
  })
 
 
 
 
 
export { handleRequest as GET, handleRequest as OPTIONS, handleRequest as POST }
