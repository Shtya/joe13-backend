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
    list?: string[];
    objectData?: Record<string, any>;
    position?: number;
    visible?: boolean;
  }[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
