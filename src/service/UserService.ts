import { PrismaClient } from '@prisma/client'

const PRISMA = new PrismaClient();

async function getAll() {
  const allUsers = await PRISMA.users.findMany();

  if (!allUsers) return null;

  return allUsers;
}

export default { getAll };
