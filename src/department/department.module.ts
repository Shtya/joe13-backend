import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { Project } from 'entities/projects.entity';
import { Department } from 'entities/departments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ Project , Department ])],
  controllers: [DepartmentController],
  providers: [DepartmentService],
})
export class DepartmentModule {}
