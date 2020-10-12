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
  }
`;