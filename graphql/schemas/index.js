const { gql } = require('apollo-server');

const query = require('./query.schema.js');
// const mutation = require('./mutation.schema.js');
const types = require('./types.schema.js');

module.exports = gql`
  ${query}
  ${types}
`;