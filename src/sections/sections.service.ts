import { Injectable } from '@nestjs/common';
import { BaseService } from 'common/base/base.service';
import { Section } from 'entities/sections.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SectionsService extends BaseService<Section> {
  constructor(
    @InjectRepository(Section) private sectionRepo: Repository<Section>,
  ) {
    super(sectionRepo);
  }
}
