import { Controller, Post, Get, Param, Body, Patch, Delete, Req, Query, UseInterceptors, UploadedFile, UploadedFiles,} from '@nestjs/common';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'common/multer.config';

import { SettingsService } from './settings.service';
import { CreateSettingDto, UpdateSettingDto } from 'dto/settings.dto';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor( [ { name: 'site_logo_url', maxCount: 1 }, { name: 'favicon_url', maxCount: 1 }, ], multerOptions))
  create(@Body() dto: CreateSettingDto , @UploadedFiles() files: { site_logo_url?: any[]; favicon_url?: any[]; }) {
    if (files?.site_logo_url?.[0]) {
      dto.site_logo_url = `/uploads/${files.site_logo_url[0].filename}`;
      if (!dto.site_logo_alt) dto.site_logo_alt = dto.site_name?.en;
    }

    if (files?.favicon_url?.[0]) {
      dto.favicon_url = `/uploads/${files.favicon_url[0].filename}`;
      if (!dto.favicon_alt) dto.favicon_alt = dto.site_name?.en;
    }

    return this.settingsService.create(dto);
  }


  @Get()
  async findAll(@Query() query) {
    const { page, limit, search, sortBy, sortOrder, ...restQueryParams } = query;

    return this.settingsService.findAll(
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
    return this.settingsService.findOne(+id);
  }






    
  @Patch(':id')
  @UseInterceptors(FileFieldsInterceptor( [ { name: 'site_logo_url', maxCount: 1 }, { name: 'favicon_url', maxCount: 1 }, ], multerOptions))
  update(@Param('id') id: string, @Body() dto: UpdateSettingDto ,  @UploadedFiles() files: { site_logo_url?: any[]; favicon_url?: any[]; }) {
    if (files?.site_logo_url?.[0]) {
      dto.site_logo_url = `/uploads/${files.site_logo_url[0].filename}`;
      if (!dto.site_logo_alt) dto.site_logo_alt = dto.site_name?.en;
    }
    
    if (files?.favicon_url?.[0]) {
      dto.favicon_url = `/uploads/${files.favicon_url[0].filename}`;
      if (!dto.favicon_alt) dto.favicon_alt = dto.site_name?.en;
    }

    return this.settingsService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.settingsService.remove(+id);
  }
}
