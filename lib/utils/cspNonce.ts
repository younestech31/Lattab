import { headers } from 'next/headers';

export async function getCspNonce(): Promise<string> {
  // Read the nonce from headers set by middleware
  const h = await headers();
  const nonce = h.get('x-nonce') || 'development-nonce';
  return nonce;
}
