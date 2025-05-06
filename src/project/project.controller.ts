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
  UploadedFiles,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'common/multer.config';

import { CreateProjectDto, UpdateProjectDto } from 'dto/project.dto';
import { ProjectService } from './project.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'entities/projects.entity';
import { Repository } from 'typeorm';
import { Department } from 'entities/departments.entity';

@Controller('projects')
export class ProjectsController {
  constructor(
    private readonly projectsService: ProjectService,
    @InjectRepository(Department) private departmentRepository: Repository<Department>,
    @InjectRepository(Project) private projctRepository: Repository<Project>,
  ) {}



  @Post(':id/images')
  @UseInterceptors(FilesInterceptor('files', 10, multerOptions))
  async uploadImages( @Param('id') id: number, @UploadedFiles() files: any[], @Body() body: any, ) {

    const images = (files || []).map((file, i) => ({
      url: `/uploads/${file.filename}`,
      alt: body[`alt${i}`] || `Image ${i + 1}`,
    }));

    return this.projectsService.addImages(+id, images);
  }


  @Delete(':id/images')
async deleteImageById(@Param('id') id: number, @Body('imageId') imageId: number) {
  return this.projectsService.removeImageById(+id, +imageId);
}





  @Post()
  @UseInterceptors(FilesInterceptor('files', 10, multerOptions)) // 'files' matches the form-data field name
  async create(@Body() dto: any, @UploadedFiles() files: any[]) {
    const department = await this.departmentRepository.findOne({ where: { id: dto.department_id }, });
    if (!department) throw new BadRequestException( `Department with id ${dto.department_id} does not exist`, );
    

    // Process uploaded files and map them to the correct image format
    dto.images = await (files || []).map((file, i) => ({
      url: `/uploads/${file.filename}`,
      alt: dto?.alt[`${i}`],
      id: i + 1, // You can use a placeholder or the real ID after saving
    }));

    const currentDto = {
      name: dto.name,
      description: dto.description,
      meta_title: dto.meta_title,
      meta_description: dto.meta_description,
      meta_keywords: dto.meta_keywords,
      department_id: department,
      images: dto.images,
    };

    const data = await this.projctRepository.create({...currentDto , department});
    const savedProject = await this.projctRepository.save(data);

    savedProject.images = savedProject.images.map((image, i) => ({
      ...image,
      id: image.id || i + 1, 
    }));

    return savedProject;
  }

  @Get()
  async findAll(@Query() query) {
    const { page, limit, search, sortBy, sortOrder, ...restQueryParams } =
      query;

    return this.projectsService.findAll(
      'projects',
      search,
      page,
      limit,
      sortBy,
      sortOrder,
      [], // exclude some fields
      ["department"], // Relations
      ['name'], // search parameters
      restQueryParams, // search with fields
    );
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.projectsService.findOne(+id);
  }

  @Patch(':id')
  @UseInterceptors(FilesInterceptor('files', 10, multerOptions))
  async update( @Param('id') id: number, @Body() dto: any, @UploadedFiles() files: any[], ) {
    const project = await this.projctRepository.findOne({ where: { id } });
    if (!project) throw new NotFoundException(`Project with id ${id} not found`);

    const department = await this.departmentRepository.findOne({ where: { id: dto.department_id }, });
    if (!department) throw new BadRequestException( `Department with id ${dto.department_id} does not exist`, );
    
    

    // Parse existing images if sent as JSON string (optional if using Postman/form-data)
    let existingImages = [];
    if (typeof dto.images === 'string') {
      try {
        existingImages = JSON.parse(dto.images);
      } catch (e) {
        throw new BadRequestException('Invalid format for images');
      }
    } else if (Array.isArray(dto.images)) {
      existingImages = dto.images;
    }

    // Add newly uploaded images
    const newImages = (files || []).map((file, i) => ({
      id: i+1, 
      url: `/uploads/${file.filename}`,
      alt: dto?.alt[`${i}`],
    }));

    const updatedImages = [...existingImages, ...newImages];


    const DTO = {
      name: dto.name,
      description: dto.description,
      meta_title: dto.meta_title,
      meta_description: dto.meta_description,
      meta_keywords: dto.meta_keywords,
      department: department,
    };

    if(updatedImages?.length > 1) DTO['images'] = updatedImages


    // Save updates
    await this.projctRepository.update(id, DTO);
    const updatedProject = await this.projctRepository.findOne({ where: { id }, });
    // updatedProject.images = (updatedProject.images || []).map((img, i) => ({ id: img.id || i + 1, alt: img.alt, url: img.url }));

    return updatedProject;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.projectsService.remove(+id);
  }
}
