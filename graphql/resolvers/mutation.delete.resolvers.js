exports.deleteExistingSavedLocation = (parent, args, ctx) => {
  return ctx.prisma.savedLocations.delete({
    data: { 
      alertType: args.alertType,
      alertDate: args.alertDate,
      alertScore: args.alertScore,
      locations: {
        connect: { id: args.location_id }
      },
      created_at: args.created_at,
      expires_on: args.expires_on,
    }
  });
};