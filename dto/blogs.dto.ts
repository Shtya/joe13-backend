import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty, IsDateString, IsOptional } from 'class-validator';

export class CreateBlogDto {
  @IsString()
  type_blog: string;

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

  @IsString()
  image_url: string;

  @IsString()
  image_alt: string;

  @IsString()
  @IsOptional()
  slug?: string;

}

export class UpdateBlogDto extends PartialType(CreateBlogDto) {}
