// src/blogs/blogs.module.ts
import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from 'entities/blogs.entity';
import { Department } from 'entities/departments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Blog , Department])],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
