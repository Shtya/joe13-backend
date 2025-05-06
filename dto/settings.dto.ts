import { IsString, IsEmail, IsObject } from 'class-validator';

export class CreateSettingDto {
  @IsObject()
  site_name: { en: string; ar: string };

  site_logo_url: any;

  @IsString()
  site_logo_alt: string;

  favicon_url: any;

  @IsString()
  favicon_alt: string;

  @IsString()
  facebook_url: string;

  @IsString()
  instagram_url: string;

  @IsString()
  twitter_url: string;

  @IsString()
  linkedin_url: string;

  @IsObject()
  address: { en: string; ar: string };

  @IsString()
  phone: string;

  @IsEmail()
  email: string;

  @IsString()
  working_hours: string;

  @IsObject()
  about_us_footer: { en: string; ar: string };
}


import { PartialType } from '@nestjs/mapped-types';
export class UpdateSettingDto extends PartialType(CreateSettingDto) {}
