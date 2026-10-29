/**
 * Fill missing meta.en / meta.ar on CMS pages so AR and EN both have SEO.
 * Usage: node scripts/seed-bilingual-page-seo.js
 * Requires backend on PORT from .env (default 8095).
 */
const API = (process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || 'http://localhost:8095').replace(/\/+$/, '');

const ARABIC = /[\u0600-\u06FF]/;

const AR_COPY = {
  'home-page': {
    title: 'وكالة تسويق وحلول رقمية متكاملة للشركات بالسعودية | جو 13',
    description:
      'وكالة تسويق وحلول رقمية في السعودية، نقدم حلولاً 360 للتسويق، تطوير البرمجيات والذكاء الاصطناعي، الموارد البشرية، الاتصالات، وإدارة الفعاليات.',
    keywords: ['جو 13', 'وكالة تسويق', 'حلول رقمية', 'السعودية', 'برمجيات', 'موارد بشرية'],
    ogTitle: 'جو 13 | حلول أعمال متكاملة بخبرة أكثر من 12 عاماً',
    ogDescription:
      'نحوّل الأفكار إلى حلول حقيقية ونساعد الشركات على النمو بشكل أسرع وأذكى وأقوى.',
    canonicalUrl: 'https://www.joe13th.com/',
  },
  'about-us': {
    title: 'من نحن | جو 13 — قصتنا ورؤيتنا ورسالتنا',
    description:
      'تعرّف على جو 13، شركة تسويق وبرمجيات تأسست عام 2013. اكتشف رحلتنا وقيمنا وكيف نبتكر عبر التقنية والعمل الجماعي.',
    keywords: ['من نحن', 'جو 13', 'شركة تسويق', 'تطوير برمجيات', 'رؤية الشركة', 'رسالة الشركة'],
    ogTitle: 'من نحن | جو 13 — قصتنا ورؤيتنا ورسالتنا',
    ogDescription: 'تعرّف على جو 13 الرائدة في حلول التسويق والبرمجيات، وقيمنا والتزامنا بالابتكار.',
    canonicalUrl: 'https://www.joe13th.com/about-us',
  },
  'contact-us': {
    title: 'تواصل معنا | جو 13',
    description: 'تواصل مع فريق جو 13. نحن هنا لمساعدتك في أي استفسار أو طلب دعم.',
    keywords: ['تواصل معنا', 'جو 13', 'دعم العملاء', 'استفسارات'],
    ogTitle: 'تواصل مع جو 13 — نحن هنا لمساعدتك',
    ogDescription: 'راسل جو 13 لأي استفسار أو ملاحظات أو طلب دعم. فريقنا جاهز لمساعدتك.',
    canonicalUrl: 'https://www.joe13th.com/contact-us',
  },
  'join-us': {
    title: 'انضم إلينا | جو 13 — انمُ معنا',
    description:
      'كن جزءاً من فريق جو 13 الديناميكي والشامل. اكتشف فرص العمل في ثقافة الابتكار والتعاون والنمو الشخصي.',
    keywords: ['وظائف', 'انضم إلينا', 'جو 13', 'فرص عمل', 'ثقافة العمل'],
    ogTitle: 'انضم إلى جو 13 — حيث يلتقي الموهبة بالفرصة',
    ogDescription: 'هل تريد أن تصنع أثراً؟ انضم إلى جو 13 وانمُ في بيئة عمل مبتكرة وشاملة.',
    canonicalUrl: 'https://www.joe13th.com/join-us',
  },
  blogs: {
    title: 'مدونة جو 13 — رؤى في التسويق والتقنية والموارد البشرية والمزيد',
    description:
      'استكشف مقالات جو 13 المتخصصة حول استراتيجيات التسويق، ابتكارات البرمجيات، حلول الاتصالات، اتجاهات الموارد البشرية، وإدارة الفعاليات.',
    keywords: ['مدونة', 'جو 13', 'تسويق رقمي', 'تقنية', 'موارد بشرية', 'إدارة فعاليات'],
    ogTitle: 'مدونة جو 13 — رؤى متخصصة عبر قطاعات الأعمال',
    ogDescription: 'تابع أحدث مقالات جو 13 في التسويق والبرمجيات والاتصالات والموارد البشرية وإدارة الفعاليات.',
    canonicalUrl: 'https://www.joe13th.com/blogs',
  },
  projects: {
    title: 'مشاريع جو 13 — أكثر من 180 قصة نجاح في 47 مدينة',
    description:
      'استكشف مشاريع جو 13 المتنوعة في التسويق والتقنية والموارد البشرية وإدارة الفعاليات. موثوقون من أكثر من 100 عميل في 47 مدينة.',
    keywords: ['مشاريع', 'جو 13', 'حملات تسويقية', 'تحول رقمي', 'قصص نجاح'],
    ogTitle: 'مشاريع جو 13 — أكثر من 180 مشروعاً ناجحاً',
    ogDescription: 'اكتشف محفظة جو 13 لأكثر من 180 مشروعاً ناجحاً في التسويق والبرمجيات والموارد البشرية وإدارة الفعاليات.',
    canonicalUrl: 'https://www.joe13th.com/projects',
  },
  services: {
    title: 'خدماتنا | جو 13 — حلول أعمال متكاملة',
    description:
      'اكتشف خدمات جو 13 في التسويق، البرمجيات والذكاء الاصطناعي، الاتصالات، الموارد البشرية، والترويج وإدارة الفعاليات.',
    keywords: ['خدمات', 'جو 13', 'تسويق', 'برمجيات', 'موارد بشرية', 'اتصالات'],
    ogTitle: 'خدمات جو 13 — حلول متكاملة لنمو أعمالك',
    ogDescription: 'حلول تسويق وتقنية وموارد بشرية واتصالات مصممة لمساعدة الشركات على النمو.',
    canonicalUrl: 'https://www.joe13th.com/services',
  },
};

function isFilled(block) {
  return block && typeof block === 'object' && (block.title || block.description);
}

function fromFlat(meta) {
  return {
    title: meta.title || '',
    description: meta.description || '',
    keywords: Array.isArray(meta.keywords) ? meta.keywords : [],
    ogTitle: meta.ogTitle || meta.title || '',
    ogDescription: meta.ogDescription || meta.description || '',
    canonicalUrl: String(meta.canonicalUrl || '').replace('yourdomain.com', 'www.joe13th.com'),
    robots: meta.robots || 'index, follow',
    structuredData: meta.structuredData || null,
    ogImage: meta.ogImage || null,
  };
}

async function main() {
  const listRes = await fetch(`${API}/api/v1/pages?limit=100`);
  if (!listRes.ok) throw new Error(`List pages failed: ${listRes.status}`);
  const list = await listRes.json();
  const pages = list.data || list || [];

  for (const page of pages) {
    const meta = page.meta || {};
    const flat = fromFlat(meta);
    const flatIsAr = ARABIC.test(String(flat.title || ''));
    const arCopy = AR_COPY[page.slug] || null;

    let en = isFilled(meta.en) ? { ...flat, ...meta.en } : flatIsAr ? null : flat;
    let ar = isFilled(meta.ar) ? { ...flat, ...meta.ar } : flatIsAr ? flat : arCopy;

    if (!en && !flatIsAr) en = flat;
    if (!ar && arCopy) ar = { ...flat, ...arCopy, ogImage: flat.ogImage };
    if (!en && meta.en) en = { ...flat, ...meta.en };
    // Ensure English always has English text from flat when flat is English
    if (!en && !flatIsAr && flat.title) en = flat;
    // Home already has both — still normalize
    if (page.slug === 'home-page') {
      en = isFilled(meta.en) ? { ...flat, ...meta.en } : AR_COPY['home-page'] && flatIsAr
        ? {
            title: 'JOE13 | 360 solutions company with +12 years of experience',
            description:
              'JOE13 delivers 360° marketing, software & AI, HR, telecom, and event solutions that help businesses grow faster.',
            keywords: ['Joe13', 'Marketing Solutions', 'Digital Marketing', 'Software and AI', 'HR Solutions'],
            ogTitle: 'JOE13 | 360 solutions company with +12 years of experience',
            ogDescription: 'We turn ideas into real solutions and help companies grow faster, smarter, and stronger.',
            canonicalUrl: 'https://www.joe13th.com/en',
            robots: 'index, follow',
            ogImage: flat.ogImage,
          }
        : flat;
      ar = isFilled(meta.ar) ? { ...flat, ...meta.ar } : AR_COPY['home-page'];
    }

    if (!en) {
      en = {
        title: flat.title && !ARABIC.test(flat.title) ? flat.title : page.title || page.slug,
        description: flat.description && !ARABIC.test(flat.description) ? flat.description : '',
        keywords: flat.keywords,
        ogTitle: flat.ogTitle && !ARABIC.test(flat.ogTitle) ? flat.ogTitle : flat.title,
        ogDescription: flat.ogDescription,
        canonicalUrl: flat.canonicalUrl.replace(/\/$/, '') + (page.slug === 'home-page' ? '/en' : `/en/${page.slug === 'home-page' ? '' : page.slug}`).replace(/\/$/, '') || `https://www.joe13th.com/en/${page.slug}`,
        robots: 'index, follow',
        ogImage: flat.ogImage,
      };
      if (page.slug !== 'home-page') {
        en.canonicalUrl = `https://www.joe13th.com/en/${page.slug}`;
      }
    }
    if (!ar && arCopy) ar = { ...arCopy, ogImage: flat.ogImage, robots: 'index, follow' };
    if (!ar) {
      console.log(`skip ${page.slug}: no Arabic copy available`);
      continue;
    }

    // Fix bad canonicals
    if (en.canonicalUrl) en.canonicalUrl = en.canonicalUrl.replace('yourdomain.com', 'www.joe13th.com');
    if (ar.canonicalUrl) ar.canonicalUrl = ar.canonicalUrl.replace('yourdomain.com', 'www.joe13th.com');

    const nextMeta = {
      ...meta,
      en,
      ar,
      title: en.title,
      description: en.description,
      keywords: en.keywords,
      ogTitle: en.ogTitle,
      ogDescription: en.ogDescription,
      canonicalUrl: en.canonicalUrl || ar.canonicalUrl,
      ogType: meta.ogType || 'website',
      ogImage: meta.ogImage || en.ogImage || ar.ogImage,
      robots: en.robots || 'index, follow',
      structuredData: meta.structuredData,
      headScript: meta.headScript,
      bodyScript: meta.bodyScript,
    };

    const put = await fetch(`${API}/api/v1/pages/${page.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: page.title, meta: nextMeta }),
    });
    if (!put.ok) {
      console.error(`FAIL ${page.slug}`, await put.text());
    } else {
      console.log(`OK ${page.slug} en="${en.title?.slice(0, 40)}" ar="${ar.title?.slice(0, 40)}"`);
    }
  }

  // Ensure services listing page exists
  const services = pages.find((p) => p.slug === 'services');
  if (!services) {
    const ar = AR_COPY.services;
    const en = {
      title: 'Our Services | JOE13 — Integrated Business Solutions',
      description:
        'Explore JOE13 services across marketing, software & AI, telecom, HR, and event activation & management.',
      keywords: ['Services', 'JOE13', 'Marketing', 'Software', 'HR', 'Telecom'],
      ogTitle: 'JOE13 Services — Integrated solutions for business growth',
      ogDescription: 'Marketing, technology, HR, and telecom solutions designed to help companies grow.',
      canonicalUrl: 'https://www.joe13th.com/en/services',
      robots: 'index, follow',
    };
    const create = await fetch(`${API}/api/v1/pages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        slug: 'services',
        title: 'services',
        meta: {
          ...en,
          en,
          ar: { ...ar, robots: 'index, follow' },
          ogType: 'website',
        },
        sections: [],
      }),
    });
    console.log(create.ok ? 'CREATED services page' : `services create failed: ${await create.text()}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
