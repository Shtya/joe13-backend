import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,} from 'typeorm';

@Entity('sections')
export class Section {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'jsonb' })
  section_name: { en: string; ar: string };

  @Column({ type: 'jsonb' })
  title: { en: string; ar: string };

  @Column({ type: 'jsonb' })
  content: { en: string; ar: string };

  @Column()
  image_url: string;

  @Column()
  image_alt: string;

  @Column({ type: 'jsonb', nullable: true })
  meta_title: { en: string; ar: string };

  @Column({ type: 'jsonb', nullable: true })
  meta_description: { en: string; ar: string };

  @Column('text', { array: true, nullable: true })
  meta_keywords: string[];

  @Column({ nullable: true })
  slug: string;

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
