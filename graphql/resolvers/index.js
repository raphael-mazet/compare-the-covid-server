const query = require('./query.resolvers.js');
// const mutation = require('./mutation.resolvers.js');
// const types = require('./types.resolvers.js');

const resolvers = {
  Query: {
    user: query.user
  }
};

module.exports = resolvers;