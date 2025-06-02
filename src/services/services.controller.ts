import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  Patch,
  BadRequestException,
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServicesDto } from 'dto/services.dto';
import { Service } from 'entities/services.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('services')
export class ServicesController {
  constructor(
    private readonly servicesService: ServicesService,
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}

  @Post()
  async create(@Body() createServiceDto: CreateServicesDto) {
    const existing = await this.serviceRepository.findOne({
      where: { slug: createServiceDto.slug },
    });
    if (existing) {
      throw new BadRequestException('Slug already exists');
    }

    return this.servicesService.create(createServiceDto);
  }

  @Get()
  findAll(@Query() query) {
    const { page, limit, search, sortBy, sortOrder, ...restQueryParams } =
      query;

    return this.servicesService.findAll(
      'services',
      search,
      page,
      limit,
      sortBy,
      sortOrder,
      [], // exclude some fields
      [], // Relations
      [], // search parameters
      restQueryParams, // search with fields
    );
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Service> {
    return this.servicesService.findOne(id);
  }

  @Get('slug/:slug')
  findOneBySlug(@Param('slug') slug: string): Promise<Service> {
    return this.servicesService.findOneBySlug(slug);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: any) {
    return this.servicesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.servicesService.remove(id);
  }
}
