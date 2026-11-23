import { useMemo, useState } from 'react';
import { ArrowRight, BookOpen, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { buildBreadcrumbSchema, Seo } from '@/src/components/seo';
import { ConsultationBanner } from '@/src/components/sections/ConsultationBanner';
import { Button, buttonStyles, Card, Container, SectionHeading } from '@/src/components/ui';
import { BLOG_POSTS, formatPostDate, getAllTags } from '@/src/data/posts';
import { STATIC_SEO } from '@/src/data/seo';
import { pickLocalized } from '@/src/data/services';
import { useTranslation } from '@/src/i18n';
import { cn } from '@/src/lib/cn';
import { PageGlow } from '@/src/components/motion';

export function BlogPage() {
  const { locale, t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const meta = STATIC_SEO.blog;
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: t('nav.home'), path: '/' },
    { name: t('nav.blog'), path: '/blog' },
  ]);

  const allTags = useMemo(() => getAllTags(), []);

  const isFiltered = selectedTag !== 'all' || searchQuery.trim().length > 0;

  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return BLOG_POSTS.filter((post) => {
      const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
      if (!matchesTag) return false;
      if (!q) return true;

      const title = pickLocalized(post.title, locale).toLowerCase();
      const excerpt = pickLocalized(post.excerpt, locale).toLowerCase();
      const tagsMatch = post.tags.some((tag) => tag.toLowerCase().includes(q));
      return title.includes(q) || excerpt.includes(q) || tagsMatch;
    });
  }, [locale, searchQuery, selectedTag]);

  const featuredPost = !isFiltered
    ? filteredPosts.find((p) => p.featured) ?? filteredPosts[0]
    : undefined;

  const gridPosts = featuredPost
    ? filteredPosts.filter((p) => p.slug !== featuredPost.slug)
    : filteredPosts;

  return (
    <>
      <Seo
        title={pickLocalized(meta.title, locale)}
        description={pickLocalized(meta.description, locale)}
        path="/blog"
        jsonLd={breadcrumbSchema}
      />
      <section className="pt-16 pb-10 sm:pt-24 sm:pb-12 relative overflow-hidden">
        <PageGlow />
        <Container>
          <SectionHeading
            as="h1"
            eyebrow={t('blogPage.eyebrow')}
            title={t('blogPage.title')}
            description={t('blogPage.description')}
          />
        </Container>
      </section>

      <section className="pb-[72px] lg:pb-[128px]">
        <Container className="space-y-10 view-reveal">
          {/* Search and Tag Filter Controls */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div
              role="group"
              aria-label="Filter articles by tag"
              className="flex flex-wrap items-center gap-1.5 rounded-full border border-border bg-bg-subtle/70 p-1"
            >
              <button
                type="button"
                onClick={() => setSelectedTag('all')}
                aria-pressed={selectedTag === 'all'}
                className={cn(
                  'min-h-[36px] rounded-full px-3.5 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 cursor-pointer transition-all duration-150',
                  selectedTag === 'all'
                    ? 'bg-bg-elevated text-fg shadow-[var(--shadow-sm)]'
                    : 'text-fg-muted hover:text-fg'
                )}
              >
                {t('blogPage.allTags')}
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(tag)}
                  aria-pressed={selectedTag === tag}
                  className={cn(
                    'min-h-[36px] rounded-full px-3.5 py-1.5 font-mono text-xs font-medium whitespace-nowrap shrink-0 cursor-pointer transition-all duration-150',
                    selectedTag === tag
                      ? 'bg-bg-elevated text-fg shadow-[var(--shadow-sm)]'
                      : 'text-fg-muted hover:text-fg'
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:max-w-xs">
              <label htmlFor="blog-search" className="sr-only">
                {t('blogPage.searchLabel')}
              </label>
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-fg-muted"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <input
                id="blog-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('blogPage.searchPlaceholder')}
                className="w-full min-h-[48px] rounded-[12px] border border-border-strong bg-bg-elevated pl-11 pr-4 py-2 text-sm text-fg placeholder:text-fg-faint transition-colors duration-150 hover:border-fg-faint focus-visible:border-accent"
              />
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <Card
              interactive
              padding="lg"
              className="gradient-border grid gap-6 lg:grid-cols-12 lg:items-center"
            >
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5 text-xs text-fg-muted">
                  <span className="type-eyebrow text-accent-text">
                    {t('blogPage.featuredLabel')}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">{formatPostDate(featuredPost.date, locale)}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono">{pickLocalized(featuredPost.readingTime, locale)}</span>
                </div>

                <h2 className="type-h2 text-fg">
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="hover:text-accent-text transition-colors duration-150"
                  >
                    {pickLocalized(featuredPost.title, locale)}
                  </Link>
                </h2>

                <p className="type-body text-fg-muted max-w-[64ch]">
                  {pickLocalized(featuredPost.excerpt, locale)}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {featuredPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-bg-subtle px-2.5 py-0.5 font-mono text-xs text-fg-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  aria-label={`${t('blogPage.readArticle')}: ${pickLocalized(featuredPost.title, locale)}`}
                  className={buttonStyles({ variant: 'primary', size: 'md' })}
                >
                  <BookOpen className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  <span>{t('blogPage.readArticle')}</span>
                  <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </Link>
              </div>
            </Card>
          )}

          {/* Post Grid */}
          {gridPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {gridPosts.map((post) => (
                <Card
                  key={post.slug}
                  interactive
                  className="flex flex-col justify-between gap-6"
                >
                  <div className="space-y-3.5">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-fg-muted">
                      <span>{formatPostDate(post.date, locale)}</span>
                      <span aria-hidden="true">·</span>
                      <span>{pickLocalized(post.readingTime, locale)}</span>
                    </div>

                    <h2 className="type-h3 text-fg">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="hover:text-accent-text transition-colors duration-150"
                      >
                        {pickLocalized(post.title, locale)}
                      </Link>
                    </h2>

                    <p className="type-body-sm text-fg-muted">
                      {pickLocalized(post.excerpt, locale)}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-bg-subtle px-2.5 py-0.5 font-mono text-[11px] text-fg-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      aria-label={`${t('blogPage.readArticle')}: ${pickLocalized(post.title, locale)}`}
                      className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text hover:text-fg transition-colors duration-150"
                    >
                      <span>{t('blogPage.readArticle')}</span>
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:translate-x-1"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            !featuredPost && (
              <Card padding="lg" className="text-center space-y-4">
                <h2 className="type-h3 text-fg">{t('blogPage.emptyTitle')}</h2>
                <p className="type-body-sm text-fg-muted">{t('blogPage.emptyDescription')}</p>
                <div>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setSelectedTag('all');
                      setSearchQuery('');
                    }}
                  >
                    {t('blogPage.resetFilters')}
                  </Button>
                </div>
              </Card>
            )
          )}
        </Container>
      </section>

      <ConsultationBanner />
    </>
  );
}
