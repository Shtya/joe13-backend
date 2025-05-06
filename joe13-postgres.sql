CREATE TABLE "users" (
  "id" integer PRIMARY KEY,
  "username" varchar,
  "email" varchar UNIQUE,
  "password" varchar,
  "role" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "careers" (
  "id" integer PRIMARY KEY,
  "title" varchar,
  "slug" varchar UNIQUE,
  "description" text,
  "department_id" integer,
  "meta_title" varchar,
  "meta_description" varchar,
  "meta_keywords" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "blogs" (
  "id" integer PRIMARY KEY,
  "type_blog" varchar,
  "title" varchar,
  "slug" varchar UNIQUE,
  "content" text,
  "image_url" varchar,
  "image_alt" varchar,
  "meta_title" varchar,
  "meta_description" varchar,
  "meta_keywords" varchar,
  "published_at" timestamp,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "team_members" (
  "id" integer PRIMARY KEY,
  "name" varchar,
  "position" varchar,
  "bio" text,
  "image_url" varchar,
  "image_alt" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "departments" (
  "id" integer PRIMARY KEY,
  "name" varchar,
  "description" text,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "projects" (
  "id" integer PRIMARY KEY,
  "name" varchar,
  "tag" varchar,
  "slug" varchar UNIQUE,
  "description" text,
  "meta_title" varchar,
  "meta_description" varchar,
  "meta_keywords" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "images" (
  "id" integer PRIMARY KEY,
  "project_id" integer,
  "image_url" varchar,
  "image_alt" varchar,
  "created_at" timestamp
);

CREATE TABLE "contact_us" (
  "id" integer PRIMARY KEY,
  "full_name" varchar,
  "email" varchar,
  "phone" varchar,
  "message" text,
  "contact_type" varchar,
  "created_at" timestamp
);

CREATE TABLE "affiliate_marketing_users" (
  "id" integer PRIMARY KEY,
  "name" varchar,
  "email" varchar,
  "phone" varchar,
  "joined_at" timestamp
);

CREATE TABLE "offers" (
  "id" integer PRIMARY KEY,
  "title" varchar,
  "slug" varchar UNIQUE,
  "description" text,
  "image_url" varchar,
  "image_alt" varchar,
  "meta_title" varchar,
  "meta_description" varchar,
  "meta_keywords" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "services" (
  "id" integer PRIMARY KEY,
  "name" varchar,
  "tag" varchar,
  "slug" varchar UNIQUE,
  "description" text,
  "image_url" varchar,
  "image_alt" varchar,
  "meta_title" varchar,
  "meta_description" varchar,
  "meta_keywords" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "partners" (
  "id" integer PRIMARY KEY,
  "name" varchar,
  "logo_url" varchar,
  "logo_alt" varchar,
  "website_url" varchar,
  "created_at" timestamp
);

CREATE TABLE "join_us" (
  "id" integer PRIMARY KEY,
  "full_name" varchar,
  "email" varchar,
  "phone" varchar,
  "cv_url" varchar,
  "message" text,
  "created_at" timestamp
);

CREATE TABLE "sections" (
  "id" integer PRIMARY KEY,
  "section_name" varchar,
  "title" varchar,
  "content" text,
  "image_url" varchar,
  "image_alt" varchar,
  "meta_title" varchar,
  "meta_description" varchar,
  "meta_keywords" varchar,
  "created_at" timestamp,
  "updated_at" timestamp
);

CREATE TABLE "settings" (
  "id" integer PRIMARY KEY,
  "site_name" varchar,
  "site_logo_url" varchar,
  "site_logo_alt" varchar,
  "favicon_url" varchar,
  "favicon_alt" varchar,
  "facebook_url" varchar,
  "instagram_url" varchar,
  "twitter_url" varchar,
  "linkedin_url" varchar,
  "address" varchar,
  "phone" varchar,
  "email" varchar,
  "working_hours" varchar,
  "about_us_footer" text,
  "created_at" timestamp,
  "updated_at" timestamp
);

ALTER TABLE "images" ADD FOREIGN KEY ("project_id") REFERENCES "projects" ("id");

ALTER TABLE "images" ADD FOREIGN KEY ("project_id") REFERENCES "services" ("id");
