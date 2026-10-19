import { useEffect } from 'react';

const SITE_URL = 'https://ilalang.id';
const DEFAULT_IMAGE = '/images/hero/featured-project.jpg';

type JsonLd = Record<string, unknown> | Array<Record<string, unknown>>;

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  robots?: string;
  structuredData?: JsonLd;
}

function absoluteUrl(value: string) {
  return value.startsWith('http') ? value : new URL(value, SITE_URL).toString();
}

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export const organizationSchema = {
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
  areaServed: {
    '@type': 'Country',
    name: 'Indonesia',
  },
  sameAs: ['https://www.instagram.com/ilalang.architect/'],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: 'Ilalang Architect',
  inLanguage: 'id-ID',
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
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

export default function Seo({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  robots = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  structuredData,
}: SeoProps) {
  useEffect(() => {
    const canonicalUrl = absoluteUrl(path);
    const imageUrl = absoluteUrl(image);

    document.documentElement.lang = 'id';
    document.title = title;

    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[name="robots"]', 'name', 'robots', robots);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:type"]', 'property', 'og:type', type);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMeta('meta[property="og:image"]', 'property', 'og:image', imageUrl);
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', 'id_ID');
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'Ilalang Architect');
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const previousSchema = document.getElementById('page-structured-data');
    previousSchema?.remove();

    if (structuredData) {
      const schema = document.createElement('script');
      schema.id = 'page-structured-data';
      schema.type = 'application/ld+json';
      schema.textContent = JSON.stringify(structuredData);
      document.head.appendChild(schema);
    }
  }, [description, image, path, robots, structuredData, title, type]);

  return null;
}
