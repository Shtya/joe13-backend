import { IsString, IsNotEmpty, IsDecimal, IsOptional, IsObject, IsNumber } from 'class-validator';

export class CreateOfferDto {
  @IsObject({ message: 'The name must be an object with English and Arabic keys.' })
  @IsNotEmpty({ message: 'Name in both languages is required.' })
  name: { en: string; ar: string };

  @IsNumber({  }, { message: 'Price must be a valid number.' })
  @IsNotEmpty({ message: 'Price is required.' })
  price: number;

  @IsNumber({  }, { message: 'Price must be a valid number.' })
  @IsNotEmpty({ message: 'Price after offers is required.' })
  priceAfterOffers: number;

  @IsOptional()
  @IsString({ message: 'Image URL must be a string.' })
  image_url: string;

  @IsOptional()
  @IsString({ message: 'Image alt text must be a string.' })
  image_alt: string;

  @IsObject({ message: 'Meta title must be an object with English and Arabic keys.' })
  @IsNotEmpty({ message: 'Meta title in both languages is required.' })
  meta_title: { en: string; ar: string };

  @IsObject({ message: 'Meta description must be an object with English and Arabic keys.' })
  @IsNotEmpty({ message: 'Meta description in both languages is required.' })
  meta_description: { en: string; ar: string };

  @IsObject({ message: 'Meta keywords must be an object with English and Arabic keys.' })
  @IsNotEmpty({ message: 'Meta keywords in both languages are required.' })
  meta_keywords: { en: string; ar: string };

  @IsNotEmpty({ message: 'Department is required.' })
  department_id: any;  
}


  import { PartialType } from '@nestjs/mapped-types';

export class UpdateOfferDto extends PartialType(CreateOfferDto) {}

  