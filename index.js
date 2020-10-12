const server = require('./graphql')

server.listen(
  { port: 4000 },
  () =>
    console.log(
      `🚀  Server ready at port 4000`,
    ),
)

