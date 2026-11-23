import type { LocalizedText } from './services';

export interface SkillGroup {
  id: 'frontend' | 'backend' | 'database' | 'tools' | 'aiTools';
  label: LocalizedText;
  items: string[];
}

export interface ProfileLink {
  id: 'portfolio' | 'linkedin' | 'whatsapp';
  label: string;
  handle: string;
  href: string;
}

export interface AboutProjectItem {
  id: string;
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  techStack: string[];
}

export interface AboutEducationData {
  degree: LocalizedText;
  courseworkLabel: LocalizedText;
  coursework: string[];
  certificatesLabel: LocalizedText;
  certificates: string[];
}

export interface AboutProcessStep {
  number: string;
  title: LocalizedText;
  description: LocalizedText;
}

export interface WorkPrinciple {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
}

export const FOUNDER_PROFILE = {
  name: 'Khandaker MD Masrurul Islam Ayon',
  initials: 'MA',
  photoSrc: '/assets/aistudio/Ayon_d9e4df76.jpg',
  photoAlt: 'Khandaker MD Masrurul Islam Ayon, Founder of Stack Dev',
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
  extendedBio: {
    en: 'Khandaker MD Masrurul Islam Ayon is a Computer Science and Engineering graduate of Daffodil International University. He builds practical, end-to-end web applications with responsive front-ends, REST API-driven back-ends and well-structured databases, with a strong focus on solving real business problems. He designs applications to be scalable and easy to maintain, turns complex requirements into clean, efficient code, and keeps learning the latest tools to deliver better results. As the sole founder of Stack Dev, he works directly with every client from the first consultation to final delivery.',
    bn: 'Khandaker MD Masrurul Islam Ayon, Daffodil International University থেকে Computer Science and Engineering (CSE) এ পড়াশোনা করেছেন। তিনি বাস্তব ব্যবসায়িক সমস্যা সমাধানের দিকে নজর রেখে responsive front-end, REST API ভিত্তিক back-end এবং সুগঠিত database সহ end-to-end web application তৈরি করেন। তাঁর তৈরি অ্যাপ্লিকেশন scalable এবং রক্ষণাবেক্ষণে সহজ হয়, জটিল প্রয়োজনকে পরিচ্ছন্ন ও কার্যকর কোডে রূপ দেন এবং ভালো ফলাফলের জন্য নতুন টুলস শিখতে থাকেন। Stack Dev এর একমাত্র প্রতিষ্ঠাতা হিসেবে তিনি প্রথম কনসালটেশন থেকে ডেলিভারি পর্যন্ত প্রতিটি ক্লায়েন্টের সাথে সরাসরি কাজ করেন।',
  },
} as const;

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'frontend',
    label: { en: 'Frontend', bn: 'Frontend' },
    items: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 'backend',
    label: { en: 'Backend', bn: 'Backend' },
    items: [
      'Node.js',
      'Python',
      'PHP',
      'REST APIs',
      'JWT / OAuth authentication',
      'MCP (Model Context Protocol)',
    ],
  },
  {
    id: 'database',
    label: { en: 'Database', bn: 'Database' },
    items: ['MongoDB', 'Supabase', 'Firestore', 'SQL', 'phpMyAdmin'],
  },
  {
    id: 'tools',
    label: { en: 'Tools', bn: 'Tools' },
    items: ['Figma', 'Git', 'GitHub', 'VS Code', 'Vercel', 'Firebase', 'Postman'],
  },
  {
    id: 'aiTools',
    label: { en: 'AI Tools', bn: 'AI Tools' },
    items: ['Claude', 'Google AI Studio', 'Stitch', 'Antigravity'],
  },
];

export const PROFILE_LINKS: ProfileLink[] = [
  {
    id: 'portfolio',
    label: 'Portfolio',
    handle: 'masrurulislamayon.vercel.app',
    href: 'https://masrurulislamayon.vercel.app/',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'linkedin.com/in/khandaker-md-masrurul-islam-ayon',
    href: 'https://www.linkedin.com/in/khandaker-md-masrurul-islam-ayon-b782a2236/',
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    handle: '+880 1963-131282',
    href: 'https://wa.me/8801963131282',
  },
];

export const ABOUT_SELECTED_PROJECTS: AboutProjectItem[] = [
  {
    id: 'universal-unit-converter',
    slug: 'universal-unit-converter',
    title: {
      en: 'Universal Unit Converter',
      bn: 'Universal Unit Converter',
    },
    description: {
      en: 'A web application for converting units.',
      bn: 'ইউনিট কনভার্ট করার জন্য তৈরি একটি web application।',
    },
    techStack: ['React 19', 'TypeScript', 'Vite', 'GitHub', 'Vercel'],
  },
  {
    id: 'automated-social-media-ad-creation',
    slug: 'automated-social-media-ad-creation',
    title: {
      en: 'Automated Social Media Ad Creation and Management',
      bn: 'Automated Social Media Ad Creation and Management',
    },
    description: {
      en: 'A web application for creating and managing social media ads with AI.',
      bn: 'AI ব্যবহার করে সোশ্যাল মিডিয়া অ্যাড তৈরি ও ব্যবস্থাপনার জন্য একটি web application।',
    },
    techStack: [
      'React',
      'Vite',
      'TypeScript',
      'Firebase',
      'Firestore',
      'Google Gen AI SDK',
      'Lucide React',
    ],
  },
];

export const ABOUT_EDUCATION: AboutEducationData = {
  degree: {
    en: 'B.Sc. in Computer Science and Engineering, Daffodil International University',
    bn: 'B.Sc. in Computer Science and Engineering, Daffodil International University',
  },
  courseworkLabel: {
    en: 'Relevant coursework',
    bn: 'Relevant coursework',
  },
  coursework: [
    'Web Engineering',
    'Database Management Systems',
    'Software Engineering',
    'Object-Oriented Programming',
    'System Analysis & Design',
    'Data Structures',
    'Algorithms',
    'Mobile Application Design',
    'Software Project I, II & III',
  ],
  certificatesLabel: {
    en: 'Programming contest certificates (CPC-DIU)',
    bn: 'Programming contest certificates (CPC-DIU)',
  },
  certificates: [
    'Take-Off Programming Contest 2022',
    'Unlock the Algorithm 2024',
    'Prompt Battle 2025',
  ],
};

export const ABOUT_HOW_WE_WORK_STEPS: AboutProcessStep[] = [
  {
    number: '01.',
    title: {
      en: 'Free consultation',
      bn: 'Free consultation',
    },
    description: {
      en: 'Share your idea and requirements.',
      bn: 'আপনার আইডিয়া এবং requirements শেয়ার করুন।',
    },
  },
  {
    number: '02.',
    title: {
      en: 'Scope, timeline and price confirmed upfront',
      bn: 'শুরুতেই Scope, timeline ও মূল্য চূড়ান্ত',
    },
    description: {
      en: 'Scope, timeline and price confirmed upfront.',
      bn: 'কাজ শুরুর আগেই scope, সময়সীমা ও মূল্য নিশ্চিত করা হয়।',
    },
  },
  {
    number: '03.',
    title: {
      en: 'Development and revisions with direct communication',
      bn: 'সরাসরি যোগাযোগে Development ও revisions',
    },
    description: {
      en: 'Development and revisions with direct communication.',
      bn: 'সরাসরি যোগাযোগের মাধ্যমে development ও প্রয়োজনীয় revision সম্পন্ন হয়।',
    },
  },
  {
    number: '04.',
    title: {
      en: 'Delivery and support',
      bn: 'ডেলিভারি ও support',
    },
    description: {
      en: 'Delivery and support (30 days post-launch support with the Premium package).',
      bn: 'ডেলিভারি এবং support (Premium প্যাকেজে 30 দিনের post-launch support অন্তর্ভুক্ত)।',
    },
  },
];

export const ABOUT_WHO_WE_WORK_WITH: LocalizedText = {
  en: 'Startups needing a first website, established businesses going mobile, entrepreneurs with app ideas, and creative professionals, developers and students who need a portfolio, mainly in Dhaka and across Bangladesh.',
  bn: 'প্রথম ওয়েবসাইট তৈরি করতে চাওয়া startup, মোবাইলে যেতে চাওয়া প্রতিষ্ঠিত ব্যবসা, অ্যাপ আইডিয়া থাকা উদ্যোক্তা এবং পোর্টফোলিও দরকার এমন creative professional, developer ও শিক্ষার্থী—মূলত ঢাকা এবং সারা বাংলাদেশে।',
};

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
