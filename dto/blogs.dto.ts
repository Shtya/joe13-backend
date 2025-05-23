import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty, IsDateString, IsOptional, IsArray, IsEnum, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { BlogStatus } from 'entities/blogs.entity';

class LocalizedText {
  @IsString()
  en: string;

  @IsString()
  ar: string;
}

export class CreateBlogDto {
  @IsString()
  slug: string;

  @ValidateNested()
  @Type(() => LocalizedText)
  title: LocalizedText;

  @ValidateNested()
  @Type(() => LocalizedText)
  content: LocalizedText;

  @IsString()
  meta_title: string;

  @IsString()
  meta_description: string;

  @IsString()
  @IsOptional()
  author?: string;

  @IsEnum(BlogStatus)
  @IsOptional()
  status?: BlogStatus;

  @IsDateString()
  @IsOptional()
  published_at?: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];

  @IsArray()
  @IsString({ each: true })
  meta_keywords: string[];

  @IsOptional()
  image_url: string;

  @IsString()
  image_alt: string;

  @IsString()
  departmentId?: string; // will be used to link department by id
}


export class UpdateBlogDto extends PartialType(CreateBlogDto) {}
