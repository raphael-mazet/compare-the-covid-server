module.exports = `
  type Query {
    getUserbyId(id: Int!): Users!
    getUserbyUsername(username: String!): [Users!]!
    getEventsbyAlertType(alertType: String!): [Events!]!
  }
`;
