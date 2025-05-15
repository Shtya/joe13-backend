import { Injectable } from '@nestjs/common';
import { BaseService } from 'common/base/base.service';
import { PageMeta } from 'entities/page-meta.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PageMetaService   extends BaseService<PageMeta> {
  constructor(
    @InjectRepository(PageMeta) private pageMetaRepo: Repository<PageMeta>,
  ) {
    super(pageMetaRepo);
  }



  async findOneBySlug(slug: string) {
    return this.pageMetaRepo.findOne({
      where: { slug },
    });
  }
  
}
