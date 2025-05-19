import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'common/base/base.service';
import { CreatePageDto } from 'dto/pages.dto';
import { Image } from 'entities/images.entity';
import { Page } from 'entities/pages.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PageService extends BaseService<Page> {
  constructor(
    @InjectRepository(Page) private pageRepository: Repository<Page>,
    @InjectRepository(Image) private imageRepository: Repository<Image>,
  ) {
    super(pageRepository);
  }


  async findBySlug(slug: string): Promise<Page> {
  return this.pageRepository.findOne({
    where: { slug },
  });
}


  async customCreate(createPageDto: CreatePageDto) {
    const { meta, sections } = createPageDto;


     if (createPageDto.sections) {
    const sectionIds = createPageDto.sections.map(s => s.id);
    const uniqueIds = new Set(sectionIds);

    if (uniqueIds.size !== sectionIds.length) {
      throw new BadRequestException('Duplicate section id found. Section IDs must be unique.');
    }
  }

    // ✅ معالجة ogImage
    if (meta?.ogImage && typeof meta.ogImage === 'number') {
      const image = await this.imageRepository.findOneBy({ id: meta.ogImage });
      if (!image) {
        throw new NotFoundException(
          `Image with ID ${meta.ogImage} not found for ogImage`,
        );
      }

      meta.ogImage = {
        id: image.id,
        url: image.url,
        alt: image.alt,
        name: image.name,
      };
    }

    // ✅ معالجة كل صورة داخل sections
    if (Array.isArray(sections)) {
      for (const section of sections) {
        if (section.image && typeof section.image === 'number') {
          const image = await this.imageRepository.findOneBy({
            id: section.image,
          });
          if (!image) {
            throw new NotFoundException(
              `Image with ID ${section.image} not found in section ${section.id}`,
            );
          }

          section.image = {
            url: image.url,
            alt: image.alt,
          };
        }
      }
    }

    // حفظ الصفحة
    const page = this.pageRepository.create({
      ...createPageDto,
      meta,
      sections,
    });

    return this.pageRepository.save(page);
  }
}
