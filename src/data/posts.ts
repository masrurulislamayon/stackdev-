import type { Locale } from '@/src/i18n';
import type { LocalizedText } from './services';

export type ContentBlock =
  | {
      type: 'heading';
      id: string;
      level: 2 | 3;
      text: string;
    }
  | {
      type: 'paragraph';
      text: string;
    }
  | {
      type: 'list';
      items: string[];
      ordered?: boolean;
    }
  | {
      type: 'callout';
      title?: string;
      text: string;
    };

export interface BlogPost {
  slug: string;
  featured?: boolean;
  title: LocalizedText;
  excerpt: LocalizedText;
  date: string;
  tags: string[];
  readingTime: LocalizedText;
  content: {
    en: ContentBlock[];
    bn: ContentBlock[];
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-much-does-a-website-cost-in-bangladesh-2026',
    featured: true,
    title: {
      en: 'How much does a website cost in Bangladesh? (2026 guide)',
      bn: 'বাংলাদেশে একটি ওয়েবসাইট তৈরি করতে কত খরচ হয়? (২০২৬ গাইড)',
    },
    excerpt: {
      en: 'A practical breakdown of what drives website pricing in Bangladesh, comparing simple portfolio sites, business packages, and custom web applications.',
      bn: 'বাংলাদেশে ওয়েবসাইট তৈরির খরচ কী কী বিষয়ের ওপর নির্ভর করে এবং পোর্টফোলিও, বিজনেস প্যাকেজ ও কাস্টম ওয়েব অ্যাপের খরচের বাস্তব ধারণা।',
    },
    date: '2026-10-18',
    tags: ['Pricing', 'Web Development', 'Bangladesh'],
    readingTime: {
      en: '5 min read',
      bn: '৫ মিনিট পাঠ',
    },
    content: {
      en: [
        {
          type: 'heading',
          id: 'short-answer',
          level: 2,
          text: 'The short answer',
        },
        {
          type: 'paragraph',
          text: 'For a clear, professionally built website in Bangladesh, pricing depends directly on scope and technical features. At Stack Dev, a personal Portfolio Website starts around 2,000 BDT (final price confirmed after requirements). A small business or landing-page website under the Basic package costs 15,000 BDT (about $135) for up to 5 pages, while a full custom website with unlimited pages, a custom backend/CMS, and UI/UX design under the Premium package costs 35,000 BDT (about $315). E-commerce stores and custom web applications are quoted after a free consultation.',
        },
        {
          type: 'heading',
          id: 'why-quotes-vary',
          level: 2,
          text: 'Why website quotes vary so widely',
        },
        {
          type: 'paragraph',
          text: 'Many business owners receive wildly different quotes for what sounds like the same request because agencies rarely spell out what is included. A static 5-page brochure site has completely different engineering effort from a platform with custom database workflows, content management, and dedicated UI/UX design.',
        },
        {
          type: 'list',
          items: [
            'Page count and content structure (up to 5 focused pages vs. unlimited dynamic pages)',
            'Design scope (clean standard layout vs. custom UI/UX design)',
            'Backend and CMS needs (contact form integration vs. custom backend or CMS)',
            'SEO and performance work (basic SEO setup vs. advanced SEO and speed optimization)',
            'Revision rounds and post-launch support window',
          ],
        },
        {
          type: 'heading',
          id: 'basic-vs-premium',
          level: 2,
          text: 'Comparing Stack Dev Basic vs. Premium packages',
        },
        {
          type: 'paragraph',
          text: 'To keep pricing predictable before any work begins, Stack Dev separates standard web projects into two fixed packages alongside Portfolio Websites and custom quotes:',
        },
        {
          type: 'callout',
          title: 'Basic Package — 15,000 BDT (about $135)',
          text: 'Designed for small businesses and landing pages. Includes up to 5 pages, responsive design, contact form integration, basic SEO setup, 1 round of revisions, and delivery in 7–10 days.',
        },
        {
          type: 'callout',
          title: 'Premium Package — 35,000 BDT (about $315)',
          text: 'Built for growing businesses and custom web apps. Includes unlimited pages, responsive design, custom backend/CMS integration, advanced SEO and performance optimization, UI/UX design, 3 rounds of revisions, delivery in 15–25 days, and 30 days of post-launch support.',
        },
        {
          type: 'heading',
          id: 'when-custom-quote',
          level: 2,
          text: 'When a project needs a custom quote',
        },
        {
          type: 'paragraph',
          text: 'Online stores (E-commerce Solutions), Flutter mobile apps, and tailored business automation tools (Web Applications) do not fit neatly into fixed page-count tiers. In those cases, Stack Dev reviews your exact workflow during a free consultation and prepares a custom quote so you only pay for the features you need.',
        },
        {
          type: 'heading',
          id: 'faq',
          level: 2,
          text: 'Common pricing questions',
        },
        {
          type: 'heading',
          id: 'faq-confirm',
          level: 3,
          text: 'How are scope, timeline, and final cost confirmed?',
        },
        {
          type: 'paragraph',
          text: 'We confirm scope, timeline, and price together before starting. Every new client can begin with a free consultation via phone, WhatsApp, or Facebook Messenger.',
        },
        {
          type: 'heading',
          id: 'faq-portfolio',
          level: 3,
          text: 'Can individuals get a simpler website below 15,000 BDT?',
        },
        {
          type: 'paragraph',
          text: 'Yes. Portfolio Websites for professionals, developers, students, and creatives start around 2,000 BDT, with the final price confirmed after reviewing your requirements.',
        },
      ],
      bn: [
        {
          type: 'heading',
          id: 'short-answer',
          level: 2,
          text: 'সংক্ষিপ্ত উত্তর',
        },
        {
          type: 'paragraph',
          text: 'বাংলাদেশে একটি পরিচ্ছন্ন ও পেশাদার ওয়েবসাইট তৈরির খরচ নির্ভর করে আপনার প্রজেক্টের স্কোপ এবং ফিচারের ওপর। Stack Dev-এ ব্যক্তিগত পোর্টফোলিও ওয়েবসাইট প্রায় ২,০০০ টাকা থেকে শুরু হয় (চাহিদা পর্যালোচনার পর চূড়ান্ত মূল্য নির্ধারিত হয়)। ছোট ব্যবসা বা ল্যান্ডিং পেজের জন্য Basic প্যাকেজের মূল্য ১৫,০০০ টাকা (প্রায় $135), যেখানে সর্বোচ্চ ৫টি পেজ থাকে। আর আনলিমিটেড পেজ, কাস্টম ব্যাকএন্ড/CMS এবং UI/UX ডিজাইনসহ Premium প্যাকেজের মূল্য ৩৫,০০০ টাকা (প্রায় $315)। ই-কমার্স স্টোর এবং কাস্টম ওয়েব অ্যাপ্লিকেশনের জন্য ফ্রি কনসালটেশনের পর কাস্টম কোটেশন দেওয়া হয়।',
        },
        {
          type: 'heading',
          id: 'why-quotes-vary',
          level: 2,
          text: 'একই ধরনের ওয়েবসাইটের কোটেশন এত ভিন্ন হয় কেন?',
        },
        {
          type: 'paragraph',
          text: 'অনেক সময় কী কী অন্তর্ভুক্ত থাকবে তা স্পষ্ট না করার কারণে কোটেশনের মধ্যে বড় পার্থক্য দেখা যায়। ৫ পেজের একটি সাধারণ বিজনেস ওয়েবসাইট এবং কাস্টম ডেটাবেস, CMS ও UI/UX ডিজাইনসমৃদ্ধ প্ল্যাটফর্মের কাজের পরিধি এক নয়।',
        },
        {
          type: 'list',
          items: [
            'পেজের সংখ্যা ও কাঠামো (সর্বোচ্চ ৫টি পেজ বনাম আনলিমিটেড ডায়নামিক পেজ)',
            'ডিজাইনের পরিধি (স্ট্যান্ডার্ড লেআউট বনাম কাস্টম UI/UX ডিজাইন)',
            'ব্যাকএন্ড ও CMS প্রয়োজন (সাধারণ কন্টাক্ট ফর্ম বনাম কাস্টম ব্যাকএন্ড বা CMS)',
            'SEO ও পারফরম্যান্স অপটিমাইজেশন (বেসিক SEO বনাম অ্যাডভান্সড SEO ও স্পিড অপটিমাইজেশন)',
            'রিভিশন রাউন্ড এবং পোস্ট-লঞ্চ সাপোর্টের সময়কাল',
          ],
        },
        {
          type: 'heading',
          id: 'basic-vs-premium',
          level: 2,
          text: 'Stack Dev-এর Basic ও Premium প্যাকেজের তুলনা',
        },
        {
          type: 'paragraph',
          text: 'কাজ শুরু করার আগেই মূল্য স্পষ্ট রাখতে Stack Dev নির্ধারিত প্যাকেজ ও কাস্টম কোটেশন আলাদা করে সাজিয়েছে:',
        },
        {
          type: 'callout',
          title: 'Basic প্যাকেজ — ১৫,০০০ টাকা (প্রায় $135)',
          text: 'ছোট ব্যবসা ও ল্যান্ডিং পেজের জন্য উপযুক্ত। এতে সর্বোচ্চ ৫টি পেজ, রেসপন্সিভ ডিজাইন, কন্টাক্ট ফর্ম ইন্টিগ্রেশন, বেসিক SEO সেটআপ, ১ রাউন্ড রিভিশন এবং ৭–১০ দিনে ডেলিভারি অন্তর্ভুক্ত।',
        },
        {
          type: 'callout',
          title: 'Premium প্যাকেজ — ৩৫,০০০ টাকা (প্রায় $315)',
          text: 'বর্ধনশীল ব্যবসা ও কাস্টম ওয়েব অ্যাপের জন্য। এতে আনলিমিটেড পেজ, রেসপন্সিভ ডিজাইন, কাস্টম ব্যাকএন্ড/CMS ইন্টিগ্রেশন, অ্যাডভান্সড SEO ও পারফরম্যান্স অপটিমাইজেশন, UI/UX ডিজাইন, ৩ রাউন্ড রিভিশন, ১৫–২৫ দিনে ডেলিভারি এবং ৩০ দিনের পোস্ট-লঞ্চ সাপোর্ট রয়েছে।',
        },
        {
          type: 'heading',
          id: 'when-custom-quote',
          level: 2,
          text: 'কখন কাস্টম কোটেশন প্রয়োজন হয়?',
        },
        {
          type: 'paragraph',
          text: 'অনলাইন স্টোর (E-commerce Solutions), Flutter মোবাইল অ্যাপ এবং ব্যবসার অটোমেশন টুলস (Web Applications) নির্দিষ্ট পেজ-সংখ্যাভিত্তিক প্যাকেজে সীমাবদ্ধ থাকে না। এসব ক্ষেত্রে ফ্রি কনসালটেশনে আপনার কাজের ধরন বুঝে কাস্টম কোটেশন দেওয়া হয়।',
        },
        {
          type: 'heading',
          id: 'faq',
          level: 2,
          text: 'সাধারণ কিছু প্রশ্ন',
        },
        {
          type: 'heading',
          id: 'faq-confirm',
          level: 3,
          text: 'স্কোপ, সময়সীমা ও চূড়ান্ত মূল্য কীভাবে নিশ্চিত হয়?',
        },
        {
          type: 'paragraph',
          text: 'কাজ শুরু করার আগেই আমরা একসাথে স্কোপ, সময়সীমা এবং মূল্য চূড়ান্ত করি। নতুন ক্লায়েন্টরা ফোন, WhatsApp বা Facebook Messenger-এ ফ্রি কনসালটেশন নিতে পারেন।',
        },
        {
          type: 'heading',
          id: 'faq-portfolio',
          level: 3,
          text: 'ব্যক্তিগত প্রয়োজনে কি ১৫,০০০ টাকার কম বাজেটে ওয়েবসাইট করা যায়?',
        },
        {
          type: 'paragraph',
          text: 'হ্যাঁ। প্রফেশনাল, ডেভেলপার, শিক্ষার্থী ও ক্রিয়েটিভদের জন্য পোর্টফোলিও ওয়েবসাইট প্রায় ২,০০০ টাকা থেকে শুরু হয় এবং আপনার চাহিদা অনুযায়ী চূড়ান্ত মূল্য নির্ধারিত হয়।',
        },
      ],
    },
  },
  {
    slug: 'flutter-vs-native-apps-which-is-right',
    title: {
      en: 'Flutter vs native apps: which is right for your business?',
      bn: 'Flutter বনাম নেটিভ অ্যাপ: আপনার ব্যবসার জন্য কোনটি সঠিক?',
    },
    excerpt: {
      en: 'An honest comparison of cross-platform Flutter development and separate native Android/iOS builds for business mobile applications.',
      bn: 'ব্যবসায়িক মোবাইল অ্যাপের জন্য ক্রস-প্ল্যাটফর্ম Flutter এবং আলাদা নেটিভ Android/iOS ডেভেলপমেন্টের মধ্যে বাস্তবসম্মত তুলনা।',
    },
    date: '2026-10-25',
    tags: ['Flutter', 'Mobile Apps', 'Architecture'],
    readingTime: {
      en: '4 min read',
      bn: '৪ মিনিট পাঠ',
    },
    content: {
      en: [
        {
          type: 'heading',
          id: 'short-answer',
          level: 2,
          text: 'The short answer',
        },
        {
          type: 'paragraph',
          text: 'For most businesses that need an app on both Android and iOS with consistent UI and manageable maintenance, Flutter is the practical choice because one shared codebase serves both platforms. Separate native builds (Kotlin/Java for Android and Swift for iOS) are mainly justified when an app depends deeply on specialized hardware APIs or platform-specific system features.',
        },
        {
          type: 'heading',
          id: 'core-problem',
          level: 2,
          text: 'The dilemma: maintaining one app vs. two',
        },
        {
          type: 'paragraph',
          text: 'Customers rarely all use the same phone operating system. If you build only for Android, iOS users are left out; if you build two separate native apps, every feature update, bug fix, and UI change has to be written and tested twice.',
        },
        {
          type: 'heading',
          id: 'when-flutter-wins',
          level: 2,
          text: 'Where Flutter fits best',
        },
        {
          type: 'list',
          items: [
            'Launching on both iOS and Android from a single codebase',
            'Keeping design, layout, and user flows consistent across devices',
            'Business apps, e-commerce companions, booking flows, and service platforms',
            'Simpler long-term feature updates without duplicating engineering effort',
          ],
        },
        {
          type: 'heading',
          id: 'when-native-fits',
          level: 2,
          text: 'When separate native development makes sense',
        },
        {
          type: 'paragraph',
          text: 'Native development is typically chosen for graphics-heavy 3D games, apps requiring custom low-level Bluetooth/sensor pipelines, or teams that already maintain separate dedicated Android and iOS engineering squads.',
        },
        {
          type: 'callout',
          title: 'How Stack Dev approaches Flutter projects',
          text: 'Stack Dev builds cross-platform iOS and Android applications using Flutter with mobile-first UI/UX. Because every mobile app has different screens and integrations, Flutter apps are priced via a custom quote after a free consultation.',
        },
        {
          type: 'heading',
          id: 'faq',
          level: 2,
          text: 'Frequently asked questions',
        },
        {
          type: 'heading',
          id: 'faq-both-platforms',
          level: 3,
          text: 'Will my Flutter app run on both Android and iOS?',
        },
        {
          type: 'paragraph',
          text: 'Yes. Flutter compiles a shared codebase for both iOS and Android platforms.',
        },
        {
          type: 'heading',
          id: 'faq-quote',
          level: 3,
          text: 'How do I know the exact cost and timeline for a Flutter app?',
        },
        {
          type: 'paragraph',
          text: 'Share your app idea during a free consultation. We will review your required screens and backend needs and confirm scope, timeline, and price together before starting.',
        },
      ],
      bn: [
        {
          type: 'heading',
          id: 'short-answer',
          level: 2,
          text: 'সংক্ষিপ্ত উত্তর',
        },
        {
          type: 'paragraph',
          text: 'যেসব ব্যবসা Android এবং iOS উভয় প্ল্যাটফর্মেই একই মানের UI ও সহজ মেইনটেন্যান্সসহ অ্যাপ চালু করতে চায়, তাদের জন্য Flutter সবচেয়ে বাস্তবসম্মত সমাধান—কারণ এতে একটি কোডবেস থেকেই দুটি প্ল্যাটফর্মের অ্যাপ তৈরি করা যায়। আলাদা নেটিভ ডেভেলপমেন্ট (Android-এর জন্য Kotlin ও iOS-এর জন্য Swift) মূলত তখনই প্রয়োজন হয় যখন অ্যাপটি গভীর হার্ডওয়্যার API বা প্ল্যাটফর্ম-নির্ভর বিশেষ ফিচারের ওপর নির্ভর করে।',
        },
        {
          type: 'heading',
          id: 'core-problem',
          level: 2,
          text: 'মূল চ্যালেঞ্জ: একটি কোডবেস নাকি দুটি আলাদা অ্যাপ?',
        },
        {
          type: 'paragraph',
          text: 'আপনার ব্যবহারকারীদের কেউ Android ব্যবহার করেন, আবার কেউ iOS। শুধু একটি প্ল্যাটফর্মের জন্য অ্যাপ বানালে অন্য অংশের ব্যবহারকারীরা বাদ পড়েন। অন্যদিকে দুটি আলাদা নেটিভ অ্যাপ বানালে প্রতিটি নতুন ফিচার ও আপডেট দুইবার তৈরি ও টেস্ট করতে হয়।',
        },
        {
          type: 'heading',
          id: 'when-flutter-wins',
          level: 2,
          text: 'কখন Flutter সবচেয়ে ভালো সমাধান',
        },
        {
          type: 'list',
          items: [
            'একটি শেয়ার্ড কোডবেস থেকেই iOS ও Android-এ অ্যাপ চালু করা',
            'সব ডিভাইসে একই ধরনের পরিচ্ছন্ন UI ও ইউজার ফ্লো বজায় রাখা',
            'বিজনেস অ্যাপ, ই-কমার্স স্টোর অ্যাপ, বুকিং বা সার্ভিস প্ল্যাটফর্ম তৈরি করা',
            'ভবিষ্যতে ফিচার আপডেট ও মেইনটেন্যান্স সহজ রাখা',
          ],
        },
        {
          type: 'heading',
          id: 'when-native-fits',
          level: 2,
          text: 'কখন নেটিভ ডেভেলপমেন্ট বিবেচনা করা উচিত',
        },
        {
          type: 'paragraph',
          text: 'ভারী 3D গেম, লো-লেভেল হার্ডওয়্যার সেন্সর বা বিশেষ সিস্টেম-লেভেল ইন্টিগ্রেশনের ক্ষেত্রে আলাদা নেটিভ ডেভেলপমেন্ট উপযুক্ত হতে পারে।',
        },
        {
          type: 'callout',
          title: 'Flutter প্রজেক্টে Stack Dev-এর পদ্ধতি',
          text: 'Stack Dev মোবাইল-ফার্স্ট UI/UX সহ Flutter ব্যবহার করে iOS ও Android অ্যাপ তৈরি করে। প্রতিটি অ্যাপের স্ক্রিন ও ব্যাকএন্ড চাহিদা ভিন্ন হওয়ায় ফ্রি কনসালটেশনের পর কাস্টম কোটেশন দেওয়া হয়।',
        },
        {
          type: 'heading',
          id: 'faq',
          level: 2,
          text: 'সাধারণ প্রশ্নাবলী',
        },
        {
          type: 'heading',
          id: 'faq-both-platforms',
          level: 3,
          text: 'একটি Flutter অ্যাপ কি Android ও iOS দুটোতেই চলবে?',
        },
        {
          type: 'paragraph',
          text: 'হ্যাঁ। Flutter একটি শেয়ার্ড কোডবেস থেকে iOS ও Android উভয় প্ল্যাটফর্মের জন্যই অ্যাপ তৈরি করতে পারে।',
        },
        {
          type: 'heading',
          id: 'faq-quote',
          level: 3,
          text: 'আমার Flutter অ্যাপের সঠিক খরচ ও সময়সীমা কীভাবে জানব?',
        },
        {
          type: 'paragraph',
          text: 'ফ্রি কনসালটেশনে আপনার অ্যাপের আইডিয়া ও প্রয়োজনীয় স্ক্রিন সম্পর্কে জানালে কাজ শুরুর আগেই স্কোপ, সময়সীমা এবং মূল্য চূড়ান্ত করে জানানো হবে।',
        },
      ],
    },
  },
  {
    slug: 'how-to-build-a-portfolio-website-as-a-student',
    title: {
      en: 'How to build a portfolio website as a student.',
      bn: 'শিক্ষার্থী হিসেবে কীভাবে একটি পোর্টফোলিও ওয়েবসাইট তৈরি করবেন।',
    },
    excerpt: {
      en: 'What sections matter most in a student or developer portfolio, how to present early projects honestly, and how to launch quickly.',
      bn: 'একজন শিক্ষার্থী বা নতুন ডেভেলপারের পোর্টফোলিওতে কোন সেকশনগুলো থাকা জরুরি এবং কীভাবে নিজের প্রজেক্টগুলো সঠিকভাবে উপস্থাপন করবেন।',
    },
    date: '2026-11-04',
    tags: ['Portfolio', 'Students', 'UI/UX'],
    readingTime: {
      en: '4 min read',
      bn: '৪ মিনিট পাঠ',
    },
    content: {
      en: [
        {
          type: 'heading',
          id: 'short-answer',
          level: 2,
          text: 'The short answer',
        },
        {
          type: 'paragraph',
          text: 'A strong student portfolio does not need flashy animations or dozens of pages. It needs four clear parts: a short introduction stating what you build or study, 2–3 real projects explaining the problem and tools used, an About section with your skills and links, and a direct Contact section. If you prefer having one built for you, Stack Dev offers Portfolio Websites starting around 2,000 BDT (final price confirmed after requirements).',
        },
        {
          type: 'heading',
          id: 'why-pdfs-fall-short',
          level: 2,
          text: 'Why a resume PDF alone is often not enough',
        },
        {
          type: 'paragraph',
          text: 'Recruiters, internship coordinators, and freelance clients often scan dozens of identical resumes. A live, fast-loading portfolio URL lets someone immediately see your layout taste, read how you approached a real project, and reach you on mobile without downloading files.',
        },
        {
          type: 'heading',
          id: 'essential-sections',
          level: 2,
          text: 'Four essential sections to include',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Clear Hero: Your name, current degree or focus (for example, CSE student or frontend developer), and a button to view projects or contact you.',
            'Project Showcase: List 2–3 real coursework, personal, or hackathon projects. Briefly explain what problem each solves and the exact tech stack used.',
            'About & Skills: Share your background, tools you genuinely know, and links to GitHub or LinkedIn.',
            'Contact Section: Provide an email, phone/WhatsApp, or simple contact form so people can reply effortlessly.',
          ],
        },
        {
          type: 'heading',
          id: 'keep-it-honest',
          level: 2,
          text: 'Keep your portfolio honest and mobile-first',
        },
        {
          type: 'paragraph',
          text: 'Avoid filling empty space with invented percentages, fake client testimonials, or skill progress bars. Clear writing, fast loading speed, clean typography, and a responsive mobile layout leave a much stronger impression.',
        },
        {
          type: 'callout',
          title: 'Portfolio Websites at Stack Dev',
          text: 'Need help launching a clean personal site? Stack Dev builds custom, responsive, SEO-optimized Portfolio Websites for professionals, developers, students, and creatives starting around 2,000 BDT, with the final price confirmed after reviewing your requirements.',
        },
        {
          type: 'heading',
          id: 'faq',
          level: 2,
          text: 'Frequently asked questions',
        },
        {
          type: 'heading',
          id: 'faq-few-projects',
          level: 3,
          text: 'What if I only have one or two personal projects?',
        },
        {
          type: 'paragraph',
          text: 'Two well-explained personal or academic projects are far better than five rushed placeholders. Focus on explaining what you built, which technologies you used, and what problem it addresses.',
        },
        {
          type: 'heading',
          id: 'faq-cost',
          level: 3,
          text: 'How much does a Portfolio Website cost if Stack Dev builds it?',
        },
        {
          type: 'paragraph',
          text: 'Portfolio Websites start around 2,000 BDT. We review your sections and requirements during a free consultation and confirm the exact price before starting.',
        },
      ],
      bn: [
        {
          type: 'heading',
          id: 'short-answer',
          level: 2,
          text: 'সংক্ষিপ্ত উত্তর',
        },
        {
          type: 'paragraph',
          text: 'একজন শিক্ষার্থীর ভালো পোর্টফোলিও ওয়েবসাইটের জন্য ভারী অ্যানিমেশন বা অসংখ্য পেজের প্রয়োজন নেই। এতে মূলত চারটি স্পষ্ট অংশ থাকা দরকার: আপনি কী নিয়ে কাজ করেন তার সংক্ষিপ্ত পরিচিতি, ২–৩টি বাস্তব প্রজেক্টের বিবরণ, আপনার দক্ষতা ও প্রোফাইল লিঙ্কসহ একটি About সেকশন এবং সহজ Contact সেকশন। আপনি নিজে তৈরি করতে পারেন অথবা Stack Dev-এর মাধ্যমে প্রায় ২,০০০ টাকা থেকে পোর্টফোলিও ওয়েবসাইট তৈরি করে নিতে পারেন (চাহিদা অনুযায়ী চূড়ান্ত মূল্য নির্ধারিত হবে)।',
        },
        {
          type: 'heading',
          id: 'why-pdfs-fall-short',
          level: 2,
          text: 'শুধু PDF সিভি কেন অনেক সময় যথেষ্ট হয় না?',
        },
        {
          type: 'paragraph',
          text: 'রিক্রুটার বা ক্লায়েন্টরা প্রতিদিন অনেক একই ধরনের সিভি দেখেন। একটি দ্রুতগতির লাইভ পোর্টফোলিও লিঙ্ক থাকলে তারা কোনো ফাইল ডাউনলোড না করেই মোবাইল বা ডেস্কটপ থেকে আপনার কাজ, প্রজেক্টের ভাবনা এবং যোগাযোগের তথ্য সহজেই দেখতে পারেন।',
        },
        {
          type: 'heading',
          id: 'essential-sections',
          level: 2,
          text: 'যে ৪টি সেকশন অবশ্যই রাখা উচিত',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'পরিচ্ছন্ন Hero সেকশন: আপনার নাম, পড়াশোনা বা কাজের ক্ষেত্র এবং প্রজেক্ট দেখার বা যোগাযোগ করার বাটন।',
            'Project Showcase: আপনার ২–৩টি বাস্তব প্রজেক্ট বা ইউনিভার্সিটি প্রজেক্ট—প্রতিটি কোন সমস্যা সমাধান করে এবং কোন টেকনোলজি ব্যবহৃত হয়েছে তা সংক্ষেপে লিখুন।',
            'About ও Skills: আপনার শিক্ষাগত পরিচয়, যেসব টুলস বাস্তবে জানেন সেগুলোর তালিকা এবং GitHub বা প্রোফাইল লিঙ্ক।',
            'Contact সেকশন: সহজে যোগাযোগ করার জন্য ইমেইল, ফোন/WhatsApp অথবা একটি কন্টাক্ট ফর্ম।',
          ],
        },
        {
          type: 'heading',
          id: 'keep-it-honest',
          level: 2,
          text: 'সততা ও মোবাইল-ফার্স্ট ডিজাইন বজায় রাখুন',
        },
        {
          type: 'paragraph',
          text: 'পোর্টফোলিওতে অপ্রয়োজনীয় শতকরা হার, বানানো রিভিউ বা কাল্পনিক সংখ্যা ব্যবহার করবেন না। পরিচ্ছন্ন লেখা, দ্রুত লোডিং এবং মোবাইলে সহজ পাঠযোগ্যতা অনেক বেশি পেশাদার ছাপ ফেলে।',
        },
        {
          type: 'callout',
          title: 'Stack Dev-এ পোর্টফোলিও ওয়েবসাইট',
          text: 'প্রফেশনাল, ডেভেলপার, শিক্ষার্থী ও ক্রিয়েটিভদের জন্য কাস্টম, রেসপন্সিভ ও SEO-অপটিমাইজড পোর্টফোলিও ওয়েবসাইট প্রায় ২,০০০ টাকা থেকে শুরু হয় এবং চাহিদা পর্যালোচনার পর চূড়ান্ত মূল্য নিশ্চিত করা হয়।',
        },
        {
          type: 'heading',
          id: 'faq',
          level: 2,
          text: 'সাধারণ প্রশ্নাবলী',
        },
        {
          type: 'heading',
          id: 'faq-few-projects',
          level: 3,
          text: 'আমার যদি মাত্র ১–২টি প্রজেক্ট থাকে, তবে কি পোর্টফোলিও বানানো উচিত?',
        },
        {
          type: 'paragraph',
          text: 'হ্যাঁ। অসম্পূর্ণ পাঁচটি ডেমোর চেয়ে পরিচ্ছন্নভাবে ব্যাখ্যা করা দুটি বাস্তব প্রজেক্ট অনেক বেশি কার্যকর। প্রতিটি প্রজেক্টের উদ্দেশ্য এবং ব্যবহৃত প্রযুক্তি স্পষ্টভাবে লিখুন।',
        },
        {
          type: 'heading',
          id: 'faq-cost',
          level: 3,
          text: 'Stack Dev থেকে পোর্টফোলিও ওয়েবসাইট নিলে খরচ কেমন হবে?',
        },
        {
          type: 'paragraph',
          text: 'পোর্টফোলিও ওয়েবসাইট প্রায় ২,০০০ টাকা থেকে শুরু হয়। ফ্রি কনসালটেশনে আপনার প্রয়োজনীয় সেকশনগুলো জেনে কাজ শুরুর আগে চূড়ান্ত মূল্য জানিয়ে দেওয়া হবে।',
        },
      ],
    },
  },
];

export function getPostBySlug(slug: string | undefined): BlogPost | undefined {
  if (!slug) return undefined;
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  for (const post of BLOG_POSTS) {
    for (const tag of post.tags) {
      tagSet.add(tag);
    }
  }
  return Array.from(tagSet);
}

export function formatPostDate(isoDate: string, locale: Locale): string {
  const date = new Date(`${isoDate}T00:00:00Z`);
  return new Intl.DateTimeFormat(locale === 'bn' ? 'bn-BD' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
