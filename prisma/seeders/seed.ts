import prisma from '../Connection';

async function seedTable() {
  const userOne = await prisma.users.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Henrique Silva',
      email: 'silva@email.com',
      password: 'secret_henrique',
    }
  });

  const userTwo = await prisma.users.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Jose Eduardo',
      email: 'zeEdu@email.com',
      password: 'secret_zezinho',
    }
  });

  const userTree = await prisma.users.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: 'Camila lopes',
      email: 'cacalopes@email.com',
      password: 'lopes_secret',
    }
  });

  const userFour = await prisma.users.upsert({
    where: { id: 4 },
    update: {},
    create: {
      name: 'Eduarda de Jesus',
      email: 'dudagod@email.com',
      password: 'secret_jesus',
    }
  });
}

seedTable()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
