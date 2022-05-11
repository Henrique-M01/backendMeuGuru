import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

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

async function createUser(name: string, email: string, password: string) {
  const userExist = await PRISMA.users.findFirst({
    where: { email }
  })

  if (userExist) return null;

  const SALT_ROUNDS = 10;

  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS)


  const created = await PRISMA.users.create({
    data: { name, email , password: passwordHash },
  });

  if (!created) return null;

  return { id: created.id, name: created.name, email: created.email };
}

async function updateUser(id: number, name: string, email: string, password: string) {
  const userExist = await PRISMA.users.findUnique({
    where: { id }
  })

  if (!userExist) return null;

  const SALT_ROUNDS = 10;

  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS)

  const updated = await PRISMA.users.update({
    data: { name, email, password: passwordHash },
    where: { id },
  })

  if (!updated) return null;

  return { id: updated.id, name: updated.name, email: updated.email };
}

export default {
  getAll,
  getByEmail,
  getByName,
  deleteUser,
  createUser,
  updateUser,
};
