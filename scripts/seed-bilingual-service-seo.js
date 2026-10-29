/**
 * Fill meta.en / meta.ar on every service from flat Arabic SEO + EN title/subtitle.
 * Usage: node scripts/seed-bilingual-service-seo.js
 */
const API = (process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || 'http://localhost:8095').replace(
  /\/+$/,
  '',
);

const ARABIC = /[\u0600-\u06FF]/;
const SITE = 'https://www.joe13th.com';

function isFilled(block) {
  return block && typeof block === 'object' && (block.title || block.description);
}

function fixCanon(url, path) {
  const raw = String(url || '').replace('yourdomain.com', 'www.joe13th.com').replace('://joe13th.com', '://www.joe13th.com');
  if (raw && !/localhost/i.test(raw)) {
    try {
      const u = new URL(raw.startsWith('http') ? raw : `${SITE}${raw.startsWith('/') ? '' : '/'}${raw}`);
      return `${SITE}${u.pathname}${u.search}`;
    } catch {
      /* fall through */
    }
  }
  return `${SITE}${path}`;
}

function localeBlock({ title, description, keywords, ogTitle, ogDescription, canonicalUrl, robots, structuredData, ogImage, ogType }) {
  return {
    title: title || '',
    description: description || '',
    keywords: Array.isArray(keywords) ? keywords : [],
    ogTitle: ogTitle || title || '',
    ogDescription: ogDescription || description || '',
    canonicalUrl: canonicalUrl || '',
    robots: robots || 'index, follow',
    structuredData: structuredData || null,
    ogImage: ogImage || null,
    ogType: ogType || 'website',
  };
}

async function main() {
  const listRes = await fetch(`${API}/api/v1/services?limit=100`);
  if (!listRes.ok) throw new Error(`List services failed: ${listRes.status}`);
  const list = await listRes.json();
  const services = list.data || list || [];
  let updated = 0;

  for (const svc of services) {
    const meta = svc.meta || {};
    const flatTitle = meta.title || '';
    const flatIsAr = ARABIC.test(String(flatTitle));
    const enName = svc.title?.en || svc.title?.ar || svc.slug;
    const arName = svc.title?.ar || svc.title?.en || svc.slug;
    const enSub = svc.subTitle?.en || '';
    const arSub = svc.subTitle?.ar || '';

    const arPath = `/services/${svc.slug}`;
    const enPath = `/en/services/${svc.slug}`;

    const fromFlat = localeBlock({
      title: flatTitle,
      description: meta.description,
      keywords: meta.keywords,
      ogTitle: meta.ogTitle,
      ogDescription: meta.ogDescription,
      canonicalUrl: fixCanon(meta.canonicalUrl, arPath),
      robots: meta.robots,
      structuredData: meta.structuredData,
      ogImage: meta.ogImage,
      ogType: meta.ogType,
    });

    const ar =
      isFilled(meta.ar)
        ? localeBlock({ ...fromFlat, ...meta.ar, canonicalUrl: fixCanon(meta.ar.canonicalUrl || fromFlat.canonicalUrl, arPath) })
        : flatIsAr
          ? fromFlat
          : localeBlock({
              title: `${arName} | جو 13`,
              description: arSub || fromFlat.description,
              keywords: fromFlat.keywords,
              ogTitle: `${arName} | جو 13`,
              ogDescription: arSub || fromFlat.ogDescription,
              canonicalUrl: fixCanon(null, arPath),
              robots: fromFlat.robots,
              structuredData: fromFlat.structuredData,
              ogImage: fromFlat.ogImage,
              ogType: fromFlat.ogType,
            });

    const en =
      isFilled(meta.en)
        ? localeBlock({
            ...fromFlat,
            ...meta.en,
            canonicalUrl: fixCanon(meta.en.canonicalUrl || `${SITE}${enPath}`, enPath),
          })
        : localeBlock({
            title: `${enName} | JOE13`,
            description:
              enSub ||
              (flatIsAr ? '' : fromFlat.description) ||
              `Discover ${enName} solutions from JOE13 — marketing, software, HR, and business growth in Saudi Arabia.`,
            keywords: Array.isArray(meta.keywords)
              ? meta.keywords
              : [enName, 'JOE13', 'Saudi Arabia', 'business solutions'],
            ogTitle: `${enName} | JOE13`,
            ogDescription: enSub || `JOE13 ${enName} services for businesses in Saudi Arabia.`,
            canonicalUrl: fixCanon(null, enPath),
            robots: fromFlat.robots,
            structuredData: fromFlat.structuredData,
            ogImage: fromFlat.ogImage,
            ogType: fromFlat.ogType,
          });

    const nextMeta = {
      ...meta,
      // keep flat as Arabic (primary market) for legacy readers
      title: ar.title || meta.title,
      description: ar.description || meta.description,
      keywords: ar.keywords?.length ? ar.keywords : meta.keywords,
      ogTitle: ar.ogTitle || meta.ogTitle,
      ogDescription: ar.ogDescription || meta.ogDescription,
      canonicalUrl: ar.canonicalUrl,
      ogUrl: `${SITE}${arPath}`,
      ogType: meta.ogType || 'website',
      ogImage: meta.ogImage,
      robots: meta.robots || 'index, follow',
      structuredData: meta.structuredData,
      headScript: meta.headScript,
      bodyScript: meta.bodyScript,
      en,
      ar,
    };

    const put = await fetch(`${API}/api/v1/services/${svc.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ meta: nextMeta }),
    });
    if (!put.ok) {
      const err = await put.text();
      console.error(`FAIL ${svc.slug}: ${put.status} ${err}`);
      continue;
    }
    updated += 1;
    console.log(`OK ${svc.slug} | AR=${ar.title.slice(0, 40)}… | EN=${en.title.slice(0, 40)}…`);
  }

  console.log(`Done. Updated ${updated}/${services.length} services.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
