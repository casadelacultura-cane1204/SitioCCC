import { IsString, IsNumber, IsEnum, Min, Max } from 'class-validator';

export enum CourseLevel {
  BEGINNER = 'Principiante',
  INTERMEDIATE = 'Intremedio',
  ADVANCED = 'Avanzado',
  ALL_LEVELS = 'Todos los niveles',
}

export class Course {
  @IsNumber()
  id: number;
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsString()
  duration: string;
  @IsEnum(CourseLevel)
  level: CourseLevel;
  @IsString()
  icon: string;
  @IsNumber()
  @Min(0)
  @Max(5)
  averageRating: number;
}
