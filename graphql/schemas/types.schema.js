module.exports = `
  type Users {
    id: Int!
    username: String!
    password: String!
    email: String!
  }
`;

// type events {
//   id: Int!
//   alertType: alert_type
//   alertDate: Date
//   alertScore: Int
//   created_at: Date
//   expires_on: Date
//   locations: [locations]
// }
// type locations {
//   id: Int!
//   location_events: Int
//   name: String
//   country: String
//   googlemap_URL: String
//   location_type: String
//   longitute: Int
//   latitude: Int
//   events: [events]
//   savedLocations: [savedLocations]
// }
// type savedLocations {
//   id: Int!
//   user_id: Int
//   location_id: Int
//   selection_date: Date
//   locations: [locations]
//   users: [users]
// }