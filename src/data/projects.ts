import type { Locale } from '@/src/i18n';
import type { LocalizedText } from './services';

export type ProjectSlug =
  | 'universal-unit-converter'
  | 'automated-social-media-ad-creation';

export interface ProjectItem {
  slug: ProjectSlug;
  thumbnailVariant: 'converter' | 'ad-automation';
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
    // Editable placeholder — keep factual and do not invent metrics.
    resultPlaceholder: LocalizedText;
  };
}

export const PROJECTS: ProjectItem[] = [
  {
    slug: 'universal-unit-converter',
    thumbnailVariant: 'converter',
    title: {
      en: 'Universal Unit Converter',
      bn: 'Universal Unit Converter',
    },
    category: {
      en: 'Web Application',
      bn: 'ওয়েব অ্যাপ্লিকেশন',
    },
    shortDescription: {
      en: 'A fast web application for clean, multi-category unit conversions built with modern React and TypeScript.',
      bn: 'আধুনিক React এবং TypeScript দিয়ে তৈরি দ্রুতগতির ও পরিচ্ছন্ন ইউনিট কনভার্সন ওয়েব অ্যাপ্লিকেশন।',
    },
    techStack: ['React 19', 'TypeScript', 'Vite', 'GitHub', 'Vercel'],
    liveDemoUrl: '', // TODO: Add Live Demo URL for Universal Unit Converter
    githubUrl: '', // TODO: Add GitHub URL for Universal Unit Converter
    caseStudy: {
      overview: {
        en: 'Universal Unit Converter is a personal web application focused on fast, clutter-free unit conversion across everyday and technical measurement categories.',
        bn: 'Universal Unit Converter একটি ব্যক্তিগত ওয়েব অ্যাপ্লিকেশন, যা দৈনন্দিন ও টেকনিক্যাল পরিমাপের ইউনিট দ্রুত এবং ঝামেলাহীনভাবে রূপান্তরের জন্য তৈরি।',
      },
      problem: {
        en: 'Many online unit converters are overloaded with ads, slow page reloads, and confusing layouts—especially on mobile screens when someone needs a quick conversion.',
        bn: 'অনলাইনে থাকা অনেক ইউনিট কনভার্টার বিজ্ঞাপন, ধীরগতির লোডিং এবং অগোছালো লেআউটের কারণে মোবাইলে দ্রুত ব্যবহারের ক্ষেত্রে বিরক্তিকর হয়ে ওঠে।',
      },
      solution: {
        en: 'Built a lightweight single-page web application with React 19, TypeScript, and Vite so conversions happen instantly on the client with clean category switching and responsive mobile controls.',
        bn: 'React 19, TypeScript এবং Vite ব্যবহার করে একটি হালকা ও দ্রুতগতির ওয়েব অ্যাপ্লিকেশন তৈরি করা হয়েছে, যেখানে কোনো পেজ রিলোড ছাড়াই তাৎক্ষণিকভাবে ইউনিট রূপান্তর করা যায়।',
      },
      keyFeatures: [
        {
          en: 'Instant client-side unit conversion without page reloads',
          bn: 'পেজ রিলোড ছাড়াই তাৎক্ষণিক ক্লায়েন্ট-সাইড ইউনিট কনভার্সন',
        },
        {
          en: 'Type-safe conversion logic written in TypeScript',
          bn: 'TypeScript-এ লেখা টাইপ-সেফ কনভার্সন লজিক',
        },
        {
          en: 'Mobile-first responsive layout optimized for quick one-hand input',
          bn: 'দ্রুত ব্যবহারের জন্য মোবাইল-ফার্স্ট রেসপন্সিভ লেআউট',
        },
        {
          en: 'Clean deployment workflow using GitHub and Vercel',
          bn: 'GitHub এবং Vercel-এর মাধ্যমে পরিচ্ছন্ন ডিপ্লয়মেন্ট ওয়ার্কফ্লো',
        },
      ],
      // TODO: Replace with verified outcome/deployment notes when ready
      resultPlaceholder: {
        en: 'Editable placeholder: Add verified deployment notes, feedback, or outcome details here once ready.',
        bn: 'সম্পাদনাযোগ্য স্থান: প্রজেক্টের যাচাইকৃত ফলাফল বা ডিপ্লয়মেন্ট নোট প্রস্তুত হলে এখানে যুক্ত করুন।',
      },
    },
  },
  {
    slug: 'automated-social-media-ad-creation',
    thumbnailVariant: 'ad-automation',
    title: {
      en: 'Automated Social Media Ad Creation and Management',
      bn: 'Automated Social Media Ad Creation and Management',
    },
    category: {
      en: 'Web Application',
      bn: 'ওয়েব অ্যাপ্লিকেশন',
    },
    shortDescription: {
      en: 'A web application integrating AI-assisted ad drafting with Firestore persistence and Meta Remote MCP workflows.',
      bn: 'Firestore ডেটাবেস, Google Gen AI SDK এবং Meta Remote MCP ওয়ার্কফ্লো সমন্বিত সোশ্যাল মিডিয়া অ্যাড তৈরি ও ব্যবস্থাপনার ওয়েব অ্যাপ্লিকেশন।',
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
    liveDemoUrl: '', // TODO: Add Live Demo URL for Automated Social Media Ad Creation and Management
    githubUrl: '', // TODO: Add GitHub URL for Automated Social Media Ad Creation and Management
    caseStudy: {
      overview: {
        en: 'A product-focused web application built to structure social media ad drafting, asset organization, and campaign management workflows in one unified interface.',
        bn: 'সোশ্যাল মিডিয়া অ্যাড ড্রাফটিং, কনটেন্ট সংরক্ষণ এবং ক্যাম্পেইন ম্যানেজমেন্ট ওয়ার্কফ্লো একটি ইউনিফাইড ইন্টারফেসে সাজানোর জন্য নির্মিত ওয়েব অ্যাপ্লিকেশন।',
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
      // TODO: Replace with verified outcome/deployment notes when ready
      resultPlaceholder: {
        en: 'Editable placeholder: Add verified deployment notes, feedback, or outcome details here once ready.',
        bn: 'সম্পাদনাযোগ্য স্থান: প্রজেক্টের যাচাইকৃত ফলাফল বা ডিপ্লয়মেন্ট নোট প্রস্তুত হলে এখানে যুক্ত করুন।',
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
