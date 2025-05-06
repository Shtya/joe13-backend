// src/careers/careers.controller.ts
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
import { CareersService } from './careers.service';
import { CreateCareerDto, UpdateCareerDto } from 'dto/careers.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'utils/multer.config';

@Controller('careers')
export class CareersController {
  constructor(private readonly careersService: CareersService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async create(@Body() dto: CreateCareerDto, @UploadedFile() file: any) {
    
    if (file) {
      dto.image_url = `/uploads/${file.filename}`;
      dto.image_alt = dto.title?.en || dto.title?.ar; // Set image alt text
    }

    return this.careersService.create(dto);
  }

 

  @Get()
  async findAll(@Req() req: Request, @Query() query) {
    const { page, limit, search, sortBy, sortOrder, ...restQueryParams } =
      query;

    return this.careersService.findAll(
      'careers',
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
  async findOne(@Param('id') id: number) {
    return this.careersService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateCareerDto,
    @UploadedFile() file: any,
    @Req() req: any,
  ) {
    if (file) {
      dto.image_url = `/uploads/${file.filename}`;
      dto.image_alt = dto.title?.en || dto.title?.ar; // Set image alt text
    }
    return this.careersService.update(+id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Req() req: any) {
    return this.careersService.remove(+id);
  }
}
