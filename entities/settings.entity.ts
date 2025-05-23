import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

const SOCIAL_MEDIA_KEYS = [ 'facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'pinterest', 'snapchat', 'tiktok', 'reddit', 'tumblr', 'flickr', 'vimeo', 'whatsapp', 'telegram', 'discord', 'wechat', 'line', 'medium', 'github', 'stackoverflow', 'dribbble', 'behance', 'soundcloud', 'clubhouse' ] as const 
export type SocialMedia = {
  [key in typeof SOCIAL_MEDIA_KEYS[number]]?: string;
};


 const CONTACT_US = [ "address" , "email" , 'main_branch' , "phone"  ] as const 
export type ContactUs = {
  [key in typeof CONTACT_US[number]]?: string;
};



@Entity('settings')
export class Setting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique : true , default : "settings" })
  slug : string

  @Column({ type: 'jsonb' })
  site_name: { en: string; ar: string };


  @Column({ type: 'jsonb', nullable: true })
  site_logo : { url : string , alt : string }


  @Column({ type: 'jsonb', nullable: true })
  favicon : { url : string , alt : string }


  @Column({ type: 'jsonb', nullable: true })
  social_media: SocialMedia;


  @Column({ type: 'jsonb', nullable: true })
  contact_us: ContactUs;


  @Column({ type: 'jsonb', nullable: true })
  branch: {en:string[] , ar:string[] };


  @Column({ type: 'jsonb', nullable: true })
  meta: {
    title?: string ;
    description?: string ;
    keywords?: string[]; 
    custom_scripts?: {head : string , body : string};
  };

  @Column({type: 'jsonb'})
  copyright : {en:string , ar:string}


  @Column({ type: 'jsonb' })
  about_us_footer: { en: string; ar: string };

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
