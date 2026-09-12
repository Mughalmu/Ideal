'use client';

import React from 'react';
import { X, Code2, Layers, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';

interface ElementorInfoModalProps {
  onClose: () => void;
}

export default function ElementorInfoModal({ onClose }: ElementorInfoModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 border border-[#ebdcd8] text-[#241e20]">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#78676a] hover:bg-[#faf7f5] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdf2f4] text-[#b82337] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CMS & Elementor Compatibility</span>
          </div>

          <h3 className="text-2xl font-serif-luxury font-bold text-[#241e20]">
            Elementor & WordPress Ready Architecture
          </h3>

          <p className="text-xs text-[#524548] leading-relaxed">
            This Ideal Beauty Salon application is structured with modular section components and a central JSON data model (<code className="bg-[#faf7f5] px-1 py-0.5 rounded text-[#b82337]">/lib/salon-data.ts</code>). You can edit text, pricing, services, and image URLs easily or convert these sections directly into Elementor template blocks.
          </p>

          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-2 p-2.5 rounded-xl bg-[#faf7f5] border border-[#ebdcd8]">
              <CheckCircle className="w-4 h-4 text-[#b82337] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#241e20]">Modular Section Layouts:</strong> Hero, About, Services Grid, Bridal Spotlight, Gallery Lightbox, Why Us, Reviews, Booking Form, and Contact are separated into standard clean components.
              </div>
            </div>

            <div className="flex items-start gap-2 p-2.5 rounded-xl bg-[#faf7f5] border border-[#ebdcd8]">
              <CheckCircle className="w-4 h-4 text-[#b82337] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#241e20]">Elementor Widget Mapping:</strong> Service cards map cleanly to Elementor Grid/Flexbox containers; gallery maps to Elementor Lightbox Gallery widget.
              </div>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 text-xs font-semibold text-white bg-[#b82337] hover:bg-[#9e1b32] rounded-full"
            >
              Got It
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
