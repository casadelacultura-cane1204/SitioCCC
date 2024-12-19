import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { School } from '@prisma/client';

@Injectable()
export class SchoolService {
  constructor(private prisma: PrismaService) {}

  async getAllSchools(): Promise<School[]> {
    return this.prisma.school.findMany();
  }

  async getSchoolById(id: number): Promise<School> {
    return this.prisma.school.findUnique({ where: { id } });
  }

  async completeSchool(id: number): Promise<School> {
    return this.prisma.school.update({
      where: { id },
      data: { completed: true },
    });
  }

  async searchSchools(query: string): Promise<School[]> {
    return this.prisma.school.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { instructor: { contains: query, mode: 'insensitive' } },
          { category: { contains: query, mode: 'insensitive' } },
        ],
      },
    });
  }
}
