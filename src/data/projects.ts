import type { Locale } from '@/src/i18n';
import type { LocalizedText } from './services';

export type ProjectSlug =
  | 'universal-unit-converter'
  | 'automated-social-media-ad-creation';

export interface ProjectItem {
  slug: ProjectSlug;
  thumbnailVariant: 'converter' | 'ad-automation';
  thumbnailSrc: string;
  title: LocalizedText;
  category: LocalizedText;
  shortDescription: LocalizedText;
  techStack: string[];
  // Leave empty string until deployed; button is hidden automatically when empty.
  liveDemoUrl: string;
  // Leave empty string until public repository URL is ready; button is hidden automatically when empty.
  githubUrl: string;
  caseStudy: {
    overview: LocalizedText;
    problem: LocalizedText;
    solution: LocalizedText;
    keyFeatures: LocalizedText[];
    resultPlaceholder: LocalizedText;
  };
}

export const PROJECTS: ProjectItem[] = [
  {
    slug: 'universal-unit-converter',
    thumbnailVariant: 'converter',
    thumbnailSrc: '/assets/aistudio/Universal_Unit_Converter_72a26f8b.jpg',
    title: {
      en: 'Universal Unit Converter',
      bn: 'Universal Unit Converter',
    },
    category: {
      en: 'Web Application',
      bn: 'ওয়েব অ্যাপ্লিকেশন',
    },
    shortDescription: {
      en: 'High-precision unit conversions across 60 categories and 1,416 total units, built with modern React and TypeScript.',
      bn: '৬০টি ক্যাটাগরি ও ১,৪১৬টি ইউনিটসহ আধুনিক React ও TypeScript দিয়ে তৈরি দ্রুতগতির ও নির্ভুল ইউনিট কনভার্টার ওয়েব অ্যাপ্লিকেশন।',
    },
    techStack: ['React 19', 'TypeScript', 'Vite', 'GitHub', 'Vercel'],
    liveDemoUrl: 'https://unitconverter-smoky-eight.vercel.app/',
    githubUrl: '',
    caseStudy: {
      overview: {
        en: 'Universal Unit Converter is a personal web application focused on fast, high-precision unit conversion across 60 measurement categories and 1,416 units for engineering and everyday use.',
        bn: 'Universal Unit Converter একটি ব্যক্তিগত ওয়েব অ্যাপ্লিকেশন, যা ইঞ্জিনিয়ারিং ও দৈনন্দিন ব্যবহারের জন্য ৬০টি ক্যাটাগরি এবং ১,৪১৬টি ইউনিটে দ্রুত ও নির্ভুল রূপান্তরের জন্য তৈরি।',
      },
      problem: {
        en: 'Many online unit converters are overloaded with ads, slow page reloads, and confusing layouts—especially on mobile screens when someone needs a quick conversion.',
        bn: 'অনলাইনে থাকা অনেক ইউনিট কনভার্টার বিজ্ঞাপন, ধীরগতির লোডিং এবং অগোছালো লেআউটের কারণে মোবাইলে দ্রুত ব্যবহারের ক্ষেত্রে বিরক্তিকর হয়ে ওঠে।',
      },
      solution: {
        en: 'Built a lightweight single-page web application with React 19, TypeScript, and Vite so conversions happen instantly on the client with searchable categories, pinned favorites, conversion formulas, and a unit scale visualizer.',
        bn: 'React 19, TypeScript এবং Vite ব্যবহার করে একটি হালকা ও দ্রুতগতির ওয়েব অ্যাপ্লিকেশন তৈরি করা হয়েছে, যেখানে সার্চযোগ্য ক্যাটাগরি, পিনড ফেভারিট, কনভার্শন ফর্মুলা ও ইউনিট স্কেল ভিজ্যুয়ালাইজারসহ তাৎক্ষণিক রূপান্তর করা যায়।',
      },
      keyFeatures: [
        {
          en: 'High-precision conversion across 60 categories and 1,416 units',
          bn: '৬০টি ক্যাটাগরি এবং ১,৪১৬টি ইউনিটে নির্ভুল কনভার্শন সুবিধা',
        },
        {
          en: 'Instant conversion formula display and interactive unit scale visualizer',
          bn: 'তাৎক্ষণিক কনভার্শন ফর্মুলা প্রদর্শন ও ইউনিট স্কেল ভিজ্যুয়ালাইজার',
        },
        {
          en: 'Mobile-first responsive layout with search and pinned favorites',
          bn: 'সার্চ ও পিনড ফেভারিটসহ মোবাইল-ফার্স্ট রেসপন্সিভ লেআউট',
        },
        {
          en: 'Live production deployment on Vercel',
          bn: 'Vercel-এ লাইভ প্রোডাকশন ডিপ্লয়মেন্ট',
        },
      ],
      resultPlaceholder: {
        en: 'Live in production on Vercel, delivering instant client-side conversions across 60 categories and 1,416 total units.',
        bn: 'Vercel-এ লাইভ প্রোডাকশনে চালু রয়েছে, যেখানে ৬০টি ক্যাটাগরি এবং ১,৪১৬টি ইউনিটে তাৎক্ষণিক ক্লায়েন্ট-সাইড কনভার্শন সুবিধা পাওয়া যাচ্ছে।',
      },
    },
  },
  {
    slug: 'automated-social-media-ad-creation',
    thumbnailVariant: 'ad-automation',
    thumbnailSrc: '/assets/aistudio/Adcraft_ca461f58.jpg',
    title: {
      en: 'Automated Social Media Ad Creation and Management',
      bn: 'Automated Social Media Ad Creation and Management',
    },
    category: {
      en: 'Web Application',
      bn: 'ওয়েব অ্যাপ্লিকেশন',
    },
    shortDescription: {
      en: 'AdCraft AI is a web-based application designed to automate end-to-end social media advertising for small businesses, startups, and content creators.',
      bn: 'AdCraft AI ছোট ব্যবসা, স্টার্টআপ ও কনটেন্ট ক্রিয়েটরদের সোশ্যাল মিডিয়া অ্যাড তৈরি ও ব্যবস্থাপনা স্বয়ংক্রিয় করার ওয়েব অ্যাপ্লিকেশন।',
    },
    techStack: [
      'React',
      'Vite',
      'TypeScript',
      'Firebase',
      'Firestore',
      'Google Gen AI SDK',
      'Meta Remote MCP',
    ],
    liveDemoUrl: '',
    githubUrl: 'https://github.com/masrurulislam01/Adcraft',
    caseStudy: {
      overview: {
        en: 'AdCraft AI is a product-focused web application built to automate end-to-end social media ad drafting, creative generation, asset organization, and campaign management in one unified studio.',
        bn: 'AdCraft AI একটি প্রোডাক্ট-কেন্দ্রিক ওয়েব অ্যাপ্লিকেশন, যা সোশ্যাল মিডিয়া অ্যাড ড্রাফটিং, ক্রিয়েটিভ তৈরি, অ্যাসেট সংরক্ষণ এবং ক্যাম্পেইন ব্যবস্থাপনা এক জায়গায় সহজ করার জন্য নির্মিত।',
      },
      problem: {
        en: 'Preparing ad copy variations, keeping campaign records organized, and coordinating publishing steps across disconnected tools creates repetitive manual overhead.',
        bn: 'আলাদা আলাদা টুলে অ্যাডের লেখা তৈরি করা, ক্যাম্পেইনের তথ্য সংরক্ষণ করা এবং পাবলিশিং ধাপগুলো সমন্বয় করা সময়সাপেক্ষ ও জটিল হয়ে পড়ে।',
      },
      solution: {
        en: 'Combined a React, Vite, and TypeScript frontend with Firebase and Firestore for structured data persistence, Google Gen AI SDK for ad creation workflows, and Meta Remote MCP integration.',
        bn: 'React, Vite ও TypeScript ফ্রন্টএন্ডের সাথে Firebase ও Firestore ডেটা স্টোরেজ, অ্যাড ড্রাফটিংয়ের জন্য Google Gen AI SDK এবং Meta Remote MCP ইন্টিগ্রেশন যুক্ত করা হয়েছে।',
      },
      keyFeatures: [
        {
          en: 'Structured ad drafting workflow powered by Google Gen AI SDK',
          bn: 'Google Gen AI SDK-সমৃদ্ধ সুসংগঠিত অ্যাড ড্রাফটিং ওয়ার্কফ্লো',
        },
        {
          en: 'Persistent campaign and creative storage using Firebase & Firestore',
          bn: 'Firebase ও Firestore ব্যবহার করে নিরাপদ ক্যাম্পেইন ও কনটেন্ট সংরক্ষণ',
        },
        {
          en: 'Meta Remote MCP integration for ad management operations',
          bn: 'অ্যাড ম্যানেজমেন্ট কার্যক্রমের জন্য Meta Remote MCP ইন্টিগ্রেশন',
        },
        {
          en: 'Responsive React and TypeScript interface built with Vite',
          bn: 'Vite-এ নির্মিত রেসপন্সিভ React ও TypeScript ইন্টারফেস',
        },
      ],
      resultPlaceholder: {
        en: 'Source code is available on GitHub (Adcraft) featuring full campaign workspace, brand asset organization, and AI-assisted brief generation.',
        bn: 'সম্পূর্ণ সোর্স কোড GitHub-এ (Adcraft) উন্মুক্ত রয়েছে, যেখানে ক্যাম্পেইন ওয়ার্কস্পেস, ব্র্যান্ড অ্যাসেট ব্যবস্থাপনা ও AI-সহায়তাযুক্ত অ্যাড ব্রিফ তৈরির সুবিধা রয়েছে।',
      },
    },
  },
];

export function getProjectBySlug(slug: string | undefined): ProjectItem | undefined {
  if (!slug) {
    return undefined;
  }
  return PROJECTS.find((project) => project.slug === slug);
}

export function getLocalizedText(text: LocalizedText, locale: Locale): string {
  return text[locale];
}
