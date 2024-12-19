import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { SchoolService } from './school.service';
import { School } from '@prisma/client';

@Controller('schools')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Get()
  async getAllSchools(): Promise<School[]> {
    return this.schoolService.getAllSchools();
  }

  @Get('search')
  async searchSchools(@Query('query') query: string): Promise<School[]> {
    return this.schoolService.searchSchools(query);
  }

  @Get(':id')
  async getSchoolById(@Param('id') id: string): Promise<School> {
    return this.schoolService.getSchoolById(Number(id));
  }

  @Post(':id/complete')
  async completeSchool(@Param('id') id: string): Promise<School> {
    return this.schoolService.completeSchool(Number(id));
  }
}
