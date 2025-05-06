import { IsNotEmpty, IsString, IsUrl, IsObject } from 'class-validator';

export class CreatePartnerDto {
  @IsObject()
  @IsNotEmpty()
  name: { en: string; ar: string };

  @IsString()
  @IsNotEmpty()
  logo_url: string;

  @IsString()
  @IsNotEmpty()
  logo_alt:string

  @IsString()
  website_url?: string;
}


import { PartialType } from '@nestjs/mapped-types';
export class UpdatePartnerDto extends PartialType(CreatePartnerDto) {}
