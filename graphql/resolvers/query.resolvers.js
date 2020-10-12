exports.userbyId = (parent, args, ctx) => {
  return ctx.prisma.users.findOne({
    where: { id: args.id }
  });
};

exports.userbyUsernameAndPassword = async (parent, args, ctx) => {  
  const usernameExists = await ctx.prisma.users.findMany({
    where: { username: args.username }
  });
  if (usernameExists.length) {
    return usernameExists[0].password === args.password ? usernameExists : [];
  } else {
    return [];
  }
};

exports.eventsbyAlertType = (parent, args, ctx) => {
  return ctx.prisma.events.findMany({
    where: { alertType: args.alertType }
  });
};

exports.getLocationbyURL = (parent, args, ctx) => {
  return ctx.prisma.locations.findMany({
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