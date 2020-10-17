module.exports = `
  type Mutation {
    createUser(
      username: String!
      password: String!
      firstName: String!
      lastName: String!
      email: String
      last_loggedin: DateScalar
      last_checkedEvents: DateScalar
    ) :UserCreation

    createEvent(
      alertType: String!
      alertDate: DateScalar
      alertScore: Int
      location_id: Int
      created_at: DateScalar
      expires_on: DateScalar
    ) :Events!

    createLocation(
      name: String!
      country: String
      googlemap_URL: String!
      location_type: String
      longitude: String
      latitude: String
    ) :Locations!

    createSavedLocation(
      user_id: Int
      location_id: Int
      selection_date: DateScalar
    ) :SavedLocations!

    updateSavedLocationSelectionDate(
      user_id: Int
      location_id: Int
      selection_date: DateScalar
    ) :BatchPayload
    
    deleteSavedLocation(
      user_id: Int
      location_id: Int
    ) :BatchPayload
  }
  
  type BatchPayload {
    count: Int!
  }

`;