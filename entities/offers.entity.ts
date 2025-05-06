import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Department } from './departments.entity';

@Entity('offers')
export class OffersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'jsonb' })
  name: { en: string; ar: string };

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'decimal' })
  priceAfterOffers: number;

  @Column({ type: 'varchar', nullable: true })
  image_url: string;

  @Column({ type: 'varchar', nullable: true })
  image_alt: string;

  @Column({ type: 'jsonb' })
  meta_title: { en: string; ar: string };

  @Column({ type: 'jsonb' })
  meta_description: { en: string; ar: string };

  @Column({ type: 'jsonb' })
  meta_keywords: { en: string; ar: string };

  @ManyToOne(() => Department, (department) => department.offers)
  @JoinColumn({ name: 'department_id' })
  department: Department;


  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
