import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity('pages')
export class Page {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @Index()
  slug: string;

  @Column()
  title: string;

  // SEO meta data (legacy flat fields + bilingual en/ar)
  @Column({ type: 'jsonb', nullable: true })
  meta: {
    title?: string;
    description?: string;
    keywords?: string[];
    canonicalUrl?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: any;
    ogUrl?: string;
    ogType?: string;
    structuredData?: any;
    headScript?: string;
    bodyScript?: string;
    en?: Record<string, any>;
    ar?: Record<string, any>;
  };

  // Sections of the page
  @Column({ type: 'jsonb', nullable: true })
  sections: {
    id: string;
    type: string;
    image?: {
      url: string;
      alt?: string;
    };
    title?: { ar?: any; en?: any };
    content?: { ar?: any; en?: any };
    list?: {
      ar?: string[];
      en?: string[];
    };
    list_Object?: {
      ar?: any[];
      en?: any[];
    };
    objectData?: {
      ar?: Record<string, any>;
      en?: Record<string, any>;
    };
    ui?: {
      ar?: Record<string, any>;
      en?: Record<string, any>;
    };
    position?: number;
    visible?: boolean;
  }[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
