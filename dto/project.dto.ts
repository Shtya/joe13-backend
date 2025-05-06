import { IsObject, IsOptional, ValidateNested, IsArray, IsNumber, IsString, } from 'class-validator';
  import { Type } from 'class-transformer';
  
  class LocalizedString {
	@IsOptional({ message: 'English value is optional but recommended' })
	en: string;
  
	@IsOptional({ message: 'Arabic value is optional but recommended' })
	ar: string;
  }
  
  export class CreateProjectDto {
	@IsObject({ message: 'Name must be a JSON object with en and ar' })
	@ValidateNested()
	@Type(() => LocalizedString)
	name: LocalizedString;
  
	@IsObject({ message: 'Description must be a JSON object with en and ar' })
	@ValidateNested()
	@Type(() => LocalizedString)
	description: LocalizedString;
  
	@IsObject({ message: 'Meta title must be a JSON object with en and ar' })
	@ValidateNested()
	@Type(() => LocalizedString)
	meta_title: LocalizedString;
  
	@IsObject({ message: 'Meta description must be a JSON object with en and ar' })
	@ValidateNested()
	@Type(() => LocalizedString)
	meta_description: LocalizedString;
  
	@IsObject({ message: 'Meta keywords must be a JSON object with en and ar' })
	@ValidateNested()
	@Type(() => LocalizedString)
	meta_keywords: LocalizedString;
  
	@IsString({ message: 'Department ID must be a string' })
	department_id: string;
  
	images?: { url: string; alt: string }[];
  }


  import { PartialType } from '@nestjs/mapped-types';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {}

  