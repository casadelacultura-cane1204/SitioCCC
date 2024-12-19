import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Course, CourseLevel } from './course.model';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async getAllCourses(): Promise<Course[]> {
    const courses = await this.prisma.course.findMany({
      include: { ratings: true },
    });
    return courses.map((course) => ({
      ...course,
      level: course.level as CourseLevel,
    }));
  }

  async getCourse(id: number): Promise<Course | null> {
    const course = await this.prisma.course.findUnique({
      where: { id },
      include: { ratings: true },
    });
    return course ? { ...course, level: course.level as CourseLevel } : null;
  }

  async rateCourse(courseId: number, rating: number): Promise<Course> {
    await this.prisma.courseRating.create({
      data: {
        CourseId: courseId,
        rating,
      },
    });

    const updatedCourse = await this.prisma.course.findUnique({
      where: { id: courseId },
      include: { ratings: true },
    });

    const averageRating =
      updatedCourse.ratings.reduce((acc, curr) => acc + curr.rating, 0) /
      updatedCourse.ratings.length;

    const course = await this.prisma.course.update({
      where: { id: courseId },
      data: { averageRating },
    });

    return { ...course, level: course.level as CourseLevel };
  }

  async getRecommendedCourses(): Promise<Course[]> {
    const courses = await this.prisma.course.findMany({
      orderBy: { averageRating: 'desc' },
      take: 3,
    });
    return courses.map((course) => ({
      ...course,
      level: course.level as CourseLevel,
    }));
  }
}
