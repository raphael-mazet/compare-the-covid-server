module.exports = `
  type Query {
    getUserbyId(id: Int!): Users!
    getUserbyUsername(username: String!): [Users!]!
    getEventsbyAlertType(alertType: String!): [Events!]!
    getLocationbyId(id: Int!): Locations!
    getLocationbyURL(googlemap_URL: String!): [Locations]
  }
`;
