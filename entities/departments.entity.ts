import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany,} from 'typeorm';
import { Project } from './projects.entity';
import { OffersEntity } from './offers.entity';


@Entity('departments')
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'jsonb' })
  name: { en: string; ar: string };

  @Column({ type: 'jsonb' })
  description: { en: string; ar: string };

  @Column({ type: 'varchar', nullable: true })
  image_url: string;

  @Column({ type: 'varchar', nullable: true })
  image_alt: string;

  @OneToMany(() => Project, (project) => project.department)
  projects: Project[];

  @OneToMany(() => OffersEntity, (offers) => offers.department)
  offers: OffersEntity[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
