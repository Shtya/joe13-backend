import { 
  IsString, 
  IsOptional, 
  IsArray, 
  ValidateNested, 
  IsObject, 
  IsNumber, 
  IsBoolean 
} from 'class-validator';
import { Type } from 'class-transformer';

class MetaDto {
  @IsOptional() @IsString() title?: string;
  @IsOptional() @IsString() description?: string;
  @IsOptional() @IsArray() @IsString({ each: true }) keywords?: string[];
  @IsOptional() @IsString() canonicalUrl?: string;

  @IsOptional() @IsString() ogTitle?: string;
  @IsOptional() @IsString() ogDescription?: string;
  @IsOptional() @IsNumber() ogImage?: number | any;
  @IsOptional() @IsString() ogUrl?: string;
  @IsOptional() @IsString() ogType?: string;

  @IsOptional() @IsObject() structuredData?: any;

  @IsOptional() @IsString() headScript?: string;
  @IsOptional() @IsString() bodyScript?: string;
}


class SectionDto {
  @IsString()
  id: string;

  @IsString()
  type: string;

  @IsOptional()
  image?: number | any;

  @IsOptional()
  @IsObject()
  title?: Record<string, any>;

  @IsOptional()
  @IsObject()
  content?: Record<string, any>;

  list?: {
  ar?: string[];
  en?: string[];
};

list_Object?: {
  ar?: string[];
  en?: string[];
};

objectData?: {
  ar?: Record<string, any>;
  en?: Record<string, any>;
};


  @IsOptional()
  @IsNumber()
  position?: number;

  @IsOptional()
  @IsBoolean()
  visible?: boolean;
}

export class CreatePageDto {
  @IsString()
  slug: string;

  @IsString()
  title: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => MetaDto)
  meta?: MetaDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SectionDto)
  sections?: SectionDto[];
}

// DTO للتحديث يكون جميع الحقول اختيارية
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePageDto extends PartialType(CreatePageDto) {}





