export function validateBearerAuth(request: Request, secret: string = process.env.CRON_SECRET || ''): boolean {
  const auth = request.headers.get('Authorization');
  return auth === `Bearer ${secret}`;
}
