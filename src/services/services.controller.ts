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
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServicesDto } from 'dto/services.dto';
import { Service } from 'entities/services.entity';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post()
  create(@Body() createServiceDto: CreateServicesDto){
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
  update(@Param('id', ParseIntPipe) id: number  , @Body() dto: any ) {
    return this.servicesService.update(id, dto);
  }



  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.servicesService.remove(id);
  }
}
