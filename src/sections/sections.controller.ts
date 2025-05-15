import { Controller, Post, Get, Param, Body, Patch, Delete, Req, Query, UseInterceptors, UploadedFile,} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'common/multer.config';

import { SectionsService } from './sections.service';
import { CreateSectionDto, UpdateSectionDto } from 'dto/section.dto';

@Controller('sections')
export class SectionController {
  constructor(private readonly sectionService: SectionsService) {}

  
  @Post()
  @UseInterceptors(FileInterceptor('file', multerOptions))
  create(@Body() dto: CreateSectionDto , @UploadedFile() file: any) {
    if (file) {
      dto.image_url = `/uploads/${file.filename}`;
      if(!dto.image_alt) dto.image_alt = dto.title?.en || dto.title?.ar;
    }
    return this.sectionService.create(dto);
  }


  

  @Get()
  async findAll(@Query() query) {
    const { page, limit, search, slug , sortBy, sortOrder, ...restQueryParams } = query;

    return this.sectionService.findAll(
      'sections',
      search,
      page,
      limit,
      sortBy,
      sortOrder,
      [], // exclude some fields
      [], // Relations
      ['name' , "slug" ], // search parameters
      restQueryParams, // search with fields
    );
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.sectionService.findOne(+id);
  }


  @Get('by-slug/:slug')
  findOneBySlug(@Param('slug') slug: string) {
    return this.sectionService.findOneBySlug(slug);
  }



  @Patch(':id')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  update(@Param('id') id: number, @Body() dto: UpdateSectionDto , @UploadedFile() file: any) {
    if (file) {
      dto.image_url = `/uploads/${file.filename}`;
      if(!dto.image_alt) dto.image_alt = dto.title?.en || dto.title?.ar;
    }
    return this.sectionService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.sectionService.remove(+id);
  }
}
