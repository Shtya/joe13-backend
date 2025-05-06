import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from 'entities/images.entity';

@Injectable()
export class ImagesService {
    constructor(
      @InjectRepository(Image) private imageRepo: Repository<Image>,
    ) {}
  

  async updateImage(id: number, data: Partial<Image>) {
    const image = await this.imageRepo.findOne({ where: { id } });
    if (!image) throw new NotFoundException('Image not found');

    Object.assign(image, data);
    await this.imageRepo.save(image);

    return { message: 'Image updated successfully' };
  }

  async deleteImage(id: number) {
    const image = await this.imageRepo.findOne({ where: { id } });
    if (!image) throw new NotFoundException('Image not found');

    await this.imageRepo.delete(id);

    return { message: 'Image deleted successfully' };
  }

  createImage(data: Partial<Image>) {
    const image = this.imageRepo.create(data);
    return this.imageRepo.save(image);
  }

    // Get All Images
    getAllImages() {
      return this.imageRepo.find({ relations: ['project'] });
    }

}
