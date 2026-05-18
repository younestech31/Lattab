export function validateBearerAuth(request: Request): boolean {
  const auth = request.headers.get('Authorization');
  return auth === `Bearer ${process.env.CRON_SECRET}`;
}
