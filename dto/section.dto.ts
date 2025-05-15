

import { IsString, IsOptional, IsUrl, IsArray, IsBoolean, ValidateNested, IsNotEmpty, } from 'class-validator';
  import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';


export class LocalizedField {
  @IsString({ message: 'English field (en) must be a string' })
  @IsNotEmpty({ message: 'English field (en) is required' })
  en: string;

  @IsString({ message: 'Arabic field (ar) must be a string' })
  @IsNotEmpty({ message: 'Arabic field (ar) is required' })
  ar: string;
}




  
  export class CreateSectionDto {
  
	@ValidateNested({ message: 'Title must be a valid object with "en" and "ar"' })
	@Type(() => LocalizedField)
	title: LocalizedField;
  
	@ValidateNested({ message: 'Content must be a valid object with "en" and "ar"' })
	@Type(() => LocalizedField)
	content: LocalizedField;
  
	@IsString({ message: 'Image URL must be a valid URL' })
	image_url: string;
  
	@IsString({ message: 'Image alt must be a string' })
	@IsNotEmpty({ message: 'Image alt is required' })
	image_alt: string;
	
	@IsString({ message: 'Slug must be a string' })
	@IsOptional()
	slug?: string;
  
	@IsBoolean({ message: 'is_active must be a boolean (true or false)' })
	@IsOptional()
	is_active?: boolean;
  }
  




export class UpdateSectionDto extends PartialType(CreateSectionDto) {}
