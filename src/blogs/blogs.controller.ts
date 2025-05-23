// src/blogs/blogs.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Req,
  Query,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto, UpdateBlogDto } from 'dto/blogs.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'utils/multer.config';
import { slugify } from 'utils/slugify';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async create(@Body() dto: CreateBlogDto, @UploadedFile() file: any) {
    if (file) {
      dto.image_url = `/uploads/${file.filename}`;
      dto.image_alt = dto.image_alt ;
    }

    return this.blogsService.createCustom(dto);
  }

  @Get()
  async findAll(@Req() @Query() query) {
    const { page, limit, search, sortBy, sortOrder, ...restQueryParams } =
      query;

    return this.blogsService.findAll(
      'blogs',
      search,
      page,
      limit,
      sortBy,
      sortOrder,
      [], // exclude some fields
      ['department'], // Relations
      ['name'], // search parameters
      restQueryParams, // search with fields
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.blogsService.findOne(id);
  }

  @Get('slug/:slug')
  findOneBySlug(@Param('slug') slug: string) {
    return this.blogsService.findOneBySlug(slug);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateBlogDto,
    @UploadedFile() file: any,
  ) {
    if (file) {
      dto.image_url = `/uploads/${file.filename}`;
      dto.image_alt = dto.title?.en || dto.title?.ar;
    }

    return this.blogsService.update(+id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Req() req: any) {
    return this.blogsService.remove(+id);
  }
}







