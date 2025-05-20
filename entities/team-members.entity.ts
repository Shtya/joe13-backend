import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('team_members')
export class TeamMember {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('jsonb')
  name: { en: string; ar: string }; 

  @Column('jsonb')
  position: { en: string; ar: string }; 

  @Column('jsonb')
  bio: { en: string; ar: string }; 

  @Column()
  image_url: string;

  @Column()
  image_alt: string;

  @Column({nullable : true , default : 0})
  order: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
