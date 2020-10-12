exports.userbyId = (parent, args, ctx) => {
  return ctx.prisma.users.findOne({
    where: { id: args.id}
  })
};

exports.userbyUsername = (parent, args, ctx) => {
  return ctx.prisma.users.findMany({
    where: { username: args.username}
  })
};

exports.eventsbyAlertType = (parent, args, ctx) => {
  return ctx.prisma.events.findMany({
    where: { alertType: args.alertType}
  })
};