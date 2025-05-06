import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('blogs')
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type_blog: string;

  @Column()
  slug: string;

  @Column('jsonb', { nullable: true })
  title: { en: string; ar: string };

  @Column('jsonb', { nullable: true })
  content: { en: string; ar: string };

  @Column('jsonb', { nullable: true })
  meta_title: { en: string; ar: string };

  @Column('jsonb', { nullable: true })
  meta_description: { en: string; ar: string };

  @Column('jsonb', { nullable: true })
  meta_keywords: { en: string; ar: string };


  @Column()
  image_url: string;

  @Column()
  image_alt: string;


  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
