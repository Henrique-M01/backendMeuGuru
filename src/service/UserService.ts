import { PrismaClient } from '@prisma/client';

const PRISMA = new PrismaClient();

async function getAll() {
  const allUsers = await PRISMA.users.findMany();

  if (!allUsers) return null;

  return allUsers;
}

async function getByEmail(email: string) {
  const user = await PRISMA.users.findFirst({ where: { email }});

  if (!user) return null;

  return user;
}

export default { getAll, getByEmail };
