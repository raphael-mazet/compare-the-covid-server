exports.user = (parent, args, ctx) => {
  return ctx.prisma.users.findOne({
    where: { id: args.id}
  })
}