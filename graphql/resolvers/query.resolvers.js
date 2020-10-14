exports.userbyId = (parent, args, ctx) => {
  return ctx.prisma.users.findOne({
    where: { id: args.id }
  });
};

exports.userbyUsernameAndPassword = async (parent, args, ctx) => {  
  const usernameExists = await ctx.prisma.users.findOne({
    where: { username: args.username }
  });
  if (usernameExists) {
    return usernameExists.password === args.password ? usernameExists : null;
  } else {
    return null;
  }
};

exports.eventsbyAlertType = (parent, args, ctx) => {
  return ctx.prisma.events.findMany({
    where: { alertType: args.alertType }
  });
};

exports.eventsbyLocation_Id = (parent, args, ctx) => {
  return ctx.prisma.events.findMany({
    where: { location_id: args.location_id }
  });
};

exports.eventsbyLocation_Ids = async (parent, args, ctx) => {
  const events = []
  for (let id of args.location_ids) {
    const res = await ctx.prisma.events.findMany({
      where: { location_id: id }
    });
    events.push(res);
  }
  return events
};

exports.getLocationbyURL = (parent, args, ctx) => {
  return ctx.prisma.locations.findOne({
    where: { googlemap_URL: args.googlemap_URL }
  });
};

exports.getLocationbyId = async (parent, args, ctx) => {
  return ctx.prisma.locations.findOne({
    where: { id: args.id }
  });
};

exports.savedLocationbyUser_Id = async (parent, args, ctx) => {
  return ctx.prisma.savedLocations.findMany({
    where: { user_id: args.user_id }
  }); 
};

exports.savedLocationbyLocation_Id = async (parent, args, ctx) => {
  return ctx.prisma.savedLocations.findMany({
    where: { location_id: args.location_id }
  }); 
};