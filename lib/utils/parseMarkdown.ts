// Safe server-side markdown → sanitized HTML
// Uses marked for parsing + strict allowlist sanitization (tags + attributes)
import { marked, Renderer } from 'marked';

const renderer = new Renderer();

renderer.link = ({ href, title, text }: any) => {
  const safeSrc = href && !href.startsWith('javascript:') && !href.startsWith('data:') ? href : '#';
  const isExternal = safeSrc.startsWith('http');
  return `<a href="${safeSrc}"${title ? ` title="${title}"` : ''}${
    isExternal ? ' target="_blank" rel="noopener noreferrer"' : ''
  }>${text}</a>`;
};

marked.setOptions({ renderer });

const ALLOWED_TAGS = new Set([
  'p','h1','h2','h3','h4','h5','h6','ul','ol','li','blockquote',
  'pre','code','em','strong','a','img','table','thead','tbody',
  'tr','th','td','br','hr','span','div',
]);

// Per-tag allowed attributes
const ALLOWED_ATTRS: Record<string, Set<string>> = {
  a:   new Set(['href', 'title', 'target', 'rel']),
  img: new Set(['src', 'alt', 'title', 'width', 'height', 'loading']),
  th:  new Set(['scope', 'colspan', 'rowspan']),
  td:  new Set(['colspan', 'rowspan']),
  '*': new Set(['class', 'id', 'dir', 'lang']), // global attrs allowed on any tag
};

const UNSAFE_PROTOCOLS = /^(javascript|data|vbscript):/i;

function sanitizeAttrs(tag: string, attrsString: string): string {
  const allowed = new Set([
    ...(ALLOWED_ATTRS[tag] ?? []),
    ...(ALLOWED_ATTRS['*'] ?? []),
  ]);
  // Match key="value" or key='value' or key=value or standalone key
  return attrsString.replace(
    /\s([a-zA-Z][a-zA-Z0-9-]*)(?:=(?:"([^"]*)"|'([^']*)'|([^\s>]*)))?/g,
    (match, attrName, dq, sq, uq) => {
      if (!allowed.has(attrName.toLowerCase())) return '';
      const val = dq ?? sq ?? uq ?? '';
      if (['href', 'src', 'action'].includes(attrName.toLowerCase()) && UNSAFE_PROTOCOLS.test(val)) return '';
      return match;
    }
  );
}

function sanitizeHtml(html: string): string {
  return html.replace(/<(\/?)([a-zA-Z][a-zA-Z0-9]*)(\s[^>]*)?(\/?)>/g, (match, closing, tag, attrs, selfClose) => {
    const lowerTag = tag.toLowerCase();
    if (!ALLOWED_TAGS.has(lowerTag)) return '';
    if (closing) return `</${lowerTag}>`;
    const safeAttrs = attrs ? sanitizeAttrs(lowerTag, attrs) : '';
    return `<${lowerTag}${safeAttrs}${selfClose}>`;
  });
}

export async function parseMarkdown(content: string): Promise<string> {
  const rawHtml = await marked(content);
  return sanitizeHtml(rawHtml);
}
