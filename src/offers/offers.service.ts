import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'common/base/base.service';
import { OffersEntity } from 'entities/offers.entity';
import { Repository } from 'typeorm';


@Injectable()
export class OffersService extends BaseService<OffersEntity> {
  constructor(
    @InjectRepository(OffersEntity) private readonly offersRepo: Repository<OffersEntity>,
  ) {
    super(offersRepo)
  }

}
