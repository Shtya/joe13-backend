// src/blogs/blogs.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBlogDto, UpdateBlogDto } from 'dto/blogs.dto';
import { Blog } from 'entities/blogs.entity';
import { Repository } from 'typeorm';
import { BaseService } from 'common/base/base.service';
import { Department } from 'entities/departments.entity';

@Injectable()
export class BlogsService extends BaseService<Blog> {
  constructor(
    @InjectRepository(Blog) private readonly blogRepository: Repository<Blog>,
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
  ) {
    super(blogRepository);
  }

  async createCustom(createBlogDto: CreateBlogDto): Promise<Blog> {
    const blog = this.blogRepository.create(createBlogDto);

    // Link department if departmentId provided
    if (createBlogDto.departmentId) {
      const department = await this.departmentRepository.findOne({
        where: { id: +createBlogDto.departmentId },
      });
      if (!department) {
        throw new NotFoundException('Department not found');
      }
      blog.department = department;
    }

    console.log(blog)

    return this.blogRepository.save(blog);
  }

  // projects.service.ts
  async findOneBySlug(slug: string) {
    const blog = await this.blogRepository.findOne({
      where: { slug },
      relations: ['department'],
    });

    if (!blog) {
      return null; // or throw an error if preferred
    }

    blog.views_count += 1;
    await this.blogRepository.save(blog);

    return blog;
  }

  async update(id: number, updateBlogDto: UpdateBlogDto): Promise<Blog> {
    const blog = await this.findOne(id);

    if (updateBlogDto.departmentId) {
      const department = await this.departmentRepository.findOne({
        where: { id: +updateBlogDto.departmentId },
      });
      if (!department) {
        throw new NotFoundException('Department not found');
      }
      blog.department = department;
    }

    Object.assign(blog, updateBlogDto);
    return this.blogRepository.save(blog);
  }
}
