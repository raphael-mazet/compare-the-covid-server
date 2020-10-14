module.exports = `
  scalar DateScalar

  input LocationIds {
    location_ids: [Int]
  }

  type Users {
    id: Int!
    username: String!
    password: String!
    firstName: String!
    lastName: String!
  }

  type Events {
    id: Int!
    alertType: String!
    alertDate: DateScalar!
    alertScore: Int
    location_id: Locations!
    created_at: DateScalar!
    expires_on: DateScalar!
  }

  type Locations {
    id: Int!
    name: String
    country: String
    googlemap_URL: String!
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

