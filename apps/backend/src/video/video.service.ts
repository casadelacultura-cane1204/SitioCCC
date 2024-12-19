import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';

@Injectable()
export class VideosService {
  constructor(private prisma: PrismaService) {}

  create(createVideoDto: CreateVideoDto) {
    return this.prisma.video.create({
      data: createVideoDto,
    });
  }

  findAll() {
    return this.prisma.video.findMany();
  }

  findOne(id: string) {
    return this.prisma.video.findUnique({
      where: { id },
    });
  }

  update(id: string, updateVideoDto: UpdateVideoDto) {
    return this.prisma.video.update({
      where: { id },
      data: updateVideoDto,
    });
  }

  remove(id: string) {
    return this.prisma.video.delete({
      where: { id },
    });
  }
}
