import { Helmet } from 'react-helmet-async';
import { DEFAULT_OG_IMAGE, SITE_URL } from '@/src/data/seo';
import { useTranslation } from '@/src/i18n';

export interface SeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

function normalizePath(path?: string): string {
  if (!path || path === '/') {
    return '/';
  }
  const withLeadingSlash = path.startsWith('/') ? path : `/${path}`;
  return withLeadingSlash.replace(/\/+$/, '') || '/';
}

function resolveImageUrl(image?: string): string {
  const target = image?.trim() || DEFAULT_OG_IMAGE;
  if (target.startsWith('http://') || target.startsWith('https://')) {
    return target;
  }
  const normalized = target.startsWith('/') ? target : `/${target}`;
  return `${SITE_URL}${normalized}`;
}

export function Seo({
  title,
  description,
  path = '/',
  image,
  type = 'website',
  noindex = false,
  publishedTime,
  modifiedTime,
  jsonLd,
}: SeoProps) {
  const { locale } = useTranslation();

  const normalizedPath = normalizePath(path);
  const canonicalUrl = `${SITE_URL}${normalizedPath}`;
  const enAlternateUrl = `${canonicalUrl}?lang=en`;
  const bnAlternateUrl = `${canonicalUrl}?lang=bn`;
  const resolvedImage = resolveImageUrl(image);
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet htmlAttributes={{ lang: locale }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />

      {!noindex && <link rel="canonical" href={canonicalUrl} />}
      {!noindex && <link rel="alternate" hrefLang="en" href={enAlternateUrl} />}
      {!noindex && <link rel="alternate" hrefLang="bn" href={bnAlternateUrl} />}
      {!noindex && <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:site_name" content="Stack Dev" />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={locale === 'bn' ? 'bn_BD' : 'en_US'} />
      <meta property="og:locale:alternate" content={locale === 'bn' ? 'en_US' : 'bn_BD'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Stack Dev — Fast, modern websites and Flutter apps in Bangladesh"
      />
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && (modifiedTime || publishedTime) && (
        <meta property="article:modified_time" content={modifiedTime || publishedTime} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedImage} />

      {/* Page-specific JSON-LD Structured Data */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
