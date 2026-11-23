import type { Locale } from '@/src/i18n';

export type ServiceSlug =
  | 'custom-web-development'
  | 'flutter-mobile-apps'
  | 'ui-ux-design'
  | 'ecommerce-solutions'
  | 'web-applications'
  | 'portfolio-websites';

export type ServiceIconName =
  | 'globe'
  | 'smartphone'
  | 'pen-tool'
  | 'shopping-bag'
  | 'app-window'
  | 'briefcase';

export interface LocalizedText {
  en: string;
  bn: string;
}

export interface ServiceFaqItem {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
}

export interface ServiceStepItem {
  number: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface ServicePricingNote {
  label: LocalizedText;
  summary: LocalizedText;
  highlight: LocalizedText;
}

export interface ServicePackageDetail {
  id: 'basic' | 'premium';
  name: LocalizedText;
  price: LocalizedText;
  badge?: LocalizedText;
  audience: LocalizedText;
  features: LocalizedText[];
  highlighted?: boolean;
  ctaLabel: LocalizedText;
  ctaHref: string;
}

export interface ServiceComparisonRow {
  id: string;
  feature: LocalizedText;
  basic: LocalizedText;
  premium: LocalizedText;
}

export interface ServicePricingSection {
  title: LocalizedText;
  highlight?: LocalizedText;
  paragraphs?: LocalizedText[];
  bullets?: LocalizedText[];
  packages?: ServicePackageDetail[];
  comparisonRows?: ServiceComparisonRow[];
}

export interface ServiceItem {
  slug: ServiceSlug;
  icon: ServiceIconName;
  title: LocalizedText;
  shortDescription: LocalizedText;
  heroDescription: LocalizedText;
  overview: LocalizedText[];
  bullets: [LocalizedText, LocalizedText, LocalizedText];
  whatYouGet: LocalizedText[];
  whoItsFor: LocalizedText[];
  whoItsForNote?: LocalizedText;
  processSteps: ServiceStepItem[];
  pricingNote: ServicePricingNote;
  pricingSection: ServicePricingSection;
  relatedPackage: {
    name: LocalizedText;
    href: string;
  };
  faqs: ServiceFaqItem[];
  ctaText: LocalizedText;
}

const SHARED_SERVICE_CTA: LocalizedText = {
  en: 'Get a free consultation: Message the "Stack Dev" page on Facebook or call +880 1963-131282.',
  bn: 'ফ্রি কনসালটেশন নিন: Facebook এ "Stack Dev" পেজে মেসেজ করুন অথবা +880 1963-131282 নম্বরে কল করুন।',
};

export const SERVICES: ServiceItem[] = [
  {
    slug: 'custom-web-development',
    icon: 'globe',
    title: {
      en: 'Custom Web Development',
      bn: 'কাস্টম ওয়েব ডেভেলপমেন্ট',
    },
    shortDescription: {
      en: 'Fast, responsive, scalable web platforms tailored to your business.',
      bn: 'আপনার ব্যবসার জন্য দ্রুতগতির, রেসপন্সিভ এবং স্কেলেবল ওয়েব প্ল্যাটফর্ম।',
    },
    heroDescription: {
      en: 'High-performance business websites built with clean code, mobile-first layout, and SEO-friendly structure.',
      bn: 'পরিচ্ছন্ন কোড, mobile-first লেআউট এবং SEO-friendly কাঠামোয় তৈরি উচ্চ-গতির বিজনেস ওয়েবসাইট।',
    },
    overview: [
      {
        en: 'Your website is not just an online address—it is your business’s biggest digital sales point. Stack Dev understands your business goals and builds a fast, secure, and scalable web platform from start to finish. Every project is handled directly under the supervision of Stack Dev’s owner, keeping communication simple and quality assured.',
        bn: 'আপনার ওয়েবসাইট শুধু একটি অনলাইন ঠিকানা নয়, এটি আপনার ব্যবসার সবচেয়ে বড় ডিজিটাল সেলস পয়েন্ট। Stack Dev আপনার ব্যবসার লক্ষ্য বুঝে শুরু থেকে শেষ পর্যন্ত একটি দ্রুত, নিরাপদ এবং scalable ওয়েব প্ল্যাটফর্ম তৈরি করে দেয়। প্রতিটি প্রজেক্ট সরাসরি Stack Dev এর মালিকের তত্ত্বাবধানে হয়, তাই যোগাযোগ সহজ এবং কাজের মান নিশ্চিত।',
      },
      {
        en: 'We prioritize lightning-fast performance, a mobile-first approach, and an SEO-friendly structure so your website can turn visitors into loyal customers.',
        bn: 'আমরা Lightning-fast পারফরম্যান্স, mobile-first পদ্ধতি এবং SEO-friendly কাঠামোকে সবার আগে রাখি, যাতে আপনার ওয়েবসাইট ভিজিটরকে বিশ্বস্ত গ্রাহকে পরিণত করতে পারে।',
      },
    ],
    bullets: [
      { en: 'Lightning-fast loading speed', bn: 'দ্রুতগতির লোডিং পারফরম্যান্স' },
      { en: 'Mobile-first responsive layout', bn: 'মোবাইল-ফার্স্ট রেসপন্সিভ লেআউট' },
      { en: 'SEO-friendly clean structure', bn: 'SEO-বান্ধব পরিচ্ছন্ন কাঠামো' },
    ],
    whatYouGet: [
      {
        en: 'Responsive design tested across mobile, tablet, and desktop screens',
        bn: 'মোবাইল, ট্যাবলেট এবং ডেস্কটপ স্ক্রিনের জন্য পরীক্ষিত responsive ডিজাইন',
      },
      {
        en: 'Fast-loading frontend architecture with clean semantic markup',
        bn: 'পরিচ্ছন্ন semantic markup সহ দ্রুত-লোডিং frontend আর্কিটেকচার',
      },
      {
        en: 'Contact form integration for direct client inquiries',
        bn: 'সরাসরি ক্লায়েন্ট ইনকোয়ারির জন্য contact form integration',
      },
      {
        en: 'Basic or Advanced SEO setup depending on your selected package',
        bn: 'আপনার নির্বাচিত প্যাকেজ অনুযায়ী Basic বা Advanced SEO সেটআপ',
      },
      {
        en: 'Custom backend or CMS integration available in the Premium package',
        bn: 'Premium প্যাকেজে custom backend বা CMS integration সুবিধা',
      },
      {
        en: 'Direct communication with the founder throughout design, development, and revisions',
        bn: 'ডিজাইন, ডেভেলপমেন্ট ও revision জুড়ে সরাসরি founder এর সাথে যোগাযোগ',
      },
    ],
    whoItsFor: [
      {
        en: 'Startups looking to build their first website',
        bn: 'প্রথমবার ওয়েবসাইট তৈরি করতে চাওয়া Startup',
      },
      {
        en: 'Small and medium businesses looking to grow their online presence',
        bn: 'অনলাইনে উপস্থিতি বাড়াতে চাওয়া ছোট ও মাঝারি ব্যবসা',
      },
      {
        en: 'Campaigns or products needing a landing page',
        bn: 'Landing page দরকার এমন ক্যাম্পেইন বা প্রোডাক্ট',
      },
      {
        en: 'Businesses wanting to manage their own content (with CMS)',
        bn: 'নিজস্ব কনটেন্ট ম্যানেজ করতে চাওয়া ব্যবসা (CMS সহ)',
      },
    ],
    processSteps: [
      {
        number: '01.',
        title: {
          en: 'Consultation',
          bn: 'কনসালটেশন',
        },
        description: {
          en: 'FREE discussion about your business, goals, and requirements.',
          bn: 'আপনার ব্যবসা, লক্ষ্য ও প্রয়োজন নিয়ে FREE আলোচনা',
        },
      },
      {
        number: '02.',
        title: {
          en: 'Package Selection',
          bn: 'প্যাকেজ নির্বাচন',
        },
        description: {
          en: 'Guidance on whether Basic or Premium fits your needs best.',
          bn: 'Basic বা Premium, কোনটি আপনার জন্য উপযুক্ত তার পরামর্শ',
        },
      },
      {
        number: '03.',
        title: {
          en: 'Scope & Price Confirmation',
          bn: 'Scope ও মূল্য নিশ্চিতকরণ',
        },
        description: {
          en: 'Finalizing work scope, delivery timeline, and pricing.',
          bn: 'কাজের পরিধি, সময় ও মূল্য চূড়ান্ত করা',
        },
      },
      {
        number: '04.',
        title: {
          en: 'Development',
          bn: 'ডেভেলপমেন্ট',
        },
        description: {
          en: 'Building a responsive and fast-loading website.',
          bn: 'responsive ও দ্রুত ওয়েবসাইট তৈরি',
        },
      },
      {
        number: '05.',
        title: {
          en: 'Revision',
          bn: 'Revision',
        },
        description: {
          en: 'Refining and updating based on your feedback.',
          bn: 'আপনার মতামত অনুযায়ী পরিবর্তন',
        },
      },
      {
        number: '06.',
        title: {
          en: 'Delivery & Launch',
          bn: 'ডেলিভারি ও লঞ্চ',
        },
        description: {
          en: 'Website handover (30 days post-launch support included in Premium).',
          bn: 'ওয়েবসাইট হস্তান্তর (Premium এ 30 দিনের post-launch support)',
        },
      },
    ],
    pricingNote: {
      label: { en: 'Packages & Pricing', bn: 'প্যাকেজ ও মূল্য' },
      highlight: {
        en: 'Basic: ৳15,000 (≈ $135 USD) · Premium: ৳35,000 (≈ $315 USD)',
        bn: 'Basic Package: ৳15,000 (≈ $135 USD) · Premium Package: ৳35,000 (≈ $315 USD)',
      },
      summary: {
        en: 'Basic includes up to 5 pages, responsive design, contact form integration, basic SEO setup, 1 round revision, and 7–10 days delivery. Premium adds unlimited pages, custom backend/CMS integration, advanced SEO + performance optimization, UI/UX design, 3 rounds revision, 15–25 days delivery, and 30 days post-launch support.',
        bn: 'Basic প্যাকেজে থাকছে সর্বোচ্চ 5 টি পেজ, Responsive design, Contact form integration, Basic SEO setup, 1 round revision এবং 7–10 দিনে ডেলিভারি। Premium প্যাকেজে Unlimited পেজ, Custom backend / CMS integration, Advanced SEO + performance optimization, UI/UX design অন্তর্ভুক্ত, 3 rounds revision, 15–25 দিনে ডেলিভারি এবং 30 দিন post-launch support।',
      },
    },
    pricingSection: {
      title: {
        en: 'Packages & Pricing',
        bn: 'প্যাকেজ ও মূল্য',
      },
      packages: [
        {
          id: 'basic',
          name: { en: 'Basic Package', bn: 'Basic Package' },
          price: { en: '৳15,000 (≈ $135 USD)', bn: '৳15,000 (≈ $135 USD)' },
          audience: {
            en: 'For small businesses and Landing Pages',
            bn: 'ছোট ব্যবসা ও Landing Page এর জন্য',
          },
          features: [
            { en: 'Up to 5 pages', bn: 'সর্বোচ্চ 5 টি পেজ' },
            { en: 'Responsive design (mobile + desktop)', bn: 'Responsive design (মোবাইল + ডেস্কটপ)' },
            { en: 'Contact form integration', bn: 'Contact form integration' },
            { en: 'Basic SEO setup', bn: 'Basic SEO setup' },
            { en: '1 round revision', bn: '1 round revision' },
            { en: 'Delivery: 7–10 days', bn: 'ডেলিভারি: 7–10 দিন' },
          ],
          ctaLabel: { en: 'Choose Basic', bn: 'Basic নির্বাচন করুন' },
          ctaHref: '/contact?package=basic',
        },
        {
          id: 'premium',
          name: { en: 'Premium Package', bn: 'Premium Package' },
          price: { en: '৳35,000 (≈ $315 USD)', bn: '৳35,000 (≈ $315 USD)' },
          badge: { en: 'Most Popular', bn: 'Most Popular' },
          highlighted: true,
          audience: {
            en: 'For growing businesses and custom web apps',
            bn: 'বর্ধনশীল ব্যবসা ও custom web app এর জন্য',
          },
          features: [
            { en: 'Unlimited pages', bn: 'Unlimited পেজ' },
            { en: 'Responsive design (mobile + desktop)', bn: 'Responsive design (মোবাইল + ডেস্কটপ)' },
            { en: 'Custom backend / CMS integration', bn: 'Custom backend / CMS integration' },
            { en: 'Advanced SEO + performance optimization', bn: 'Advanced SEO + performance optimization' },
            { en: 'UI/UX design included', bn: 'UI/UX design অন্তর্ভুক্ত' },
            { en: '3 rounds revision', bn: '3 rounds revision' },
            { en: 'Delivery: 15–25 days', bn: 'ডেলিভারি: 15–25 দিন' },
            { en: '30 days post-launch support', bn: '30 দিন post-launch support' },
          ],
          ctaLabel: { en: 'Choose Premium', bn: 'Premium নির্বাচন করুন' },
          ctaHref: '/contact?package=premium',
        },
      ],
      comparisonRows: [
        {
          id: 'pages',
          feature: { en: 'Page count', bn: 'পেজ সংখ্যা' },
          basic: { en: 'Up to 5', bn: 'সর্বোচ্চ 5' },
          premium: { en: 'Unlimited', bn: 'Unlimited' },
        },
        {
          id: 'responsive',
          feature: { en: 'Responsive design', bn: 'Responsive design' },
          basic: { en: 'Yes', bn: 'হ্যাঁ' },
          premium: { en: 'Yes', bn: 'হ্যাঁ' },
        },
        {
          id: 'contactForm',
          feature: { en: 'Contact form', bn: 'Contact form' },
          basic: { en: 'Yes', bn: 'হ্যাঁ' },
          premium: { en: 'Yes (with custom backend/CMS)', bn: 'হ্যাঁ (সাথে custom backend/CMS)' },
        },
        {
          id: 'seo',
          feature: { en: 'SEO', bn: 'SEO' },
          basic: { en: 'Basic', bn: 'Basic' },
          premium: { en: 'Advanced + performance', bn: 'Advanced + performance' },
        },
        {
          id: 'uiux',
          feature: { en: 'UI/UX design', bn: 'UI/UX design' },
          basic: { en: 'No', bn: 'নেই' },
          premium: { en: 'Included', bn: 'অন্তর্ভুক্ত' },
        },
        {
          id: 'revision',
          feature: { en: 'Revision', bn: 'Revision' },
          basic: { en: '1 round', bn: '1 round' },
          premium: { en: '3 rounds', bn: '3 rounds' },
        },
        {
          id: 'delivery',
          feature: { en: 'Delivery time', bn: 'ডেলিভারি সময়' },
          basic: { en: '7–10 days', bn: '7–10 দিন' },
          premium: { en: '15–25 days', bn: '15–25 দিন' },
        },
        {
          id: 'support',
          feature: { en: 'Post-launch support', bn: 'Post-launch support' },
          basic: { en: 'No', bn: 'নেই' },
          premium: { en: '30 days', bn: '30 দিন' },
        },
      ],
    },
    relatedPackage: {
      name: { en: 'Basic & Premium Web Packages', bn: 'Basic ও Premium ওয়েব প্যাকেজ' },
      href: '/pricing',
    },
    faqs: [
      {
        id: 'web-faq-1',
        question: {
          en: 'Should I choose Basic or Premium?',
          bn: 'Basic আর Premium এর মধ্যে কোনটি নেব?',
        },
        answer: {
          en: 'For a standard website or Landing page, Basic is enough. If you need custom features, backend/CMS, or plan to scale your business, Premium is better. During the consultation, we will advise you on the right option.',
          bn: 'সাধারণ ওয়েবসাইট বা Landing page হলে Basic যথেষ্ট। Custom ফিচার, backend/CMS বা ব্যবসা বড় করার পরিকল্পনা থাকলে Premium ভালো। কনসালটেশনে আমরা আপনাকে সঠিক পরামর্শ দেব।',
        },
      },
      {
        id: 'web-faq-2',
        question: {
          en: 'Will the website work properly on mobile devices?',
          bn: 'ওয়েবসাইট মোবাইলে ঠিকভাবে চলবে তো?',
        },
        answer: {
          en: 'Yes. We work with a mobile-first approach and test on mobile, tablet, and desktop before delivery.',
          bn: 'হ্যাঁ। আমরা mobile-first পদ্ধতিতে কাজ করি এবং মোবাইল, ট্যাবলেট ও ডেস্কটপে পরীক্ষা করে ডেলিভারি দিই।',
        },
      },
      {
        id: 'web-faq-3',
        question: {
          en: 'Will I receive support after launch?',
          bn: 'লঞ্চের পরে সাপোর্ট পাব?',
        },
        answer: {
          en: '30 days of post-launch support is included in the Premium package. It is not included in the Basic package.',
          bn: 'Premium প্যাকেজে 30 দিনের post-launch support অন্তর্ভুক্ত। Basic প্যাকেজে এটি অন্তর্ভুক্ত নয়।',
        },
      },
      {
        id: 'web-faq-4',
        question: {
          en: 'What if I need something custom outside the packages?',
          bn: 'প্যাকেজের বাইরে বিশেষ কিছু দরকার হলে?',
        },
        answer: {
          en: 'Let us know. A custom quote will be provided based on your requirements.',
          bn: 'আমাদের জানান। প্রয়োজন অনুযায়ী custom quote দেওয়া হবে।',
        },
      },
    ],
    ctaText: SHARED_SERVICE_CTA,
  },
  {
    slug: 'flutter-mobile-apps',
    icon: 'smartphone',
    title: {
      en: 'Flutter Mobile Apps',
      bn: 'Flutter মোবাইল অ্যাপ',
    },
    shortDescription: {
      en: 'Cross-platform iOS and Android applications built from one codebase.',
      bn: 'একটি কোডবেস থেকেই iOS এবং Android এর জন্য cross-platform মোবাইল অ্যাপ।',
    },
    heroDescription: {
      en: 'Cross-platform mobile apps for iOS and Android built from a single codebase.',
      bn: 'একটি কোডবেস থেকেই iOS এবং Android এর জন্য cross-platform মোবাইল অ্যাপ।',
    },
    overview: [
      {
        en: 'To bring your app idea to life, Stack Dev builds beautiful, smooth, and fast Flutter applications. With Flutter, apps for both iOS and Android can be built from a single codebase, saving time and cost compared to building separate apps.',
        bn: 'আপনার অ্যাপ আইডিয়াকে বাস্তব রূপ দিতে Stack Dev তৈরি করে সুন্দর, মসৃণ এবং দ্রুত Flutter অ্যাপ। Flutter এর মাধ্যমে একটি কোডবেস থেকে iOS ও Android দুই প্ল্যাটফর্মের জন্য অ্যাপ তৈরি করা যায়, ফলে আলাদা আলাদা অ্যাপ বানানোর তুলনায় সময় ও খরচ সাশ্রয় হয়।',
      },
      {
        en: 'Whether you are an established business expanding to mobile or an entrepreneur starting with a new app idea, we will discuss everything from concept to feature planning and guide you along the right path.',
        bn: 'আপনি যদি প্রতিষ্ঠিত ব্যবসা হয়ে মোবাইলে যেতে চান, কিংবা উদ্যোক্তা হিসেবে নতুন অ্যাপ আইডিয়া নিয়ে শুরু করতে চান, আমরা আপনার সাথে আইডিয়া থেকে ফিচার পরিকল্পনা পর্যন্ত আলোচনা করে সঠিক পথ দেখাব।',
      },
    ],
    bullets: [
      { en: 'Single codebase for iOS & Android', bn: 'iOS ও Android এর জন্য একক কোডবেস' },
      { en: 'Smooth and fast performance', bn: 'মসৃণ ও দ্রুত-গতির পারফরম্যান্স' },
      { en: 'Clean mobile-first UI/UX', bn: 'পরিচ্ছন্ন mobile-first UI/UX' },
    ],
    whatYouGet: [
      {
        en: 'Cross-platform app for iOS and Android from a single codebase',
        bn: 'একটি কোডবেস থেকে iOS ও Android এর জন্য cross-platform অ্যাপ',
      },
      {
        en: 'Smooth and fast performance',
        bn: 'মসৃণ ও দ্রুত-গতির পারফরম্যান্স',
      },
      {
        en: 'Clean mobile-first UI/UX',
        bn: 'পরিচ্ছন্ন mobile-first UI/UX',
      },
      {
        en: 'Feature planning tailored to your business needs',
        bn: 'আপনার ব্যবসার প্রয়োজন অনুযায়ী ফিচার পরিকল্পনা',
      },
      {
        en: 'Direct communication with the founder from start to delivery',
        bn: 'প্রজেক্টের শুরু থেকে ডেলিভারি পর্যন্ত সরাসরি founder এর সাথে যোগাযোগ',
      },
      {
        en: 'Transparent custom quote tailored to your project',
        bn: 'প্রজেক্ট অনুযায়ী স্বচ্ছ custom quote',
      },
    ],
    whoItsFor: [
      {
        en: 'Entrepreneurs with an app idea',
        bn: 'অ্যাপ আইডিয়া আছে এমন উদ্যোক্তা',
      },
      {
        en: 'Established businesses looking to launch a mobile app',
        bn: 'মোবাইল অ্যাপে যেতে চাওয়া প্রতিষ্ঠিত ব্যবসা',
      },
      {
        en: 'Startups looking to reach both iOS and Android together',
        bn: 'একসাথে iOS ও Android এ পৌঁছাতে চাওয়া Startup',
      },
    ],
    processSteps: [
      {
        number: '01.',
        title: {
          en: 'Consultation',
          bn: 'কনসালটেশন',
        },
        description: {
          en: 'FREE discussion about your idea, users, and goals.',
          bn: 'আপনার আইডিয়া, ব্যবহারকারী ও লক্ষ্য নিয়ে FREE আলোচনা',
        },
      },
      {
        number: '02.',
        title: {
          en: 'Feature & Budget Definition',
          bn: 'ফিচার ও বাজেট নির্ধারণ',
        },
        description: {
          en: 'Understanding required features, timeline, and budget.',
          bn: 'প্রয়োজনীয় ফিচার, সময়সীমা ও বাজেট জানা',
        },
      },
      {
        number: '03.',
        title: {
          en: 'Custom Quote',
          bn: 'Custom quote',
        },
        description: {
          en: 'Project-specific price and timeline proposal.',
          bn: 'প্রজেক্ট অনুযায়ী মূল্য ও সময়ের প্রস্তাব',
        },
      },
      {
        number: '04.',
        title: {
          en: 'Design & Development',
          bn: 'ডিজাইন ও ডেভেলপমেন্ট',
        },
        description: {
          en: 'UI/UX design and building the application.',
          bn: 'UI/UX ও অ্যাপ তৈরি',
        },
      },
      {
        number: '05.',
        title: {
          en: 'Revision & Delivery',
          bn: 'Revision ও ডেলিভারি',
        },
        description: {
          en: 'Refining based on feedback and handing over the app.',
          bn: 'মতামত অনুযায়ী পরিবর্তন করে অ্যাপ হস্তান্তর',
        },
      },
    ],
    pricingNote: {
      label: { en: 'Pricing', bn: 'মূল্য' },
      highlight: {
        en: 'Custom quote after FREE consultation',
        bn: 'FREE কনসালটেশনের পরে custom quote',
      },
      summary: {
        en: 'There are no fixed packages for Flutter apps. Pricing for each app is determined based on features, timeline, and budget as a custom quote after a FREE consultation.',
        bn: 'Flutter অ্যাপের জন্য নির্দিষ্ট প্যাকেজ নেই। প্রতিটি অ্যাপের মূল্য নির্ধারিত হয় ফিচার, সময়সীমা ও বাজেট অনুযায়ী, FREE কনসালটেশনের পরে custom quote হিসেবে।',
      },
    },
    pricingSection: {
      title: { en: 'Pricing', bn: 'মূল্য' },
      paragraphs: [
        {
          en: 'There are no fixed packages for Flutter apps. Each app’s price is determined according to features, timeline, and budget, provided as a custom quote after a FREE consultation.',
          bn: 'Flutter অ্যাপের জন্য নির্দিষ্ট প্যাকেজ নেই। প্রতিটি অ্যাপের মূল্য নির্ধারিত হয় ফিচার, সময়সীমা ও বাজেট অনুযায়ী, FREE কনসালটেশনের পরে custom quote হিসেবে।',
        },
      ],
    },
    relatedPackage: {
      name: { en: 'Request Custom Quote', bn: 'Custom quote নিন' },
      href: '/contact',
    },
    faqs: [
      {
        id: 'flutter-faq-1',
        question: {
          en: 'Will a Flutter app run on both iOS and Android?',
          bn: 'Flutter অ্যাপ iOS ও Android দুটোতেই চলবে?',
        },
        answer: {
          en: 'Yes. Flutter is a cross-platform technology, so the app is built for both platforms from the same codebase.',
          bn: 'হ্যাঁ। Flutter একটি cross-platform প্রযুক্তি, তাই একই কোডবেস থেকে দুই প্ল্যাটফর্মের জন্য অ্যাপ তৈরি হয়।',
        },
      },
      {
        id: 'flutter-faq-2',
        question: {
          en: 'How much does it cost to build an app?',
          bn: 'অ্যাপ বানাতে কত খরচ হবে?',
        },
        answer: {
          en: 'There is no fixed package. After understanding your features, timeline, and budget, a custom quote is provided.',
          bn: 'নির্দিষ্ট প্যাকেজ নেই। আপনার ফিচার, সময় ও বাজেট জানার পর custom quote দেওয়া হয়।',
        },
      },
      {
        id: 'flutter-faq-3',
        question: {
          en: 'What if I only have an idea without full details?',
          bn: 'শুধু আইডিয়া আছে, বিস্তারিত নেই, তাহলে?',
        },
        answer: {
          en: 'No problem. In the FREE consultation, we will discuss your idea and help organize the plan.',
          bn: 'কোনো সমস্যা নেই। FREE কনসালটেশনে আইডিয়া নিয়ে আলোচনা করে আমরা পরিকল্পনা সাজাতে সাহায্য করব।',
        },
      },
    ],
    ctaText: SHARED_SERVICE_CTA,
  },
  {
    slug: 'ui-ux-design',
    icon: 'pen-tool',
    title: {
      en: 'UI/UX Design',
      bn: 'UI/UX ডিজাইন',
    },
    shortDescription: {
      en: 'Modern and user-friendly interface design for easy, intuitive use.',
      bn: 'সহজ ও সুগম ব্যবহারের জন্য আধুনিক এবং ইউজার-ফ্রেন্ডলি ইন্টারফেস ডিজাইন।',
    },
    heroDescription: {
      en: 'Modern and user-friendly interface design for easy and intuitive usability.',
      bn: 'সহজ ও সুগম ব্যবহারের জন্য আধুনিক এবং ইউজার-ফ্রেন্ডলি ইন্টারফেস ডিজাইন।',
    },
    overview: [
      {
        en: 'Good design does not just look nice—it guides users effortlessly to what they want to do. Through Stack Dev’s UI/UX design service, we craft modern, clean, and user-friendly interfaces for your website or app that attract visitors and help convert them into customers.',
        bn: 'ভালো ডিজাইন শুধু সুন্দর দেখায় না, এটি ব্যবহারকারীকে সহজে তার কাঙ্ক্ষিত কাজে পৌঁছে দেয়। Stack Dev এর UI/UX ডিজাইন সার্ভিসে আমরা আপনার ওয়েবসাইট বা অ্যাপের জন্য আধুনিক, পরিচ্ছন্ন এবং ব্যবহারবান্ধব ইন্টারফেস তৈরি করি, যা ভিজিটরকে আকৃষ্ট করে এবং গ্রাহকে পরিণত করতে সাহায্য করে।',
      },
      {
        en: 'Designs are created with both mobile and desktop screens in mind so the user experience remains equally smooth across all devices.',
        bn: 'ডিজাইন মোবাইল ও ডেস্কটপ উভয় স্ক্রিনের কথা মাথায় রেখে তৈরি হয়, যাতে ব্যবহারের অভিজ্ঞতা সব ডিভাইসে একরকম মসৃণ থাকে।',
      },
    ],
    bullets: [
      { en: 'Clean visual hierarchy & spacing', bn: 'পরিচ্ছন্ন ভিজ্যুয়াল হায়ারার্কি ও স্পেসিং' },
      { en: 'Mobile and desktop layouts', bn: 'মোবাইল ও ডেস্কটপ উভয় লেআউটের ডিজাইন' },
      { en: 'Included in Premium web package', bn: 'Premium ওয়েব প্যাকেজে অন্তর্ভুক্ত' },
    ],
    whatYouGet: [
      {
        en: 'Clean visual hierarchy and spacing',
        bn: 'পরিচ্ছন্ন ভিজ্যুয়াল হায়ারার্কি ও স্পেসিং',
      },
      {
        en: 'Design for both mobile and desktop layouts',
        bn: 'মোবাইল ও ডেস্কটপ উভয় লেআউটের ডিজাইন',
      },
      {
        en: 'Easy navigation designed with user convenience in mind',
        bn: 'ব্যবহারকারীর সুবিধা মাথায় রেখে সহজ নেভিগেশন',
      },
      {
        en: 'Modern design aligned with your brand and vision',
        bn: 'আপনার ব্র্যান্ড ও ভিশনের সাথে মানানসই আধুনিক ডিজাইন',
      },
      {
        en: 'Development-ready interfaces',
        bn: 'ডেভেলপমেন্টের জন্য প্রস্তুত ইন্টারফেস',
      },
      {
        en: 'Included in the Premium web package',
        bn: 'Premium ওয়েব প্যাকেজে অন্তর্ভুক্ত',
      },
    ],
    whoItsFor: [
      {
        en: 'Startups needing design for a new website or app',
        bn: 'নতুন ওয়েবসাইট বা অ্যাপের ডিজাইন দরকার এমন Startup',
      },
      {
        en: 'Businesses looking to modernize an existing interface',
        bn: 'বিদ্যমান ইন্টারফেস আধুনিক করতে চাওয়া ব্যবসা',
      },
      {
        en: 'Entrepreneurs wanting to finalize design before development',
        bn: 'ডেভেলপমেন্টের আগে ডিজাইন চূড়ান্ত করতে চাওয়া উদ্যোক্তা',
      },
    ],
    processSteps: [
      {
        number: '01.',
        title: {
          en: 'Consultation',
          bn: 'কনসালটেশন',
        },
        description: {
          en: 'Understanding your brand, users, and needs.',
          bn: 'আপনার ব্র্যান্ড, ব্যবহারকারী ও প্রয়োজন বোঝা',
        },
      },
      {
        number: '02.',
        title: {
          en: 'Interface Planning',
          bn: 'ইন্টারফেস পরিকল্পনা',
        },
        description: {
          en: 'Organizing page and screen structures.',
          bn: 'পেজ ও স্ক্রিনের কাঠামো সাজানো',
        },
      },
      {
        number: '03.',
        title: {
          en: 'Design Creation',
          bn: 'ডিজাইন তৈরি',
        },
        description: {
          en: 'Visual style, layout, and components.',
          bn: 'ভিজ্যুয়াল স্টাইল, লেআউট ও কম্পোনেন্ট',
        },
      },
      {
        number: '04.',
        title: {
          en: 'Revision',
          bn: 'Revision',
        },
        description: {
          en: 'Refining based on your feedback.',
          bn: 'আপনার মতামত অনুযায়ী পরিবর্তন',
        },
      },
      {
        number: '05.',
        title: {
          en: 'Handover',
          bn: 'হস্তান্তর',
        },
        description: {
          en: 'Delivering the finalized design.',
          bn: 'চূড়ান্ত ডিজাইন ডেলিভারি',
        },
      },
    ],
    pricingNote: {
      label: { en: 'Pricing', bn: 'মূল্য' },
      highlight: {
        en: 'Included with Premium Web Package (৳35,000) or custom quote',
        bn: 'Premium Web Package (৳35,000) এর সাথে অন্তর্ভুক্ত অথবা custom quote',
      },
      summary: {
        en: 'UI/UX design is included with the Premium Web Package (৳35,000). For standalone UI/UX design, there is no fixed package—a custom quote is provided based on your project.',
        bn: 'Premium Web Package (৳35,000) এর সাথে UI/UX ডিজাইন অন্তর্ভুক্ত। শুধু UI/UX ডিজাইনের জন্য নির্দিষ্ট প্যাকেজ নেই। প্রজেক্ট অনুযায়ী custom quote দেওয়া হয়।',
      },
    },
    pricingSection: {
      title: { en: 'Pricing', bn: 'মূল্য' },
      bullets: [
        {
          en: 'UI/UX design is included with the Premium Web Package (৳35,000).',
          bn: 'Premium Web Package (৳35,000) এর সাথে UI/UX ডিজাইন অন্তর্ভুক্ত।',
        },
        {
          en: 'There is no fixed package for UI/UX-only design. A custom quote is provided based on the project.',
          bn: 'শুধু UI/UX ডিজাইনের জন্য নির্দিষ্ট প্যাকেজ নেই। প্রজেক্ট অনুযায়ী custom quote দেওয়া হয়।',
        },
      ],
    },
    relatedPackage: {
      name: { en: 'Premium Package (৳35,000)', bn: 'Premium প্যাকেজ (৳35,000)' },
      href: '/pricing',
    },
    faqs: [
      {
        id: 'uiux-faq-1',
        question: {
          en: 'Can I get only the design done without development?',
          bn: 'শুধু ডিজাইন করানো যাবে, ডেভেলপমেন্ট ছাড়া?',
        },
        answer: {
          en: 'Yes, though a separate custom quote is provided for that. Share your needs in the consultation.',
          bn: 'হ্যাঁ, তবে এর জন্য আলাদা custom quote দেওয়া হয়। কনসালটেশনে আপনার প্রয়োজন জানান।',
        },
      },
      {
        id: 'uiux-faq-2',
        question: {
          en: 'Is design included in the Premium package?',
          bn: 'Premium প্যাকেজে ডিজাইন আছে?',
        },
        answer: {
          en: 'Yes. UI/UX design is included in the Premium Web Package. It is not included in the Basic package.',
          bn: 'হ্যাঁ। Premium Web Package এ UI/UX ডিজাইন অন্তর্ভুক্ত। Basic প্যাকেজে এটি নেই।',
        },
      },
    ],
    ctaText: SHARED_SERVICE_CTA,
  },
  {
    slug: 'ecommerce-solutions',
    icon: 'shopping-bag',
    title: {
      en: 'E-commerce Solutions',
      bn: 'ই-কমার্স সমাধান',
    },
    shortDescription: {
      en: 'Complete online store development built for fast mobile shopping.',
      bn: 'মোবাইল-দ্রুত কেনাকাটার উপযোগী সম্পূর্ণ অনলাইন স্টোর ডেভেলপমেন্ট।',
    },
    heroDescription: {
      en: 'Complete online store development tailored for fast mobile shopping.',
      bn: 'মোবাইল-দ্রুত কেনাকাটার উপযোগী সম্পূর্ণ অনলাইন স্টোর ডেভেলপমেন্ট।',
    },
    overview: [
      {
        en: 'To start selling products online or take an existing business digital, you need a fast, reliable, and user-friendly online store. Stack Dev builds complete e-commerce stores where shoppers can easily browse products and complete purchases quickly from mobile.',
        bn: 'অনলাইনে পণ্য বিক্রি শুরু করতে বা বিদ্যমান ব্যবসাকে অনলাইনে নিয়ে যেতে দরকার একটি দ্রুত, নির্ভরযোগ্য এবং ব্যবহারবান্ধব অনলাইন স্টোর। Stack Dev আপনার জন্য তৈরি করে সম্পূর্ণ e-commerce স্টোর, যেখানে ক্রেতা সহজে পণ্য খুঁজে পান, মোবাইল থেকেই দ্রুত কেনাকাটা করতে পারেন।',
      },
      {
        en: 'We work with a mobile-first approach because the majority of today’s shoppers buy directly from mobile devices.',
        bn: 'আমরা mobile-first পদ্ধতিতে কাজ করি, কারণ আজকের ক্রেতাদের বড় অংশ মোবাইল থেকেই কেনাকাটা করেন।',
      },
    ],
    bullets: [
      { en: 'Product catalog & category management', bn: 'প্রোডাক্ট ক্যাটালগ ও ক্যাটাগরি ম্যানেজমেন্ট' },
      { en: 'Mobile-first shopping experience', bn: 'মোবাইল-ফার্স্ট শপিং অভিজ্ঞতা' },
      { en: 'SEO-friendly store structure', bn: 'SEO-friendly স্টোর কাঠামো' },
    ],
    whatYouGet: [
      {
        en: 'Product catalog and category management',
        bn: 'প্রোডাক্ট ক্যাটালগ ও ক্যাটাগরি ম্যানেজমেন্ট',
      },
      {
        en: 'Mobile-first shopping experience',
        bn: 'মোবাইল-ফার্স্ট শপিং অভিজ্ঞতা',
      },
      {
        en: 'SEO-friendly store structure',
        bn: 'SEO-friendly স্টোর কাঠামো',
      },
      {
        en: 'Fast-loading and responsive design',
        bn: 'দ্রুত-লোডিং ও responsive ডিজাইন',
      },
      {
        en: 'Store features tailored to your business needs',
        bn: 'আপনার ব্যবসার প্রয়োজন অনুযায়ী স্টোর ফিচার',
      },
      {
        en: 'Direct communication with the founder from design to delivery',
        bn: 'ডিজাইন থেকে ডেলিভারি পর্যন্ত সরাসরি founder এর সাথে যোগাযোগ',
      },
    ],
    whoItsFor: [
      {
        en: 'Entrepreneurs looking to sell products online for the first time',
        bn: 'অনলাইনে প্রথমবার পণ্য বিক্রি করতে চাওয়া উদ্যোক্তা',
      },
      {
        en: 'Shops or brands looking to bring an offline business online',
        bn: 'অফলাইন ব্যবসাকে অনলাইনে আনতে চাওয়া দোকান বা ব্র্যান্ড',
      },
      {
        en: 'Businesses wanting their own dedicated online store',
        bn: 'নিজস্ব স্টোর চাওয়া ব্যবসা',
      },
    ],
    processSteps: [
      {
        number: '01.',
        title: {
          en: 'Consultation',
          bn: 'কনসালটেশন',
        },
        description: {
          en: 'FREE discussion about your products, business, and goals.',
          bn: 'আপনার পণ্য, ব্যবসা ও লক্ষ্য নিয়ে FREE আলোচনা',
        },
      },
      {
        number: '02.',
        title: {
          en: 'Requirement Definition',
          bn: 'প্রয়োজন নির্ধারণ',
        },
        description: {
          en: 'Understanding store features, product types, timeline, and budget.',
          bn: 'স্টোরের ফিচার, পণ্যের ধরন, সময় ও বাজেট জানা',
        },
      },
      {
        number: '03.',
        title: {
          en: 'Custom Quote',
          bn: 'Custom quote',
        },
        description: {
          en: 'Project-specific pricing and timeline proposal.',
          bn: 'প্রজেক্ট অনুযায়ী মূল্য ও সময়ের প্রস্তাব',
        },
      },
      {
        number: '04.',
        title: {
          en: 'Design & Development',
          bn: 'ডিজাইন ও ডেভেলপমেন্ট',
        },
        description: {
          en: 'Building your online store.',
          bn: 'স্টোর তৈরি',
        },
      },
      {
        number: '05.',
        title: {
          en: 'Revision & Delivery',
          bn: 'Revision ও ডেলিভারি',
        },
        description: {
          en: 'Refining based on feedback and handing over the store.',
          bn: 'মতামত অনুযায়ী পরিবর্তন করে স্টোর হস্তান্তর',
        },
      },
    ],
    pricingNote: {
      label: { en: 'Pricing', bn: 'মূল্য' },
      highlight: {
        en: 'Custom quote after FREE consultation',
        bn: 'FREE কনসালটেশনের পরে custom quote',
      },
      summary: {
        en: 'There are no fixed packages for e-commerce stores. A custom quote is provided after a FREE consultation based on store features, product types, and complexity.',
        bn: 'E-commerce স্টোরের জন্য নির্দিষ্ট প্যাকেজ নেই। স্টোরের ফিচার, পণ্যের ধরন ও জটিলতা অনুযায়ী FREE কনসালটেশনের পরে custom quote দেওয়া হয়।',
      },
    },
    pricingSection: {
      title: { en: 'Pricing', bn: 'মূল্য' },
      paragraphs: [
        {
          en: 'There are no fixed packages for e-commerce stores. A custom quote is provided after a FREE consultation based on store features, product types, and complexity.',
          bn: 'E-commerce স্টোরের জন্য নির্দিষ্ট প্যাকেজ নেই। স্টোরের ফিচার, পণ্যের ধরন ও জটিলতা অনুযায়ী FREE কনসালটেশনের পরে custom quote দেওয়া হয়।',
        },
      ],
    },
    relatedPackage: {
      name: { en: 'Request Custom Quote', bn: 'Custom quote নিন' },
      href: '/contact',
    },
    faqs: [
      {
        id: 'ecom-faq-1',
        question: {
          en: 'How much does it cost to build an online store?',
          bn: 'অনলাইন স্টোর বানাতে কত খরচ?',
        },
        answer: {
          en: 'It depends on your needs. Once you share your features, timeline, and budget, we will provide a custom quote.',
          bn: 'এটি আপনার প্রয়োজনের ওপর নির্ভর করে। ফিচার, সময়সীমা ও বাজেট জানালে আমরা custom quote দেব।',
        },
      },
      {
        id: 'ecom-faq-2',
        question: {
          en: 'Will the store run smoothly on mobile?',
          bn: 'স্টোর মোবাইলে সুন্দরভাবে চলবে?',
        },
        answer: {
          en: 'Yes. A mobile-first shopping experience is our priority.',
          bn: 'হ্যাঁ। মোবাইল-ফার্স্ট শপিং অভিজ্ঞতা আমাদের অগ্রাধিকার।',
        },
      },
    ],
    ctaText: SHARED_SERVICE_CTA,
  },
  {
    slug: 'web-applications',
    icon: 'app-window',
    title: {
      en: 'Web Applications',
      bn: 'ওয়েব অ্যাপ্লিকেশন',
    },
    shortDescription: {
      en: 'Custom automation tools and interactive web software tailored to your business workflow.',
      bn: 'ব্যবসার কাজের উপযোগী কাস্টম অটোমেশন টুলস ও ইন্টারঅ্যাক্টিভ ওয়েব সফটওয়্যার।',
    },
    heroDescription: {
      en: 'Custom automation tools and interactive web software tailored to how your business works.',
      bn: 'ব্যবসার কাজের উপযোগী কাস্টম অটোমেশন টুলস ও ইন্টারঅ্যাক্টিভ ওয়েব সফটওয়্যার।',
    },
    overview: [
      {
        en: 'Every business operates differently, and ready-made software does not always fit your exact needs. Stack Dev builds custom web applications aligned with your workflow, automating repetitive tasks and simplifying business management.',
        bn: 'প্রতিটি ব্যবসার কাজের ধরন আলাদা। রেডিমেড সফটওয়্যার সবসময় আপনার প্রয়োজন মেটায় না। Stack Dev আপনার কাজের ধরন অনুযায়ী তৈরি করে কাস্টম web application, যা বারবার করতে হয় এমন কাজ স্বয়ংক্রিয় করে এবং ব্যবসার ম্যানেজমেন্ট সহজ করে।',
      },
      {
        en: 'We design and develop the entire system ourselves—from front-end to back-end and database—so your application not only runs smoothly but stays easy to scale and maintain in the future.',
        bn: 'আমরা front-end থেকে back-end ও database পর্যন্ত পুরো সিস্টেম নিজেরাই ডিজাইন ও ডেভেলপ করি, যাতে অ্যাপ্লিকেশন শুধু চলে না, ভবিষ্যতে বড় করা ও রক্ষণাবেক্ষণও সহজ হয়।',
      },
    ],
    bullets: [
      { en: 'Custom web software tailored to your workflow', bn: 'আপনার কাজের ধরন অনুযায়ী তৈরি custom ওয়েব সফটওয়্যার' },
      { en: 'Clean and intuitive dashboard', bn: 'পরিচ্ছন্ন ও সহজ ড্যাশবোর্ড' },
      { en: 'Fast and scalable architecture', bn: 'দ্রুত ও scalable আর্কিটেকচার' },
    ],
    whatYouGet: [
      {
        en: 'Custom web software tailored to how your business works',
        bn: 'আপনার কাজের ধরন অনুযায়ী তৈরি custom ওয়েব সফটওয়্যার',
      },
      {
        en: 'Clean and easy-to-use dashboard',
        bn: 'পরিচ্ছন্ন ও সহজ ড্যাশবোর্ড',
      },
      {
        en: 'Fast and scalable architecture',
        bn: 'দ্রুত ও scalable আর্কিটেকচার',
      },
      {
        en: 'Well-structured database and API-driven back-end',
        bn: 'সুগঠিত database ও API ভিত্তিক back-end',
      },
      {
        en: 'Tools to automate repetitive business tasks',
        bn: 'ব্যবসার বারবার করা কাজ স্বয়ংক্রিয় করার টুলস',
      },
      {
        en: 'Architecture designed for easy maintenance and future expansion',
        bn: 'রক্ষণাবেক্ষণ ও সম্প্রসারণ সহজ হওয়ার মতো কাঠামো',
      },
    ],
    whoItsFor: [
      {
        en: 'Businesses needing custom management or automation tools',
        bn: 'নিজস্ব ম্যানেজমেন্ট বা অটোমেশন টুল দরকার এমন ব্যবসা',
      },
      {
        en: 'Startups seeking a web platform with custom features',
        bn: 'কাস্টম ফিচারসহ ওয়েব প্ল্যাটফর্ম চাওয়া Startup',
      },
      {
        en: 'Organizations looking to digitize existing workflows',
        bn: 'বিদ্যমান কাজের প্রক্রিয়া ডিজিটাল করতে চাওয়া প্রতিষ্ঠান',
      },
    ],
    processSteps: [
      {
        number: '01.',
        title: {
          en: 'Consultation',
          bn: 'কনসালটেশন',
        },
        description: {
          en: 'Understanding your workflow and challenges.',
          bn: 'আপনার কাজের প্রক্রিয়া ও সমস্যা বোঝা',
        },
      },
      {
        number: '02.',
        title: {
          en: 'Requirement Definition',
          bn: 'Requirement নির্ধারণ',
        },
        description: {
          en: 'Identifying required features, timeline, and budget.',
          bn: 'প্রয়োজনীয় ফিচার, সময় ও বাজেট জানা',
        },
      },
      {
        number: '03.',
        title: {
          en: 'Package or Custom Quote',
          bn: 'প্যাকেজ বা Custom quote',
        },
        description: {
          en: 'Pricing proposal tailored to your needs.',
          bn: 'প্রয়োজন অনুযায়ী মূল্যের প্রস্তাব',
        },
      },
      {
        number: '04.',
        title: {
          en: 'Design & Development',
          bn: 'ডিজাইন ও ডেভেলপমেন্ট',
        },
        description: {
          en: 'Building the complete system.',
          bn: 'সিস্টেম তৈরি',
        },
      },
      {
        number: '05.',
        title: {
          en: 'Revision & Delivery',
          bn: 'Revision ও ডেলিভারি',
        },
        description: {
          en: 'Refining based on feedback and handing over.',
          bn: 'মতামত অনুযায়ী পরিবর্তন করে হস্তান্তর',
        },
      },
    ],
    pricingNote: {
      label: { en: 'Pricing', bn: 'মূল্য' },
      highlight: {
        en: 'Premium Package (৳35,000) or custom quote',
        bn: 'Premium Package (৳35,000) অথবা custom quote',
      },
      summary: {
        en: 'The Premium Package (৳35,000) may fit custom web apps needing custom backend/CMS integration. Complex web applications beyond the Premium scope receive a project-specific custom quote.',
        bn: 'Custom web app এর জন্য Premium Package (৳35,000) উপযুক্ত হতে পারে, যেখানে custom backend/CMS integration আছে। এর বাইরের জটিল web application এর জন্য প্রজেক্ট অনুযায়ী custom quote দেওয়া হয়।',
      },
    },
    pricingSection: {
      title: { en: 'Pricing', bn: 'মূল্য' },
      bullets: [
        {
          en: 'For a custom web app, the Premium Package (৳35,000) may be suitable, including custom backend/CMS integration.',
          bn: 'Custom web app এর জন্য Premium Package (৳35,000) উপযুক্ত হতে পারে, যেখানে custom backend/CMS integration আছে।',
        },
        {
          en: 'For complex web applications beyond the Premium package scope, a project-specific custom quote is provided.',
          bn: 'Premium প্যাকেজের পরিধির বাইরের জটিল web application এর জন্য প্রজেক্ট অনুযায়ী custom quote দেওয়া হয়।',
        },
      ],
      paragraphs: [
        {
          en: 'We will discuss your requirements during the consultation and recommend the right path for your needs.',
          bn: 'আপনার প্রয়োজন কোন ধরনের, তা কনসালটেশনে আলোচনা করে আমরা সঠিক পথ জানাব।',
        },
      ],
    },
    relatedPackage: {
      name: { en: 'Premium Package (৳35,000)', bn: 'Premium প্যাকেজ (৳35,000)' },
      href: '/pricing',
    },
    faqs: [
      {
        id: 'webapp-faq-1',
        question: {
          en: 'Can a web app be built for my business?',
          bn: 'আমার ব্যবসার জন্য কি web app বানানো সম্ভব?',
        },
        answer: {
          en: 'Once we hear about your workflow, we can advise what kind of solution fits best. Discuss it in a FREE consultation.',
          bn: 'আপনার কাজের প্রক্রিয়া শুনে আমরা বলতে পারব কী ধরনের সমাধান উপযুক্ত। FREE কনসালটেশনে আলোচনা করুন।',
        },
      },
      {
        id: 'webapp-faq-2',
        question: {
          en: 'How is the cost determined?',
          bn: 'খরচ কীভাবে নির্ধারিত হয়?',
        },
        answer: {
          en: 'If requirements are straightforward, it may fit the Premium package. If more complex, a custom quote is provided based on features, timeline, and budget.',
          bn: 'প্রয়োজন সাধারণ হলে Premium প্যাকেজে হতে পারে। জটিল হলে ফিচার, সময় ও বাজেট অনুযায়ী custom quote দেওয়া হয়।',
        },
      },
    ],
    ctaText: SHARED_SERVICE_CTA,
  },
  {
    slug: 'portfolio-websites',
    icon: 'briefcase',
    title: {
      en: 'Portfolio Websites',
      bn: 'পোর্টফোলিও ওয়েবসাইট',
    },
    shortDescription: {
      en: 'Personal portfolio sites for professionals, developers, students, and creatives.',
      bn: 'প্রফেশনাল, ডেভেলপার, শিক্ষার্থী ও ক্রিয়েটিভদের জন্য ব্যক্তিগত পোর্টফোলিও সাইট।',
    },
    heroDescription: {
      en: 'Personal portfolio sites for professionals, developers, students, and creatives.',
      bn: 'প্রফেশনাল, ডেভেলপার, শিক্ষার্থী ও ক্রিয়েটিভদের জন্য ব্যক্তিগত পোর্টফোলিও সাইট।',
    },
    overview: [
      {
        en: 'Your work is your identity. A professional portfolio website brings together your projects, skills, and personality in one place and sets you apart in front of clients, employers, or collaborators.',
        bn: 'আপনার কাজই আপনার পরিচয়। একটি প্রফেশনাল Portfolio ওয়েবসাইট আপনার কাজ, দক্ষতা ও ব্যক্তিত্ব এক জায়গায় তুলে ধরে এবং ক্লায়েন্ট, নিয়োগকর্তা বা সহযোগীদের কাছে আপনাকে আলাদা করে চেনায়।',
      },
      {
        en: 'Stack Dev designs custom portfolio sites tailored to your brand and vision—fast, fully responsive, and SEO-optimized.',
        bn: 'Stack Dev আপনার ব্র্যান্ড ও ভিশনের সাথে মিলিয়ে তৈরি করে দেয় custom ডিজাইনের পোর্টফোলিও, যা দ্রুত, সম্পূর্ণ responsive এবং SEO-optimized।',
      },
    ],
    bullets: [
      { en: 'Starting around 2,000 BDT', bn: 'শুরু মাত্র প্রায় ২,০০০ টাকা থেকে' },
      { en: 'Fast, responsive personal layout', bn: 'মোবাইল ও ওয়েব উভয়ের জন্য সম্পূর্ণ responsive' },
      { en: 'SEO-optimized structure', bn: 'দ্রুত, আধুনিক ও SEO-optimized কাঠামো' },
    ],
    whatYouGet: [
      {
        en: 'Custom design aligned with your brand and vision',
        bn: 'আপনার ব্র্যান্ড ও ভিশনের সাথে মানানসই custom ডিজাইন',
      },
      {
        en: 'Fully responsive across both mobile and web',
        bn: 'মোবাইল ও ওয়েব উভয়ের জন্য সম্পূর্ণ responsive',
      },
      {
        en: 'Fast, modern, and SEO-optimized structure',
        bn: 'দ্রুত, আধুনিক ও SEO-optimized কাঠামো',
      },
      {
        en: 'Project Showcase section',
        bn: 'Project Showcase সেকশন',
      },
      {
        en: 'About Me section',
        bn: 'About Me সেকশন',
      },
      {
        en: 'Contact section, all in one place',
        bn: 'Contact সেকশন, সবকিছু এক জায়গায়',
      },
    ],
    whoItsFor: [
      {
        en: 'Developers looking to showcase their work',
        bn: 'নিজের কাজ দেখাতে চাওয়া ডেভেলপার',
      },
      {
        en: 'Students needing a portfolio for jobs or internships',
        bn: 'চাকরি বা ইন্টার্নশিপের জন্য Portfolio দরকার এমন শিক্ষার্থী',
      },
      {
        en: 'Creative professionals including designers, photographers, and writers',
        bn: 'ডিজাইনার, ফটোগ্রাফার, লেখকসহ ক্রিয়েটিভ প্রফেশনাল',
      },
      {
        en: 'Freelancers and consultants',
        bn: 'ফ্রিল্যান্সার ও কনসালট্যান্ট',
      },
    ],
    whoItsForNote: {
      en: 'Especially in Dhaka and across Bangladesh.',
      bn: 'বিশেষ করে ঢাকা এবং সারা বাংলাদেশে।',
    },
    processSteps: [
      {
        number: '01.',
        title: {
          en: 'Contact',
          bn: 'যোগাযোগ',
        },
        description: {
          en: 'Share your needs over Messenger or phone.',
          bn: 'Messenger বা ফোনে আপনার প্রয়োজন জানান',
        },
      },
      {
        number: '02.',
        title: {
          en: 'Requirement Definition',
          bn: 'Requirement নির্ধারণ',
        },
        description: {
          en: 'Understanding your work, brand, and preferences.',
          bn: 'আপনার কাজ, ব্র্যান্ড ও পছন্দ বোঝা',
        },
      },
      {
        number: '03.',
        title: {
          en: 'Price Confirmation',
          bn: 'মূল্য নিশ্চিতকরণ',
        },
        description: {
          en: 'Sharing final price and timeline based on requirements.',
          bn: 'প্রয়োজন অনুযায়ী চূড়ান্ত মূল্য ও সময় জানানো',
        },
      },
      {
        number: '04.',
        title: {
          en: 'Development',
          bn: 'ডেভেলপমেন্ট',
        },
        description: {
          en: 'Building your portfolio website.',
          bn: 'আপনার পোর্টফোলিও তৈরি',
        },
      },
      {
        number: '05.',
        title: {
          en: 'Delivery',
          bn: 'ডেলিভারি',
        },
        description: {
          en: 'Handing over your finished site.',
          bn: 'আপনার হাতে সাইট হস্তান্তর',
        },
      },
    ],
    pricingNote: {
      label: { en: 'Pricing', bn: 'মূল্য' },
      highlight: {
        en: 'Starting around 2,000 BDT',
        bn: 'শুরু মাত্র প্রায় ২,০০০ টাকা থেকে',
      },
      summary: {
        en: 'Affordable pricing and fast delivery. The final price is determined according to your requirements, so talk to us to confirm.',
        bn: 'সাশ্রয়ী মূল্য ও দ্রুত ডেলিভারি। চূড়ান্ত মূল্য আপনার প্রয়োজন অনুযায়ী নির্ধারিত হবে, তাই আমাদের সাথে কথা বলে নিশ্চিত হয়ে নিন।',
      },
    },
    pricingSection: {
      title: { en: 'Pricing', bn: 'মূল্য' },
      highlight: {
        en: 'Starting around 2,000 BDT',
        bn: 'শুরু মাত্র প্রায় ২,০০০ টাকা থেকে',
      },
      paragraphs: [
        {
          en: 'Affordable pricing and fast delivery. Final pricing will be determined according to your needs, so talk with us to confirm.',
          bn: 'সাশ্রয়ী মূল্য ও দ্রুত ডেলিভারি। চূড়ান্ত মূল্য আপনার প্রয়োজন অনুযায়ী নির্ধারিত হবে, তাই আমাদের সাথে কথা বলে নিশ্চিত হয়ে নিন।',
        },
      ],
    },
    relatedPackage: {
      name: { en: 'Portfolio Website Package', bn: 'পোর্টফোলিও ওয়েবসাইট প্যাকেজ' },
      href: '/pricing',
    },
    faqs: [
      {
        id: 'port-faq-1',
        question: {
          en: 'How much does it cost to build a portfolio?',
          bn: 'Portfolio বানাতে কত খরচ?',
        },
        answer: {
          en: 'Starting price is around ৳2,000. The final price is confirmed according to your requirements.',
          bn: 'শুরুর মূল্য প্রায় ৳2,000। আপনার প্রয়োজন অনুযায়ী চূড়ান্ত মূল্য নিশ্চিত করা হবে।',
        },
      },
      {
        id: 'port-faq-2',
        question: {
          en: 'Can students or beginners also get one made?',
          bn: 'শিক্ষার্থী বা নতুনরাও কি করাতে পারবেন?',
        },
        answer: {
          en: 'Definitely. This service is specifically designed for students, developers, and creative professionals.',
          bn: 'অবশ্যই। শিক্ষার্থী, ডেভেলপার ও ক্রিয়েটিভ প্রফেশনালদের জন্যই এই সার্ভিস।',
        },
      },
      {
        id: 'port-faq-3',
        question: {
          en: 'Will it look good on mobile?',
          bn: 'মোবাইলে দেখতে ঠিক থাকবে?',
        },
        answer: {
          en: 'Yes, the site is fully responsive and looks great on both mobile and desktop.',
          bn: 'হ্যাঁ, সাইটটি সম্পূর্ণ responsive, মোবাইল ও ওয়েব দুই জায়গাতেই ভালো দেখাবে।',
        },
      },
    ],
    ctaText: SHARED_SERVICE_CTA,
  },
];

export function getServiceBySlug(slug: string | undefined): ServiceItem | undefined {
  if (!slug) {
    return undefined;
  }
  return SERVICES.find((service) => service.slug === slug);
}

export function pickLocalized(text: LocalizedText, locale: Locale): string {
  return text[locale];
}
