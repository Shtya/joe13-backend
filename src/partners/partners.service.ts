import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from 'common/base/base.service';
import { Partner } from 'entities/partners.entity';

@Injectable()
export class PartnersService extends BaseService<Partner> {
  constructor(
    @InjectRepository(Partner)
    private readonly partnerRepo: Repository<Partner>,
  ) {
    super(partnerRepo)
  }

}
