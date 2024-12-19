const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const courseId = 'guitar-course-101';

  const videos = [
    {
      title: 'Introducción a la guitarra',
      description: 'Aprende los conceptos básicos de la guitarra',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      courseId,
    },
    {
      title: 'Acordes básicos',
      description: 'Domina los acordes fundamentales',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      courseId,
    },
    {
      title: 'Técnicas de rasgueo',
      description: 'Mejora tu técnica de rasgueo',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      courseId,
    },
    {
      title: 'Escalas pentatónicas',
      description: 'Explora las escalas pentatónicas',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      courseId,
    },
    {
      title: 'Solos de guitarra',
      description: 'Aprende a tocar solos impresionantes',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      courseId,
    },
  ];

  for (const video of videos) {
    await prisma.video.create({
      data: video,
    });
  }

  console.log('Seed data inserted successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
