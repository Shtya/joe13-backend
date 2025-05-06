import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('settings')
export class Setting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'jsonb' })
  site_name: { en: string; ar: string };

  @Column()
  site_logo_url: string;

  @Column()
  site_logo_alt: string

  @Column()
  favicon_url: string;

  @Column()
  favicon_alt: string

  @Column()
  facebook_url: string;

  @Column()
  instagram_url: string;

  @Column()
  twitter_url: string;

  @Column()
  linkedin_url: string;

  @Column({ type: 'jsonb' })
  address: { en: string; ar: string };

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  working_hours: string

  @Column({ type: 'jsonb' })
  about_us_footer: { en: string; ar: string };

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
