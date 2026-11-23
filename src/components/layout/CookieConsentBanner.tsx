import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/src/components/ui';
import { useTranslation } from '@/src/i18n';
import {
  getConsentChoice,
  initAnalytics,
  setConsentChoice,
  type ConsentChoice,
} from '@/src/lib/analytics';

export function CookieConsentBanner() {
  const { t } = useTranslation();
  const [choice, setChoice] = useState<ConsentChoice | null | 'pending'>('pending');

  useEffect(() => {
    const saved = getConsentChoice();
    setChoice(saved);
    if (saved === 'accepted') {
      initAnalytics();
    }
  }, []);

  if (choice !== null) {
    return null;
  }

  const handleAccept = () => {
    setConsentChoice('accepted');
    setChoice('accepted');
  };

  const handleDecline = () => {
    setConsentChoice('declined');
    setChoice('declined');
  };

  return (
    <aside
      role="region"
      aria-label={t('cookieConsent.ariaLabel')}
      className="fixed bottom-18 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[380px] z-40 rounded-[20px] glass p-5 shadow-[var(--shadow-lg)]"
    >
      <p className="type-body-sm text-fg">
        {t('cookieConsent.message')}{' '}
        <Link
          to="/privacy-policy"
          className="font-medium text-accent-text underline underline-offset-4 hover:opacity-90"
        >
          {t('cookieConsent.privacyLink')}
        </Link>
        .
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2.5">
        <Button type="button" variant="primary" size="sm" onClick={handleAccept}>
          {t('cookieConsent.acceptBtn')}
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={handleDecline}>
          {t('cookieConsent.declineBtn')}
        </Button>
      </div>
    </aside>
  );
}
