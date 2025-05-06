import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'common/base/base.service';
import { Department } from 'entities/departments.entity';
import { Project } from 'entities/projects.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentService extends BaseService<Department>  {
  constructor(
    @InjectRepository(Department) private departmentRepository: Repository<Department>,
  ) {
    super(departmentRepository)
  }

  
}
