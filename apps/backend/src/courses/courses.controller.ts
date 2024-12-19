import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { RateCourseDto } from './dto/rate-course.dto';
import { Course } from './course.model';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  async findAll(): Promise<Course[]> {
    return this.coursesService.getAllCourses();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Course> {
    const course = await this.coursesService.getCourse(+id);
    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
    return course;
  }

  @Post(':id/rate')
  async rateCourse(
    @Param('id') id: string,
    @Body() rateCourseDto: RateCourseDto,
  ): Promise<Course> {
    return this.coursesService.rateCourse(+id, rateCourseDto.rating);
  }

  @Get('recommended')
  async getRecommendedCourses(): Promise<Course[]> {
    return this.coursesService.getRecommendedCourses();
  }
}
