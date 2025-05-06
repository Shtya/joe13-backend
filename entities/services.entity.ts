import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('services')
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  tag: string;

  @Column({ unique: true })
  slug: string;

  @Column('text')
  description: string;

  @Column()
  image_url: string;

  @Column()
  image_alt: string;

  @Column()
  meta_title: string;

  @Column()
  meta_description: string;

  @Column()
  meta_keywords: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
