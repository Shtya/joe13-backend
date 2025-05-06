// src/careers/career.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('careers')
export class Career {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('jsonb')
  title: { en: string; ar: string }; // Multi-language support

  @Column('jsonb')
  description: { en: string; ar: string }; // Multi-language support

  @Column('jsonb')
  requirments: { en: string; ar: string }; // Multi-language support

  @Column('jsonb')
  benefits: { en: string; ar: string }; // Multi-language support
  
  @Column()
  image_url: string;

  @Column()
  image_alt: string;

  @Column('jsonb')
  meta_title: { en: string; ar: string }; // Multi-language support

  @Column('jsonb')
  meta_description: { en: string; ar: string }; // Multi-language support

  @Column('jsonb')
  meta_keywords: { en: string; ar: string }; // Multi-language support

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
