import { IsString, IsOptional, IsArray, IsObject, ValidateNested, IsUrl, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

class LocaleText  {
  @IsString()
  @IsNotEmpty()
  en: string;

  @IsString()
  @IsNotEmpty()
  ar: string;
}

class ImageDto {
  url: string;

  alt: string;
}

class MetaData {
  @IsOptional()
  @IsString({ message: 'Meta title must be a string' })
  title?: string;

  @IsOptional()
  @IsString({ message: 'Meta description must be a string' })
  description?: string;

  @IsOptional()
  @IsArray({ message: 'Keywords must be an array of strings' })
  @IsString({ each: true, message: 'Each keyword must be a string' })
  keywords?: string[];

  @IsOptional()
  @IsObject({ message: 'Custom scripts must be an object with head and body' })
  custom_scripts?: {
    head: string;
    body: string;
  };
}

class UrlObject {
  url: string;

  @IsString({ message: 'Alt text is required' })
  alt: string;
}

export class CreateSettingDto {
  @IsOptional()
  @IsString({ message: 'Slug must be a string' })
  slug?: string;

  @ValidateNested()
  @Type(() => LocaleText)
  site_name: LocaleText;

  @IsOptional()
  @ValidateNested()
  @Type(() => UrlObject)
  site_logo?: UrlObject;

  @IsOptional()
  @ValidateNested()
  @Type(() => UrlObject)
  favicon?: UrlObject;

  @IsOptional()
  @IsObject({ message: 'Social media must be an object' })
  social_media?: SocialMedia;

  @IsOptional()
  @IsObject({ message: 'Contact us must be an object' })
  contact_us?: ContactUs;

  @IsOptional()
  @IsObject({ message: 'Branch must contain Arabic and English arrays' })
  branch?: {
    en: string[];
    ar: string[];
  };

  @IsOptional()
  @ValidateNested()
  @Type(() => MetaData)
  meta?: MetaData;

  @ValidateNested()
  @Type(() => LocaleText)
  copyright: LocaleText;

  @ValidateNested()
  @Type(() => LocaleText)
  about_us_footer: LocaleText;
}



import { PartialType } from '@nestjs/mapped-types';
import { ContactUs, SocialMedia } from 'entities/settings.entity';
export class UpdateSettingDto extends PartialType(CreateSettingDto) {}
