import { Video as PrismaVideo } from '@prisma/client';
export class Video implements PrismaVideo {
  id: string;
  title: string;
  description: string;
  url: string;
  courseId: string;
  createdAt: Date;
  updatedAt: Date;
}
