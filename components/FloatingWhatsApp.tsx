'use client';

import React from 'react';
import { SALON_INFO } from '@/lib/salon-data';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <a
        href={`https://wa.me/${SALON_INFO.whatsappClean}?text=Hello%20Ideal%20Beauty%20Salon,%20I%20want%20to%20inquire%20about%20booking%20an%20appointment.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 p-3.5 sm:px-4 sm:py-3.5 rounded-full bg-[#25d366] hover:bg-[#20bd5a] text-white shadow-2xl transition-all duration-300 transform hover:scale-110"
        aria-label="Book on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          WhatsApp Booking
        </span>
      </a>
      <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-[#1a1617] text-white text-[11px] font-medium py-1 px-3 rounded-lg shadow-lg whitespace-nowrap border border-white/10">
        Chat with Desk • Instant Confirmation
      </div>
    </div>
  );
}
