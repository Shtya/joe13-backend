import { Controller, Post, Get, Param, Body, Patch, Delete, Req, Query, UseInterceptors, UploadedFile, BadRequestException,} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'common/multer.config';

  
import { OffersService } from './offers.service';
import { CreateOfferDto, UpdateOfferDto } from 'dto/offers.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from 'entities/departments.entity';
import { Repository } from 'typeorm';
import { OffersEntity } from 'entities/offers.entity';

@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService,
    @InjectRepository(Department) private departmentRepository: Repository<Department>,
    @InjectRepository(OffersEntity) private offerRepository: Repository<OffersEntity>,
  ) {}

  // Create Offer
  @Post()
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async create(@Body() dto: CreateOfferDto , @UploadedFile() file: any) {

    const department = await this.departmentRepository.findOne({ where: { id: dto.department_id }, });
    if (!department) throw new BadRequestException( `Department with id ${dto.department_id} does not exist`, );
    
    console.log(department)
    dto.department_id  = department 
    if (file) {
      dto.image_url = `/uploads/${file.filename}`;
      if(!dto.image_alt) dto.image_alt = dto.name?.en || dto.name?.ar;
    }

    const offer = this.offerRepository.create({ ...dto, department,  });
    return this.offerRepository.save(offer);
  
  }
  

  @Get()
  async findAll( @Query() query) {
    const { page, limit, search, sortBy, sortOrder, ...restQueryParams } = query;

    return this.offersService.findAll(
      'offers',
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

  // Get one Offer by ID
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.offersService.findOne(id);
  }


  
  @Patch(':id')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async update( @Param('id') id: number, @Body() dto: UpdateOfferDto,@UploadedFile() file: any ) {
    if (file) {
      dto.image_url = `/uploads/${file.filename}`;
      if(!dto.image_alt) dto.image_alt = dto.name?.en || dto.name?.ar;
    }
    return this.offersService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.offersService.remove(id);
  }
}
