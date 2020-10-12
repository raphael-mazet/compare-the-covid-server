exports.LocationsRelationToEvents = (parent, args, context) => {
  return context.prisma.events.findOne({
    where: { id: parent.location_events }
  })
}

exports.SavedLocationsRelationToUsers = (parent, args, context) => {
  console.log('parent',parent)
  return context.prisma.users.findOne({
    where: { id: parent.user_id }
  })
}

exports.SavedLocationsRelationToLocation = (parent, args, context) => {
  return context.prisma.locations.findOne({
    where: { id: parent.location_id }
  })
}