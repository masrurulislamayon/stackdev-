import { useState } from 'react';
import { ArrowRight, Check, ChevronRight, Copy, Share2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  Seo,
} from '@/src/components/seo';
import { buttonStyles, Card, Container } from '@/src/components/ui';
import { BLOG_POSTS, formatPostDate, getPostBySlug, type ContentBlock } from '@/src/data/posts';
import { getBlogPostSeo, SITE_URL } from '@/src/data/seo';
import { pickLocalized } from '@/src/data/services';
import { useTranslation } from '@/src/i18n';
import { NotFoundPage } from './NotFoundPage';

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'heading':
      if (block.level === 2) {
        return (
          <h2
            key={`${block.id}-${index}`}
            id={block.id}
            className="type-h2 text-fg pt-8 pb-1 scroll-mt-28"
          >
            {block.text}
          </h2>
        );
      }
      return (
        <h3
          key={`${block.id}-${index}`}
          id={block.id}
          className="type-h3 text-fg pt-5 scroll-mt-28"
        >
          {block.text}
        </h3>
      );

    case 'paragraph':
      return (
        <p key={index} className="type-body text-fg/90 max-w-[64ch]">
          {block.text}
        </p>
      );

    case 'list': {
      const ListTag = block.ordered ? 'ol' : 'ul';
      return (
        <ListTag
          key={index}
          className={
            block.ordered
              ? 'list-decimal pl-5 space-y-2.5 type-body text-fg/90 max-w-[64ch]'
              : 'list-disc pl-5 space-y-2.5 type-body text-fg/90 max-w-[64ch]'
          }
        >
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ListTag>
      );
    }

    case 'callout':
      return (
        <div
          key={index}
          className="rounded-r-[16px] border-l-2 border-accent bg-accent-soft/40 px-5 py-4 space-y-1.5 my-3 max-w-[64ch]"
        >
          {block.title && (
            <p className="text-sm font-semibold text-fg">{block.title}</p>
          )}
          <p className="type-body-sm text-fg-muted">{block.text}</p>
        </div>
      );
  }
}

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { locale, t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const post = getPostBySlug(slug);

  if (!post) {
    return <NotFoundPage />;
  }

  const title = pickLocalized(post.title, locale);
  const excerpt = pickLocalized(post.excerpt, locale);
  const seoMeta = getBlogPostSeo(post, locale);
  const blocks = post.content[locale];
  const headings = blocks.filter(
    (block): block is Extract<ContentBlock, { type: 'heading' }> => block.type === 'heading'
  );
  const relatedPosts = BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(0, 2);

  const shareUrl =
    typeof window !== 'undefined' ? window.location.href : `${SITE_URL}/blog/${post.slug}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const schemas = [
    buildBreadcrumbSchema([
      { name: t('nav.home'), path: '/' },
      { name: t('nav.blog'), path: '/blog' },
      { name: title, path: `/blog/${post.slug}` },
    ]),
    buildArticleSchema(post, locale),
  ];

  return (
    <>
      <Seo
        title={seoMeta.title}
        description={seoMeta.description}
        path={`/blog/${post.slug}`}
        type="article"
        publishedTime={post.date}
        jsonLd={schemas}
      />
      <article className="pt-16 pb-20 sm:pt-24 sm:pb-28">
        <Container>
          <div className="mx-auto max-w-[1000px]">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mx-auto max-w-[720px] lg:max-w-none mb-8 flex items-center gap-2 text-sm text-fg-muted"
            >
              <Link to="/blog" className="hover:text-fg transition-colors duration-150">
                {t('blogDetail.breadcrumbBlog')}
              </Link>
              <ChevronRight className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
              <span className="text-fg font-medium truncate">{title}</span>
            </nav>

            {/* Reading Header (max-w 720px aligned cleanly with article body column) */}
            <div className="mx-auto max-w-[720px] lg:max-w-none lg:grid lg:grid-cols-[228px_minmax(0,720px)] lg:gap-12">
              <header className="lg:col-start-2 space-y-5 pb-10 border-b border-border">
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-fg-muted">
                  <span>{formatPostDate(post.date, locale)}</span>
                  <span aria-hidden="true">·</span>
                  <span>{pickLocalized(post.readingTime, locale)}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.tags.join(' · ')}</span>
                </div>

                <h1 className="type-h1 text-fg">{title}</h1>

                <p className="type-body-lg text-fg-muted max-w-[64ch]">{excerpt}</p>
              </header>
            </div>

            {/* TOC + Reading Body */}
            <div className="pt-10 grid gap-12 lg:grid-cols-[228px_minmax(0,720px)] lg:gap-12 items-start">
              {/* Desktop Sticky Table of Contents */}
              {headings.length > 0 && (
                <aside className="hidden lg:block sticky top-28">
                  <nav aria-label={t('blogDetail.tocTitle')} className="space-y-3.5">
                    <p className="type-eyebrow text-fg-faint">
                      {t('blogDetail.tocTitle')}
                    </p>
                    <ul className="space-y-2.5 border-l border-border pl-4 text-xs">
                      {headings.map((heading) => (
                        <li key={heading.id} className={heading.level === 3 ? 'pl-2.5' : undefined}>
                          <a
                            href={`#${heading.id}`}
                            className="block text-fg-muted hover:text-accent-text transition-colors duration-150 leading-relaxed"
                          >
                            {heading.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </aside>
              )}

              {/* Main Article Column (strictly max-w 720px) */}
              <div className="mx-auto w-full max-w-[720px] min-w-0 space-y-6">
                {/* Mobile/Tablet Table of Contents */}
                {headings.length > 0 && (
                  <Card padding="sm" className="lg:hidden space-y-3">
                    <p className="type-eyebrow text-fg-faint">
                      {t('blogDetail.tocTitle')}
                    </p>
                    <ul className="space-y-2 text-sm">
                      {headings.map((heading) => (
                        <li key={heading.id} className={heading.level === 3 ? 'pl-3' : undefined}>
                          <a
                            href={`#${heading.id}`}
                            className="text-fg-muted hover:text-accent-text transition-colors duration-150"
                          >
                            {heading.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}

                {/* Content Blocks */}
                <div className="space-y-5">
                  {blocks.map((block, index) => renderBlock(block, index))}
                </div>

                {/* Share Buttons */}
                <div className="mt-12 pt-7 border-t border-border flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2 text-sm font-medium text-fg">
                    <Share2 className="h-4 w-4 text-accent-text" strokeWidth={1.5} aria-hidden="true" />
                    <span>{t('blogDetail.shareTitle')}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className={buttonStyles({ variant: 'secondary', size: 'sm' })}
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-success" strokeWidth={1.75} aria-hidden="true" />
                          <span>{t('blogDetail.copied')}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
                          <span>{t('blogDetail.copyLink')}</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonStyles({ variant: 'secondary', size: 'sm' })}
                    >
                      WhatsApp
                    </a>

                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonStyles({ variant: 'secondary', size: 'sm' })}
                    >
                      Facebook
                    </a>

                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonStyles({ variant: 'secondary', size: 'sm' })}
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>

                {/* End-of-post CTA Box */}
                <Card padding="lg" className="mt-8 space-y-4 gradient-border">
                  <p className="type-eyebrow text-accent-text">
                    {t('blogDetail.ctaEyebrow')}
                  </p>
                  <h2 className="type-h2 text-fg">{t('blogDetail.ctaTitle')}</h2>
                  <p className="type-body-sm text-fg-muted max-w-[64ch]">{t('blogDetail.ctaDescription')}</p>
                  <div className="pt-1">
                    <Link
                      to="/contact"
                      className={buttonStyles({ variant: 'primary', size: 'md' })}
                    >
                      {t('blogDetail.ctaButton')}
                      <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                    </Link>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-border bg-bg-subtle/40 py-[72px] lg:py-24">
          <Container>
            <div className="mx-auto max-w-[1000px] space-y-8">
              <h2 className="type-h2 text-fg">{t('blogDetail.relatedTitle')}</h2>

              <div className="grid gap-6 md:grid-cols-2">
                {relatedPosts.map((related) => (
                  <Card
                    key={related.slug}
                    interactive
                    className="flex flex-col justify-between gap-4"
                  >
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-fg-muted">
                        <span>{formatPostDate(related.date, locale)}</span>
                        <span aria-hidden="true">·</span>
                        <span>{pickLocalized(related.readingTime, locale)}</span>
                      </div>
                      <h3 className="type-h3 text-fg">
                        <Link
                          to={`/blog/${related.slug}`}
                          className="hover:text-accent-text transition-colors duration-150"
                        >
                          {pickLocalized(related.title, locale)}
                        </Link>
                      </h3>
                      <p className="type-body-sm text-fg-muted">
                        {pickLocalized(related.excerpt, locale)}
                      </p>
                    </div>
                    <Link
                      to={`/blog/${related.slug}`}
                      className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:text-fg transition-colors duration-150"
                    >
                      <span>{t('blogPage.readArticle')}</span>
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:translate-x-1"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
