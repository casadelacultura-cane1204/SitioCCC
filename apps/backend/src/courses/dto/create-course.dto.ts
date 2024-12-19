import { IsString, IsEnum, IsNotEmpty } from 'class-validator';

import { CourseLevel } from '../course.model';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  duration: string;

  @IsEnum(CourseLevel)
  level: CourseLevel;

  @IsString()
  @IsNotEmpty()
  icon: string;
}
