import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Patch,
  Delete,
  Query,
  UseInterceptors,
  UploadedFiles,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'common/multer.config';

import { SettingsService } from './settings.service';
import { CreateSettingDto, UpdateSettingDto } from 'dto/settings.dto';

@Controller('settings')
@UsePipes(new ValidationPipe({ transform: true }))
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'site_logo_url', maxCount: 1 },
        { name: 'favicon_url', maxCount: 1 },
      ],
      multerOptions,
    ),
  )
  async create(
    @Body() dto: CreateSettingDto,
    @UploadedFiles()
    files: { site_logo_url?: any[]; favicon_url?: any[] },
  ) {
    if (files?.site_logo_url?.[0]) {
      dto.site_logo = {
        url: `/uploads/${files.site_logo_url[0].filename}`,
        alt: dto.site_logo?.alt || dto.site_name?.en,
      };
    }

    if (files?.favicon_url?.[0]) {
      dto.favicon = {
        url: `/uploads/${files.favicon_url[0].filename}`,
        alt: dto.favicon?.alt || dto.site_name?.en,
      };
    }

    return this.settingsService.create(dto);
  }

  
  @Patch(':id')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'site_logo_url', maxCount: 1 },
        { name: 'favicon_url', maxCount: 1 },
      ],
      multerOptions,
    ),
  )
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateSettingDto,
    @UploadedFiles()
    files: { site_logo_url?: any[]; favicon_url?: any[] },
  ) {
    if (files?.site_logo_url?.[0]) {
      dto.site_logo = {
        url: `/uploads/${files.site_logo_url[0].filename}`,
        alt: dto.site_logo?.alt || dto.site_name?.en,
      };
    }

    if (files?.favicon_url?.[0]) {
      dto.favicon = {
        url: `/uploads/${files.favicon_url[0].filename}`,
        alt: dto.favicon?.alt || dto.site_name?.en,
      };
    }

    return this.settingsService.update(+id, dto);
  }


  @Get()
  findOne() {
    return this.settingsService.findBySlug();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.settingsService.remove(+id);
  }
}
