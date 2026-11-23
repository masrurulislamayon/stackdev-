import { FOUNDER_PROFILE, PROFILE_LINKS } from '@/src/data/about';
import { BRAND } from '@/src/data/brand';
import type { BlogPost } from '@/src/data/posts';
import type { ProjectItem } from '@/src/data/projects';
import { SITE_URL } from '@/src/data/seo';
import { pickLocalized, type ServiceItem } from '@/src/data/services';
import type { Locale } from '@/src/i18n';

export interface BreadcrumbEntry {
  name: string;
  path: string;
}

export interface FaqSchemaEntry {
  question: string;
  answer: string;
}

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const PROFESSIONAL_SERVICE_ID = `${SITE_URL}/#localbusiness`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const SHARED_SAME_AS = PROFILE_LINKS.map((link) => link.href);

const SHARED_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Savar',
  addressLocality: 'Savar',
  addressRegion: 'Dhaka',
  postalCode: '1340',
  addressCountry: 'BD',
};

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: BRAND.name,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon-512x512.png`,
    image: `${SITE_URL}/og-image.png`,
    description: BRAND.tagline,
    telephone: BRAND.phoneDisplay,
    address: SHARED_ADDRESS,
    founder: {
      '@type': 'Person',
      name: FOUNDER_PROFILE.name,
      jobTitle: 'Full-Stack Web Engineer',
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Daffodil International University',
      },
      sameAs: SHARED_SAME_AS,
    },
    sameAs: SHARED_SAME_AS,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BRAND.phoneDisplay,
      contactType: 'customer support',
      areaServed: 'BD',
      availableLanguage: ['English', 'Bengali'],
    },
  };
}

export function buildProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': PROFESSIONAL_SERVICE_ID,
    name: BRAND.name,
    url: SITE_URL,
    image: `${SITE_URL}/og-image.png`,
    logo: `${SITE_URL}/favicon-512x512.png`,
    description: BRAND.tagline,
    telephone: BRAND.phoneDisplay,
    priceRange: 'BDT 2,000 - BDT 35,000+',
    address: SHARED_ADDRESS,
    areaServed: {
      '@type': 'Country',
      name: 'Bangladesh',
    },
    sameAs: SHARED_SAME_AS,
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: BRAND.name,
    url: SITE_URL,
    inLanguage: ['en', 'bn'],
    publisher: {
      '@id': ORGANIZATION_ID,
    },
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === '/' ? '/' : item.path}`,
    })),
  };
}

export function buildServiceSchema(service: ServiceItem, locale: Locale) {
  const url = `${SITE_URL}/services/${service.slug}`;
  const offerBySlug: Partial<Record<ServiceItem['slug'], Record<string, unknown>>> = {
    'custom-web-development': {
      '@type': 'AggregateOffer',
      priceCurrency: 'BDT',
      lowPrice: '15000',
      highPrice: '35000',
      offerCount: '2',
      url: `${SITE_URL}/pricing`,
    },
    'portfolio-websites': {
      '@type': 'Offer',
      priceCurrency: 'BDT',
      price: '2000',
      description: pickLocalized(service.pricingNote.highlight, locale),
      url: `${SITE_URL}/pricing`,
    },
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: pickLocalized(service.title, locale),
    description: pickLocalized(service.heroDescription, locale),
    serviceType: pickLocalized(service.title, 'en'),
    url,
    provider: {
      '@id': ORGANIZATION_ID,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Bangladesh',
    },
    ...(offerBySlug[service.slug] ? { offers: offerBySlug[service.slug] } : {}),
  };
}

export function buildFaqSchema(items: FaqSchemaEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildArticleSchema(post: BlogPost, locale: Locale) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: pickLocalized(post.title, locale),
    description: pickLocalized(post.excerpt, locale),
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: locale,
    image: `${SITE_URL}/og-image.png`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    author: {
      '@type': 'Person',
      name: FOUNDER_PROFILE.name,
      sameAs: SHARED_SAME_AS,
    },
    publisher: {
      '@id': ORGANIZATION_ID,
    },
    keywords: post.tags.join(', '),
  };
}

export function buildPricingOffersSchema(locale: Locale) {
  const offers = [
    {
      '@type': 'Offer',
      name: locale === 'bn' ? 'Stack Dev Basic ওয়েব প্যাকেজ' : 'Stack Dev Basic Package',
      description:
        locale === 'bn'
          ? 'সর্বোচ্চ ৫টি পেজ, রেসপন্সিভ ডিজাইন, কন্টাক্ট ফর্ম, বেসিক SEO, ১ রাউন্ড রিভিশন এবং ৭–১০ দিনে ডেলিভারি।'
          : 'Up to 5 pages, responsive design, contact form integration, basic SEO setup, 1 round of revisions, delivery in 7-10 days.',
      price: '15000',
      priceCurrency: 'BDT',
      url: `${SITE_URL}/contact?package=basic`,
      seller: { '@id': ORGANIZATION_ID },
    },
    {
      '@type': 'Offer',
      name: locale === 'bn' ? 'Stack Dev Premium ওয়েব প্যাকেজ' : 'Stack Dev Premium Package',
      description:
        locale === 'bn'
          ? 'আনলিমিটেড পেজ, কাস্টম ব্যাকএন্ড/CMS, অ্যাডভান্সড SEO, UI/UX ডিজাইন, ৩ রাউন্ড রিভিশন, ১৫–২৫ দিনে ডেলিভারি ও ৩০ দিনের সাপোর্ট।'
          : 'Unlimited pages, responsive design, custom backend/CMS integration, advanced SEO, UI/UX design, 3 rounds of revisions, 15-25 days delivery, 30 days support.',
      price: '35000',
      priceCurrency: 'BDT',
      url: `${SITE_URL}/contact?package=premium`,
      seller: { '@id': ORGANIZATION_ID },
    },
    {
      '@type': 'Offer',
      name: locale === 'bn' ? 'Stack Dev পোর্টফোলিও ওয়েবসাইট' : 'Stack Dev Portfolio Website',
      description:
        locale === 'bn'
          ? 'প্রফেশনাল, ডেভেলপার, শিক্ষার্থী ও ক্রিয়েটিভদের জন্য কাস্টম পোর্টফোলিও ওয়েবসাইট—প্রায় ২,০০০ টাকা থেকে শুরু।'
          : 'Custom, responsive, SEO-optimized personal portfolio site with Project showcase, About, and Contact sections starting around 2,000 BDT.',
      price: '2000',
      priceCurrency: 'BDT',
      url: `${SITE_URL}/contact?package=portfolio`,
      seller: { '@id': ORGANIZATION_ID },
    },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: locale === 'bn' ? 'Stack Dev ওয়েব ডেভেলপমেন্ট প্যাকেজসমূহ' : 'Stack Dev Packages',
    url: `${SITE_URL}/pricing`,
    itemListElement: offers,
  };
}

export function buildProjectSchema(project: ProjectItem, locale: Locale) {
  const url = `${SITE_URL}/work/${project.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: pickLocalized(project.title, locale),
    applicationCategory: 'WebApplication',
    operatingSystem: 'Web',
    description: pickLocalized(project.shortDescription, locale),
    url,
    author: {
      '@id': ORGANIZATION_ID,
    },
    keywords: project.techStack.join(', '),
  };
}
