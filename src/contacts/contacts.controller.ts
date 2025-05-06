import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseInterceptors, UploadedFile, BadRequestException, Query } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from 'dto/contacts.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions, multerOptionsPdf } from 'common/multer.config';


@Controller('contacts')
export class ContactsController {
  constructor(private readonly service: ContactsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', multerOptionsPdf))
  async create(@Body() dto: CreateContactDto, @UploadedFile() file: any) {
    if (dto.type === 'career') {
      if (!file)  throw new BadRequestException('Career file is required for contact type "career".');
      dto.career_file = `/uploads/careers/${file.filename}`;
    }

    return this.service.create(dto);
  }


  @Get()
  async findAll(@Query() query) {
    const { page, limit, search, sortBy, sortOrder, ...restQueryParams } = query;

    return this.service.findAll(
      'contacts',
      search,
      page,
      limit,
      sortBy,
      sortOrder,
      [], // exclude some fields
      [], // Relations
      ['type'], // search parameters
      restQueryParams, // search with fields
    );
  }


  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
