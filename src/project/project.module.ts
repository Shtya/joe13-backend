import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectService } from './project.service';
import { Project } from 'entities/projects.entity';
import { Image } from 'entities/images.entity';
import { ProjectsController } from './project.controller';
import { Department } from 'entities/departments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ Project, Image , Department])],
  controllers: [ProjectsController],
  providers: [ProjectService],
})
export class ProjectModule {}
