import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'common/base/base.service';
// import { CreateServicesDto } from 'dto/services.dto';
import { Service } from 'entities/services.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServicesService extends BaseService<Service> {
  constructor(
    @InjectRepository(Service) private readonly serviceRepository: Repository<Service>,
  ) {
    super(serviceRepository)
  }

  async findOneBySlug(slug: string) {
    const service = await this.serviceRepository.findOne({ where: { slug  } });

    console.log(slug , service)
    if (!service) {
      throw new NotFoundException(`Service with ID ${slug} not found`);
    }
    return service;
  }

}
