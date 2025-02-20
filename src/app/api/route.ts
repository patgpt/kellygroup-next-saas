// // Next.js Custom Route Handler: https://nextjs.org/docs/app/building-your-application/routing/router-handlers
// import { AppSettingsCollectionResolvers } from '@/gql/sdk'
// import sdk from '@/lib/contentful'
// import { readFileSync } from 'fs'
// import { createSchema, createYoga } from 'graphql-yoga'
// interface NextContext {
//   params: Promise<Record<string, string>>
// }

 
 
// const typeDefs = readFileSync("./../../gql/schema.graphql", 'utf8') 

// // const resolvers = readFileSync('./resolvers.ts', 'utf8')
 
//   const resolvers: AppSettingsCollectionResolvers = {
//     items: async () => {
//       const result = await sdk.AppSettingsCollectionQuery({
//         locale: 'en',
//         preview: false
//       }).then((res) => res).catch((err) => {
//         console.error(err)
//         return err
//       })
//       return result 
//     }
//   }
//   const schema = createSchema({
//     typeDefs,
//   })
 

//   const { handleRequest } = createYoga<NextContext>(
//     {
//      schema:{
//        typeDefs,
//       resolvers
//      },
//     graphqlEndpoint: '/api/graphql',
//     context: async ({ request }) => {
//       console.log(request)

//       return {
//         params: await request.json()
//       }
      
//     },


    
    
     
//     cors: {
//       maxAge: 600,
//       allowedHeaders: ['Content-Type', 'Authorization'],
//       exposedHeaders: ['Content-Type', 'Authorization'],
//       methods: ['GET', 'POST', 'OPTIONS'],
//       origin: '*',
//       credentials: true,
//     },
//   })
 
 
 
 
 
// export { handleRequest as GET, handleRequest as OPTIONS, handleRequest as POST }
