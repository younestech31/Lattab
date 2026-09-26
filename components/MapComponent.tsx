'use client';

export default function MapComponent() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.938810222046!2d-0.5931358!3d35.7277124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e63c19cea6045%3A0x8f3a2767975898bd!2sNOTAIRE%20LATTAB%20MOHAMED!5e0!3m2!1sar!2sdz!4v1712698680000!5m2!1sar!2sdz"
      width="100%"
      height="100%"
      style={{ border: 0, borderRadius: '0.75rem' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="موقع ديوان التوثيق"
    />
  );
}
