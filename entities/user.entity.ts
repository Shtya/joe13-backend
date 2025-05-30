import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;
  

  @Column()
  password: string;


  @Column({default : 'active'})
  status: string;
  
  @Column({default : null})
  resetPasswordExpires: Date;

  @Column({default : null})
  resetPasswordToken: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;



}
