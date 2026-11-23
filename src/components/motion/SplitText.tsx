import { m } from 'motion/react';
import { EASE_OUT } from './constants';

export interface SplitTextProps {
  text: string;
  delay?: number;
  stagger?: number;
}

/**
 * Word-by-word masked rise on scroll into view.
 * Splits on spaces only (never per-letter) so Bangla conjuncts are never broken.
 * Words remain real text nodes, so screen readers and search engines read the heading normally.
 */
export function SplitText({ text, delay = 0, stagger = 0.045 }: SplitTextProps) {
  const words = text.split(' ');

  return (
    <>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span className="inline-block overflow-hidden align-bottom py-[0.12em] -my-[0.12em]">
            <m.span
              className="inline-block will-change-transform"
              initial={{ y: '115%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.7, delay: delay + index * stagger, ease: EASE_OUT }}
            >
              {word}
            </m.span>
          </span>
          {index < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </>
  );
}
