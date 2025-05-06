import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ImagesService } from './images.service';
import { Image } from 'entities/images.entity';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Patch('image/:id')
  updateImage(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Partial<Image>,
  ) {
    return this.imagesService.updateImage(id, data);
  }

  @Delete('image/:id')
  deleteImage(@Param('id', ParseIntPipe) id: number) {
    return this.imagesService.deleteImage(id);
  }

  
  
  @Post('image')
  createImage(@Body() body: Partial<Image>) {
    return this.imagesService.createImage(body);
  }

  @Get('images')
  getAllImages() {
    return this.imagesService.getAllImages();
  }

}
