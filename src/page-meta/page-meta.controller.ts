import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PageMetaService } from './page-meta.service';
import { CreatePageMetaDto, UpdatePageMetaDto } from 'dto/page-meta.dto';

@Controller('page-meta')
export class PageMetaController {
  constructor(private readonly pageMetaService: PageMetaService) {}

  @Post()
  create(@Body() createPageMetaDto: CreatePageMetaDto) {
    return this.pageMetaService.create(createPageMetaDto);
  }

  @Get()
  async findAll(@Query() query) {
    const { page, limit, search, sortBy, sortOrder, ...restQueryParams } = query;

    return this.pageMetaService.findAll(
      'page-meta',
      search,
      page,
      limit,
      sortBy,
      sortOrder,
      [], // exclude some fields
      [], // Relations
      ['name'], // search parameters
      restQueryParams, // search with fields
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pageMetaService.findOne(+id);
  }

  @Get('by-slug/:slug')
  findOneBySlug(@Param('slug') slug: string) {
    return this.pageMetaService.findOneBySlug(slug);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePageMetaDto: UpdatePageMetaDto) {
    return this.pageMetaService.update(+id, updatePageMetaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pageMetaService.remove(+id);
  }
}


