const server = require('./graphql')
var dotenv = require('dotenv')
var dotenvExpand = require('dotenv-expand')
var myEnv = dotenv.config()
dotenvExpand(myEnv)

const PORT = process.env.PORT || 4000;

server.listen(
  { port: PORT },
  () =>
    console.log(
      `🚀  Server ready at port ${PORT}`,
    ),
)
