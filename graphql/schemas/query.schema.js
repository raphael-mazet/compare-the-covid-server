module.exports = `
  type Query {
    getUserbyId (id: Int!): Users
    getUserbyUsernameAndPassword (username: String!, password:String!): Users
    getEventsbyAlertType (alertType: String!): [Events]
    getLocationbyId (id: Int!): Locations
    getLocationbyURL (googlemap_URL: String!): Locations
    getSavedLocationbyUser_Id (user_id: Int!): [SavedLocations]
    getSavedLocationbyLocation_Id (location_id: Int!): [SavedLocations]
  }
`;
