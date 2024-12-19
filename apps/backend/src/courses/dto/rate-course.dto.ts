import { IsNumber, Min, Max } from 'class-validator';

export class RateCourseDto {
  @IsNumber()
  @Min(0)
  @Max(5)
  rating: number;
}
