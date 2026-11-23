import type { Locale } from '@/src/i18n';
import type { BlogPost } from './posts';
import type { ProjectSlug } from './projects';
import type { LocalizedText, ServiceSlug } from './services';

export interface SeoMeta {
  title: LocalizedText;
  description: LocalizedText;
}

export const SITE_URL = 'https://stackdev.tech';
export const DEFAULT_OG_IMAGE = '/og-image.png';

export type StaticSeoKey =
  | 'home'
  | 'services'
  | 'pricing'
  | 'work'
  | 'about'
  | 'blog'
  | 'contact'
  | 'faq'
  | 'privacy'
  | 'terms'
  | 'refund'
  | 'portalLogin'
  | 'portalDashboard'
  | 'styleguide'
  | 'notFound';

export const STATIC_SEO: Record<StaticSeoKey, SeoMeta> = {
  home: {
    title: {
      en: 'Stack Dev | Web & Flutter App Development in Bangladesh',
      bn: 'Stack Dev | বাংলাদেশে ওয়েব ও Flutter অ্যাপ ডেভেলপমেন্ট',
    },
    description: {
      en: 'Stack Dev builds fast websites, Flutter mobile apps, and clean UI/UX designs in Bangladesh with transparent pricing, 7-day Basic delivery, and direct support.',
      bn: 'Stack Dev বাংলাদেশে দ্রুতগতির ওয়েবসাইট, Flutter মোবাইল অ্যাপ ও UI/UX ডিজাইন তৈরি করে—স্বচ্ছ মূল্য, ৭ দিনে Basic ডেলিভারি এবং ফ্রি কনসালটেশনসহ। আজই শুরু করুন।',
    },
  },
  services: {
    title: {
      en: 'Web, Flutter App & UI/UX Services | Stack Dev Bangladesh',
      bn: 'ওয়েব, Flutter অ্যাপ ও UI/UX ডিজাইন সেবা | Stack Dev',
    },
    description: {
      en: 'Explore Stack Dev services: custom websites, Flutter iOS and Android apps, UI/UX design, e-commerce stores, business web apps, and student portfolio websites.',
      bn: 'Stack Dev-এর সেবাসমূহ: কাস্টম ওয়েবসাইট, Flutter iOS ও Android অ্যাপ, UI/UX ডিজাইন, ই-কমার্স স্টোর, ওয়েব অ্যাপ্লিকেশন এবং ব্যক্তিগত পোর্টফোলিও ওয়েবসাইট।',
    },
  },
  pricing: {
    title: {
      en: 'Website Design Price in Bangladesh | Stack Dev Packages',
      bn: 'বাংলাদেশে ওয়েবসাইট তৈরির খরচ ও প্যাকেজ | Stack Dev',
    },
    description: {
      en: 'Compare Stack Dev packages in BDT and USD: Basic 15,000 BDT, Premium 35,000 BDT, Portfolio sites from ~2,000 BDT, and custom quotes for Flutter or stores.',
      bn: 'Stack Dev-এর প্যাকেজ দেখুন: Basic ১৫,০০০ টাকা, Premium ৩৫,০০০ টাকা, পোর্টফোলিও প্রায় ২,০০০ টাকা থেকে এবং Flutter অ্যাপ বা স্টোরের জন্য কাস্টম কোটেশন।',
    },
  },
  work: {
    title: {
      en: 'Selected Web Application Projects & Case Studies | Stack Dev',
      bn: 'ওয়েব অ্যাপ্লিকেশন প্রজেক্ট ও কেস স্টাডি | Stack Dev',
    },
    description: {
      en: 'Review personal and product web applications engineered by Stack Dev using React, TypeScript, Vite, Firebase, Firestore, Google Gen AI SDK, and modern tooling.',
      bn: 'React, TypeScript, Vite, Firebase ও Firestore ব্যবহার করে Stack Dev-এর নির্মিত ব্যক্তিগত এবং প্রোডাক্ট ওয়েব অ্যাপ্লিকেশনগুলোর বাস্তব কেস স্টাডি দেখুন।',
    },
  },
  about: {
    title: {
      en: 'About Stack Dev | Solo Full-Stack Engineer in Dhaka',
      bn: 'Stack Dev সম্পর্কে | সাভার, ঢাকার ফুল-স্ট্যাক ইঞ্জিনিয়ার',
    },
    description: {
      en: 'Meet Khandaker MD Masrurul Islam Ayon, CSE graduate and founder of Stack Dev in Savar, Dhaka. Work directly with the engineer building your web or mobile app.',
      bn: 'পরিচিত হোন Stack Dev-এর ফাউন্ডার খন্দকার মো. মাসরুরুল ইসলাম অয়নের সাথে। সাভার, ঢাকা থেকে সরাসরি ফুল-স্ট্যাক ইঞ্জিনিয়ারের সাথে প্রজেক্ট শুরু করুন আজই।',
    },
  },
  blog: {
    title: {
      en: 'Web & Flutter Guides for Businesses | Stack Dev Blog',
      bn: 'ওয়েবসাইট ও Flutter অ্যাপ গাইড ও প্রাইসিং | Stack Dev ব্লগ',
    },
    description: {
      en: 'Read practical Stack Dev guides covering website design cost in Bangladesh, choosing Flutter vs native apps, and launching a student or developer portfolio.',
      bn: 'বাংলাদেশে ওয়েবসাইট তৈরির খরচ, Flutter বনাম নেটিভ অ্যাপ নির্বাচন এবং শিক্ষার্থী হিসেবে পোর্টফোলিও ওয়েবসাইট বানানোর বাস্তবসম্মত ও কার্যকর গাইডগুলো পড়ুন।',
    },
  },
  contact: {
    title: {
      en: 'Book a Free Consultation | Contact Stack Dev Bangladesh',
      bn: 'ফ্রি কনসালটেশন বুক করুন | Stack Dev-এ যোগাযোগ',
    },
    description: {
      en: 'Contact Stack Dev in Savar, Dhaka for a free consultation on your website, Flutter app, or UI/UX project. Call or WhatsApp +880 1963-131282 or send a brief.',
      bn: 'আপনার ওয়েবসাইট, Flutter অ্যাপ বা UI/UX প্রজেক্টের ফ্রি কনসালটেশনের জন্য সাভার, ঢাকার Stack Dev-এ যোগাযোগ করুন। কল বা WhatsApp করুন: +880 1963-131282।',
    },
  },
  faq: {
    title: {
      en: 'Frequently Asked Questions | Stack Dev Bangladesh',
      bn: 'সাধারণ প্রশ্ন ও উত্তর (FAQ) | Stack Dev বাংলাদেশ',
    },
    description: {
      en: 'Find factual answers about Stack Dev web packages, Flutter mobile apps, free consultations, delivery timelines, pricing in BDT, and direct Savar contact info.',
      bn: 'Stack Dev-এর ওয়েব প্যাকেজ, Flutter মোবাইল অ্যাপ, ফ্রি কনসালটেশন, ডেলিভারি সময়সীমা, টাকার মূল্য এবং যোগাযোগের তথ্য সম্পর্কে আপনার প্রশ্নের উত্তর জানুন।',
    },
  },
  privacy: {
    title: {
      en: 'Privacy Policy | Stack Dev Bangladesh',
      bn: 'প্রাইভেসি পলিসি | Stack Dev বাংলাদেশ',
    },
    description: {
      en: 'Learn how Stack Dev collects, uses, and protects contact form inquiries, Client Portal files, and browser preferences without selling your personal data.',
      bn: 'Stack Dev কীভাবে কন্টাক্ট ফর্মের তথ্য, Client Portal ফাইল ও ব্রাউজার পছন্দ নিরাপদে সংরক্ষণ করে এবং কখনো ব্যক্তিগত তথ্য বিক্রি করে না তা বিস্তারিত জানুন।',
    },
  },
  terms: {
    title: {
      en: 'Terms of Service | Stack Dev Software Agency',
      bn: 'সেবার শর্তাবলী (Terms) | Stack Dev বাংলাদেশ',
    },
    description: {
      en: 'Review Stack Dev terms covering free consultations, confirmed project scopes, package revision rounds, client responsibilities, and IP transfer templates.',
      bn: 'Stack Dev-এর ফ্রি কনসালটেশন, প্রজেক্ট স্কোপ চূড়ান্তকরণ, প্যাকেজ রিভিশন রাউন্ড, ক্লায়েন্টের দায়িত্ব ও মেধাস্বত্ব হস্তান্তরের সাধারণ শর্তাবলী পড়ুন এখানে।',
    },
  },
  refund: {
    title: {
      en: 'Refund & Cancellation Policy | Stack Dev Bangladesh',
      bn: 'রিফান্ড ও বাতিলকরণ নীতি | Stack Dev বাংলাদেশ',
    },
    description: {
      en: 'Read Stack Dev template refund and cancellation guidelines for pre-start cancellations, active milestone work, third-party costs, and direct project review.',
      bn: 'Stack Dev-এর প্রজেক্ট বাতিলকরণ ও রিফান্ড সংক্রান্ত খসড়া নীতিমালা—কাজ শুরুর আগের বাতিল, চলমান মাইলস্টোন, তৃতীয় পক্ষের খরচ ও পর্যালোচনার নিয়মগুলো জানুন।',
    },
  },
  portalLogin: {
    title: {
      en: 'Client Portal Login | Stack Dev Project Workspace',
      bn: 'ক্লায়েন্ট পোর্টাল লগইন | Stack Dev প্রজেক্ট ওয়ার্কস্পেস',
    },
    description: {
      en: 'Sign in to the Stack Dev Client Portal to track project milestones, shared deliverables, direct messages, and invoices for your active development project.',
      bn: 'আপনার চলমান প্রজেক্টের মাইলস্টোন, শেয়ার করা ফাইল, সরাসরি মেসেজ এবং ইনভয়েস দেখতে Stack Dev ক্লায়েন্ট পোর্টালে লগইন করে কাজের অগ্রগতি সহজে ট্র্যাক করুন।',
    },
  },
  portalDashboard: {
    title: {
      en: 'Client Portal Workspace | Stack Dev Bangladesh',
      bn: 'ক্লায়েন্ট পোর্টাল ওয়ার্কস্পেস | Stack Dev বাংলাদেশ',
    },
    description: {
      en: 'Access your private Stack Dev Client Portal dashboard to check active development milestones, download files, send messages, and review billing statements.',
      bn: 'আপনার প্রজেক্টের চলমান ধাপ, শেয়ার করা ফাইল ডাউনলোড, সরাসরি মেসেজ আদান-প্রদান এবং পেমেন্ট হিসাব দেখতে Stack Dev ক্লায়েন্ট পোর্টাল ওয়ার্কস্পেস ব্যবহার করুন।',
    },
  },
  styleguide: {
    title: {
      en: 'Design System & UI Styleguide | Stack Dev',
      bn: 'ডিজাইন সিস্টেম ও UI স্টাইলগাইড | Stack Dev',
    },
    description: {
      en: 'Internal design tokens, typography hierarchy, color surfaces, and accessible UI component documentation used across Stack Dev web applications and pages.',
      bn: 'Stack Dev-এর ওয়েবসাইটে ব্যবহৃত কালার টোকেন, টাইপোগ্রাফি, বাটন ও অ্যাক্সেসিবল UI কম্পোনেন্টগুলোর অভ্যন্তরীণ ডিজাইন সিস্টেম এবং স্টাইলগাইড নমুনা দেখুন।',
    },
  },
  notFound: {
    title: {
      en: 'Page Not Found (404) | Stack Dev',
      bn: 'পেজ পাওয়া যায়নি (৪০৪) | Stack Dev',
    },
    description: {
      en: 'The page you requested on Stack Dev could not be found. Return to the homepage to explore web development, Flutter apps, pricing, or book a consultation.',
      bn: 'আপনি যে পেজটি খুঁজছেন তা Stack Dev-এ পাওয়া যায়নি। হোমপেজে ফিরে গিয়ে ওয়েব ডেভেলপমেন্ট, Flutter অ্যাপ, প্যাকেজ দেখুন অথবা একটি ফ্রি কনসালটেশন বুক করুন।',
    },
  },
};

export const SERVICE_SEO: Record<ServiceSlug, SeoMeta> = {
  'custom-web-development': {
    title: {
      en: 'Custom Web Development in Bangladesh | Stack Dev',
      bn: 'কাস্টম ওয়েব ডেভেলপমেন্ট সেবা | Stack Dev বাংলাদেশ',
    },
    description: {
      en: 'Fast, responsive, SEO-friendly custom websites from Stack Dev. Basic 5-page package at 15,000 BDT (~$135) or Premium unlimited pages at 35,000 BDT (~$315).',
      bn: 'Stack Dev-এর দ্রুত ও SEO-বান্ধব কাস্টম ওয়েবসাইট। Basic প্যাকেজ ১৫,০০০ টাকা (~$135, ৫ পেজ) ও Premium প্যাকেজ ৩৫,০০০ টাকা (~$315, আনলিমিটেড পেজ) থেকে নিন।',
    },
  },
  'flutter-mobile-apps': {
    title: {
      en: 'Flutter Mobile App Development in Bangladesh | Stack Dev',
      bn: 'Flutter মোবাইল অ্যাপ ডেভেলপমেন্ট | Stack Dev বাংলাদেশ',
    },
    description: {
      en: 'Cross-platform iOS and Android mobile apps built with Flutter and mobile-first UI/UX by Stack Dev in Dhaka. Request a custom quote in a free consultation.',
      bn: 'Stack Dev-এ Flutter দিয়ে iOS ও Android-এর জন্য ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ তৈরি করুন। ফ্রি কনসালটেশনে আপনার অ্যাপের কাস্টম কোটেশন ও সময়সীমা জেনে নিন।',
    },
  },
  'ui-ux-design': {
    title: {
      en: 'UI/UX Design Services for Web & Mobile | Stack Dev',
      bn: 'ওয়েব ও মোবাইল অ্যাপ UI/UX ডিজাইন সেবা | Stack Dev',
    },
    description: {
      en: 'Modern, user-friendly web and mobile UI/UX design focused on clarity, contrast, and responsive layouts. Included in Premium or quoted after consultation.',
      bn: 'স্পষ্টতা ও সহজ ব্যবহারের জন্য আধুনিক ওয়েব ও মোবাইল UI/UX ডিজাইন। Premium প্যাকেজে অন্তর্ভুক্ত অথবা আলাদা কাজের জন্য ফ্রি কনসালটেশনে কাস্টম কোটেশন নিন।',
    },
  },
  'ecommerce-solutions': {
    title: {
      en: 'E-commerce Website Development in Bangladesh | Stack Dev',
      bn: 'ই-কমার্স ওয়েবসাইট ডেভেলপমেন্ট | Stack Dev বাংলাদেশ',
    },
    description: {
      en: 'Complete mobile-first online store development by Stack Dev with clean product catalogs, smooth checkout, and SEO structure. Custom quote after consultation.',
      bn: 'দ্রুত মোবাইল কেনাকাটার উপযোগী ক্যাটালগ, সহজ অর্ডার ফ্লো ও SEO কাঠামোসহ সম্পূর্ণ ই-কমার্স স্টোর ডেভেলপমেন্ট। ফ্রি কনসালটেশনের পর কাস্টম কোটেশন জেনে নিন।',
    },
  },
  'web-applications': {
    title: {
      en: 'Custom Web Applications & Business Tools | Stack Dev',
      bn: 'কাস্টম ওয়েব অ্যাপ্লিকেশন ও অটোমেশন টুল | Stack Dev',
    },
    description: {
      en: 'Tailored business automation tools, client portals, and custom React/backend web applications engineered by Stack Dev. Book a free consultation for a quote.',
      bn: 'ব্যবসার দৈনন্দিন কাজ সহজ করার কাস্টম অটোমেশন টুল, ক্লায়েন্ট পোর্টাল ও ইন্টারঅ্যাক্টিভ ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট। আজই একটি ফ্রি কনসালটেশন বুক করুন।',
    },
  },
  'portfolio-websites': {
    title: {
      en: 'Portfolio Website Design from 2,000 BDT | Stack Dev',
      bn: 'পোর্টফোলিও ওয়েবসাইট তৈরি শুরু ২,০০০ টাকা | Stack Dev',
    },
    description: {
      en: 'Responsive, SEO-optimized personal portfolio websites for professionals, developers, students, and creatives starting around 2,000 BDT from Stack Dev.',
      bn: 'প্রফেশনাল, ডেভেলপার, শিক্ষার্থী ও ক্রিয়েটিভদের জন্য রেসপন্সিভ ও SEO-অপটিমাইজড পোর্টফোলিও ওয়েবসাইট শুরু প্রায় ২,০০০ টাকা থেকে—চাহিদা অনুযায়ী মূল্য।',
    },
  },
};

export const PROJECT_SEO: Record<ProjectSlug, SeoMeta> = {
  'universal-unit-converter': {
    title: {
      en: 'Universal Unit Converter Case Study | Stack Dev Work',
      bn: 'Universal Unit Converter কেস স্টাডি | Stack Dev',
    },
    description: {
      en: 'Case study of Universal Unit Converter, a fast multi-category unit conversion web application built with React 19, TypeScript, Vite, GitHub, and Vercel.',
      bn: 'React 19, TypeScript, Vite, GitHub ও Vercel দিয়ে নির্মিত দ্রুতগতির ও পরিচ্ছন্ন Universal Unit Converter ওয়েব অ্যাপ্লিকেশনের বিস্তারিত কেস স্টাডি পড়ুন।',
    },
  },
  'automated-social-media-ad-creation': {
    title: {
      en: 'Social Media Ad Automation App Case Study | Stack Dev',
      bn: 'সোশ্যাল মিডিয়া অ্যাড অটোমেশন কেস স্টাডি | Stack Dev',
    },
    description: {
      en: 'Case study of Automated Social Media Ad Creation and Management built with React, Vite, TypeScript, Firebase, Firestore, Google Gen AI SDK, and Meta MCP.',
      bn: 'React, Vite, TypeScript, Firebase, Firestore, Google Gen AI SDK ও Meta Remote MCP দিয়ে নির্মিত সোশ্যাল মিডিয়া অ্যাড ম্যানেজমেন্ট অ্যাপের কেস স্টাডি।',
    },
  },
};

export function getBlogPostSeo(post: BlogPost, locale: Locale): { title: string; description: string } {
  const map: Record<string, SeoMeta> = {
    'how-much-does-a-website-cost-in-bangladesh-2026': {
      title: {
        en: 'Website Cost in Bangladesh (2026 Guide) | Stack Dev',
        bn: 'বাংলাদেশে ওয়েবসাইট তৈরির খরচ (২০২৬ গাইড) | Stack Dev',
      },
      description: {
        en: 'Practical 2026 guide to website pricing in Bangladesh: Portfolio sites from ~2,000 BDT, Basic 15,000 BDT, Premium 35,000 BDT, plus custom app quote factors.',
        bn: 'বাংলাদেশে ওয়েবসাইট তৈরির খরচের ২০২৬ গাইড: পোর্টফোলিও ~২,০০০ টাকা, Basic ১৫,০০০ টাকা, Premium ৩৫,০০০ টাকা এবং কাস্টম ওয়েব অ্যাপ কোটেশন সম্পর্কে জানুন।',
      },
    },
    'flutter-vs-native-apps-which-is-right': {
      title: {
        en: 'Flutter vs Native Apps for Your Business | Stack Dev',
        bn: 'Flutter বনাম নেটিভ অ্যাপ: কোনটি সেরা? | Stack Dev',
      },
      description: {
        en: 'Compare cross-platform Flutter apps against separate native Android and iOS builds to choose the right mobile architecture, maintenance path, and budget.',
        bn: 'আপনার ব্যবসার মোবাইল অ্যাপের জন্য ক্রস-প্ল্যাটফর্ম Flutter বনাম আলাদা নেটিভ Android ও iOS ডেভেলপমেন্টের সুবিধা, অসুবিধা এবং সঠিক প্রযুক্তি নির্বাচন জানুন।',
      },
    },
    'how-to-build-a-portfolio-website-as-a-student': {
      title: {
        en: 'How to Build a Student Portfolio Website | Stack Dev',
        bn: 'শিক্ষার্থীর পোর্টফোলিও ওয়েবসাইট গাইড | Stack Dev',
      },
      description: {
        en: 'Learn the four essential sections of a student or developer portfolio website, how to present early projects honestly, and launch fast starting ~2,000 BDT.',
        bn: 'একজন শিক্ষার্থী বা ডেভেলপারের পোর্টফোলিও সাইটে কোন ৪টি সেকশন থাকা জরুরি, কীভাবে প্রজেক্ট সাজাবেন ও প্রায় ২,০০০ টাকা থেকে শুরু করবেন তা বিস্তারিত জানুন।',
      },
    },
  };

  const entry = map[post.slug];
  if (entry) {
    return {
      title: entry.title[locale],
      description: entry.description[locale],
    };
  }

  return {
    title: post.title[locale].slice(0, 60),
    description: post.excerpt[locale].slice(0, 160),
  };
}
