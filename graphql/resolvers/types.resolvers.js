exports.LocationsRelationToEvents = (parent, args, context) => {
  return context.prisma.events.findOne({
    where: { id: parent.location_events }
  })
}