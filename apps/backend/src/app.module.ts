import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { SchoolModule } from './school/school.module';
import { VideoModule } from './video/video.module';

@Module({
  imports: [CoursesModule, SchoolModule, VideoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
