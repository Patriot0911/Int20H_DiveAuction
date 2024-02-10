import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.category.createMany({
    data: [
      { name: 'Electronics' },
      { name: 'Clothing' },
      { name: 'Books' },
      { name: 'Furniture' },
      { name: 'Toys' },
      { name: 'Automotive' },
      { name: 'Sports' },
      { name: 'Gardening' },
      { name: 'Music' },
      { name: 'Health' },
      { name: 'Beauty' },
      { name: 'Collectibles' },
      { name: 'Art' },
      { name: 'Crafts' },
      { name: 'Jewelry' },
      { name: 'Food' },
      { name: 'Drink' },
      { name: 'Pet' },
      { name: 'Other' },
    ],
  });
}

main().finally(async () => {
  await prisma.$disconnect();
});
