const query = require('./query.resolvers.js');
const mutationCreate = require('./mutation.create.resolvers.js');
const mutationDelete = require('./mutation.delete.resolvers.js');
const mutationUpdate = require('./mutation.update.resolvers.js');
const DateScalar = require('./date.scalar.js');
const types = require('./types.resolvers.js');


const resolvers = {
  Query: {
    getUserbyId: query.userbyId,
    getUserbyUsernameAndPassword: query.userbyUsernameAndPassword,
    getEventsbyAlertType: query.eventsbyAlertType,
    getEventsbyLocation_Id: query.eventsbyLocation_Id,
    getLocationbyURL: query.getLocationbyURL,
    getLocationbyId: query.getLocationbyId,
    getSavedLocationbyUser_Id: query.savedLocationbyUser_Id,
    getSavedLocationbyLocation_Id: query.savedLocationbyLocation_Id,
  },
  Mutation: {
    createUser: mutationCreate.createNewUser,
    createEvent: mutationCreate.createNewEvent,
    createLocation: mutationCreate.createNewLocation,
    createSavedLocation: mutationCreate.createNewSavedLocation,
    updateSavedLocationSelectionDate: mutationUpdate.updateExistingSavedLocation,
    deleteSavedLocation: mutationDelete.deleteExistingSavedLocation,
  },
  Events: {
    location_id: types.EventsRelationToLocation
  },
  SavedLocations: {
    user_id: types.SavedLocationsRelationToUsers,
    location_id: types.SavedLocationsRelationToLocation,
  },
  DateScalar,
};

module.exports = resolvers;