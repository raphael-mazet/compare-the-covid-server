exports.EventsRelationToLocation = (parent, args, context) => {
  return context.prisma.locations.findOne({
    where: { id: parent.location_id }
  });
}

exports.SavedLocationsRelationToUsers = (parent, args, context) => {
  return context.prisma.users.findOne({
    where: { id: parent.user_id }
  });
}

exports.SavedLocationsRelationToLocation = (parent, args, context) => {
  return context.prisma.locations.findOne({
    where: { id: parent.location_id }
  });
}