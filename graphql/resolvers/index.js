const query = require('./query.resolvers.js');
const mutation = require('./mutation.resolvers.js');
const DateScalar = require('./date.scalar.js');
const types = require('./types.resolvers.js');


const resolvers = {
  Query: {
    getUserbyId: query.userbyId,
    getUserbyUsername: query.userbyUsername,
    getEventsbyAlertType: query.eventsbyAlertType,
    getLocationbyURL: query.getLocationbyURL,
    getLocationbyId: query.getLocationbyId,
    getSavedLocationbyUser_Id: query.savedLocationbyUser_Id,
    getSavedLocationbyLocation_Id: query.savedLocationbyLocation_Id,
  },
  Mutation: {
    createUser: mutation.createNewUser,
    createEvent: mutation.createNewEvent,
    createLocation: mutation.createNewLocation,
    createSavedLocation: mutation.createNewSavedLocation,
  },
  Locations: {
    location_events: types.LocationsRelationToEvents
  },
  SavedLocations: {
    user_id: types.SavedLocationsRelationToUsers,
    location_id: types.SavedLocationsRelationToLocation,
  },
  DateScalar,
};

module.exports = resolvers;