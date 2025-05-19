import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  ParseIntPipe,
  Query,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { Page } from 'entities/pages.entity';
import { CreatePageDto, UpdatePageDto } from 'dto/pages.dto';
import { PageService } from './pages.service';
import { Image } from 'entities/images.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('pages')
export class PageController {
  constructor(
    @InjectRepository(Image) private imageRepo: Repository<Image>,
    private readonly pageService: PageService,
  ) {}

  @Get()
  findAll(@Query() query) {
    const { page, limit, search, sortBy, sortOrder, ...restQueryParams } =
      query;

    return this.pageService.findAll(
      'pages',
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
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Page> {
    return this.pageService.findOne(id);
  }

  @Post()
  create(@Body() createPageDto: CreatePageDto): Promise<Page> {
    return this.pageService.customCreate(createPageDto);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePageDto: UpdatePageDto,
  ): Promise<Page> {
    if (updatePageDto.sections) {
      const sectionIds = updatePageDto.sections.map((s) => s.id);
      const uniqueIds = new Set(sectionIds);

      if (uniqueIds.size !== sectionIds.length) {
        throw new BadRequestException(
          'Duplicate section id found. Section IDs must be unique.',
        );
      }
    }
    return this.pageService.update(id, updatePageDto);
  }

  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ message: string }> {
    await this.pageService.remove(id);
    return { message: 'Page deleted successfully' };
  }

  @Post(':id/sections')
  async addSection(@Param('id', ParseIntPipe) id: number, @Body() dto: any) {
    const page = await this.pageService.findOne(id);
    if (!page) throw new NotFoundException('Page not found');

    page.sections = page.sections || [];

    // Check if new section id duplicates existing section ids
    const existingIds = page.sections.map((s) => s.id);
    if (existingIds.includes(dto.id)) {
      throw new BadRequestException(
        `Section with id '${dto.id}' already exists.`,
      );
    }

    // If image is a number (id), replace with full image data
    if (dto.image && typeof dto.image === 'number') {
      const image = await this.imageRepo.findOneBy({ id: dto.image });
      if (!image) {
        throw new NotFoundException(`Image with id ${dto.image} not found`);
      }

      dto.image = {
        url: image.url,
        alt: image.alt,
        name: image.name,
        id: image.id,
      };
    }

    // Add the new section
    page.sections.push(dto);

    // Update page with new sections array
    return this.pageService.update(id, { sections: page.sections });
  }

  // Update a section by section id
  @Put(':pageId/sections/:sectionId')
  async updateSection(
    @Param('pageId', ParseIntPipe) pageId: number,
    @Param('sectionId') sectionId: string,
    @Body() dto: any,
  ) {
    const page = await this.pageService.findOne(pageId);
    if (!page) throw new NotFoundException('Page not found');

    if (!page.sections || page.sections.length === 0) {
      throw new NotFoundException('No sections found in this page');
    }

    const index = page.sections.findIndex((s) => s.id === sectionId);
    if (index === -1) {
      throw new NotFoundException(`Section with id '${sectionId}' not found`);
    }

    // Check for image id replacement if needed
    if (dto.image && typeof dto.image === 'number') {
      const image = await this.imageRepo.findOneBy({ id: dto.image });
      if (!image) {
        throw new NotFoundException(`Image with id ${dto.image} not found`);
      }

      dto.image = {
        url: image.url,
        alt: image.alt,
        name: image.name,
        id: image.id,
      };
    }

    // Update section, preserve id to avoid duplicates if needed
    page.sections[index] = {
      ...page.sections[index],
      ...dto,
      id: sectionId, // ensure id stays the same
    };

    return this.pageService.update(pageId, { sections: page.sections });
  }

  // Remove a section by section id
  @Delete(':id/sections/:sectionId')
  async removeSection(
    @Param('id', ParseIntPipe) id: number,
    @Param('sectionId') sectionId: string,
  ) {
    const page = await this.pageService.findOne(id);
    console.log(page)
    if (!page) throw new NotFoundException('Page not found');

    if (!page.sections) throw new NotFoundException('Sections not found');

    page.sections = page.sections.filter((s) => s.id !== sectionId);

    await this.pageService.update(id, { sections: page.sections });

    return { message: 'Section removed successfully' };
  }
}
