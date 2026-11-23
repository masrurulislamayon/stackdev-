import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { bn } from './bn';
import { en, type TranslationDictionary, type TranslationKey } from './en';

export type Locale = 'en' | 'bn';

const STORAGE_KEY = 'stackdev-locale';

const dictionaries: Record<Locale, TranslationDictionary> = {
  en,
  bn,
};

function isValidLocale(value: string | null): value is Locale {
  return value === 'en' || value === 'bn';
}

function readLocaleFromQuery(): Locale | null {
  if (typeof window === 'undefined') {
    return null;
  }
  try {
    const params = new URLSearchParams(window.location.search);
    const param = params.get('lang');
    return isValidLocale(param) ? param : null;
  } catch {
    return null;
  }
}

function readStoredLocale(): Locale | null {
  if (typeof window === 'undefined') {
    return null;
  }
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return isValidLocale(value) ? value : null;
  } catch {
    return null;
  }
}

function writeStoredLocale(locale: Locale): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Ignore storage errors in restricted contexts
  }
}

function detectNavigatorLocale(): Locale {
  if (typeof navigator === 'undefined') {
    return 'en';
  }
  const candidates = Array.isArray(navigator.languages) && navigator.languages.length > 0
    ? navigator.languages
    : [navigator.language];

  for (const lang of candidates) {
    if (typeof lang === 'string' && lang.toLowerCase().startsWith('bn')) {
      return 'bn';
    }
  }
  return 'en';
}

function resolveInitialLocale(): Locale {
  return readLocaleFromQuery() ?? readStoredLocale() ?? detectNavigatorLocale();
}

function syncQueryParamIfPresent(locale: Locale): void {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    const url = new URL(window.location.href);
    if (url.searchParams.has('lang')) {
      url.searchParams.set('lang', locale);
      window.history.replaceState(null, '', url.toString());
    }
  } catch {
    // Ignore history errors
  }
}

function resolveTranslation(dictionary: TranslationDictionary, key: TranslationKey): string {
  const parts = key.split('.');
  let current: unknown = dictionary;

  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = (current as Record<string, unknown>)[part];
    } else {
      return key;
    }
  }

  return typeof current === 'string' ? current : key;
}

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => resolveInitialLocale());

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const handlePopState = () => {
      const queryLocale = readLocaleFromQuery();
      if (queryLocale && queryLocale !== locale) {
        setLocaleState(queryLocale);
        writeStoredLocale(queryLocale);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [locale]);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    writeStoredLocale(nextLocale);
    syncQueryParamIfPresent(nextLocale);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'en' ? 'bn' : 'en');
  }, [locale, setLocale]);

  const t = useCallback(
    (key: TranslationKey): string => resolveTranslation(dictionaries[locale], key),
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function useTranslation() {
  const { locale, setLocale, toggleLocale, t } = useLanguage();
  return { locale, setLocale, toggleLocale, t };
}
