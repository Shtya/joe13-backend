import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'common/base/base.service';
import { mergeSeoMeta } from 'common/merge-seo-meta';
import { Service } from 'entities/services.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServicesService extends BaseService<Service> {
  constructor(
    @InjectRepository(Service) private readonly serviceRepository: Repository<Service>,
  ) {
    super(serviceRepository)
  }

  async update(id: any, dto: any) {
    const service = await this.serviceRepository.findOne({ where: { id } });
    if (!service) throw new NotFoundException(`Service ${id} not found`);
    if (dto.meta) {
      dto.meta = mergeSeoMeta(service.meta || {}, dto.meta);
    }
    return super.update(id, dto);
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
