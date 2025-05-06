// src/blogs/blogs.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBlogDto, UpdateBlogDto } from 'dto/blogs.dto';
import { Blog } from 'entities/blogs.entity';
import { Repository } from 'typeorm';
import { appendBaseUrl } from 'utils/baseurl_image';
import { slugify } from 'utils/slugify';
import { unlink } from 'fs/promises'; // For async file deletion
import { BaseService } from 'common/base/base.service';

@Injectable()
export class BlogsService extends BaseService<Blog> {
  constructor(
    @InjectRepository(Blog) private readonly blogRepository: Repository<Blog>,
  ) {
    super(blogRepository)
  }

}
