import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as path from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Import ConfigModule and ConfigService
import { JwtModule } from '@nestjs/jwt';
import {
  I18nModule,
  AcceptLanguageResolver,
  QueryResolver,
  HeaderResolver,
} from 'nestjs-i18n';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ProjectModule } from './project/project.module';
import { BlogsModule } from './blogs/blogs.module';
import { CareersModule } from './careers/careers.module';
import { Seeder } from 'src/seeds/seeder';
import { Blog } from 'entities/blogs.entity';
import { Career } from 'entities/careers.entity';
import { TeamMembersModule } from './team-members/team-members.module';
import { LoggingValidationPipe } from 'common/translationPipe';
import { QueryFailedErrorFilter } from 'common/QueryFailedErrorFilter';
import { SectionsModule } from './sections/sections.module';
import { DepartmentModule } from './department/department.module';
import { ImageModule } from './images/images.module';
import { ContactsModule } from './contacts/contacts.module';
import { OffersModule } from './offers/offers.module';
import { PartnersModule } from './partners/partners.module';
import { SettingsModule } from './settings/settings.module';
import { PageMetaModule } from './page-meta/page-meta.module';
import { PagesModule } from './pages/pages.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),

    // I18nModule with async configuration
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/../i18n/'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        new HeaderResolver(['x-lang']),
      ],
    }),

    AuthModule,
    ProjectModule,
    BlogsModule,
    CareersModule,
    TeamMembersModule,
    SectionsModule,
    DepartmentModule,
    ImageModule,
    ContactsModule,
    OffersModule,
    PartnersModule,
    SettingsModule,
    PageMetaModule,
    PagesModule,
    ServicesModule,
  ],
  controllers: [AppController],
  providers: [AppService, LoggingValidationPipe , QueryFailedErrorFilter ],
  exports: [LoggingValidationPipe ],
})
export class AppModule {}
