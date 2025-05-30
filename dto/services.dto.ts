import {
  IsString,
  IsNotEmpty,
  IsArray,
  ValidateNested,
  IsUrl,
  ArrayMinSize,
  ArrayMaxSize,
} from 'class-validator';
import { Type } from 'class-transformer';

// === Reusable types ===
class LocalizedDto {
  @IsString()
  @IsNotEmpty()
  en: string;

  @IsString()
  @IsNotEmpty()
  ar: string;
}

class ImageDto {
  @IsUrl()
  url: string;

  @ValidateNested()
  @Type(() => LocalizedDto)
  alt: LocalizedDto;
}

class HeroAttrDto {
  @ValidateNested()
  @Type(() => LocalizedDto)
  key: LocalizedDto;

  @ValidateNested()
  @Type(() => LocalizedDto)
  value: LocalizedDto;
}

class PartnerDto {
  @IsString()
  url: string;

  @IsString()
  alt: string;
}

class BenefitImageDto {
  @IsUrl()
  url: string;

  @ValidateNested()
  @Type(() => LocalizedDto)
  alt: LocalizedDto;
}

class ImpactStatDto {
  @ValidateNested()
  @Type(() => LocalizedDto)
  name: LocalizedDto;

  @IsString()
  @IsNotEmpty()
  count: string;

  @ValidateNested()
  @Type(() => LocalizedDto)
  desc: LocalizedDto;
}

class FaqItemDto {
  @ValidateNested()
  @Type(() => LocalizedDto)
  question: LocalizedDto;

  @ValidateNested()
  @Type(() => LocalizedDto)
  answer: LocalizedDto;
}

class CallImageDto {
  @IsString()
  url: string;

  @IsString()
  alt: string;
}

// === Nested Sections ===

class HeroDto {
  @ValidateNested()
  @Type(() => LocalizedDto)
  serviceName: LocalizedDto;

  @ValidateNested()
  @Type(() => LocalizedDto)
  title: LocalizedDto;

  @IsArray()
  @ArrayMinSize(3)
  @ArrayMaxSize(3)
  @IsUrl({}, { each: true })
  images: string[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HeroAttrDto)
  attr: HeroAttrDto[];
}

class BenefitsDto {
  @ValidateNested()
  title: any;

  @ValidateNested()
  subTitle: any;

  @IsArray()
  @ValidateNested({ each: true })
  feature: any[];

  @ValidateNested()
  image: any;
}

class ImpactDto {
  @ValidateNested()
  @Type(() => LocalizedDto)
  title: LocalizedDto;

  @ValidateNested()
  @Type(() => LocalizedDto)
  subTitle: LocalizedDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImpactStatDto)
  statics: ImpactStatDto[];
}

class FaqsDto {
  @ValidateNested()
  @Type(() => LocalizedDto)
  title: LocalizedDto;

  @ValidateNested()
  @Type(() => LocalizedDto)
  subTitle: LocalizedDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FaqItemDto)
  list: FaqItemDto[];
}

class CallDto {
  @ValidateNested()
  @Type(() => LocalizedDto)
  title: LocalizedDto;

  @ValidateNested()
  @Type(() => LocalizedDto)
  subTitle: LocalizedDto;

  @ValidateNested()
  @Type(() => LocalizedDto)
  content: LocalizedDto;

  @ValidateNested()
  @Type(() => CallImageDto)
  image: CallImageDto;
}

class MetaDto {
  @IsString() title: string;
  @IsString() description: string;
  @IsArray() @IsString({ each: true }) keywords: string[];
  @IsString() canonicalUrl: string;
  @IsString() ogTitle: string;
  @IsString() ogDescription: string;
  @IsString() ogImage: string;
  @IsString() ogUrl: string;
  @IsString() ogType: string;
  structuredData: any;
  @IsString() headScript: string;
  @IsString() bodyScript: string;
}

// === Main DTO ===
export class CreateServicesDto {
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ValidateNested()
  @Type(() => LocalizedDto)
  title: LocalizedDto;

  image: any

  @ValidateNested()
  @Type(() => LocalizedDto)
  subTitle: LocalizedDto;

  @ValidateNested()
  @Type(() => MetaDto)
  meta: MetaDto;

  @ValidateNested()
  @Type(() => HeroDto)
  hero: HeroDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PartnerDto)
  partners: PartnerDto[];

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => BenefitsDto)
  benefits: any;

  @ValidateNested()
  @Type(() => ImpactDto)
  impact: ImpactDto;

  @ValidateNested()
  @Type(() => FaqsDto)
  faqs: FaqsDto;

  @ValidateNested()
  @Type(() => CallDto)
  call: CallDto;
}
