exports.updateExistingSavedLocation = async (parent, args, ctx) => {
  const locationsUpdated = await ctx.prisma.savedLocations.updateMany({
    where: { 
      user_id: { equals: args.user_id },
      location_id: { equals: args.location_id },
    },
    data: {
      selection_date: args.selection_date,
    }
  });
  return locationsUpdated;
};

exports.updateLastCheckedEvents = async (parent, args, ctx) => {
  const lastCheckedEventUpdated = await ctx.prisma.users.update({
    where: { 
      id: args.id,
    },
    data: {
      last_checkedEvents: args.last_checkedEvents,
    }
  });
  const response = {
    id: lastCheckedEventUpdated.id,
    last_checkedEvents: lastCheckedEventUpdated.last_checkedEvents
  }
  return response;
};