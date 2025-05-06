import { IsEmail, IsIn, IsNotEmpty, IsOptional, IsNumber, IsString } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsOptional()
  address?: string;

  @IsNotEmpty({ message: 'Phone is required' })
  phone: string;

  @IsIn(['general', 'career', 'offers'], { message: 'Type must be one of: general, career, offers' })
  type: 'general' | 'career' | 'offers';

  // General
  @IsOptional()
  message?: string;

  // Career
  @IsOptional()
  offers_name?: string;

  @IsOptional()
  @IsString({ message: 'Offer price must be a string' })
  offers_price?: string;

  // Offers
  @IsOptional()
  career_file?: string;
}
