import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsOptional()
  address?: string;

  @IsNotEmpty({ message: 'Phone is required' })
  phone: string;

  @IsIn(['general', 'career', 'offers'], {
    message: 'Type must be one of: general, career, offers',
  })
  type: 'general' | 'career' | 'offers';

  // General
  @IsOptional()
  message?: string;

  // Offers
  @IsOptional()
  offers_name?: string;

  @IsOptional()
  offers_price?: string;

  // Career
  @IsOptional()
  career_file?: string;

  // ✅ new field for photo upload
  @IsOptional()
  personal_photo?: string;
}
