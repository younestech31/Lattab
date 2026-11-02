'use client';

import React from 'react';
import ObfuscatedContact from './ObfuscatedContact';

export interface PhoneLinkProps {
  type?: 'office';
  lang?: 'ar' | 'fr';
  number?: string;
  display?: string;
  className?: string;
  ariaLabel?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export default function PhoneLink({
  lang = 'ar',
  className = '',
  ariaLabel,
  icon,
  children,
}: PhoneLinkProps) {
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
