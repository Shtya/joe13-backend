// src/careers/careers.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCareerDto, UpdateCareerDto } from 'dto/careers.dto';
import { Repository } from 'typeorm';
import { appendBaseUrl } from 'utils/baseurl_image';
import { slugify } from 'utils/slugify';
import { unlink } from 'fs/promises'; // Async file deletion
import { Career } from 'entities/careers.entity';
import { BaseService } from 'common/base/base.service';


@Injectable()
export class CareersService extends BaseService<Career> {
  constructor(
    @InjectRepository(Career) private careerRepository: Repository<Career>,
  ) {
    super(careerRepository);
  }
  

}
