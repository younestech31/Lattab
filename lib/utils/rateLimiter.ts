import 'server-only';
import { createHash } from 'crypto';

interface Bucket {
  tokens: number;
  lastRefill: number;
  lastAccess: number;
}

// In-memory cache map acting as our LRU container with short-lived TTL
const cache = new Map<string, Bucket>();
const MAX_CACHE_SIZE = 1000;
const CACHE_TTL_MS = 60000; // 60 seconds TTL

// Ce rate-limiter offre une protection best-effort sur un seul worker. Pour une protection multi-instance garantie, un store distribué est requis.

/**
 * Hash IP using SHA-256 (truncated to 32 characters) to follow Law 06-02 compliance.
 * No personal data is stored in memory or logged in clear.
 */
export function hashIp(ip: string): string {
  return createHash('sha256').update(ip).digest('hex').substring(0, 32);
}

/**
 * Clean up old cache entries that are older than Cache TTL based on last access.
 */
function cleanupCache(now: number): void {
  for (const [key, bucket] of cache.entries()) {
    if (now - bucket.lastAccess > CACHE_TTL_MS) {
      cache.delete(key);
    }
  }
}

/**
 * Perform LRU eviction if the cache size exceeds our established limit.
 */
function enforceLruEviction(): void {
  if (cache.size <= MAX_CACHE_SIZE) return;
  
  let oldestKey: string | null = null;
  let oldestAccess = Infinity;
  
  for (const [key, bucket] of cache.entries()) {
    if (bucket.lastAccess < oldestAccess) {
      oldestAccess = bucket.lastAccess;
      oldestKey = key;
    }
  }
  
  if (oldestKey !== null) {
    cache.delete(oldestKey);
  }
}

interface RateLimitResult {
  success: boolean;
  retryAfter: number; // in seconds
  tokens: number;
}

/**
 * Token Bucket Rate Limiter
 * Limit: 3 requests per 10 minutes.
 * Refill rate: 3 tokens per 10 minutes (600,000 ms), which equals 1 token every 200,000 ms (200 seconds).
 */
export function checkRateLimit(ip: string): RateLimitResult {
  const now = Date.now();
  
  // Clean up stale cache records
  cleanupCache(now);
  
  const hashedIp = hashIp(ip);
  let bucket = cache.get(hashedIp);
  
  const maxTokens = 3;
  const refillWindowMs = 10 * 60 * 1000; // 10 minutes
  const refillRate = maxTokens / refillWindowMs; // tokens per ms
  
  if (!bucket) {
    bucket = {
      tokens: maxTokens,
      lastRefill: now,
      lastAccess: now
    };
  } else {
    // Accumulate tokens based on time passed
    const elapsed = now - bucket.lastRefill;
    const additionalTokens = elapsed * refillRate;
    bucket.tokens = Math.min(maxTokens, bucket.tokens + additionalTokens);
    bucket.lastRefill = now;
    bucket.lastAccess = now;
  }
  
  let success = false;
  let retryAfter = 0;
  
  if (bucket.tokens >= 1) {
    bucket.tokens -= 1;
    success = true;
  } else {
    const missingTokens = 1 - bucket.tokens;
    const msToWait = missingTokens / refillRate;
    retryAfter = Math.ceil(msToWait / 1000);
  }
  
  cache.set(hashedIp, bucket);
  enforceLruEviction();
  
  return {
    success,
    retryAfter,
    tokens: bucket.tokens
  };
}
