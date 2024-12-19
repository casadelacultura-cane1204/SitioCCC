import { Module } from '@nestjs/common';
import { VideosService } from './video.service';
import { VideosController } from './video.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [VideosController],
  providers: [VideosService, PrismaService],
})
export class VideosModule {}
