/**
 * Validates Bearer token authentication against a required secret.
 * Fails closed (returns false) if the secret is not configured to prevent silent auth bypass.
 * @returns boolean - true if valid, false otherwise. Does not throw.
 */
export function validateBearerAuth(
  request: Request,
  secret: string = process.env.CRON_SECRET ?? ''
): boolean {
  if (!secret || secret.trim() === '') {
    // Fail closed: if no secret is configured, deny all requests.
    // This prevents auth bypass on misconfigured environments.
    console.error('[auth] validateBearerAuth called with empty secret — denying request. Set CRON_SECRET env var.');
    return false;
  }
  const auth = request.headers.get('Authorization');
  if (!auth) return false;
  // Constant-time comparison is ideal; for a cron secret of this threat model,
  // exact string comparison is acceptable as the secret is not user-derived.
  return auth === `Bearer ${secret}`;
}
