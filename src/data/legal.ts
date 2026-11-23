import type { LocalizedText } from './services';

export type LegalDocKey = 'privacy' | 'terms' | 'refund';

export interface LegalSection {
  id: string;
  heading: LocalizedText;
  paragraphs: LocalizedText[];
  bullets?: LocalizedText[];
}

export interface LegalDocument {
  key: LegalDocKey;
  title: LocalizedText;
  subtitle: LocalizedText;
  lastUpdated: LocalizedText;
  sections: LegalSection[];
}

export const LEGAL_DOCUMENTS: Record<LegalDocKey, LegalDocument> = {
  privacy: {
    key: 'privacy',
    title: {
      en: 'Privacy Policy',
      bn: 'প্রাইভেসি পলিসি',
    },
    subtitle: {
      en: 'How Stack Dev collects, uses, and protects information submitted through this website and the Client Portal.',
      bn: 'এই ওয়েবসাইট এবং Client Portal-এর মাধ্যমে সংগৃহীত তথ্য Stack Dev কীভাবে ব্যবহার ও সংরক্ষণ করে।',
    },
    lastUpdated: {
      en: 'November 14, 2026',
      bn: '১৪ নভেম্বর, ২০২৬',
    },
    sections: [
      {
        id: 'data-collected',
        heading: {
          en: '1. Information We Collect',
          bn: '১. আমরা কী ধরনের তথ্য সংগ্রহ করি',
        },
        paragraphs: [
          {
            en: 'When you submit a consultation request via the contact form or use the Client Portal as an active client, Stack Dev collects only the information needed to communicate and deliver your project:',
            bn: 'আপনি কন্টাক্ট ফর্মে কনসালটেশনের অনুরোধ পাঠালে অথবা Client Portal ব্যবহার করলে, প্রজেক্ট যোগাযোগ ও ডেলিভারির জন্য প্রয়োজনীয় তথ্যই কেবল সংগ্রহ করা হয়:',
          },
        ],
        bullets: [
          {
            en: 'Name and business or project reference',
            bn: 'আপনার নাম এবং ব্যবসা বা প্রজেক্টের পরিচয়',
          },
          {
            en: 'Phone / WhatsApp number and optional email address',
            bn: 'ফোন / WhatsApp নম্বর এবং ঐচ্ছিক ইমেইল ঠিকানা',
          },
          {
            en: 'Project details, selected service/package, budget range, and inquiry message',
            bn: 'প্রজেক্টের বিবরণ, নির্বাচিত সেবা বা প্যাকেজ, বাজেট পরিসর এবং বার্তা',
          },
          {
            en: 'Files, documents, briefs, and messages shared inside the Client Portal',
            bn: 'Client Portal-এ শেয়ার করা ফাইল, ডকুমেন্ট, ব্রিফ এবং মেসেজসমূহ',
          },
        ],
      },
      {
        id: 'how-used',
        heading: {
          en: '2. How Your Information Is Used',
          bn: '২. আপনার তথ্য কীভাবে ব্যবহৃত হয়',
        },
        paragraphs: [
          {
            en: 'Your information is used strictly to respond to consultation inquiries, prepare project scopes and quotes, manage ongoing development, share project files, and provide support.',
            bn: 'আপনার তথ্য শুধুমাত্র কনসালটেশনের উত্তর দেওয়া, প্রজেক্টের স্কোপ ও কোটেশন তৈরি, চলমান ডেভেলপমেন্ট পরিচালনা, ফাইল আদান-প্রদান এবং সাপোর্ট প্রদানের কাজে ব্যবহৃত হয়।',
          },
        ],
      },
      {
        id: 'no-selling',
        heading: {
          en: '3. No Selling of Personal Data',
          bn: '৩. ব্যক্তিগত তথ্য বিক্রি না করার নীতি',
        },
        paragraphs: [
          {
            en: 'Stack Dev does not sell, rent, or trade your personal contact details, project briefs, or uploaded files to third parties or marketing brokers.',
            bn: 'Stack Dev আপনার ব্যক্তিগত যোগাযোগের তথ্য, প্রজেক্টের বিবরণ বা আপলোড করা ফাইল কোনো তৃতীয় পক্ষ বা মার্কেটিং সংস্থার কাছে বিক্রি বা ভাড়া দেয় না।',
          },
          {
            en: '[TO CONFIRM] List any specific third-party form/hosting/storage providers used in production (for example, form handling endpoint, database host, or email delivery provider) once finalized.',
            bn: '[TO CONFIRM] প্রোডাকশনে ব্যবহৃত নির্দিষ্ট তৃতীয় পক্ষের হোস্টিং, ফর্ম হ্যান্ডলার বা স্টোরেজ সেবার নাম চূড়ান্ত হলে এখানে যুক্ত করুন।',
          },
        ],
      },
      {
        id: 'cookies-storage',
        heading: {
          en: '4. Cookies, Local Storage & Analytics',
          bn: '৪. কুকিজ, লোকাল স্টোরেজ ও অ্যানালিটিক্স',
        },
        paragraphs: [
          {
            en: 'This website stores your preferred language (English or Bangla) and color theme (light or dark) in your browser localStorage so your viewing preference persists across visits.',
            bn: 'এই ওয়েবসাইট আপনার পছন্দের ভাষা (English বা বাংলা) এবং থিম (লাইট বা ডার্ক) ব্রাউজারের localStorage-এ সংরক্ষণ করে যাতে পরবর্তীতে একই পছন্দ বজায় থাকে।',
          },
          {
            en: '[TO CONFIRM] Specify whether privacy-friendly analytics or additional cookies are enabled on the live site.',
            bn: '[TO CONFIRM] লাইভ সাইটে কোনো অ্যানালিটিক্স বা অতিরিক্ত কুকি চালু থাকলে তার বিবরণ এখানে নিশ্চিত করুন।',
          },
        ],
      },
      {
        id: 'data-security',
        heading: {
          en: '5. Data Security & Retention',
          bn: '৫. ডেটা নিরাপত্তা ও সংরক্ষণকাল',
        },
        paragraphs: [
          {
            en: 'Reasonable technical and access-control measures are applied to protect inquiry details and Client Portal files from unauthorized access. However, no internet transmission or storage system can be guaranteed completely secure.',
            bn: 'আপনার প্রজেক্টের তথ্য ও Client Portal-এর ফাইল অননুমোদিত অ্যাক্সেস থেকে সুরক্ষিত রাখতে যৌক্তিক নিরাপত্তামূলক ব্যবস্থা গ্রহণ করা হয়। তবে ইন্টারনেটের মাধ্যমে কোনো তথ্য আদান-প্রদান শতভাগ ঝুঁকিমুক্ত নয়।',
          },
          {
            en: '[TO CONFIRM] Define exact retention duration for inquiry records and completed project files, or how clients can request deletion.',
            bn: '[TO CONFIRM] ইনকোয়ারি তথ্য ও সম্পন্ন প্রজেক্টের ফাইল কতদিন সংরক্ষণ করা হবে এবং কীভাবে ডিলিট করার অনুরোধ জানানো যাবে তা এখানে নির্ধারণ করুন।',
          },
        ],
      },
      {
        id: 'contact',
        heading: {
          en: '6. Contact Details',
          bn: '৬. যোগাযোগের ঠিকানা',
        },
        paragraphs: [
          {
            en: 'For questions about your data or to request updates/removal of your contact details, reach Stack Dev in Savar, Dhaka, Bangladesh (1340) by phone or WhatsApp at +880 1963-131282, or via the "Stack Dev" Facebook page (Messenger).',
            bn: 'আপনার তথ্য সম্পর্কে যেকোনো প্রশ্ন অথবা তথ্য সংশোধন বা অপসারণের অনুরোধের জন্য Stack Dev, সাভার, ঢাকা, বাংলাদেশ (১৩৪০)-এ +880 1963-131282 নম্বরে কল বা WhatsApp করুন, অথবা "Stack Dev" Facebook পেজে (Messenger) যোগাযোগ করুন।',
          },
        ],
      },
    ],
  },

  terms: {
    key: 'terms',
    title: {
      en: 'Terms of Service',
      bn: 'সেবার শর্তাবলী',
    },
    subtitle: {
      en: 'General terms governing website, Flutter mobile app, UI/UX, and software projects delivered by Stack Dev.',
      bn: 'Stack Dev-এর মাধ্যমে ওয়েবসাইট, Flutter মোবাইল অ্যাপ, UI/UX এবং সফটওয়্যার প্রজেক্ট পরিচালনার সাধারণ শর্তাবলী।',
    },
    lastUpdated: {
      en: 'November 14, 2026',
      bn: '১৪ নভেম্বর, ২০২৬',
    },
    sections: [
      {
        id: 'engagement',
        heading: {
          en: '1. Consultation & Project Confirmation',
          bn: '১. কনসালটেশন ও প্রজেক্ট চূড়ান্তকরণ',
        },
        paragraphs: [
          {
            en: 'New clients receive a free consultation to discuss requirements. Before any paid work begins, we confirm project scope, timeline, deliverables, and total price together in writing.',
            bn: 'নতুন ক্লায়েন্টদের জন্য ফ্রি কনসালটেশনের মাধ্যমে প্রয়োজনীয়তা আলোচনা করা হয়। কাজ শুরু করার আগে প্রজেক্টের স্কোপ, সময়সীমা, ডেলিভারেবল এবং মূল্য লিখিতভাবে একসাথে চূড়ান্ত করা হয়।',
          },
        ],
      },
      {
        id: 'scope-revisions',
        heading: {
          en: '2. Project Scope, Revisions & Delivery',
          bn: '২. প্রজেক্ট স্কোপ, রিভিশন ও ডেলিভারি',
        },
        paragraphs: [
          {
            en: 'Deliverables and revision rounds follow the agreed package or custom quote:',
            bn: 'ডেলিভারেবল ও রিভিশন রাউন্ড নির্বাচিত প্যাকেজ বা কাস্টম কোটেশন অনুযায়ী নির্ধারিত হয়:',
          },
        ],
        bullets: [
          {
            en: 'Basic package: up to 5 pages, 1 round of revisions, delivery in 7–10 days.',
            bn: 'Basic প্যাকেজ: সর্বোচ্চ ৫টি পেজ, ১ রাউন্ড রিভিশন, ৭–১০ দিনে ডেলিভারি।',
          },
          {
            en: 'Premium package: unlimited pages, custom backend/CMS, UI/UX design, 3 rounds of revisions, delivery in 15–25 days, and 30 days of post-launch support.',
            bn: 'Premium প্যাকেজ: আনলিমিটেড পেজ, কাস্টম ব্যাকএন্ড/CMS, UI/UX ডিজাইন, ৩ রাউন্ড রিভিশন, ১৫–২৫ দিনে ডেলিভারি এবং ৩০ দিনের পোস্ট-লঞ্চ সাপোর্ট।',
          },
          {
            en: 'Portfolio Websites, Flutter mobile apps, e-commerce stores, and custom web applications follow the scope and timeline confirmed during consultation.',
            bn: 'পোর্টফোলিও ওয়েবসাইট, Flutter অ্যাপ, ই-কমার্স স্টোর এবং কাস্টম ওয়েব অ্যাপের ক্ষেত্রে কনসালটেশনে নির্ধারিত স্কোপ ও সময়সীমা প্রযোজ্য হবে।',
          },
        ],
      },
      {
        id: 'client-responsibilities',
        heading: {
          en: '3. Client Responsibilities',
          bn: '৩. ক্লায়েন্টের দায়িত্ব',
        },
        paragraphs: [
          {
            en: 'Timely delivery depends on timely client collaboration. Clients agree to provide accurate business information, text/media assets (unless otherwise agreed), domain/hosting access where required, and timely review feedback during revision rounds.',
            bn: 'নির্ধারিত সময়ে ডেলিভারির জন্য ক্লায়েন্টের সহযোগিতা অপরিহার্য। প্রজেক্টের প্রয়োজনীয় তথ্য, টেক্সট বা ছবি (অন্যথা চুক্তি না হলে), ডোমেইন/হোস্টিং অ্যাক্সেস এবং রিভিশন রাউন্ডে সময়মতো ফিডব্যাক প্রদান ক্লায়েন্টের দায়িত্ব।',
          },
        ],
      },
      {
        id: 'payments',
        heading: {
          en: '4. Fees & Payment Schedule',
          bn: '৪. ফি ও পেমেন্ট পদ্ধতি',
        },
        paragraphs: [
          {
            en: '[TO CONFIRM] Specify your exact payment milestones (for example, advance deposit percentage before starting, milestone payment, and final balance prior to handover) and accepted payment methods (bKash, Nagad, bank transfer, or international transfer).',
            bn: '[TO CONFIRM] কাজ শুরুর পূর্বে অগ্রিম পেমেন্টের শতাংশ, মাইলস্টোন পেমেন্ট ও চূড়ান্ত হস্তান্তরের আগে বাকি অর্থ পরিশোধের নিয়ম এবং গ্রহণযোগ্য পেমেন্ট মাধ্যম (যেমন বিকাশ, নগদ, ব্যাংক ট্রান্সফার ইত্যাদি) এখানে নিশ্চিত করুন।',
          },
        ],
      },
      {
        id: 'intellectual-property',
        heading: {
          en: '5. Intellectual Property Transfer',
          bn: '৫. মেধাস্বত্ব (Intellectual Property) হস্তান্তর',
        },
        paragraphs: [
          {
            en: 'Upon receipt of full payment for the agreed project, ownership rights to the custom project deliverables and source code built specifically for the client transfer to the client, excluding open-source libraries, third-party tools, or reusable internal utilities.',
            bn: 'চুক্তিবদ্ধ সম্পূর্ণ অর্থ পরিশোধের পর ক্লায়েন্টের জন্য বিশেষভাবে নির্মিত প্রজেক্টের ডেলিভারেবল ও কাস্টম সোর্স কোডের মালিকানা ক্লায়েন্টের কাছে হস্তান্তরিত হবে (ওপেন-সোর্স লাইব্রেরি, তৃতীয় পক্ষের টুলস ও সাধারণ ইউটিলিটি ব্যতীত)।',
          },
          {
            en: '[TO CONFIRM] Confirm whether Stack Dev retains the right to showcase completed work in its portfolio unless the client requests confidentiality.',
            bn: '[TO CONFIRM] ক্লায়েন্ট গোপনীয়তা না চাইলে Stack Dev-এর পোর্টফোলিওতে সম্পন্ন কাজ প্রদর্শনের অনুমতি থাকবে কি না তা এখানে চূড়ান্ত করুন।',
          },
        ],
      },
      {
        id: 'contact',
        heading: {
          en: '6. Contact & Governing Details',
          bn: '৬. যোগাযোগ ও প্রযোজ্য তথ্য',
        },
        paragraphs: [
          {
            en: '[TO CONFIRM] Add applicable governing jurisdiction note (e.g., Bangladesh) if required after owner review. For any questions, contact Stack Dev at Savar, Dhaka, Bangladesh (1340), phone +880 1963-131282, or Facebook page "Stack Dev".',
            bn: '[TO CONFIRM] প্রয়োজনে বাংলাদেশের প্রযোজ্য আইন সংক্রান্ত ধারা যুক্ত করুন। যেকোনো প্রশ্নের জন্য যোগাযোগ করুন: Stack Dev, সাভার, ঢাকা, বাংলাদেশ (১৩৪০), ফোন +880 1963-131282 অথবা Facebook পেজ "Stack Dev"।',
          },
        ],
      },
    ],
  },

  refund: {
    key: 'refund',
    title: {
      en: 'Refund Policy',
      bn: 'রিফান্ড পলিসি',
    },
    subtitle: {
      en: 'Template refund and cancellation guidelines for Stack Dev projects.',
      bn: 'Stack Dev-এর প্রজেক্টের জন্য বাতিলকরণ ও রিফান্ড সংক্রান্ত খসড়া নীতিমালা।',
    },
    lastUpdated: {
      en: 'November 14, 2026',
      bn: '১৪ নভেম্বর, ২০২৬',
    },
    sections: [
      {
        id: 'overview',
        heading: {
          en: '1. Before You Start',
          bn: '১. কাজ শুরুর আগে স্পষ্টতা',
        },
        paragraphs: [
          {
            en: 'Stack Dev offers a free consultation for new clients and confirms project scope, timeline, and price together before starting so expectations are clear on both sides.',
            bn: 'নতুন ক্লায়েন্টদের জন্য Stack Dev ফ্রি কনসালটেশন প্রদান করে এবং কাজ শুরু করার আগেই উভয় পক্ষের সম্মতিতে স্কোপ, সময়সীমা ও মূল্য চূড়ান্ত করে।',
          },
        ],
      },
      {
        id: 'pre-start-cancellation',
        heading: {
          en: '2. Cancellation Before Work Begins',
          bn: '২. কাজ শুরুর আগে বাতিলকরণ',
        },
        paragraphs: [
          {
            en: '[TO CONFIRM] Define whether an advance deposit is refundable if a client cancels before design or development work begins, and specify any cancellation request window (for example, within X hours/days of payment).',
            bn: '[TO CONFIRM] ডিজাইন বা ডেভেলপমেন্ট শুরু হওয়ার আগে ক্লায়েন্ট প্রজেক্ট বাতিল করলে অগ্রিম পেমেন্ট রিফান্ডযোগ্য কি না এবং অনুরোধের সময়সীমা কতটুকু তা এখানে নিশ্চিত করুন।',
          },
        ],
      },
      {
        id: 'in-progress-work',
        heading: {
          en: '3. In-Progress Projects & Milestones',
          bn: '৩. চলমান প্রজেক্ট ও মাইলস্টোন',
        },
        paragraphs: [
          {
            en: '[TO CONFIRM] Specify how refunds or partial settlements are handled once design or development has started (for example, deducting completed milestone hours/stages vs. non-refundable milestone payments).',
            bn: '[TO CONFIRM] ডিজাইন বা ডেভেলপমেন্ট শুরু হয়ে গেলে সম্পন্ন অংশ বা মাইলস্টোনের বিপরীতে আংশিক রিফান্ড বা সমন্বয়ের নিয়ম কীভাবে প্রযোজ্য হবে তা এখানে নির্ধারণ করুন।',
          },
        ],
      },
      {
        id: 'third-party-costs',
        heading: {
          en: '4. Third-Party Costs & Completed Delivery',
          bn: '৪. তৃতীয় পক্ষের খরচ ও সম্পন্ন ডেলিভারি',
        },
        paragraphs: [
          {
            en: '[TO CONFIRM] Clarify that third-party purchases made on a client’s behalf (such as domain registrations, hosting plans, paid plugins, or app store developer fees) and fully delivered/approved projects are handled according to vendor terms or are non-refundable.',
            bn: '[TO CONFIRM] ক্লায়েন্টের পক্ষে কেনা ডোমেইন, হোস্টিং, পেইড প্লাগইন বা অ্যাপ স্টোর ফি এবং সম্পূর্ণ ডেলিভারি ও অনুমোদিত প্রজেক্টের ক্ষেত্রে রিফান্ড প্রযোজ্য হবে কি না তা এখানে স্পষ্ট করুন।',
          },
        ],
      },
      {
        id: 'request-review',
        heading: {
          en: '5. How to Request a Review',
          bn: '৫. যোগাযোগ ও পর্যালোচনা',
        },
        paragraphs: [
          {
            en: 'If an issue arises during your project, please reach out directly so we can resolve it promptly through revisions or an agreed resolution. Contact Stack Dev at +880 1963-131282 (phone/WhatsApp), via the "Stack Dev" Facebook page (Messenger), or at Savar, Dhaka, Bangladesh (1340).',
            bn: 'প্রজেক্ট চলাকালীন কোনো সমস্যা দেখা দিলে দ্রুত সমাধান বা রিভিশনের জন্য সরাসরি যোগাযোগ করুন: +880 1963-131282 (ফোন/WhatsApp), "Stack Dev" Facebook পেজ (Messenger) অথবা সাভার, ঢাকা, বাংলাদেশ (১৩৪০)।',
          },
        ],
      },
    ],
  },
};
