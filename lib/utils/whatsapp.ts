export const buildWhatsAppUrl = ({ service, source }: { service: string, source: string }) => {
  const phone = "+213562296981";
  const message = `السلام عليكم، أود الاستفسار حول: ${service}. (المصدر: ${source})`;
  return `https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(message)}`;
};
