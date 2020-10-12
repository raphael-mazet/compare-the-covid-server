exports.userbyId = (parent, args, ctx) => {
  return ctx.prisma.users.findOne({
    where: { id: args.id }
  })
};

exports.userbyUsername = (parent, args, ctx) => {
  return ctx.prisma.users.findMany({
    where: { username: args.username }
  })
};

exports.eventsbyAlertType = (parent, args, ctx) => {
  return ctx.prisma.events.findMany({
    where: { alertType: args.alertType }
  })
};

exports.getLocationbyURL = (parent, args, ctx) => {
  return ctx.prisma.locations.findMany({
    where: { googlemap_URL: args.googlemap_URL }
  })
};

exports.getLocationbyId = async (parent, args, ctx) => {
  return ctx.prisma.locations.findOne({
    where: { id: args.id }
  });
};

exports.savedLocationbyId = async (parent, args, ctx) => {
  return ctx.prisma.savedLocations.findOne({
    where: { id: args.id }
  });
};