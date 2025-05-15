import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('page_meta')
  export class PageMeta {
	@PrimaryGeneratedColumn()
	id: number;
  
	@Column({ unique: true })
	slug: string; // e.g., "home", "about-us", "contact"
  
	@Column({ type: 'jsonb', nullable: true })
	title: { en: string; ar: string };
  
	@Column({ type: 'jsonb', nullable: true })
	description: { en: string; ar: string };
  
	@Column('text', { array: true, nullable: true })
	keywords: string[];
  
	@Column({ type: 'text', nullable: true })
	custom_head_script: string; 
  
	@Column({ type: 'text', nullable: true })
	custom_body_script: string; 
  
	@Column({ type: 'jsonb', nullable: true })
	og_tags: {
	  title?: string;
	  description?: string;
	  image?: string;
	  url?: string;
	  type?: string;
	};
  
  
	@CreateDateColumn()
	created_at: Date;
  
	@UpdateDateColumn()
	updated_at: Date;
  }
  