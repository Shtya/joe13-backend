import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('contacts')
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  address?: string;

  @Column()
  phone: string;

  @Column({ nullable: true })
  message?: string;

  @Column({ nullable: true })
  offers_name?: string;

  @Column({ type: 'float', nullable: true })
  offers_price?: number;

  @Column({ nullable: true })
  career_file?: string;

  @Column({ nullable: true })
  personal_photo?: string;

  @Column()
  type: 'general' | 'career' | 'offers';

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
