const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()
async function main() {
  await prisma.events.create({
    data: {
      alertScore: 1,
    }
  })
  await prisma.users.create({
    data: {
      username: "david",
      password: "davidttt",
      email: "davidxxx",
    }
  })
  

}
main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })