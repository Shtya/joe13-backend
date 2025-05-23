import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Department } from './departments.entity';

export enum BlogStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

@Entity('blogs')
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique : true})
  slug: string;

  @Column('jsonb', { nullable: true })
  title: { en: string; ar: string };

  @Column('jsonb', { nullable: true })
  content: { en: string; ar: string };

  @Column()
  meta_title: string;

  @Column()
  meta_description: string;

  @Column()
  author?: string;

  @Column({
    type: 'enum',
    enum: BlogStatus,
    default: BlogStatus.DRAFT,
  })
  status: BlogStatus;

  @Column({ nullable: true, type: 'timestamp' })
  published_at?: Date;

  // Tags array for flexible tagging (optional)
  @Column('text', { array: true, nullable: true })
  tags?: string[];

  @Column({ default: 0 })
  views_count: number;

  @Column('text', { array: true })
  meta_keywords: string[];

  @ManyToOne(() => Department, (department) => department.projects)
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @Column()
  image_url: string;

  @Column()
  image_alt: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
