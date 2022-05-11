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

async function getByName(name: string) {
  const user = await PRISMA.users.findFirst({ where: { name } });

  if (!user) return null;

  return user;
}

async function deleteUser(id: number) {
  const deleted = await PRISMA.users.delete({ where: { id } });

  if (!deleted) return null;

  return deleted;
}

export default { getAll, getByEmail, getByName, deleteUser };
