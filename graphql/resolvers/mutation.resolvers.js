exports.createNewUser = (parent, args, ctx) => {
  return ctx.prisma.users.create({
    data: { 
      username: args.username,
      password: args.password,
      email: args.email,
    }
  })
}