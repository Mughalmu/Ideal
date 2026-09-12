'use client';

import React from 'react';
import { BRIDAL_SPOTLIGHT_DATA, SALON_INFO } from '@/lib/salon-data';
import { Sparkles, Calendar, CheckCircle2, Crown, MessageCircle, Heart } from 'lucide-react';

interface BridalSpotlightProps {
  onOpenBooking: (serviceName?: string) => void;
}

export default function BridalSpotlight({ onOpenBooking }: BridalSpotlightProps) {
  return (
    <section id="bridal" className="py-20 md:py-28 bg-gradient-to-b from-[#FAF7F5] via-[#F5EAE7] to-[#FAF7F5] relative overflow-hidden border-y border-[#ebdcd8]">
      
      {/* Background accents */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#b82337]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#f8d7da]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Large Luxury Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-[#1a1617] aspect-[4/5]">
              <img
                src={BRIDAL_SPOTLIGHT_DATA.imageUrl}
                alt="Bridal Transformations by Kiran Shakir"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Overlay Badge */}
              <div className="absolute top-6 left-6 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#b82337] text-xs font-bold tracking-wider uppercase shadow-md">
                <Crown className="w-4 h-4 text-[#ffd700]" />
                <span>Bridal Masterclass</span>
              </div>

              {/* Bottom Quote Banner */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#ebdcd8] shadow-lg text-[#241e20]">
                <p className="font-serif-luxury italic text-sm text-[#4a3f42]">
                  &quot;Every bride deserves to look like royalty on her wedding day. My mission is to enhance your natural beauty with timeless grace.&quot;
                </p>
                <div className="mt-2 text-xs font-bold text-[#b82337] flex items-center justify-between">
                  <span>— Kiran Shakir, Lead Artist</span>
                  <div className="flex text-[#ffd700]">
                    <Heart className="w-4 h-4 fill-current text-[#b82337]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fdf2f4] text-[#b82337] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bespoke Bridal Packages</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-[#241e20] leading-tight">
              {BRIDAL_SPOTLIGHT_DATA.title}
            </h2>

            <p className="text-sm sm:text-base text-[#524548] leading-relaxed">
              {BRIDAL_SPOTLIGHT_DATA.description}
            </p>

            {/* Perks List */}
            <div className="space-y-3 pt-2 text-left">
              {BRIDAL_SPOTLIGHT_DATA.perks.map((perk, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/90 border border-[#ebdcd8] shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-[#fdf2f4] text-[#b82337] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#332a2c]">{perk}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => onOpenBooking("Bridal Makeup")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold text-white bg-[#b82337] hover:bg-[#9e1b32] rounded-full transition-all shadow-lg shadow-[#b82337]/25 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-4.5 h-4.5" />
                <span>Book Bridal Appointment</span>
              </button>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappClean}?text=Hello%20Ideal%20Beauty%20Salon,%20I%20am%20inquiring%20about%20Bridal%20Makeup%20availability%20for%20my%20wedding%20date.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-[#1f663c] bg-[#e6f4ea] hover:bg-[#d2ebd9] border border-[#b7e1cd] rounded-full transition-all"
              >
                <MessageCircle className="w-4.5 h-4.5 text-[#25d366]" />
                <span>Bridal WhatsApp Inquiry</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
