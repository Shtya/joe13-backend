// src/seeds/seeder.run.ts
import { DataSource } from 'typeorm'; // Import DataSource for direct database access
import { Seeder } from './seeder';  // Import your Seeder class
import { Blog } from 'entities/blogs.entity';
import { Career } from 'entities/careers.entity';
import { TeamMember } from 'entities/team-members.entity';
import { Section } from 'entities/sections.entity';
import { Department } from 'entities/departments.entity';
import { Project } from 'entities/projects.entity';
import { Image } from 'entities/images.entity';
import { Contact } from 'entities/contact-us.entity';
import { OffersEntity } from 'entities/offers.entity';
import { Partner } from 'entities/partners.entity';
import { PageMeta } from 'entities/page-meta.entity';
import { Page } from 'entities/pages.entity';
import { Setting } from 'entities/settings.entity';
import { Service } from 'entities/services.entity';


async function run() {
  console.log("Seeding started");

  // Use DataSource directly for TypeORM connection
  const dataSource = new DataSource({
    type: 'postgres',
    host: "aws-0-eu-central-1.pooler.supabase.com",
    port: 5432,
    username: "postgres.sghvszzxubiyocwhfczj",
    password: "ahmedshtya-083",
    database: "joe13",
    entities: [Blog , Career , Setting , PageMeta ,Service , TeamMember , Section , Department , Project  , Image , Contact , OffersEntity , Partner , Page ],
    synchronize: true,
    logging: true,
  });


  try {
    await dataSource.initialize();
    const seeder = new Seeder(dataSource); 
    await seeder.run(); 
    console.log('Seeding completed successfully!');

  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  } finally {
    await dataSource.destroy(); 
  }
}

run();
