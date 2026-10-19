import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { articles } from '../src/data/articles';
import { projects } from '../src/data/projects';

const SITE_URL = 'https://ilalang.id';
const DEFAULT_IMAGE = '/images/hero/featured-project.jpg';
const DIST_DIR = path.resolve('dist');
const SEO_MARKER = /<!-- SEO_START -->[\s\S]*?<!-- SEO_END -->/;

type Schema = Record<string, unknown>;

interface PageDefinition {
  path: string;
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  priority: number;
  changefreq: 'weekly' | 'monthly' | 'yearly';
  schemas?: Schema[];
}

const organizationSchema: Schema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: 'Ilalang Architect',
  alternateName: 'Ilalang Architect Corp',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}${DEFAULT_IMAGE}`,
  description: 'Studio arsitektur di Malang untuk desain arsitektur, interior, design and build, serta ruang komersial.',
  telephone: '+628113198800',
  email: 'hello@ilalangarch.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Simpang Pandan Arum No.1, Jatimulyo',
    addressLocality: 'Kota Malang',
    addressRegion: 'Jawa Timur',
    postalCode: '65141',
    addressCountry: 'ID',
  },
  areaServed: { '@type': 'Country', name: 'Indonesia' },
  sameAs: ['https://www.instagram.com/ilalang.architect/'],
};

const websiteSchema: Schema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: 'Ilalang Architect',
  inLanguage: 'id-ID',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

function absoluteUrl(value: string) {
  return value.startsWith('http') ? value : new URL(value, SITE_URL).toString();
}

function breadcrumbs(items: Array<{ name: string; path: string }>): Schema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

const staticPages: PageDefinition[] = [
  {
    path: '/',
    title: 'Jasa Arsitek Malang & Design Build | Ilalang Architect',
    description: 'Studio arsitek di Malang untuk desain rumah, interior, bangunan komersial, dan design & build. Konsultasikan kebutuhan serta anggaran proyek Anda.',
    priority: 1,
    changefreq: 'weekly',
    schemas: [organizationSchema, websiteSchema],
  },
  {
    path: '/portfolio',
    title: 'Portofolio Arsitek Malang | Ilalang Architect',
    description: 'Jelajahi portofolio Ilalang Architect untuk proyek rumah, sekolah, fasilitas komersial, olahraga, hunian, dan bangunan publik di berbagai kota.',
    priority: 0.9,
    changefreq: 'monthly',
    schemas: [breadcrumbs([{ name: 'Beranda', path: '/' }, { name: 'Portofolio', path: '/portfolio' }])],
  },
  {
    path: '/services',
    title: 'Jasa Arsitek, Interior & Design Build Malang | Ilalang',
    description: 'Layanan desain arsitektur, interior, design & build, dan branding ruang di Malang. Perencanaan transparan dari konsep hingga pelaksanaan proyek.',
    priority: 0.9,
    changefreq: 'monthly',
    schemas: [breadcrumbs([{ name: 'Beranda', path: '/' }, { name: 'Layanan', path: '/services' }])],
  },
  {
    path: '/inspiration',
    title: 'Inspirasi Arsitektur & Interior | Ilalang Architect',
    description: 'Baca panduan arsitektur tropis, pemilihan material, desain interior, dan persiapan proyek bangunan dari tim Ilalang Architect.',
    priority: 0.7,
    changefreq: 'weekly',
    schemas: [breadcrumbs([{ name: 'Beranda', path: '/' }, { name: 'Inspirasi', path: '/inspiration' }])],
  },
  {
    path: '/about',
    title: 'Tentang Ilalang Architect | Studio Arsitek Malang',
    description: 'Kenali Ilalang Architect, studio arsitektur berbasis di Malang yang merancang ruang berkarakter melalui cahaya alami, material, dan fungsi.',
    priority: 0.7,
    changefreq: 'yearly',
    schemas: [breadcrumbs([{ name: 'Beranda', path: '/' }, { name: 'Tentang', path: '/about' }])],
  },
  {
    path: '/contact',
    title: 'Konsultasi Jasa Arsitek Malang | Ilalang Architect',
    description: 'Konsultasikan proyek rumah, interior, bangunan komersial, atau design & build bersama Ilalang Architect di Malang. Hubungi tim kami sekarang.',
    priority: 0.8,
    changefreq: 'yearly',
    schemas: [
      organizationSchema,
      breadcrumbs([{ name: 'Beranda', path: '/' }, { name: 'Kontak', path: '/contact' }]),
    ],
  },
];

const projectPages: PageDefinition[] = projects.map((project) => {
  const route = `/portfolio/${project.id}`;
  return {
    path: route,
    title: `${project.title} | Portofolio Ilalang Architect`,
    description: project.description ?? `Lihat detail proyek ${project.title} dalam portofolio Ilalang Architect.`,
    image: project.image,
    priority: 0.8,
    changefreq: 'monthly',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
        image: absoluteUrl(project.image),
        url: absoluteUrl(route),
        inLanguage: 'id-ID',
        creator: { '@id': `${SITE_URL}/#organization` },
      },
      breadcrumbs([
        { name: 'Beranda', path: '/' },
        { name: 'Portofolio', path: '/portfolio' },
        { name: project.title, path: route },
      ]),
    ],
  };
});

const articlePages: PageDefinition[] = articles.map((article) => {
  const route = `/inspiration/${article.id}`;
  return {
    path: route,
    title: `${article.title} | Ilalang Architect`,
    description: article.metaDescription,
    image: article.image,
    type: 'article',
    priority: 0.7,
    changefreq: 'monthly',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.metaDescription,
        image: article.image,
        datePublished: article.datePublished,
        dateModified: article.datePublished,
        inLanguage: 'id-ID',
        mainEntityOfPage: absoluteUrl(route),
        author: { '@id': `${SITE_URL}/#organization` },
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      breadcrumbs([
        { name: 'Beranda', path: '/' },
        { name: 'Inspirasi', path: '/inspiration' },
        { name: article.title, path: route },
      ]),
    ],
  };
});

const pages = [...staticPages, ...projectPages, ...articlePages];

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function renderSeo(page: PageDefinition) {
  const canonical = absoluteUrl(page.path);
  const image = absoluteUrl(page.image ?? DEFAULT_IMAGE);
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const schema = JSON.stringify(page.schemas ?? []).replaceAll('<', '\\u003c');

  return `<!-- SEO_START -->
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:locale" content="id_ID" />
    <meta property="og:type" content="${page.type ?? 'website'}" />
    <meta property="og:site_name" content="Ilalang Architect" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${image}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${image}" />
    <script id="page-structured-data" type="application/ld+json">${schema}</script>
    <!-- SEO_END -->`;
}

function sitemapXml() {
  const lastModified = new Date().toISOString().slice(0, 10);
  const urls = pages.map((page) => `  <url>
    <loc>${absoluteUrl(page.path)}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

async function main() {
  const baseHtml = await readFile(path.join(DIST_DIR, 'index.html'), 'utf8');
  if (!SEO_MARKER.test(baseHtml)) {
    throw new Error('SEO marker tidak ditemukan di dist/index.html');
  }

  for (const page of pages) {
    const html = baseHtml.replace(SEO_MARKER, renderSeo(page));
    const relativeRoute = page.path.replace(/^\/+|\/+$/g, '');
    const outputDir = relativeRoute ? path.join(DIST_DIR, relativeRoute) : DIST_DIR;
    await mkdir(outputDir, { recursive: true });
    await writeFile(path.join(outputDir, 'index.html'), html);
  }

  await writeFile(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml());
  await writeFile(
    path.join(DIST_DIR, 'robots.txt'),
    'User-agent: *\nAllow: /\n\nSitemap: https://ilalang.id/sitemap.xml\n',
  );

  console.log(`Generated SEO metadata for ${pages.length} routes.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
