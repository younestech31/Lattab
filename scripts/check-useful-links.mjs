import { readFile } from 'node:fs/promises';

const sourceUrl = new URL('../lib/data/usefulLinks.ts', import.meta.url);
const source = await readFile(sourceUrl, 'utf8');
const urls = [...source.matchAll(/^\s*url(?:Fr)?:\s*['"]([^'"]+)['"],?\s*$/gm)]
  .map((match) => match[1]);
const uniqueUrls = [...new Set(urls)];

if (uniqueUrls.length === 0) {
  throw new Error('No URLs were found in lib/data/usefulLinks.ts');
}

const TIMEOUT_MS = 12_000;
const USER_AGENT = 'LattabUsefulLinksHealthCheck/1.0 (+https://lattab.vercel.app)';
const CONCURRENCY = 4;

async function request(url, method) {
  return fetch(url, {
    method,
    redirect: 'follow',
    signal: AbortSignal.timeout(TIMEOUT_MS),
    headers: {
      'user-agent': USER_AGENT,
      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      ...(method === 'GET' ? { range: 'bytes=0-0' } : {}),
    },
  });
}

async function checkUrl(url) {
  try {
    let response = await request(url, 'HEAD');

    // Some public portals do not implement HEAD or block it while allowing GET.
    if ([403, 405, 501].includes(response.status)) {
      response = await request(url, 'GET');
    }

    const finalUrl = response.url || url;
    const status = response.status;

    if (status >= 200 && status < 400) {
      return { url, status: 'OK', code: status, finalUrl };
    }

    if (status === 404 || status === 410) {
      return { url, status: 'BROKEN', code: status, finalUrl };
    }

    // Authentication walls, rate limits and server-side outages can be temporary
    // or can block automated probes; report them without declaring the link dead.
    return { url, status: 'CHECK', code: status, finalUrl };
  } catch (headError) {
    try {
      const response = await request(url, 'GET');
      const finalUrl = response.url || url;
      const status = response.status;

      if (status >= 200 && status < 400) {
        return { url, status: 'OK', code: status, finalUrl };
      }
      if (status === 404 || status === 410) {
        return { url, status: 'BROKEN', code: status, finalUrl };
      }
      return { url, status: 'CHECK', code: status, finalUrl };
    } catch (getError) {
      const message = getError instanceof Error ? getError.message : String(getError);
      return { url, status: 'CHECK', code: 'NETWORK', detail: message || String(headError) };
    }
  }
}

async function mapWithConcurrency(items, limit, mapper) {
  const results = [];
  let nextIndex = 0;

  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (nextIndex < items.length) {
      const index = nextIndex++;
      results[index] = await mapper(items[index]);
    }
  });

  await Promise.all(workers);
  return results;
}

console.log(`Checking ${uniqueUrls.length} unique useful-link destinations…\n`);
const results = await mapWithConcurrency(uniqueUrls, CONCURRENCY, checkUrl);

for (const result of results) {
  const suffix = result.code === 'NETWORK'
    ? result.detail
    : `HTTP ${result.code} → ${result.finalUrl}`;
  console.log(`[${result.status}] ${result.url} — ${suffix}`);
}

const broken = results.filter((result) => result.status === 'BROKEN');
const needsReview = results.filter((result) => result.status === 'CHECK');

console.log(`\nSummary: ${results.length - broken.length - needsReview.length} OK, ${needsReview.length} need review, ${broken.length} broken.`);

if (broken.length > 0) {
  console.error('\nBroken destinations (HTTP 404/410) were found. Update or remove them from the directory.');
  process.exitCode = 1;
}
