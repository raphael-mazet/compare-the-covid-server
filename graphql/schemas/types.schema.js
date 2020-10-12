module.exports = `
  scalar DateScalar

  type Users {
    id: Int!
    username: String!
    password: String!
    email: String!
  }
  type Events {
    id: Int!
    alertType: String
    alertDate: DateScalar
    alertScore: Int
    created_at: DateScalar
    expires_on: DateScalar
  }
  type Locations {
    id: Int!
    location_events: Int
    name: String
    country: String
    googlemap_URL: String
    location_type: String
    longitute: Int
    latitude: Int
    events: [Events]
    savedLocations: [SavedLocations]
  }
  type SavedLocations {
    id: Int!
    user_id: Int
    location_id: Int
    selection_date: DateScalar
    locations: [Locations]
    users: [Users]
  }
`;

