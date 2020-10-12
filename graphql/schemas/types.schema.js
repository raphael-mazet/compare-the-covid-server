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
    location_events: Events
    name: String
    country: String
    googlemap_URL: String
    location_type: String
    longitude: Int
    latitude: Int
  }
  
  type SavedLocations {
    id: Int!
    user_id: Users
    location_id: Locations
    selection_date: DateScalar
  }
`;

