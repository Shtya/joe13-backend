import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'common/base/base.service';
import { Image } from 'entities/images.entity';
import { Project } from 'entities/projects.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService extends BaseService<Project> {
  constructor(
    @InjectRepository(Project) private projectRepo: Repository<Project>,
  ) {
    super(projectRepo)
  }



  // projects.service.ts
async findOneBySlug(slug: string) {
  return this.projectRepo.findOne({ where: { slug } , relations : ['department'] })
}



  async removeImageById(projectId: number, imageId: number) {
    const project = await this.projectRepo.findOne({ where: { id: projectId } });
  
    if (!project) throw new NotFoundException(`Project with id ${projectId} not found`);
  
    project.images = (project.images || []).filter(img => img.id !== imageId);
  
    await this.projectRepo.save(project);
    return project;
  }
  
  
  async addImages(projectId: number, images: { url: string; alt: string }[]) {
    const project = await this.projectRepo.findOne({ where: { id: projectId } });
  
    if (!project) throw new NotFoundException(`Project with id ${projectId} not found`);
  
    // Ensure images array exists
    project.images = Array.isArray(project.images) ? project.images : [];
  
    // Generate unique IDs and add new images
    const maxId = project.images.reduce((max, img) => (img.id > max ? img.id : max), 0);
    const newImages = images.map((img, index) => ({
      id: maxId + index + 1,
      ...img,
    }));
  
    project.images.push(...newImages);

    await this.projectRepo.save(project);
    return project;
  }
  
}
