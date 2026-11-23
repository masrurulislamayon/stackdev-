import type { LocalizedText } from './services';

export interface PricingPlan {
  id: 'basic' | 'premium' | 'portfolio';
  name: LocalizedText;
  badge?: LocalizedText;
  highlighted?: boolean;
  priceMain: LocalizedText;
  priceSub: LocalizedText;
  audience: LocalizedText;
  features: LocalizedText[];
  note?: LocalizedText;
  ctaLabel: LocalizedText;
  ctaHref: string;
}

export interface ComparisonRow {
  id: string;
  feature: LocalizedText;
  basic: LocalizedText;
  premium: LocalizedText;
  portfolio: LocalizedText;
}

export interface PricingFaq {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: {
      en: 'Basic',
      bn: 'Basic',
    },
    priceMain: {
      en: '15,000 BDT',
      bn: '১৫,০০০ টাকা',
    },
    priceSub: {
      en: 'about $135',
      bn: 'প্রায় $135',
    },
    audience: {
      en: 'Best for small businesses and landing pages.',
      bn: 'ছোট ব্যবসা এবং ল্যান্ডিং পেজের জন্য সবচেয়ে উপযুক্ত।',
    },
    features: [
      { en: 'Up to 5 pages', bn: 'সর্বোচ্চ ৫টি পেজ' },
      { en: 'Responsive design', bn: 'রেসপন্সিভ ডিজাইন' },
      { en: 'Contact form integration', bn: 'কন্টাক্ট ফর্ম ইন্টিগ্রেশন' },
      { en: 'Basic SEO setup', bn: 'বেসিক SEO সেটআপ' },
      { en: '1 round of revisions', bn: '১ রাউন্ড রিভিশন' },
      { en: 'Delivery in 7–10 days', bn: '৭–১০ দিনে ডেলিভারি' },
    ],
    ctaLabel: {
      en: 'Choose Basic',
      bn: 'Basic নির্বাচন করুন',
    },
    ctaHref: '/contact?package=basic',
  },
  {
    id: 'premium',
    name: {
      en: 'Premium',
      bn: 'Premium',
    },
    badge: {
      en: 'Most Popular',
      bn: 'সবচেয়ে জনপ্রিয়',
    },
    highlighted: true,
    priceMain: {
      en: '35,000 BDT',
      bn: '৩৫,০০০ টাকা',
    },
    priceSub: {
      en: 'about $315',
      bn: 'প্রায় $315',
    },
    audience: {
      en: 'Best for growing businesses and custom web apps.',
      bn: 'বর্ধনশীল ব্যবসা এবং কাস্টম ওয়েব অ্যাপের জন্য সেরা।',
    },
    features: [
      { en: 'Unlimited pages', bn: 'আনলিমিটেড পেজ' },
      { en: 'Responsive design', bn: 'রেসপন্সিভ ডিজাইন' },
      { en: 'Custom backend / CMS integration', bn: 'কাস্টম ব্যাকএন্ড / CMS ইন্টিগ্রেশন' },
      { en: 'Advanced SEO + performance optimization', bn: 'অ্যাডভান্সড SEO + পারফরম্যান্স অপটিমাইজেশন' },
      { en: 'UI/UX design included', bn: 'UI/UX ডিজাইন অন্তর্ভুক্ত' },
      { en: '3 rounds of revisions', bn: '৩ রাউন্ড রিভিশন' },
      { en: 'Delivery in 15–25 days', bn: '১৫–২৫ দিনে ডেলিভারি' },
      { en: '30 days post-launch support', bn: '৩০ দিনের পোস্ট-লঞ্চ সাপোর্ট' },
    ],
    ctaLabel: {
      en: 'Choose Premium',
      bn: 'Premium নির্বাচন করুন',
    },
    ctaHref: '/contact?package=premium',
  },
  {
    id: 'portfolio',
    name: {
      en: 'Portfolio Website',
      bn: 'পোর্টফোলিও ওয়েবসাইট',
    },
    priceMain: {
      en: 'Starting ~2,000 BDT',
      bn: 'শুরু প্রায় ২,০০০ টাকা',
    },
    priceSub: {
      en: 'final price after requirements',
      bn: 'চাহিদা অনুযায়ী চূড়ান্ত মূল্য',
    },
    audience: {
      en: 'For professionals, developers, students, and creatives.',
      bn: 'প্রফেশনাল, ডেভেলপার, শিক্ষার্থী ও ক্রিয়েটিভদের জন্য।',
    },
    features: [
      { en: 'Custom design', bn: 'কাস্টম ডিজাইন' },
      { en: 'Fully responsive', bn: 'সম্পূর্ণ রেসপন্সিভ' },
      { en: 'Fast and SEO-optimized', bn: 'দ্রুত এবং SEO-অপটিমাইজড' },
      { en: 'Project showcase + About + Contact sections', bn: 'প্রজেক্ট শোকেস + About + Contact সেকশন' },
    ],
    note: {
      en: 'Note: final price confirmed after requirements.',
      bn: 'নোট: আপনার চাহিদা পর্যালোচনার পর চূড়ান্ত মূল্য নিশ্চিত করা হবে।',
    },
    ctaLabel: {
      en: 'Discuss Portfolio',
      bn: 'পোর্টফোলিও নিয়ে কথা বলুন',
    },
    ctaHref: '/contact?package=portfolio',
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    id: 'pages',
    feature: { en: 'Pages', bn: 'পেজ সংখ্যা' },
    basic: { en: 'Up to 5 pages', bn: 'সর্বোচ্চ ৫টি পেজ' },
    premium: { en: 'Unlimited pages', bn: 'আনলিমিটেড পেজ' },
    portfolio: { en: 'Showcase + About + Contact', bn: 'শোকেস + About + Contact' },
  },
  {
    id: 'responsive',
    feature: { en: 'Responsive design', bn: 'রেসপন্সিভ ডিজাইন' },
    basic: { en: 'Included', bn: 'অন্তর্ভুক্ত' },
    premium: { en: 'Included', bn: 'অন্তর্ভুক্ত' },
    portfolio: { en: 'Fully responsive', bn: 'সম্পূর্ণ রেসপন্সিভ' },
  },
  {
    id: 'contactForm',
    feature: { en: 'Contact form', bn: 'কন্টাক্ট ফর্ম' },
    basic: { en: 'Included', bn: 'অন্তর্ভুক্ত' },
    premium: { en: 'Included', bn: 'অন্তর্ভুক্ত' },
    portfolio: { en: 'Contact section included', bn: 'Contact সেকশন অন্তর্ভুক্ত' },
  },
  {
    id: 'seo',
    feature: { en: 'SEO', bn: 'SEO' },
    basic: { en: 'Basic SEO setup', bn: 'বেসিক SEO সেটআপ' },
    premium: { en: 'Advanced SEO + performance', bn: 'অ্যাডভান্সড SEO + পারফরম্যান্স' },
    portfolio: { en: 'SEO-optimized', bn: 'SEO-অপটিমাইজড' },
  },
  {
    id: 'uiux',
    feature: { en: 'UI/UX design', bn: 'UI/UX ডিজাইন' },
    basic: { en: 'Standard layout', bn: 'স্ট্যান্ডার্ড লেআউট' },
    premium: { en: 'Included', bn: 'অন্তর্ভুক্ত' },
    portfolio: { en: 'Custom design', bn: 'কাস্টম ডিজাইন' },
  },
  {
    id: 'revisions',
    feature: { en: 'Revisions', bn: 'রিভিশন' },
    basic: { en: '1 round', bn: '১ রাউন্ড' },
    premium: { en: '3 rounds', bn: '৩ রাউন্ড' },
    portfolio: { en: 'Confirmed with scope', bn: 'স্কোপ অনুযায়ী নির্ধারিত' },
  },
  {
    id: 'delivery',
    feature: { en: 'Delivery time', bn: 'ডেলিভারি সময়' },
    basic: { en: '7–10 days', bn: '৭–১০ দিন' },
    premium: { en: '15–25 days', bn: '১৫–২৫ দিন' },
    portfolio: { en: 'Confirmed after requirements', bn: 'চাহিদা অনুযায়ী নির্ধারিত' },
  },
  {
    id: 'support',
    feature: { en: 'Post-launch support', bn: 'পোস্ট-লঞ্চ সাপোর্ট' },
    basic: { en: '—', bn: '—' },
    premium: { en: '30 days included', bn: '৩০ দিন অন্তর্ভুক্ত' },
    portfolio: { en: 'Confirmed with scope', bn: 'স্কোপ অনুযায়ী নির্ধারিত' },
  },
];

export const CUSTOM_QUOTE_SCOPE: LocalizedText[] = [
  { en: 'Flutter mobile apps (iOS & Android)', bn: 'Flutter মোবাইল অ্যাপ (iOS ও Android)' },
  { en: 'Complete e-commerce stores', bn: 'সম্পূর্ণ ই-কমার্স স্টোর' },
  { en: 'UI/UX-only design projects', bn: 'শুধুমাত্র UI/UX ডিজাইন কাজ' },
  { en: 'Larger custom web applications', bn: 'বড় কাস্টম ওয়েব অ্যাপ্লিকেশন' },
];

export const PRICING_FAQS: PricingFaq[] = [
  {
    id: 'pricing-faq-1',
    question: {
      en: 'How are scope, timeline, and price finalized?',
      bn: 'প্রজেক্টের স্কোপ, সময়সীমা এবং মূল্য কীভাবে চূড়ান্ত হয়?',
    },
    answer: {
      en: 'We confirm scope, timeline, and price together before starting. Every new client starts with a free consultation so there are no surprises.',
      bn: 'কাজ শুরু করার আগেই আমরা একসাথে স্কোপ, সময়সীমা এবং মূল্য চূড়ান্ত করি। নতুন ক্লায়েন্টদের জন্য শুরুতে ফ্রি কনসালটেশন থাকায় কোনো অস্পষ্টতা থাকে না।',
    },
  },
  {
    id: 'pricing-faq-2',
    question: {
      en: 'Why are prices shown in BDT with approximate USD?',
      bn: 'মূল্য BDT এবং আনুমানিক USD-তে দেখানো হয়েছে কেন?',
    },
    answer: {
      en: 'Stack Dev operates from Savar, Dhaka, Bangladesh (1340). Prices are listed in BDT first with approximate USD equivalents for clarity.',
      bn: 'Stack Dev সাভার, ঢাকা, বাংলাদেশ (১৩৪০) থেকে পরিচালিত হয়। সহজবোধ্যতার জন্য মূল্য প্রথমে BDT এবং পাশে আনুমানিক USD হিসেবে দেখানো হয়েছে।',
    },
  },
  {
    id: 'pricing-faq-3',
    question: {
      en: 'How does pricing work for Flutter apps, e-commerce, and custom web apps?',
      bn: 'Flutter অ্যাপ, ই-কমার্স ও কাস্টম ওয়েব অ্যাপের মূল্য কীভাবে নির্ধারণ হয়?',
    },
    answer: {
      en: 'Because feature sets vary by project, Flutter apps, e-commerce stores, UI/UX-only work, and custom web applications receive a custom quote after a free consultation.',
      bn: 'প্রজেক্টভেদে ফিচারের চাহিদা ভিন্ন হওয়ায় Flutter অ্যাপ, ই-কমার্স স্টোর, শুধুমাত্র UI/UX কাজ এবং কাস্টম ওয়েব অ্যাপ্লিকেশনের জন্য ফ্রি কনসালটেশনের পর কাস্টম কোটেশন দেওয়া হয়।',
    },
  },
  {
    id: 'pricing-faq-4',
    question: {
      en: 'What determines the final price of a Portfolio Website?',
      bn: 'পোর্টফোলিও ওয়েবসাইটের চূড়ান্ত মূল্য কীসের ওপর নির্ভর করে?',
    },
    answer: {
      en: 'Portfolio websites start around 2,000 BDT. After reviewing your sections, content, and specific requirements, the final price is confirmed before work begins.',
      bn: 'পোর্টফোলিও ওয়েবসাইট প্রায় ২,০০০ টাকা থেকে শুরু হয়। আপনার সেকশন, কন্টেন্ট এবং চাহিদা পর্যালোচনার পর কাজ শুরুর আগে চূড়ান্ত মূল্য নিশ্চিত করা হয়।',
    },
  },
];
