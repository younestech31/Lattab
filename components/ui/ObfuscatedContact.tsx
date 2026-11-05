'use client';

import React, { useState } from 'react';
import { officeTelDigits, officeEmail, buildInquiryWaUrl } from '@/lib/contact/channels';

export interface ObfuscatedContactProps {
  type: 'phone' | 'email' | 'whatsapp';
  lang?: 'ar' | 'fr';
  service?: string;
  className?: string;
  ariaLabel?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export default function ObfuscatedContact({
  type,
  lang = 'ar',
  service = '',
  className = '',
  ariaLabel,
  icon,
  children,
}: ObfuscatedContactProps) {
  const [revealed, setRevealed] = useState(false);

  const handleReveal = () => {
    if (!revealed) {
      setRevealed(true);
    }
  };

  const defaultLabel = type === 'phone'
    ? `${ariaLabel || (lang === 'fr' ? "Appeler l'office notarial" : 'الاتصال بأمانة ديوان التوثيق')} : 0562 29 69 81`
    : ariaLabel || (
        type === 'email'
          ? (lang === 'fr' ? "Envoyer un courriel à l'office notarial" : 'إرسال بريد إلكتروني للديوان')
          : (lang === 'fr' ? 'Demande de renseignement administratif via WhatsApp' : 'استفسار إداري عبر واتساب')
      );

  const href = type === 'phone'
    ? `tel:+${officeTelDigits()}`
    : type === 'email'
    ? `mailto:${officeEmail()}`
    : buildInquiryWaUrl(lang, service);

  return (
    <a
      href={href}
      target={type === 'whatsapp' ? '_blank' : undefined}
      rel={type === 'whatsapp' ? 'noopener noreferrer' : undefined}
      onPointerDown={handleReveal}
      onMouseEnter={handleReveal}
      onFocus={handleReveal}
      className={`inline-flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-lg transition-colors ${className}`}
      aria-label={defaultLabel}
    >
      {icon}
      {children != null && children !== false ? (
        children
      ) : type === 'phone' ? (
        <span
          dir="ltr"
          style={{ unicodeBidi: 'isolate' }}
          className="whitespace-nowrap"
        >
          {revealed ? '0562 29 69 81' : '0562 •• •• ••'}
        </span>
      ) : type === 'email' ? (
        <span
          dir="ltr"
          style={{ unicodeBidi: 'isolate' }}
          className="whitespace-nowrap"
        >
          {revealed ? officeEmail() : 'm••••@gmail.com'}
        </span>
      ) : null}
    </a>
  );
}
