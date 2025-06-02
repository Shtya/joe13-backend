import {
  IsString,
  IsNotEmpty,
  IsArray,
  ValidateNested,
  IsUrl,
  ArrayMinSize,
  ArrayMaxSize,
  IsObject,
} from 'class-validator';
import { Type } from 'class-transformer';



class HeroAttrDto {
  key: {en:string , ar:string} ;

  value: {en:string , ar:string} ;
}

class PartnerDto {
  @IsString()
  url: string;

  @IsString()
  alt: string;
}



class ImpactStatDto {
  name: {en:string , ar:string} ;

  @IsString()
  @IsNotEmpty()
  count: string;

  desc: {en:string , ar:string} ;
}

class FaqItemDto {
  question: {en:string , ar:string} ;

  answer: {en:string , ar:string} ;
}

class CallImageDto {
  @IsString()
  url: string;

  @IsString()
  alt: string;
}

// === Nested Sections ===

class HeroDto {
  serviceName: {en:string , ar:string};

  @IsNotEmpty() @IsObject()
  title: {en:string , ar:string} ;

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
  @IsNotEmpty() @IsObject()
  title: {ar:string , en:string};

  @IsNotEmpty() @IsObject()
  subTitle: {ar:string , en:string};

  @IsArray()
  @ValidateNested({ each: true })
  feature: any[];

  image: any;
}

class ImpactDto {

  @IsNotEmpty() @IsObject()
  title: {en:string , ar:string} ;

  @IsNotEmpty() @IsObject()
  subTitle: {en:string , ar:string} ;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImpactStatDto)
  statics: ImpactStatDto[];
}

class FaqsDto {

  @IsNotEmpty() @IsObject()
  title: {en:string , ar:string} ;

  @IsNotEmpty() @IsObject()
  subTitle: {en:string , ar:string} ;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FaqItemDto)
  list: FaqItemDto[];
}

class CallDto {
  @IsNotEmpty() @IsObject()
  title: {en:string , ar:string} ;

  @IsNotEmpty() @IsObject()
  subTitle: {en:string , ar:string} ;

  @IsNotEmpty() @IsObject()
  content: {en:string , ar:string} ;

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


  @IsNotEmpty() @IsObject()
  title: {en:string , ar:string} ;

  image: any

  @IsNotEmpty() @IsObject()
  subTitle: {en:string , ar:string} ;

  @Type(() => MetaDto)
  meta: MetaDto;

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

  @Type(() => ImpactDto)
  impact: ImpactDto;

  @Type(() => FaqsDto)
  faqs: FaqsDto;

  @Type(() => CallDto)
  call: CallDto;
}
