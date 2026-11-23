import { useEffect, useRef, useState, type FormEvent } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  MapPin,
  MessageCircle,
  MessageSquare,
  Phone,
  Send,
} from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { buildBreadcrumbSchema, Seo } from '@/src/components/seo';
import {
  Badge,
  Button,
  buttonStyles,
  Card,
  Container,
  Input,
  SectionHeading,
  Select,
  Textarea,
} from '@/src/components/ui';
import { BRAND } from '@/src/data/brand';
import { STATIC_SEO } from '@/src/data/seo';
import { pickLocalized } from '@/src/data/services';
import { useTranslation } from '@/src/i18n';
import { getStoredUtmParams, track } from '@/src/lib/analytics';
import { buildWhatsAppLeadUrl, resolveFormspreeFormId } from '@/src/lib/submitLead';
import { PageGlow } from '@/src/components/motion';

interface ContactFormValues {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
  _gotcha: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  [key: string]: string | undefined;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  projectType?: string;
  budgetRange?: string;
  message?: string;
}

const PACKAGE_DEFAULTS: Record<string, { projectType: string; budgetRange: string }> = {
  basic: { projectType: 'Website', budgetRange: '15,000-35,000 BDT' },
  premium: { projectType: 'Website', budgetRange: '35,000+ BDT' },
  portfolio: { projectType: 'Portfolio website', budgetRange: 'Under 15,000 BDT' },
  custom: { projectType: 'Other', budgetRange: 'Not sure' },
};

export function ContactPage() {
  const { locale, t } = useTranslation();
  const [searchParams] = useSearchParams();
  const meta = STATIC_SEO.contact;
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: t('nav.home'), path: '/' },
    { name: t('nav.contact'), path: '/contact' },
  ]);
  const [formspreeState, handleFormspreeSubmit, resetFormspree] =
    useForm<ContactFormValues>(resolveFormspreeFormId());

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('');
  const [budgetRange, setBudgetRange] = useState('');
  const [message, setMessage] = useState('');
  const [gotcha, setGotcha] = useState('');

  const formRef = useRef<HTMLFormElement>(null);
  const lastSubmittedMetaRef = useRef<{ project_type?: string; budget?: string }>({});
  const trackedSuccessRef = useRef(false);
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    const pkg = searchParams.get('package');
    if (pkg && PACKAGE_DEFAULTS[pkg]) {
      setProjectType((prev) => prev || PACKAGE_DEFAULTS[pkg].projectType);
      setBudgetRange((prev) => prev || PACKAGE_DEFAULTS[pkg].budgetRange);
    }
  }, [searchParams]);

  useEffect(() => {
    if (formspreeState.succeeded) {
      if (!trackedSuccessRef.current) {
        trackedSuccessRef.current = true;
        track('submit_contact_form', {
          project_type: lastSubmittedMetaRef.current.project_type,
          budget: lastSubmittedMetaRef.current.budget,
        });
      }
      setName('');
      setPhone('');
      setEmail('');
      setProjectType('');
      setBudgetRange('');
      setMessage('');
      setGotcha('');
      setErrors({});
    } else {
      trackedSuccessRef.current = false;
    }
  }, [formspreeState.succeeded]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (name.trim().length < 2) {
      nextErrors.name = t('contactPage.validation.nameRequired');
    }

    const digits = phone.replace(/\D/g, '');
    if (digits.length < 7) {
      nextErrors.phone = t('contactPage.validation.phoneRequired');
    }

    if (email.trim().length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = t('contactPage.validation.emailInvalid');
    }

    if (!projectType) {
      nextErrors.projectType = t('contactPage.validation.projectTypeRequired');
    }

    if (!budgetRange) {
      nextErrors.budgetRange = t('contactPage.validation.budgetRequired');
    }

    if (message.trim().length < 10) {
      nextErrors.message = t('contactPage.validation.messageRequired');
    }

    return nextErrors;
  };

  const storedUtms = getStoredUtmParams();

  const currentPayload: ContactFormValues = {
    name: name.trim(),
    phone: phone.trim(),
    email: email.trim(),
    projectType,
    budget: budgetRange,
    message: message.trim(),
    _gotcha: gotcha,
    ...storedUtms,
  };

  const whatsappPrefillHref = buildWhatsAppLeadUrl(currentPayload);

  const clearFieldError = (field: keyof FormErrors) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      window.requestAnimationFrame(() => {
        formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      });
      return;
    }

    lastSubmittedMetaRef.current = {
      project_type: projectType,
      budget: budgetRange,
    };

    if (formspreeState.succeeded) {
      resetFormspree();
    }

    await handleFormspreeSubmit(currentPayload);
  };

  const hasSubmissionErrors = Boolean(formspreeState.errors);

  return (
    <>
      <Seo
        title={pickLocalized(meta.title, locale)}
        description={pickLocalized(meta.description, locale)}
        path="/contact"
        jsonLd={breadcrumbSchema}
      />
      <section className="pt-16 pb-10 sm:pt-24 sm:pb-12 relative overflow-hidden">
        <PageGlow />
        <Container>
          <SectionHeading
            as="h1"
            eyebrow={t('contactPage.eyebrow')}
            title={t('contactPage.title')}
            description={t('contactPage.description')}
          />
        </Container>
      </section>

      <section className="pb-[72px] lg:pb-[128px]">
        <Container className="view-reveal">
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            {/* Left: Contact Form */}
            <Card padding="lg" className="lg:col-span-7">
              <h2 className="type-h3 text-fg mb-7">
                {t('contactPage.formTitle')}
              </h2>

              <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
                <div role="status" aria-live="polite" className="sr-only">
                  {Object.keys(errors).length > 0 ? t('contactPage.validation.summary') : ''}
                </div>
                {/* Hidden honeypot field for Formspree spam protection */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="contact-gotcha">Leave this field blank</label>
                  <input
                    id="contact-gotcha"
                    name="_gotcha"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={gotcha}
                    onChange={(e) => setGotcha(e.target.value)}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Input
                      name="name"
                      label={t('contactPage.nameLabel')}
                      placeholder={t('contactPage.namePlaceholder')}
                      required
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        clearFieldError('name');
                      }}
                      error={errors.name}
                      autoComplete="name"
                    />
                    <ValidationError
                      field="name"
                      errors={formspreeState.errors}
                      className="mt-1.5 text-xs font-medium text-danger"
                    />
                  </div>

                  <div>
                    <Input
                      name="phone"
                      label={t('contactPage.phoneLabel')}
                      placeholder={t('contactPage.phonePlaceholder')}
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        clearFieldError('phone');
                      }}
                      error={errors.phone}
                      autoComplete="tel"
                    />
                    <ValidationError
                      field="phone"
                      errors={formspreeState.errors}
                      className="mt-1.5 text-xs font-medium text-danger"
                    />
                  </div>
                </div>

                <div>
                  <Input
                    name="email"
                    label={t('contactPage.emailLabel')}
                    placeholder={t('contactPage.emailPlaceholder')}
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      clearFieldError('email');
                    }}
                    error={errors.email}
                    autoComplete="email"
                  />
                  <ValidationError
                    field="email"
                    errors={formspreeState.errors}
                    className="mt-1.5 text-xs font-medium text-danger"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Select
                      name="projectType"
                      label={t('contactPage.projectTypeLabel')}
                      placeholder={t('contactPage.projectTypePlaceholder')}
                      required
                      value={projectType}
                      onChange={(e) => {
                        setProjectType(e.target.value);
                        clearFieldError('projectType');
                      }}
                      error={errors.projectType}
                      options={[
                        { value: 'Website', label: t('contactPage.projectTypes.website') },
                        { value: 'Flutter app', label: t('contactPage.projectTypes.flutter') },
                        { value: 'E-commerce', label: t('contactPage.projectTypes.ecommerce') },
                        { value: 'UI/UX design', label: t('contactPage.projectTypes.uiux') },
                        { value: 'Portfolio website', label: t('contactPage.projectTypes.portfolio') },
                        { value: 'Other', label: t('contactPage.projectTypes.other') },
                      ]}
                    />
                    <ValidationError
                      field="projectType"
                      errors={formspreeState.errors}
                      className="mt-1.5 text-xs font-medium text-danger"
                    />
                  </div>

                  <div>
                    <Select
                      name="budget"
                      label={t('contactPage.budgetLabel')}
                      placeholder={t('contactPage.budgetPlaceholder')}
                      required
                      value={budgetRange}
                      onChange={(e) => {
                        setBudgetRange(e.target.value);
                        clearFieldError('budgetRange');
                      }}
                      error={errors.budgetRange}
                      options={[
                        { value: 'Under 15,000 BDT', label: t('contactPage.budgetRanges.under15k') },
                        { value: '15,000-35,000 BDT', label: t('contactPage.budgetRanges.range15k35k') },
                        { value: '35,000+ BDT', label: t('contactPage.budgetRanges.above35k') },
                        { value: 'Not sure', label: t('contactPage.budgetRanges.notSure') },
                      ]}
                    />
                    <ValidationError
                      field="budget"
                      errors={formspreeState.errors}
                      className="mt-1.5 text-xs font-medium text-danger"
                    />
                  </div>
                </div>

                <div>
                  <Textarea
                    name="message"
                    label={t('contactPage.messageLabel')}
                    placeholder={t('contactPage.messagePlaceholder')}
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      clearFieldError('message');
                    }}
                    error={errors.message}
                  />
                  <ValidationError
                    field="message"
                    errors={formspreeState.errors}
                    className="mt-1.5 text-xs font-medium text-danger"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={formspreeState.submitting}
                  >
                    {formspreeState.submitting ? (
                      <>
                        <Loader2
                          className="h-4 w-4 animate-spin motion-reduce:animate-none"
                          aria-hidden="true"
                        />
                        <span>{t('contactPage.submittingBtn')}</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                        <span>{t('contactPage.submitBtn')}</span>
                      </>
                    )}
                  </Button>

                  <a
                    href={whatsappPrefillHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track('click_whatsapp', { location: 'contact_form' })}
                    className={buttonStyles({ variant: 'secondary', size: 'lg' })}
                  >
                    <MessageCircle className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    <span>{t('contactPage.whatsappFallbackBtn')}</span>
                  </a>
                </div>

                {formspreeState.succeeded && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="flex items-start gap-2.5 rounded-[12px] border border-success/30 bg-success-soft px-4 py-3 text-sm font-medium text-success-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" strokeWidth={1.75} aria-hidden="true" />
                    <span>{t('contactPage.successMessage')}</span>
                  </div>
                )}

                {hasSubmissionErrors && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="flex flex-col gap-3 rounded-[12px] border border-danger/30 bg-danger-soft px-4 py-3.5 text-sm text-danger-foreground"
                  >
                    <div className="flex items-start gap-2.5 font-medium">
                      <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" strokeWidth={1.75} aria-hidden="true" />
                      <div className="space-y-1">
                        <p>{t('contactPage.errorFailed')}</p>
                        <ValidationError
                          errors={formspreeState.errors}
                          className="text-xs font-normal opacity-90"
                        />
                      </div>
                    </div>
                    <div>
                      <a
                        href={whatsappPrefillHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => track('click_whatsapp', { location: 'contact_error' })}
                        className={buttonStyles({ variant: 'primary', size: 'sm' })}
                      >
                        <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                        <span>{t('contactPage.whatsappFallbackBtn')}</span>
                      </a>
                    </div>
                  </div>
                )}
              </form>
            </Card>

            {/* Right: Direct Contact Info & Lazy Map */}
            <div className="lg:col-span-5 space-y-6">
              <Card padding="lg" className="space-y-6">
                <div className="space-y-2.5">
                  <Badge variant="primary" pulseDot>
                    {t('contactPage.freeConsultNote')}
                  </Badge>
                  <h2 className="type-h3 text-fg pt-1">
                    {t('contactPage.infoTitle')}
                  </h2>
                  <p className="type-body-sm text-fg-muted">
                    {t('contactPage.availabilityNote')}
                  </p>
                </div>

                <div className="space-y-4 border-t border-border pt-6 text-sm">
                  <div className="flex items-start gap-3.5">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-accent-soft text-accent-text">
                      <Phone className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-fg">
                        {t('contactPage.phoneHeading')}
                      </p>
                      <a
                        href={BRAND.phoneHref}
                        onClick={() => track('click_call', { location: 'contact_info' })}
                        className="font-mono text-fg-muted hover:text-accent-text transition-colors duration-150 tabular-nums"
                      >
                        {BRAND.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-accent-soft text-accent-text">
                      <MessageSquare className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-fg">
                        {t('contactPage.facebookHeading')}
                      </p>
                      <p className="text-fg-muted">{t('contactPage.facebookDetail')}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-accent-soft text-accent-text">
                      <MapPin className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-fg">
                        {t('contactPage.addressHeading')}
                      </p>
                      <p className="text-fg-muted">{t('contactPage.addressDetail')}</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card padding="none" className="overflow-hidden">
                <div className="relative aspect-[16/10] w-full bg-bg-subtle">
                  <iframe
                    title={t('contactPage.mapTitle')}
                    width="600"
                    height="375"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=90.2200%2C23.8100%2C90.3050%2C23.8900&layer=mapnik&marker=23.8583%2C90.2667"
                    className="h-full w-full border-0"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 border-t border-border px-5 py-3.5 text-xs text-fg-muted">
                  <span>{t('contactPage.mapCaption')}</span>
                  <span className="font-mono font-medium text-fg">1340</span>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
