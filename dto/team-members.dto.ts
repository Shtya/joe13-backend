import { IsString, IsNotEmpty, IsUrl, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PartialType } from '@nestjs/mapped-types';

class LocalizedField {
  @IsString({ message: 'English field (en) must be a string' })
  @IsNotEmpty({ message: 'English field (en) is required' })
  en: string;

  @IsString({ message: 'Arabic field (ar) must be a string' })
  @IsNotEmpty({ message: 'Arabic field (ar) is required' })
  ar: string;
}

export class CreateTeamMemberDto {
  @IsObject({ message: 'Name must be an object with en and ar fields' })
  name: LocalizedField;

  @IsObject({ message: 'Position must be an object with en and ar fields' })
  position: LocalizedField;

  @IsObject({ message: 'Bio must be an object with en and ar fields' })
  bio: LocalizedField;

  @IsUrl({}, { message: 'Image URL must be a valid URL' })
  image_url: string;

  @IsString({ message: 'Image alt must be a string' })
  @IsNotEmpty({ message: 'Image alt is required' })
  image_alt: string;
}


export class UpdateTeamMemberDto extends PartialType(CreateTeamMemberDto) {}
