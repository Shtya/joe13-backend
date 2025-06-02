// src/seeds/seeder.ts
import { DataSource, Repository } from 'typeorm';
import { Blog } from 'entities/blogs.entity'; // Blog entity
import { Career } from 'entities/careers.entity';
import { TeamMember } from 'entities/team-members.entity';
import { Section } from 'entities/sections.entity';
import { Project } from 'entities/projects.entity';
import { Department } from 'entities/departments.entity';
import { Image } from 'entities/images.entity';
import { Contact } from 'entities/contact-us.entity';
import { OffersEntity } from 'entities/offers.entity';
import { Partner } from 'entities/partners.entity';
import { PageMeta } from 'entities/page-meta.entity';
import { Page } from 'entities/pages.entity';
import { Setting } from 'entities/settings.entity';
import { Service } from 'entities/services.entity';

export class Seeder {
  private blogRepository: Repository<Blog>;
  private servRepository: Repository<Service>;
  private SettingRepo: Repository<Setting>;
  private pageRepository: Repository<Page>;
  private careerRepository: Repository<Career>;
  private teamMembersRepository: Repository<TeamMember>;
  private sectionRepo: Repository<Section>;
  private pageMetaReop: Repository<PageMeta>;
  private projectRepo: Repository<Project>;
  private departmentRepo: Repository<Department>;
  private imageRepo: Repository<Image>;
  private contactsReop: Repository<Contact>;
  private offersReop: Repository<OffersEntity>;
  private partnerRepository: Repository<Partner>;

  constructor(private dataSource: DataSource) {
    this.blogRepository = this.dataSource.getRepository(Blog);
    this.servRepository = this.dataSource.getRepository(Service);
    this.SettingRepo = this.dataSource.getRepository(Setting);
    this.pageRepository = this.dataSource.getRepository(Page);
    this.careerRepository = this.dataSource.getRepository(Career);
    this.teamMembersRepository = this.dataSource.getRepository(TeamMember);
    this.sectionRepo = this.dataSource.getRepository(Section);
    this.pageMetaReop = this.dataSource.getRepository(PageMeta);
    this.projectRepo = this.dataSource.getRepository(Project);
    this.departmentRepo = this.dataSource.getRepository(Department);
    this.imageRepo = this.dataSource.getRepository(Image);
    this.contactsReop = this.dataSource.getRepository(Contact);
    this.offersReop = this.dataSource.getRepository(OffersEntity);
    this.partnerRepository = this.dataSource.getRepository(Partner);
  }

  // await this.seedSections();
  // await this.seedPageMeta();
  // await this.seedPartners();
  async run() {
    // await this.seedCareers();
    // await this.seedContacts();
    // await this.seedPages();
    // await this.seedteamMembers();
    // await this.seedDepartments();
    // await this.seedBlogs();
    // await this.seedOffers();
    // await this.seedProjects();
    // await this.seedSettings();
    await this.seedServics();
  }

  private async seedServics() {
    const data = [
      {
        slug: 'manpower-hr-solutions',
        title: {
          en: 'Manpower & HR Solutions',
          ar: 'حلول الموارد البشرية والتوظيف',
        },
        subTitle: {
          en: 'Empowering your business with the right talent — tailored HR and recruitment solutions for the tech and marketing industries',
          ar: 'نُمكِّن عملك من خلال المواهب المناسبة - حلول موارد بشرية وتوظيف مخصصة لقطاعي التقنية والتسويق',
        },
        image: { url: '/uploads/joe-13/services/hero.jpg', alt: '' },
        hero: {
          serviceName: {
            en: 'Manpower & HR Solutions',
            ar: 'حلول الموارد البشرية والتوظيف',
          },
          title: {
            en: 'We are not your typical digital marketing agency',
            ar: 'لسنا وكالة تسويق رقمية تقليدية',
          },
          images: [
            '/uploads/joe-13/services/1.png',
            '/uploads/joe-13/services/2.png',
            '/uploads/joe-13/services/3.png',
          ],
          attr: [
            {
              key: {
                en: 'Specialized Talent Acquisition',
                ar: 'اكتساب المواهب المتخصصة',
              },
              value: {
                en: 'We source top-tier professionals in tech and marketing — fast, precise, and aligned with your culture',
                ar: 'نقوم بجلب محترفين من أعلى المستويات في مجالي التقنية والتسويق — بسرعة ودقة وبتوافق مع ثقافة شركتك',
              },
            },
            {
              key: {
                en: 'Scalable Hiring Solutions',
                ar: 'حلول توظيف قابلة للتوسع',
              },
              value: {
                en: "Whether you're building a small team or scaling fast, our solutions grow with your business needs.",
                ar: 'سواء كنت تبني فريقًا صغيرًا أو تنمو بسرعة، فإن حلولنا تتطور مع احتياجات عملك.',
              },
            },
            {
              key: {
                en: 'End-to-End HR Management',
                ar: 'إدارة موارد بشرية شاملة',
              },
              value: {
                en: 'From onboarding to performance tracking, we handle the full HR cycle so you can focus on growth.',
                ar: 'من الانضمام إلى تتبع الأداء، ندير دورة الموارد البشرية الكاملة حتى تتمكن من التركيز على النمو.',
              },
            },
            {
              key: {
                en: 'Compliance & Localization Expertise',
                ar: 'الامتثال والخبرة المحلية',
              },
              value: {
                en: 'We ensure your team is hired and managed in full alignment with Saudi labor laws and market best practices.',
                ar: 'نضمن أن يتم توظيف وإدارة فريقك بما يتماشى تمامًا مع قوانين العمل السعودية وأفضل ممارسات السوق.',
              },
            },
          ],
        },
        partners: [
          { url: '/uploads/joe-13/brands/1.png', alt: 'Partner One' },
          { url: '/uploads/joe-13/brands/2.png', alt: 'Partner One' },
          { url: '/uploads/joe-13/brands/3.png', alt: 'Partner One' },
          { url: '/uploads/joe-13/brands/4.png', alt: 'Partner One' },
          { url: '/uploads/joe-13/brands/5.png', alt: 'Partner One' },
          { url: '/uploads/joe-13/brands/6.png', alt: 'Partner One' },
          { url: '/uploads/joe-13/brands/7.png', alt: 'Partner One' },
          { url: '/uploads/joe-13/brands/8.png', alt: 'Partner One' },
          { url: '/uploads/joe-13/brands/9.png', alt: 'Partner One' },
          { url: '/uploads/joe-13/brands/10.png', alt: 'Partner One' },
          { url: '/uploads/joe-13/brands/11.png', alt: 'Partner One' },
          { url: '/uploads/joe-13/brands/12.png', alt: 'Partner One' },
          { url: '/uploads/joe-13/brands/13.png', alt: 'Partner One' },
          { url: '/uploads/joe-13/brands/14.png', alt: 'Partner One' },
          { url: '/uploads/joe-13/brands/15.png', alt: 'Partner One' },
          { url: '/uploads/joe-13/brands/16.png', alt: 'Partner One' },
        ],
        benefits: {
          title: {
            en: 'The Benefits of Manpower & HR Solutions',
            ar: 'فوائد حلول الموارد البشرية والتوظيف',
          },
          subTitle: {
            en: 'Get instant check-ins and updates from your workforce, helping HR and operations teams track attendance, activity, and performance in real-time.',
            ar: 'احصل على تحديثات فورية من موظفيك لمساعدة فرق الموارد البشرية والعمليات على تتبع الحضور والنشاط والأداء في الوقت الحقيقي.',
          },
          feature: [
            {
              en: 'Performance & Compliance Tracking',
              ar: 'تتبع الأداء والامتثال',
            },
            {
              en: 'Real-Time Staff Monitoring',
              ar: 'مراقبة الموظفين في الوقت الحقيقي',
            },
            {
              en: 'Error-Free HR Workflows',
              ar: 'سير عمل موارد بشرية خالٍ من الأخطاء',
            },
            { en: 'Faster Recruitment & Onboarding', ar: 'توظيف وانضمام أسرع' },
            { en: 'Cost Optimization', ar: 'تحسين التكاليف' },
            { en: 'Full Visibility & Control', ar: 'رؤية وتحكم كامل' },
          ],
          image: {
            url: '/uploads/joe-13/services/4.png',
            alt: '',
          },
        },
        impact: {
          title: {
            en: 'Numbers Don’t Lie – Joe13 Impact in Action',
            ar: 'الأرقام لا تكذب – تأثير جو 13 في الواقع',
          },
          subTitle: {
            en: 'Our success isn’t just a claim—it’s backed by real numbers. From skyrocketing engagement rates to high-performing campaigns, our work speaks for itself.',
            ar: 'نجاحنا ليس مجرد ادعاء – إنه مدعوم بأرقام حقيقية. من ارتفاع معدلات التفاعل إلى الحملات عالية الأداء، أعمالنا تتحدث عنا.',
          },
          statics: [
            {
              name: { en: 'Top Talent Hired', ar: 'توظيف أفضل المواهب' },
              count: '+450',
              desc: {
                en: "We've helped companies across Saudi Arabia hire highly qualified tech and marketing specialists.",
                ar: 'ساعدنا الشركات في جميع أنحاء السعودية على توظيف متخصصين مؤهلين في التقنية والتسويق.',
              },
            },
            {
              name: { en: 'Hiring Speed Increased', ar: 'زيادة سرعة التوظيف' },
              count: '+45%',
              desc: {
                en: 'We streamline the recruitment process, reducing hiring time and securing the right talent faster.',
                ar: 'نُبسط عملية التوظيف لتقليل الوقت وتأمين المواهب المناسبة بسرعة أكبر.',
              },
            },
            {
              name: {
                en: 'Retention Rate Boosted',
                ar: 'زيادة معدل الاحتفاظ بالموظفين',
              },
              count: '+92%',
              desc: {
                en: 'Our strategic HR planning has helped businesses retain top talent and reduce turnover',
                ar: 'ساهم تخطيطنا الاستراتيجي للموارد البشرية في احتفاظ الشركات بالمواهب وتقليل معدل الدوران.',
              },
            },
            {
              name: {
                en: 'HR Systems Implemented',
                ar: 'تنفيذ أنظمة الموارد البشرية',
              },
              count: '+25',
              desc: {
                en: 'We’ve designed and implemented tailored HR systems for companies to scale efficiently.',
                ar: 'قمنا بتصميم وتنفيذ أنظمة موارد بشرية مخصصة لمساعدة الشركات على التوسع بكفاءة.',
              },
            },
          ],
        },
        faqs: {
          title: {
            en: "Got Questions ? We've got answers",
            ar: 'هل لديك أسئلة؟ لدينا الإجابات',
          },
          subTitle: {
            en: 'We’ve gathered the most frequently asked questions to help you understand our services better ',
            ar: 'جمعنا الأسئلة الأكثر شيوعًا لمساعدتك على فهم خدماتنا بشكل أفضل',
          },
          list: [
            {
              question: {
                en: '1- What is Joe X ?',
                ar: '١- ما هو جو X؟',
              },
              answer: {
                en: 'It is a comprehensive digital platform designed specifically for merchandisers, enabling them to efficiently manage their daily tasks, track product placements, report issues, and communicate seamlessly with supervisors — all from one place. The platform aims to simplify operations, boost productivity, and ensure that every merchandising activity is executed with precision and ease',
                ar: 'هي منصة رقمية شاملة مصممة خصيصًا للمندوبين، تتيح لهم إدارة مهامهم اليومية بكفاءة، وتتبع أماكن المنتجات، والإبلاغ عن المشكلات، والتواصل بسلاسة مع المشرفين – كل ذلك من مكان واحد. تهدف المنصة إلى تبسيط العمليات، وزيادة الإنتاجية، وضمان تنفيذ كل نشاط تسويقي بدقة وسهولة.',
              },
            },
            {
              question: {
                en: '1- What is Joe X ?',
                ar: '١- ما هو جو X؟',
              },
              answer: {
                en: 'It is a comprehensive digital platform designed specifically for merchandisers, enabling them to efficiently manage their daily tasks, track product placements, report issues, and communicate seamlessly with supervisors — all from one place. The platform aims to simplify operations, boost productivity, and ensure that every merchandising activity is executed with precision and ease',
                ar: 'هي منصة رقمية شاملة مصممة خصيصًا للمندوبين، تتيح لهم إدارة مهامهم اليومية بكفاءة، وتتبع أماكن المنتجات، والإبلاغ عن المشكلات، والتواصل بسلاسة مع المشرفين – كل ذلك من مكان واحد. تهدف المنصة إلى تبسيط العمليات، وزيادة الإنتاجية، وضمان تنفيذ كل نشاط تسويقي بدقة وسهولة.',
              },
            },
            {
              question: {
                en: '1- What is Joe X ?',
                ar: '١- ما هو جو X؟',
              },
              answer: {
                en: 'It is a comprehensive digital platform designed specifically for merchandisers, enabling them to efficiently manage their daily tasks, track product placements, report issues, and communicate seamlessly with supervisors — all from one place. The platform aims to simplify operations, boost productivity, and ensure that every merchandising activity is executed with precision and ease',
                ar: 'هي منصة رقمية شاملة مصممة خصيصًا للمندوبين، تتيح لهم إدارة مهامهم اليومية بكفاءة، وتتبع أماكن المنتجات، والإبلاغ عن المشكلات، والتواصل بسلاسة مع المشرفين – كل ذلك من مكان واحد. تهدف المنصة إلى تبسيط العمليات، وزيادة الإنتاجية، وضمان تنفيذ كل نشاط تسويقي بدقة وسهولة.',
              },
            },
            {
              question: {
                en: '1- What is Joe X ?',
                ar: '١- ما هو جو X؟',
              },
              answer: {
                en: 'It is a comprehensive digital platform designed specifically for merchandisers, enabling them to efficiently manage their daily tasks, track product placements, report issues, and communicate seamlessly with supervisors — all from one place. The platform aims to simplify operations, boost productivity, and ensure that every merchandising activity is executed with precision and ease',
                ar: 'هي منصة رقمية شاملة مصممة خصيصًا للمندوبين، تتيح لهم إدارة مهامهم اليومية بكفاءة، وتتبع أماكن المنتجات، والإبلاغ عن المشكلات، والتواصل بسلاسة مع المشرفين – كل ذلك من مكان واحد. تهدف المنصة إلى تبسيط العمليات، وزيادة الإنتاجية، وضمان تنفيذ كل نشاط تسويقي بدقة وسهولة.',
              },
            },
          ],
        },
        call: {
          title: {
            en: 'Ready to Transform Your Workforce?',
            ar: 'هل أنت مستعد لتحويل قوة عملك؟',
          },
          subTitle: {
            en: 'Let us handle the operations while you focus on growing your business , From smarter scheduling to seamless team tracking — our HR solutions are built to scale with your goals.',
            ar: 'دعنا نتولى العمليات بينما تركز على تنمية عملك. من الجدولة الذكية إلى تتبع الفريق بسلاسة — تم تصميم حلول الموارد البشرية لدينا لتتماشى مع أهدافك.',
          },
          content: {
            en: 'Let’s Talk – Get Your Custom HR Plan Today',
            ar: 'دعنا نتحدث – احصل على خطة موارد بشرية مخصصة اليوم',
          },
          image: {
            url: '/uploads/joe-13/services/map.png',
            alt: '',
          },
        },
      },
    ];

    await this.servRepository.clear();
    const dataEntities = this.servRepository.create(data as any);
    await this.servRepository.save(dataEntities);
  }

  private async seedSettings() {
    const data = {
      slug: 'settings',
      site_name: {
        en: 'Joe13',
        ar: 'جو 13',
      },
      site_logo: {
        url: '/uploads/joe-13/settings/logo.svg',
        alt: 'Joe13 Logo',
      },
      favicon: {
        url: '/uploads/joe-13/settings/favicon.png',
        alt: 'Joe13 Favicon',
      },
      social_media: {
        facebook: 'https://www.facebook.com/joe13ksa?mibextid=ZbWKwL',
        instagram: 'https://www.instagram.com/joe13ksa?igsh=NjV5Y254dWl6MGJy',
        tiktok: 'https://www.tiktok.com/@joe13ksa?_t=8shIsnjbS6c&_r=1',
        linkedin: 'https://www.linkedin.com/company/joe13ksa/',
        snapshot:
          'https://www.snapchat.com/add/joe13ksa?share_id=7tDt0EHfCLY&locale=en-GB',
        twitter: 'https://x.com/joe13ksa?t=DhxUu2XNItuJNGBAAAnLEA&s=09',
      },
      contact_us: {
        address: {
          en: 'Head Office Bawadi District, Madinah Road',
          ar: 'المكتب الرئيسي، حي البوادي، طريق المدينة',
        },
        email: 'info@joe13.com',
        main_branch: {
          en: 'Jeddah Headquarters',
          ar: 'المقر الرئيسي بجدة',
        },
        phone: '+966570002013',
      },
      branch: {
        en: ['Jeddah', 'Egypt', 'Riyadh', 'Makkah', 'Dammam'],
        ar: ['جدة', 'مصر', 'الرياض', 'مكة', 'الدمام'],
      },
      meta: {
        title: {
          en: 'Joe13 - 360° Business Solutions with 11+ Years of Impact',
          ar: 'جو 13 - حلول أعمال شاملة مع أكثر من 12 عامًا من التأثير',
        },
        description: {
          en: 'Joe13 offers comprehensive business solutions including marketing, software, telecom, HR, and event services with over 180 successful projects across 47 cities.',
          ar: 'تقدم جو 13 حلول أعمال شاملة تشمل التسويق والبرمجيات والاتصالات والموارد البشرية وإدارة الفعاليات مع أكثر من 180 مشروعًا ناجحًا في 47 مدينة.',
        },
        keywords: [
          'Joe13',
          'Marketing Solutions',
          'Digital Marketing',
          'HR Solutions',
          'Software and AI',
          'Event Management',
          'Telecom Services',
          'Business Consulting',
          'Brand Activation',
          'ERP Solutions',
          'Web Development',
          'Promoters Management',
        ],
        custom_scripts: {
          head: "<script>console.log('Joe13 website loaded');</script>",
          body: '<script>// Tracking script for Joe13</script>',
        },
      },
      about_us_footer: {
        en: 'Joe13 delivers smart solutions with 11+ years of experience, 180+ projects, and 100+ clients across 47 cities.',
        ar: 'جو 13 تقدم حلولًا ذكية بخبرة 11+ عامًا، و180+ مشروعًا، و100+ عميل في 47 مدينة.',
      },

      copyright: {
        en: '© 2024 Joe13. All Rights Reserved.',
        ar: '© 2024 جو 13. جميع الحقوق محفوظة.',
      },
    };

    await this.SettingRepo.clear();
    const dataEntities = this.SettingRepo.create(data as any);
    await this.SettingRepo.save(dataEntities);
  }

  private async seedPages() {
    const data = [
      {
        slug: 'blogs',
        title: 'Blogs',
        meta: {
          title: 'Joe13 Blogs - Insights on Marketing, Tech, HR & More',
          description:
            'Explore Joe13’s expert articles and insights on marketing strategies, software innovations, telecom solutions, HR trends, and event management.',
          keywords: [
            'Joe13',
            'Blogs',
            'Marketing Insights',
            'Digital Marketing',
            'Technology Trends',
            'HR Solutions',
            'Event Management',
            'Telecom',
            'Business Consulting',
          ],
          canonicalUrl: 'https://yourdomain.com/blogs',
          ogTitle: 'Joe13 Blogs - Expert Insights Across Business Verticals',
          ogDescription:
            'Stay updated with Joe13’s latest blogs covering marketing, software, telecom, HR, and event management insights.',
          ogImage: {
            url: '/uploads/joe-13/blogs.png',
            alt: 'Joe13 Blogs Banner',
          },
          ogUrl: 'https://yourdomain.com/blogs',
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Joe13 Blogs',
            url: 'https://yourdomain.com/blogs',
            description:
              'Expert blogs on marketing, technology, HR, telecom, and event management from Joe13.',
          },
          headScript:
            "<script>console.log('Blogs page head script loaded');</script>",
          bodyScript:
            "<script>console.log('Blogs page body script loaded');</script>",
        },

        sections: [
          {
            id: 'sec1',
            image: {
              url: '/uploads/joe-13/blogs.png',
              alt: 'Blogs main banner',
            },
            title: {
              en: 'Blogs',
              ar: 'المدونة',
            },
            content: {
              en: "In today's fast-paced digital age, businesses of all sizes must embrace digital marketing to stay competitive. Digital marketing offers a wide range of tools and strategies to reach a wider audience, engage with customers, and drive sales. From social media marketing to search engine optimization (SEO), email marketing to content marketing, digital marketing has become an essential component of any successful business strategy.",
              ar: 'في عصرنا الرقمي سريع الوتيرة، يجب على الشركات بجميع أحجامها تبني التسويق الرقمي للبقاء في المنافسة. يوفر التسويق الرقمي مجموعة واسعة من الأدوات والاستراتيجيات للوصول إلى جمهور أوسع، والتفاعل مع العملاء، وزيادة المبيعات. من التسويق عبر وسائل التواصل الاجتماعي إلى تحسين محركات البحث (SEO)، والتسويق عبر البريد الإلكتروني إلى تسويق المحتوى، أصبح التسويق الرقمي جزءًا أساسيًا من أي استراتيجية تجارية ناجحة.',
            },
            list: [],
            objectData: {},
            list_Object: {},
            position: 1,
            visible: true,
          },
        ],
      },
      {
        slug: 'projects',
        title: 'projects',
        meta: {
          title:
            'Joe13 Projects - Delivering 180+ Success Stories Across 47 Cities',
          description:
            'Explore the diverse projects executed by Joe13 across marketing, technology, HR, and event management. Trusted by over 100 clients in 47 cities.',
          keywords: [
            'Joe13 Projects',
            'Marketing Campaigns',
            'Software Projects',
            'Event Management Portfolio',
            'Telecom Solutions',
            'HR Outsourcing Projects',
            'ERP Implementations',
            'Digital Transformation',
            'Business Success Stories',
          ],
          canonicalUrl: 'https://yourdomain.com/projects',
          ogTitle:
            'Joe13 Projects - 180+ Successful Projects in Tech, Marketing & HR',
          ogDescription:
            'Discover Joe13’s portfolio of 180+ successful projects spanning marketing, software, HR, and event management across 47 cities.',
          ogImage: {
            url: '/uploads/joe-13/logo.png',
            alt: 'Joe13 Logo',
          },
          ogUrl: 'https://yourdomain.com/projects',
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Joe13',
            url: 'https://yourdomain.com/projects',
            logo: {
              '@type': 'ImageObject',
              url: 'https://yourdomain.com/uploads/joe-13/logo.png',
              caption: 'Joe13 Logo',
            },
            description:
              'A marketing and software development company empowering innovation through technology and teamwork.',
            sameAs: [
              'https://www.linkedin.com/company/joe13',
              'https://www.facebook.com/joe13',
              'https://www.instagram.com/joe13',
            ],
          },
          headScript: "<script>console.log('Head script loaded');</script>",
          bodyScript: "<script>console.log('Body script loaded');</script>",
        },
        sections: [
          {
            id: 'sec1',
            image: {
              url: '/uploads/joe-13/projects.png',
              alt: 'Showcase of Joe13 Projects',
            },
            title: {
              en: 'Our Projects',
              ar: 'مشاريعنا',
            },
            content: {
              en: 'Joe13 takes pride in over 180 successful projects across diverse sectors including digital marketing, AI software development, HR outsourcing, event management, and telecom. Our commitment to excellence and innovation has made us a trusted partner for 100+ clients in 47 cities.',
              ar: 'تفخر شركة Joe13 بأكثر من 180 مشروعًا ناجحًا في مجالات متنوعة تشمل التسويق الرقمي، تطوير البرمجيات بالذكاء الاصطناعي، تعهيد الموارد البشرية، إدارة الفعاليات، وخدمات الاتصالات. لقد جعلنا التزامنا بالتميز والابتكار شريكًا موثوقًا لأكثر من 100 عميل في 47 مدينة.',
            },
            list: [],
            objectData: {},
            list_Object: {},
            position: 1,
            visible: true,
          },
        ],
      },
      {
        slug: 'about-us',
        title: 'about us',
        meta: {
          title: 'About Joe13 - Our Story, Vision & Mission',
          description:
            'Learn about Joe13, a marketing and software company founded in 2013. Discover our journey, values, and how we innovate through technology and teamwork.',
          keywords: [
            'About Joe13',
            'Joe13 Company',
            'Marketing Company',
            'Software Development',
            'Innovation',
            'Teamwork',
            'IT Solutions',
            'Company Vision',
            'Mission Statement',
          ],
          canonicalUrl: 'https://yourdomain.com/about-us',
          ogTitle: 'About Joe13 - Our Story, Vision & Mission',
          ogDescription:
            'Get to know Joe13, a leader in marketing and software solutions. Learn about our foundation, core values, and commitment to innovation.',
          ogImage: {
            url: '/uploads/joe-13/logo.png',
            alt: 'Joe13 Logo',
          },
          ogUrl: 'https://yourdomain.com/about-us',
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Joe13',
            url: 'https://yourdomain.com/about-us',
            logo: {
              '@type': 'ImageObject',
              url: 'https://yourdomain.com/uploads/joe-13/logo.png',
              caption: 'Joe13 Logo',
            },
            description:
              'Joe13 is a marketing and software development company founded in 2013. We empower businesses with innovative IT solutions and strong teamwork.',
            sameAs: [
              'https://www.linkedin.com/company/joe13',
              'https://www.facebook.com/joe13',
              'https://www.instagram.com/joe13',
            ],
          },
          headScript: "<script>console.log('Head script loaded');</script>",
          bodyScript: "<script>console.log('Body script loaded');</script>",
        },
        sections: [
          {
            id: 'sec1',
            image: {
              url: '/uploads/joe-13/about-us/1.png',
              alt: 'Team working together',
            },
            title: {
              en: 'Who We Are',
              ar: 'من نحن',
            },
            content: {
              en: 'JOE13 is a marketing and software development company founded in 2013 to leverage years of expertise across various industries to help companies realize their optimal value proposition...',
              ar: 'شركة JOE13 هي شركة تسويق وتطوير برمجيات تأسست في عام 2013...',
            },

            list: [],
            objectData: {},
            list_Object: {},
            position: 1,
            visible: true,
          },
          {
            id: 'sec2',
            image: {
              url: '/uploads/joe-13/about-us/2.png',
              alt: 'Team working together',
            },
            title: {
              en: 'Our Vision',
              ar: 'رؤيتنا',
            },
            content: {
              en: 'Our vision is to be the leading force in the MENA region and globally by combining innovation and IT efficiency, empowering businesses to reach their full potential...',
              ar: 'JOE13 هي شركة تسويق وتطوير برمجيات تم تأسيسها في عام 2013...',
            },

            list: [],
            objectData: {},
            list_Object: {},
            position: 1,
            visible: true,
          },
          {
            id: 'sec3',
            image: {
              url: '/uploads/joe-13/about-us/3.png',
              alt: 'Team working together',
            },
            title: {
              en: 'Our Mission',
              ar: 'مهمتنا',
            },
            content: {
              en: 'Our success lies in what our team can and will achieve. By investing in our people across all disciplines, we strive to elevate our clients’ vision and position ourselves as pioneers across the MENA region and beyond...',
              ar: 'إن عامل نجاحنا القيم هو ما يستطيع فريقنا تحقيقه...',
            },

            list: [],
            objectData: {},
            list_Object: {},
            position: 1,
            visible: true,
          },
        ],
      },
      {
        slug: 'home-page',
        title: 'home page',
        meta: {
          title: 'Joe13 - 360° Business Solutions with 11+ Years of Impact',
          description:
            'Explore Joe13, a comprehensive solutions company offering marketing, software, telecom, HR, and event services. Over 180 successful projects, 100+ clients, and 70 skilled team members across 47 cities.',
          keywords: [
            'Joe13',
            'Marketing Solutions',
            'Digital Marketing',
            'HR Solutions',
            'Software and AI',
            'Event Management',
            'Telecom Services',
            'Business Consulting',
            'Brand Activation',
            'ERP Solutions',
            'Web Development',
            'Promoters Management',
          ],
          canonicalUrl: 'https://yourdomain.com/home-page',
          ogTitle:
            'Joe13 - Your Partner in Growth Across Marketing, Tech, HR & Events',
          ogDescription:
            'Discover Joe13’s 360° business solutions trusted by 100+ clients in 47 cities. From digital marketing to AI software, HR outsourcing, and more.',
          ogImage: {
            url: '/uploads/joe-13/logo.png',
            alt: 'Joe13 Logo',
          },
          ogUrl: 'https://yourdomain.com/home-page',
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Joe13',
            url: 'https://yourdomain.com/home-page',
          },
          headScript: "<script>console.log('Head script loaded');</script>",
          bodyScript: "<script>console.log('Body script loaded');</script>",
        },

        sections: [
          {
            id: 'sec1',
            image: {
              url: '/uploads/joe-13/logo.png',
              alt: 'alt image 1',
            },
            title: {
              en: '360 solutions company with +12 years of experience in the market',
              ar: 'شركة حلول شاملة بخبرة تزيد عن 11 عامًا في السوق',
            },
            content: {
              en: '',
              ar: '',
            },
            list: [],
            objectData: {},
            position: 1,
            visible: true,
          },
          {
            id: 'sec2',
            image: {
              url: '/uploads/joe-13/section2.jpeg',
              alt: 'alt image 1',
            },
            title: {
              en: 'Our Success in Numbers, Driving Impact Across Industries',
              ar: 'نجاحنا بالأرقام، نُحدث تأثيرًا عبر مختلف الصناعات',
            },
            content: {
              en: '',
              ar: '',
            },
            list: [],
            objectData: {
              en: {
                Cities: '47',
                'Successful Projects': '180',
                Clients: '100',
                'Team Members': '70',
                Growth: '31%',
              },
              ar: {
                المدن: '٤٧',
                'المشاريع الناجحة': '١٨٠',
                العملاء: '١٠٠',
                'أعضاء الفريق': '٧٠',
                النمو: '٣١٪',
              },
            },
            position: 2,
            visible: true,
          },
          {
            id: 'sec3',
            image: {
              url: '/uploads/joe-13/section3.jpeg',
              alt: 'alt image 1',
            },
            title: {
              en: 'Our Partners',
              ar: 'شركاؤنا',
            },
            content: {
              en: '',
              ar: '',
            },
            list: [
              { alt: 'Brand 1', url: '/uploads/joe-13/brands/1.png' },
              { alt: 'Brand 2', url: '/uploads/joe-13/brands/2.png' },
              { alt: 'Brand 3', url: '/uploads/joe-13/brands/3.png' },
              { alt: 'Brand 4', url: '/uploads/joe-13/brands/4.png' },
              { alt: 'Brand 5', url: '/uploads/joe-13/brands/5.png' },
              { alt: 'Brand 6', url: '/uploads/joe-13/brands/6.png' },
              { alt: 'Brand 7', url: '/uploads/joe-13/brands/7.png' },
              { alt: 'Brand 8', url: '/uploads/joe-13/brands/8.png' },
              { alt: 'Brand 9', url: '/uploads/joe-13/brands/9.png' },
              { alt: 'Brand 10', url: '/uploads/joe-13/brands/10.png' },
              { alt: 'Brand 11', url: '/uploads/joe-13/brands/11.png' },
              { alt: 'Brand 12', url: '/uploads/joe-13/brands/12.png' },
              { alt: 'Brand 13', url: '/uploads/joe-13/brands/13.png' },
              { alt: 'Brand 14', url: '/uploads/joe-13/brands/14.png' },
              { alt: 'Brand 15', url: '/uploads/joe-13/brands/15.png' },
              { alt: 'Brand 16', url: '/uploads/joe-13/brands/16.png' },
            ],
            objectData: {},
            position: 3,
            visible: true,
          },
          {
            id: 'sec4',
            image: {
              url: '/uploads/joe-13/section4.png',
              alt: 'alt image 1',
            },
            title: {
              en: 'Check out our Business Units and their services',
              ar: 'تعرّف على وحدات أعمالنا وخدماتها',
            },
            content: {
              en: '',
              ar: '',
            },
            list: [],
            objectData: {},
            position: 4,
            visible: true,
          },
          {
            id: 'sec5',
            image: {
              url: '/uploads/joe-13/section5.png',
              alt: 'alt image 1',
            },
            title: {
              en: 'Marketing',
              ar: 'التسويق',
            },
            content: {
              en: 'Driving Growth and Engagement with Strategic Digital Marketing Solutions',
              ar: 'دفع عجلة النمو والتفاعل من خلال حلول التسويق الرقمي الاستراتيجية',
            },
            list: {
              en: [
                'Offline Marketing',
                'Print Advertising.',
                'Physical Product Placement.',
                'Digital Marketing',
                'Social media management',
                'SEO',
                'Content Creation',
                'Media production',
                'Branding',
                'Graphics',
                'Motion graphic and visual',
                'Brand Promotion and Activation',
                'Bloggers & Influencers Management',
                'User Generated Content (UGC)',
                'Bloggers Campaign',
                'Influencers Management',
              ],
              ar: [
                'التسويق التقليدي',
                'الإعلانات المطبوعة',
                'وضع المنتج في الأماكن الفعلية',
                'التسويق الرقمي',
                'إدارة وسائل التواصل الاجتماعي',
                'تحسين محركات البحث',
                'إنشاء المحتوى',
                'إنتاج الوسائط',
                'بناء العلامة التجارية',
                'الرسومات',
                'الرسوم المتحركة والمرئية',
                'تنشيط العلامة التجارية',
                'إدارة المدونين والمؤثرين',
                'المحتوى الذي ينشئه المستخدمون',
                'حملات المدونين',
                'إدارة المؤثرين',
              ],
            },
            objectData: {},
            position: 5,
            visible: true,
          },
          {
            id: 'sec6',
            image: {
              url: '/uploads/joe-13/section6.png',
              alt: 'alt image 1',
            },
            title: {
              en: 'Software & AI',
              ar: 'البرمجيات والذكاء الاصطناعي',
            },
            content: {
              en: 'Manage your business needs and put them into practice to deliver you the best quality available. Our Technology department is a trusted partner for businesses seeking innovative solutions',
              ar: 'نلبي احتياجات عملك ونحولها إلى حلول عملية لنقدم لك أعلى مستويات الجودة. قسم التكنولوجيا لدينا هو شريك موثوق للشركات التي تبحث عن حلول مبتكرة.',
            },
            list: {
              en: [
                'Web Hosting and Website Design Services.',
                'Online store (E-commerce).',
                'Create mobile applications',
                'Managing and maintaining websites and applications',
                'Content management systems (CMS)',
                'Customer relationship management (CRM)',
                'A business process automation system.',
                'Automated invoicing.',
                'Company-facing or customer-facing web portals.',
                'Bug tracking software.',
              ],
              ar: [
                'استضافة المواقع وخدمات تصميم المواقع.',
                'متجر إلكتروني (التجارة الإلكترونية).',
                'إنشاء تطبيقات الجوال',
                'إدارة وصيانة المواقع والتطبيقات',
                'أنظمة إدارة المحتوى',
                'إدارة علاقات العملاء',
                'نظام أتمتة العمليات التجارية',
                'الفوترة الآلية',
                'بوابات إلكترونية للشركات أو العملاء',
                'برامج تتبع الأخطاء',
              ],
            },
            objectData: {},
            position: 6,
            visible: true,
          },
          {
            id: 'sec7',
            image: {
              url: '/uploads/joe-13/section7.png',
              alt: 'alt image 1',
            },
            title: {
              en: 'Masanadah',
              ar: 'مساندة',
            },
            content: {
              en: 'We are insisting on success, insisting on providing a high quality',
              ar: 'نُصر على النجاح، ونُصر على تقديم جودة عالية',
            },
            list: {
              en: [
                'Finance Consulting Service',
                'Strategic guidance to businesses of all sizes',
                'Sustainable Growth',
                'Risk Management',
                'Financial Planning',
                'Investment Strategies',
                'Business Expansion',
              ],
              ar: [
                'خدمة الاستشارات المالية',
                'توجيه استراتيجي للشركات من جميع الأحجام',
                'نمو مستدام',
                'إدارة المخاطر',
                'التخطيط المالي',
                'استراتيجيات الاستثمار',
                'توسيع الأعمال',
              ],
            },
            objectData: {},
            position: 7,
            visible: true,
          },
          {
            id: 'sec8',
            image: {
              url: '/uploads/joe-13/section8.png',
              alt: 'alt image 1',
            },
            title: {
              en: 'Telecoms',
              ar: 'الاتصالات',
            },
            content: {
              en: 'A talented and professionally-trained sales team',
              ar: 'فريق مبيعات موهوب ومدرب باحترافية عالية',
            },
            list: {
              en: [
                'Direct Sales',
                'current partners: (Virgin - Red Bull mobile -Zain - Mobily)',
                'Modern trade - current clients:(Virgin, Red Bull, Zain)',
                'Haj & Umrah sales - with (Virgin, Mobily, Red Bull, Non-telecom sales)',
                'B2B Sales - current partners: (Zain)',
                'Non-telecom sales',
                'B2C Sales - (Flexible Card)',
                'B2B Sales - partners: (Motorola - Arab computer - In Home)',
              ],
              ar: [
                'المبيعات المباشرة',
                'الشركاء الحاليون: (فيرجن - ريد بول موبايل - زين - موبايلي)',
                'التجارة الحديثة - العملاء الحاليون: (فيرجن، ريد بول، زين)',
                'مبيعات الحج والعمرة - مع (فيرجن، موبايلي، ريد بول، مبيعات غير اتصالات)',
                'مبيعات B2B - الشركاء الحاليون: (زين)',
                'مبيعات غير اتصالات',
                'مبيعات B2C - (بطاقة فلكسيبل)',
                'مبيعات B2B - شركاء: (موتورولا - الكمبيوتر العربي - إن هوم)',
              ],
            },
            objectData: {},
            position: 8,
            visible: true,
          },
          {
            id: 'sec9',
            image: {
              url: '/uploads/joe-13/section9.png',
              alt: 'alt image 1',
            },
            title: {
              en: 'Manpower & HR Solutions',
              ar: 'حلول الموارد البشرية والقوى العاملة',
            },
            content: {
              en: 'Streamlining Workforce Solutions for Optimal Business Success',
              ar: 'تبسيط حلول القوى العاملة لتحقيق نجاح تجاري أمثل',
            },
            list: [],
            objectData: {
              en: {
                'HR Outsourcing service':
                  'Sponsorship transfer, Visa Issuing, Administration, Management, Payroll, Training, Hiring, Recruiting, Operate benefit plans, and Saudi Gosi registrations',
                'Governmental affairs':
                  'Iqama processing, Visa processing, Legal matters, Passport services, GOSI services, Medical insurance services',
                'HR Management':
                  'Temporary work visa, Permits, Employee transfer, Nationalisation plan',
              },
              ar: {
                'خدمة التوظيف الخارجي':
                  'نقل الكفالة، إصدار التأشيرات، الإدارة، الرواتب، التدريب، التوظيف، إدارة خطط المزايا، تسجيلات التأمينات الاجتماعية السعودية',
                'الشؤون الحكومية':
                  'معالجة الإقامة، معالجة التأشيرات، الأمور القانونية، خدمات الجوازات، خدمات التأمينات، خدمات التأمين الطبي',
                'إدارة الموارد البشرية':
                  'تأشيرة العمل المؤقتة، التصاريح، نقل الموظفين، خطة التوطين',
              },
            },
            position: 9,
            visible: true,
          },
          {
            id: 'sec10',
            image: {
              url: '/uploads/joe-13/section10.png',
              alt: 'alt image 1',
            },
            title: {
              en: 'Merchandising, Activation and Event Management',
              ar: 'الترويج، التفعيل، وإدارة الفعاليات',
            },
            content: {
              en: 'Increase client awareness of your brand by marketing it utilizing contemporary techniques and growin',
              ar: 'زيادة الوعي بعلامتك التجارية من خلال تسويقها باستخدام الأساليب والتقنيات الحديثة',
            },
            list: [],
            objectData: {},
            list_Object: {
              en: [
                {
                  title: 'Merchandising',
                  desc: 'A holistic approach to presenting and promoting goods to drive sales and shape brand identity.',
                  list: [],
                },
                {
                  title: 'Activation',
                  desc: 'Increase client awareness of your brand through contemporary marketing techniques.',
                  list: [
                    'Events competitions',
                    'Sales promotion',
                    'Telemarketing',
                    'Free product samples',
                    'In-store promotions',
                    'Trade shows',
                    'Targeted advertisements',
                  ],
                },
                {
                  title: 'Event Management',
                  desc: 'Complete event planning and execution from logistics to post-event analysis.',
                  list: [
                    'Planning: Concept to execution.',
                    'Logistics: Venue, transport, equipment.',
                    'Design: Visual consistency.',
                    'Vendors: Service quality.',
                    'On-site: Supervision.',
                    'Analysis: Evaluations.',
                  ],
                },
              ],
              ar: [
                {
                  title: 'الترويج',
                  desc: 'نهج شامل لعرض وترويج المنتجات بطريقة تعزز المبيعات وتقوي الهوية التجارية.',
                  list: [],
                },
                {
                  title: 'التنشيط',
                  desc: 'زيادة الوعي بالعلامة التجارية باستخدام تقنيات تسويقية حديثة.',
                  list: [
                    'المسابقات والفعاليات',
                    'العروض الترويجية',
                    'الاتصال الهاتفي التسويقي',
                    'عينات المنتجات المجانية',
                    'العروض داخل المتاجر',
                    'المعارض التجارية',
                    'الإعلانات المستهدفة',
                  ],
                },
                {
                  title: 'إدارة الفعاليات',
                  desc: 'إدارة متكاملة للفعاليات من التخطيط حتى التحليل بعد الحدث.',
                  list: [
                    'التخطيط: من الفكرة إلى التنفيذ',
                    'اللوجستيات: المكان، النقل، المعدات',
                    'التصميم: التناسق البصري',
                    'الموردين: جودة الخدمات',
                    'في الموقع: الإشراف على الحدث',
                    'التحليل: التقييم بعد الحدث',
                  ],
                },
              ],
            },
            position: 10,
            visible: true,
          },
          {
            id: 'sec11',
            image: {
              url: '/uploads/joe-13/section11.png',
              alt: 'alt image 1',
            },
            title: {
              en: 'Our Products',
              ar: 'منتجاتنا',
            },
            content: {
              en: 'We Create, Innovate and Serve',
              ar: 'نبتكر ونُبدع ونُقدم الأفضل',
            },
            list: {
              en: [
                'JOE MI: Streamlines workflow and enhances sales operations for field promoters.',
                'ERP (powered by Odoo): Integrates business functions into one automated platform.',
                'Nos Wazeefa: A job-matching app with personalized recommendations.',
                'Elite Academy: Professional football training for youth.',
                'JoeX: App for managing merchandisers and promoters with real-time tracking.',
              ],
              ar: [
                'جو مي: يحسن إدارة العمل ويوفر تتبعاً فورياً لمندوبي المبيعات.',
                'نظام ERP (مدعوم من أودو): يدمج وظائف الأعمال في منصة واحدة مؤتمتة.',
                'نص وظيفة: تطبيق ذكي للربط بين الوظائف والمتقدمين المناسبين.',
                'أكاديمية إيليت: برامج تدريب احترافية في كرة القدم لتطوير المواهب.',
                'جو إكس: تطبيق لإدارة المروجين يتيح تتبع الحضور والمبيعات والمخزون بالموقع.',
              ],
            },
            objectData: {},
            list_Object: [],
            position: 11,
            visible: true,
          },
        ],
      },
      {
        slug: 'join-us',
        title: 'join-us',
        meta: {
          title: 'Join Joe13 - Grow with Us',
          description:
            'Be part of Joe13’s dynamic and inclusive team. Explore career opportunities in a culture of innovation, collaboration, and personal growth.',
          keywords: [
            'Join Joe13',
            'Careers',
            'Jobs at Joe13',
            'Work Culture',
            'HR',
            'Innovation',
            'Teamwork',
            'Flexible Work',
          ],
          canonicalUrl: 'https://yourdomain.com/join-us',
          ogTitle: 'Join Joe13 - Where Talent Meets Opportunity',
          ogDescription:
            'Looking to make an impact? Join Joe13 and thrive in an innovative and inclusive work environment.',
          ogImage: {
            url: '/uploads/joe-13/logo.png',
            alt: 'Joe13 Logo',
          },
          ogUrl: 'https://yourdomain.com/join-us',
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Joe13',
            url: 'https://yourdomain.com/join-us',
          },
          headScript: "<script>console.log('Head script loaded');</script>",
          bodyScript: "<script>console.log('Body script loaded');</script>",
        },

        sections: [
          {
            id: 'sec1',
            image: {
              url: '/uploads/joe-13/joinus.png',
              alt: 'alt image 1',
            },
            title: {
              en: 'Join Us',
              ar: 'انضم إلينا',
            },
            content: {
              en: "At Joe13th, we are committed to creating a dynamic and inclusive work environment where innovation, collaboration, and personal growth are at the heart of everything we do. We're looking for talented individuals who are passionate about making a difference and ready to contribute to a company that values their unique vision and skills.",
              ar: 'في Joe13th، نحن ملتزمون بخلق بيئة عمل ديناميكية وشاملة حيث تكون الابتكار، التعاون، والنمو الشخصي في صميم كل ما نقوم به. نحن نبحث عن أفراد موهوبين شغوفين بصنع الفرق ومستعدين للمساهمة في شركة تقدر رؤاهم ومهاراتهم الفريدة.',
            },
            list: [],
            objectData: {},
            list_Object: {
              ar: [
                {
                  title: 'لماذا تختار Joe13th؟ ثقافة',
                  list: [
                    'ثقافة الابتكار: كن جزءًا من فريق يحتضن الإبداع ويشجع التفكير المبتكر.',
                    'نمو مهني: نحن نستثمر في تطوير موظفينا المهني من خلال فرص التعلم المستمر.',
                    'بيئة تعاونية: اعمل بجانب خبراء الصناعة وتعاون في مشاريع ذات تأثير حقيقي.',
                    'التوازن بين العمل والحياة: نحن نؤمن بالحفاظ على توازن صحي بين العمل والحياة ونوفر ترتيبات عمل مرنة.',
                    'مكان عمل شامل: نحن نحتفل بالتنوع ونسعى لخلق بيئة شاملة يشعر فيها الجميع بالتقدير والاحترام.',
                  ],
                },
              ],
              en: [
                {
                  title: 'Why Choose Joe13th? Culture',
                  list: [
                    'Culture of Innovation: Be part of a team that embraces creativity and encourages innovative thinking.',
                    'Career Growth: We invest in our employees’ professional development through continuous learning opportunities.',
                    'Collaborative Environment: Work alongside industry experts and contribute to impactful projects.',
                    'Work-Life Balance: We believe in maintaining a healthy balance and offer flexible work arrangements.',
                    'Inclusive Workplace: We celebrate diversity and strive to create an inclusive environment where everyone feels valued and respected.',
                  ],
                },
              ],
            },
            position: 1,
            visible: true,
          },
        ],
      },
      {
        slug: 'contact-us',
        title: 'contact-us',
        meta: {
          title: 'Contact Us | Joe13',
          description:
            'Get in touch with Joe13. Our team is here to support you with any questions or inquiries you may have.',
          keywords: [
            'Join Joe13',
            'Careers',
            'Jobs at Joe13',
            'Work Culture',
            'HR',
            'Innovation',
            'Teamwork',
            'Flexible Work',
          ],
          canonicalUrl: 'https://yourdomain.com/contact-us',
          ogTitle: "Contact Joe13 – We're Here to Help",
          ogDescription:
            "Reach out to Joe13 with any inquiries, feedback, or support needs. We're ready to assist you.",
          ogImage: {
            url: '/uploads/joe-13/logo.png',
            alt: 'Joe13 Logo',
          },
          ogUrl: 'https://yourdomain.com/contact-us',
          ogType: 'website',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Joe13',
            url: 'https://yourdomain.com/contact-us',
          },
          headScript: "<script>console.log('Head script loaded');</script>",
          bodyScript: "<script>console.log('Body script loaded');</script>",
        },

        sections: [
          {
            id: 'sec1',
            image: {
              url: '/uploads/joe-13/contactus.png',
              alt: 'Contact Us Image',
            },
            title: {
              en: 'Contact Us',
              ar: 'تواصل معنا',
            },
            content: {
              en: 'Stay Connected – We’re Here to Help!',
              ar: 'ابقَ على تواصل – نحن هنا لمساعدتك!',
            },
            list: [],
            objectData: {},
            list_Object: {},
            position: 1,
            visible: true,
          },
        ],
      },
    ];

    await this.pageRepository.clear();
    const dataEntities = this.pageRepository.create(data as any);
    await this.pageRepository.save(dataEntities);
  }

  private async seedBlogs() {
    const departments = await this.departmentRepo.find();
    if (!departments.length) throw new Error('Departments not seeded.');

    const data = [
      {
        slug: 'marketing-department',
        title: {
          ar: 'التسويق',
          en: 'Marketing Department',
        },
        content: {
          en: 'In today’s dynamic marketplace, the Marketing Department at Joe13 stands at the forefront of innovation and creativity. We believe that effective marketing is about more than just selling products; it’s about telling a brand’s story and building lasting relationships with customers. Our team employs cutting-edge strategies, including digital marketing, social media campaigns, and content creation, to ensure your brand resonates with its audience.\n\nWe cater to diverse industries, adapting our approach to meet unique challenges. By analyzing market trends and consumer behavior, we craft targeted campaigns that drive engagement and foster brand loyalty. At Joe13, we don’t just market; we create experiences that connect and inspire.',
          ar: 'في السوق الديناميكي اليوم، يقف قسم التسويق في جو13 في طليعة الابتكار والإبداع. نحن نؤمن بأن التسويق الفعّال هو أكثر من مجرد بيع المنتجات؛ إنه يتعلق برواية قصة العلامة التجارية وبناء علاقات دائمة مع العملاء. يستخدم فريقنا استراتيجيات متطورة، بما في ذلك التسويق الرقمي، حملات وسائل التواصل الاجتماعي، وإنشاء المحتوى، لضمان تواصل علامتك التجارية مع جمهورها.\n\nنحن نقدم خدماتنا لمجموعة متنوعة من الصناعات، مع تكييف نهجنا لتلبية التحديات الفريدة. من خلال تحليل اتجاهات السوق وسلوك المستهلك، نصنع حملات مستهدفة تعزز التفاعل وتدعم ولاء العلامة التجارية. في جو13، لا نقوم بالتسويق فحسب؛ بل نخلق تجارب تربط وتلهم.',
        },
        author: 'Ahmed Abdelrhman',
        status: 'published',
        published_at: '2025-05-15T09:00:00.000Z',
        tags: [
          'branding',
          'digital marketing',
          'social media',
          'content creation',
        ],
        views_count: 300,
        meta_title: 'Marketing Department',
        meta_description:
          'In today’s dynamic marketplace, the Marketing Department at Joe13 stands at the forefront of innovation and creativity. We believe that effective marketing is about more than just selling products; it’s about telling a brand’s story and building lasting relationships with customers...',
        meta_keywords: [
          'marketing',
          'digital campaigns',
          'brand strategy',
          'social media marketing',
          'customer engagement',
        ],
        image_url: '/uploads/joe-13/blogs/1.png',
        image_alt: 'Marketing Department',
        department_id: 10,
      },
      {
        slug: 'telecom',
        title: {
          ar: 'الاتصالات',
          en: 'Telecom',
        },
        content: {
          en: 'In an ever-evolving world, the Telecom Department at Joe13 is dedicated to providing seamless communication solutions that empower businesses. We understand that reliable connectivity is crucial for success, and our expert team is here to deliver customized telecom services tailored to your needs.\n\nFrom robust network infrastructure to cutting-edge VoIP solutions, we ensure that your communication systems are not only efficient but also scalable. Our commitment to innovation means you’ll always be ahead of the curve, with solutions that adapt to changing technologies and market demands.',
          ar: 'في عالم يتطور باستمرار، يكرس قسم الاتصالات في جو13 جهوده لتقديم حلول اتصال سلسة تمكّن الشركات. نحن نفهم أن الاتصال الموثوق ضروري للنجاح، وفريقنا من الخبراء هنا لتقديم خدمات اتصالات مخصصة تناسب احتياجاتك.\n\nمن بنية الشبكة القوية إلى حلول VoIP المتطورة، نضمن أن أنظمة الاتصال لديك ليست فعالة فحسب، بل قابلة للتوسع أيضًا. التزامنا بالابتكار يعني أنك ستكون دائمًا في المقدمة، مع حلول تتكيف مع التغيرات التكنولوجية ومتطلبات السوق.',
        },
        author: 'Ahmed Abdelrhman',
        status: 'published',
        published_at: '2025-05-15T09:00:00.000Z',
        tags: [
          'communication',
          'connectivity',
          'telecom services',
          'technology',
        ],
        views_count: 300,
        meta_title: 'Telecom',
        meta_description:
          'In an ever-evolving world, the Telecom Department at Joe13 is dedicated to providing seamless communication solutions that empower businesses...',
        meta_keywords: [
          'telecommunications',
          'business communication',
          'connectivity solutions',
          'telecom innovation',
          'network services',
        ],
        image_url: '/uploads/joe-13/blogs/2.png',
        image_alt: 'Telecom',
        department_id: 5,
      },
      {
        slug: 'activation,-production,-and-event-management',
        title: {
          ar: 'قسم الإنتاج الإعلامي وإدارة الفعاليات',
          en: 'Activation, Production, and Event Management',
        },
        content: {
          en: 'At Joe13, our Activation, Production, and Event Management Department transforms visions into reality. We specialize in creating memorable experiences that engage audiences and elevate brands. Whether it’s a product launch, corporate event, or experiential marketing campaign, we handle every detail with precision and creativity.\n\nOur approach combines strategic planning with artistic flair, ensuring that every event is not just an occasion but a powerful statement. We pride ourselves on our ability to bring brands to life through immersive experiences, leaving a lasting impact on your audience.',
          ar: 'في جو13، يقوم قسم الإنتاج الإعلامي وإدارة الفعاليات بتحويل الرؤى إلى واقع. نحن متخصصون في خلق تجارب لا تُنسى تشد انتباه الجمهور وترتقي بالعلامات التجارية. سواء كان ذلك إطلاق منتج، أو حدثًا مؤسسيًا، أو حملة تسويق تجريبية، نحن نتولى كل التفاصيل بدقة وإبداع.\n\nيجمع نهجنا بين التخطيط الاستراتيجي والموهبة الفنية، مما يضمن أن كل حدث ليس مجرد مناسبة بل بيان قوي. نحن نفخر بقدرتنا على إحياء العلامات التجارية من خلال تجارب غامرة، تاركين أثرًا دائمًا على جمهورك.',
        },
        author: 'Ahmed Abdelrhman',
        status: 'published',
        published_at: '2025-05-15T09:00:00.000Z',
        tags: [
          'event planning',
          'production',
          'brand activation',
          'event management',
        ],
        views_count: 300,
        meta_title: 'Activation, Production, and Event Management',
        meta_description:
          'At Joe13, our Activation, Production, and Event Management Department transforms visions into reality...',
        meta_keywords: [
          'event production',
          'brand activation',
          'event management',
          'live events',
          'creative production',
        ],
        image_url: '/uploads/joe-13/blogs/3.png',
        image_alt: 'Activation, Production, and Event Management',
        department_id: 9,
      },
      {
        slug: 'manpower-and-hr-solutions',
        title: {
          ar: 'حلول الموارد البشرية والقوى العاملة',
          en: 'Manpower and HR Solutions',
        },
        content: {
          en: "In today’s competitive landscape, the right talent is your greatest asset. The Manpower and HR Solutions Department at Joe13 is dedicated to connecting businesses with skilled professionals who fit their culture and needs. We understand that effective recruitment goes beyond qualifications; it's about finding the perfect match for your team.\n\nOur comprehensive HR solutions encompass talent acquisition, employee training, and performance management. We help organizations cultivate a motivated workforce, fostering an environment where both employees and businesses can thrive.",
          ar: 'في جو13، يقوم قسم الإنتاج الإعلامي وإدارة الفعاليات بتحويل الرؤى إلى واقع. نحن متخصصون في خلق تجارب لا تُنسى تشد انتباه الجمهور وترتقي بالعلامات التجارية. سواء كان ذلك إطلاق منتج، أو حدثًا مؤسسيًا، أو حملة تسويق تجريبية، نحن نتولى كل التفاصيل بدقة وإبداع.\n\nيجمع نهجنا بين التخطيط الاستراتيجي والموهبة الفنية، مما يضمن أن كل حدث ليس مجرد مناسبة بل بيان قوي. نحن نفخر بقدرتنا على إحياء العلامات التجارية من خلال تجارب غامرة، تاركين أثرًا دائمًا على جمهورك.',
        },
        author: 'Ahmed Abdelrhman',
        status: 'published',
        published_at: '2025-05-15T09:00:00.000Z',
        tags: [
          'recruitment',
          'talent management',
          'HR services',
          'staffing solutions',
        ],
        views_count: 300,
        meta_title: 'Manpower and HR Solutions',
        meta_description:
          'In today’s competitive landscape, the right talent is your greatest asset...',
        meta_keywords: [
          'HR solutions',
          'manpower',
          'recruitment services',
          'talent acquisition',
          'employee training',
        ],
        image_url: '/uploads/joe-13/blogs/4.png',
        image_alt: 'Manpower and HR Solutions',
        department_id: 6,
      },
      {
        slug: 'merchandising',
        title: {
          ar: 'الترويج',
          en: 'Merchandising',
        },
        content: {
          en: 'The Merchandising Department at Joe13 is all about creating impactful presentations that drive sales and enhance brand identity. We understand that successful merchandising goes beyond just displaying products; it’s about crafting an experience that captivates consumers.\n\nOur team works across various sectors, from hypermarkets to beauty salons, tailoring strategies to fit each unique environment. By leveraging data analytics and consumer insights, we optimize product placement and promotional tactics, ensuring that your goods stand out in a crowded market.',
          ar: 'يتمحور قسم الترويج في جو13 حول إنشاء عروض مؤثرة تقود المبيعات وتعزز هوية العلامة التجارية. نحن نفهم أن الترويج الناجح يتجاوز مجرد عرض المنتجات؛ إنه يتعلق بصنع تجربة تأسر المستهلكين.\n\nيعمل فريقنا عبر قطاعات مختلفة، من الأسواق الكبرى إلى صالونات التجميل، مع تكييف الاستراتيجيات لتناسب كل بيئة فريدة. من خلال الاستفادة من تحليلات البيانات ورؤى المستهلك، نحن نعمل على تحسين وضع المنتجات وتكتيكات الترويج، لضمان بروز بضاعتك في سوق مزدحمة.',
        },
        author: 'Ahmed Abdelrhman',
        status: 'published',
        published_at: '2025-05-15T09:00:00.000Z',
        tags: [
          'retail',
          'product placement',
          'sales strategy',
          'visual marketing',
        ],
        views_count: 300,
        meta_title: 'Merchandising',
        meta_description:
          'The Merchandising Department at Joe13 is all about creating impactful presentations that drive sales...',
        meta_keywords: [
          'merchandising',
          'product display',
          'retail strategy',
          'sales boost',
          'in-store marketing',
        ],
        image_url: '/uploads/joe-13/blogs/5.png',
        image_alt: 'Merchandising',
        department_id: 8,
      },
      {
        slug: 'mosanadah',
        title: {
          ar: 'مساندة',
          en: 'Mosanadah',
        },
        content: {
          en: 'Mosanadah is dedicated to empowering businesses with expert financial consulting tailored to your unique needs. Our mission is to enhance financial performance through strategic planning and innovative solutions. We work closely with clients to develop customized strategies that promote sustainable growth and long-term success.\n\nWhether you are looking for financial planning, investment strategies, or guidance on expansion, Mosanadah provides the insights and expertise to navigate today’s complex financial landscape. Together, we can unlock new opportunities for your business.',
          ar: 'تكرس مساندة جهودها لتمكين الشركات من خلال استشارات مالية متخصصة تناسب احتياجاتك الفريدة. مهمتنا هي تعزيز الأداء المالي من خلال التخطيط الاستراتيجي والحلول المبتكرة. نعمل بشكل وثيق مع العملاء لتطوير استراتيجيات مخصصة تعزز النمو المستدام والنجاح على المدى الطويل.\n\nسواء كنت تبحث عن التخطيط المالي، أو استراتيجيات الاستثمار، أو الإرشاد بشأن التوسع، توفر مساندة الرؤى والخبرة اللازمة للتنقل في المشهد المالي المعقد اليوم. معًا، يمكننا فتح فرص جديدة لعملك.',
        },
        author: 'Ahmed Abdelrhman',
        status: 'published',
        published_at: '2025-05-15T09:00:00.000Z',
        tags: [
          'financial consulting',
          'business advisory',
          'financial planning',
          'support services',
        ],
        views_count: 300,
        meta_title: 'Mosanadah',
        meta_description:
          'Mosanadah is dedicated to empowering businesses with expert financial consulting...',
        meta_keywords: [
          'financial consulting',
          'business support',
          'corporate advisory',
          'financial solutions',
          'strategic planning',
        ],
        image_url: '/uploads/joe-13/blogs/6.png',
        image_alt: 'Mosanadah',
        department_id: 4,
      },
      {
        slug: 'software-and-ai',
        title: {
          ar: 'قسم البرمجيات والذكاء الاصطناعي',
          en: 'Software and AI',
        },
        content: {
          en: 'In a world driven by technology, the Software and AI Department at Joe13 is at the cutting edge of innovation. We specialize in developing intelligent solutions that streamline operations and enhance decision-making for businesses across various industries.\n\nOur offerings range from custom software development to AI-driven analytics, all designed to meet the specific needs of our clients. By harnessing the power of technology, we help businesses transform their operations and achieve greater efficiency, allowing them to focus on what they do best. Embrace the future with Joe13’s Software and AI solutions.',
          ar: 'في عالم مدفوع بالتكنولوجيا، يقف قسم البرمجيات والذكاء الاصطناعي في جو13  في طليعة الابتكار. نحن متخصصون في تطوير حلول ذكية تعمل على تبسيط العمليات وتعزيز اتخاذ القرار للشركات عبر مختلف الصناعات.\n\nتشمل عروضنا تطوير البرمجيات المخصصة وتحليلات الذكاء الاصطناعي، جميعها مصممة لتلبية الاحتياجات المحددة لعملائنا. من خلال الاستفادة من قوة التكنولوجيا، نساعد الشركات على تحويل عملياتها وتحقيق كفاءة أكبر، مما يسمح لها بالتركيز على ما تقوم به بشكل أفضل. احتضن المستقبل مع حلول البرمجيات والذكاء الاصطناعي من جو13 .',
        },
        author: 'Ahmed Abdelrhman',
        status: 'published',
        published_at: '2025-05-15T09:00:00.000Z',
        tags: [
          'technology',
          'artificial intelligence',
          'software development',
          'innovation',
        ],
        views_count: 300,
        meta_title: 'Software and AI',
        meta_description:
          'In a world driven by technology, the Software and AI Department at Joe13 is at the cutting edge of innovation...',
        meta_keywords: [
          'AI solutions',
          'software development',
          'technology innovation',
          'machine learning',
          'digital transformation',
        ],
        image_url: '/uploads/joe-13/blogs/7.png',
        image_alt: 'Software and AI',
        department_id: 1,
      },
    ];
    const fullData = data.map((project, i) => ({
      ...project,
      department: departments?.find((e) => e.id == project.department_id),
    }));

    await this.blogRepository.clear(); // Clears the table
    const dataEntities = this.blogRepository.create(fullData as any);
    await this.blogRepository.save(dataEntities); // Save all blog posts at once
  }

  private async seedCareers() {
    const data = [
      {
        title: { en: 'Software Engineer', ar: 'مهندس برمجيات' },
        description: {
          en: 'Responsible for developing and maintaining software applications.',
          ar: 'مسؤول عن تطوير وصيانة تطبيقات البرمجيات.',
        },
        requirments: {
          en: "Bachelor's degree in Computer Science or related field, 3+ years of experience.",
          ar: 'درجة بكالوريوس في علوم الكمبيوتر أو مجال ذي صلة، 3+ سنوات من الخبرة.',
        },
        benefits: {
          en: 'Health insurance, Paid vacation, Remote work option.',
          ar: 'تأمين صحي، إجازة مدفوعة، خيار العمل عن بُعد.',
        },
        image_url: 'https://placekitten.com/400/300',
        image_alt: 'Software Engineer',
        meta_title: {
          en: 'Software Engineer Job Opening',
          ar: 'فرصة عمل مهندس برمجيات',
        },
        meta_description: {
          en: 'Apply for the Software Engineer role at our company.',
          ar: 'قدم لوظيفة مهندس برمجيات في شركتنا.',
        },
        meta_keywords: {
          en: 'software, engineer, developer, coding, remote',
          ar: 'برمجيات، مهندس، مطور، ترميز، عن بُعد',
        },
      },
      {
        title: { en: 'Product Manager', ar: 'مدير منتج' },
        description: {
          en: 'Responsible for overseeing the product development process.',
          ar: 'مسؤول عن الإشراف على عملية تطوير المنتج.',
        },
        requirments: {
          en: '5+ years of experience in product management, excellent communication skills.',
          ar: '5+ سنوات من الخبرة في إدارة المنتجات، مهارات تواصل ممتازة.',
        },
        benefits: {
          en: 'Paid sick leave, Flexible working hours, Career development programs.',
          ar: 'إجازة مرضية مدفوعة، ساعات عمل مرنة، برامج تطوير مهني.',
        },
        image_url: 'https://placekitten.com/400/301',
        image_alt: 'Product Manager',
        meta_title: {
          en: 'Product Manager Job Opening',
          ar: 'فرصة عمل مدير منتج',
        },
        meta_description: {
          en: 'Join our team as a Product Manager and drive innovation.',
          ar: 'انضم إلى فريقنا كمدير منتج وادفع الابتكار.',
        },
        meta_keywords: {
          en: 'product, manager, leadership, strategy',
          ar: 'منتج، مدير، قيادة، استراتيجية',
        },
        created_at: '2025-04-02T11:00:00Z',
        updated_at: '2025-04-03T14:00:00Z',
      },
      {
        title: { en: 'UX/UI Designer', ar: 'مصمم UX/UI' },
        description: {
          en: 'Design user-friendly interfaces and ensure a great user experience.',
          ar: 'تصميم واجهات مستخدم سهلة الاستخدام وضمان تجربة مستخدم رائعة.',
        },
        requirments: {
          en: 'Proficiency in Figma, Adobe XD, or Sketch; 2+ years of experience in design.',
          ar: 'إتقان في Figma أو Adobe XD أو Sketch؛ 2+ سنوات من الخبرة في التصميم.',
        },
        benefits: {
          en: 'Health benefits, Professional development opportunities, Work-life balance.',
          ar: 'فوائد صحية، فرص تطوير مهني، توازن بين العمل والحياة.',
        },
        image_url: 'https://placekitten.com/400/302',
        image_alt: 'UX/UI Designer',
        meta_title: {
          en: 'UX/UI Designer Job Opening',
          ar: 'فرصة عمل مصمم UX/UI',
        },
        meta_description: {
          en: 'Looking for a creative and talented UX/UI Designer to join our team.',
          ar: 'نبحث عن مصمم UX/UI مبدع وموهوب للانضمام إلى فريقنا.',
        },
        meta_keywords: {
          en: 'UX, UI, design, user experience, Adobe XD',
          ar: 'UX، UI، تصميم، تجربة المستخدم، Adobe XD',
        },
        created_at: '2025-04-05T08:00:00Z',
        updated_at: '2025-04-06T09:30:00Z',
      },
      {
        title: { en: 'Marketing Specialist', ar: 'أخصائي تسويق' },
        description: {
          en: 'Manage and implement marketing strategies to enhance brand visibility.',
          ar: 'إدارة وتنفيذ استراتيجيات التسويق لتعزيز رؤية العلامة التجارية.',
        },
        requirments: {
          en: 'Bachelor’s degree in Marketing, 2+ years of experience in digital marketing.',
          ar: 'درجة بكالوريوس في التسويق، 2+ سنوات من الخبرة في التسويق الرقمي.',
        },
        benefits: {
          en: 'Annual leave, Career advancement opportunities, Training programs.',
          ar: 'إجازة سنوية، فرص التقدم الوظيفي، برامج تدريبية.',
        },
        image_url: 'https://placekitten.com/400/303',
        image_alt: 'Marketing Specialist',
        meta_title: {
          en: 'Marketing Specialist Job Opening',
          ar: 'فرصة عمل أخصائي تسويق',
        },
        meta_description: {
          en: 'Looking for a Marketing Specialist to join our team and boost brand recognition.',
          ar: 'نبحث عن أخصائي تسويق للانضمام إلى فريقنا وزيادة التعرف على العلامة التجارية.',
        },
        meta_keywords: {
          en: 'marketing, digital, branding, campaigns',
          ar: 'تسويق، رقمي، علامة تجارية، حملات',
        },
        created_at: '2025-04-07T12:00:00Z',
        updated_at: '2025-04-08T13:45:00Z',
      },
    ];

    await this.careerRepository.clear(); // Clears the table
    const dataEntities = this.careerRepository.create(data as any);
    await this.careerRepository.save(dataEntities); // Save all blog posts at once
  }

  private async seedteamMembers() {
    const data = [
      {
        name: { en: 'Yousef Kamal', ar: 'يوسف كمال' },
        position: { en: 'CEO', ar: 'الرئيس التنفيذي' },
        bio: {
          en: 'CEO with a vision to drive success.',
          ar: 'مع أكثر من 20 عامًا في المبيعات والتجزئة والتسويق، قاد يوسف النمو في شركات بارزة مثل أكسيوم تليكوم وسامسونج وJoe13. رؤيته الاستراتيجية ونهجه العملي يعززان ظهور العلامات التجارية ويشجعان النمو المستدام بفضل خبرته في تحليل السوق والتفاعل مع العملاء.',
        },
        image_url: '/uploads/joe-13/about-us/person1.png',
        image_alt: 'Yousef Kamal Image',
        order: 1,
      },
      {
        name: { en: 'Adnan Obaid', ar: 'عدنان عبيد' },
        position: { en: 'GM of Joe13th', ar: 'المدير العام لـ Joe13th' },
        bio: {
          en: 'General Manager at Joe13th.',
          ar: 'متخصص في العمليات والتسويق لأكثر من 15 عامًا. منذ عام 2019، قاد عدنان Joe13، حيث قاد مبادرات استراتيجية للنمو. يشمل خبرته أدوارًا في Advance Core Technology وشركة Yes Arabia للإنتاج، وشارك في تأسيس مركز Wisdom of Knowledge للتدريب في دبي.',
        },
        image_url: '/uploads/joe-13/about-us/person2.png',
        image_alt: 'Adnan Obaid Image',
        order: 2,
      },
      {
        name: { en: 'Ahmed Refaat', ar: 'أحمد رفعت' },
        position: { en: 'CFO', ar: 'المدير المالي' },
        bio: {
          en: 'Chief Financial Officer with strategic insight.',
          ar: 'خبير في الإدارة المالية، وتنفيذ نظم ERP، والتخطيط الاستراتيجي لأكثر من 20 عامًا. قاد تحويلات مالية، وأدار استثمارات، وأشرف على مشاريع الأتمتة. حاصل على شهادات CPA وCMA وCFA.',
        },
        image_url: '/uploads/joe-13/about-us/person3.png',
        image_alt: 'Ahmed Refaat Image',
        order: 3,
      },
      {
        name: { en: 'Eng. Mohammed Kamal', ar: 'م. محمد كمال' },
        position: {
          en: 'Country Operation Manager',
          ar: 'مدير العمليات في الدولة',
        },
        bio: {
          en: 'Oversees country operations efficiently.',
          ar: 'يركز على الحوكمة المؤسسية لأكثر من 5 سنوات، متخصصًا في تطوير الهياكل التنظيمية والأطر الفعالة. يلتزم بتحقيق الشفافية والكفاءة داخل الشركة.',
        },
        image_url: '/uploads/joe-13/about-us/person4.png',
        image_alt: 'Mohammed Kamal Image',
        order: 4,
      },
      {
        name: { en: 'Ahmad Alkashakri', ar: 'أحمد الكشاكري' },
        position: { en: 'Director of Business', ar: 'مدير الأعمال' },
        bio: {
          en: 'Leads the business department with excellence.',
          ar: 'يقود قسم الأعمال بامتياز.',
        },
        image_url: '/uploads/joe-13/about-us/person-Alkashakri.png',
        image_alt: 'Ahmad Alkashakri Image',
        order: 5,
      },
      {
        name: { en: 'Nour Eldien Mohamed', ar: 'نور الدين محمد' },
        position: { en: 'Software Manager', ar: 'مدير البرمجيات' },
        bio: {
          en: 'Manages software projects and teams.',
          ar: 'يدير مشاريع البرمجيات والفرق.',
        },
        image_url: '/uploads/joe-13/about-us/person-nour.png',
        image_alt: 'Nour Eldien Mohamed Image',
        order: 6,
      },
      {
        name: { en: 'Faisel', ar: 'فيصل' },
        position: { en: 'Head Of Marketing', ar: 'رئيس قسم التسويق' },
        bio: {
          en: 'Leading the marketing initiatives.',
          ar: 'يقود مبادرات التسويق.',
        },
        image_url: '/uploads/joe-13/about-us/person-faisel.png',
        image_alt: 'Faisel Image',
        order: 7,
      },
      {
        name: { en: 'Somaya Abdullah', ar: 'سمية عبدالله' },
        position: { en: 'HR Supervisor', ar: 'مشرفة الموارد البشرية' },
        bio: {
          en: 'Supervises HR operations and employee relations.',
          ar: 'تشرف على عمليات الموارد البشرية وعلاقات الموظفين.',
        },
        image_url: '/uploads/joe-13/about-us/person-somaya.png',
        image_alt: 'Somaya Abdullah Image',
        order: 8,
      },
      {
        name: { en: 'Abdulaziz', ar: 'عبدالعزيز' },
        position: { en: 'AI Developer', ar: 'مطوّر ذكاء اصطناعي' },
        bio: {
          en: 'Builds smart systems using AI technology.',
          ar: 'يبني أنظمة ذكية باستخدام تقنيات الذكاء الاصطناعي.',
        },
        image_url: '/uploads/joe-13/about-us/person-abdulaziz.png',
        image_alt: 'Abdulaziz Image',
        order: 9,
      },
      {
        name: { en: 'Lamis Saadoun', ar: 'لميس سعدون' },
        position: { en: 'Coordinator', ar: 'منسقة' },
        bio: {
          en: 'Ensures smooth coordination across teams.',
          ar: 'تضمن التنسيق السلس بين الفرق.',
        },
        image_url: '/uploads/joe-13/about-us/person-lamis.png',
        image_alt: 'Lamis Saadoun Image',
        order: 10,
      },
      {
        name: { en: 'Hani Darwish', ar: 'هاني درويش' },
        position: { en: 'Accountant', ar: 'محاسب' },
        bio: {
          en: 'Handles all financial and accounting matters.',
          ar: 'يتولى جميع الأمور المالية والمحاسبية.',
        },
        image_url: '/uploads/joe-13/about-us/person-hani.png',
        image_alt: 'Hani Darwish Image',
        order: 11,
      },
      {
        name: { en: 'Mohammed Alahdal', ar: 'محمد الأهدل' },
        position: { en: 'Project Manager', ar: 'مدير مشروع' },
        bio: {
          en: 'Plans and oversees projects from start to finish.',
          ar: 'بأكثر من 4 سنوات من الخبرة، يُعرف م/محمد الأهدل ببناء علاقات عملاء طويلة الأمد وتقديم حلول مخصصة.',
        },
        image_url: '/uploads/joe-13/about-us/person7.png',
        image_alt: 'Mohammed Alahdal Image',
        order: 12,
      },
      {
        name: { en: 'Rahim Ghafoor', ar: 'رحيم غفور' },
        position: { en: 'Senior Logistics Officer', ar: 'موظف لوجستي أول' },
        bio: {
          en: 'Handles complex logistics and supply chains.',
          ar: 'يتعامل مع العمليات اللوجستية وسلاسل التوريد المعقدة.',
        },
        image_url: '/uploads/joe-13/about-us/person-rahim.png',
        image_alt: 'Rahim Ghafoor Image',
        order: 13,
      },
    ];

    await this.teamMembersRepository.clear(); // Clears the table
    const dataEntities = this.teamMembersRepository.create(data as any);
    await this.teamMembersRepository.save(dataEntities); // Save all blog posts at once
  }

  private async seedDepartments() {
    const departmentsData = [
      {
        name: {
          en: 'IT & Software Development',
          ar: 'تطوير البرمجيات وتكنولوجيا المعلومات',
        },
        description: {
          en: 'Building modern software systems and digital platforms.',
          ar: 'بناء أنظمة برمجية حديثة ومنصات رقمية.',
        },
        image_url: '/upload/dept-marketing.png',
        image_alt: 'IT and Software Department',
      },
      {
        name: { en: 'Event Management', ar: 'إدارة الفعاليات' },
        description: {
          en: 'Organizing and managing corporate and social events.',
          ar: 'تنظيم وإدارة الفعاليات والمؤتمرات والاحتفالات.',
        },
        image_url: '/upload/dept-marketing.png',
        image_alt: 'Event Management Team Planning',
      },
      {
        name: { en: 'Digital Marketing', ar: 'التسويق الرقمي' },
        description: {
          en: 'Promoting brands and products via digital channels.',
          ar: 'الترويج للعلامات التجارية والمنتجات عبر القنوات الرقمية.',
        },
        image_url: '/upload/dept-marketing.png',
        image_alt: 'Digital Marketing Campaign Illustration',
      },
      {
        name: { en: 'Mosanadah', ar: 'المساندة' },
        description: {
          en: 'Providing support services for internal operations.',
          ar: 'تقديم خدمات المساندة والدعم للعمليات الداخلية.',
        },
        image_url: '/upload/dept-marketing.png',
        image_alt: 'Support Services (Mosanadah)',
      },
      {
        name: { en: 'telecoms', ar: 'الاتصالات' },
        description: {
          en: 'Delivering telecommunication and connectivity solutions.',
          ar: 'توفير حلول الاتصالات والتواصل.',
        },
        image_url: '/upload/dept-marketing.png',
        image_alt: 'Telecom Solutions and Networking',
      },
      {
        name: {
          en: 'Manpower & HR Solutions',
          ar: 'الموارد البشرية وحلول القوى العاملة',
        },
        description: {
          en: 'Offering staffing and HR management services.',
          ar: 'تقديم خدمات التوظيف وإدارة الموارد البشرية.',
        },
        image_url: '/upload/dept-marketing.png',
        image_alt: 'HR and Workforce Management Services',
      },
      {
        name: { en: 'Affiliate Marketing', ar: 'التسويق بالعمولة' },
        description: {
          en: 'Driving sales through affiliate partnerships.',
          ar: 'زيادة المبيعات عبر شراكات التسويق بالعمولة.',
        },
        image_url: '/upload/dept-marketing.png',
        image_alt: 'Affiliate Marketing Collaboration',
      },
      {
        name: { en: 'Merchandising', ar: 'الترويج' },
        description: {
          en: 'Creating impactful presentations that enhance brand identity and drive sales.',
          ar: 'إنشاء عروض مؤثرة تعزز هوية العلامة التجارية وتقود المبيعات.',
        },
        image_url: '/upload/dept-merchandising.png',
        image_alt: 'Merchandising Strategy',
      },
      {
        name: {
          en: 'Operation Coordination',
          ar: 'قسم الإنتاج الإعلامي وإدارة الفعاليات',
        },
        description: {
          en: 'Transforming visions into memorable brand experiences with strategic event management.',
          ar: 'تحويل الرؤى إلى تجارب لا تُنسى عبر إدارة الفعاليات الاستراتيجية.',
        },
        image_url: '/upload/dept-operations.png',
        image_alt: 'Event Management and Production',
      },
      {
        name: { en: 'Social Media Management', ar: 'التسويق' },
        description: {
          en: 'Crafting engaging content and campaigns to build meaningful customer relationships.',
          ar: 'إنشاء محتوى وحملات تواصل لبناء علاقات ذات معنى مع العملاء.',
        },
        image_url: '/upload/dept-social.png',
        image_alt: 'Creative Social Media Campaigns',
      },
    ];

    await this.offersReop.delete({});
    await this.blogRepository.delete({});
    await this.projectRepo.delete({});
    await this.departmentRepo.query(
      'TRUNCATE TABLE "departments" RESTART IDENTITY CASCADE',
    );

    const departments = this.departmentRepo.create(departmentsData as any);
    await this.departmentRepo.save(departments);
  }

  private async seedProjects() {
    const departments = await this.departmentRepo.find();
    if (!departments.length) throw new Error('Departments not seeded.');

    const projectData = [
      {
        name: {
          ar: 'أكاديمية النخبة للمهارات الرياضية',
          en: 'Elite Skills Sport Academy',
        },
        slug: 'elite-skills-sport-academy',
        description: {
          en: 'Elite Skills Sports Academy is a learning environment designed for boys and girls ages 3-12. We are a private, European-style soccer academy for players and parents who value proper learning of the game at the youngest ages.',
          ar: 'أكاديمية Elite Skills الرياضية هي بيئة تعليمية مصممة للبنين والبنات الذين تتراوح أعمارهم بين 3 و12 عامًا. نحن أكاديمية خاصة لكرة القدم على الطراز الأوروبي للاعبين وأولياء الأمور الذين يقدرون التعلم السليم للعبة في الأعمار الصغيرة.',
        },
        meta_title: 'Elite Skills Sport Academy',
        meta_description:
          'أكاديمية Elite Skills الرياضية هي بيئة تعليمية مصممة للبنين والبنات الذين تتراوح أعمارهم بين 3 و12 عامًا. نحن أكاديمية خاصة لكرة القدم على الطراز الأوروبي للاعبين وأولياء الأمور الذين يقدرون التعلم السليم للعبة في الأعمار الصغيرة.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'Elite Skills Sport Academy',
            url: '/uploads/joe-13/projects/1.png',
          },
          {
            id: 2,
            alt: 'Elite Skills Sport Academy',
            url: '/uploads/joe-13/projects/2.png',
          },
          {
            id: 3,
            alt: 'Elite Skills Sport Academy',
            url: '/uploads/joe-13/projects/3.png',
          },
        ],
        department: 1,
      },
      {
        name: {
          ar: 'خدمة ما بعد البيع',
          en: 'After Sales Services',
        },
        slug: 'after-sales-services',
        description: {
          en: 'is one of the biggest manufacturing companies in the middle east and was founded in 1975 their core business focused on the manufacture of heating, ventilation, and air conditioning products including air conditioners, actuators, heat exchangers, dampers, chillers, coolers, and air control products, we had the honor to work with them to create a mobile application where customers can book their technician appointment at their doorsteps.',
          ar: 'العيسى هو أكبر مورد لأجهزة التكييف في الشرق الأوسط أنشئ عام ١٩٧٥م وهو يعمل مع شركة جبسون العالمية وهنا يأتي دور شركة جو١٣ في تسهيل المهام الإدارية وإنشاء تطبيق يخدم عملائها ويمكنهم من حجز موعد صيانة لباب المنزل',
        },
        meta_title: 'After Sales Services',
        meta_description:
          'العيسى هو أكبر مورد لأجهزة التكييف في الشرق الأوسط أنشئ عام ١٩٧٥م وهو يعمل مع شركة جبسون العالمية وهنا يأتي دور شركة جو١٣ في تسهيل المهام الإدارية وإنشاء تطبيق يخدم عملائها ويمكنهم من حجز موعد صيانة لباب المنزل',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'After Sales Services',
            url: '/uploads/joe-13/projects/4.png',
          },
          {
            id: 2,
            alt: 'After Sales Services',
            url: '/uploads/joe-13/projects/5.png',
          },
          {
            id: 3,
            alt: 'After Sales Services',
            url: '/uploads/joe-13/projects/6.png',
          },
        ],
        department: 1,
      },
      {
        name: {
          ar: 'الأعمال الإلكترونية',
          en: 'E-Business',
        },
        slug: 'e-business',
        description: {
          en: 'Strengthen your Online presence and reach a wide range of of local and global markets. With the help of Joe13 specialists you can get ready to build your strong online infrastructure until your business is totally online.',
          ar: 'تعزيز تواجدك على الإنترنت والوصول إلى مجموعة واسعة من الأسواق المحلية والعالمية. بمساعدة متخصصي Joe13 ، يمكنك الاستعداد لبناء بنيتك التحتية القوية عبر الإنترنت حتى يصبح عملك على الإنترنت بالكامل.',
        },
        meta_title: 'E-Business',
        meta_description:
          'تعزيز تواجدك على الإنترنت والوصول إلى مجموعة واسعة من الأسواق المحلية والعالمية. بمساعدة متخصصي Joe13 ، يمكنك الاستعداد لبناء بنيتك التحتية القوية عبر الإنترنت حتى يصبح عملك على الإنترنت بالكامل.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'E-Business',
            url: '/uploads/joe-13/projects/7.png',
          },
          {
            id: 2,
            alt: 'E-Business',
            url: '/uploads/joe-13/projects/8.png',
          },
          {
            id: 3,
            alt: 'E-Business',
            url: '/uploads/joe-13/projects/9.png',
          },
        ],
        department: 1,
      },
      {
        name: {
          ar: 'Energize',
          en: 'Energize',
        },
        slug: 'energize',
        description: {
          en: 'Energize has succeeded in building and sustaining with the biggest brands in the market. JOE13 created a high-quality web design that build a unique and engaging website with visual appeal for the website users.',
          ar: 'نجحت شركة Energize في بناء ودعم أكبر العلامات التجارية في السوق. قامت شركة JOE13 بإنشاء تصميم ويب عالي الجودة لبناء موقع ويب فريد وجذاب مع جاذبية بصرية لمستخدمي الموقع.',
        },
        meta_title: 'Energize',
        meta_description:
          'نجحت شركة Energize في بناء ودعم أكبر العلامات التجارية في السوق. قامت شركة JOE13 بإنشاء تصميم ويب عالي الجودة لبناء موقع ويب فريد وجذاب مع جاذبية بصرية لمستخدمي الموقع.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'Energize',
            url: '/uploads/joe-13/projects/10.png',
          },
          {
            id: 2,
            alt: 'Energize',
            url: '/uploads/joe-13/projects/11.png',
          },
          {
            id: 3,
            alt: 'Energize',
            url: '/uploads/joe-13/projects/12.png',
          },
        ],
        department: 1,
      },
      {
        name: {
          ar: 'P & G',
          en: 'P&G',
        },
        slug: 'p&g',
        description: {
          en: 'P&G’s brands are household names and is used in almost every home in the Arabian Peninsula. We collaborated with them for managing their events and providing them with pleasant and skilled promoters. Our promoters are excelled in attracting new customers for the brand.',
          ar: 'بروكتر أند جامبل علامة تجارية رائدة تضم الكثير من المنتجات المنزلية الهامة التى يكاد لا يخلو منها بيت فى شبه الجزيرة العربية وقد قامت جو١٣ بالتعاون مع الشركة الرائدة في إدارة الفعاليات والأحداث الخاصة بهم وتزويدهم بفريق من مسئولي الترويج الرائعين المهرة وقد حققت جو13 نجاح متميز فى ارقام المبيعات.',
        },
        meta_title: 'P&G',
        meta_description:
          'بروكتر أند جامبل علامة تجارية رائدة تضم الكثير من المنتجات المنزلية الهامة التى يكاد لا يخلو منها بيت فى شبه الجزيرة العربية وقد قامت جو١٣ بالتعاون مع الشركة الرائدة في إدارة الفعاليات والأحداث الخاصة بهم وتزويدهم بفريق من مسئولي الترويج الرائعين المهرة وقد حققت جو13 نجاح متميز فى ارقام المبيعات.',
        meta_keywords: [],
        images: [
          {
            id: 2,
            alt: 'P&G',
            url: '/uploads/joe-13/projects/14.png',
          },
        ],
        department: 2,
      },
      {
        name: {
          ar: 'بيبسي',
          en: 'Pepsi',
        },
        slug: 'pepsi',
        description: {
          en: 'We powered Pepsi with our event planning and event management experts, the success here exceed the expectations for one of the biggest concerts in Jeddah which got supplied by our talented promoters for their branding.',
          ar: 'شركة بيبسى اشهر براند فى العالم، وقد قمامت جو١٣ بتعاون مشترك مع بيبسى في واحدة من أكبر الحفلات الموسيقية في جدة، بتزويد هذه الشركة الكبيرة بفريق من أفضل مسئولي الترويج الموهوبين للترويج للعلامات التجارية الخاصة بالشركة وقامت الشركة بتحقيق ما هو مطلوب.',
        },
        meta_title: 'Pepsi',
        meta_description:
          'شركة بيبسى اشهر براند فى العالم، وقد قمامت جو١٣ بتعاون مشترك مع بيبسى في واحدة من أكبر الحفلات الموسيقية في جدة، بتزويد هذه الشركة الكبيرة بفريق من أفضل مسئولي الترويج الموهوبين للترويج للعلامات التجارية الخاصة بالشركة وقامت الشركة بتحقيق ما هو مطلوب.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'Pepsi',
            url: '/uploads/joe-13/projects/15.png',
          },
          {
            id: 2,
            alt: 'Pepsi',
            url: '/uploads/joe-13/projects/16.png',
          },
        ],
        department: 2,
      },
      {
        name: {
          ar: 'Ice Age',
          en: 'Ice Age',
        },
        slug: 'ice-age',
        description: {
          en: 'Joe13 team was able to make the fiction come true by bringing Ice Age film characters from Bulgari directly to KSA along with climate simulation',
          ar: 'فريق جو١٣ قادر على تحويل الخيال إلى حقيقة. فنحن قمنا بإحضار عصر الثلج الفيلم الشهير، من بلغاريا مباشرةً إلى المملكة العربية السعودية بصنع تماثيل حيوانية على درجة عالية من الكفاءة . فريقنا المحترف استطاع تحويل طقس المملكة الحار إلى الاحساس بالبرودة والجليد وجذب انظار الجميع.',
        },
        meta_title: 'Ice Age',
        meta_description:
          'فريق جو١٣ قادر على تحويل الخيال إلى حقيقة. فنحن قمنا بإحضار عصر الثلج الفيلم الشهير، من بلغاريا مباشرةً إلى المملكة العربية السعودية بصنع تماثيل حيوانية على درجة عالية من الكفاءة . فريقنا المحترف استطاع تحويل طقس المملكة الحار إلى الاحساس بالبرودة والجليد وجذب انظار الجميع.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'Ice Age',
            url: '/uploads/joe-13/projects/17.png',
          },
          {
            id: 2,
            alt: 'Ice Age',
            url: '/uploads/joe-13/projects/18.png',
          },
        ],
        department: 2,
      },
      {
        name: {
          ar: 'الحازمي',
          en: 'Alhazmi',
        },
        slug: 'alhazmi',
        description: {
          en: 'We helped them build their online presence by taking full management of their digital marketing creating the best content and media design for their social media to form a strong meaningful platform. Along with their Google search, display and shopping campaigns. While also increasing their sales, followers and engagement.',
          ar: 'ساعدناهم في بناء هويتهم اونلاين عن طريق إدارة كاملة لتسويقهم الرقمي بصنع أفضل المحتويات والتصاميم لوسائل التواصل الاجتماعية الخاصة بهم لتشكيل منصة قوية ذات مغزى',
        },
        meta_title: 'Alhazmi',
        meta_description:
          'ساعدناهم في بناء هويتهم اونلاين عن طريق إدارة كاملة لتسويقهم الرقمي بصنع أفضل المحتويات والتصاميم لوسائل التواصل الاجتماعية الخاصة بهم لتشكيل منصة قوية ذات مغزى',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'Alhazmi',
            url: '/uploads/joe-13/projects/19.png',
          },
          {
            id: 2,
            alt: 'Alhazmi',
            url: '/uploads/joe-13/projects/20.png',
          },
        ],
        department: 3,
      },
      {
        name: {
          ar: 'شاركس',
          en: 'Sharks',
        },
        slug: 'sharks',
        description: {
          en: 'We worked with shark to power and improve their social media platform from Facebook to Twitter. Planning their marketing strategies, monthly content plan, CPC and much more. In addition to professional google search, display and shopping campaigns.',
          ar: 'عملنا حصريا مع شاركس لتقوية وتحسين منصة التواصل الاجتماعي الخاصة بهم ابتداء من فيسبوك إلى تويتر. خططنا استراتيجياتهم التسويقية، وخطة المحتوى الشهرية، والتصنيف المركزي للمنتجات وأكثر من ذلك بكثير. بالإضافة إلى حملات بحث، وعرض، والتسويق عبر قوقل.',
        },
        meta_title: 'Sharks',
        meta_description:
          'عملنا حصريا مع شاركس لتقوية وتحسين منصة التواصل الاجتماعي الخاصة بهم ابتداء من فيسبوك إلى تويتر. خططنا استراتيجياتهم التسويقية، وخطة المحتوى الشهرية، والتصنيف المركزي للمنتجات وأكثر من ذلك بكثير. بالإضافة إلى حملات بحث، وعرض، والتسويق عبر قوقل.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'Sharks',
            url: '/uploads/joe-13/projects/21.png',
          },
          {
            id: 2,
            alt: 'Sharks',
            url: '/uploads/joe-13/projects/22.png',
          },
          {
            id: 3,
            alt: 'Sharks',
            url: '/uploads/joe-13/projects/23.png',
          },
        ],
        department: 3,
      },
      {
        name: {
          ar: 'بيتاس',
          en: 'BTAS',
        },
        slug: 'btas',
        description: {
          en: 'We helped BTAS with the video contents and design as well as marketing campaigns for google, linked in and twitter. While also taking full control of their mobile app marketing to create competitive creative platforms.',
          ar: 'ساعدنا بيتاس في محتويات الفيديو والتصميم، وكذلك حملات التسويق لقوقل، وتويتر، ولنكد ان. وفي نفس الوقت عملنا على حملة التسويقية للتطبيق الهاتفي لعمل منصة ابداعية ومنافسة.',
        },
        meta_title: 'BTAS',
        meta_description:
          'ساعدنا بيتاس في محتويات الفيديو والتصميم، وكذلك حملات التسويق لقوقل، وتويتر، ولنكد ان. وفي نفس الوقت عملنا على حملة التسويقية للتطبيق الهاتفي لعمل منصة ابداعية ومنافسة.',
        meta_keywords: [],
        images: [
          {
            id: 2,
            alt: 'BTAS',
            url: '/uploads/joe-13/projects/25.png',
          },
        ],
        department: 3,
      },
      {
        name: {
          ar: 'Eya Clean',
          en: 'Eya Clean',
        },
        slug: 'eya-clean',
        description: {
          en: 'Mosanadah provided expert financial consultation to Eya Clean, helping them optimize their financial strategies and achieve sustainable growth',
          ar: 'قدمت مساندة استشارات مالية متخصصة لـ Eya Clean، مما ساعدهم على تحسين استراتيجياتهم المالية وتحقيق نمو مستدام.',
        },
        meta_title: 'Eya Clean',
        meta_description:
          'قدمت مساندة استشارات مالية متخصصة لـ Eya Clean، مما ساعدهم على تحسين استراتيجياتهم المالية وتحقيق نمو مستدام.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'Eya Clean',
            url: '/uploads/joe-13/projects/26.png',
          },
        ],
        department: 4,
      },
      {
        name: {
          ar: 'CPC',
          en: 'CPC',
        },
        slug: 'cpc',
        description: {
          en: 'Mosanadah implemented A cutting-edge ERP system for CPC, streamlining their operations, enhancing efficiency, and integrating key business processes. The strategic move empowered CPC to achieve better management and significant growth',
          ar: 'نفذت مساندة نظام ERP متطور لـ CPC، مما ساهم في تبسيط عملياتهم وزيادة الكفاءة ودمج العمليات التجارية الرئيسية. هذه الخطوة الاستراتيجية مكنت CPC من تحقيق إدارة أفضل ونمو كبير.',
        },
        meta_title: 'CPC',
        meta_description:
          'نفذت مساندة نظام ERP متطور لـ CPC، مما ساهم في تبسيط عملياتهم وزيادة الكفاءة ودمج العمليات التجارية الرئيسية. هذه الخطوة الاستراتيجية مكنت CPC من تحقيق إدارة أفضل ونمو كبير.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'CPC',
            url: '/uploads/joe-13/projects/27.png',
          },
        ],
        department: 4,
      },
      {
        name: {
          ar: 'Piva Cafe',
          en: 'Piva Cafe',
        },
        slug: 'piva-cafe',
        description: {
          en: 'Mosanadah provided Piva Café with a fully integrated financial management system, covering comprehensive account management and financial oversight. This collaboration aimed to enhance operational efficiency, streamline financial processes, and support Piva Café in achieving sustainable growth and success.',
          ar: 'قدمت مساندة نظام إدارة مالية متكامل لـ Piva Café، يشمل إدارة حسابات شاملة ومراقبة مالية دقيقة. هدفت هذه الشراكة إلى تعزيز الكفاءة التشغيلية وتبسيط العمليات المالية ودعم Piva Café في تحقيق نمو مستدام وناجح.',
        },
        meta_title: 'Piva Cafe',
        meta_description:
          'قدمت مساندة نظام إدارة مالية متكامل لـ Piva Café، يشمل إدارة حسابات شاملة ومراقبة مالية دقيقة. هدفت هذه الشراكة إلى تعزيز الكفاءة التشغيلية وتبسيط العمليات المالية ودعم Piva Café في تحقيق نمو مستدام وناجح.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'Piva Cafe',
            url: '/uploads/joe-13/projects/28.png',
          },
        ],
        department: 4,
      },
      {
        name: {
          ar: 'MCCD',
          en: 'MCCD',
        },
        slug: 'mccd',
        description: {
          en: 'Mosanadah developed and implemented a tailored ERP system for MCCD, designed to streamline operations, optimize project management, and enhance overall efficiency, enabling the company to achieve its goals with precision and scalability',
          ar: 'طورت ونفذت مساندة نظام ERP مخصص لـ MCCD، مصمم لتبسيط العمليات وتحسين إدارة المشاريع وزيادة الكفاءة العامة، مما مكن الشركة من تحقيق أهدافها بدقة وقابلية للتوسع.',
        },
        meta_title: 'MCCD',
        meta_description:
          'طورت ونفذت مساندة نظام ERP مخصص لـ MCCD، مصمم لتبسيط العمليات وتحسين إدارة المشاريع وزيادة الكفاءة العامة، مما مكن الشركة من تحقيق أهدافها بدقة وقابلية للتوسع.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'MCCD',
            url: '/uploads/joe-13/projects/29.png',
          },
        ],
        department: 4,
      },
      {
        name: {
          ar: 'Sara Group',
          en: 'Sara Group',
        },
        slug: 'sara-group',
        description: {
          en: 'In collaboration with Sara Group, a leader in detergents and personal care products, we redefined their retail presence through impactful merchandising. Strategic product placement and captivating displays ensured their products stood out, boosting customer engagement and solidifying their market position',
          ar: 'في تعاوننا مع Sara Group، الرائدة في منتجات التنظيف والعناية الشخصية، أعادنا تعريف وجودهم في تجارة التجزئة من خلال ترويج فعال. ساعدنا في وضع المنتجات بشكل استراتيجي وعروض جذابة لضمان تميز منتجاتهم وزيادة تفاعل العملاء وتعزيز موقعهم في السوق.',
        },
        meta_title: 'Sara Group',
        meta_description:
          'في تعاوننا مع Sara Group، الرائدة في منتجات التنظيف والعناية الشخصية، أعادنا تعريف وجودهم في تجارة التجزئة من خلال ترويج فعال. ساعدنا في وضع المنتجات بشكل استراتيجي وعروض جذابة لضمان تميز منتجاتهم وزيادة تفاعل العملاء وتعزيز موقعهم في السوق.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'Sara Group',
            url: '/uploads/joe-13/projects/30.png',
          },
        ],
        department: 2,
      },
      {
        name: {
          ar: 'Eya Clean',
          en: 'Eya Clean',
        },
        slug: 'eya-clean-2',
        description: {
          en: "Eya Clean's journey as a client of JOE13 Activation Services exemplifies the transformative power of experiential marketing. By embracing activation strategies, Eye Clean not only differentiated itself in a competitive market but also forged meaningful connections with its audience",
          ar: "Eya Clean's journey as a client of JOE13 Activation Services exemplifies the transformative power of experiential marketing. By embracing activation strategies, Eye Clean not only differentiated itself in a competitive market but also forged meaningful connections with its audience",
        },
        meta_title: 'Eya Clean',
        meta_description:
          "Eya Clean's journey as a client of JOE13 Activation Services exemplifies the transformative power of experiential marketing. By embracing activation strategies, Eye Clean not only differentiated itself in a competitive market but also forged meaningful connections with its audience",
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'Eya Clean',
            url: '/uploads/joe-13/projects/31.png',
          },
        ],
        department: 2,
      },
      {
        name: {
          ar: 'Hersheys',
          en: 'Hersheys',
        },
        slug: 'hersheys',
        description: {
          en: "Our collaboration with Hersheys, one of the world’s most iconic chocolate brands, showcased the power of creative activations. By designing immersive and engaging experiences, we brought Hershey's essence to life, connecting the brand with its audience in unforgettable ways. From interactive concepts to on-ground activities, every moment celebrated the joy and indulgence Hershey's is known for, creating sweet memories.",
          ar: "كان تعاوننا مع Hersheys، واحدة من أشهر علامات الشوكولاتة في العالم، دليلًا على قوة الأنشطة الإبداعية. من خلال تصميم تجارب غامرة وجذابة، جلبنا جوهر Hershey's إلى الحياة، وربطنا العلامة التجارية بجمهورها بطرق لا تُنسى.",
        },
        meta_title: 'Hersheys',
        meta_description:
          "كان تعاوننا مع Hersheys، واحدة من أشهر علامات الشوكولاتة في العالم، دليلًا على قوة الأنشطة الإبداعية. من خلال تصميم تجارب غامرة وجذابة، جلبنا جوهر Hershey's إلى الحياة، وربطنا العلامة التجارية بجمهورها بطرق لا تُنسى.",
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'Hersheys',
            url: '/uploads/joe-13/projects/32.png',
          },
        ],
        department: 2,
      },
      {
        name: {
          ar: 'Godiva',
          en: 'Godiva',
        },
        slug: 'godiva',
        description: {
          en: 'We supported Godiva’s activation through high-quality production, crafting elegant setups that perfectly captured the brand’s luxurious identity and elevated customer experiences',
          ar: 'دعمنا أنشطة Godiva من خلال إنتاج عالي الجودة، حيث قمنا بإنشاء إعدادات أنيقة تعكس هوية العلامة التجارية الفاخرة وترفع من تجربة العملاء.',
        },
        meta_title: 'Godiva',
        meta_description:
          'دعمنا أنشطة Godiva من خلال إنتاج عالي الجودة، حيث قمنا بإنشاء إعدادات أنيقة تعكس هوية العلامة التجارية الفاخرة وترفع من تجربة العملاء.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'Godiva',
            url: '/uploads/joe-13/projects/33.png',
          },
        ],
        department: 2,
      },
      {
        name: {
          ar: 'Little Asia Festival at Jeddah City Walk',
          en: 'Little Asia Festival at Jeddah City Walk',
        },
        slug: 'little-asia-festival-at-jeddah-city-walk',
        description: {
          en: 'The Little Asia Festival at Jeddah City Walk came to life with our Entertainment Department managing skilled manpower and seamless operations, ensuring a vibrant celebration of Asian heritage and an unforgettable experience for visitors',
          ar: 'أحيا مهرجان Little Asia في Jeddah City Walk فريق الترفيه لدينا من خلال إدارة القوى العاملة الماهرة والعمليات السلسة، مما يضمن احتفالًا حيويًا بالتراث الآسيوي وتجربة لا تُنسى للزوار.',
        },
        meta_title: 'Little Asia Festival at Jeddah City Walk',
        meta_description:
          'أحيا مهرجان Little Asia في Jeddah City Walk فريق الترفيه لدينا من خلال إدارة القوى العاملة الماهرة والعمليات السلسة، مما يضمن احتفالًا حيويًا بالتراث الآسيوي وتجربة لا تُنسى للزوار.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'Little Asia Festival at Jeddah City Walk',
            url: '/uploads/joe-13/projects/34.png',
          },
        ],
        department: 2,
      },
      {
        name: {
          ar: 'Friendi',
          en: 'Friendi',
        },
        slug: 'friendi',
        description: {
          en: 'Through our Direct Sales collaboration with Friendi, we provide innovative B2C solutions designed to deliver exceptional value and flexibility. This partnership enables us to meet customer needs with top-quality telecommunications services and a seamless user experience',
          ar: 'من خلال تعاوننا المباشر مع Friendi، نقدم حلولًا مبتكرة للعملاء الأفراد (B2C) مصممة لتقديم قيمة استثنائية ومرونة عالية. تمكننا هذه الشراكة من تلبية احتياجات العملاء بخدمات اتصالات عالية الجودة وتجربة مستخدم سلسة.',
        },
        meta_title: 'Friendi',
        meta_description:
          'من خلال تعاوننا المباشر مع Friendi، نقدم حلولًا مبتكرة للعملاء الأفراد (B2C) مصممة لتقديم قيمة استثنائية ومرونة عالية. تمكننا هذه الشراكة من تلبية احتياجات العملاء بخدمات اتصالات عالية الجودة وتجربة مستخدم سلسة.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'Friendi',
            url: '/uploads/joe-13/projects/35.png',
          },
        ],
        department: 5,
      },
      {
        name: {
          ar: 'Zain',
          en: 'Zain',
        },
        slug: 'zain',
        description: {
          en: 'The division specializes in delivering exceptional telecommunications services, working closely with Zain to provide advanced B2B solutions that cater to business needs and support them in achieving their goals efficiently and effectively',
          ar: 'يتخصص القسم في تقديم خدمات اتصالات استثنائية، بالتعاون الوثيق مع Zain لتقديم حلول متقدمة للشركات (B2B) تلبي احتياجات الأعمال وتساعدها على تحقيق أهدافها بكفاءة وفعالية.',
        },
        meta_title: 'Zain',
        meta_description:
          'يتخصص القسم في تقديم خدمات اتصالات استثنائية، بالتعاون الوثيق مع Zain لتقديم حلول متقدمة للشركات (B2B) تلبي احتياجات الأعمال وتساعدها على تحقيق أهدافها بكفاءة وفعالية.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'Zain',
            url: '/uploads/joe-13/projects/36.png',
          },
        ],
        department: 5,
      },
      {
        name: {
          ar: 'Mobily',
          en: 'Mobily',
        },
        slug: 'mobily',
        description: {
          en: 'The division provides outstanding telecommunications services, collaborating with Mobily to deliver exceptional B2C solutions during Hajj and Umrah seasons, ensuring seamless connectivity and unmatched customer experience for pilgrims',
          ar: 'يوفر القسم خدمات اتصالات متميزة، بالتعاون مع Mobily لتقديم حلول استثنائية للعملاء الأفراد (B2C) خلال مواسم الحج والعمرة، مما يضمن اتصالًا سلسًا وتجربة عملاء لا مثيل لها للحجاج.',
        },
        meta_title: 'Mobily',
        meta_description:
          'يوفر القسم خدمات اتصالات متميزة، بالتعاون مع Mobily لتقديم حلول استثنائية للعملاء الأفراد (B2C) خلال مواسم الحج والعمرة، مما يضمن اتصالًا سلسًا وتجربة عملاء لا مثيل لها للحجاج.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'Mobily',
            url: '/uploads/joe-13/projects/37.png',
          },
        ],
        department: 5,
      },
      {
        name: {
          ar: 'RedBull Mobile',
          en: 'RedBull Mobile',
        },
        slug: 'redbull-mobile',
        description: {
          en: 'We are proud to work with Red Bull Mobile, offering tailored B2C solutions through Modern Trades and Direct Sales. Our approach focuses on delivering top-tier telecommunications products and services that align with customer expectations',
          ar: 'نفخر بالعمل مع Red Bull Mobile، حيث نقدم حلولًا مخصصة للعملاء الأفراد (B2C) من خلال المبيعات الحديثة والمباشرة. نركز على تقديم منتجات وخدمات اتصالات عالية الجودة تلبي توقعات العملاء.',
        },
        meta_title: 'RedBull Mobile',
        meta_description:
          'نفخر بالعمل مع Red Bull Mobile، حيث نقدم حلولًا مخصصة للعملاء الأفراد (B2C) من خلال المبيعات الحديثة والمباشرة. نركز على تقديم منتجات وخدمات اتصالات عالية الجودة تلبي توقعات العملاء.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'RedBull Mobile',
            url: '/uploads/joe-13/projects/38.png',
          },
        ],
        department: 5,
      },
      {
        name: {
          ar: 'Virgin Mobile',
          en: 'Virgin Mobile',
        },
        slug: 'virgin-mobile',
        description: {
          en: 'Our team specializes in Modern Trades and Direct Sales, working with Virgin Mobile to deliver outstanding B2C solutions. We ensure customers enjoy high-quality telecommunications products and services that meet their expectations',
          ar: 'يتخصص فريقنا في المبيعات الحديثة والمباشرة، بالتعاون مع Virgin Mobile لتقديم حلول استثنائية للعملاء الأفراد (B2C). نضمن للعملاء الاستمتاع بمنتجات وخدمات اتصالات عالية الجودة تلبي توقعاتهم.',
        },
        meta_title: 'Virgin Mobile',
        meta_description:
          'يتخصص فريقنا في المبيعات الحديثة والمباشرة، بالتعاون مع Virgin Mobile لتقديم حلول استثنائية للعملاء الأفراد (B2C). نضمن للعملاء الاستمتاع بمنتجات وخدمات اتصالات عالية الجودة تلبي توقعاتهم.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'Virgin Mobile',
            url: '/uploads/joe-13/projects/39.png',
          },
        ],
        department: 5,
      },
      {
        name: {
          ar: 'Salam Mobile',
          en: 'Salam Mobile',
        },
        slug: 'salam-mobile',
        description: {
          en: 'The division offers exceptional direct sales services, partnering with Salam to deliver B2C solutions that focus on providing customers with high-quality telecommunications products and services',
          ar: 'يقدم القسم خدمات مبيعات مباشرة استثنائية، بالشراكة مع Salam لتقديم حلول للعملاء الأفراد (B2C) تركز على تزويد العملاء بمنتجات وخدمات اتصالات عالية الجودة.',
        },
        meta_title: 'Salam Mobile',
        meta_description:
          'يقدم القسم خدمات مبيعات مباشرة استثنائية، بالشراكة مع Salam لتقديم حلول للعملاء الأفراد (B2C) تركز على تزويد العملاء بمنتجات وخدمات اتصالات عالية الجودة.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'Salam Mobile',
            url: '/uploads/joe-13/projects/40.png',
          },
        ],
        department: 5,
      },
      {
        name: {
          ar: 'NOKIA',
          en: 'NOKIA',
        },
        slug: 'nokia',
        description: {
          en: 'NOKIA When seeing this logo we remember first held phone and many digital solution made in Finland the oldest and pioneer telecom and informational techs experts through various products like phones, application and other multimedia services and devices covering widely the whole planet.',
          ar: 'عند رؤية شعار NOKIA، نتذكر أول هاتف محمول والعديد من الحلول الرقمية التي تم تطويرها في فنلندا. تُعد NOKIA من أقدم الشركات الرائدة في مجال الاتصالات وتقنية المعلومات، حيث تقدم منتجات متنوعة مثل الهواتف والتطبيقات وأجهزة الوسائط المتعددة التي تغطي احتياجات العالم بأكمله.',
        },
        meta_title: 'NOKIA',
        meta_description:
          'عند رؤية شعار NOKIA، نتذكر أول هاتف محمول والعديد من الحلول الرقمية التي تم تطويرها في فنلندا. تُعد NOKIA من أقدم الشركات الرائدة في مجال الاتصالات وتقنية المعلومات، حيث تقدم منتجات متنوعة مثل الهواتف والتطبيقات وأجهزة الوسائط المتعددة التي تغطي احتياجات العالم بأكمله.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'NOKIA',
            url: '/uploads/joe-13/projects/41.png',
          },
        ],
        department: 6,
      },
      {
        name: {
          ar: 'SAMSUNG',
          en: 'SAMSUNG',
        },
        slug: 'samsung',
        description: {
          en: 'SAMSUNG The biggest electric devices vendor worldwide starting with media devices, monitors, home appliances and mobile smart phones. Since 1938 samsung is a leader of innovations such as pc parts and other softwares provided to make life easy and always helping humanity to have the latest technologies allowed by everyone',
          ar: 'تُعد SAMSUNG أكبر مورد للأجهزة الإلكترونية في العالم، حيث تبدأ بأجهزة الوسائط والشاشات والأجهزة المنزلية والهواتف الذكية. منذ عام 1938، تُعد SAMSUNG رائدة في الابتكارات مثل أجزاء الكمبيوتر والبرمجيات التي تسهل الحياة وتساعد البشرية في الوصول إلى أحدث التقنيات.',
        },
        meta_title: 'SAMSUNG',
        meta_description:
          'تُعد SAMSUNG أكبر مورد للأجهزة الإلكترونية في العالم، حيث تبدأ بأجهزة الوسائط والشاشات والأجهزة المنزلية والهواتف الذكية. منذ عام 1938، تُعد SAMSUNG رائدة في الابتكارات مثل أجزاء الكمبيوتر والبرمجيات التي تسهل الحياة وتساعد البشرية في الوصول إلى أحدث التقنيات.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'SAMSUNG',
            url: '/uploads/joe-13/projects/42.png',
          },
        ],
        department: 6,
      },
      {
        name: {
          ar: 'HADDAD',
          en: 'HADDAD',
        },
        slug: 'haddad',
        description: {
          en: 'HADDAD is one of the leading retailers of telecommunication giants in the Kingdom. We provided them with quality customer surveys at different branches all around the Kingdom',
          ar: 'تُعد HADDAD واحدة من أكبر تجار التجزئة لعمالقة الاتصالات في المملكة. قدمنا لهم استطلاعات رأي عملاء عالية الجودة في فروع مختلفة في جميع أنحاء المملكة.',
        },
        meta_title: 'HADDAD',
        meta_description:
          'تُعد HADDAD واحدة من أكبر تجار التجزئة لعمالقة الاتصالات في المملكة. قدمنا لهم استطلاعات رأي عملاء عالية الجودة في فروع مختلفة في جميع أنحاء المملكة.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'HADDAD',
            url: '/uploads/joe-13/projects/43.png',
          },
        ],
        department: 6,
      },
      {
        name: {
          ar: 'VIVO',
          en: 'VIVO',
        },
        slug: 'vivo',
        description: {
          en: 'Vivo, a global leader in smartphone innovation and technology, collaborates with us to achieve greater market reach and enhanced brand visibility. Our partnership reflects a shared commitment to excellence, driving unparalleled customer engagement and setting new standards in the consumer electronics sector',
          ar: 'تعاونت VIVO، الرائدة عالميًا في ابتكارات الهواتف الذكية والتقنية، معنا لتحقيق وصول أكبر إلى الأسواق وزيادة ظهور العلامة التجارية. تعكس شراكتنا التزامًا مشتركًا بالتميز، مما يؤدي إلى تفاعل عملاء غير مسبوق ووضع معايير جديدة في قطاع الإلكترونيات الاستهلاكية.',
        },
        meta_title: 'VIVO',
        meta_description:
          'تعاونت VIVO، الرائدة عالميًا في ابتكارات الهواتف الذكية والتقنية، معنا لتحقيق وصول أكبر إلى الأسواق وزيادة ظهور العلامة التجارية. تعكس شراكتنا التزامًا مشتركًا بالتميز، مما يؤدي إلى تفاعل عملاء غير مسبوق ووضع معايير جديدة في قطاع الإلكترونيات الاستهلاكية.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'VIVO',
            url: '/uploads/joe-13/projects/44.png',
          },
        ],
        department: 6,
      },
      {
        name: {
          ar: 'TCL',
          en: 'TCL',
        },
        slug: 'tcl',
        description: {
          en: 'TCL, a leader in the electronics sector, partnered with our HR Outsourcing Department to optimize workforce management and drive operational efficiency. Through tailored HR solutions, we supported their efforts in streamlining processes, ensuring compliance, and enhancing productivity. This collaboration allowed TCL to focus on innovation while maintaining their competitive edge in the global market',
          ar: 'تعاونت TCL، الرائدة في قطاع الإلكترونيات، مع قسمنا لتوظيف الحلول البشرية لتحسين إدارة القوى العاملة وزيادة الكفاءة التشغيلية. من خلال حلول موارد بشرية مخصصة، دعمنا جهودهم في تبسيط العمليات وضمان الامتثال وتعزيز الإنتاجية.',
        },
        meta_title: 'TCL',
        meta_description:
          'تعاونت TCL، الرائدة في قطاع الإلكترونيات، مع قسمنا لتوظيف الحلول البشرية لتحسين إدارة القوى العاملة وزيادة الكفاءة التشغيلية. من خلال حلول موارد بشرية مخصصة، دعمنا جهودهم في تبسيط العمليات وضمان الامتثال وتعزيز الإنتاجية.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'TCL',
            url: '/uploads/joe-13/projects/45.png',
          },
        ],
        department: 6,
      },
      {
        name: {
          ar: 'MIDEA',
          en: 'MIDEA',
        },
        slug: 'midea',
        description: {
          en: 'Midea, recognized for its innovation in home appliances and advanced technologies, collaborated with our HR Outsourcing Department to elevate their workforce strategies and optimize HR processes. By crafting innovative approaches, we supported their operational growth and strengthened their competitive position in the global market',
          ar: 'تعاونت MIDEA، المعروفة بابتكاراتها في الأجهزة المنزلية والتقنيات المتقدمة، مع قسمنا لتوظيف الحلول البشرية لتحسين استراتيجيات القوى العاملة وتبسيط عمليات الموارد البشرية. من خلال نهج مبتكر، دعمنا نموهم التشغيلي وعززنا موقعهم التنافسي في السوق العالمية.',
        },
        meta_title: 'MIDEA',
        meta_description:
          'تعاونت MIDEA، المعروفة بابتكاراتها في الأجهزة المنزلية والتقنيات المتقدمة، مع قسمنا لتوظيف الحلول البشرية لتحسين استراتيجيات القوى العاملة وتبسيط عمليات الموارد البشرية. من خلال نهج مبتكر، دعمنا نموهم التشغيلي وعززنا موقعهم التنافسي في السوق العالمية.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'MIDEA',
            url: '/uploads/joe-13/projects/46.png',
          },
        ],
        department: 6,
      },
      {
        name: {
          ar: 'KIA',
          en: 'KIA',
        },
        slug: 'kia',
        description: {
          en: 'Our collaboration with KIA brought their vision to life through professional photography, digital marketing strategies, and account management. By creating compelling visuals and managing their online presence, we helped KIA connect with their audience and reinforce their brand identity',
          ar: 'جلب تعاوننا مع KIA رؤيتهم إلى الحياة من خلال التصوير الفوتوغرافي المحترف واستراتيجيات التسويق الرقمي وإدارة الحسابات. من خلال إنشاء مرئيات جذابة وإدارة وجودهم عبر الإنترنت، ساعدناهم في التواصل مع جمهورهم وتعزيز هوية علامتهم التجارية.',
        },
        meta_title: 'KIA',
        meta_description:
          'جلب تعاوننا مع KIA رؤيتهم إلى الحياة من خلال التصوير الفوتوغرافي المحترف واستراتيجيات التسويق الرقمي وإدارة الحسابات. من خلال إنشاء مرئيات جذابة وإدارة وجودهم عبر الإنترنت، ساعدناهم في التواصل مع جمهورهم وتعزيز هوية علامتهم التجارية.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'KIA',
            url: '/uploads/joe-13/projects/47.png',
          },
        ],
        department: 3,
      },
      {
        name: {
          ar: 'Jetour',
          en: 'Jetour',
        },
        slug: 'jetour',
        description: {
          en: 'In collaboration with JETOUR, our marketing team delivered professional photography and media production that highlighted their automotive excellence. Through creative visuals, we showcased the brand’s innovation and strengthened its market presence',
          ar: 'في تعاوننا مع JETOUR، قدم فريق التسويق لدينا تصويرًا فوتوغرافيًا وإنتاجًا إعلاميًا محترفًا سلط الضوء على تميزهم في صناعة السيارات. من خلال المرئيات الإبداعية، عرضنا ابتكارات العلامة التجارية وقوينا حضورها في السوق.',
        },
        meta_title: 'Jetour',
        meta_description:
          'في تعاوننا مع JETOUR، قدم فريق التسويق لدينا تصويرًا فوتوغرافيًا وإنتاجًا إعلاميًا محترفًا سلط الضوء على تميزهم في صناعة السيارات. من خلال المرئيات الإبداعية، عرضنا ابتكارات العلامة التجارية وقوينا حضورها في السوق.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'Jetour',
            url: '/uploads/joe-13/projects/48.png',
          },
        ],
        department: 3,
      },
      {
        name: {
          ar: 'My Phone',
          en: 'My Phone',
        },
        slug: 'my-phone',
        description: {
          en: 'We work closely with MyPhone to develop tailored marketing strategies, manage campaigns, and create engaging content. Our goal is to enhance their brand presence, reach a wider audience, and support their business growth through effective marketing solutions',
          ar: 'نعمل عن كثب مع MyPhone لتطوير استراتيجيات تسويقية مخصصة وإدارة الحملات وإنشاء محتوى جذاب. هدفنا هو تعزيز حضور علامتهم التجارية ووصولهم إلى جمهور أوسع ودعم نمو أعمالهم من خلال حلول تسويقية فعالة.',
        },
        meta_title: 'My Phone',
        meta_description:
          'نعمل عن كثب مع MyPhone لتطوير استراتيجيات تسويقية مخصصة وإدارة الحملات وإنشاء محتوى جذاب. هدفنا هو تعزيز حضور علامتهم التجارية ووصولهم إلى جمهور أوسع ودعم نمو أعمالهم من خلال حلول تسويقية فعالة.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'My Phone',
            url: '/uploads/joe-13/projects/49.png',
          },
        ],
        department: 3,
      },
      {
        name: {
          ar: 'HASHI BASHA RESTAURANTS',
          en: 'HASHI BASHA RESTAURANTS',
        },
        slug: 'hashi-basha-restaurants',
        description: {
          en: 'We worked closely with Hashi Basha Restaurants to manage their digital marketing and account operations. By implementing customized strategies and driving consistent online interactions, we helped elevate their brand identity and expand their reach to a broader audience',
          ar: 'عملنا عن كثب مع مطاعم Hashi Basha لإدارة تسويقهم الرقمي وعمليات الحسابات. من خلال تنفيذ استراتيجيات مخصصة ودفع التفاعلات المستمرة عبر الإنترنت، ساعدناهم في تعزيز هوية علامتهم التجارية وتوسيع وصولهم إلى جمهور أوسع.',
        },
        meta_title: 'HASHI BASHA RESTAURANTS',
        meta_description:
          'عملنا عن كثب مع مطاعم Hashi Basha لإدارة تسويقهم الرقمي وعمليات الحسابات. من خلال تنفيذ استراتيجيات مخصصة ودفع التفاعلات المستمرة عبر الإنترنت، ساعدناهم في تعزيز هوية علامتهم التجارية وتوسيع وصولهم إلى جمهور أوسع.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'HASHI BASHA RESTAURANTS',
            url: '/uploads/joe-13/projects/50.png',
          },
        ],
        department: 3,
      },
      {
        name: {
          ar: 'AL ANOUD UNITED',
          en: 'AL ANOUD UNITED',
        },
        slug: 'al-anoud-united',
        description: {
          en: 'Through our Branding Services, we partnered with Al Anoud United Contracting to create a distinctive and professional identity. From designing their logo and ID cards to crafting a compelling portfolio, we ensured every detail aligned with their vision and industry standards. This collaboration demonstrated our expertise in delivering branding solutions that stand out and leave a lasting impression',
          ar: 'من خلال خدمات العلامة التجارية، تعاونا مع Al Anoud United Contracting لإنشاء هوية مميزة ومحترفة. من تصميم الشعار وبطاقات الهوية إلى إنشاء محفظة أعمال جذابة، تأكدنا من أن كل التفاصيل تتماشى مع رؤيتهم ومعايير الصناعة.',
        },
        meta_title: 'AL ANOUD UNITED',
        meta_description:
          'من خلال خدمات العلامة التجارية، تعاونا مع Al Anoud United Contracting لإنشاء هوية مميزة ومحترفة. من تصميم الشعار وبطاقات الهوية إلى إنشاء محفظة أعمال جذابة، تأكدنا من أن كل التفاصيل تتماشى مع رؤيتهم ومعايير الصناعة.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'AL ANOUD UNITED',
            url: '/uploads/joe-13/projects/51.png',
          },
        ],
        department: 3,
      },
      {
        name: {
          ar: 'AUTOONO',
          en: 'AUTOONO',
        },
        slug: 'autoono',
        description: {
          en: 'We created a comprehensive brand identity for Autoono, including logo design, content creation, and ID card designs. This ensured a professional image that reflects the company’s vision and strengthens its presence in the marke',
          ar: 'أنشأنا هوية علامة تجارية شاملة لـ Autoono، بما في ذلك تصميم الشعار وإنشاء المحتوى وتصميم بطاقات الهوية. هذا يضمن صورة محترفة تعكس رؤية الشركة وتعزز حضورها في السوق.',
        },
        meta_title: 'AUTOONO',
        meta_description:
          'أنشأنا هوية علامة تجارية شاملة لـ Autoono، بما في ذلك تصميم الشعار وإنشاء المحتوى وتصميم بطاقات الهوية. هذا يضمن صورة محترفة تعكس رؤية الشركة وتعزز حضورها في السوق.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'AUTOONO',
            url: '/uploads/joe-13/projects/52.png',
          },
        ],
        department: 3,
      },
      {
        name: {
          ar: 'BESMART',
          en: 'BESMART',
        },
        slug: 'besmart',
        description: {
          en: 'A smart educational platform that streamlines communication between teachers and students, offering various content types like video lessons, educational clips, and detailed notes.',
          ar: 'منصة تعليمية ذكية تعمل على تبسيط التواصل بين المعلمين والطلاب، وتقدم أنواعًا مختلفة من المحتوى مثل الدروس بالفيديو والمقاطع التعليمية والملاحظات التفصيلية.',
        },
        meta_title: 'BESMART',
        meta_description:
          'منصة تعليمية ذكية تعمل على تبسيط التواصل بين المعلمين والطلاب، وتقدم أنواعًا مختلفة من المحتوى مثل الدروس بالفيديو والمقاطع التعليمية والملاحظات التفصيلية.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'BESMART',
            url: '/uploads/joe-13/projects/53.png',
          },
        ],
        department: 1,
      },
      {
        name: {
          ar: 'SUHAR',
          en: 'SUHAR',
        },
        slug: 'suhar',
        description: {
          en: 'Delivers a seamless shopping experience, offering a wide range of products from electronics to household items. Enjoy easy ordering from anywhere in Iraq, with fast and reliable delivery for all your essentials',
          ar: 'توفر تجربة تسوق سلسة، مع مجموعة واسعة من المنتجات من الإلكترونيات إلى الأدوات المنزلية. استمتع بالطلب السهل من أي مكان في العراق، مع توصيل سريع وموثوق لجميع احتياجاتك.',
        },
        meta_title: 'SUHAR',
        meta_description:
          'توفر تجربة تسوق سلسة، مع مجموعة واسعة من المنتجات من الإلكترونيات إلى الأدوات المنزلية. استمتع بالطلب السهل من أي مكان في العراق، مع توصيل سريع وموثوق لجميع احتياجاتك.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'SUHAR',
            url: '/uploads/joe-13/projects/54.png',
          },
        ],
        department: 1,
      },
      {
        name: {
          ar: 'AJEEB EDUCATION',
          en: 'AJEEB EDUCATION',
        },
        slug: 'ajeeb-education',
        description: {
          en: 'A comprehensive educational app providing valuable content across all educational levels and business sectors',
          ar: 'تطبيق تعليمي شامل يوفر محتوى قيمًا عبر جميع المستويات التعليمية وقطاعات الأعمال.',
        },
        meta_title: 'AJEEB EDUCATION',
        meta_description:
          'تطبيق تعليمي شامل يوفر محتوى قيمًا عبر جميع المستويات التعليمية وقطاعات الأعمال.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'AJEEB EDUCATION',
            url: '/uploads/joe-13/projects/55.png',
          },
        ],
        department: 1,
      },
      {
        name: {
          ar: 'JOE MI',
          en: 'JOE MI',
        },
        slug: 'joe-mi',
        description: {
          en: 'A comprehensive educational app providing valuable content across all educational levels and business sectors',
          ar: 'تطبيق تعليمي شامل يوفر محتوى قيمًا عبر جميع المستويات التعليمية وقطاعات الأعمال.',
        },
        meta_title: 'JOE MI',
        meta_description:
          'تطبيق تعليمي شامل يوفر محتوى قيمًا عبر جميع المستويات التعليمية وقطاعات الأعمال.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'JOE MI',
            url: '/uploads/joe-13/projects/56.png',
          },
        ],
        department: 1,
      },
      {
        name: {
          ar: 'JOE X',
          en: 'JOE X',
        },
        slug: 'joe-x',
        description: {
          en: 'A specialized app for managing merchandisers and promoters, offering attendance tracking, sales monitoring, stock management, and GPS-based location tracking for streamlined operations and transparency',
          ar: 'تطبيق متخصص لإدارة المسوقين والمروجين، حيث يوفر تتبع الحضور ومراقبة المبيعات وإدارة المخزون وتتبع الموقع عبر GPS لتبسيط العمليات وضمان الشفافية.',
        },
        meta_title: 'JOE X',
        meta_description:
          'تطبيق متخصص لإدارة المسوقين والمروجين، حيث يوفر تتبع الحضور ومراقبة المبيعات وإدارة المخزون وتتبع الموقع عبر GPS لتبسيط العمليات وضمان الشفافية.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'JOE X',
            url: '/uploads/joe-13/projects/57.png',
          },
        ],
        department: 1,
      },
      {
        name: {
          ar: 'NosWazeefa',
          en: 'NosWazeefa',
        },
        slug: 'noswazeefa',
        description: {
          en: 'Specialized platform focusing on part-time job opportunities in the Saudi market. It connects employers and job seekers, offering a streamlined process for finding flexible roles and hiring suitable talent efficiently.',
          ar: 'منصة متخصصة تركز على فرص العمل بدوام جزئي في السوق السعودي. تربط بين أصحاب العمل والباحثين عن عمل، وتوفر عملية مبسطة للعثور على أدوار مرنة وتوظيف المواهب المناسبة بكفاءة.',
        },
        meta_title: 'NosWazeefa',
        meta_description:
          'منصة متخصصة تركز على فرص العمل بدوام جزئي في السوق السعودي. تربط بين أصحاب العمل والباحثين عن عمل، وتوفر عملية مبسطة للعثور على أدوار مرنة وتوظيف المواهب المناسبة بكفاءة.',
        meta_keywords: [],
        images: [
          {
            id: 1,
            alt: 'NosWazeefa',
            url: '/uploads/joe-13/projects/58.png',
          },
        ],
        department: 1,
      },
    ];

    console.log(departments);
    const fullData = projectData.map((project, i) => ({
      ...project,
      department: departments?.find((e) => e.id == project.department),
    }));

    await this.projectRepo.query(
      'TRUNCATE TABLE "projects" RESTART IDENTITY CASCADE',
    );
    const projects = this.projectRepo.create(fullData as any);
    await this.projectRepo.save(projects);
  }

  private async seedContacts() {
    const data = [
      // --------- General (7 records) ---------
      {
        type: 'general',
        name: 'Ali Hassan',
        email: 'ali@example.com',
        phone: '+966500000001',
        address: 'Riyadh, Saudi Arabia',
        message: 'I have a question about your services.',
      },
      {
        type: 'general',
        name: 'Sara Ahmed',
        email: 'sara@example.com',
        phone: '+966500000002',
        address: 'Jeddah, Saudi Arabia',
        message: 'Can I schedule a call with your team?',
      },
      {
        type: 'general',
        name: 'Khalid Salem',
        email: 'khalid@example.com',
        phone: '+966500000003',
        address: 'Dammam, Saudi Arabia',
        message: 'Do you offer discounts for large bookings?',
      },
      {
        type: 'general',
        name: 'Noor Fawaz',
        email: 'noor@example.com',
        phone: '+966500000004',
        address: 'Mecca, Saudi Arabia',
        message: 'Your team was very helpful!',
      },
      {
        type: 'general',
        name: 'Mona Adel',
        email: 'mona@example.com',
        phone: '+966500000005',
        address: 'Madinah, Saudi Arabia',
        message: 'Thank you for the quick response.',
      },
      {
        type: 'general',
        name: 'Faisal Tariq',
        email: 'faisal@example.com',
        phone: '+966500000006',
        address: 'Taif, Saudi Arabia',
        message: 'I’m interested in a partnership.',
      },
      {
        type: 'general',
        name: 'Huda Zaki',
        email: 'huda@example.com',
        phone: '+966500000007',
        address: 'Abha, Saudi Arabia',
        message: 'Where can I find more info?',
      },

      // --------- Career (7 records) ---------
      {
        type: 'career',
        name: 'Osama Saleh',
        email: 'osama@example.com',
        phone: '+966511111001',
        address: 'Jubail, Saudi Arabia',
        career_file: '/uploads/careers/osama-cv.pdf',
      },
      {
        type: 'career',
        name: 'Nour El-Dein',
        email: 'nour@example.com',
        phone: '+966511111002',
        address: 'Riyadh, Saudi Arabia',
        career_file: '/uploads/careers/nour-cv.pdf',
      },
      {
        type: 'career',
        name: 'Rana Khaled',
        email: 'rana@example.com',
        phone: '+966511111003',
        address: 'Yanbu, Saudi Arabia',
        career_file: '/uploads/careers/rana-cv.pdf',
      },
      {
        type: 'career',
        name: 'Mohammed Talal',
        email: 'm.talal@example.com',
        phone: '+966511111004',
        address: 'Jazan, Saudi Arabia',
        career_file: '/uploads/careers/mohammed-cv.pdf',
      },
      {
        type: 'career',
        name: 'Reem Hassan',
        email: 'reem@example.com',
        phone: '+966511111005',
        address: 'Najran, Saudi Arabia',
        career_file: '/uploads/careers/reem-cv.pdf',
      },
      {
        type: 'career',
        name: 'Wael Qasem',
        email: 'wael@example.com',
        phone: '+966511111006',
        address: 'Al Hofuf, Saudi Arabia',
        career_file: '/uploads/careers/wael-cv.pdf',
      },
      {
        type: 'career',
        name: 'Dalia Maher',
        email: 'dalia@example.com',
        phone: '+966511111007',
        address: 'Al Khobar, Saudi Arabia',
        career_file: '/uploads/careers/dalia-cv.pdf',
      },

      // --------- Offers (6 records) ---------
      {
        type: 'offers',
        name: 'Ahmed Mansour',
        email: 'ahmed@example.com',
        phone: '+966522222001',
        offers_name: 'Wedding Gold Package',
        offers_price: 15000,
      },
      {
        type: 'offers',
        name: 'Lina Youssef',
        email: 'lina@example.com',
        phone: '+966522222002',
        offers_name: 'Corporate VIP Event',
        offers_price: 22000,
      },
      {
        type: 'offers',
        name: 'Hassan Morsi',
        email: 'h.morsi@example.com',
        phone: '+966522222003',
        offers_name: 'Ramadan Exclusive Hall',
        offers_price: 18000,
      },
      {
        type: 'offers',
        name: 'Samiya Khalifa',
        email: 'samiya@example.com',
        phone: '+966522222004',
        offers_name: 'Photography + Venue Bundle',
        offers_price: 9500,
      },
      {
        type: 'offers',
        name: 'Tariq Nabil',
        email: 'tariq@example.com',
        phone: '+966522222005',
        offers_name: 'Summer 2025 Discount',
        offers_price: 10500,
      },
      {
        type: 'offers',
        name: 'Yasmin Abdelrahman',
        email: 'yasmin@example.com',
        phone: '+966522222006',
        offers_name: 'Premium Setup & Design',
        offers_price: 12500,
      },
    ];

    await this.contactsReop.clear(); // Clears the table
    const projects = this.contactsReop.create(data as any);
    await this.contactsReop.save(projects);
  }

  private async seedOffers() {
    const data = [
      {
        name: { en: 'Website Redesign', ar: 'إعادة تصميم الموقع' },
        price: 1000.5,
        priceAfterOffers: 750.25,
        image_url: 'https://example.com/website-redesign.jpg',
        image_alt: 'Website Redesign',
        meta_title: {
          en: 'Website Redesign Service',
          ar: 'خدمة إعادة تصميم الموقع',
        },
        meta_description: {
          en: 'Revamp your website with a fresh look.',
          ar: 'جدد موقعك بتصميم جديد.',
        },
        meta_keywords: {
          en: ['website', 'redesign', 'service'],
          ar: ['موقع', 'إعادة تصميم', 'خدمة'],
        },
        department: { id: 1 } as Department, // Assuming department ID 1 exists
      },
      {
        name: { en: 'Mobile App Development', ar: 'تطوير تطبيق الجوال' },
        price: 1500.0,
        priceAfterOffers: 1200.0,
        image_url: 'https://example.com/mobile-app.jpg',
        image_alt: 'Mobile App Development',
        meta_title: {
          en: 'Mobile App Development Service',
          ar: 'خدمة تطوير التطبيقات المحمولة',
        },
        meta_description: {
          en: 'Build a custom mobile app for your business.',
          ar: 'قم ببناء تطبيق جوال مخصص لعملك.',
        },
        meta_keywords: {
          en: ['mobile', 'app', 'development'],
          ar: ['جوال', 'تطبيق', 'تطوير'],
        },
        department: { id: 2 } as Department, // Assuming department ID 2 exists
      },
      {
        name: { en: 'E-commerce Store', ar: 'متجر إلكتروني' },
        price: 2000.0,
        priceAfterOffers: 1500.0,
        image_url: 'https://example.com/ecommerce-store.jpg',
        image_alt: 'E-commerce Store',
        meta_title: {
          en: 'E-commerce Store Development',
          ar: 'تطوير متجر إلكتروني',
        },
        meta_description: {
          en: 'Launch your online store with ease.',
          ar: 'ابدأ متجرك الإلكتروني بسهولة.',
        },
        meta_keywords: {
          en: ['e-commerce', 'online store'],
          ar: ['متجر إلكتروني', 'تجارة'],
        },
        department: { id: 3 } as Department, // Assuming department ID 3 exists
      },
      {
        name: { en: 'SEO Optimization', ar: 'تحسين محركات البحث' },
        price: 800.0,
        priceAfterOffers: 600.0,
        image_url: 'https://example.com/seo-optimization.jpg',
        image_alt: 'SEO Optimization',
        meta_title: {
          en: 'SEO Optimization Service',
          ar: 'خدمة تحسين محركات البحث',
        },
        meta_description: {
          en: 'Boost your website’s search engine ranking.',
          ar: 'حسن ترتيب موقعك في محركات البحث.',
        },
        meta_keywords: {
          en: ['SEO', 'search engine', 'optimization'],
          ar: ['تحسين', 'موقع', 'بحث'],
        },
        department: { id: 1 } as Department, // Assuming department ID 1 exists
      },
      {
        name: { en: 'Landing Page Design', ar: 'تصميم صفحة هبوط' },
        price: 500.0,
        priceAfterOffers: 400.0,
        image_url: 'https://example.com/landing-page.jpg',
        image_alt: 'Landing Page Design',
        meta_title: {
          en: 'Landing Page Design Service',
          ar: 'خدمة تصميم صفحة هبوط',
        },
        meta_description: {
          en: 'Design a high-converting landing page for your campaign.',
          ar: 'صمم صفحة هبوط ذات تحويل عالي لحملتك.',
        },
        meta_keywords: {
          en: ['landing page', 'conversion'],
          ar: ['صفحة هبوط', 'تحويل'],
        },
        department: { id: 2 } as Department, // Assuming department ID 2 exists
      },
      {
        name: { en: 'Custom CRM System', ar: 'نظام إدارة علاقات العملاء مخصص' },
        price: 3000.0,
        priceAfterOffers: 2500.0,
        image_url: 'https://example.com/crm-system.jpg',
        image_alt: 'CRM System',
        meta_title: {
          en: 'Custom CRM Development',
          ar: 'تطوير نظام إدارة علاقات العملاء',
        },
        meta_description: {
          en: 'Build a custom CRM for your company’s needs.',
          ar: 'قم ببناء نظام CRM مخصص لاحتياجات شركتك.',
        },
        meta_keywords: {
          en: ['CRM', 'system', 'custom'],
          ar: ['نظام', 'مخصص', 'عملاء'],
        },
        department: { id: 3 } as Department, // Assuming department ID 3 exists
      },
      {
        name: { en: 'Business Branding', ar: 'هوية تجارية' },
        price: 1200.0,
        priceAfterOffers: 900.0,
        image_url: 'https://example.com/business-branding.jpg',
        image_alt: 'Business Branding',
        meta_title: {
          en: 'Business Branding Service',
          ar: 'خدمة الهوية التجارية',
        },
        meta_description: {
          en: 'Create a strong brand identity for your business.',
          ar: 'أنشئ هوية تجارية قوية لعملك.',
        },
        meta_keywords: {
          en: ['branding', 'business', 'identity'],
          ar: ['هوية', 'تجارية', 'عمل'],
        },
        department: { id: 1 } as Department, // Assuming department ID 1 exists
      },
      {
        name: {
          en: 'Social Media Marketing',
          ar: 'التسويق عبر وسائل التواصل الاجتماعي',
        },
        price: 1000.0,
        priceAfterOffers: 750.0,
        image_url: 'https://example.com/social-media-marketing.jpg',
        image_alt: 'Social Media Marketing',
        meta_title: {
          en: 'Social Media Marketing Campaigns',
          ar: 'حملات التسويق عبر وسائل التواصل الاجتماعي',
        },
        meta_description: {
          en: 'Drive engagement through social media platforms.',
          ar: 'زيادة التفاعل عبر منصات التواصل الاجتماعي.',
        },
        meta_keywords: {
          en: ['social media', 'marketing', 'campaign'],
          ar: ['تسويق', 'تواصل اجتماعي', 'حملات'],
        },
        department: { id: 2 } as Department, // Assuming department ID 2 exists
      },
      {
        name: { en: 'Cloud Hosting', ar: 'استضافة سحابية' },
        price: 600.0,
        priceAfterOffers: 450.0,
        image_url: 'https://example.com/cloud-hosting.jpg',
        image_alt: 'Cloud Hosting',
        meta_title: {
          en: 'Cloud Hosting Service',
          ar: 'خدمة الاستضافة السحابية',
        },
        meta_description: {
          en: 'Host your website securely in the cloud.',
          ar: 'استضافة موقعك بشكل آمن في السحابة.',
        },
        meta_keywords: {
          en: ['cloud', 'hosting', 'service'],
          ar: ['سحابة', 'استضافة', 'خدمة'],
        },
        department: { id: 3 } as Department, // Assuming department ID 3 exists
      },
    ];

    await this.offersReop.clear(); // Clears the table
    const entity = this.offersReop.create(data as any);
    await this.offersReop.save(entity);
  }
}
