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
  const PASSWORD =
    '$scrypt$N=32768,r=8,p=1,maxmem=67108864$jb29eVChgAkQD+LOR6FNUmQvVV7Dq76Ieo5eWcO0BGg$MM298eVsbttDyr+xSkmekni9k7gNnWabpCtX7IhpcKw3VMX+Wl6OL7m3IVmtLCbmodF6gyrSdSY6mOLrfmPn5w';
  await prisma.user.createMany({
    data: [
      {
        email: 'johndoe123@email.com',
        password: PASSWORD,
        name: 'John Doe',
      },
      {
        email: 'sarahsmith5678@gmail.com',
        password: PASSWORD,
        name: 'Sarah Smith',
      },
      {
        email: 'mark.jones_89@yahoo.com',
        password: PASSWORD,
        name: 'Mark Jones',
      },
      {
        email: 'emilywilson@hotmail.com',
        password: PASSWORD,
        name: 'Emily Wilson',
      },
      {
        email: 'alexanderthegreat@hotmail.com',
        password: PASSWORD,
        name: 'Alexander The Great',
      },
    ],
  });
  await prisma.auction.createMany({
    data: [
      {
        title: 'Apple iPhone 12 Pro Max',
        description: 'Brand new, never used, still in the box',
        startPrice: 323.99,
        endPrice: 1543.33,
        categoryId: 1,
        ownerId: 1,
        status: 'finished',
        startDate: new Date('2023-10-01T00:00:00Z'),
        endDate: new Date('2023-10-08T00:00:00Z'),
      },
      {
        title: 'Big black leather sofa',
        description: 'Very comfortable, in good condition',
        startPrice: 1200,
        endPrice: 2222,
        categoryId: 4,
        ownerId: 2,
        status: 'finished',
        startDate: new Date('2023-09-02T00:00:00Z'),
        endDate: new Date('2023-10-10T00:00:00Z'),
      },
      {
        title: 'Red dress',
        description: 'Size M, never worn',
        startPrice: 45.99,
        endPrice: 120.99,
        categoryId: 2,
        ownerId: 3,
        status: 'finished',
        startDate: new Date('2022-08-03T00:00:00Z'),
        endDate: new Date('2022-10-10T00:00:00Z'),
      },
      {
        title: 'Old book',
        description: 'Very old, very rare',
        startPrice: 495,
        endPrice: 500,
        categoryId: 3,
        ownerId: 4,
        status: 'finished',
        startDate: new Date('2023-07-01T00:00:00Z'),
        endDate: new Date('2023-10-10T00:00:00Z'),
      },
    ],
  });
}

main().finally(async () => {
  await prisma.$disconnect();
});
