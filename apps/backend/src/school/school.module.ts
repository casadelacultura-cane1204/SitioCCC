import { Module } from '@nestjs/common';
import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [SchoolController],
  providers: [SchoolService, PrismaService],
})
export class SchoolModule {}
