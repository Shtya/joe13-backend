import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Patch,
  Delete,
  Req,
  Query,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'common/multer.config';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto, UpdateDepartmentDto } from 'dto/department.dto';

@Controller('departments')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', multerOptions))
  create(@Body() dto: CreateDepartmentDto, @UploadedFile() file: any) {
    if (file) {
      dto.image_url = `/uploads/${file.filename}`;
      if (!dto.image_alt) dto.image_alt = dto.name?.en || dto.name?.ar;
    }
    return this.departmentService.create(dto);
  }

  @Get()
  async findAll(@Req() @Query() query) {
    const { page, limit, search, sortBy, sortOrder, ...restQueryParams } =
      query;

    return this.departmentService.findAll(
      'departments',
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
    const department = await this.departmentService.findOne(id);
    return department;
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async update( @Param('id') id: number, @Body() dto: UpdateDepartmentDto, @UploadedFile() file: any, ) {
    if (file) {
      dto.image_url = `/uploads/${file.filename}`;
      if (!dto.image_alt) dto.image_alt = dto.name?.en || dto.name?.ar;
    }

    const updatedDepartment = await this.departmentService.update(id, dto);
    return updatedDepartment;
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.departmentService.remove(id);
  }
}
