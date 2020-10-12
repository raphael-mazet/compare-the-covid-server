const server = require('./graphql')
const { createContext } = require('./graphql/context')

server.listen(
  { port: 4000 },
  () =>
    console.log(
      `🚀  Server ready at port 4000`,
    ),
)

// server
//   .listen({ context: createContext })
//   .then(({ url }) => {
//     console.log(`🚀  Server ready at ${url}`); // eslint-disable-line no-console
//   });