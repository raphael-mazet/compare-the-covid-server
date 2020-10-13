exports.deleteExistingSavedLocation = async (parent, args, ctx) => {
  const locationsDeleted = await ctx.prisma.savedLocations.deleteMany({
    where: { 
      user_id: { equals: args.user_id },
      location_id: { equals: args.location_id },
    }
  });
  console.log(locationsDeleted)
  return locationsDeleted
};