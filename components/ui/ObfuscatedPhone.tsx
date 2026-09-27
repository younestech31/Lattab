import React from 'react';
import PhoneLink from './PhoneLink';
import { Language } from '@/lib/i18n/translations';

export interface ObfuscatedPhoneProps {
  number: string;
  display: string;
  lang?: Language;
  className?: string;
}

export default function ObfuscatedPhone({ number, display, className = '' }: ObfuscatedPhoneProps) {
  return (
    <PhoneLink
      number={number}
      display={display}
      className={className}
    />
  );
}
