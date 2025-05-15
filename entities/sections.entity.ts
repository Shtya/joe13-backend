import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,} from 'typeorm';

@Entity('sections')
export class Section {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'jsonb' })
  title: { en: string; ar: string };

  @Column({ type: 'jsonb' })
  content: { en: string; ar: string };

  @Column()
  image_url: string;

  @Column()
  image_alt: string;

  @Column({ unique : true , nullable: true })
  slug: string;

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
