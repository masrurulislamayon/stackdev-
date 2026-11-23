export type AnalyticsEventName =
  | 'click_whatsapp'
  | 'click_call'
  | 'click_messenger'
  | 'submit_contact_form'
  | 'view_pricing'
  | 'click_client_login'
  | 'click_package'
  | 'language_change';

export type AnalyticsEventParams = Record<string, string | number | boolean | undefined>;

export type ConsentChoice = 'accepted' | 'declined';

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

const CONSENT_STORAGE_KEY = 'stackdev-cookie-consent';
const UTM_STORAGE_KEY = 'stackdev-utm-params';
const UTM_KEYS: ReadonlyArray<keyof UtmParams> = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: ((...args: unknown[]) => void) & {
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[];
      loaded?: boolean;
      version?: string;
      push?: (...args: unknown[]) => void;
    };
    _fbq?: Window['fbq'];
  }
}

let gaInitialized = false;
let metaPixelInitialized = false;

export function getGaId(): string {
  return import.meta.env.VITE_GA_ID?.trim() ?? '';
}

export function getMetaPixelId(): string {
  return import.meta.env.VITE_META_PIXEL_ID?.trim() ?? '';
}

function hasHeadGoogleTag(): boolean {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return false;
  }
  return Boolean(
    typeof window.gtag === 'function' &&
      document.querySelector('script[src*="googletagmanager.com/gtm.js?id="]')
  );
}

function hasHeadMetaPixel(): boolean {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return false;
  }
  return Boolean(
    typeof window.fbq === 'function' &&
      document.querySelector('script[src*="connect.facebook.net/en_US/fbevents.js"]')
  );
}

export function hasAnalyticsConfig(): boolean {
  return Boolean(getGaId() || getMetaPixelId() || hasHeadGoogleTag() || hasHeadMetaPixel());
}

export function getConsentChoice(): ConsentChoice | null {
  if (typeof window === 'undefined') {
    return null;
  }
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (value === 'accepted' || value === 'declined') {
      return value;
    }
    return null;
  } catch {
    return null;
  }
}

export function setConsentChoice(choice: ConsentChoice): void {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // Ignore storage failures in restricted contexts
  }

  try {
    if (typeof window.gtag === 'function') {
      const state = choice === 'accepted' ? 'granted' : 'denied';
      window.gtag('consent', 'update', {
        analytics_storage: state,
        ad_storage: state,
        ad_user_data: state,
        ad_personalization: state,
      });
    }
    if (typeof window.fbq === 'function') {
      window.fbq('consent', choice === 'accepted' ? 'grant' : 'revoke');
      if (choice === 'accepted' && hasHeadMetaPixel()) {
        window.fbq('track', 'PageView');
      }
    }
  } catch {
    // Ignore consent update errors
  }

  if (choice === 'accepted') {
    initAnalytics();
  }
}

function loadGaScript(gaId: string): void {
  if (gaInitialized || typeof document === 'undefined' || !gaId) {
    return;
  }
  gaInitialized = true;

  try {
    window.dataLayer = window.dataLayer || [];
    if (!window.gtag) {
      window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer?.push(args);
      };
    }

    window.gtag('js', new Date());
    window.gtag('config', gaId, { anonymize_ip: true });

    const existing = document.querySelector(`script[data-stackdev-ga="${gaId}"]`);
    if (!existing) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
      script.setAttribute('data-stackdev-ga', gaId);
      document.head.appendChild(script);
    }
  } catch {
    // Ignore blocked script injection
  }
}

function loadMetaPixelScript(pixelId: string): void {
  if (metaPixelInitialized || typeof document === 'undefined' || !pixelId) {
    return;
  }
  if (pixelId === '1438008847908745' && hasHeadMetaPixel()) {
    metaPixelInitialized = true;
    return;
  }
  metaPixelInitialized = true;

  try {
    if (!window.fbq) {
      const fbqFn = function fbq(...args: unknown[]) {
        if (fbqFn.callMethod) {
          fbqFn.callMethod(...args);
        } else {
          fbqFn.queue?.push(args);
        }
      } as NonNullable<Window['fbq']>;

      fbqFn.push = fbqFn;
      fbqFn.loaded = true;
      fbqFn.version = '2.0';
      fbqFn.queue = [];
      window.fbq = fbqFn;
      if (!window._fbq) {
        window._fbq = fbqFn;
      }
    }

    window.fbq('init', pixelId);
    window.fbq('track', 'PageView');

    const existing = document.querySelector(`script[data-stackdev-pixel="${pixelId}"]`);
    if (!existing) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      script.setAttribute('data-stackdev-pixel', pixelId);
      document.head.appendChild(script);
    }
  } catch {
    // Ignore blocked script injection
  }
}

/**
 * Loads configured analytics providers only when the user has explicitly accepted consent.
 * Safely does nothing if VITE_GA_ID and VITE_META_PIXEL_ID are not set.
 */
export function initAnalytics(): void {
  if (typeof window === 'undefined' || getConsentChoice() !== 'accepted') {
    return;
  }

  const gaId = getGaId();
  if (gaId) {
    loadGaScript(gaId);
  }

  const pixelId = getMetaPixelId();
  if (pixelId) {
    loadMetaPixelScript(pixelId);
  }
}

function sanitizeParams(params?: AnalyticsEventParams): Record<string, string | number | boolean> {
  if (!params) {
    return {};
  }
  const clean: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) {
      clean[key] = value;
    }
  }
  return clean;
}

/**
 * Safe analytics event wrapper. Does nothing unless consent is accepted
 * and at least one analytics ID (VITE_GA_ID or VITE_META_PIXEL_ID) is configured.
 */
export function track(
  eventName: AnalyticsEventName | (string & {}),
  params?: AnalyticsEventParams
): void {
  if (typeof window === 'undefined' || getConsentChoice() !== 'accepted') {
    return;
  }

  const gaId = getGaId();
  const pixelId = getMetaPixelId();
  const hasGoogleTag = hasHeadGoogleTag();
  const hasMetaTag = hasHeadMetaPixel();
  if (!gaId && !pixelId && !hasGoogleTag && !hasMetaTag) {
    return;
  }

  initAnalytics();
  const cleanParams = sanitizeParams(params);

  try {
    if ((gaId || hasGoogleTag) && typeof window.gtag === 'function') {
      window.gtag('event', eventName, cleanParams);
    }
    if ((pixelId || hasMetaTag) && typeof window.fbq === 'function') {
      window.fbq('trackCustom', eventName, cleanParams);
    }
  } catch {
    // Never break UI interactions due to analytics blockers
  }
}

export function trackPageView(path: string): void {
  if (typeof window === 'undefined' || getConsentChoice() !== 'accepted') {
    return;
  }

  const gaId = getGaId();
  const pixelId = getMetaPixelId();
  const hasGoogleTag = hasHeadGoogleTag();
  const hasMetaTag = hasHeadMetaPixel();
  if (!gaId && !pixelId && !hasGoogleTag && !hasMetaTag) {
    return;
  }

  initAnalytics();

  try {
    if ((gaId || hasGoogleTag) && typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', { page_path: path });
    }
    if ((pixelId || hasMetaTag) && typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  } catch {
    // Ignore analytics errors
  }
}

export function captureUtmParams(search?: string): UtmParams {
  if (typeof window === 'undefined') {
    return {};
  }

  const query = search ?? window.location.search;
  const incoming: UtmParams = {};

  try {
    const searchParams = new URLSearchParams(query);
    for (const key of UTM_KEYS) {
      const value = searchParams.get(key)?.trim();
      if (value) {
        incoming[key] = value;
      }
    }
  } catch {
    return {};
  }

  if (Object.keys(incoming).length === 0) {
    return getStoredUtmParams();
  }

  try {
    const existing = getStoredUtmParams();
    const merged: UtmParams = { ...existing, ...incoming };
    window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(merged));
    return merged;
  } catch {
    return incoming;
  }
}

export function getStoredUtmParams(): UtmParams {
  if (typeof window === 'undefined') {
    return {};
  }
  try {
    const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
    if (!raw) {
      return {};
    }
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    const result: UtmParams = {};
    for (const key of UTM_KEYS) {
      const val = parsed[key];
      if (typeof val === 'string' && val.trim()) {
        result[key] = val.trim();
      }
    }
    return result;
  } catch {
    return {};
  }
}
