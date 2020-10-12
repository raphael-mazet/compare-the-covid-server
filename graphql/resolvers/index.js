const query = require('./query.resolvers.js');
const mutation = require('./mutation.resolvers.js');
const DateScalar = require('./date.scalar.js');
// const types = require('./types.resolvers.js');


const resolvers = {
  Query: {
    getUserbyId: query.userbyId,
    getUserbyUsername: query.userbyUsername,
    getEventsbyAlertType: query.eventsbyAlertType,
  },
  Mutation: {
    createUser: mutation.createNewUser,
    createEvent: mutation.createNewEvent,
    createLocation: mutation.createNewLocation,
  },
  DateScalar,
};

module.exports = resolvers;