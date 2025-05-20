import { Controller, Post, Get, Param, Body, Patch, Delete, Req, Query, UseInterceptors, UploadedFile,} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'common/multer.config';

import { PartnersService } from './partners.service';
import { CreatePartnerDto, UpdatePartnerDto } from 'dto/partner.dto';


@Controller('partners')
export class PartnersController {
  constructor(private readonly partnerService: PartnersService) {}

  
  @Post()
  @UseInterceptors(FileInterceptor('file', multerOptions))
  create(@Body() dto: CreatePartnerDto , @UploadedFile() file: any) {
    if (file) {
      dto.logo_url = `/uploads/${file.filename}`;
      if(!dto.logo_alt) dto.logo_alt = dto.name?.en 
    }
    
    return this.partnerService.create(dto);
  }


  @Get()
  async findAll(@Query() query) {
    const { page, limit, search, sortBy, sortOrder, ...restQueryParams } = query;

    return this.partnerService.findAll(
      'partners',
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
    return this.partnerService.findOne(+id);
  }


  
  @Patch(':id')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  update(@Param('id') id: string, @Body() dto: UpdatePartnerDto , @UploadedFile() file: any ) {
    if (file) {
      dto.logo_url = `/uploads/${file.filename}`;
      if(!dto.logo_alt) dto.logo_alt = dto.name?.en 
    }
    
    return this.partnerService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partnerService.remove(+id);
  }
}
