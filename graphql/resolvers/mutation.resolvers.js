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