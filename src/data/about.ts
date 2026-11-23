import type { LocalizedText } from './services';

export interface SkillGroup {
  id: 'frontend' | 'backend' | 'database' | 'tools';
  label: LocalizedText;
  items: string[];
}

export interface ProfileLink {
  id: 'github' | 'upwork' | 'fiverr';
  label: string;
  handle: string;
  href: string;
}

export interface WorkPrinciple {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
}

export const FOUNDER_PROFILE = {
  name: 'Khandaker MD Masrurul Islam Ayon',
  initials: 'MA',
  role: {
    en: 'Full-Stack Web Engineer · Founder of Stack Dev',
    bn: 'Full-Stack Web Engineer · Stack Dev-এর ফাউন্ডার',
  },
  education: {
    en: 'CSE Graduate, Daffodil International University, Dhaka, Bangladesh',
    bn: 'CSE স্নাতক, Daffodil International University, ঢাকা, বাংলাদেশ',
  },
  bio: {
    en: 'Builds practical end-to-end web applications with responsive front-ends, REST API-driven back-ends, and well-structured databases, focused on solving real business problems.',
    bn: 'রেসপন্সিভ ফ্রন্টএন্ড, REST API-ভিত্তিক ব্যাকএন্ড এবং সুসংগঠিত ডেটাবেস নিয়ে বাস্তব ব্যবসায়িক সমস্যা সমাধানে কার্যকর এন্ড-টু-এন্ড ওয়েব অ্যাপ্লিকেশন তৈরি করেন।',
  },
} as const;

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'frontend',
    label: { en: 'Frontend', bn: 'Frontend' },
    items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 'backend',
    label: { en: 'Backend', bn: 'Backend' },
    items: ['Python', 'Node.js', 'PHP', 'JWT/OAuth auth'],
  },
  {
    id: 'database',
    label: { en: 'Database', bn: 'Database' },
    items: ['MongoDB', 'Supabase', 'Firestore', 'SQL'],
  },
  {
    id: 'tools',
    label: { en: 'Tools', bn: 'Tools' },
    items: ['Figma', 'Git', 'GitHub', 'VS Code', 'Vercel', 'Firebase', 'Postman'],
  },
];

export const PROFILE_LINKS: ProfileLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    handle: 'github.com/masrurulislam01',
    href: 'https://github.com/masrurulislam01',
  },
  {
    id: 'upwork',
    label: 'Upwork',
    handle: 'upwork.com/masrurulislamayon',
    href: 'https://upwork.com/masrurulislamayon',
  },
  {
    id: 'fiverr',
    label: 'Fiverr',
    handle: 'fiverr.com/masrurul',
    href: 'https://fiverr.com/masrurul',
  },
];

export const WORK_PRINCIPLES: WorkPrinciple[] = [
  {
    id: 'clear-pricing',
    title: { en: 'Clear pricing', bn: 'স্বচ্ছ মূল্য' },
    description: {
      en: 'Packages and custom quotes are confirmed upfront in BDT and approximate USD before work starts.',
      bn: 'কাজ শুরু করার আগেই BDT ও আনুমানিক USD-তে প্যাকেজ বা কাস্টম কোটেশনের মূল্য নিশ্চিত করা হয়।',
    },
  },
  {
    id: 'fast-delivery',
    title: { en: 'Fast delivery', bn: 'দ্রুত ডেলিভারি' },
    description: {
      en: 'Focused execution from scoping to launch—starting from 7–10 days for Basic web packages.',
      bn: 'স্কোপিং থেকে লঞ্চ পর্যন্ত দ্রুত ও সুশৃঙ্খল কাজ—Basic ওয়েব প্যাকেজে ৭–১০ দিন থেকে ডেলিভারি।',
    },
  },
  {
    id: 'direct-communication',
    title: { en: 'Direct communication', bn: 'সরাসরি যোগাযোগ' },
    description: {
      en: 'You work directly with the engineer designing and writing the code for your project.',
      bn: 'আপনি সরাসরি সেই ইঞ্জিনিয়ারের সাথেই কথা বলবেন যিনি আপনার প্রজেক্টের ডিজাইন ও কোড করছেন।',
    },
  },
  {
    id: 'mobile-first',
    title: { en: 'Mobile-first', bn: 'মোবাইল-ফার্স্ট' },
    description: {
      en: 'Every web platform and Flutter app is structured for smooth smartphone usability first.',
      bn: 'প্রতিটি ওয়েব প্ল্যাটফর্ম ও Flutter অ্যাপ প্রথমে স্মার্টফোনের সহজ ব্যবহারের কথা ভেবে তৈরি করা হয়।',
    },
  },
  {
    id: 'seo-friendly',
    title: { en: 'SEO-friendly', bn: 'SEO-বান্ধব' },
    description: {
      en: 'Clean semantic HTML, metadata, and fast page performance built into every release.',
      bn: 'পরিচ্ছন্ন সিম্যান্টিক HTML, মেটাডেটা এবং দ্রুত পেজ পারফরম্যান্স প্রতিটি রিলিজে যুক্ত থাকে।',
    },
  },
];
