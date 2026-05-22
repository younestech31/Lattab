'use server';

import { cookies } from 'next/headers';

export async function setConsentCookie(accepted: boolean): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set('cookie-consent', accepted ? 'true' : 'false', {
    maxAge: 60 * 60 * 24 * 365, // 1 an
    httpOnly: false, // doit être lisible côté client pour l'analytics
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });
}
