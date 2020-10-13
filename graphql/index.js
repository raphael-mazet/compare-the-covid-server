'use strict';
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');
const { createContext } =  require ('./context')

module.exports = new ApolloServer({
  typeDefs,
  resolvers,
  context: createContext,
});