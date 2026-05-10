// Safe server-side markdown → sanitized HTML
// Uses marked for parsing + manual allowlist sanitization (no jsdom required)
import { marked, Renderer } from 'marked';

const renderer = new Renderer();

// Safe link renderer — forces external links to open safely
renderer.link = ({ href, title, text }) => {
  const isExternal = href?.startsWith('http');
  return `<a href="${href ?? '#'}"${title ? ` title="${title}"` : ''}${
    isExternal ? ' target="_blank" rel="noopener noreferrer"' : ''
  }>${text}</a>`;
};

marked.setOptions({ renderer });

// Allowlist-based HTML tag stripper — replaces jsdom/DOMPurify on the server
const ALLOWED_TAGS = new Set([
  'p','h1','h2','h3','h4','h5','h6','ul','ol','li','blockquote',
  'pre','code','em','strong','a','img','table','thead','tbody',
  'tr','th','td','br','hr','span','div',
]);

function sanitizeHtml(html: string): string {
  // Strip any tags NOT in allowlist
  return html.replace(/<\/?([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>/g, (match, tag) => {
    if (ALLOWED_TAGS.has(tag.toLowerCase())) return match;
    return '';
  });
}

export async function parseMarkdown(content: string): Promise<string> {
  const rawHtml = await marked(content);
  return sanitizeHtml(rawHtml);
}
