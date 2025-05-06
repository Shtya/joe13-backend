// src/dto/careers.dto.ts
export class CreateCareerDto {
	title: { en: string; ar: string };
	description: { en: string; ar: string };
	requirments: { en: string; ar: string };
	benefits: { en: string; ar: string };
	image_url?: string;
	image_alt?: string;
	meta_title: { en: string; ar: string };
	meta_description: { en: string; ar: string };
	meta_keywords: { en: string; ar: string };
  }
  
  export class UpdateCareerDto {
	title?: { en: string; ar: string };
	description?: { en: string; ar: string };
	requirments?: { en: string; ar: string };
	benefits?: { en: string; ar: string };
	image_url?: string;
	image_alt?: string;
	meta_title?: { en: string; ar: string };
	meta_description?: { en: string; ar: string };
	meta_keywords?: { en: string; ar: string };
  }
  