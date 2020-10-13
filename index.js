const server = require('./graphql')
require('dotenv').config();

const PORT = process.env.PORT || 4000;
const DATABASE_URL = `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${PORT}/${process.env.DB_NAME}`
// DATABASE_URL="postgresql://davidhardy:admin@localhost:5432/covidtest?schema=public"


server.listen(
  { port: PORT },
  () =>
    console.log(
      `🚀  Server ready at port ${PORT}`,
    ),
)
