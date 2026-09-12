'use client';

import React from 'react';
import { GalleryItem, SALON_INFO } from '@/lib/salon-data';
import { X, ChevronLeft, ChevronRight, MessageCircle, Calendar, Sparkles } from 'lucide-react';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
  onBookService: (serviceName?: string) => void;
}

export default function LightboxModal({
  item,
  items,
  onClose,
  onNavigate,
  onBookService,
}: LightboxModalProps) {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const prevItem = items[(currentIndex - 1 + items.length) % items.length];
  const nextItem = items[(currentIndex + 1) % items.length];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Arrows */}
      <button
        onClick={() => onNavigate(prevItem)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-[#b82337] transition-all"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => onNavigate(nextItem)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-[#b82337] transition-all"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Lightbox Content Container */}
      <div className="relative max-w-4xl w-full flex flex-col items-center max-h-[90vh]">
        
        {/* Image Frame */}
        <div className="relative rounded-2xl overflow-hidden max-h-[70vh] w-full flex items-center justify-center bg-black border border-white/10 shadow-2xl">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="max-h-[70vh] w-auto object-contain transition-all duration-300"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption & Quick Booking Toolbar */}
        <div className="mt-4 w-full bg-[#1a1617] p-5 rounded-xl border border-white/10 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-[#b82337] text-white">
                {item.category}
              </span>
              <h3 className="font-serif-luxury text-lg font-bold">{item.title}</h3>
            </div>
            <p className="text-xs text-[#d1c2bd] max-w-xl">{item.caption}</p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                onClose();
                onBookService(`Inquiry for Look: ${item.title}`);
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#b82337] hover:bg-[#9e1b32] rounded-full transition-all flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book This Look</span>
            </button>

            <a
              href={`https://wa.me/${SALON_INFO.whatsappClean}?text=Hello%20Ideal%20Beauty%20Salon,%20I%20am%20interested%20in%20getting%20a%20look%20similar%20to:%20${encodeURIComponent(item.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#e6f4ea] text-[#1f663c] hover:bg-[#c3e6cb] transition-colors"
              title="Inquire on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#25d366]" />
            </a>
          </div>
        </div>

        {/* Counter */}
        <div className="mt-2 text-xs text-[#a09093]">
          {currentIndex + 1} of {items.length}
        </div>

      </div>
    </div>
  );
}
