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