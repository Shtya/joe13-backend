import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Department } from './departments.entity';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'jsonb' })
  name: { en: string; ar: string };

  @Column({ type: 'jsonb' })
  description: { en: string; ar: string };

  @Column({nullable : true , unique : true})
  slug: string;

  @Column()
  meta_title: string;

  @Column()
  meta_description: string;

  @Column('text', { array: true })
  meta_keywords: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Department, (department) => department.projects)
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @Column({ type: 'jsonb', nullable: true, default: [] })
  images: { url: string; alt: string; id: number }[];
}
