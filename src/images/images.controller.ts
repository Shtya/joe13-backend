import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  UseInterceptors,
  UploadedFiles,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { CreateImageDto } from 'dto/images.dto';
import ImageService from './images.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'common/multer.config';

@Controller('images')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get()
  findAll(@Query() query) {
     const { page, limit, search, sortBy, sortOrder, ...restQueryParams } = query;

    return this.imageService.findAll(
      'image',
      search,
      page,
      limit,
      sortBy,
      sortOrder,
      [], // exclude some fields
      [], // Relations
      ['name'], // search parameters
      restQueryParams, // search with fields
    );;
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.imageService.findOne(id);
  }

  @Post('')
  @UseInterceptors(FilesInterceptor('files', 10, multerOptions))
  async uploadImages(@UploadedFiles() files: any[], @Body() dto: any) {
    if (!files?.length) {
      throw new BadRequestException('At least one image file is required');
    }

    const altList = Array.isArray(dto?.alt)
      ? dto.alt
      : dto?.alt && typeof dto.alt === 'object'
        ? Object.values(dto.alt)
        : dto?.alt
          ? [dto.alt]
          : [];

    const images: CreateImageDto[] = files.map((file, i) => ({
      url: `/uploads/${file.filename}`,
      name: dto?.name || file.originalname,
      alt: String(altList[i] || dto?.name || `Image ${i + 1}`),
    }));

    return this.imageService.createMany(images);
  }


  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.imageService.customRemove(id);
  }
}
