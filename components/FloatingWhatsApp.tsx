'use client';
import { MessageCircle } from 'lucide-react';
// Note: Lucide doesn't have a specific WhatsApp icon, but we can use a custom SVG or keep MessageCircle.
// Since the user asked for "WhatsApp icon", I will use a custom SVG for better representation.
const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/213562296981"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-110"
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
};

export default FloatingWhatsApp;
