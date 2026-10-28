import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    'Hello Utsav Cleaners! I would like to inquire about laundry pickup & pricing.'
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-lg flex items-center gap-2 group transition-all duration-300 hover:scale-110"
      title="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold tracking-wide uppercase pr-1">
        WhatsApp Chat
      </span>
    </a>
  );
};
