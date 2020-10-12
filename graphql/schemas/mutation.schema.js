module.exports = `
  type Mutation {
    createUser(
      username: String!
      password: String!
      email: String!
    ) :Users!

    createEvent(
      alertType: String!
      alertDate: DateScalar
      alertScore: Int
      created_at: DateScalar
      expires_on: DateScalar
    ) :Events!

    createLocation(
      location_events: Int
      name: String
      country: String
      googlemap_URL: String
      location_type: String
      longitute: Int
      latitude: Int
    ) :Locations!
  }
`;