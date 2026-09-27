import React from 'react';

export const PHONE_NUMBERS = {
  office: {
    tel: 'tel:+213562296981',
    e164: '+213562296981',
    display: '+213 562 29 69 81',
  },
  support: {
    tel: 'tel:+213558440001',
    e164: '+213558440001',
    display: '+213 558 44 00 01',
  },
} as const;

export type PhoneType = 'office' | 'support';

export interface PhoneLinkProps {
  type?: PhoneType;
  /** Custom raw E.164 number if not using standard type */
  number?: string;
  /** Custom display text if not using standard type */
  display?: string;
  className?: string;
  ariaLabel?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Unified PhoneLink component for bidirectional isolation (RTL/LTR).
 * Enforces dir="ltr", unicode-bidi: isolate, and whitespace-nowrap so phone numbers
 * never reverse, break across lines, or shift the '+' sign on mobile or RTL.
 */
export default function PhoneLink({
  type = 'office',
  number,
  display,
  className = '',
  ariaLabel,
  icon,
  children,
}: PhoneLinkProps) {
  const config = PHONE_NUMBERS[type] || PHONE_NUMBERS.office;
  const href = number ? (number.startsWith('tel:') ? number : `tel:${number}`) : config.tel;
  const text = display || (number === PHONE_NUMBERS.support.e164 ? PHONE_NUMBERS.support.display : config.display);

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 whitespace-nowrap ${className}`}
      aria-label={ariaLabel || text}
    >
      {icon}
      <span
        dir="ltr"
        style={{ unicodeBidi: 'isolate' }}
        className="font-mono whitespace-nowrap inline-block"
      >
        {children || text}
      </span>
    </a>
  );
}
