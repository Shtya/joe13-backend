import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Page } from 'entities/pages.entity';
import { PageController } from './pages.controller';
import { PageService } from './pages.service';
import { Image } from 'entities/images.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Page , Image])],
  controllers: [PageController],
  providers: [PageService],
})
export class PagesModule {}
