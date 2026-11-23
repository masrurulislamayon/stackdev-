import { BRAND } from '@/src/data/brand';
import type { UtmParams } from '@/src/lib/analytics';

export const DEFAULT_FORMSPREE_ID = 'xwlovjqd';

export interface LeadPayload extends UtmParams {
  name: string;
  phone: string;
  email?: string;
  projectType: string;
  budget: string;
  message: string;
  _gotcha?: string;
}

export function resolveFormspreeFormId(): string {
  const envId = import.meta.env.VITE_FORMSPREE_ID?.trim();
  if (envId) return envId;

  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT?.trim();
  if (endpoint) {
    const match = endpoint.match(/\/f\/([a-zA-Z0-9_-]+)/);
    if (match?.[1]) return match[1];
  }

  return DEFAULT_FORMSPREE_ID;
}

export function buildWhatsAppLeadUrl(payload: LeadPayload): string {
  const lines = [
    `Hello Stack Dev,`,
    `Name: ${payload.name.trim() || '-'}`,
    `Phone / WhatsApp: ${payload.phone.trim() || '-'}`,
    payload.email?.trim() ? `Email: ${payload.email.trim()}` : null,
    payload.projectType ? `Project type: ${payload.projectType}` : null,
    payload.budget ? `Budget range: ${payload.budget}` : null,
    `Message: ${payload.message.trim() || '-'}`,
  ].filter(Boolean);

  return `${BRAND.whatsappHref}?text=${encodeURIComponent(lines.join('\n'))}`;
}
