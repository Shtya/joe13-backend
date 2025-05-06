import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'common/base/base.service';
import { Setting } from 'entities/settings.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SettingsService extends BaseService<Setting> {
  constructor(
    @InjectRepository(Setting)
    private readonly settingRepo: Repository<Setting>,
  ) {
    super(settingRepo)
  }

}
