import { Module } from '@nestjs/common';
import { PageMetaService } from './page-meta.service';
import { PageMetaController } from './page-meta.controller';
import { PageMeta } from 'entities/page-meta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PageMeta])],
  controllers: [PageMetaController],
  providers: [PageMetaService],
})
export class PageMetaModule {}
