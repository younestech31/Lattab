'use client';

import React from 'react';
import ObfuscatedContact from './ObfuscatedContact';
import { Language } from '@/lib/i18n/translations';

export interface ObfuscatedPhoneProps {
  number?: string;
  display?: string;
  lang?: Language;
  className?: string;
  ariaLabel?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export default function ObfuscatedPhone({
  lang = 'ar',
  className = '',
  ariaLabel,
  icon,
  children,
}: ObfuscatedPhoneProps) {
  return (
    <ObfuscatedContact
      type="phone"
      lang={lang}
      className={className}
      ariaLabel={ariaLabel}
      icon={icon}
    >
      {children}
    </ObfuscatedContact>
  );
}
