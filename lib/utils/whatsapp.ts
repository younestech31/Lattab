export const buildWhatsAppUrl = ({ service, source }: { service: string, source: string }, lang: 'ar' | 'fr' = 'ar') => {
  const phone = "+213562296981";
  const message = lang === 'ar'
    ? `السلام عليكم، أود الاستفسار حول: ${service}. (المصدر: ${source})`
    : `Bonjour, je souhaite me renseigner concernant: ${service}. (Source: ${source})`;
  return `https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(message)}`;
};
