import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

type Localized = {
  en: string;
  ar: string;
};

@Entity('services')
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @Index()
  slug: string;

  @Column({ type: 'jsonb' })
  title: Localized;

  @Column({ type: 'jsonb' })
  subTitle: Localized;


  @Column({ type: 'jsonb', nullable: true })
  image: { url: string; alt: '' };

  // SEO meta data
  @Column({ type: 'jsonb', nullable: true })
  meta: {
    // SEO Basics
    title?: string;
    description?: string;
    keywords?: string[];
    canonicalUrl?: string;

    // Open Graph
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogUrl?: string;
    ogType?: string;

    // Structured Data / Schema.org
    structuredData?: any;

    // Custom Scripts
    headScript?: string;
    bodyScript?: string;
  };

  @Column({ type: 'jsonb', nullable: true })
  hero: {
    serviceName: Localized;
    title: Localized;
    images: string[]; // must be 3 images
    attr: { key: Localized; value: Localized }[];
  };

  @Column({ type: 'jsonb', nullable: true })
  partners: Array<{
    url: string;
    alt: string;
  }>;

  @Column({ type: 'jsonb', nullable: true })
  benefits: {
    title: Localized;
    subTitle: Localized;
    feature: Localized[];
    image: { url: string; alt: '' };
  };

  @Column({ type: 'jsonb', nullable: true })
  impact: {
    title: Localized;
    subTitle: Localized;
    statics: Array<{
      name: Localized;
      count: string;
      desc: Localized;
    }>;
  };

  @Column({ type: 'jsonb', nullable: true })
  faqs: {
    title: Localized;
    subTitle: Localized;
    list: Array<{
      question: Localized;
      answer: Localized;
    }>;
  };

  @Column({ type: 'jsonb', nullable: true })
  call: {
    title: Localized;
    subTitle: Localized;
    content: Localized;
    image: { url: string; alt: '' };
  };

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
