import type { LocalizedText } from './services';

export interface HomeFaqItem {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
}

export const HOME_FAQS: HomeFaqItem[] = [
  {
    id: 'faq-services',
    question: {
      en: 'What services does Stack Dev offer?',
      bn: 'Stack Dev কী কী সেবা প্রদান করে?',
    },
    answer: {
      en: 'Stack Dev focuses on Web Development, Flutter Mobile Apps, and UI/UX Design—covering Custom Web Development, Flutter Mobile Apps, UI/UX Design, E-commerce Solutions, Web Applications, and Portfolio Websites.',
      bn: 'Stack Dev মূলত ওয়েব ডেভেলপমেন্ট, Flutter মোবাইল অ্যাপ এবং UI/UX ডিজাইন নিয়ে কাজ করে—যার মধ্যে কাস্টম ওয়েব ডেভেলপমেন্ট, Flutter মোবাইল অ্যাপ, UI/UX ডিজাইন, ই-কমার্স সমাধান, ওয়েব অ্যাপ্লিকেশন এবং পোর্টফোলিও ওয়েবসাইট অন্তর্ভুক্ত।',
    },
  },
  {
    id: 'faq-get-started',
    question: {
      en: 'How do I get started?',
      bn: 'কাজ কীভাবে শুরু করব?',
    },
    answer: {
      en: 'Message us on the Stack Dev Facebook page (Messenger), message on WhatsApp, or call +880 1963-131282. Share your idea and requirements to get a free consultation and recommendation, then we confirm scope, timeline, and price before development begins.',
      bn: 'Stack Dev Facebook পেজে (Messenger) মেসেজ দিন, WhatsApp-এ লিখুন অথবা +880 1963-131282 নম্বরে কল করুন। আপনার আইডিয়া ও প্রয়োজনীয়তা শেয়ার করলে ফ্রি কনসালটেশনে পরামর্শ দেওয়া হবে এবং কাজ শুরুর আগে স্কোপ, সময়সীমা ও মূল্য চূড়ান্ত করা হবে।',
    },
  },
  {
    id: 'faq-consultation',
    question: {
      en: 'Is the consultation free?',
      bn: 'কনসালটেশন কি ফ্রি?',
    },
    answer: {
      en: 'Yes. Stack Dev provides a free consultation for new clients and is always available to discuss your project needs.',
      bn: 'হ্যাঁ। নতুন ক্লায়েন্টদের জন্য Stack Dev-এ ফ্রি কনসালটেশন রয়েছে এবং আপনার প্রজেক্টের প্রয়োজনে আমরা সবসময় যোগাযোগের জন্য প্রস্তুত।',
    },
  },
  {
    id: 'faq-which-package',
    question: {
      en: 'Which package is right for me?',
      bn: 'আমার জন্য কোন প্যাকেজটি উপযুক্ত?',
    },
    answer: {
      en: 'Basic (15,000 BDT, about $135) works best for small businesses and landing pages up to 5 pages. Premium (35,000 BDT, about $315) is suited for growing businesses needing unlimited pages, a custom backend/CMS, and UI/UX design. Portfolio Websites start around 2,000 BDT for individuals, and Flutter, e-commerce, or larger web apps are quoted after a free consultation.',
      bn: 'ছোট ব্যবসা বা সর্বোচ্চ ৫ পেজের ল্যান্ডিং পেজের জন্য Basic (১৫,০০০ টাকা, প্রায় $135) সবচেয়ে ভালো। আনলিমিটেড পেজ, কাস্টম ব্যাকএন্ড/CMS ও UI/UX ডিজাইনের জন্য Premium (৩৫,০০০ টাকা, প্রায় $315) উপযুক্ত। ব্যক্তিগত সাইটের জন্য পোর্টফোলিও ওয়েবসাইট প্রায় ২,০০০ টাকা থেকে শুরু হয় এবং Flutter, ই-কমার্স বা কাস্টম ওয়েব অ্যাপের জন্য ফ্রি কনসালটেশনের পর কোটেশন দেওয়া হয়।',
    },
  },
  {
    id: 'faq-basic-premium',
    question: {
      en: 'What is included in Basic and Premium?',
      bn: 'Basic এবং Premium প্যাকেজে কী কী অন্তর্ভুক্ত থাকে?',
    },
    answer: {
      en: 'Basic includes up to 5 pages, responsive design, contact form integration, basic SEO setup, 1 round of revisions, and delivery in 7–10 days. Premium includes unlimited pages, responsive design, custom backend/CMS integration, advanced SEO + performance optimization, UI/UX design, 3 rounds of revisions, delivery in 15–25 days, and 30 days of post-launch support.',
      bn: 'Basic প্যাকেজে রয়েছে সর্বোচ্চ ৫টি পেজ, রেসপন্সিভ ডিজাইন, কন্টাক্ট ফর্ম ইন্টিগ্রেশন, বেসিক SEO সেটআপ, ১ রাউন্ড রিভিশন এবং ৭–১০ দিনে ডেলিভারি। Premium প্যাকেজে রয়েছে আনলিমিটেড পেজ, রেসপন্সিভ ডিজাইন, কাস্টম ব্যাকএন্ড/CMS, অ্যাডভান্সড SEO ও পারফরম্যান্স অপটিমাইজেশন, UI/UX ডিজাইন, ৩ রাউন্ড রিভিশন, ১৫–২৫ দিনে ডেলিভারি এবং ৩০ দিনের পোস্ট-লঞ্চ সাপোর্ট।',
    },
  },
  {
    id: 'faq-flutter',
    question: {
      en: 'Do you build Flutter mobile apps?',
      bn: 'আপনারা কি Flutter মোবাইল অ্যাপ তৈরি করেন?',
    },
    answer: {
      en: 'Yes. Stack Dev builds cross-platform iOS and Android applications with Flutter. Any platform-specific details or custom requirements not covered upfront—we will confirm this with you during the free consultation.',
      bn: 'হ্যাঁ। Stack Dev Flutter দিয়ে iOS এবং Android-এর জন্য ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ তৈরি করে। প্রজেক্টের বিশেষ কোনো প্রয়োজন থাকলে ফ্রি কনসালটেশনের সময় আমরা এটি আপনার সাথে চূড়ান্ত করব।',
    },
  },
  {
    id: 'faq-flutter-ecommerce-pricing',
    question: {
      en: 'How are Flutter and e-commerce projects priced?',
      bn: 'Flutter এবং ই-কমার্স প্রজেক্টের মূল্য কীভাবে নির্ধারণ করা হয়?',
    },
    answer: {
      en: 'Flutter mobile apps, e-commerce stores, and custom web applications receive a custom quote after a free consultation. For payment schedules or project-specific terms, we will confirm this with you during the free consultation.',
      bn: 'Flutter মোবাইল অ্যাপ, ই-কমার্স স্টোর এবং কাস্টম ওয়েব অ্যাপ্লিকেশনের জন্য ফ্রি কনসালটেশনের পর কাস্টম কোটেশন দেওয়া হয়। পেমেন্ট পদ্ধতি বা প্রজেক্ট-নির্দিষ্ট শর্তাবলি নিয়ে ফ্রি কনসালটেশনের সময় আমরা এটি আপনার সাথে চূড়ান্ত করব।',
    },
  },
  {
    id: 'faq-location-contact',
    question: {
      en: 'Where is Stack Dev located and how can I contact you?',
      bn: 'Stack Dev কোথায় অবস্থিত এবং কীভাবে যোগাযোগ করা যায়?',
    },
    answer: {
      en: 'Stack Dev is located in Savar, Dhaka, Bangladesh (1340). You can call or message on WhatsApp at +880 1963-131282, or message the "Stack Dev" Facebook page via Messenger.',
      bn: 'Stack Dev সাভার, ঢাকা, বাংলাদেশ (১৩৪০)-এ অবস্থিত। আপনি +880 1963-131282 নম্বরে কল বা WhatsApp করতে পারেন, অথবা "Stack Dev" Facebook পেজে Messenger-এর মাধ্যমে যোগাযোগ করতে পারেন।',
    },
  },
];
