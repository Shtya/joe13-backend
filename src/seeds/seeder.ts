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

export class Seeder {
  private blogRepository: Repository<Blog>;
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

  async run() {
    // await this.seedBlogs();
    // await this.seedCareers();
    // await this.seedteamMembers();
    // await this.seedDepartments();
    // await this.seedProjects();
    // await this.seedContacts();
    // await this.seedOffers();
    // await this.seedPartners();
    // await this.seedSections();
    // await this.seedPageMeta();
    await this.seedPages();
  }




  // sudo nano /etc/nginx/sites-available/api.joe-13-backend.com
  private async seedPages() {
    const data = [
      {
        slug: 'home-page',
        title : "home page",
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
              en: '360 solutions company with +11 years of experience in the market',
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
    ];

    await this.pageRepository.clear(); 
    const dataEntities = this.pageRepository.create(data as any);
    await this.pageRepository.save(dataEntities); 
  }


  private async seedPageMeta() {
    const data = [
      {
        slug: 'home',
        keywords: ['home', 'landing', 'website', 'meta'],
        custom_head_script:
          '<style>body { background-color: #f0f0f0; }</style>',
        custom_body_script:
          "<script>console.log('Welcome to the homepage');</script>",
        og_tags: {
          title: 'Home - MySite',
          description: 'The homepage of MySite',
          image: 'https://example.com/images/og-home.jpg',
          url: 'https://example.com/home',
          type: 'website',
        },
        translations: {
          en: {
            title: 'Welcome to Our Website',
            description: 'This is the home page of our amazing website.',
          },
          ar: {
            title: 'مرحبًا بكم في موقعنا',
            description: 'هذه هي الصفحة الرئيسية لموقعنا الرائع.',
          },
        },
      },
      {
        slug: 'about',
        keywords: ['about', 'company', 'info'],
        custom_head_script: '',
        custom_body_script: '',
        og_tags: {
          title: 'About Us - MySite',
          description: 'Learn more about our company and team.',
          image: 'https://example.com/images/og-about.jpg',
          url: 'https://example.com/about',
          type: 'article',
        },
        translations: {
          en: {
            title: 'About Us',
            description: 'Learn more about our company and what we do.',
          },
          ar: {
            title: 'من نحن',
            description: 'تعرف على المزيد عن شركتنا وما نقوم به.',
          },
        },
      },
      {
        slug: 'contact',
        keywords: ['contact', 'support', 'help'],
        custom_head_script: '',
        custom_body_script: '',
        og_tags: {
          title: 'Contact Us - MySite',
          description: 'Get in touch with us for support or inquiries.',
          image: 'https://example.com/images/og-contact.jpg',
          url: 'https://example.com/contact',
          type: 'website',
        },
        translations: {
          en: {
            title: 'Contact Us',
            description: 'Reach out to our team for help and support.',
          },
          ar: {
            title: 'اتصل بنا',
            description: 'ابقَ على تواصل – نحن هنا للمساعدة!',
          },
        },
      },
      {
        slug: 'join-us',
        keywords: ['contact', 'support', 'help'],
        custom_head_script: '',
        custom_body_script: '',
        og_tags: {
          title: 'Join Us - MySite',
          description: 'Get in touch with us for support or inquiries.',
          image: 'https://example.com/images/og-contact.jpg',
          url: 'https://example.com/contact',
          type: 'website',
        },
        translations: {
          en: {
            title: 'Join us',
            description: 'Reach out to our team for help and support.',
          },
          ar: {
            title: 'Join us',
            description: 'ابقَ على تواصل – نحن هنا للمساعدة!',
          },
        },
      },
      {
        slug: 'terms',
        keywords: ['terms', 'conditions', 'legal'],
        custom_head_script: '',
        custom_body_script: '',
        og_tags: {
          title: 'Terms and Conditions - MySite',
          description: 'Please read our terms and conditions carefully.',
          image: 'https://example.com/images/og-terms.jpg',
          url: 'https://example.com/terms',
          type: 'article',
        },
        translations: {
          en: {
            title: 'Terms and Conditions',
            description:
              'Please read our terms and conditions carefully before using our website.',
          },
          ar: {
            title: 'الشروط والأحكام',
            description:
              'يرجى قراءة الشروط والأحكام بعناية قبل استخدام موقعنا.',
          },
        },
      },
    ];

    await this.pageMetaReop.clear(); // Clears the table
    const dataEntities = this.pageMetaReop.create(data as any);
    await this.pageMetaReop.save(dataEntities); // Save all blog posts at once
  }

  private async seedBlogs() {
    const data = [
      {
        slug: 'the-future-of-ai',
        image_url: '/upload/13-840e0167f75bdaaaa0b86605fa596c55.png',
        image_alt: 'مستقبل المعلومات المتطورة',
        type_blog: 'تكنولوجيا',
        created_at: '2025-04-01T12:00:00Z',
        updated_at: '2025-04-01T12:00:00Z',
        title: {
          en: 'Star need everyone write model lot ok travel.',
          ar: 'كل النجوم بحاجة للجميع لكتابة النموذج بشكل كبير',
        },
        content: {
          en: 'Yes play image during detail major while reflect. Support he body church wife.',
          ar: 'نعم، تلعب الصورة خلال التفاصيل الرئيسية بينما تعكس. يدعم جسده وزوجته.',
        },
        meta_title: {
          en: 'Foreign project let event will.',
          ar: 'مشروع خارجي سيترك الحدث سيحدث.',
        },
        meta_description: {
          en: 'War second option remain able sing may us.',
          ar: 'الحرب تظل الخيار الثاني قد تكون قادرة على الغناء لنا.',
        },
        meta_keywords: {
          en: ['and', 'people', 'avoid', 'federal', 'talk'],
          ar: ['و', 'الناس', 'تجنب', 'فيدرالي', 'حديث'],
        },
      },
      {
        slug: 'tech-innovations-in-2025',
        image_url: '/upload/14-840e0167f75bdaaaa0b86605fa596c56.png',
        image_alt: 'ابتكارات تكنولوجية في 2025',
        type_blog: 'تكنولوجيا',
        created_at: '2025-04-02T15:10:00Z',
        updated_at: '2025-04-02T15:10:00Z',
        title: {
          en: 'Innovation shapes our tomorrow today.',
          ar: 'الابتكار يشكل غدنا اليوم.',
        },
        content: {
          en: 'Technology advances rapidly, paving the way for new possibilities in every sector.',
          ar: 'التكنولوجيا تتقدم بسرعة، تمهد الطريق لإمكانات جديدة في كل قطاع.',
        },
        meta_title: {
          en: 'Technological breakthroughs in the coming years.',
          ar: 'التطورات التكنولوجية في السنوات القادمة.',
        },
        meta_description: {
          en: 'Explore the tech innovations that will define the future.',
          ar: 'استكشف الابتكارات التكنولوجية التي ستحدد المستقبل.',
        },
        meta_keywords: {
          en: ['tech', 'innovation', 'future', '2025'],
          ar: ['تكنولوجيا', 'ابتكار', 'مستقبل', '2025'],
        },
      },
      {
        slug: 'blockchain-impact-on-business',
        image_url: '/upload/15-840e0167f75bdaaaa0b86605fa596c57.png',
        image_alt: 'تأثير البلوك تشين على الأعمال',
        type_blog: 'تكنولوجيا',
        created_at: '2025-04-03T17:30:00Z',
        updated_at: '2025-04-03T17:30:00Z',
        title: {
          en: 'Blockchain changing business models worldwide.',
          ar: 'البلوك تشين يغير نماذج الأعمال في جميع أنحاء العالم.',
        },
        content: {
          en: 'Blockchain technology is reshaping business operations, from financial systems to supply chain management.',
          ar: 'تقنية البلوك تشين تعيد تشكيل العمليات التجارية، من الأنظمة المالية إلى إدارة سلسلة التوريد.',
        },
        meta_title: {
          en: 'The rise of blockchain in business.',
          ar: 'ظهور البلوك تشين في الأعمال.',
        },
        meta_description: {
          en: 'Learn how blockchain is transforming industries and disrupting business norms.',
          ar: 'تعلم كيف يقوم البلوك تشين بتحويل الصناعات وتغيير معايير الأعمال.',
        },
        meta_keywords: {
          en: ['blockchain', 'business', 'disrupt', 'future'],
          ar: ['بلوك تشين', 'أعمال', 'ثورة', 'مستقبل'],
        },
      },
      {
        slug: 'ai-in-healthcare',
        image_url: '/upload/16-840e0167f75bdaaaa0b86605fa596c58.png',
        image_alt: 'الذكاء الاصطناعي في الرعاية الصحية',
        type_blog: 'تكنولوجيا',
        created_at: '2025-04-04T19:00:00Z',
        updated_at: '2025-04-04T19:00:00Z',
        title: {
          en: 'AI revolutionizing healthcare services.',
          ar: 'الذكاء الاصطناعي يحدث ثورة في خدمات الرعاية الصحية.',
        },
        content: {
          en: 'AI is playing a significant role in diagnosing diseases, enhancing treatments, and improving healthcare efficiency.',
          ar: 'يلعب الذكاء الاصطناعي دورًا كبيرًا في تشخيص الأمراض، وتحسين العلاجات، وزيادة كفاءة الرعاية الصحية.',
        },
        meta_title: {
          en: 'AI-powered healthcare advancements.',
          ar: 'التطورات في الرعاية الصحية المدعومة بالذكاء الاصطناعي.',
        },
        meta_description: {
          en: 'Discover the ways AI is changing the healthcare landscape.',
          ar: 'اكتشف الطرق التي يغير بها الذكاء الاصطناعي مشهد الرعاية الصحية.',
        },
        meta_keywords: {
          en: ['AI', 'healthcare', 'medicine', 'technology'],
          ar: ['ذكاء اصطناعي', 'رعاية صحية', 'طب', 'تكنولوجيا'],
        },
      },
      {
        slug: 'green-tech-innovations',
        image_url: '/upload/17-840e0167f75bdaaaa0b86605fa596c59.png',
        image_alt: 'ابتكارات التكنولوجيا الخضراء',
        type_blog: 'تكنولوجيا',
        created_at: '2025-04-05T16:15:00Z',
        updated_at: '2025-04-05T16:15:00Z',
        title: {
          en: 'Green tech transforming sustainability practices.',
          ar: 'التكنولوجيا الخضراء تحول ممارسات الاستدامة.',
        },
        content: {
          en: 'Green technology is helping businesses and communities reduce their carbon footprint and adopt sustainable practices.',
          ar: 'التكنولوجيا الخضراء تساعد الشركات والمجتمعات في تقليل بصمتها الكربونية وتبني ممارسات مستدامة.',
        },
        meta_title: {
          en: 'The future of green technologies.',
          ar: 'مستقبل التقنيات الخضراء.',
        },
        meta_description: {
          en: 'Learn how green technology is improving sustainability across industries.',
          ar: 'تعلم كيف تقوم التكنولوجيا الخضراء بتحسين الاستدامة عبر الصناعات.',
        },
        meta_keywords: {
          en: ['green tech', 'sustainability', 'innovation', 'environment'],
          ar: ['تكنولوجيا خضراء', 'استدامة', 'ابتكار', 'بيئة'],
        },
      },
      {
        slug: 'future-of-5g',
        image_url: '/upload/18-840e0167f75bdaaaa0b86605fa596c60.png',
        image_alt: 'مستقبل الجيل الخامس',
        type_blog: 'تكنولوجيا',
        created_at: '2025-04-06T18:45:00Z',
        updated_at: '2025-04-06T18:45:00Z',
        title: {
          en: '5G technology reshaping the future of communication.',
          ar: 'تقنية الجيل الخامس تعيد تشكيل مستقبل الاتصالات.',
        },
        content: {
          en: 'The implementation of 5G is revolutionizing mobile connectivity, paving the way for innovations in IoT and smart cities.',
          ar: 'إن تطبيق الجيل الخامس يحدث ثورة في الاتصال المحمول، مما يمهد الطريق للابتكارات في الإنترنت الأشياء والمدن الذكية.',
        },
        meta_title: {
          en: 'The impact of 5G on communication and society.',
          ar: 'تأثير الجيل الخامس على الاتصال والمجتمع.',
        },
        meta_description: {
          en: 'Discover how 5G is influencing the future of communication.',
          ar: 'اكتشف كيف يؤثر الجيل الخامس على مستقبل الاتصال.',
        },
        meta_keywords: {
          en: ['5G', 'communication', 'future', 'smart cities'],
          ar: ['الجيل الخامس', 'اتصال', 'مستقبل', 'مدن ذكية'],
        },
      },
      {
        slug: 'quantum-computing-breakthroughs',
        image_url: '/upload/19-840e0167f75bdaaaa0b86605fa596c61.png',
        image_alt: 'تطورات الحوسبة الكمومية',
        type_blog: 'تكنولوجيا',
        created_at: '2025-04-07T20:00:00Z',
        updated_at: '2025-04-07T20:00:00Z',
        title: {
          en: 'Quantum computing unlocking new possibilities.',
          ar: 'الحوسبة الكمومية تفتح إمكانيات جديدة.',
        },
        content: {
          en: 'Quantum computing is set to solve complex problems that classical computers cannot address, ushering in a new era of computing.',
          ar: 'من المقرر أن تحل الحوسبة الكمومية المشكلات المعقدة التي لا يمكن أن تعالجها أجهزة الكمبيوتر التقليدية، مما يفتح عصراً جديداً من الحوسبة.',
        },
        meta_title: {
          en: 'The power of quantum computing.',
          ar: 'قوة الحوسبة الكمومية.',
        },
        meta_description: {
          en: 'Explore how quantum computing will revolutionize industries.',
          ar: 'اكتشف كيف ستحدث الحوسبة الكمومية ثورة في الصناعات.',
        },
        meta_keywords: {
          en: ['quantum computing', 'future', 'technology', 'breakthroughs'],
          ar: ['حوسبة كمومية', 'مستقبل', 'تكنولوجيا', 'تطورات'],
        },
      },
      {
        slug: 'future-of-tech-and-society',
        image_url: '/upload/20-840e0167f75bdaaaa0b86605fa596c62.png',
        image_alt: 'مستقبل التكنولوجيا والمجتمع',
        type_blog: 'تكنولوجيا',
        created_at: '2025-04-08T21:10:00Z',
        updated_at: '2025-04-08T21:10:00Z',
        title: {
          en: 'How tech is shaping the future of society.',
          ar: 'كيف تشكل التكنولوجيا مستقبل المجتمع.',
        },
        content: {
          en: 'Technological advances are having a profound impact on society, affecting everything from work to relationships.',
          ar: 'للتقدم التكنولوجي تأثير عميق على المجتمع، يؤثر على كل شيء من العمل إلى العلاقات.',
        },
        meta_title: {
          en: "Technology's role in future societies.",
          ar: 'دور التكنولوجيا في المجتمعات المستقبلية.',
        },
        meta_description: {
          en: 'Learn how technology is reshaping our societies and daily lives.',
          ar: 'تعلم كيف تعيد التكنولوجيا تشكيل مجتمعاتنا وحياتنا اليومية.',
        },
        meta_keywords: {
          en: ['technology', 'society', 'future', 'impact'],
          ar: ['تكنولوجيا', 'مستقبل', 'مجتمع', 'تأثير'],
        },
      },
      {
        slug: 'smart-cities-of-the-future',
        image_url: '/upload/21-840e0167f75bdaaaa0b86605fa596c63.png',
        image_alt: 'مدن ذكية في المستقبل',
        type_blog: 'تكنولوجيا',
        created_at: '2025-04-09T22:30:00Z',
        updated_at: '2025-04-09T22:30:00Z',
        title: {
          en: 'The rise of smart cities and the tech behind them.',
          ar: 'ظهور المدن الذكية والتكنولوجيا وراءها.',
        },
        content: {
          en: 'Smart cities are the future, powered by IoT, AI, and data analytics to improve urban living.',
          ar: 'المدن الذكية هي المستقبل، مدعومة من الإنترنت الأشياء، والذكاء الاصطناعي، وتحليل البيانات لتحسين الحياة الحضرية.',
        },
        meta_title: {
          en: 'Exploring the potential of smart cities.',
          ar: 'استكشاف إمكانات المدن الذكية.',
        },
        meta_description: {
          en: 'How smart cities will revolutionize urban living in the next decade.',
          ar: 'كيف ستحدث المدن الذكية ثورة في الحياة الحضرية في العقد المقبل.',
        },
        meta_keywords: {
          en: ['smart cities', 'urban planning', 'technology', 'future'],
          ar: ['مدن ذكية', 'تخطيط حضري', 'تكنولوجيا', 'مستقبل'],
        },
      },
    ];

    await this.blogRepository.clear(); // Clears the table
    const dataEntities = this.blogRepository.create(data as any);
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
        created_at: '2025-04-01T10:00:00Z',
        updated_at: '2025-04-02T12:00:00Z',
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
        image_url: '/uploads/website-images/about-us/person1.png',
        image_alt: 'Yousef Kamal Image',
        created_at: '2025-04-01T10:00:00Z',
        updated_at: '2025-04-02T12:00:00Z',
      },
      {
        name: { en: 'Adnan Obaid', ar: 'عدنان عبيد' },
        position: { en: 'GM of Joe13th', ar: 'المدير العام لـ Joe13th' },
        bio: {
          en: 'General Manager at Joe13th.',
          ar: 'متخصص في العمليات والتسويق لأكثر من 15 عامًا. منذ عام 2019، قاد عدنان Joe13، حيث قاد مبادرات استراتيجية للنمو. يشمل خبرته أدوارًا في Advance Core Technology وشركة Yes Arabia للإنتاج، وشارك في تأسيس مركز Wisdom of Knowledge للتدريب في دبي.',
        },
        image_url: '/uploads/website-images/about-us/person2.png',
        image_alt: 'Adnan Obaid Image',
        created_at: '2025-04-01T10:00:00Z',
        updated_at: '2025-04-02T12:00:00Z',
      },
      {
        name: { en: 'Ahmed Refaat', ar: 'أحمد رفعت' },
        position: { en: 'CFO', ar: 'المدير المالي' },
        bio: {
          en: 'Chief Financial Officer with strategic insight.',
          ar: 'خبير في الإدارة المالية، وتنفيذ نظم ERP، والتخطيط الاستراتيجي لأكثر من 20 عامًا. قاد تحويلات مالية، وأدار استثمارات، وأشرف على مشاريع الأتمتة. حاصل على شهادات CPA وCMA وCFA.',
        },
        image_url: '/uploads/website-images/about-us/person3.png',
        image_alt: 'Ahmed Refaat Image',
        created_at: '2025-04-01T10:00:00Z',
        updated_at: '2025-04-02T12:00:00Z',
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
        image_url: '/uploads/website-images/about-us/person4.png',
        image_alt: 'Mohammed Kamal Image',
        created_at: '2025-04-01T10:00:00Z',
        updated_at: '2025-04-02T12:00:00Z',
      },
      {
        name: { en: 'Ahmad Alkashakri', ar: 'أحمد الكشاكري' },
        position: { en: 'Director of Business', ar: 'مدير الأعمال' },
        bio: {
          en: 'Leads the business department with excellence.',
          ar: 'يقود قسم الأعمال بامتياز.',
        },
        image_url: '/uploads/website-images/about-us/unknown-person.png',
        image_alt: 'Ahmad Alkashakri Image',
        created_at: '2025-04-01T10:00:00Z',
        updated_at: '2025-04-02T12:00:00Z',
      },
      {
        name: { en: 'Nour Eldien Mohamed', ar: 'نور الدين محمد' },
        position: { en: 'Software Manager', ar: 'مدير البرمجيات' },
        bio: {
          en: 'Manages software projects and teams.',
          ar: 'يدير مشاريع البرمجيات والفرق.',
        },
        image_url: '/uploads/website-images/about-us/unknown-person.png',
        image_alt: 'Nour Eldien Mohamed Image',
        created_at: '2025-04-01T10:00:00Z',
        updated_at: '2025-04-02T12:00:00Z',
      },
      {
        name: { en: 'Faisel', ar: 'فيصل' },
        position: { en: 'Head Of Marketing', ar: 'رئيس قسم التسويق' },
        bio: {
          en: 'Leading the marketing initiatives.',
          ar: 'يقود مبادرات التسويق.',
        },
        image_url: '/uploads/website-images/about-us/unknown-person.png',
        image_alt: 'Faisel Image',
        created_at: '2025-04-01T10:00:00Z',
        updated_at: '2025-04-02T12:00:00Z',
      },
      {
        name: { en: 'Somaya Abdullah', ar: 'سمية عبدالله' },
        position: { en: 'HR Supervisor', ar: 'مشرفة الموارد البشرية' },
        bio: {
          en: 'Supervises HR operations and employee relations.',
          ar: 'تشرف على عمليات الموارد البشرية وعلاقات الموظفين.',
        },
        image_url: '/uploads/website-images/about-us/unknown-person.png',
        image_alt: 'Somaya Abdullah Image',
        created_at: '2025-04-01T10:00:00Z',
        updated_at: '2025-04-02T12:00:00Z',
      },
      {
        name: { en: 'Abdulaziz', ar: 'عبدالعزيز' },
        position: { en: 'AI Developer', ar: 'مطوّر ذكاء اصطناعي' },
        bio: {
          en: 'Builds smart systems using AI technology.',
          ar: 'يبني أنظمة ذكية باستخدام تقنيات الذكاء الاصطناعي.',
        },
        image_url: '/uploads/website-images/about-us/unknown-person.png',
        image_alt: 'Abdulaziz Image',
        created_at: '2025-04-01T10:00:00Z',
        updated_at: '2025-04-02T12:00:00Z',
      },
      {
        name: { en: 'Lamis Saadoun', ar: 'لميس سعدون' },
        position: { en: 'Coordinator', ar: 'منسقة' },
        bio: {
          en: 'Ensures smooth coordination across teams.',
          ar: 'تضمن التنسيق السلس بين الفرق.',
        },
        image_url: '/uploads/website-images/about-us/unknown-person.png',
        image_alt: 'Lamis Saadoun Image',
        created_at: '2025-04-01T10:00:00Z',
        updated_at: '2025-04-02T12:00:00Z',
      },
      {
        name: { en: 'Hani Darwish', ar: 'هاني درويش' },
        position: { en: 'Accountant', ar: 'محاسب' },
        bio: {
          en: 'Handles all financial and accounting matters.',
          ar: 'يتولى جميع الأمور المالية والمحاسبية.',
        },
        image_url: '/uploads/website-images/about-us/unknown-person.png',
        image_alt: 'Hani Darwish Image',
        created_at: '2025-04-01T10:00:00Z',
        updated_at: '2025-04-02T12:00:00Z',
      },
      {
        name: { en: 'Mohammed Alahdal', ar: 'محمد الأهدل' },
        position: { en: 'Project Manager', ar: 'مدير مشروع' },
        bio: {
          en: 'Plans and oversees projects from start to finish.',
          ar: 'بأكثر من 4 سنوات من الخبرة، يُعرف م/محمد الأهدل ببناء علاقات عملاء طويلة الأمد وتقديم حلول مخصصة.',
        },
        image_url: '/uploads/website-images/about-us/person7.png',
        image_alt: 'Mohammed Alahdal Image',
        created_at: '2025-04-01T10:00:00Z',
        updated_at: '2025-04-02T12:00:00Z',
      },
      {
        name: { en: 'Rahim Ghafoor', ar: 'رحيم غفور' },
        position: { en: 'Senior Logistics Officer', ar: 'موظف لوجستي أول' },
        bio: {
          en: 'Handles complex logistics and supply chains.',
          ar: 'يتعامل مع العمليات اللوجستية وسلاسل التوريد المعقدة.',
        },
        image_url: '/uploads/website-images/about-us/unknown-person.png',
        image_alt: 'Rahim Ghafoor Image',
        created_at: '2025-04-01T10:00:00Z',
        updated_at: '2025-04-02T12:00:00Z',
      },
    ];

    await this.teamMembersRepository.clear(); // Clears the table
    const dataEntities = this.teamMembersRepository.create(data as any);
    await this.teamMembersRepository.save(dataEntities); // Save all blog posts at once
  }

  private async seedSections() {
    const data = [
      {
        title: {
          en: '',
          ar: 'من نحن',
        },
        content: {
          en: '',
          ar: 'شركة JOE13 هي شركة تسويق وتطوير برمجيات تأسست في عام 2013 لاستثمار سنوات من الخبرات في مجالات مختلفة لمساعدة الشركات على تحقيق قيمتها المقترحة المثلى. على مدار السنوات، اكتسبت JOE13 ثقة عملائها من خلال تكوين فريق من الخبراء الذين مكنوهم من تحقيق المعادلة الصحيحة بين كفاءة تكنولوجيا المعلومات والابتكار في الأعمال.',
        },
        image_url: '/uploads/website-images/about-us/1.png',
        image_alt: 'Team working together',
        slug: 'about-who-are-you',
        is_active: true,
        created_at: new Date('2025-04-01T10:00:00Z'),
        updated_at: new Date('2025-04-01T10:00:00Z'),
      },
      {
        title: {
          en: '',
          ar: 'رؤيتنا',
        },
        content: {
          en: '',
          ar: 'JOE13 هي شركة تسويق وتطوير برمجيات تم تأسيسها في عام 2013 لاستثمار سنوات من الخبرات في مجالات مختلفة لمساعدة الشركات على الوصول إلى عرض القيمة النهائية، وعلى مر السنين اكتسبت JOE13 ثقة عملائها من خلال الجمع بين فريق يتمتع بالخبرة التي ومكنتهم من تحقيق المعادلة الصحيحة بين كفاءة تكنولوجيا المعلومات والابتكار في مجال الأعمال.',
        },
        image_url: '/uploads/website-images/about-us/2.png',
        image_alt: 'Team working together',
        slug: 'about-our-vission',
        is_active: true,
      },
      {
        title: {
          en: '',
          ar: 'مهمتنا',
        },
        content: {
          en: '',
          ar: 'إن عامل نجاحنا القيم هو ما يستطيع فريقنا تحقيقه وما هو قادر على تحقيقه، وتركيزنا الخاص على تطوير رؤية عملائنا هو نتيجة محتملة للاستثمار في فريقنا في جميع المجالات مما يثبت أن مستقبلنا يميل إلى أن يكون الأول في منطقة الشرق الأوسط وشمال أفريقيا وفي جميع أنحاء العالم. نحن ننخرط في العمل الجماعي ونشجعه كعملية تجارية من خلال الاجتماعات والمؤتمرات وغيرها من الطرق التفاعلية "فريق كبير، عقل واحد.',
        },
        image_url: '/uploads/website-images/about-us/3.png',
        image_alt: 'Team working together',
        slug: 'about-our-mission',
        is_active: true,
        created_at: new Date('2025-04-01T10:00:00Z'),
        updated_at: new Date('2025-04-01T10:00:00Z'),
      },
      {
        slug: 'contact',
        title: {
          en: '',
          ar: 'تواصل معنا',
        },
        content: {
          en: '',
          ar: 'ابقَ على تواصل – نحن هنا للمساعدة!',
        },
        image_url: '/uploads/website-images/contact-us/contact-us.png',
        image_alt: 'Contact us form',
        is_active: true,
        created_at: new Date('2025-04-05T09:00:00Z'),
        updated_at: new Date('2025-04-05T09:00:00Z'),
      },

      {
        title: {
          en: 'What We Offer',
          ar: 'ما نقدمه',
        },
        content: {
          en: 'Explore a wide range of professional services tailored to your needs.',
          ar: 'استكشف مجموعة واسعة من الخدمات المهنية المصممة لتلبية احتياجاتك.',
        },
        image_url: '/uploads/website-images/about-us/3.png',
        image_alt: 'Professional services',
        slug: 'services',
        is_active: true,
        created_at: new Date('2025-04-02T11:15:00Z'),
        updated_at: new Date('2025-04-02T11:15:00Z'),
      },
    ];

    await this.sectionRepo.clear(); // Clears the table
    const dataEntities = this.sectionRepo.create(data as any);
    await this.sectionRepo.save(dataEntities);
  }

  private async seedDepartments() {
    const departmentsData = [
      {
        name: { en: 'Marketing', ar: 'التسويق' },
        description: {
          en: 'Handles branding and campaigns.',
          ar: 'يتولى العلامة التجارية والحملات.',
        },
        image_url: '/upload/dept-marketing.png',
        image_alt: 'Marketing team',
      },
      {
        name: { en: 'Development', ar: 'التطوير' },
        description: {
          en: 'Builds digital products and systems.',
          ar: 'يبني المنتجات والأنظمة الرقمية.',
        },
        image_url: '/upload/dept-dev.png',
        image_alt: 'Developers working',
      },
      {
        name: { en: 'Design', ar: 'التصميم' },
        description: {
          en: 'Designs UI/UX for apps.',
          ar: 'يصمم واجهات المستخدم وتجربة المستخدم.',
        },
        image_url: '/upload/dept-design.png',
        image_alt: 'Design sketches',
      },
      {
        name: { en: 'Sales', ar: 'المبيعات' },
        description: {
          en: 'Focuses on customer acquisition.',
          ar: 'يركز على اكتساب العملاء.',
        },
        image_url: '/upload/dept-sales.png',
        image_alt: 'Sales presentation',
      },
      {
        name: { en: 'HR', ar: 'الموارد البشرية' },
        description: {
          en: 'Manages hiring and internal affairs.',
          ar: 'يدير التوظيف والشؤون الداخلية.',
        },
        image_url: '/upload/dept-hr.png',
        image_alt: 'HR meeting',
      },
      {
        name: { en: 'Support', ar: 'الدعم الفني' },
        description: {
          en: 'Helps customers with issues.',
          ar: 'يساعد العملاء في المشاكل.',
        },
        image_url: '/upload/dept-support.png',
        image_alt: 'Support team',
      },
      {
        name: { en: 'Finance', ar: 'المالية' },
        description: {
          en: 'Handles budgeting and expenses.',
          ar: 'يدير الميزانيات والمصاريف.',
        },
        image_url: '/upload/dept-finance.png',
        image_alt: 'Financial report',
      },
    ];

    await this.departmentRepo.clear(); // Clears the table
    const departments = this.departmentRepo.create(departmentsData as any);
    await this.departmentRepo.save(departments);
  }

  private async seedProjects() {
    const departments = await this.departmentRepo.find();
    if (!departments.length) throw new Error('Departments not seeded.');

    const projectData = [
      {
        name: { en: 'Company Website', ar: 'موقع الشركة' },
        description: {
          en: 'Revamped corporate website.',
          ar: 'تجديد موقع الشركة.',
        },
        meta_title: { en: 'Corporate Site', ar: 'الموقع الرسمي' },
        meta_description: {
          en: 'Showcase of services and values.',
          ar: 'عرض الخدمات والقيم.',
        },
        meta_keywords: { en: ['website', 'branding'], ar: ['موقع', 'هوية'] },
      },
      {
        name: { en: 'Mobile App', ar: 'تطبيق الجوال' },
        description: {
          en: 'iOS & Android app.',
          ar: 'تطبيق على أندرويد وآيفون.',
        },
        meta_title: { en: 'App Development', ar: 'تطوير التطبيق' },
        meta_description: {
          en: 'Book services on the go.',
          ar: 'احجز الخدمات أثناء التنقل.',
        },
        meta_keywords: { en: ['mobile', 'app'], ar: ['تطبيق', 'جوال'] },
      },
      {
        name: { en: 'Internal CRM', ar: 'نظام إدارة علاقات العملاء' },
        description: {
          en: 'Custom CRM system.',
          ar: 'نظام علاقات عملاء مخصص.',
        },
        meta_title: { en: 'CRM', ar: 'نظام العملاء' },
        meta_description: {
          en: 'Manage clients efficiently.',
          ar: 'إدارة العملاء بكفاءة.',
        },
        meta_keywords: { en: ['crm', 'sales'], ar: ['نظام', 'مبيعات'] },
      },
      {
        name: { en: 'Landing Page', ar: 'الصفحة الترويجية' },
        description: {
          en: 'Promotional one-pager.',
          ar: 'صفحة ترويجية واحدة.',
        },
        meta_title: { en: 'Landing', ar: 'الصفحة الأولى' },
        meta_description: {
          en: 'Convert visitors to leads.',
          ar: 'تحويل الزوار إلى عملاء محتملين.',
        },
        meta_keywords: { en: ['landing', 'conversion'], ar: ['صفحة', 'تحويل'] },
      },
      {
        name: { en: 'Analytics Dashboard', ar: 'لوحة التحكم' },
        description: { en: 'Interactive dashboard.', ar: 'لوحة تحكم تفاعلية.' },
        meta_title: { en: 'Dashboard', ar: 'اللوحة' },
        meta_description: {
          en: 'Track KPIs in real time.',
          ar: 'تتبع مؤشرات الأداء.',
        },
        meta_keywords: {
          en: ['dashboard', 'analytics'],
          ar: ['تحليلات', 'أداء'],
        },
      },
      {
        name: { en: 'Recruitment Portal', ar: 'بوابة التوظيف' },
        description: {
          en: 'Job listings and applications.',
          ar: 'وظائف وتقديمات.',
        },
        meta_title: { en: 'Jobs Portal', ar: 'بوابة الوظائف' },
        meta_description: {
          en: 'Find and apply for jobs.',
          ar: 'ابحث وقدم على الوظائف.',
        },
        meta_keywords: { en: ['jobs', 'portal'], ar: ['وظائف', 'توظيف'] },
      },
      {
        name: { en: 'Support Chatbot', ar: 'روبوت الدعم' },
        description: {
          en: 'AI-powered support assistant.',
          ar: 'مساعد ذكي لخدمة العملاء.',
        },
        meta_title: { en: 'AI Chatbot', ar: 'روبوت ذكي' },
        meta_description: {
          en: 'Automated customer support.',
          ar: 'دعم عملاء مؤتمت.',
        },
        meta_keywords: { en: ['ai', 'chatbot'], ar: ['ذكاء اصطناعي', 'روبوت'] },
      },
    ];

    const fullData = projectData.map((project, i) => ({
      ...project,
      images: [
        { id: 1, url: `/upload/project-${i + 1}-1.png`, alt: 'Project visual' },
      ],
      department: departments[i % departments.length],
    }));

    await this.projectRepo.clear(); // Clears the table
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

  private async seedPartners() {
    const partners = [
      {
        name: { en: 'Tech Vision', ar: 'رؤية التقنية' },
        logo_url: '/uploads/tech-vision-logo.png',
        logo_alt: 'Tech Vision Logo',
        website_url: 'https://techvision.com',
      },
      {
        name: { en: 'Green Web', ar: 'الويب الأخضر' },
        logo_url: '/uploads/green-web-logo.png',
        logo_alt: 'Green Web Logo',
        website_url: 'https://greenweb.org',
      },
      {
        name: { en: 'Next Soft', ar: 'نكست سوفت' },
        logo_url: '/uploads/next-soft-logo.png',
        logo_alt: 'Next Soft Logo',
        website_url: 'https://nextsoft.io',
      },
      {
        name: { en: 'Cloudy Co.', ar: 'شركة كلاودي' },
        logo_url: '/uploads/cloudy-logo.png',
        logo_alt: 'Cloudy Logo',
        website_url: 'https://cloudyco.com',
      },
    ];

    await this.partnerRepository.clear(); // Clears the table
    const data = this.partnerRepository.create(partners);
    await this.partnerRepository.save(data);
  }
}
