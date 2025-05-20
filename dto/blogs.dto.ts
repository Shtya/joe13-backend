import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty, IsDateString, IsOptional } from 'class-validator';

export class CreateBlogDto {

  type_blog: any;

  @IsOptional()
  title: { en: string; ar: string };

  @IsOptional()
  content: { en: string; ar: string };

  @IsOptional()
  meta_title: { en: string; ar: string };

  @IsOptional()
  meta_description: { en: string; ar: string };

  @IsOptional()
  meta_keywords: { en: string; ar: string };

  image_url: any;

  @IsString()
  image_alt: string;

  @IsString()
  @IsOptional()
  slug?: string;

}

export class UpdateBlogDto extends PartialType(CreateBlogDto) {}
