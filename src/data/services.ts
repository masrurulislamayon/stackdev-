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

export interface ServiceItem {
  slug: ServiceSlug;
  icon: ServiceIconName;
  title: LocalizedText;
  shortDescription: LocalizedText;
  heroDescription: LocalizedText;
  bullets: [LocalizedText, LocalizedText, LocalizedText];
  whatYouGet: LocalizedText[];
  processSteps: [ServiceStepItem, ServiceStepItem, ServiceStepItem, ServiceStepItem];
  pricingNote: ServicePricingNote;
  relatedPackage: {
    name: LocalizedText;
    href: string;
  };
  faqs: [ServiceFaqItem, ServiceFaqItem, ServiceFaqItem];
}

const SHARED_PROCESS_STEPS: [ServiceStepItem, ServiceStepItem, ServiceStepItem, ServiceStepItem] = [
  {
    number: '01.',
    title: {
      en: 'Free Consultation',
      bn: 'ফ্রি কনসালটেশন',
    },
    description: {
      en: 'Discuss your goals, target audience, and required features directly with the founder.',
      bn: 'আপনার লক্ষ্য, টার্গেট অডিয়েন্স এবং প্রয়োজনীয় ফিচার নিয়ে সরাসরি ফাউন্ডারের সাথে আলোচনা করুন।',
    },
  },
  {
    number: '02.',
    title: {
      en: 'Scope & Clear Pricing',
      bn: 'স্কোপ ও স্বচ্ছ মূল্য নির্ধারণ',
    },
    description: {
      en: 'Confirm the exact deliverables, revision rounds, and timeline before work begins.',
      bn: 'কাজ শুরু করার আগেই ডেলিভারেবল, রিভিশন রাউন্ড এবং সময়সীমা স্পষ্টভাবে চূড়ান্ত করা হয়।',
    },
  },
  {
    number: '03.',
    title: {
      en: 'Design & Development',
      bn: 'ডিজাইন ও ডেভেলপমেন্ট',
    },
    description: {
      en: 'Mobile-first interfaces and clean, performance-focused code built step by step.',
      bn: 'মোবাইল-ফার্স্ট ইন্টারফেস এবং পরিচ্ছন্ন, দ্রুতগতির কোডের মাধ্যমে ধাপে ধাপে নির্মাণ।',
    },
  },
  {
    number: '04.',
    title: {
      en: 'Review & Launch',
      bn: 'রিভিউ ও লঞ্চ',
    },
    description: {
      en: 'Complete agreed revisions, verify responsiveness and SEO basics, and go live smoothly.',
      bn: 'নির্ধারিত রিভিশন সম্পন্ন করে রেসপন্সিভনেস ও SEO যাচাইয়ের পর স্মুথভাবে লাইভ করা হয়।',
    },
  },
];

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
      en: 'High-performance business websites built mobile-first with clean code, SEO-friendly structure, and reliable speed across devices.',
      bn: 'পরিচ্ছন্ন কোড, মোবাইল-ফার্স্ট লেআউট এবং SEO-বান্ধব কাঠামোয় তৈরি উচ্চ-গতির বিজনেস ওয়েবসাইট।',
    },
    bullets: [
      { en: 'Lightning-fast loading speed', bn: 'দ্রুতগতির লোডিং পারফরম্যান্স' },
      { en: 'Mobile-first responsive layout', bn: 'মোবাইল-ফার্স্ট রেসপন্সিভ লেআউট' },
      { en: 'SEO-friendly clean structure', bn: 'SEO-বান্ধব পরিচ্ছন্ন কাঠামো' },
    ],
    whatYouGet: [
      {
        en: 'Responsive layout tested across mobile, tablet, and desktop screens',
        bn: 'মোবাইল, ট্যাবলেট এবং ডেস্কটপ স্ক্রিনের জন্য পরীক্ষিত রেসপন্সিভ ডিজাইন',
      },
      {
        en: 'Fast-loading frontend architecture with clean semantic markup',
        bn: 'পরিচ্ছন্ন সিম্যান্টিক মার্কআপসহ দ্রুত-লোডিং ফ্রন্টএন্ড আর্কিটেকচার',
      },
      {
        en: 'Contact form integration for direct client inquiries',
        bn: 'সরাসরি ক্লায়েন্ট ইনকোয়ারির জন্য কন্টাক্ট ফর্ম ইন্টিগ্রেশন',
      },
      {
        en: 'Basic or advanced SEO setup depending on your selected package',
        bn: 'আপনার নির্বাচিত প্যাকেজ অনুযায়ী বেসিক বা অ্যাডভান্সড SEO সেটআপ',
      },
      {
        en: 'Custom backend/CMS integration available with the Premium package',
        bn: 'Premium প্যাকেজে কাস্টম ব্যাকএন্ড বা CMS ইন্টিগ্রেশনের সুবিধা',
      },
      {
        en: 'Direct founder communication throughout design, build, and revisions',
        bn: 'ডিজাইন, ডেভেলপমেন্ট ও রিভিশন জুড়ে সরাসরি ফাউন্ডারের সাথে যোগাযোগ',
      },
    ],
    processSteps: SHARED_PROCESS_STEPS,
    pricingNote: {
      label: { en: 'Package Pricing', bn: 'প্যাকেজ মূল্য' },
      highlight: {
        en: 'Basic: 15,000 BDT (~$135) · Premium: 35,000 BDT (~$315)',
        bn: 'Basic: ১৫,০০০ টাকা (প্রায় $135) · Premium: ৩৫,০০০ টাকা (প্রায় $315)',
      },
      summary: {
        en: 'Basic includes up to 5 pages, contact form, basic SEO, 1 revision round, and 7–10 days delivery. Premium adds unlimited pages, custom backend/CMS, UI/UX design, advanced SEO, 3 revision rounds, 15–25 days delivery, and 30 days post-launch support.',
        bn: 'Basic প্যাকেজে থাকছে সর্বোচ্চ ৫টি পেজ, কন্টাক্ট ফর্ম, বেসিক SEO, ১টি রিভিশন রাউন্ড এবং ৭–১০ দিনে ডেলিভারি। Premium প্যাকেজে আনলিমিটেড পেজ, কাস্টম ব্যাকএন্ড/CMS, UI/UX ডিজাইন, অ্যাডভান্সড SEO, ৩টি রিভিশন রাউন্ড, ১৫–২৫ দিনে ডেলিভারি ও ৩০ দিনের পোস্ট-লঞ্চ সাপোর্ট রয়েছে।',
      },
    },
    relatedPackage: {
      name: { en: 'Basic & Premium Web Packages', bn: 'Basic ও Premium ওয়েব প্যাকেজ' },
      href: '/pricing',
    },
    faqs: [
      {
        id: 'web-faq-1',
        question: {
          en: 'How long does it take to build a website?',
          bn: 'একটি ওয়েবসাইট তৈরি করতে কতদিন সময় লাগে?',
        },
        answer: {
          en: 'The Basic package (up to 5 pages) is delivered in 7–10 days, while the Premium package is delivered in 15–25 days depending on final requirements.',
          bn: 'Basic প্যাকেজ (সর্বোচ্চ ৫ পেজ) ৭–১০ দিনে এবং Premium প্যাকেজ চূড়ান্ত চাহিদার ওপর ভিত্তি করে ১৫–২৫ দিনে ডেলিভারি দেওয়া হয়।',
        },
      },
      {
        id: 'web-faq-2',
        question: {
          en: 'What is the difference between Basic and Premium web packages?',
          bn: 'Basic এবং Premium ওয়েব প্যাকেজের মধ্যে পার্থক্য কী?',
        },
        answer: {
          en: 'Basic covers up to 5 static/responsive pages with 1 revision round. Premium includes unlimited pages, a custom backend/CMS, UI/UX design, advanced SEO and performance, 3 revision rounds, and 30 days of post-launch support.',
          bn: 'Basic প্যাকেজে সর্বোচ্চ ৫টি পেজ ও ১টি রিভিশন রাউন্ড থাকে। Premium প্যাকেজে আনলিমিটেড পেজ, কাস্টম ব্যাকএন্ড/CMS, UI/UX ডিজাইন, অ্যাডভান্সড SEO ও পারফরম্যান্স, ৩টি রিভিশন রাউন্ড এবং ৩০ দিনের পোস্ট-লঞ্চ সাপোর্ট যুক্ত থাকে।',
        },
      },
      {
        id: 'web-faq-3',
        question: {
          en: 'Can I request a custom web quote if my requirements are different?',
          bn: 'আমার চাহিদা আলাদা হলে কি কাস্টম কোটেশন নেওয়া যাবে?',
        },
        answer: {
          en: 'Yes. Start with a free consultation via phone, WhatsApp, or Messenger to share your requirements and receive a tailored scope.',
          bn: 'হ্যাঁ। ফোন, WhatsApp বা Messenger-এ ফ্রি কনসালটেশনের মাধ্যমে আপনার প্রয়োজন জানালে কাস্টম স্কোপ ও মূল্য জানানো হবে।',
        },
      },
    ],
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
      bn: 'একটি কোডবেস থেকেই iOS এবং Android-এর জন্য ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ।',
    },
    heroDescription: {
      en: 'Smooth, responsive Flutter applications designed for both iOS and Android users with clean UI and dependable performance.',
      bn: 'iOS ও Android উভয় প্ল্যাটফর্মের ব্যবহারকারীদের জন্য পরিচ্ছন্ন UI ও নির্ভরযোগ্য পারফরম্যান্সের Flutter মোবাইল অ্যাপ।',
    },
    bullets: [
      { en: 'Single codebase for iOS & Android', bn: 'iOS ও Android-এর জন্য একক কোডবেস' },
      { en: 'Smooth native-feel performance', bn: 'স্মুথ ও দ্রুতগতির পারফরম্যান্স' },
      { en: 'Clean, mobile-first UI/UX', bn: 'পরিচ্ছন্ন মোবাইল-ফার্স্ট UI/UX' },
    ],
    whatYouGet: [
      {
        en: 'Cross-platform Flutter app architecture targeting both iOS and Android',
        bn: 'iOS এবং Android উভয় প্ল্যাটফর্মের উপযোগী ক্রস-প্ল্যাটফর্ম Flutter অ্যাপ আর্কিটেকচার',
      },
      {
        en: 'Mobile-first screen layouts designed for comfortable thumb navigation',
        bn: 'সহজ ব্যবহারের জন্য মোবাইল-ফার্স্ট স্ক্রিন লেআউট',
      },
      {
        en: 'API and backend data integration tailored to your app features',
        bn: 'অ্যাপের ফিচার অনুযায়ী API এবং ব্যাকএন্ড ডেটা ইন্টিগ্রেশন',
      },
      {
        en: 'Structured state management for responsive user interactions',
        bn: 'দ্রুত ইউজার ইন্টারঅ্যাকশনের জন্য সুসংগঠিত স্টেট ম্যানেজমেন্ট',
      },
      {
        en: 'Direct progress updates and review builds via the Client Portal',
        bn: 'Client Portal-এর মাধ্যমে সরাসরি প্রজেক্ট আপডেট ও রিভিউ বিল্ড',
      },
      {
        en: 'Clear feature scoping before development begins',
        bn: 'ডেভেলপমেন্ট শুরুর আগেই স্পষ্ট ফিচার ও স্কোপ নির্ধারণ',
      },
    ],
    processSteps: SHARED_PROCESS_STEPS,
    pricingNote: {
      label: { en: 'Pricing Model', bn: 'মূল্য নির্ধারণ' },
      highlight: {
        en: 'Custom quote after a free consultation',
        bn: 'ফ্রি কনসালটেশনের পর কাস্টম কোটেশন',
      },
      summary: {
        en: 'Flutter mobile app pricing depends on screen count, integrations, and backend complexity. Book a free consultation to review your idea and receive an exact quote.',
        bn: 'Flutter মোবাইল অ্যাপের মূল্য স্ক্রিন সংখ্যা, ইন্টিগ্রেশন এবং ব্যাকএন্ড জটিলতার ওপর নির্ভর করে। আপনার আইডিয়া নিয়ে ফ্রি কনসালটেশনের পর নির্ধারিত কোটেশন দেওয়া হয়।',
      },
    },
    relatedPackage: {
      name: { en: 'Custom Flutter App Quote', bn: 'কাস্টম Flutter অ্যাপ কোটেশন' },
      href: '/contact',
    },
    faqs: [
      {
        id: 'flutter-faq-1',
        question: {
          en: 'Does one Flutter build work on both Android and iOS?',
          bn: 'একটি Flutter প্রজেক্ট কি Android ও iOS দুটোতেই কাজ করে?',
        },
        answer: {
          en: 'Yes. Flutter allows building cross-platform iOS and Android applications from a shared codebase, helping keep maintenance simpler and pricing competitive.',
          bn: 'হ্যাঁ। Flutter-এ একটি শেয়ার্ড কোডবেস থেকেই iOS এবং Android অ্যাপ তৈরি করা যায়, যা মেইনটেন্যান্স সহজ ও খরচ সাশ্রয়ী রাখে।',
        },
      },
      {
        id: 'flutter-faq-2',
        question: {
          en: 'How is the cost of a Flutter app calculated?',
          bn: 'Flutter অ্যাপের খরচ কীভাবে নির্ধারণ করা হয়?',
        },
        answer: {
          en: 'Every mobile app has different screens, user roles, and backend needs, so Stack Dev provides a custom quote after discussing your requirements in a free consultation.',
          bn: 'প্রতিটি অ্যাপের স্ক্রিন, ইউজার রোল এবং ব্যাকএন্ডের চাহিদা ভিন্ন হয়। তাই ফ্রি কনসালটেশনে আপনার প্রয়োজন বোঝার পর কাস্টম কোটেশন দেওয়া হয়।',
        },
      },
      {
        id: 'flutter-faq-3',
        question: {
          en: 'Can Stack Dev design the mobile UI/UX as well?',
          bn: 'Stack Dev কি মোবাইল অ্যাপের UI/UX ডিজাইনও করে?',
        },
        answer: {
          en: 'Yes. UI/UX design is one of Stack Dev’s core focuses and can be included as part of your mobile app build.',
          bn: 'হ্যাঁ। UI/UX ডিজাইন Stack Dev-এর অন্যতম মূল সেবা এবং এটি আপনার মোবাইল অ্যাপ প্রজেক্টের সাথেই যুক্ত করা যায়।',
        },
      },
    ],
  },
  {
    slug: 'ui-ux-design',
    icon: 'pen-tool',
    title: {
      en: 'UI/UX Design',
      bn: 'UI/UX ডিজাইন',
    },
    shortDescription: {
      en: 'Modern, user-friendly interfaces crafted for clarity and conversion.',
      bn: 'স্পষ্টতা ও সহজ ব্যবহারের জন্য আধুনিক এবং ইউজার-ফ্রেন্ডলি ইন্টারফেস ডিজাইন।',
    },
    heroDescription: {
      en: 'Clean, intentional web and mobile interface design focused on legibility, responsive layouts, and effortless user flows.',
      bn: 'পঠনযোগ্যতা, রেসপন্সিভ লেআউট এবং সহজ ইউজার ফ্লো-কেন্দ্রিক পরিচ্ছন্ন ওয়েব ও মোবাইল ইন্টারফেস ডিজাইন।',
    },
    bullets: [
      { en: 'Clean visual hierarchy & spacing', bn: 'পরিচ্ছন্ন ভিজ্যুয়াল হায়ারার্কি ও স্পেসিং' },
      { en: 'Mobile and desktop layouts', bn: 'মোবাইল ও ডেস্কটপ উভয় লেআউট' },
      { en: 'Included in Premium web package', bn: 'Premium ওয়েব প্যাকেজে অন্তর্ভুক্ত' },
    ],
    whatYouGet: [
      {
        en: 'Clear page structure and user flow mapped to your business goals',
        bn: 'আপনার ব্যবসার লক্ষ্যের সাথে সামঞ্জস্যপূর্ণ স্পষ্ট পেজ স্ট্রাকচার ও ইউজার ফ্লো',
      },
      {
        en: 'Mobile-first responsive layouts for phones, tablets, and desktops',
        bn: 'ফোন, ট্যাবলেট ও ডেস্কটপের জন্য মোবাইল-ফার্স্ট রেসপন্সিভ লেআউট',
      },
      {
        en: 'Consistent typography, color contrast, and reusable UI components',
        bn: 'সামঞ্জস্যপূর্ণ টাইপোগ্রাফি, কালার কন্ট্রাস্ট এবং রিইউজেবল UI কম্পোনেন্ট',
      },
      {
        en: 'Light and dark theme color planning where required',
        bn: 'প্রয়োজন অনুযায়ী লাইট ও ডার্ক থিমের কালার পরিকল্পনা',
      },
      {
        en: 'Developer-ready handoff or direct implementation by Stack Dev',
        bn: 'ডেভেলপার-রেডি হ্যান্ডঅফ অথবা সরাসরি Stack Dev-এর মাধ্যমে ইমপ্লিমেন্টেশন',
      },
      {
        en: 'Structured revision rounds to refine details before build',
        bn: 'ডেভেলপমেন্টের আগে ডিজাইন চূড়ান্ত করতে সুনির্দিষ্ট রিভিশন রাউন্ড',
      },
    ],
    processSteps: SHARED_PROCESS_STEPS,
    pricingNote: {
      label: { en: 'Pricing & Inclusion', bn: 'মূল্য ও অন্তর্ভুক্তি' },
      highlight: {
        en: 'Included in Premium (35,000 BDT / ~$315) or custom quote',
        bn: 'Premium প্যাকেজে (৩৫,০০০ টাকা) অন্তর্ভুক্ত অথবা কাস্টম কোটেশন',
      },
      summary: {
        en: 'UI/UX design is included directly inside the Premium web package (35,000 BDT, about $315). For standalone web or mobile app UI/UX design, contact Stack Dev for a custom quote after a free consultation.',
        bn: 'Premium ওয়েব প্যাকেজে (৩৫,০০০ টাকা, প্রায় $315) UI/UX ডিজাইন সরাসরি অন্তর্ভুক্ত থাকে। শুধুমাত্র UI/UX ডিজাইন প্রজেক্টের জন্য ফ্রি কনসালটেশনের পর কাস্টম কোটেশন দেওয়া হয়।',
      },
    },
    relatedPackage: {
      name: { en: 'Premium Package (UI/UX Included)', bn: 'Premium প্যাকেজ (UI/UX সহ)' },
      href: '/pricing',
    },
    faqs: [
      {
        id: 'uiux-faq-1',
        question: {
          en: 'Is UI/UX design included when I order a website?',
          bn: 'ওয়েবসাইট অর্ডার করলে কি UI/UX ডিজাইন অন্তর্ভুক্ত থাকে?',
        },
        answer: {
          en: 'Custom UI/UX design is explicitly included in the Premium package (35,000 BDT / ~$315). You can also discuss standalone UI/UX work in a free consultation.',
          bn: 'Premium প্যাকেজে (৩৫,০০০ টাকা / প্রায় $315) কাস্টম UI/UX ডিজাইন অন্তর্ভুক্ত থাকে। আলাদাভাবে UI/UX কাজের জন্য ফ্রি কনসালটেশনে আলোচনা করতে পারেন।',
        },
      },
      {
        id: 'uiux-faq-2',
        question: {
          en: 'Do you design for both web platforms and mobile apps?',
          bn: 'আপনারা কি ওয়েব ও মোবাইল অ্যাপ দুটোর জন্যই ডিজাইন করেন?',
        },
        answer: {
          en: 'Yes. Stack Dev designs interfaces for websites, custom web applications, e-commerce stores, and Flutter mobile applications.',
          bn: 'হ্যাঁ। Stack Dev ওয়েবসাইট, কাস্টম ওয়েব অ্যাপ্লিকেশন, ই-কমার্স স্টোর এবং Flutter মোবাইল অ্যাপের জন্য ইন্টারফেস ডিজাইন করে।',
        },
      },
      {
        id: 'uiux-faq-3',
        question: {
          en: 'Can Stack Dev also build the design into a working product?',
          bn: 'ডিজাইনের পাশাপাশি Stack Dev কি সেটি কোড করে তৈরিও করে দেয়?',
        },
        answer: {
          en: 'Yes. Because the same solo founder handles both UI/UX and development, the final website or Flutter app stays faithful to the approved design.',
          bn: 'হ্যাঁ। যেহেতু একই ফাউন্ডার UI/UX এবং ডেভেলপমেন্ট উভয়ই পরিচালনা করেন, তাই চূড়ান্ত ওয়েবসাইট বা Flutter অ্যাপ অনুমোদিত ডিজাইনের সাথে সম্পূর্ণ সামঞ্জস্যপূর্ণ থাকে।',
        },
      },
    ],
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
      bn: 'মোবাইলে দ্রুত কেনাকাটার উপযোগী সম্পূর্ণ অনলাইন স্টোর ডেভেলপমেন্ট।',
    },
    heroDescription: {
      en: 'End-to-end online stores with clear product discovery, smooth mobile checkout flows, and SEO-friendly product pages.',
      bn: 'সহজ প্রোডাক্ট ব্রাউজিং, মসৃণ মোবাইল চেকআউট এবং SEO-বান্ধব প্রোডাক্ট পেজসহ সম্পূর্ণ অনলাইন স্টোর।',
    },
    bullets: [
      { en: 'Product catalog & category setup', bn: 'প্রোডাক্ট ক্যাটালগ ও ক্যাটাগরি সেটআপ' },
      { en: 'Mobile-first shopping experience', bn: 'মোবাইল-ফার্স্ট শপিং অভিজ্ঞতা' },
      { en: 'SEO-friendly store structure', bn: 'SEO-বান্ধব স্টোর কাঠামো' },
    ],
    whatYouGet: [
      {
        en: 'Structured product catalog with clean filtering and product detail pages',
        bn: 'পরিচ্ছন্ন ফিল্টারিং ও প্রোডাক্ট ডিটেইল পেজসহ সুসংগঠিত ক্যাটালগ',
      },
      {
        en: 'Responsive mobile-first storefront tailored for shoppers on phones',
        bn: 'মোবাইল ক্রেতাদের কথা মাথায় রেখে তৈরি রেসপন্সিভ স্টোরফ্রন্ট',
      },
      {
        en: 'Shopping cart and streamlined order placement workflow',
        bn: 'শপিং কার্ট এবং সহজ অর্ডার প্লেসমেন্ট ফ্লো',
      },
      {
        en: 'Product and store management capabilities suited to your workflow',
        bn: 'আপনার কাজের ধরন অনুযায়ী প্রোডাক্ট ও স্টোর ম্যানেজমেন্ট সুবিধা',
      },
      {
        en: 'Performance-focused pages built for fast browsing',
        bn: 'দ্রুত ব্রাউজিংয়ের জন্য পারফরম্যান্স-কেন্দ্রিক পেজ',
      },
      {
        en: 'SEO-friendly URLs and metadata structure for products and categories',
        bn: 'প্রোডাক্ট ও ক্যাটাগরির জন্য SEO-বান্ধব URL ও মেটাডেটা কাঠামো',
      },
    ],
    processSteps: SHARED_PROCESS_STEPS,
    pricingNote: {
      label: { en: 'Pricing Model', bn: 'মূল্য নির্ধারণ' },
      highlight: {
        en: 'Custom quote after a free consultation',
        bn: 'ফ্রি কনসালটেশনের পর কাস্টম কোটেশন',
      },
      summary: {
        en: 'E-commerce store quotes depend on catalog size, payment/delivery workflows, and custom features. Book a free consultation to discuss your store requirements.',
        bn: 'ই-কমার্স স্টোরের মূল্য প্রোডাক্ট সংখ্যা, পেমেন্ট/ডেলিভারি ফ্লো এবং কাস্টম ফিচারের ওপর নির্ভর করে। আপনার স্টোরের চাহিদা নিয়ে ফ্রি কনসালটেশন বুক করুন।',
      },
    },
    relatedPackage: {
      name: { en: 'Custom E-commerce Quote', bn: 'কাস্টম ই-কমার্স কোটেশন' },
      href: '/contact',
    },
    faqs: [
      {
        id: 'ecom-faq-1',
        question: {
          en: 'Why are e-commerce stores quoted individually?',
          bn: 'ই-কমার্স স্টোরের জন্য আলাদা কোটেশন দেওয়া হয় কেন?',
        },
        answer: {
          en: 'Store requirements vary widely in product variations, order management, and integrations, so a free consultation ensures you only pay for what your store actually needs.',
          bn: 'প্রোডাক্ট ভ্যারিয়েশন, অর্ডার ম্যানেজমেন্ট এবং ইন্টিগ্রেশনের চাহিদা স্টোরভেদে ভিন্ন হয়। ফ্রি কনসালটেশনের মাধ্যমে আপনার প্রকৃত প্রয়োজন অনুযায়ী সঠিক মূল্য নির্ধারণ করা হয়।',
        },
      },
      {
        id: 'ecom-faq-2',
        question: {
          en: 'Are e-commerce storefronts optimized for mobile shoppers?',
          bn: 'ই-কমার্স স্টোরগুলো কি মোবাইল ব্যবহারকারীদের জন্য অপটিমাইজড থাকে?',
        },
        answer: {
          en: 'Yes. Every Stack Dev store is built mobile-first with fast loading speeds and clean navigation on smartphones.',
          bn: 'হ্যাঁ। Stack Dev-এর প্রতিটি স্টোর মোবাইল-ফার্স্ট পদ্ধতিতে দ্রুত লোডিং এবং সহজ নেভিগেশনসহ তৈরি করা হয়।',
        },
      },
      {
        id: 'ecom-faq-3',
        question: {
          en: 'Can I pair an e-commerce website with a Flutter mobile app?',
          bn: 'ই-কমার্স ওয়েবসাইটের সাথে কি Flutter মোবাইল অ্যাপও নেওয়া যাবে?',
        },
        answer: {
          en: 'Yes. You can discuss a combined web store and Flutter mobile app roadmap during your free consultation.',
          bn: 'হ্যাঁ। ফ্রি কনসালটেশনে ওয়েব স্টোর ও Flutter মোবাইল অ্যাপের সমন্বিত পরিকল্পনা নিয়ে আলোচনা করতে পারেন।',
        },
      },
    ],
  },
  {
    slug: 'web-applications',
    icon: 'app-window',
    title: {
      en: 'Web Applications',
      bn: 'ওয়েব অ্যাপ্লিকেশন',
    },
    shortDescription: {
      en: 'Tailored business automation tools and interactive web software.',
      bn: 'ব্যবসার কাজের উপযোগী কাস্টম অটোমেশন টুলস ও ইন্টারঅ্যাক্টিভ ওয়েব সফটওয়্যার।',
    },
    heroDescription: {
      en: 'Custom web applications built to streamline daily workflows, manage records, and replace manual spreadsheets with reliable software.',
      bn: 'দৈনন্দিন কাজ সহজ করা, ডেটা ব্যবস্থাপনা এবং ম্যানুয়াল কাজের ঝামেলা কমাতে তৈরি কাস্টম ওয়েব অ্যাপ্লিকেশন।',
    },
    bullets: [
      { en: 'Tailored to your exact workflow', bn: 'আপনার কাজের ধরন অনুযায়ী তৈরি' },
      { en: 'Clean, intuitive user dashboards', bn: 'পরিচ্ছন্ন ও সহজ ড্যাশবোর্ড' },
      { en: 'Fast and scalable architecture', bn: 'দ্রুতগতির ও স্কেলেবল আর্কিটেকচার' },
    ],
    whatYouGet: [
      {
        en: 'Custom workflow screens designed around how your business operates',
        bn: 'আপনার ব্যবসার কাজের প্রক্রিয়ার সাথে মিল রেখে কাস্টম স্ক্রিন ডিজাইন',
      },
      {
        en: 'Clean data entry forms, tables, and structured status tracking',
        bn: 'পরিচ্ছন্ন ডেটা ফর্ম, টেবিল এবং সুসংগঠিত স্ট্যাটাস ট্র্যাকিং',
      },
      {
        en: 'Responsive web access across office desktops and mobile devices',
        bn: 'অফিস ডেস্কটপ ও মোবাইল ডিভাইস থেকে রেসপন্সিভ ব্যবহারের সুবিধা',
      },
      {
        en: 'Custom backend/API logic matched to your operational needs',
        bn: 'আপনার প্রয়োজন অনুযায়ী কাস্টম ব্যাকএন্ড ও API লজিক',
      },
      {
        en: 'Clear documentation and direct communication with the builder',
        bn: 'স্পষ্ট ডকুমেন্টেশন এবং সরাসরি ডেভেলপারের সাথে যোগাযোগ',
      },
      {
        en: 'Project milestones and files tracked cleanly in the Client Portal',
        bn: 'Client Portal-এ প্রজেক্টের অগ্রগতি ও ফাইল দেখার সুবিধা',
      },
    ],
    processSteps: SHARED_PROCESS_STEPS,
    pricingNote: {
      label: { en: 'Pricing Model', bn: 'মূল্য নির্ধারণ' },
      highlight: {
        en: 'Custom quote after a free consultation',
        bn: 'ফ্রি কনসালটেশনের পর কাস্টম কোটেশন',
      },
      summary: {
        en: 'Custom web applications vary by user roles, data workflows, and automation logic. Schedule a free consultation to map your requirements and get a clear quote.',
        bn: 'কাস্টম ওয়েব অ্যাপ্লিকেশনের মূল্য ইউজার রোল, ডেটা ফ্লো এবং অটোমেশনের ওপর নির্ভর করে। ফ্রি কনসালটেশনে আপনার প্রয়োজন আলোচনা করে নির্ধারিত কোটেশন নিন।',
      },
    },
    relatedPackage: {
      name: { en: 'Custom Web App Quote', bn: 'কাস্টম ওয়েব অ্যাপ কোটেশন' },
      href: '/contact',
    },
    faqs: [
      {
        id: 'webapp-faq-1',
        question: {
          en: 'What kind of web applications does Stack Dev build?',
          bn: 'Stack Dev কী ধরনের ওয়েব অ্যাপ্লিকেশন তৈরি করে?',
        },
        answer: {
          en: 'Stack Dev builds tailored business automation tools, internal portals, client dashboards, and custom interactive web software.',
          bn: 'Stack Dev ব্যবসার জন্য কাস্টম অটোমেশন টুলস, ইন্টারনাল পোর্টাল, ক্লায়েন্ট ড্যাশবোর্ড এবং ইন্টারঅ্যাক্টিভ ওয়েব সফটওয়্যার তৈরি করে।',
        },
      },
      {
        id: 'webapp-faq-2',
        question: {
          en: 'How do we get started on a custom web app?',
          bn: 'কাস্টম ওয়েব অ্যাপ প্রজেক্ট কীভাবে শুরু করব?',
        },
        answer: {
          en: 'Book a free consultation via the contact page, phone (+880 1963-131282), WhatsApp, or Facebook Messenger to outline your workflow and receive a custom quote.',
          bn: 'কন্টাক্ট পেজ, ফোন (+880 1963-131282), WhatsApp বা Facebook Messenger-এর মাধ্যমে ফ্রি কনসালটেশন নিয়ে আপনার কাজের ধরন জানালেই কাস্টম কোটেশন পাবেন।',
        },
      },
      {
        id: 'webapp-faq-3',
        question: {
          en: 'Can I track project progress while it is being built?',
          bn: 'কাজ চলাকালীন প্রজেক্টের অগ্রগতি কীভাবে দেখা যাবে?',
        },
        answer: {
          en: 'Yes. Existing clients have access to the Client Portal to check project status, files, messages, and invoices.',
          bn: 'হ্যাঁ। বর্তমান ক্লায়েন্টরা Client Portal-এর মাধ্যমে প্রজেক্টের অবস্থা, ফাইল, মেসেজ এবং ইনভয়েস দেখতে পারেন।',
        },
      },
    ],
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
      en: 'Clean, fast personal websites to present your work, skills, CV, and contact details professionally online.',
      bn: 'আপনার কাজ, দক্ষতা, সিভি এবং যোগাযোগের তথ্য পেশাদারভাবে উপস্থাপনের জন্য পরিচ্ছন্ন ও দ্রুতগতির ব্যক্তিগত ওয়েবসাইট।',
    },
    bullets: [
      { en: 'Starting around 2,000 BDT', bn: 'শুরু প্রায় ২,০০০ টাকা থেকে' },
      { en: 'Fast, responsive personal layout', bn: 'দ্রুতগতির রেসপন্সিভ ব্যক্তিগত লেআউট' },
      { en: 'SEO-friendly profile structure', bn: 'SEO-বান্ধব প্রোফাইল কাঠামো' },
    ],
    whatYouGet: [
      {
        en: 'Clean personal introduction, bio, and skills showcase',
        bn: 'পরিচ্ছন্ন ব্যক্তিগত পরিচিতি, বায়ো এবং দক্ষতার উপস্থাপনা',
      },
      {
        en: 'Dedicated projects or case-study showcase section',
        bn: 'প্রজেক্ট বা কাজের নমুনা প্রদর্শনের জন্য নির্ধারিত সেকশন',
      },
      {
        en: 'Mobile-friendly responsive layout that loads quickly on any connection',
        bn: 'যেকোনো ইন্টারনেট সংযোগে দ্রুত লোড হওয়া মোবাইল-বান্ধব লেআউট',
      },
      {
        en: 'Direct contact links or inquiry form for recruiters and clients',
        bn: 'রিক্রুটার ও ক্লায়েন্টদের জন্য সরাসরি যোগাযোগের লিঙ্ক বা ফর্ম',
      },
      {
        en: 'SEO-friendly structure so people can find your name easily',
        bn: 'সহজে খুঁজে পাওয়ার উপযোগী SEO-বান্ধব কাঠামো',
      },
      {
        en: 'Clear final price confirmed upfront after reviewing your requirements',
        bn: 'প্রয়োজনীয়তা আলোচনার পর শুরুতেই চূড়ান্ত মূল্য নিশ্চিতকরণ',
      },
    ],
    processSteps: SHARED_PROCESS_STEPS,
    pricingNote: {
      label: { en: 'Starting Price', bn: 'প্রারম্ভিক মূল্য' },
      highlight: {
        en: 'Starting around 2,000 BDT (final price confirmed after requirements)',
        bn: 'শুরু প্রায় ২,০০০ টাকা থেকে (চাহিদা অনুযায়ী চূড়ান্ত মূল্য নির্ধারিত হবে)',
      },
      summary: {
        en: 'Portfolio websites start around 2,000 BDT, with the final price confirmed after discussing your sections, features, and content requirements.',
        bn: 'পোর্টফোলিও ওয়েবসাইট প্রায় ২,০০০ টাকা থেকে শুরু হয় এবং আপনার পেজ, সেকশন ও কন্টেন্টের চাহিদা আলোচনার পর চূড়ান্ত মূল্য নিশ্চিত করা হয়।',
      },
    },
    relatedPackage: {
      name: { en: 'Portfolio Website Package', bn: 'পোর্টফোলিও ওয়েবসাইট প্যাকেজ' },
      href: '/pricing',
    },
    faqs: [
      {
        id: 'port-faq-1',
        question: {
          en: 'Who is the Portfolio Website service designed for?',
          bn: 'পোর্টফোলিও ওয়েবসাইট সেবাটি কাদের জন্য?',
        },
        answer: {
          en: 'It is built for professionals, developers, students, and creatives who want a clean personal site to present their work and contact information.',
          bn: 'প্রফেশনাল, ডেভেলপার, শিক্ষার্থী এবং ক্রিয়েটিভরা যারা নিজেদের কাজ ও যোগাযোগের তথ্য সুন্দরভাবে তুলে ধরতে চান, তাদের জন্য এটি উপযুক্ত।',
        },
      },
      {
        id: 'port-faq-2',
        question: {
          en: 'How much does a portfolio website cost?',
          bn: 'একটি পোর্টফোলিও ওয়েবসাইট তৈরিতে খরচ কেমন?',
        },
        answer: {
          en: 'Portfolio websites start around 2,000 BDT. The final price is confirmed after reviewing your specific requirements during a free consultation.',
          bn: 'পোর্টফোলিও ওয়েবসাইট প্রায় ২,০০০ টাকা থেকে শুরু হয়। ফ্রি কনসালটেশনে আপনার প্রয়োজন জানার পর চূড়ান্ত মূল্য নিশ্চিত করা হয়।',
        },
      },
      {
        id: 'port-faq-3',
        question: {
          en: 'Will my portfolio site work well on mobile phones?',
          bn: 'আমার পোর্টফোলিও সাইটটি কি মোবাইলেও ভালোভাবে কাজ করবে?',
        },
        answer: {
          en: 'Yes. Every portfolio website is built mobile-first so visitors, recruiters, and clients can browse comfortably on both phones and computers.',
          bn: 'হ্যাঁ। প্রতিটি পোর্টফোলিও ওয়েবসাইট মোবাইল-ফার্স্ট পদ্ধতিতে তৈরি করা হয়, যাতে মোবাইল ও কম্পিউটার উভয় ডিভাইসেই সুন্দরভাবে দেখা যায়।',
        },
      },
    ],
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
