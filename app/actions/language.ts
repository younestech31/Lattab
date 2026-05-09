'use server';

import { cookies } from 'next/headers';

export async function setLanguageCookie(lang: 'ar' | 'fr') {
  const cookieStore = await cookies();
  cookieStore.set('lang', lang, {
    maxAge: 60 * 60 * 24 * 365,
    httpOnly: false,
    sameSite: 'lax',
    path: '/'
  });
}
