exports.createNewUser = (parent, args, ctx) => {
  return ctx.prisma.users.create({
    data: { 
      username: args.username,
      password: args.password,
      email: args.email,
    }
  })
};

exports.createNewEvent = (parent, args, ctx) => {
  return ctx.prisma.events.create({
    data: { 
      alertType: args.alertType,
      alertDate: args.alertDate,
      alertScore: args.alertScore,
      created_at: args.created_at,
      expires_on: args.expires_on,
    }
  })
};

exports.createNewLocation = (parent, args, ctx) => {
  return ctx.prisma.locations.create({
    data: { 
      events: {
        connect: { id: args.location_events }
      },
      name: args.name,
      country: args.country,
      googlemap_URL: args.googlemap_URL,
      location_type: args.location_type,
      longitude: args.longitude,
      latitude: args.latitude,
    }
  })
};

exports.createNewSavedLocation = (parent, args, ctx) => {
  return ctx.prisma.locations.create({
    data: { 
      users: {
        connect: { id: args.user_id }
      },
      locations: {
        connect: { id: args.location_id }
      },
      selection_date: args.selection_date,
    }
  })
};