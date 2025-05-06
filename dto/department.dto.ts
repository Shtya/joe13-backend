import { IsString, IsOptional, IsNotEmpty } from 'class-validator';
import { Project } from 'entities/projects.entity';

export class CreateDepartmentDto {
  @IsNotEmpty()
  name: { en: string; ar: string };

  @IsNotEmpty()
  description: { en: string; ar: string };

  @IsOptional()
  @IsString()
  image_url?: string;

  @IsOptional()
  @IsString()
  image_alt?: string;
}


export class UpdateDepartmentDto {
  @IsOptional()
  @IsNotEmpty()
  name?: { en: string; ar: string };

  @IsOptional()
  @IsNotEmpty()
  description?: { en: string; ar: string };

  @IsOptional()
  @IsString()
  image_url?: string;

  @IsOptional()
  @IsString()
  image_alt?: string;
}


export class DepartmentDto {
  id: number;

  name: { en: string; ar: string };

  description: { en: string; ar: string };

  @IsOptional()
  @IsString()
  image_url?: string;

  @IsOptional()
  @IsString()
  image_alt?: string;

  projects: Project[]; // If you want to include projects

  created_at: Date;
  updated_at: Date;
}
