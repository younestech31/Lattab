import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import rehypeExternalLinks from 'rehype-external-links';

const schema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    a: [...(defaultSchema.attributes?.a ?? []), ['target', '_blank'], ['rel', 'noopener noreferrer']],
    '*': [...(defaultSchema.attributes?.['*'] ?? []), 'className', 'dir', 'lang'],
  },
  protocols: {
    ...defaultSchema.protocols,
    href: ['http', 'https', 'mailto', 'tel'],
    src: ['http', 'https'],
  },
};

export function stripFrontmatterAndLeadingH1(content: string): string {
  // 1. Strip YAML frontmatter
  let cleanContent = content.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n*/, '');
  
  // 2. Strip leading H1 (and any blank lines after it)
  cleanContent = cleanContent.replace(/^\s*#\s+[^\r\n]+\r?\n*/, '');
  
  return cleanContent.trim();
}

export async function parseMarkdown(content: string): Promise<string> {
  const cleanContent = stripFrontmatterAndLeadingH1(content);
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: false })
    .use(rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .use(rehypeSanitize, schema as any)
    .use(rehypeStringify)
    .process(cleanContent);
  return String(result);
}
