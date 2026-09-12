'use client';

import React from 'react';
import { ServiceItem, SALON_INFO } from '@/lib/salon-data';
import { X, Clock, CheckCircle, MessageCircle, Calendar, Sparkles } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
}

export default function ServiceDetailModal({
  service,
  onClose,
  onBookService,
}: ServiceDetailModalProps) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-[#ebdcd8]">
        
        {/* Header Image */}
        <div className="relative h-56 sm:h-64 bg-[#1a1617]">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full bg-[#b82337] text-white mb-1.5">
              {service.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold leading-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#241e20]">
          
          {/* Price & Duration */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#faf7f5] border border-[#ebdcd8]">
            <div>
              <span className="text-xs text-[#78676a] font-medium block">Price Guide</span>
              <span className="text-xl font-bold text-[#b82337] font-serif-luxury">{service.price}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#4a3f42] bg-white px-3 py-1.5 rounded-lg border border-[#e2d7d2]">
              <Clock className="w-4 h-4 text-[#b82337]" />
              <span>{service.duration}</span>
            </div>
          </div>

          {/* Full Description */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#b82337] mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Service Overview</span>
            </h4>
            <p className="text-sm text-[#4a3f42] leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Included Features */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#241e20] mb-3">
              What&apos;s Included:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#332a2c] bg-[#FAF7F5] p-2.5 rounded-lg border border-[#f0e4e0]">
                  <CheckCircle className="w-4 h-4 text-[#b82337] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#ebdcd8]">
            <button
              onClick={() => {
                onClose();
                onBookService(service.title);
              }}
              className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#b82337] hover:bg-[#9e1b32] rounded-full transition-all shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment for {service.title}</span>
            </button>

            <a
              href={`https://wa.me/${SALON_INFO.whatsappClean}?text=Hello%20Ideal%20Beauty%20Salon,%20I%20am%20interested%20in%20the%20${encodeURIComponent(service.title)}%20service.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#1f663c] bg-[#e6f4ea] hover:bg-[#d2ebd9] border border-[#b7e1cd] rounded-full"
            >
              <MessageCircle className="w-4 h-4 text-[#25d366]" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
