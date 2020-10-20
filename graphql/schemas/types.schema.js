module.exports = `
  scalar DateScalar

  type UserCreation {
    message: String!,
    token: String,
    status: Int!,
    userData: Users
  }

  type Users {
    id: Int
    username: String
    password: String
    firstName: String
    lastName: String
    email: String
    last_loggedin: DateScalar
    last_checkedEvents: DateScalar
  }

  type CheckedEventResponse {
    id: Int!
    last_checkedEvents: DateScalar!
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
    longitude: String
    latitude: String
  }
  
  type SavedLocations {
    id: Int!
    user_id: Users
    location_id: Locations
    selection_date: DateScalar
  }
`;

