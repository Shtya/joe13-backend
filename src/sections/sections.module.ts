import { Module } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { Section } from 'entities/sections.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SectionController } from './sections.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Section])],
  controllers: [SectionController],
  providers: [SectionsService],
})
export class SectionsModule {}
