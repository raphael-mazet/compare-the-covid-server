module.exports = `
  type Query {
    getUserbyId(id: Int!): Users!
    getUserbyUsername(username: String!): [Users!]!
  }
`;
