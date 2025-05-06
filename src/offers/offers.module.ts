import { Module } from '@nestjs/common';
import { OffersService } from './offers.service';
import { OffersController } from './offers.controller';
import { Department } from 'entities/departments.entity';
import { OffersEntity } from 'entities/offers.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ OffersEntity, Department])],
  controllers: [OffersController],
  providers: [OffersService],
})
export class OffersModule {}
