require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
const { Client } = require('pg');

function fill(current, fallback) {
  if (current == null || String(current).trim() === '') return fallback;
  return current;
}

const LANDING = {
  sec1: '/landing/bg-hero.png',
  sec2: '/landing/bg-2-section.png',
  sec3: '/landing/bg-3-section.png',
  sec4: '/landing/bg-4-section.png',
  sec5: '/landing/bg-5-section.png',
  sec6: '/landing/bg-6-section.png',
  sec8: '/landing/bg-7-section.png',
  sec9: '/landing/bg-8-section.png',
  sec10: '/landing/bg-9-section.png',
  sec11: '/landing/bg-10-section.png',
};

const PAGE_COPY = {
  sec1: {
    content: {
      en: 'We turn ideas into real solutions, helping businesses grow faster, smarter, and stronger.',
      ar: 'نحوّل الأفكار إلى حلول حقيقية، ونساعد الشركات على النمو بشكل أسرع وأذكى وأقوى.',
    },
    ui: {
      en: { cta: 'Contact Us', logo: '/assets/svg/logo-white.svg' },
      ar: { cta: 'اتصل بنا', logo: '/assets/svg/logo-white.svg' },
    },
  },
  sec2: {
    content: {
      en: 'Trusted by businesses worldwide, we turn ideas into measurable results and long-term success.',
      ar: 'يثق بنا رواد الأعمال حول العالم، ونحوّل الأفكار إلى نتائج قابلة للقياس ونجاح طويل الأمد.',
    },
    ui: {
      en: { eyebrow: 'REAL IMPACT', cta: 'Download PDF', pdf: '/joe-pdf-en2.pdf' },
      ar: { eyebrow: 'أثر حقيقي', cta: 'تحميل ملف PDF', pdf: '/joe-pdf-en2.pdf' },
    },
  },
  sec3: {
    content: {
      en: 'Building stronger businesses through trusted collaborations',
      ar: 'نبني أعمالًا أقوى من خلال تعاون موثوق',
    },
    ui: {
      en: { eyebrow: 'TRUSTED TOGETHER' },
      ar: { eyebrow: 'ثقة مشتركة' },
    },
  },
  sec4: {
    content: {
      en: 'Diverse expertise. Unified by one vision—creating real value across industries.',
      ar: 'خبرات متنوعة. يجمعها رؤية واحدة—صناعة قيمة حقيقية عبر القطاعات.',
    },
    ui: {
      en: { eyebrow: 'OUR EXPERTISE', cta: 'Explore Our Business Units' },
      ar: { eyebrow: 'خبراتنا', cta: 'استكشف وحدات أعمالنا' },
    },
  },
  sec5: {
    ui: {
      en: { eyebrow: 'DIGITAL GROWTH', cta: 'Read More' },
      ar: { eyebrow: 'نمو رقمي', cta: 'قراءة المزيد' },
    },
  },
  sec6: {
    ui: {
      en: {
        eyebrow: 'INNOVATION FOR A SMARTER TOMORROW',
        cta: 'Read More',
        features: ['Custom\nSoftware', 'AI Solutions', 'System\nIntegration', 'Ongoing\nSupport'],
      },
      ar: {
        eyebrow: 'ابتكار لغدٍ أذكى',
        cta: 'قراءة المزيد',
        features: ['برمجيات\nمخصصة', 'حلول الذكاء الاصطناعي', 'تكامل\nالأنظمة', 'دعم\nمستمر'],
      },
    },
  },
  sec8: {
    ui: {
      en: {
        eyebrow: 'CONNECTING PEOPLE TO A BRIGHTER TOMORROW',
        body: 'Delivering reliable communication solutions, empowering businesses and communities to stay connected.',
        cta: 'Read More',
        features: ['Network\nSolutions', 'Expert\nSales Team', 'Customized\nSolutions', 'Business\nGrowth'],
      },
      ar: {
        eyebrow: 'نربط الناس بغدٍ أكثر إشراقًا',
        body: 'نقدّم حلول اتصال موثوقة، ونمكّن الشركات والمجتمعات من البقاء على تواصل.',
        cta: 'قراءة المزيد',
        features: ['حلول\nالشبكات', 'فريق مبيعات\nمحترف', 'حلول\nمخصصة', 'نمو\nالأعمال'],
      },
    },
  },
  sec9: {
    ui: {
      en: {
        eyebrowParts: ['TALENT', 'POWER', 'PROGRESS'],
        cta: 'Read More',
        features: ['Talent\nAcquisition', 'HR\nConsulting', 'Workforce\nManagement', 'Employee\nDeployment'],
      },
      ar: {
        eyebrowParts: ['موهبة', 'قوة', 'تقدم'],
        cta: 'قراءة المزيد',
        features: ['استقطاب\nالمواهب', 'استشارات\nالموارد البشرية', 'إدارة\nالقوى العاملة', 'نشر\nالموظفين'],
      },
    },
  },
  sec10: {
    ui: {
      en: {
        eyebrowParts: ['BRANDS', 'IN', 'EVERY', 'EXPERIENCE'],
        cta: 'Read More',
        features: ['Strategic\nMerchandising', 'Brand\nActivation', 'Event\nManagement', 'Measurable\nResults'],
      },
      ar: {
        eyebrowParts: ['علامات', 'في', 'كل', 'تجربة'],
        cta: 'قراءة المزيد',
        features: ['ترويج\nاستراتيجي', 'تنشيط\nالعلامة', 'إدارة\nالفعاليات', 'نتائج\nقابلة للقياس'],
      },
    },
  },
  sec11: {
    ui: {
      en: {
        eyebrowParts: ['SOLUTIONS', 'THAT', 'MATTER'],
        body: 'A diverse range of products and solutions designed to empower businesses, simplify operations, and create real impact.',
        cta: 'Read More',
        features: ['Innovative\nSolutions', 'Built for\nBusinesses', 'Real\nImpact', 'Continuous\nGrowth'],
      },
      ar: {
        eyebrowParts: ['حلول', 'التي', 'تهم'],
        body: 'مجموعة متنوعة من المنتجات والحلول مصممة لتمكين الأعمال وتبسيط العمليات وصناعة أثر حقيقي.',
        cta: 'قراءة المزيد',
        features: ['حلول\nمبتكرة', 'مبنية\nللأعمال', 'أثر\nحقيقي', 'نمو\nمستمر'],
      },
    },
  },
};

async function main() {
  const client = new Client({
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT || 5432),
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    ssl: { rejectUnauthorized: false },
  });

  await client.connect();
  const { rows } = await client.query(`SELECT id, title, meta, sections FROM pages WHERE slug = 'home-page'`);
  if (!rows.length) {
    throw new Error('home-page row not found');
  }

  const page = rows[0];
  const sections = (page.sections || []).map((section) => {
    const copy = PAGE_COPY[section.id];
    const next = { ...section };
    if (copy?.content) {
      next.content = {
        en: fill(section.content?.en, copy.content.en),
        ar: fill(section.content?.ar, copy.content.ar),
      };
    }
    if (LANDING[section.id]) {
      next.image = {
        ...(section.image || {}),
        url: LANDING[section.id],
        alt: section.image?.alt && section.image.alt !== 'alt image 1' ? section.image.alt : section.title?.en || section.id,
      };
    }
    if (copy?.ui) {
      next.ui = {
        en: { ...(section.ui?.en || {}), ...copy.ui.en },
        ar: { ...(section.ui?.ar || {}), ...copy.ui.ar },
      };
    }
    return next;
  });

  const currentMeta = page.meta || {};
  const meta = {
    ...currentMeta,
    en: {
      title: 'JOE13 | 360 solutions company with +12 years of experience',
      description:
        'We turn ideas into real solutions, helping businesses grow faster, smarter, and stronger. Marketing, software & AI, telecoms, HR, and event solutions.',
      keywords: (currentMeta.keywords || []).filter((k) => !/[\u0600-\u06FF]/.test(k)),
      ogTitle: 'JOE13 — 360° business solutions',
      ogDescription:
        'Trusted by businesses worldwide. Marketing, software & AI, telecoms, HR, merchandising, and products from JOE13.',
      canonicalUrl: currentMeta.canonicalUrl || 'https://joe13th.com',
      ogUrl: currentMeta.ogUrl || 'https://joe13th.com',
      ogType: currentMeta.ogType || 'website',
    },
    ar: {
      title: currentMeta.title || 'وكالة تسويق وحلول رقمية متكاملة للشركات بالسعودية | جو 13',
      description:
        currentMeta.description ||
        'وكالة تسويق وحلول رقمية في السعودية, نقدم حلولاً 360 للتسويق، تطوير البرمجيات والذكاء الاصطناعي، الموارد البشرية، والاتصالات.',
      keywords: currentMeta.keywords || [],
      ogTitle: currentMeta.ogTitle || currentMeta.title,
      ogDescription: currentMeta.ogDescription || currentMeta.description,
      canonicalUrl: currentMeta.canonicalUrl || 'https://joe13th.com',
      ogUrl: currentMeta.ogUrl || 'https://joe13th.com',
      ogType: currentMeta.ogType || 'website',
    },
    title: currentMeta.title,
    description: currentMeta.description,
    keywords: currentMeta.keywords,
    ogTitle: currentMeta.ogTitle,
    ogDescription: currentMeta.ogDescription,
    canonicalUrl: currentMeta.canonicalUrl,
    ogUrl: currentMeta.ogUrl,
    ogType: currentMeta.ogType,
    ogImage: currentMeta.ogImage,
    headScript: currentMeta.headScript,
    bodyScript: currentMeta.bodyScript,
    structuredData: currentMeta.structuredData,
  };

  await client.query(
    `UPDATE pages SET sections = $1::jsonb, meta = $2::jsonb, updated_at = NOW() WHERE id = $3`,
    [JSON.stringify(sections), JSON.stringify(meta), page.id],
  );

  console.log('seeded home-page from live page copy', {
    id: page.id,
    sections: sections.map((s) => s.id),
  });
  await client.end();
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
