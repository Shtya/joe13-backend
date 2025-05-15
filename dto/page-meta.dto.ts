

import { IsOptional, IsString, IsArray, IsObject } from 'class-validator';

export class CreatePageMetaDto {
  @IsString()
  slug: string;

  @IsOptional()
  @IsObject()
  title?: { en: string; ar: string };

  @IsOptional()
  @IsObject()
  description?: { en: string; ar: string };

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  keywords?: string[];

  @IsOptional()
  @IsString()
  custom_head_script?: string;

  @IsOptional()
  @IsString()
  custom_body_script?: string;

  @IsOptional()
  @IsObject()
  og_tags?: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
  };
}



import { PartialType } from '@nestjs/mapped-types';

export class UpdatePageMetaDto extends PartialType(CreatePageMetaDto) {}
