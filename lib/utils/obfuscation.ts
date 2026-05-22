/** Encodes a string into HTML entities to combat naive regex scrapers */
export function encodeToHtmlEntities(str: string): string {
  return str.split('').map(char => `&#${char.charCodeAt(0)};`).join('');
}
